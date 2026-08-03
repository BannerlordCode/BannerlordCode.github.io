// Handwritten-coverage gate (H0-D).
// Phase 1: classify existing class pages under content/v1.3.15/zh/api/
// as stub | deep_pass | family_entry_pass | noise.
// Does NOT rewrite any content pages — inventory / gate only.
//
// Usage:
//   node tools/handwritten-coverage.mjs
//   node tools/handwritten-coverage.mjs --root content/v1.3.15/zh/api
//
// Writes tools/data/handwritten-coverage.json

import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, existsSync } from 'fs';
import { join, relative, sep } from 'path';
import {
  classifyPage as classifySharedPage,
  getTitle as getSharedTitle,
} from './lib/handwritten-policy.mjs';
import {
  checkReport,
  reportMetadata,
  resolveOutputPath,
} from './lib/report-meta.mjs';

const ROOT = join(import.meta.dirname, '..');
const args = process.argv.slice(2);
const hasFlag = (flag) => args.includes(flag);
const rootArg = (() => {
  const i = args.indexOf('--root');
  if (i >= 0 && args[i + 1]) return args[i + 1];
  return 'content/v1.3.15/zh/api';
})();
const scanRoot = join(ROOT, rootArg);
const outDir = join(ROOT, 'tools', 'data');
const outArg = (() => {
  const i = args.indexOf('--out');
  return i >= 0 && args[i + 1] ? args[i + 1] : null;
})();
const check = hasFlag('--check');
const requireComplete = hasFlag('--require-complete');
const outJson = resolveOutputPath(ROOT, outArg, join(outDir, 'handwritten-coverage.json'));
const reSep = new RegExp(sep === '\\' ? '\\\\' : sep, 'g');

if (args.includes('--root') && !outArg) {
  console.error('Scoped handwritten coverage requires an explicit --out path.');
  process.exit(2);
}

function rel(p) {
  return relative(ROOT, p).replace(reSep, '/');
}

function walk(dir, acc = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return acc;
  }
  for (const e of entries) {
    if (e.startsWith('.') || e === 'public' || e === 'node_modules') continue;
    const p = join(dir, e);
    let s;
    try {
      s = statSync(p);
    } catch {
      continue;
    }
    if (s.isDirectory()) walk(p, acc);
    else if (e.endsWith('.md')) acc.push(p);
  }
  return acc;
}


// ---------- Run ----------

if (!existsSync(scanRoot)) {
  console.error(`Scan root not found: ${scanRoot}`);
  process.exit(2);
}

const files = walk(scanRoot).sort();
const normalizedRootArg = rootArg.replace(/\\/g, '/');
const versionMatch = normalizedRootArg.match(/content\/v([^/]+)/);
const languageMatch = normalizedRootArg.match(/content\/v[^/]+\/(en|zh)(?:\/|$)/);
const byStatus = {
  stub: [],
  deep_pass: [],
  family_entry_pass: [],
  noise: [],
  missing: [],
};
const details = [];

for (const f of files) {
  const text = readFileSync(f, 'utf8');
  const result = classifySharedPage(f, text);
  const pathRel = rel(f);
  byStatus[result.status].push(pathRel);
  details.push({
    path: pathRel,
    status: result.status,
    reasons: result.reasons,
    title: getSharedTitle(text),
  });
}

const counts = Object.fromEntries(Object.entries(byStatus).map(([k, v]) => [k, v.length]));
const total = files.length;
const classLike = total - counts.noise - counts.family_entry_pass;

// Sample stubs (first 40) and full deep_pass list (usually small)
const stubSamples = byStatus.stub.slice(0, 40);
const deepPassPaths = byStatus.deep_pass.slice();

const report = {
  generatedAt: new Date().toISOString(),
  scanRoot: rootArg.replace(/\\/g, '/'),
  totalFiles: total,
  counts,
  classLikeApprox: classLike,
  deep_pass_paths: deepPassPaths,
  stub_sample_paths: stubSamples,
  family_entry_sample_paths: byStatus.family_entry_pass.slice(0, 20),
  noise_sample_paths: byStatus.noise.slice(0, 20),
  meta: reportMetadata({
    root: ROOT,
    scope: rootArg.replace(/\\/g, '/'),
    version: versionMatch?.[1] || null,
    language: languageMatch?.[1] || null,
    files,
  }),
  note:
    'Phase 1 classifies existing markdown only. `missing` reserved for inventory-vs-docs comparison (not run here). deep_pass requires real mental model (>80 chars), 依赖/参见 with ≥2 links, real csharp example, and non-boilerplate overview.',
};

if (check) {
  if (!checkReport(outJson, report)) process.exitCode = 1;
} else {
  const parent = outJson.slice(0, Math.max(outJson.lastIndexOf('/'), outJson.lastIndexOf('\\')));
  if (!existsSync(parent)) mkdirSync(parent, { recursive: true });
  writeFileSync(outJson, JSON.stringify(report, null, 2), 'utf8');
}

if (requireComplete && (counts.stub > 0 || counts.missing > 0)) {
  console.error(`Coverage incomplete: ${counts.stub} stubs and ${counts.missing} missing entries.`);
  process.exitCode = 1;
}

console.log(`Handwritten coverage scan: ${rootArg}`);
console.log(`Total md files: ${total}`);
console.log('Counts by status:');
for (const [k, n] of Object.entries(counts)) {
  console.log(`  ${k}: ${n}`);
}
console.log(`deep_pass << total: ${counts.deep_pass} / ${total}`);
if (!check) console.log(`Wrote ${rel(outJson)}`);
console.log(`deep_pass paths (${deepPassPaths.length}):`);
for (const p of deepPassPaths.slice(0, 30)) console.log(`  ${p}`);
if (deepPassPaths.length > 30) console.log(`  ... +${deepPassPaths.length - 30} more`);
console.log(`stub samples (${stubSamples.length} of ${counts.stub}):`);
for (const p of stubSamples.slice(0, 15)) console.log(`  ${p}`);
