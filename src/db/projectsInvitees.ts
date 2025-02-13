import { InferSelectModel, relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { Project, project } from "./project";
import { createInsertSchema } from "drizzle-zod";
import { User, user } from "./user";

export const projectsInvitees = pgTable("projects_invitees", {
  userId: text("userId").references(() => user.id, { onDelete: "cascade" }),
  projectId: text("projectId").references(() => project.id, {
    onDelete: "cascade",
  }),
});

export const projectInviteesRelations = relations(
  projectsInvitees,
  ({ one }) => ({
    project: one(project, {
      fields: [projectsInvitees.projectId],
      references: [project.id],
    }),
    user: one(user, {
      fields: [projectsInvitees.userId],
      references: [user.id],
    }),
  }),
);

export type ProjectInvitee = InferSelectModel<typeof projectsInvitees> & {
  project: Project;
  user: User;
};
export type CreateProjectInvitee = typeof projectsInvitees.$inferInsert;

export const CreateProjectInviteeSchema = createInsertSchema(projectsInvitees);
