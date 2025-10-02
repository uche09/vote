import { promises as fs, existsSync as exists } from "fs";
import path from "path";

const filePath = path.resolve("./.instance/vote.json");

export default async function readVotesFile() {
  try {

    if (exists(filePath)) {
      await fs.access(filePath);
      const data = await fs.readFile(filePath, "utf-8");
      return JSON.parse(data);
    }

    return {}
  } catch (err) {
    console.error(err);
    return {};
  }
}
