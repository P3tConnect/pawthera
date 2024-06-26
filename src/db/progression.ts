import { relations } from "drizzle-orm";
import { boolean, pgTable, text } from "drizzle-orm/pg-core";
import { company } from "./company";
import { createInsertSchema } from "drizzle-zod";

export const progression = pgTable("progression", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  docs: boolean("docs").default(false),
  cancelPolicies: boolean("cancelPolicies").default(false),
  reminders: boolean("reminders").default(false),
  services: boolean("services").default(false),
});

export const progressionRelations = relations(progression, ({ one }) => ({
  company: one(company),
}));

export type Progression = typeof progression.$inferSelect;
export type CreateProgression = typeof progression.$inferInsert;

export const CreateProgressionSchema = createInsertSchema(progression);
