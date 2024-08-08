import { relations } from "drizzle-orm";
import {
  boolean,
  date,
  pgEnum,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { pets } from "./pets";
import { employeeCompany } from "./employeeCompany";
import { ratings } from "./ratings";
import { projectsInvitees } from "./projectsInvitees";
import { allergies } from "./allergies";
import { intolerences } from "./intolerences";
import { createInsertSchema } from "drizzle-zod";
import { usersJobs } from "./usersJobs";
import { deseases } from "./deseases";
import { company } from "./company";
import { address } from "./addresses";
import { z } from "zod";
<<<<<<< HEAD
import { jobs } from "./jobs";
=======
import { transaction } from "./transactions";
>>>>>>> 3edf5f6b8a575016c5143e0bb98eb3a574c93d2f

export const plan = pgEnum("plan", ["BASIC", "PREMIUM", "ULTIMATE", "NONE"]);

export const PlanEnum = z.enum(plan.enumValues);

export const user = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique().notNull(),
  emailVerified: timestamp("emailVerified"),
  image: text("image"),
  phone: text("phone"),
  stripeId: text("stripeId"),
  addressId: text("address").references(() => address.id, {
    onDelete: "cascade",
  }),
  plan: plan("plan").default("NONE"),
  isPro: boolean("isPro").default(false),
  isAdmin: boolean("isAdmin").default(false),
  createdAt: timestamp("createdAt").default(new Date()),
  updatedAt: timestamp("updateAt"),
});

export const userRelations = relations(user, ({ one, many }) => ({
  companiesOwner: many(company),
  pets: many(pets),
  employeeOf: many(employeeCompany),
  ratingsAuthor: many(ratings),
  projectInvitees: many(projectsInvitees),
  allergies: many(allergies),
  intolerences: many(intolerences),
  usersJobs: many(usersJobs),
  deseases: many(deseases),
  address: one(address, {
    fields: [user.addressId],
    references: [address.id],
  }),
<<<<<<< HEAD
  jobs: many(jobs),
=======
  transactions: many(transaction),
>>>>>>> 3edf5f6b8a575016c5143e0bb98eb3a574c93d2f
}));

export type User = typeof user.$inferSelect;
export type CreateUser = typeof user.$inferInsert;

export const CreateUserSchema = createInsertSchema(user);
