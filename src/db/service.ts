import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { company } from "./company";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { proSession } from "./pro_session";

export const service = pgTable("service", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  image: text("image"),
  name: text("name"),
  description: text("description"),
  price: integer("price"),
  companyId: text("proId").references(() => company.id, {
    onDelete: "cascade",
  }),
  duration: integer("duration"), // in minutes
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }),
});

export const servicesRelations = relations(service, ({ one, many }) => ({
  company: one(company, {
    fields: [service.companyId],
    references: [company.id],
  }),
  sessions: many(proSession),
}));

export type Service = typeof service.$inferSelect;
export type CreateService = typeof service.$inferInsert;

export const CreateServiceSchema = createInsertSchema(service);
