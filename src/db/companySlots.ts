import {
  date,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { sessionType } from "./pro_session";
import { company } from "./company";
import { relations } from "drizzle-orm";

export const companyDisponibilities = pgTable(
  "company_disponibilities",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    beginAt: date("beginAt").notNull(),
    endAt: date("endAt").notNull(),
    sessionType: sessionType("sessionType").default("oneToOne"),
    companyId: text("companyId").references(() => company.id, {
      onDelete: "cascade",
    }),
    createdAt: timestamp("createdAt", { mode: "date" }).default(new Date()),
    updatedAt: timestamp("updatedAt", { mode: "date" }),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.companyId] }),
  }),
);

export const companyDisponibilitiesRelations = relations(
  companyDisponibilities,
  ({ one }) => ({
    company: one(company, {
      fields: [companyDisponibilities.companyId],
      references: [company.id],
    }),
  }),
);
