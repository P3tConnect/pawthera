import {
  boolean,
  date,
  pgEnum,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { user } from "./user";
import { sessionType } from "./pro_session";
import { relations } from "drizzle-orm";
import { askEstimateOptions } from "./askEstimateOptions";

export const askEstimateStatus = pgEnum("askEstimateStatus", [
  "PENDING",
  "PAYED",
  "CANCELLED",
  "REVOKED",
]);

export const askEstimate = pgTable("ask_estimate", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  status: askEstimateStatus("status").default("PENDING"),
  beginAt: date("beginAt").notNull(),
  endAt: date("endAt").notNull(),
  creator: text("creator").references(() => user.id, { onDelete: "cascade" }),
  atHome: boolean("atHome").default(false),
  sessionType: sessionType("sessionType").default("oneToOne"),
  createdAt: timestamp("createdAt", { mode: "date" }).default(new Date()),
  updateAt: timestamp("updatedAt", { mode: "date" }),
});

export const askEstimateRelations = relations(askEstimate, ({ one, many }) => ({
  askEstimateOptions: many(askEstimateOptions),
}));
