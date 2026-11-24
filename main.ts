import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
// Angle: a real-looking error code (ERR_BREAD_JAM) over a universal human
// failure, the crumb tray nobody ever empties, with the toaster holding
// the grudge and refusing to work until the owner confesses.
const line =
  "ERR_BREAD_JAM: Crumb tray is full. Toasting paused until you admit you never empty me.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log("entry.txt written");
