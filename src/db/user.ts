import { relations } from "drizzle-orm";
import { boolean, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { pets } from "./pets";
import { usersJobs } from "./usersJobs";
import { proSession } from "./pro_session";
import { usersNewsletters } from "./usersNewsletter";
import { allergies } from "./allergies";
import { deseases } from "./deseases";
import { intolerences } from "./intolerences";
import { session } from "./session";
import { account } from "./account";
import { member } from "./member";
import { notification } from "./notifications";
import { projectsInvitees } from "./projectsInvitees";
import { invitation } from "./invitation";
import { createInsertSchema } from "drizzle-zod";

export const sexeType = pgEnum("sexe_type", [
  "MALE",
  "FEMALE",
  "OTHERS",
]);

export const user = pgTable("users", {
  id: text("id").primaryKey(),
  firstname: text("firstname").notNull(),
  lastname: text("lastname").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").notNull(),
  image: text("image"),
  phoneNumber: text("phoneNumber").notNull().unique(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  zipCode: text("zipCode").notNull(),
  country: text("country").notNull(),
  birthday: timestamp("birthday", { mode: "date" }),
  sexe: sexeType("sexe").notNull(),
  smsNotification: boolean("smsNotification").notNull(),
  emailNotification: boolean("emailNotification").notNull(),
  createdAt: timestamp("createdAt").notNull(),
  updatedAt: timestamp("updatedAt").notNull(),
  twoFactorEnabled: boolean("twoFactorEnabled"),
  isPro: boolean("isPro").notNull(),
  onBoardingComplete: boolean("onBoardingComplete").notNull(),
  stripeId: text("stripeId"),
});

export const userRelations = relations(user, ({ one, many }) => ({
  pets: many(pets),
  jobs: many(usersJobs),
  proSessions: many(proSession),
  newsletter: many(usersNewsletters),
  allergies: many(allergies),
  deseases: many(deseases),
  intolerences: many(intolerences),
  sessions: many(session),
  accounts: many(account),
  memberships: many(member),
  notifications: many(notification),
  projects: many(projectsInvitees),
  invitations: many(invitation),
}));

export const CreateUserSchema = createInsertSchema(user);