import fs from 'node:fs';

const ver = process.argv[2] || '1.3.15';
const lang = process.argv[3] || 'zh';
const t = JSON.parse(fs.readFileSync(`tools/_verify/types-${ver}.json`, 'utf8'));
const raw = JSON.parse(fs.readFileSync(`tools/_verify/tiers-v${ver}-${lang}.json`, 'utf8'));
const entries = Array.isArray(raw) ? raw : (raw.pages ? raw.pages.map(x => [x.path, x.tier]) : Object.entries(raw));
const pageNames = new Set(entries.map(([k]) => k.split('/').pop().replace(/\.md$/, '')));

const pats = {
  genericBacktick: /^\w+`/,
  nestedDot: /\./,
  nestedPlus: /\+/,
  dunderType: /__TaleWorlds/,
  iPrefix: /^I[A-Z]/,
};
const typeSamples = {};
const pageSamples = {};
for (const ty of t.types) {
  for (const [k, re] of Object.entries(pats)) {
    if (re.test(ty.name)) (typeSamples[k] = typeSamples[k] || []).push(ty.namespace + '.' + ty.name);
  }
}
for (const n of pageNames) {
  for (const [k, re] of Object.entries(pats)) {
    if (re.test(n)) (pageSamples[k] = pageSamples[k] || []).push(n);
  }
}
console.log('== types', ver, 'total', t.types.length);
for (const [k, v] of Object.entries(typeSamples)) console.log(' ', k, v.length, 'sample:', v.slice(0, 6));
console.log('== pages', ver, lang, 'total', pageNames.size);
for (const [k, v] of Object.entries(pageSamples)) console.log(' ', k, v.length, 'sample:', v.slice(0, 6));

// name collision analysis: same basename, multiple namespaces
const byName = new Map();
for (const ty of t.types) {
  if (!byName.has(ty.name)) byName.set(ty.name, new Set());
  byName.get(ty.name).add(ty.namespace);
}
let collisions = 0;
const collisionSamples = [];
for (const [name, nss] of byName) {
  if (nss.size > 1) { collisions++; if (collisionSamples.length < 10) collisionSamples.push(name + ' <- ' + [...nss].join(' | ')); }
}
console.log('== name collisions (same name, >1 namespace):', collisions);
console.log(collisionSamples.join('\n'));
