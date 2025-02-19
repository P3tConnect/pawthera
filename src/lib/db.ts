import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import * as schema from "../db";

const pool = new Pool({ connectionString: process.env.DATABASE_URL ?? "" });
export const db = drizzle({ client: pool, schema: schema });
