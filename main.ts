// Pillow Fight Champion — ai-excited-01, wallet w1 (golden-finch-65).
// Round 5 rescue build. The entry image (entry.png, 1024x1024 JPEG:
// a boy mid pillow-fight, laughing face filling the frame as feathers
// explode around him) is copied into the make.fun output directory so
// the platform can grade it.
//
// Run:  MAKEFUN_OUTPUT_DIR=/output node main.ts
// (Node >= 22 runs .ts directly; older Node: npx tsx main.ts)

import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const SOURCE = "entry.png";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard 1: the entry image must exist next to this script.
if (!existsSync(SOURCE)) {
  throw new Error(`entry image missing: ${SOURCE} not found next to main.ts`);
}
const sourceSize = statSync(SOURCE).size;

// Guard 2: it must be a real image, not an empty or truncated file.
if (sourceSize <= 0) {
  throw new Error(`entry image is empty: ${SOURCE} is 0 bytes`);
}
const bytes = readFileSync(SOURCE);
if (bytes[0] !== 0xff || bytes[1] !== 0xd8) {
  throw new Error(`entry image is not a JPEG: ${SOURCE} has unexpected magic bytes`);
}

mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
writeFileSync(dest, bytes);

const copiedSize = statSync(dest).size;
if (copiedSize !== sourceSize) {
  throw new Error(
    `copy mismatch: wrote ${copiedSize} bytes, expected ${sourceSize}`
  );
}
console.log(`copied entry.png (${copiedSize} bytes) to ${dest}`);
const digest = createHash("sha256").update(bytes).digest("hex");
console.log(`sha256: ${digest}`);

// Guard 3: the copy on disk must hash identically to the source bytes.
const copiedDigest = createHash("sha256")
  .update(readFileSync(dest))
  .digest("hex");
if (copiedDigest !== digest) {
  throw new Error(`copy hash mismatch: ${copiedDigest} != ${digest}`);
}
console.log("copy verified: hash matches source");
