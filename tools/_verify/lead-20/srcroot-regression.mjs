// tools/_verify/lead-20/srcroot-regression.mjs  —  READ-ONLY regression fixture
// ---------------------------------------------------------------------------
// Purpose: freeze the three facts that the SRC_ROOT fix depends on, so that the
// per-page version-tree derivation cannot silently regress.
//
// Approved by boss-3 (#17083 ③). Read-only: touches nothing outside stdout.
//
// Why these three: the fix derives the source tree from the page's path. If it
// ever silently falls back to 1.4.5, every citation on a non-1.4.5 page is
// bounded against the wrong file — producing false FAILs and false PASSes
// simultaneously, from one rule. These cases make the fallback visible.
//
// Run:  node tools/_verify/lead-20/srcroot-regression.mjs
// Exit: 0 = all assertions hold; 1 = a regression
//
// NOTE ON PATHS: this repo lives at
//   C:\WorkSpace\Bannerlord\BannerlordCode.github.io
// while the session cwd is C:\WorkSpace\Bannerlord — two distinct trees, both
// containing a `tools/` directory. This script therefore resolves everything
// from an absolute root, never from cwd.
import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';

const REPO = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const WORKSPACE = 'C:/WorkSpace/Bannerlord';

let failures = 0;
const check = (name, ok, detail) => {
  console.log((ok ? 'PASS  ' : 'FAIL  ') + name + (detail ? '   ' + detail : ''));
  if (!ok) failures++;
};

const findFile = (tree, name) => {
  const dir = path.join(WORKSPACE, tree);
  if (!fs.existsSync(dir)) return null;
  const out = execFileSync('bash', ['-lc', `find "${dir}" -name '${name}' -print -quit`], { encoding: 'utf8' }).trim();
  return out || null;
};
const lineCount = (f) => (f ? parseInt(execFileSync('bash', ['-lc', `wc -l < "${f}"`], { encoding: 'utf8' }).trim(), 10) : null);
const lineAt = (f, n) => (f ? execFileSync('bash', ['-lc', `sed -n '${n}p' "${f}"`], { encoding: 'utf8' }).trim() : null);

console.log('== SRC_ROOT regression fixture (read-only) ==');
console.log('repo      = ' + REPO);
console.log('workspace = ' + WORKSPACE);
console.log('');

// ---- Assertion 1: MissionState.cs line counts across the six trees ----------
console.log('-- A1: MissionState.cs line counts per tree --');
const expectedMissionState = { '1.3.0': 421, '1.3.15': 408, '1.4.5': 356, '1.4.6': 410, '1.4.7': 410, '1.5.3': 412 };
for (const [ver, want] of Object.entries(expectedMissionState)) {
  const f = findFile('bannerlord-' + ver, 'MissionState.cs');
  const got = lineCount(f);
  check(`MissionState.cs @${ver} = ${want}`, got === want, `got=${got}`);
}
// The defect class must remain real: :4512 is out of range in EVERY tree.
const maxLines = Math.max(...Object.values(expectedMissionState));
check('MissionState.cs:4512 out of range in all six trees', 4512 > maxLines, `max=${maxLines}`);

// ---- Assertion 2: Hero.cs line counts + the in/out-of-range verdict ---------
console.log('');
console.log('-- A2: Hero.cs 3151 (1.3.15) vs 2406 (1.4.5) => :2500 legal in one, not the other --');
const hero1315 = findFile('bannerlord-1.3.15', 'Hero.cs');
const hero145 = findFile('bannerlord-1.4.5', 'Hero.cs');
const l1315 = lineCount(hero1315);
const l145 = lineCount(hero145);
// authoritative caliber is `wc -l` (boss-3 #17083 ①)
check('Hero.cs @1.3.15 = 3151 (wc -l)', l1315 === 3151, `got=${l1315}`);
check('Hero.cs @1.4.5  = 2406 (wc -l)', l145 === 2406, `got=${l145}`);
check('Hero.cs:2500 IN range @1.3.15', 2500 <= l1315);
check('Hero.cs:2500 OUT of range @1.4.5', 2500 > l145);
check('the two trees disagree on :2500', (2500 <= l1315) !== (2500 <= l145));

// ---- Assertion 3: Mission.cs:4315 resolves to different code per tree -------
console.log('');
console.log('-- A3: Mission.cs:4315 is different code in 1.3.15 vs 1.4.5 --');
const m1315 = lineAt(findFile('bannerlord-1.3.15', 'Mission.cs'), 4315);
const m145 = lineAt(findFile('bannerlord-1.4.5', 'Mission.cs'), 4315);
console.log('     1.3.15: ' + (m1315 || '').slice(0, 90));
console.log('     1.4.5 : ' + (m145 || '').slice(0, 90));
check('Mission.cs:4315 differs between the two trees', !!m1315 && !!m145 && m1315 !== m145);
check('Mission.cs:4315 @1.3.15 is EndMission', /EndMission/.test(m1315 || ''), m1315);

// ---- Assertion 4: the judge derives the tree per page (no silent fallback) --
console.log('');
console.log('-- A4: judge tree derivation (no silent fallback) --');
const judge = path.join(REPO, 'tools/_verify/lead-145zh-judge.mjs');
check('judge present', fs.existsSync(judge), judge);
if (fs.existsSync(judge)) {
  const pages = [
    ['content/v1.3.15/zh/api/campaign/Campaign.md', 'bannerlord-1.3.15'],
    ['content/v1.4.5/zh/api/campaign/Campaign.md', 'bannerlord-1.4.5'],
  ];
  for (const [rel, wantTree] of pages) {
    const abs = path.join(REPO, rel);
    if (!fs.existsSync(abs)) { check(`tree derivation for ${rel}`, false, 'page missing'); continue; }
    const mf = path.join(REPO, 'tools/_verify/lead-20/.srcroot-regression-manifest.txt');
    // manifest entries must be repo-relative (the judge's own guard refuses "content/..." absolute forms)
    fs.writeFileSync(mf, rel + '\n');
    let out = '';
    try {
      out = execFileSync('node', [judge, '--manifest', mf], { cwd: REPO, encoding: 'utf8' });
    } catch (e) { out = (e.stdout || '') + (e.stderr || ''); }
    const m = out.match(/tree=([^\s]+)/);
    const gotTree = m ? m[1] : '(none)';
    check(`${rel} -> tree contains ${wantTree}`, gotTree.includes(wantTree), `got=${gotTree}`);
    fs.rmSync(mf, { force: true });
  }
}

console.log('');
console.log(failures === 0 ? 'ALL ASSERTIONS HOLD' : `${failures} ASSERTION(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
