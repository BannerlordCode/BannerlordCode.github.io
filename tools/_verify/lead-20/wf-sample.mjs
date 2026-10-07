// W-F: reproducible sample of distinct flagged identifiers + evidence gathering.
// Read-only: writes only under tools/_verify/lead-20/.
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import crypto from 'node:crypto';

const REPO = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const CONTENT = path.join(REPO, 'content');
const OUT = path.join(REPO, 'tools/_verify/lead-20');
const TREES = 'C:/WorkSpace/Bannerlord';

const l1f = JSON.parse(fs.readFileSync(path.join(OUT, 'phaseD-layer1-filtered.json'), 'utf8'));

// Build distinct identifiers -> list of {page, ver}
const byIdent = new Map();
for (const r of l1f) {
  if (!byIdent.has(r.ident)) byIdent.set(r.ident, []);
  byIdent.get(r.ident).push({ page: r.page, ver: r.ver });
}
const distinctIdents = [...byIdent.keys()].sort();
console.log('distinct identifiers:', distinctIdents.length);

// Seeded PRNG (LCG) for reproducibility
const SEED = 20261007;
let s = SEED;
const rnd = () => (s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;

// Fisher-Yates shuffle of distinct identifiers
const arr = [...distinctIdents];
for (let i = arr.length - 1; i > 0; i--) {
  const j = Math.floor(rnd() * (i + 1));
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
const SAMPLE_N = 60;
const sampled = arr.slice(0, SAMPLE_N);
console.log('sampled:', sampled.length, 'seed:', SEED);

// grep -w = word-boundary match (portable, no -P locale needed)
function grepW(pattern, fileOrDir, recursive = false, includeCs = false) {
  const args = ['-w'];
  if (recursive) args.push('-r');
  if (includeCs) args.push('--include=*.cs');
  args.push('--', pattern, fileOrDir);
  const r = spawnSync('grep', args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  return { code: r.status, out: (r.stdout || '').trim(), err: (r.stderr || '').trim() };
}

function grepWCount(pattern, dir) {
  const r = grepW(pattern, dir, true, true);
  if (r.out === '') return 0;
  return r.out.split('\n').filter(Boolean).length;
}

const results = [];
for (const ident of sampled) {
  const occs = byIdent.get(ident);
  const rep = occs[0];
  const pagePath = path.join(CONTENT, rep.page);

  // --- page evidence ---
  let pageStat = null, pageSha = null, pageGit = null, pageExists = false;
  let grepOutput = '';
  try {
    pageExists = fs.existsSync(pagePath);
    if (pageExists) {
      const st = fs.statSync(pagePath);
      pageStat = `${st.size} ${st.mtime.toISOString()}`;
      pageSha = crypto.createHash('sha256').update(fs.readFileSync(pagePath)).digest('hex');
      const g = spawnSync('git', ['-C', REPO, 'status', '--porcelain', '--', rep.page], { encoding: 'utf8' });
      pageGit = (g.stdout || '').trim() || '(clean)';
      const gr = grepW(ident, pagePath);
      grepOutput = gr.out ? gr.out.split('\n').slice(0, 5).join('\n') : '(NO HIT ON PAGE)';
    }
  } catch (e) {
    grepOutput = '(page error: ' + e.message + ')';
  }

  // --- source tree evidence (version-matched) ---
  const treePath = path.join(TREES, rep.ver);
  const treeExists = fs.existsSync(treePath);
  let treeHitCount = null;
  let treeSample = '';
  if (treeExists) {
    treeHitCount = grepWCount(ident, treePath);
    if (treeHitCount > 0) {
      const tr = grepW(ident, treePath, true, true);
      treeSample = tr.out.split('\n').slice(0, 3).join('\n');
    }
  }

  // --- cross-version: does it exist in ANY tree? ---
  const crossVer = {};
  for (const v of ['1.3.0', '1.3.15', '1.4.5', '1.4.6', '1.4.7', '1.5.3']) {
    const tp = path.join(TREES, 'bannerlord-' + v);
    if (!fs.existsSync(tp)) continue;
    crossVer['bannerlord-' + v] = grepWCount(ident, tp);
  }

  results.push({
    ident,
    page: rep.page,
    ver: rep.ver,
    allOccurrences: occs,
    pageExists,
    pageStat,
    pageSha,
    pageGit,
    grepOutput,
    treePath,
    treeExists,
    treeHitCount,
    treeSample,
    crossVer,
  });
}

fs.writeFileSync(path.join(OUT, 'wf-sample-evidence.json'), JSON.stringify(results, null, 1));
console.log('WROTE wf-sample-evidence.json  (%d entries)', results.length);
console.log('seed=%d  sample=%d  distinct_idents=%d', SEED, SAMPLE_N, distinctIdents.length);
// quick sanity: how many have treeHitCount > 0 (detector was WRONG about the tree)
const wrong = results.filter(r => r.treeHitCount > 0);
console.log('entries where tree actually HAS the ident (detector wrong):', wrong.length);
const noPage = results.filter(r => !r.pageExists);
console.log('entries where page file missing:', noPage.length);
const noGrep = results.filter(r => r.grepOutput === '(NO HIT ON PAGE)');
console.log('entries where ident NOT found on page (word-boundary):', noGrep.length);
