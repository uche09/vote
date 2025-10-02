import { promises as fs, existsSync as exists } from "fs";
import path from "path";

export async function writeVotesFile(data) {
  try {
    const dirPath = path.join(process.cwd(), ".instance");
    const filePath = path.join(dirPath, "vote.json");

    if (!exists(filePath)) {
      await fs.mkdir(dirPath, { recursive: true });
    }

    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");

  } catch (err) {
    console.error("Error writing votes file:", err);
  }
}

