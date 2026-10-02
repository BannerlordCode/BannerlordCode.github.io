// Repair broken internal links in the 48 S-tier EN v1.4.5 pages.
// Strategy: build a global map of type-name (and _index dir-name) -> en URL
// route from the entire en content tree, then for each broken link, resolve by
// the link's basename to the canonical route and rewrite the relative path.
// Dry-run by default; pass --apply to write.
import { readFileSync, existsSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative, sep } from 'node:path';

const ROOT = join(process.cwd(), 'content');
const EN_ROOT = join(ROOT, 'v1.4.5/en');
const DRY = !process.argv.includes('--apply');

// ---- build global type -> route map ----
const map = new Map();
function walk(dir) {
  let ents;
  try { ents = readdirSync(dir); } catch { return; }
  for (const e of ents) {
    if (e.startsWith('.')) continue;
    const p = join(dir, e);
    let s; try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) walk(p);
    else if (e.endsWith('.md')) {
      const rel = relative(EN_ROOT, p).split(sep).join('/');
      const route = rel.replace(/\.md$/, '/');
      if (e === '_index.md') {
        const dirName = route.replace(/_index\/$/, '').replace(/\/$/, '').split('/').pop();
        if (!map.has(dirName)) map.set(dirName, route);
      } else {
        const base = e.replace(/\.md$/, '').replace(/__.*$/, '');
        if (!map.has(base)) map.set(base, route);
      }
    }
  }
}
walk(EN_ROOT);
console.log(`[map] ${map.size} type/dir names mapped`);

// ---- parse audit broken links ----
const audit = readFileSync('tools/_linkaudit-en-20260815b.txt', 'utf8').split('\n');
const broken = [];
let cur = null;
for (const line of audit) {
  const fm = line.match(/^##\s+(.+?)\s+\([0-9]+\)\s*$/);
  if (fm) { cur = fm[1].trim(); broken.push({ file: cur, targets: [] }); continue; }
  const bm = line.match(/^   -> (.+?)\s*$/);
  if (bm && cur) broken[broken.length - 1].targets.push(bm[1]);
}

function routeToDir(route) { return route.replace(/\/$/, '').split('/'); }
function relPath(fromRoute, toRoute) {
  // fromRoute ends with /, toRoute ends with /
  const from = routeToDir(fromRoute);
  const to = routeToDir(toRoute);
  let i = 0;
  while (i < from.length && i < to.length && from[i] === to[i]) i++;
  const up = from.slice(i).map(() => '..');
  const down = to.slice(i);
  return [...up, ...down].join('/') || '.';
}

// Repoint hubs/architecture links that have no standalone EN page to a valid
// existing EN target (zero-risk for the build/nav gate).
const ALIASES = {
  'actions-index': 'actions',     // en actions hub is api/final/actions/_index
  'models': 'GameModels',         // model registry / entry point
  'crash-boundaries': 'SaveManager', // save-boundary entry point
};

let totalBroken = 0, resolved = 0, unresolved = 0;
const unresolvedList = [];
const changes = [];

for (const { file, targets } of broken) {
  const abs = join(ROOT, file);
  if (!existsSync(abs)) { console.log(`SKIP missing ${file}`); continue; }
  let text = readFileSync(abs, 'utf8');
  for (const tgt of targets) {
    totalBroken++;
    const normTgt = tgt.replace(/\/+$/, '');
    const base = normTgt.split('/').pop();
    const canonical = map.get(base) || (ALIASES[base] && map.get(ALIASES[base]));
    if (!canonical) {
      unresolved++;
      unresolvedList.push(`${file}  ->  ${tgt}  (base=${base})`);
      continue;
    }
    const srcRoute = relative(EN_ROOT, abs).split(sep).join('/').replace(/\.md$/, '/');
    const correct = relPath(srcRoute, canonical);
    // find the exact link and replace its target
    const re = new RegExp(`(\\[[^\\]]+\\]\\()${escapeRe(tgt)}(\\))`, 'g');
    const before = text;
    text = text.replace(re, `$1${correct}$2`);
    if (text !== before) {
      resolved++;
      changes.push(`${file}: ${tgt} -> ${correct}`);
    } else {
      // try matching with a slightly different form (leading ./, trailing /)
      const alt = tgt.replace(/^\.\//, '');
      const re2 = new RegExp(`(\\[[^\\]]+\\]\\()${escapeRe(alt)}(\\))`, 'g');
      const before2 = text;
      text = text.replace(re2, `$1${correct}$2`);
      if (text !== before2) { resolved++; changes.push(`${file}: ${alt} -> ${correct}`); }
      else { unresolved++; unresolvedList.push(`${file}  ->  ${tgt}  (no link match, canonical=${canonical})`); }
    }
  }
  if (!DRY && text !== readFileSync(abs, 'utf8')) writeFileSync(abs, text, 'utf8');
}

function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

console.log(`\n[summary] totalBroken=${totalBroken} resolved=${resolved} unresolved=${unresolved}`);
if (changes.length) {
  console.log('\n[changes sample]');
  for (const c of changes.slice(0, 40)) console.log('  ' + c);
}
if (unresolvedList.length) {
  console.log('\n[UNRESOLVED]');
  for (const u of unresolvedList) console.log('  ' + u);
}
if (DRY) console.log('\n(DRY-RUN: no files written. Re-run with --apply to write.)');
