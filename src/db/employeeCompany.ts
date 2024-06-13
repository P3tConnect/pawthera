import { pgTable, primaryKey, text } from "drizzle-orm/pg-core";
import { user } from "./user";
import { company } from "./company";
import { relations } from "drizzle-orm";

export const employeeCompany = pgTable(
  "employee_company",
  {
    employeeId: text("employeeId")
      .references(() => user.id, { onDelete: "cascade" })
      .notNull(),
    companyId: text("companyId")
      .references(() => company.id, { onDelete: "cascade" })
      .notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.companyId, t.employeeId] }),
  }),
);

export const employeeCompanyRelations = relations(
  employeeCompany,
  ({ many, one }) => ({}),
);