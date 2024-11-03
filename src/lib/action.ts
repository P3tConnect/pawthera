import { ZSAError, createServerAction, createServerActionProcedure } from "zsa";

import { companyMembership } from "../db/company_membership";
import { currentUser } from "./current-user";
import { db } from "./db";
import { eq } from "drizzle-orm";

export const action = createServerAction();

const authedProcedure = createServerActionProcedure().handler(async () => {
  try {
    const user = await currentUser();

    if (!user) {
      throw new ZSAError("NOT_AUTHORIZED", "You must be logged in !");
    }

    return {
      user,
    };
  } catch (err) {
    throw new ZSAError("NOT_AUTHORIZED", "You must be logged in !");
  }
});

export const authedAction = authedProcedure.createServerAction();

const clientProcedure = createServerActionProcedure(authedProcedure).handler(
  async ({ ctx }) => {
    if (ctx.user) {
      const data = await db.query.companyMembership.findFirst({
        where: eq(companyMembership.userId, ctx.user.id),
      });

      if (!data) {
        return {
          user: ctx.user,
        };
      }

      throw new ZSAError(
        "NOT_AUTHORIZED",
        "You need to be registered to perform this action",
      );
    }

    throw new ZSAError(
      "NOT_AUTHORIZED",
      "You need to be registered to perform this action",
    );
  },
);

export const clientAction = clientProcedure.createServerAction();

const memberProcedure = createServerActionProcedure(authedProcedure).handler(
  async ({ ctx }) => {
    if (ctx.user) {
      const data = await db.query.companyMembership.findFirst({
        where: eq(companyMembership.userId, ctx.user.id),
        with: {
          company: true,
        },
      });

      if (!data) {
        throw new ZSAError(
          "NOT_AUTHORIZED",
          "You need to be in a company to perform this action",
        );
      }

      if (data.role == "MEMBER") {
        return {
          user: ctx.user,
          company: data.company,
        };
      }
    }

    throw new ZSAError(
      "NOT_AUTHORIZED",
      "You need to be in a company to perform this action",
    );
  },
);

export const memberAction = memberProcedure.createServerAction();

export const ownerProcedure = createServerActionProcedure(
  authedProcedure,
).handler(async ({ ctx }) => {
  if (ctx.user) {
    const data = await db.query.companyMembership.findFirst({
      where: eq(companyMembership.userId, ctx.user.id),
      with: {
        company: true,
      },
    });

    if (!data) {
      throw new ZSAError(
        "NOT_AUTHORIZED",
        "You need to be in a company to perform this action",
      );
    }

    if (data.role == "OWNER") {
      return {
        user: ctx.user,
        company: data.company,
      };
    }
  }

  throw new ZSAError(
    "NOT_AUTHORIZED",
    "You need to be registered to perform this action",
  );
});

export const ownerAction = ownerProcedure.createServerAction();
