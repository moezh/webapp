console.log("> Every Minute");
import { sql } from "bun";
const response = await sql`SELECT NOW();`;
console.log("Postgres:", response[0].now);
