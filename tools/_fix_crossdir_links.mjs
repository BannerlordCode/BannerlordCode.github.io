// Remediation (phase 2): cross-top-folder `../X/...` links need one more `../`
// because the page renders as a directory, so a single `../` only reaches its
// own containing folder. Fix only links that are currently broken AND become
// valid with `../../`. Leave correct sibling `../X` links alone.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, posix, normalize } from 'node:path';

const root = join(process.cwd(), 'content');
const targets = [
  'v1.4.5/zh/api/campaign/PartyAgentOrigin.md',
  'v1.4.5/zh/api/campaign/SimpleAgentOrigin.md',
  'v1.4.5/zh/api/core-extra/BasicCharacterObject.md',
];

function existsAsPage(t) {
  if (t === null) return false;
  return existsSync(normalize(t + '.md')) || existsSync(normalize(join(t, '_index.md')));
}
function resolveTarget(fromRoute, href) {
  const h = href.split('#')[0];
  const base = fromRoute.endsWith('/') ? fromRoute : fromRoute + '/';
  const rel = posix.normalize(posix.join(base, h)).replace(/^\//, '');
  return normalize(join(root, rel)).replace(/[\\/]+$/, '');
}

const linkRe = /\[([^\]]+)\]\(\.\.\/([^)\s]+)\)/g; // only ../ links
let allOk = true;
const report = [];

for (const rel of targets) {
  const abs = join(root, rel);
  const txt = readFileSync(abs, 'utf8');
  const pageBase = posix.basename(rel).replace(/\.md$/, '');
  const fromRoute = posix.dirname(rel) + '/' + pageBase + '/';
  let m;
  const fixes = [];
  linkRe.lastIndex = 0;
  while ((m = linkRe.exec(txt))) {
    const text = m[1];
    const raw = m[2]; // e.g. "mission/Mission/" or "Hero"
    const cur = '../' + raw;
    if (existsAsPage(resolveTarget(fromRoute, cur))) {
      continue; // already correct (sibling link) -> leave alone
    }
    const fixed = '../../' + raw.replace(/\/+$/, ''); // add one more ../
    const t = resolveTarget(fromRoute, fixed);
    if (!existsAsPage(t)) {
      report.push(`FAIL ${rel}: ../${raw} -> ${fixed} (target missing)`);
      allOk = false;
      continue;
    }
    fixes.push({ full: m[0], repl: `[${text}](${fixed})` });
  }
  report.push(`CHECK ${rel}: ${fixes.length} cross-dir links to fix`);
  if (allOk) {
    let out = txt;
    for (const f of fixes) out = out.split(f.full).join(f.repl);
    writeFileSync(abs, out, 'utf8');
    report.push(`  -> wrote ${fixes.length} corrections`);
  }
}

console.log(report.join('\n'));
console.log(allOk ? '\nALL_CORRECTIONS_VALIDATED' : '\nABORTED: some targets missing (no files written)');
process.exitCode = allOk ? 0 : 1;
