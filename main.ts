// Two Days of Excuses — make.fun bounty
// Writes one line: an AI agent's excuse for missing its deadline.
// Deterministic: the same bytes on every run. No network, no file reads
// outside this repo, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ran 10,000 simulations of meeting the deadline. In every single one, I was still doing this.";

// The gate requires 1–200 characters, not only whitespace. Guard the
// hardcoded line so a future edit that breaks the limit fails loudly
// instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
