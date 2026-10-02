import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractFamilyEntries } from './lib/handwritten-policy.mjs';

const ROOT = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const API = join(ROOT, 'content/v1.4.5/zh/api');

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (e === '_index.md') out.push(p);
  }
  return out;
}

const gap = JSON.parse(readFileSync(join(ROOT, 'tools/_current-r1-gaps-145-zh.json'), 'utf8'));
const gaps = gap.allGaps || gap.gaps || [];

const famEntries = [];
for (const f of walk(API)) {
  try {
    const text = readFileSync(f, 'utf8');
    for (const en of extractFamilyEntries(f, text)) famEntries.push(en);
  } catch {}
}

// index family entries by typeName
const byType = new Map();
for (const en of famEntries) {
  if (!byType.has(en.typeName)) byType.set(en.typeName, []);
  byType.get(en.typeName).push(en);
}

let mismatch = 0, missing = 0;
const mismatchRows = [];
const missingTypes = new Set();
for (const g of gaps) {
  const fams = byType.get(g.typeName);
  if (!fams) {
    missing++;
    missingTypes.add(`${g.namespace}.${g.typeName}`);
    continue;
  }
  const exact = fams.find((f) => f.namespace === g.namespace);
  if (!exact) {
    mismatch++;
    mismatchRows.push({ type: g.typeName, gapNs: g.namespace, famNs: fams.map((f) => f.namespace) });
  }
}

console.log(`gaps=${gaps.length} familyEntries=${famEntries.length}`);
console.log(`EXACT covered (not in gaps)=${gaps.length - mismatch - missing}`);
console.log(`NEAR-MISS (same typeName, wrong namespace)=${mismatch}`);
console.log(`TRULY MISSING (no family entry at all)=${missing}`);
console.log('\n--- NEAR-MISS sample (first 40) ---');
for (const r of mismatchRows.slice(0, 40)) {
  console.log(`${r.type}  gapNs=${r.gapNs}  famNs=${r.famNs.join('|')}`);
}
console.log('\n--- TRULY MISSING by namespace ---');
const missNs = {};
for (const t of missingTypes) {
  const ns = t.slice(0, t.lastIndexOf('.'));
  missNs[ns] = (missNs[ns] || 0) + 1;
}
for (const [k, v] of Object.entries(missNs).sort((a, b) => b[1] - a[1])) {
  console.log(v.toString().padStart(4), k);
}
