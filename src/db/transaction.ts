import { pgTable, text, timestamp, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { user } from "./user";
import { company } from "./company";

export const transaction = pgTable("transaction", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  amount: integer("amount").notNull(),
  from: text("from").references(() => user.id, {
    onDelete: "cascade",
  }),
  to: text("to").references(() => company.id, {
    onDelete: "cascade",
  }),
  status: text("status").notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).default(new Date()),
  updatedAt: timestamp("updatedAt", { mode: "date" }),
});

export const transactionRelations = relations(transaction, ({ one }) => ({
  from: one(company, {
    fields: [transaction.from],
    references: [company.id],
  }),
  to: one(user, {
    fields: [transaction.to],
    references: [user.id],
  }),
}));

export type Transaction = typeof transaction.$inferSelect;
export type CreateTransaction = typeof transaction.$inferInsert;

export const CreateTransactionSchema = createInsertSchema(transaction);