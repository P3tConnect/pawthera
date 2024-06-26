import {
  boolean,
  date,
  pgEnum,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { company } from "./company";
import { relations } from "drizzle-orm";
import { estimate } from "./estimate";
import { invoice } from "./invoice";
import { sessionOptions } from "./sessionOptions";
import { pets } from "./pets";
import { report } from "./report";
import { observation } from "./observation";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const sessionType = pgEnum("session_type", ["oneToOne", "multiple"]);

export const sessionStatusType = pgEnum("session_status_type", [
  "PAYED",
  "IN PROGRESS",
  "WAITING FROM CLIENT",
  "WAITING FOR REFUND",
  "REFUNDED",
  "CANCELED",
  "POSTPAWNED",
]);

export const proSession = pgTable("pro_session", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  proId: text("proId").references(() => company.id, { onDelete: "cascade" }),
  clientId: text("clientId").references(() => pets.id, {
    onDelete: "cascade",
  }),
  reportId: text("reportId").references(() => report.id, {
    onDelete: "cascade",
  }),
  observationId: text("observationId").references(() => observation.id, {
    onDelete: "cascade",
  }),
  beginAt: date("beginAt").notNull(),
  endAt: date("endAt").notNull(),
  status: sessionStatusType("status").default("IN PROGRESS").notNull(),
  atHome: boolean("atHome").default(false).notNull(),
  type: sessionType("type").default("oneToOne").notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).default(new Date()),
  updated: timestamp("updatedAt", { mode: "date" }),
});

export const proSessionRelations = relations(proSession, ({ one, many }) => ({
  estimate: one(estimate),
  invoice: one(invoice),
  options: many(sessionOptions),
  pet: one(pets, {
    fields: [proSession.clientId],
    references: [pets.id],
  }),
  report: one(report, {
    fields: [proSession.reportId],
    references: [report.id],
  }),
  observation: one(observation, {
    fields: [proSession.observationId],
    references: [observation.id],
  }),
}));

export type ProSession = typeof proSession.$inferSelect;
export type CreateProSession = typeof proSession.$inferInsert;
export const SessionTypeEnum = z.enum(sessionType.enumValues);
export const SessionStatusTypeEnum = z.enum(sessionStatusType.enumValues);

export const CreateProSessionSchema = createInsertSchema(proSession);
