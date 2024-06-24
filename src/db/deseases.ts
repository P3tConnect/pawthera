import { pgTable, text } from "drizzle-orm/pg-core";
import { user } from "./user";
import { relations } from "drizzle-orm";
import { petsDeseases } from "./petsDeseases";

export const deseases = pgTable("deseases", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    description: text("description").notNull(),
    ownerId: text("ownerId").references(() => user.id, { onDelete: "cascade" }),
});

export const deseasesRelations = relations(deseases, ({ one, many }) => ({
    pets: many(petsDeseases),
    owner: one(user, {
        fields: [deseases.ownerId],
        references: [user.id],
    }),
}));
