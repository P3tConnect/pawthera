import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/*.ts",
  out: "./src/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://pawthera_db_owner:P8OQM9LHxlUp@ep-misty-firefly-a2bm78th.eu-central-1.aws.neon.tech/pawthera_db?sslmode=require",
  },
});
