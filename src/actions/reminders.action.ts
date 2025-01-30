import { z } from "zod";
import { db, ownerAction, ActionError } from "../lib";
import { CreateReminderSchema, reminder } from "../db/reminder";
import { eq } from "drizzle-orm";
import { SQL } from "drizzle-orm";

// export const getReminders = ownerAction.handler(async ({ ctx }) => {
//   if (!ctx?.organization?.id) {
//     throw new ZSAError("ERROR", "Organization not found");
//   }

//   const data = await db.query.reminder.findMany({
//     where: eq(reminder.organizationId, ctx.organization.id),
//     orderBy: (fields: typeof reminder) => fields.dueDate as SQL<unknown>,
//   });

//   if (!data) {
//     throw new ZSAError("ERROR", "Reminders not found");
//   }

//   return data;
// });

// export const createReminder = ownerAction
//   .input(CreateReminderSchema)
//   .handler(async ({ input, ctx }) => {
//     if (!ctx?.organization?.id) {
//       throw new ZSAError("ERROR", "Organization not found");
//     }

//     const data = await db
//       .insert(reminder)
//       .values({
//         ...input,
//         organizationId: ctx.organization.id,
//       })
//       .returning()
//       .execute();

//     if (!data) {
//       throw new ZSAError("ERROR", "Reminder not created");
//     }

//     return data;
//   });

export const updateReminder = ownerAction
  .schema(CreateReminderSchema)
  .action(async ({ parsedInput }) => {
    const data = await db
      .update(reminder)
      .set(parsedInput)
      .where(eq(reminder.id, parsedInput.id as string))
      .returning()
      .execute();

    if (!data) {
      throw new ActionError("Reminder not updated");
    }

    return data;
  });

export const deleteReminder = ownerAction
  .schema(z.string())
  .action(async ({ parsedInput }) => {
    const data = await db
      .delete(reminder)
      .where(eq(reminder.id, parsedInput))
      .returning()
      .execute();

    if (!data) {
      throw new ActionError("Reminder not deleted");
    }

    return data;
  });
