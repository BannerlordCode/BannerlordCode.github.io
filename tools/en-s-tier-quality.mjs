/**
 * Inventory EN S-tier page quality vs ban phrases / thin shells.
 * Read-only. Writes tools/data/en-s-tier-quality.json
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, relative, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const st = JSON.parse(readFileSync(join(ROOT, 'tools/data/s-tier.json'), 'utf8'));
const names = st.names || [];
const aliases = st.aliases || {};
// Primary inventory names only; aliases map short names → on-disk stems
// (e.g. SaveableField → SaveableFieldAttribute).

const BANS = [
  [/is a public type (?:in|under)/i, 'public-type'],
  [/Applies the effect of/i, 'applies-effect'],
  [/SomeValue/, 'SomeValue'],
  [/null;\s*\/\/\s*替换/, 'null-replace'],
  // Oracle-3 residual generator shells (missed by first ban set)
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
    // strip trailing // comments
    const code = trimmed.replace(/\/\/.*$/, '').trim();
    if (/\b[A-Za-z_]\w*\s*=\s*\.\.\.\s*;/.test(code)) return true;
  }
  return false;
}

function walk(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name.endsWith('.md') && e.name !== '_index.md') acc.push(p);
  }
  return acc;
}

const enPages = walk(join(ROOT, 'content/v1.3.15/en/api'));
const byBase = new Map();
for (const p of enPages) {
  const b = basename(p, '.md');
  const simple = b.includes('__') ? b.slice(0, b.indexOf('__')) : b;
  if (!byBase.has(simple)) byBase.set(simple, []);
  byBase.get(simple).push(relative(ROOT, p).replace(/\\/g, '/'));
}

const results = [];
for (const n of names) {
  const lookup = aliases[n] || n;
  const paths = [...(byBase.get(lookup) || []), ...(lookup !== n ? byBase.get(n) || [] : [])];
  const unique = [...new Set(paths)];
  if (!unique.length) {
    results.push({ name: n, status: 'MISSING', lookup });
    continue;
  }
  unique.sort((a, b) => a.length - b.length);
  const path = unique[0];
  const t = readFileSync(join(ROOT, path), 'utf8');
  const hits = BANS.filter(([re]) => re.test(t)).map(([, name]) => name);
  if (hasEllipsisAssign(t)) hits.push('ellipsis-assign');
  const hasMental = /^##\s+Mental\s*Model\s*$/imu.test(t) || /^##\s+心智模型\s*$/imu.test(t);
  const len = t.length;
  let status = 'OK';
  if (hits.length) status = 'SLOP';
  else if (!hasMental || len < 2500) status = 'THIN';
  results.push({
    name: n,
    path,
    status,
    hits,
    len,
    hasMental,
    ...(lookup !== n ? { aliasOf: lookup } : {}),
  });
}

const summary = {
  ok: results.filter((r) => r.status === 'OK').length,
  slop: results.filter((r) => r.status === 'SLOP').length,
  thin: results.filter((r) => r.status === 'THIN').length,
  miss: results.filter((r) => r.status === 'MISSING').length,
};

const out = {
  generatedAt: new Date().toISOString(),
  summary,
  results,
  l3_actions: results.filter((r) => (st.tiers.L3_actions_priority || []).includes(r.name)),
  saveable: results.filter((r) => /Saveable/.test(r.name)),
};
writeFileSync(join(ROOT, 'tools/data/en-s-tier-quality.json'), JSON.stringify(out, null, 2));
console.log(JSON.stringify(summary, null, 2));
console.log(
  'SLOP:',
  results
    .filter((r) => r.status === 'SLOP')
    .map((r) => r.name)
    .join(', ')
);
console.log(
  'THIN:',
  results
    .filter((r) => r.status === 'THIN')
    .map((r) => r.name + ':' + r.len)
    .join(', ')
);
