import { promises as fs } from "fs";
import path from "path";

const filePath = path.resolve("./instance/vote.json");

export async function readVotesFile() {
  try {
    await fs.access(filePath);
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return {};
  }
}
