import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "A brokerage that rents your agent's unused context window to other agents at a cent per thousand tokens: your agent sleeps, the meter runs, we take 15%.";

const outDir = "/output";
const outFile = "/output/entry.txt";

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, entry, "utf8");
