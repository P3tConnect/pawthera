"use server";

import { z } from "zod";
import { CreateNewsletterSchema, newsletter } from "../db";
import { clientAction, ownerAction } from "../lib/action";
import { db } from "../lib";
import { eq } from "drizzle-orm";
import { ZSAError } from "zsa";

export const getNewsletters = clientAction.handler(async () => {});

// export const createNewsletter = ownerAction
//   .input(CreateNewsletterSchema)
//   .handler(async ({ input }) => {
//     const data = await db
//       .insert(newsletter)
//       .values(input)
//       .returning()
//       .execute();

//     if (!data) {
//       throw new ZSAError("ERROR", "Newsletter not created");
//     }

//     return data;
//   });

// export const updateNewsletter = ownerAction
//   .input(CreateNewsletterSchema)
//   .handler(async ({ input }) => {
//     const data = await db
//       .update(newsletter)
//       .set(input)
//       .where(eq(newsletter.id, input.id as string))
//       .returning()
//       .execute();

//     if (!data) {
//       throw new ZSAError("ERROR", "Newsletter not updated");
//     }

//     return data;
//   });

// export const deleteNewsletter = ownerAction
//   .input(z.string())
//   .handler(async ({ input }) => {
//     const data = await db
//       .delete(newsletter)
//       .where(eq(newsletter.id, input))
//       .returning()
//       .execute();

//     if (!data) {
//       throw new ZSAError("ERROR", "Newsletter not deleted");
//     }
//   });
