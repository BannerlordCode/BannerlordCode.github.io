/**
 * Gate A sample checks (inventory-only; does not rewrite content):
 * 1) Random sample up to 50 deep_pass pages → ban-phrase hits must be 0
 * 2) Sample 20 family purpose table rows → non-empty non-formulaic purpose
 *
 * Usage: node tools/gate-a-sample-check.mjs
 */
import { readFileSync, readdirSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'tools', 'data');
const hcPath = join(DATA, 'handwritten-coverage.json');

if (!existsSync(hcPath)) {
  console.error('Missing handwritten-coverage.json — run node tools/handwritten-coverage.mjs first');
  process.exit(2);
}

const hc = JSON.parse(readFileSync(hcPath, 'utf8'));
const deep = hc.deep_pass_paths || [];

const BANS = [
  [/阅读时先通过属性了解状态/, 'attr-boilerplate'],
  [/是\s+TaleWorlds\.\S+\s+(?:下|中)的公开类型/, 'public-type-only'],
  [/\bSomeValue\b/, 'SomeValue'],
  [/null;\s*\/\/\s*替换/, 'null-replace'],
  [/service\s*=\s*\.\.\./, 'service-ellipsis'],
  [/IIScene/, 'IIScene-typo'],
];

function mulberry32(a) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function sample(arr, n, seed) {
  const rng = mulberry32(seed);
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

function walkIndex(dir, acc = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return acc;
  }
  for (const e of entries) {
    if (e.startsWith('.')) continue;
    const p = join(dir, e);
    let st;
    try {
      st = statSync(p);
    } catch {
      continue;
    }
    if (st.isDirectory()) walkIndex(p, acc);
    else if (e === '_index.md') acc.push(relative(ROOT, p).replace(/\\/g, '/'));
  }
  return acc;
}

// --- 1) deep_pass ban sample ---
const pickN = Math.min(50, deep.length);
const pick = sample(deep, pickN, 20260727);
const hitDetails = [];
for (const rel of pick) {
  const t = readFileSync(join(ROOT, rel), 'utf8');
  for (const [re, name] of BANS) {
    if (re.test(t)) {
      hitDetails.push({ rel, ban: name });
      break;
    }
  }
}

// --- 2) family purpose sample (20 rows) ---
const famFull = walkIndex(join(ROOT, 'content/v1.3.15/zh/api'));
const famPick = sample(famFull, 80, 20260728);
const purposeOk = [];
const purposeFail = [];

