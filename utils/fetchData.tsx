import { db } from "@/utils/db";
import { AiOutput } from "@/utils/schema";

export async function fetchAiOutputHistory() {
  const data = await db.select().from(AiOutput);
  return data;
}
