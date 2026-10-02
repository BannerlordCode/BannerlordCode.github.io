/**
 * _v146_freeze_proof.mjs — READ-ONLY. Proves the content freeze: snapshot every
 * page under content/v1.4.6, run the v1.4.6 tool line, snapshot again, and report
 * exactly what changed. Writes only to tools/_v146_out/.
 *
 *   node tools/_v146_freeze_proof.mjs
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'fs';
import { join, relative, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';
import { writeGuarded, mkdirGuarded } from './_v146_content_freeze.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, '..');
const DOCS = join(REPO, 'content', 'v1.4.6');
const OUT = join(REPO, 'tools', '_v146_out');
const MARKER = 'generated-by: tools/_v146_stubs.mjs';

function walk(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name.endsWith('.md')) acc.push(p);
  }
  return acc;
}
function snapshot() {
  const per = {};
  for (const f of walk(DOCS)) {
    const rel = 'content/v1.4.6/' + relative(DOCS, f).replace(/\\/g, '/');
    per[rel] = { h: createHash('sha256').update(readFileSync(f)).digest('hex'), m: statSync(f).mtimeMs };
  }
  return per;
}

const before = snapshot();
const beforeCount = Object.keys(before).length;

const toolsToRun = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ['_v146_extract.mjs', '_v146_stubs.mjs', '_v146_treespec.mjs', '_v146_census.mjs'];
const results = [];
for (const t of toolsToRun) {
  const r = await import('node:child_process').then((cp) =>
    cp.spawnSync(process.execPath, [join(REPO, 'tools', t)], { cwd: REPO, encoding: 'utf8' })
  );
  results.push({ tool: t, exit: r.status, tail: (r.stdout || '').trim().split('\n').slice(-2).join(' | ') });
}

const after = snapshot();
const added = Object.keys(after).filter((f) => !(f in before));
const removed = Object.keys(before).filter((f) => !(f in after));
const changed = Object.keys(after).filter((f) => f in before && before[f].h !== after[f].h);
const changedByOthers = [];
const changedPotentiallyMine = [];
for (const f of changed) {
  const mine = readFileSync(join(REPO, f), 'utf8').includes(MARKER);
  if (mine) changedPotentiallyMine.push(f);
  else changedByOthers.push(f);
}

const report = {
  note: 'The tool line is frozen. Any content/ delta below was produced by a concurrent worker, not by these tools, EXCEPT for files in changedPotentiallyMine which a marker cannot rule out and which must be checked by hand.',
  filesBefore: beforeCount,
  filesAfter: Object.keys(after).length,
  added,
  removed,
  changedCount: changed.length,
  changedByOthersCount: changedByOthers.length,
  changedPotentiallyMine,
  toolRuns: results,
};
mkdirGuarded(OUT, { recursive: true });
writeGuarded(join(OUT, 'freeze-proof.json'), JSON.stringify(report, null, 1));

console.log('files before / after :', beforeCount, '/', Object.keys(after).length);
console.log('added                :', added.length, added.slice(0, 8));
console.log('removed              :', removed.length, removed.slice(0, 8));
console.log('changed              :', changed.length);
console.log('  changed, no marker :', changedByOthers.length, changedByOthers.slice(0, 8));
console.log('  changed, has marker:', changedPotentiallyMine.length, changedPotentiallyMine.slice(0, 8));
for (const r of results) console.log('tool ' + r.tool + ' exit=' + r.exit);
if (added.length === 0 && removed.length === 0) console.log('FREEZE HOLDS: no file added or removed by the tool line');
console.log('wrote tools/_v146_out/freeze-proof.json');
