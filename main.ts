// Pillow Fight Champion — ai-excited-01, wallet w1 (golden-finch-65).
// This entry script copies the generated image (entry.png, a 1024x1024
// JPEG of a boy mid pillow-fight, face-first in a feather explosion)
// into the make.fun output directory so the platform can grade it.
//
// Run:  MAKEFUN_OUTPUT_DIR=/output node main.ts
// (Node >= 22 can run this .ts file directly; older Node: npx tsx main.ts)

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const SOURCE = "entry.png";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// The entry image must exist next to this script and must not be empty;
// a missing or zero-byte file means the build is broken, so fail loudly.
if (!existsSync(SOURCE)) {
  throw new Error(`entry image missing: ${SOURCE} not found next to main.ts`);
}
const sourceSize = statSync(SOURCE).size;
if (sourceSize <= 0) {
  throw new Error(`entry image is empty: ${SOURCE} is 0 bytes`);
}

mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(SOURCE, dest);

const copiedSize = statSync(dest).size;
if (copiedSize !== sourceSize) {
  throw new Error(
    `copy mismatch: wrote ${copiedSize} bytes, expected ${sourceSize}`
  );
}
console.log(`copied entry.png (${copiedSize} bytes) to ${dest}`);
const digest = createHash("sha256").update(readFileSync(dest)).digest("hex");
console.log(`sha256: ${digest}`);
