// honest-r1-baseline.mjs
//
// H0 re-baseline (driver §8 B + cycle Option C): turns the STRICT_GATE
// content-integrity audit of an API tree into an HONEST coverage baseline.
//
// The structural r1-coverage-report counts a target as "covered" if it has a
// deep_pass page OR a family purpose entry — but family entries / many pages
// are still auto-generated stubs. This tool re-derives coverage from the
// EXACT 4 content-integrity stub markers used by audit-doc-quality.mjs:
//   autogen-description, formulaic-overview-stub,
//   placeholder-assignment-example, double-i-fake-type.
// A page is "honest" only if it has ZERO of those findings.
//
// Usage:
//   node tools/honest-r1-baseline.mjs <strict-audit-txt> <scope-label> [structural-r1-json]
// Writes tools/_honest-<scope>.json and prints a summary.

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const [auditPath, scope, structuralJsonPath] = process.argv.slice(2);
if (!auditPath || !scope) {
  console.error('usage: node tools/honest-r1-baseline.mjs <strict-audit-txt> <scope-label> [structural-r1-json]');
  process.exit(2);
}

const txt = readFileSync(auditPath, 'utf8');
const lines = txt.split(/\r?\n/);

// 1) total API pages = "Scanned N files" line.
let totalApiPages = null;
for (const ln of lines) {
  const m = ln.match(/^Scanned\s+(\d+)\s+files/);
  if (m) { totalApiPages = Number(m[1]); break; }
}

// 2) isolate the content-integrity group (printed LAST among the three groups).
const ciStart = lines.findIndex((l) => l.startsWith('## Content-integrity'));
if (ciStart < 0) {
  console.error('content-integrity group not found in audit output');
  process.exit(3);
}
// group ends at the summary "Scanned N files" line (which follows all groups).
let ciEnd = lines.length;
for (let i = ciStart + 1; i < lines.length; i++) {
  if (/^Scanned\s+\d+\s+files/.test(lines[i])) { ciEnd = i; break; }
}
const ciLines = lines.slice(ciStart, ciEnd);

// 3) parse By category block + per-file findings.
const byCategory = {};
const stubFiles = new Set();
let inByCategory = false;
let currentFile = null;
for (const ln of ciLines) {
  if (ln.startsWith('By category:')) { inByCategory = true; continue; }
  if (inByCategory) {
    const cm = ln.match(/^\s+([\w-]+):\s+(\d+)/);
    if (cm) { byCategory[cm[1]] = Number(cm[2]); continue; }
    else if (ln.trim() === '') { inByCategory = false; continue; }
    else { inByCategory = false; /* fall through to file parsing */ }
  }
  if (ln.startsWith('## ')) { currentFile = null; continue; }
  if (/^\s+- \[/.test(ln)) {
    // finding line: "  - [category] Lnn: snippet"
    if (currentFile) stubFiles.add(currentFile);
    continue;
  }
  // a relative path line: not indented, ends with .md (allow trailing spaces)
  if (!/^\s/.test(ln) && /\.md$/.test(ln.trim()) && !ln.startsWith('First')) {
    currentFile = ln.trim();
  }
}

const stubPages = stubFiles.size;
const cleanPages = totalApiPages == null ? null : totalApiPages - stubPages;
const honestPct = totalApiPages ? (cleanPages / totalApiPages) * 100 : null;

// 4) merge structural R1 context if provided.
let structural = null;
if (structuralJsonPath) {
  try {
    structural = JSON.parse(readFileSync(structuralJsonPath, 'utf8'));
  } catch (e) { structural = { _error: String(e) }; }
}

const report = {
  generatedAt: new Date().toISOString(),
  scope,
  sourceAudit: auditPath,
  totalApiPages,
  stubPages,
  cleanPages,
  honestPct: honestPct == null ? null : Number(honestPct.toFixed(2)),
  byCategory,
  structuralR1: structural
    ? {
        r1Target: structural.r1Target,
        structuralCovered: structural.covered,
        structuralGap: structural.gap,
        deepPassPages: structural.meta?.deepPassPages ?? structural.deepPassPages,
        familyEntryPages: structural.meta?.familyEntryPages ?? structural.familyEntryPages,
        structuralStubPages: structural.meta?.pageClassCounts?.stub,
      }
    : null,
  note:
    'HONEST coverage = pages with ZERO of the 4 content-integrity stub markers ' +
    '(autogen-description / formulaic-overview-stub / placeholder-assignment-example / ' +
    'double-i-fake-type). Structural r1-coverage-report counts family entries + deep_pass ' +
    'as covered; this report exposes the true handwritten gap. Honest R1 coverage cannot ' +
    'exceed cleanPages (every clean page would have to be an R1 target). Genuine deep ' +
    'handwritten pages ~= structuralR1.deepPassPages (verify each is in cleanPages).',
};

const outName = `_honest-${scope}.json`;
const outPath = resolve(dirname(fileURLToPath(import.meta.url)), outName);
writeFileSync(outPath, JSON.stringify(report, null, 2));

console.log(`=== Honest R1 baseline: ${scope} ===`);
console.log(`API pages scanned : ${totalApiPages}`);
console.log(`Stub pages (>=1 CI finding) : ${stubPages}`);
console.log(`Clean pages (0 CI finding)  : ${cleanPages}`);
console.log(`Honest handwritten %        : ${report.honestPct}`);
console.log(`By category                  : ${JSON.stringify(byCategory)}`);
if (report.structuralR1) {
  const s = report.structuralR1;
  console.log(
    `Structural R1                : ${s.structuralCovered}/${s.r1Target} (gap=${s.structuralGap}); ` +
      `deep_pass=${s.deepPassPages}, family_entry=${s.familyEntryPages}, classifier_stub=${s.structuralStubPages}`
  );
}
console.log(`Wrote ${outPath}`);
