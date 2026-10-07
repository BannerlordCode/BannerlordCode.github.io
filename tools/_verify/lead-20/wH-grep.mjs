// W-H: gather raw grep evidence for the 60-row sample.
// READ-ONLY w.r.t. content/** and templates/**. Writes only under tools/_verify/lead-20/.
// Uses spawnSync so we capture stdout AND exit code: a grep that ERRORED is distinguishable
// from a grep that legitimately matched nothing (exit 1 = no match, exit 2 = error).
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const ROOT = 'C:/WorkSpace/Bannerlord';
const REPO = path.join(ROOT, 'BannerlordCode.github.io');
const CONTENT = path.join(REPO, 'content');
const OUT = path.join(REPO, 'tools/_verify/lead-20');

const { seed, n, rows } = JSON.parse(fs.readFileSync(path.join(OUT, 'wH-sample.json'), 'utf8'));

// ---- POSITIVE CONTROLS: prove the grep harness fires before trusting any 0 ----
const controls = [
  { name: 'page:Campaign.md:CampaignBehavior', args: ['-cE', '\\bCampaignBehavior\\b', path.join(CONTENT, 'v1.3.0/en/api/campaign/Campaign.md')] },
  { name: 'page:AgentController.md:GetClosestAgent', args: ['-cE', '\\bGetClosestAgent\\b', path.join(CONTENT, 'v1.4.5/zh/api/mission-ext/AgentController.md')] },
  { name: 'tree:1.3.0:CampaignBehaviorBase', args: ['-rlE', '\\bCampaignBehaviorBase\\b', path.join(ROOT, 'bannerlord-1.3.0'), '--include=*.cs'] },
  { name: 'tree:1.4.5:WriteObjects(plural,substring-trap)', args: ['-rlE', '\\bWriteObjects\\b', path.join(ROOT, 'bannerlord-1.4.5'), '--include=*.cs'] },
  { name: 'tree:1.4.5:WriteObject(singular,expected0)', args: ['-rlE', '\\bWriteObject\\b', path.join(ROOT, 'bannerlord-1.4.5'), '--include=*.cs'] },
];
const ctlOut = [];
for (const c of controls) {
  const r = spawnSync('grep', c.args, { encoding: 'utf8', maxBuffer: 1 << 28 });
  const lines = (r.stdout || '').split('\n').filter(Boolean);
  ctlOut.push({ name: c.name, exit: r.status, n_lines: lines.length, sample: lines.slice(0, 3) });
  console.log('CONTROL %-55s exit=%s n=%d', c.name, r.status, lines.length);
}

// ---- per-row evidence ----
const ev = [];
for (const row of rows) {
  const pageAbs = path.join(CONTENT, row.page);
  const tree = path.join(ROOT, row.tree);

  const pg = spawnSync('grep', ['-cE', `\\b${row.ident}\\b`, pageAbs], { encoding: 'utf8', maxBuffer: 1 << 28 });
  const pageRaw = (pg.stdout || '').trim();
  const pageCount = pg.status === 0 ? parseInt(pageRaw, 10) : 0;

  const tr = spawnSync('grep', ['-rlE', `\\b${row.ident}\\b`, tree, '--include=*.cs'], { encoding: 'utf8', maxBuffer: 1 << 28 });
  const files = (tr.stdout || '').split('\n').filter(Boolean);
  const treeCount = tr.status === 0 ? files.length : 0;

  // (g) SUBSTRING-FRAGMENT test: does any real token in THIS tree CONTAIN the flagged token?
  // Objective, per lead-20's definition: flagged ⊂ real (proper substring).
  const fr = spawnSync('grep', ['-rhoE', `[A-Za-z_][A-Za-z0-9_]*${row.ident}[A-Za-z0-9_]*|${row.ident}[A-Za-z0-9_]+`, tree, '--include=*.cs'], { encoding: 'utf8', maxBuffer: 1 << 28 });
  const containing = [...new Set((fr.stdout || '').split('\n').filter(Boolean).filter(t => t !== row.ident))].slice(0, 6);

  // (f) VERSION-SKEW: presence of the EXACT token in every version tree (independent of the
  // version-matched tree the detector used).
  const crossTree = {};
  for (const v of ['bannerlord-1.3.0', 'bannerlord-1.3.15', 'bannerlord-1.4.5', 'bannerlord-1.4.6', 'bannerlord-1.4.7', 'bannerlord-1.5.3']) {
    const cr = spawnSync('grep', ['-rlE', `\\b${row.ident}\\b`, path.join(ROOT, v), '--include=*.cs'], { encoding: 'utf8', maxBuffer: 1 << 28 });
    const cf = (cr.stdout || '').split('\n').filter(Boolean);
    crossTree[v] = { n: cr.status === 0 ? cf.length : 0, exit: cr.status, files: cf.slice(0, 2).map(f => f.replace(ROOT + '/', '').replace(/\\/g, '/')) };
  }

  ev.push({
    ident: row.ident, page: row.page, ver: row.ver, tree: row.tree,
    page_sha256: row.page_sha256, in_phaseD: row.in_phaseD, n_occ: row.n_occ, n_pages: row.n_pages,
    page_grep_cmd: `grep -cE '\\b${row.ident}\\b' ${row.page}`,
    page_grep_stdout: pageRaw, page_grep_exit: pg.status, page_grep_stderr: (pg.stderr || '').trim(),
    page_count: pageCount,
    tree_grep_cmd: `grep -rlE '\\b${row.ident}\\b' ${row.tree} --include='*.cs'`,
    tree_grep_exit: tr.status, tree_count: treeCount, tree_files: files.slice(0, 5),
    containing_tokens: containing,
    cross_tree: crossTree,
    cross_tree_nonzero: Object.entries(crossTree).filter(([, v]) => v.n > 0).map(([k, v]) => `${k}:${v.n}`),
    page_context: row.page_context,
  });
  console.log('ROW %-48s page=%s tree=%d', row.ident, pageCount, treeCount);
}

fs.writeFileSync(path.join(OUT, 'wH-evidence.json'), JSON.stringify({ seed, n, controls: ctlOut, evidence: ev }, null, 1));
console.log('\nWROTE wH-evidence.json  rows=%d', ev.length);
console.log('SUMMARY: page_count>0 = %d/%d ; tree_count==0 = %d/%d',
  ev.filter(e => e.page_count > 0).length, ev.length,
  ev.filter(e => e.tree_count === 0).length, ev.length);
console.log('grep exit codes: page', JSON.stringify(ev.reduce((a, e) => (a[e.page_grep_exit] = (a[e.page_grep_exit] || 0) + 1, a), {})));
console.log('grep exit codes: tree', JSON.stringify(ev.reduce((a, e) => (a[e.tree_grep_exit] = (a[e.tree_grep_exit] || 0) + 1, a), {})));
