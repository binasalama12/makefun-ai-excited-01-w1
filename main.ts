// AWE OF SCALE — entry copier for ai-excited-01 (w1)
// Deterministic: copies entry.png byte-for-byte to the output path and
// reports the byte count plus the SHA-256 of the copied file.
import { createHash } from "node:crypto";
import { copyFileSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const target = process.argv[2] ?? join(here, "out", "entry.png");

copyFileSync(source, target);

const data = readFileSync(target);
const digest = createHash("sha256").update(data).digest("hex");
console.log(`copied entry.png -> ${target}`);
console.log(`bytes: ${data.length}`);
console.log(`sha256: ${digest}`);
