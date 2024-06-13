import { pgTable, primaryKey, text } from "drizzle-orm/pg-core";
import { estimate } from "./estimate";
import { options } from "./options";
import { relations } from "drizzle-orm";

export const estimateOptions = pgTable(
  "estimate_options",
  {
    estimateId: text("estimateId").references(() => estimate.id, {
      onDelete: "cascade",
    }),
    optionId: text("optionId").references(() => options.id, {
      onDelete: "cascade",
    }),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.estimateId, t.optionId] }),
  }),
);

export const estimateOptionsRelations = relations(
  estimateOptions,
  ({ many }) => ({}),
);