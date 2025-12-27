import { randomBytes } from "crypto";

type Environment = "development" | "production";

const env = process.argv[2] as Environment;

if (!env || !["development", "production"].includes(env)) {
  console.error("Usage: bun run env:<dev|prod>");
  process.exit(1);
}

const existingEnv = await Bun.file(".env")
  .text()
  .catch(() => "");

const dbPasswordMatch = existingEnv.match(/^DB_PASSWORD=(.+)$/m);
const dbPassword = dbPasswordMatch?.[1] ?? randomBytes(16).toString("hex");
const isCreated = !dbPasswordMatch;

const content =
  [`ENVIRONMENT=${env}`, `DB_PASSWORD=${dbPassword}`].join("\n") + "\n";

await Bun.write(".env", content);

console.log(".env", isCreated ? "created" : "updated");