for (const rel of famPick) {
  const t = readFileSync(join(ROOT, rel), 'utf8');
  for (const line of t.split(/\r?\n/)) {
    if (!/^\|/.test(line)) continue;
    const m = line.match(/\|\s*\[`?([A-Za-z_][\w]*)`?\]\([^)]+\)\s*\|\s*([^|]+)\|/);
    if (!m) continue;
    const typeName = m[1];
    const purpose = m[2].replace(/[`*]/g, '').trim();
    const formulaic =
      purpose.length < 8 ||
      /公开类型/.test(purpose) ||
      /^-+$/.test(purpose) ||
      purpose === typeName;
    const row = { rel, type: typeName, purpose: purpose.slice(0, 80) };
    if (formulaic) purposeFail.push(row);
    else purposeOk.push(row);
    if (purposeOk.length + purposeFail.length >= 20) break;
  }
  if (purposeOk.length + purposeFail.length >= 20) break;
}

// --- 3) generator retirement smoke ---
const retiredScripts = [
  'batch-gen-stubs.mjs',
  'bulk-fix-mental-models.mjs',
  'enhance-stubs.mjs',
  'generate-class-docs.mjs',
  'improve-stub-quality.mjs',
  'populate-curated-content.mjs',
  'regenerate-method-purposes.mjs',
];
const retiredStatus = [];
for (const name of retiredScripts) {
  const p = join(ROOT, 'tools', name);
  if (!existsSync(p)) {
    retiredStatus.push({ name, status: 'missing' });
    continue;
  }
  const head = readFileSync(p, 'utf8').slice(0, 1200);
  const hasGuard =
    /RETIRED|BANNERLORD_ALLOW_RETIRED_BODY_GEN|process\.exit\([12]\)/.test(head);
  retiredStatus.push({ name, status: hasGuard ? 'guarded' : 'UNGUARDED' });
}

// --- 4) EN S-tier ban sample (Gate D / Oracle-3 hardened set) ---
// Keep in sync with tools/en-s-tier-quality.mjs BANS + hasEllipsisAssign.
const EN_BANS = [
  [/is a public type (?:in|under)/i, 'public-type'],
  [/Applies the effect of/i, 'applies-effect'],
  [/\bSomeValue\b/, 'SomeValue'],
  [/null;\s*\/\/\s*替换/, 'null-replace'],
  [/Obtain an instance of/i, 'obtain-instance'],
  [/subsystem API first/i, 'subsystem-api-first'],
  // Gen phrase "Executes the X logic" — not natural "executes the war jump"
  [/Executes the\s+\w+\s+logic\b/i, 'executes-the-logic'],
  [/Read properties for state/i, 'read-properties-state'],
  [/阅读时先通过属性了解状态/, 'zh-attr-boilerplate'],
  [/service\s*=\s*\.\.\./i, 'service-ellipsis'],
];

/** Non-comment code lines with `foo = ...;` (generator placeholder assigns). */
function hasEllipsisAssign(text) {
  for (const line of String(text).split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('#')) continue;
    const code = trimmed.replace(/\/\/.*$/, '').trim();
    if (/\b[A-Za-z_]\w*\s*=\s*\.\.\.\s*;/.test(code)) return true;
  }
  return false;
}

let enSample = { pass: false, sampled: 0, banHits: 0, hitDetails: [], note: 'no en-s-tier-quality.json' };
const enQPath = join(DATA, 'en-s-tier-quality.json');
if (existsSync(enQPath)) {
  const enQ = JSON.parse(readFileSync(enQPath, 'utf8'));
  const okPaths = (enQ.results || [])
    .filter((r) => r.status === 'OK' && r.path)
    .map((r) => r.path);
  const enPick = sample(okPaths, Math.min(50, okPaths.length), 20260729);
  const enHits = [];
  for (const rel of enPick) {
    const t = readFileSync(join(ROOT, rel), 'utf8');
    let hit = null;
    for (const [re, name] of EN_BANS) {
      if (re.test(t)) {
        hit = name;
        break;
      }
    }
    if (!hit && hasEllipsisAssign(t)) hit = 'ellipsis-assign';
    if (hit) enHits.push({ rel, ban: hit });
  }
  enSample = {
    pool: okPaths.length,
    sampled: enPick.length,
    banHits: enHits.length,
    hitDetails: enHits,
    samplePaths: enPick,
    inventorySummary: enQ.summary,
    pass: enHits.length === 0 && enPick.length > 0 && (enQ.summary?.slop || 0) === 0,
    note: 'MISS SaveableField/Property names are aliases → Attribute pages',
  };
}

const out = {
  generatedAt: new Date().toISOString(),
  gateA: {
    generatorsRetired: retiredStatus.every((x) => x.status === 'guarded' || x.status === 'missing'),
    retiredStatus,
    deepPassBanSample: {
      pool: deep.length,
      sampled: pick.length,
      banHits: hitDetails.length,
      hitDetails,
      samplePaths: pick,
      pass: hitDetails.length === 0 && pick.length > 0,
    },
    familyPurposeSample: {
      ok: purposeOk.length,
      fail: purposeFail.length,
      purposeOk: purposeOk.slice(0, 5),
      purposeFail,
      pass: purposeFail.length === 0 && purposeOk.length >= 20,
    },
    enSTierBanSample: enSample,
  },
  note:
    'Gate A does NOT require rewriting all stub leaf pages. Stubs must not count as done (R1). Completed = deep_pass + family purpose entries. EN S-tier sample added for Gate D honesty.',
};

const outPath = join(DATA, 'gate-a-sample-check.json');
writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8');

console.log('Gate A sample check');
console.log(
  `  generatorsRetired: ${out.gateA.generatorsRetired} (${retiredStatus.filter((x) => x.status === 'guarded').length} guarded)`
);
console.log(
  `  deep_pass ban sample: ${pick.length} pages, banHits=${hitDetails.length} → ${out.gateA.deepPassBanSample.pass ? 'PASS' : 'FAIL'}`
);
console.log(
  `  family purpose sample: ok=${purposeOk.length} fail=${purposeFail.length} → ${out.gateA.familyPurposeSample.pass ? 'PASS' : 'FAIL'}`
);
console.log(
  `  EN S-tier ban sample: ${enSample.sampled || 0} pages, banHits=${enSample.banHits || 0}, slop=${enSample.inventorySummary?.slop ?? '?'} → ${enSample.pass ? 'PASS' : 'FAIL'}`
);
console.log(`Wrote ${relative(ROOT, outPath).replace(/\\/g, '/')}`);

const overall =
  out.gateA.generatorsRetired &&
  out.gateA.deepPassBanSample.pass &&
  out.gateA.familyPurposeSample.pass &&
  out.gateA.enSTierBanSample.pass;
console.log(`OVERALL Gate A sample: ${overall ? 'PASS' : 'FAIL'}`);
process.exit(overall ? 0 : 1);
