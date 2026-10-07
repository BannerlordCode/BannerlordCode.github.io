#!/usr/bin/env node
// Section-numbering gate for CONTRACT.md — read-only, touches nothing.
//
// It exists because two distinct failures got through on the same day:
//   (a) COLLISION   two sections claiming the same number
//   (b) MISPLACEMENT the number is free, but the series is not monotonic in the file
// A collision check passes on (b) precisely because (b) is not a collision.
//   => "criterion passed" is not "criterion covered".
//
// Three steps, run together, before and after any CONTRACT.md write:
//   1  list every section number in use          -> catches (a)
//   2  check the series order in the file       -> catches (b)
//   3  print the order string for the eye       -> catches "looks fine but is not"
//
// Usage:  node tools/_contract_section_gate.mjs [--series 9] [--file <path>]
// Exit 0 when every check ran and passed. Non-zero when a check fails or is skipped.

import { readFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, "..");

const argv = process.argv.slice(2);
function flag(name, fallback) {
  const i = argv.indexOf("--" + name);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : fallback;
}
const FILE = resolve(REPO, flag("file", "CONTRACT.md"));
const SERIES = flag("series", "9");

// ---- CONTROLS -------------------------------------------------------------
// A gate that has never been shown to fail has not been shown to work.
// These run first and can only ever turn the verdict into "no verdict".

const CONTROL_SRC = `# 9a. first
# 9b. second
# 9c. third
# 9a. duplicate on purpose
# 9d. after the duplicate

# 9q. later but the series is not monotonic here
`;
const CONTROL_OK = `# 9a. first
# 9b. second
# 9c. third
# 9d. fourth
`;

function parseSections(text) {
  const out = [];
  text.split(/\r?\n/).forEach((line, i) => {
    const m = line.match(/^#{1,3}\s+(\d+[a-z]*(?:-\d+)?)\.?\s/);
    if (m) out.push({ num: m[1], line: i + 1, text: line.trim() });
  });
  return out;
}

// order key: numeric part first, then letters. "9" < "9a" < "9b".
function orderKey(num) {
  const m = num.match(/^(\d+)([a-z]*)/);
  return [parseInt(m[1], 10), m[2]];
}
function compareNum(a, b) {
  const [na, la] = orderKey(a);
  const [nb, lb] = orderKey(b);
  if (na !== nb) return na - nb;
  return la < lb ? -1 : la > lb ? 1 : 0;
}

const controls = [];
{
  const secs = parseSections(CONTROL_SRC);
  const nums = secs.map((s) => s.num);
  const dupes = nums.filter((n, i) => nums.indexOf(n) !== i);
  controls.push({
    name: "collision detection fires on a duplicated number",
    pass: dupes.length === 1 && dupes[0] === "9a",
    detail: dupes.length ? `detected duplicate(s): ${[...new Set(dupes)].join(", ")}`
                       : "detected nothing — the check is not looking",
  });
}
{
  const secs = parseSections(CONTROL_OK);
  const nums = secs.map((s) => s.num);
  const monotonic = nums.every((n, i) => i === 0 || compareNum(nums[i - 1], n) < 0);
  controls.push({
    name: "monotonicity accepts a clean series",
    pass: monotonic,
    detail: `order: ${nums.join(" ")}`,
  });
}

// ---- REAL INPUT ------------------------------------------------------------

let verdictPrinted = false;
const report = [];

if (!existsSync(FILE)) {
  console.error(`NO FILE: ${FILE}`);
  console.error("Refusing to print a verdict without reading the file.");
  process.exit(2);
}
const text = readFileSync(FILE, "utf8");
const sections = parseSections(text);

// STEP 1 — numbers in use, and which are duplicated.
const counts = new Map();
for (const s of sections) counts.set(s.num, (counts.get(s.num) || 0) + 1);
const dupes = [...counts.entries()].filter(([, c]) => c > 1);

report.push(`FILE   ${FILE}`);
report.push(`bytes  ${Buffer.byteLength(text, "utf8")}   lines ${text.split(/\r?\n/).length}`);
report.push(`sections total ${sections.length}`);
report.push("");
report.push("STEP 1  numbers in use (collision check)");
report.push(`  distinct numbers : ${counts.size}`);
report.push(`  duplicates       : ${dupes.length}`);
for (const [n, c] of dupes) {
  const where = sections.filter((s) => s.num === n).map((s) => `line ${s.line}`).join(", ");
  report.push(`    §${n} x${c}  at ${where}`);
}

// STEP 2 — is the target series monotonic in file order?
const inSeries = sections.filter((s) => orderKey(s.num)[0] === parseInt(SERIES, 10));
const seq = inSeries.map((s) => s.num);
const violations = [];
for (let i = 1; i < seq.length; i++) {
  if (compareNum(seq[i - 1], seq[i]) >= 0) {
    violations.push(`${seq[i - 1]} then ${seq[i]} (line ${inSeries[i].line})`);
  }
}
report.push("");
report.push(`STEP 2  series §${SERIES} monotonic in file order (misplacement check)`);
report.push(`  members   : ${seq.length}`);
report.push(`  violations: ${violations.length}`);
for (const v of violations) report.push(`    non-increasing: ${v}`);

// STEP 3 — the order string, for the eye. This is the step that catches
// "every individual check passed but the result still reads wrong".
report.push("");
report.push(`STEP 3  read this yourself: ${seq.join(" ")}`);
const sorted = [...seq].sort(compareNum);
report.push(`  sorted would be: ${sorted.join(" ")}`);
report.push(`  identical     : ${JSON.stringify(seq) === JSON.stringify(sorted) ? "yes" : "NO"}`);

// ---- VERDICT ----------------------------------------------------------------

report.push("");
report.push("CONTROLS");
for (const c of controls) {
  report.push(`  ${c.pass ? "PASS" : "FAIL"}  ${c.name}${c.pass ? "" : "  <- " + c.detail}`);
}
const controlsOk = controls.every((c) => c.pass);
report.push(`  ${controls.length} control(s) ${controlsOk ? "passed" : "FAILED"}`);

console.log(report.join("\n"));

if (!controlsOk) {
  console.error("");
  console.error("A control failed. No verdict printed: a verdict from a checker that has just");
  console.error("proven it cannot see is the failure mode, not a finding.");
  process.exit(1);
}

verdictPrinted = true;
console.log("");
console.log(`VERDICT  collisions=${dupes.length}  misplacements=${violations.length}  ` +
            `(${seq.length} sections in series §${SERIES})`);
process.exit(dupes.length === 0 && violations.length === 0 ? 0 : 1);