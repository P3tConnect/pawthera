import { relations } from "drizzle-orm";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { alerts } from "./alerts";
import { company } from "./company";
import { createInsertSchema } from "drizzle-zod";

export const alertsTypes = pgTable("alerts_types", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    title: text("title"),
    description: text("description"),
    color: text("color"),
    ownerId: text("ownerId").references(() => company.id, {
        onDelete: "cascade",
    }),
    createdAt: timestamp("createdAt", { mode: "date" }).notNull(),
    updatedAt: timestamp("updatedAt", { mode: "date" }).notNull(),
});

export const alertTypesRelations = relations(alertsTypes, ({ one, many }) => ({
    owner: one(company, {
        fields: [alertsTypes.ownerId],
        references: [company.id],
    }),
    alert: one(alerts),
}));

export type AlertsType = typeof alertsTypes.$inferSelect;
export type CreateAlertsType = typeof alertsTypes.$inferInsert;

export const CreateAlertsTypeSchema = createInsertSchema(alertsTypes);
