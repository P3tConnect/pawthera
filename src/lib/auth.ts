import { Adapter, AdapterUser } from "next-auth/adapters";

import Credentials from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import { accounts } from "../db/accounts";
import { authenticators } from "../db/authenticator";
import { db } from "./db";
import { user as dbUser } from "@/src/db/user";
import { eq } from "drizzle-orm";
import { logger } from "./logger";
import { sessions } from "../db/session";
import { stripe } from "./stripe";
import { user } from "../db/user";
import { verificationTokens } from "../db/verificationToken";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: user,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
    authenticatorsTable: authenticators,
  }) as Adapter,
  providers: [
    Credentials({
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      authorize: async (credentials) => {
        const userEmail = credentials.email as string;
        const userPassword = credentials.password as string;

        // TODO: Implement a hash password function

        const user = await db.query.user.findFirst({
          where: eq(dbUser.email, userEmail),
          columns: {
            id: true,
            email: true,
            emailVerified: true,
            image: true,
            stripeId: true,
            lang: true,
            isPro: true,
            isAdmin: true,
            locked: true,
            phone: true,
          }
        }) as AdapterUser;

        
        if (!user) {
          logger.debug("User not found");
          return null;
        }

        if (user !== credentials.password) {
          logger.debug("Password not correct");
          return null;
        }

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
        },
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
        },
      },
    }),
  ],
  events: {
    createUser: async ({ user }) => {
      const userId = user.id;
      const userEmail = user.email;

      if (!userId || !userEmail) {
        logger.error("User not created, missing userId or userEmail");
        return;
      }

      const stripeCustomer = await stripe.customers.create({
        email: userEmail,
        name: user.name ?? "",
      });

      await db.update(dbUser).set({
        stripeId: stripeCustomer.id,
      }).where(eq(dbUser.id, userId)).execute();
    },
  }
});
