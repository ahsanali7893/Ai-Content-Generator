/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:GaCfK1M3UBwW@ep-dry-sun-a5j0sxux.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
};
