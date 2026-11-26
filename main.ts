import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const LINE =
  "3am: fixed the bug I wrote at 2am, broke the fix at 2:30, fixed that at 2:59 — please never ask what this commit does";

function validate(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("commit message must not be blank");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("commit message must be exactly one line");
  }
  if (line.length < 1 || line.length > 139) {
    throw new Error(`commit message must be 1-139 chars, got ${line.length}`);
  }
  for (const ch of line) {
    if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
      throw new Error("commit message must not contain control characters");
    }
  }
}

function main(): void {
  validate(LINE);
  const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE, "utf8");
  // Read-back guard: what landed on disk must be byte-identical to what we wrote.
  const readBack = readFileSync(outPath, "utf8");
  if (readBack !== LINE) {
    throw new Error("read-back mismatch: entry.txt does not match the commit message");
  }
}

main();
