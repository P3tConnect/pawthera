import {
    integer,
    pgEnum,
    pgTable,
    serial,
    text,
    timestamp,
} from "drizzle-orm/pg-core";
import { user } from "./user";
import { relations } from "drizzle-orm";
import { proSession } from "./pro_session";
import { createInsertSchema } from "drizzle-zod";
import { petsDeseases } from "./petsDeseases";
import { allergies } from "./allergies";
import { intolerences } from "./intolerences";

export const petType = pgEnum("petType", [
    "Dog",
    "Cat",
    "Bird",
    "Horse",
    "NAC",
]);

export const pets = pgTable("pets", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    type: petType("type").default("Dog").notNull(),
    weight: integer("weight"),
    height: integer("height"),
    description: text("description"),
    ownerId: text("ownerId").references(() => user.id, { onDelete: "cascade" }),
    nacType: text("nacType"),
    birthDate: timestamp("birthDate", { mode: "date" }).notNull(),
    createdAt: timestamp("createdAt", { mode: "date" }).notNull(),
    updatedAt: timestamp("updatedAt"),
});

export const petsRelations = relations(pets, ({ one, many }) => ({
    owner: one(user, {
        fields: [pets.ownerId],
        references: [user.id],
    }),
    sessions: many(proSession),
    deseases: many(petsDeseases),
    allergies: many(allergies),
    intolerences: many(intolerences),
}));

export type Pet = typeof pets.$inferSelect;
export type CreatePet = typeof pets.$inferInsert;

export const CreatePetSchema = createInsertSchema(pets);
