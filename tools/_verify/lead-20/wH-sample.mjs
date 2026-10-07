// W-H: reproducible random sample of Layer-1 flagged identifiers.
// READ-ONLY w.r.t. content/** and templates/**. Writes only under tools/_verify/lead-20/.
//
// Sampling method:
//   1. Load phaseC-layer1.json (the reported detector output: 2746 occ / 1314 distinct).
//   2. Build the DISTINCT identifier list, then SORT it (lexicographic) so the sample is
//      independent of file order.
//   3. Fisher-Yates shuffle with mulberry32 PRNG, seed = 20261007.
//   4. Take the first N=60 identifiers.
//   5. For each sampled identifier, pick a deterministic representative flagged entry:
//      the entry with the lexicographically smallest (page, ver) pair.
// Reproducible: same seed + same phaseC-layer1.json (sha256 3b38ee92...) -> same 60 rows.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const REPO = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const CONTENT = path.join(REPO, 'content');
const OUT = path.join(REPO, 'tools/_verify/lead-20');
const N = 60;
const SEED = 20261007;

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const l1 = JSON.parse(fs.readFileSync(path.join(OUT, 'phaseC-layer1.json'), 'utf8'));
const l1f = JSON.parse(fs.readFileSync(path.join(OUT, 'phaseD-layer1-filtered.json'), 'utf8'));
const phaseDIdents = new Set(l1f.map(r => r.ident));

const idents = [...new Set(l1.map(r => r.ident))].sort();
const rnd = mulberry32(SEED);
const a = [...idents];
for (let i = a.length - 1; i > 0; i--) {
  const j = Math.floor(rnd() * (i + 1));
  [a[i], a[j]] = [a[j], a[i]];
}
const picked = a.slice(0, N).sort();

const rows = picked.map(ident => {
  const cands = l1.filter(r => r.ident === ident)
    .sort((x, y) => (x.page < y.page ? -1 : x.page > y.page ? 1 : 0) || (x.ver < y.ver ? -1 : 1));
  const rep = cands[0];
  const pageAbs = path.join(CONTENT, rep.page);
  let sha = 'PAGE_MISSING';
  let lines = [];
  if (fs.existsSync(pageAbs)) {
    const buf = fs.readFileSync(pageAbs);
    sha = crypto.createHash('sha256').update(buf).digest('hex');
    const text = buf.toString('utf8').split('\n');
    text.forEach((ln, i) => { if (ln.includes(ident)) lines.push({ n: i + 1, t: ln.trim().slice(0, 260) }); });
  }
  return {
    ident,
    page: rep.page,
    ver: rep.ver,
    tree: rep.ver,                    // tree dir name == ver in this dataset
    n_occ: cands.length,              // how many flagged occurrences this ident has
    n_pages: new Set(cands.map(c => c.page)).size,
    in_phaseD: phaseDIdents.has(ident),
    page_sha256: sha,
    page_line_count: lines.length,
    page_context: lines.slice(0, 3),
  };
});

fs.writeFileSync(path.join(OUT, 'wH-sample.json'), JSON.stringify({
  seed: SEED, n: N, source: 'phaseC-layer1.json',
  source_sha256: '3b38ee9240052915a94ed03159d1ae0f87cb33406981f7b147e076dc3640dd86',
  distinct_pool: idents.length, rows,
}, null, 1));

console.log('seed=%d  N=%d  pool=%d  distinctPool=%d', SEED, N, l1.length, idents.length);
for (const r of rows) console.log('%s\t%s\t%s\tphaseD=%s\tocc=%d\tpages=%d\tpagelines=%d',
  r.ident, r.ver, r.page, r.in_phaseD, r.n_occ, r.n_pages, r.page_line_count);
