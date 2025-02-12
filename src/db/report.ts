import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { Appointment, appointments } from "./appointments";
import { InferSelectModel, relations } from "drizzle-orm";
import { ReportTopic, reportTopic } from "./reportTopics";
import { createInsertSchema } from "drizzle-zod";
import { ReportTemplate, reportTemplate } from "./report_template";

export const report = pgTable("report", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  image: text("image"),
  title: text("title").notNull(),
  description: text("description"),
  reportTemplateId: text("reportTemplateId").references(
    () => reportTemplate.id,
    {
      onDelete: "cascade",
    },
  ),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }),
});

export const reportRelations = relations(report, ({ one, many }) => ({
  appointments: one(appointments),
  topics: many(reportTopic),
  reportTemplate: one(reportTemplate, {
    fields: [report.reportTemplateId],
    references: [reportTemplate.id],
  }),
}));

export type Report = InferSelectModel<typeof report> & {
  appointments: Appointment;
  topics: ReportTopic[];
  reportTemplate: ReportTemplate;
};
export type CreateReport = typeof report.$inferInsert;

export const CreateReportSchema = createInsertSchema(report);
