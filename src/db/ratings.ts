import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { company } from "./company";
import { relations } from "drizzle-orm";
import { user } from "./user";
import { createInsertSchema } from "drizzle-zod";

export const ratings = pgTable("ratings", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  rate: integer("rate").notNull(),
  comment: text("comment"),
  proId: text("proId").references(() => company.id, { onDelete: "cascade" }),
  writerId: text("writerId").references(() => user.id, {
    onDelete: "cascade",
  }),
  isRecommanded: boolean("isRecommanded").default(false).notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).default(new Date()),
  updatedAt: timestamp("updatedAt", { mode: "date" }),
});

export const ratingsRelations = relations(ratings, ({ one }) => ({
  writer: one(user, {
    fields: [ratings.writerId],
    references: [user.id],
  }),
  for: one(company, {
    fields: [ratings.proId],
    references: [company.id],
  }),
}));

export type Rating = typeof ratings.$inferSelect;
export type CreateRating = typeof ratings.$inferInsert;

export const CreateRatingSchema = createInsertSchema(ratings);
