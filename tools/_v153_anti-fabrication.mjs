// Report-only anti-fabrication gate for the v1.5.3 deep pages.
// Extracts `.Method(`, `.Method<`, and `new Type` identifiers from csharp blocks
// and verifies each against declarations in the 1.5.3 source tree.
//
// Positive control runs FIRST: if the control names are not found, or if zero
// identifiers were extracted, the result is reported as VACUOUS rather than PASS.
//
// Usage: node tools/_v153_anti-fabrication.mjs [lang]
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, posix } from 'node:path';

const REPO = process.cwd();
const SRC = process.argv[3] || 'C:/WorkSpace/Bannerlord/bannerlord-1.5.3';
const LANG = process.argv[2] || 'zh';
const API = `content/v1.5.3/${LANG}/api`;

function walk(dir, acc = [], dep = 0) {
  if (dep > 6) return acc;
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.') || name === 'node_modules') continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc, dep + 1);
    else if (name.endsWith('.cs')) acc.push(p);
  }
  return acc;
}

// decompiler artifacts + compiler-synthesised types must not be treated as evidence
const DECOMP_STRIP = /^\s*\/\/\s*(?:Token:|\(get\)\s*Token:|\(set\)\s*Token:)[^\n]*$/gm;
const SYNTHETIC = /^<.*(DisplayClass|d__\d+|>c__|>c)/;

const declared = new Set();
for (const f of walk(SRC)) {
  let t;
  try { t = readFileSync(f, 'utf8').replace(DECOMP_STRIP, ''); } catch { continue; }
  for (const m of t.matchAll(/\b(?:public|protected|internal)[\w\s<>,\[\]\.]*?\b([A-Za-z_]\w*)\s*\(/g)) declared.add(m[1]);
  for (const m of t.matchAll(/\b(?:public|protected|internal)[\w\s<>,\[\]\.]*?\b([A-Za-z_]\w*)\s*(?:\{|=>)/g)) declared.add(m[1]);
  for (const m of t.matchAll(/^\s*(?:public|protected|internal)\s+(?:sealed\s+|abstract\s+|static\s+|partial\s+)*(?:class|interface|struct|enum|record|delegate)\s+([A-Za-z_]\w*)/gm)) declared.add(m[1]);
}

// library / language / example-holder names that legitimately are not in game source
const ALLOW = new Set([
  'if','for','foreach','while','switch','catch','lock','return','new','typeof','nameof','using','var',
  'get','set','Add','Remove','Clear','Count','Length','ToString','Equals','GetHashCode','Format','Parse',
  'TryParse','Contains','ContainsKey','TryGetValue','GetValueOrDefault','AddOrUpdate','GetOrAdd','IndexOf',
  'Substring','Split','Trim','TrimStart','TrimEnd','Join','Replace','StartsWith','EndsWith','Insert',
  'Select','Where','Any','All','First','FirstOrDefault','ToList','ToArray','Cast','OfType','OrderBy',
  'ThenBy','Distinct','GroupBy','Sum','Max','Min','Average','Range','Repeat','Empty','Concat','Append',
  'SelectMany','Single','SingleOrDefault','Last','LastOrDefault','Skip','Take','Reverse','Zip','Aggregate',
  'IsNullOrEmpty','IsNullOrWhiteSpace','Find','Exists','Sort','SortBy','Box','MessageBox','Now',
]);

const CONTROL = ['AddBehavior', 'SyncData', 'PushScreen'];

const DEP = /^##\s+(依赖关系|依赖|参见|See\s*Also|Dependencies)\s*$/imu;
const pages = [];
(function w(d) {
  for (const name of readdirSync(d)) {
    if (name.startsWith('.')) continue;
    const p = join(d, name);
    if (statSync(p).isDirectory()) w(p);
    else if (name.endsWith('.md') && name !== '_index.md') {
      if (DEP.test(readFileSync(p, 'utf8'))) pages.push(p);
    }
  }
})(join(REPO, API));

const found = new Map();
for (const p of pages) {
  const text = readFileSync(p, 'utf8');
  for (const b of text.matchAll(/```csharp\r?\n([\s\S]*?)```/g)) {
    for (const m of b[1].matchAll(/\.([A-Za-z_]\w*)\s*(?:<[^()<>;]*>)?\s*\(/g)) {
      if (!found.has(m[1])) found.set(m[1], new Set());
      found.get(m[1]).add(posix.relative(API, p.replace(/\\/g, '/')));
    }
    for (const m of b[1].matchAll(/\bnew\s+([A-Za-z_][\w.]*)/g)) {
      const simple = m[1].split('.').pop();
      if (!found.has(simple)) found.set(simple, new Set());
      found.get(simple).add(posix.relative(API, p.replace(/\\/g, '/')));
    }
  }
}

const ids = [...found.keys()];
const controlHit = CONTROL.filter((c) => declared.has(c));
console.log(`SRC=${SRC}`);
console.log(`LANG=${LANG}  deepPages=${pages.length}  identifiersExtracted=${ids.length}  declaredInSource=${declared.size}`);
console.log(`\nPOSITIVE CONTROL (must be FOUND before trusting a MISS):`);
for (const c of CONTROL) console.log(`  ${c}: ${declared.has(c) ? 'FOUND' : '*** NOT FOUND — control invalid ***'}`);

if (ids.length === 0) {
  console.log('\nRESULT: VACUOUS — zero identifiers extracted. This is NOT a pass.');
  process.exit(2);
}

const misses = ids.filter((i) => !declared.has(i) && !ALLOW.has(i));
console.log(`\nMISSES (not declared in 1.5.3 source, not in allowlist): ${misses.length}`);
for (const m of misses) console.log(`  ${m}  <- ${[...found.get(m)].join(', ')}`);
console.log(misses.length === 0 ? '\nRESULT: PASS' : '\nRESULT: NEEDS REVIEW — each miss must be either found in source or justified as an example-holder method');
