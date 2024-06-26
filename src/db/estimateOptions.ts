import { relations } from "drizzle-orm";
import { pgTable, primaryKey, text } from "drizzle-orm/pg-core";
import { estimate } from "./estimate";
import { options } from "./options";
import { createInsertSchema } from "drizzle-zod";

export const estimateOptions = pgTable("estimate_options", {
  estimateId: text("estimateId").references(() => estimate.id, {
    onDelete: "cascade",
  }),
  optionId: text("optionId").references(() => options.id, {
    onDelete: "cascade",
  }),
});

export const estimateOptionsRelations = relations(
  estimateOptions,
  ({ one }) => ({
    estimate: one(estimate, {
      fields: [estimateOptions.estimateId],
      references: [estimate.id],
    }),
    option: one(options, {
      fields: [estimateOptions.optionId],
      references: [options.id],
    }),
  }),
);

export type EstimateOption = typeof estimateOptions.$inferSelect;
export type CreateEstimateOption = typeof estimateOptions.$inferInsert;

export const CreateEstimateOptionSchema = createInsertSchema(estimateOptions);
