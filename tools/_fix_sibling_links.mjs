// Remediation: convert broken `./Sibling/` links -> `../Sibling` for 6 recently
// handwritten pages whose sibling links wrongly resolved inside the page's own dir.
// Mirrors audit-links.mjs route semantics. Only rewrites when EVERY correction validates.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, posix, normalize } from 'node:path';

const root = join(process.cwd(), 'content');
const targets = [
  'v1.4.5/zh/api/campaign/AlleyModel.md',
  'v1.4.5/zh/api/campaign/JournalLog.md',
  'v1.4.5/zh/api/campaign/PartyAgentOrigin.md',
  'v1.4.5/zh/api/campaign/PartyGroupAgentOrigin.md',
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

const linkRe = /\[([^\]]+)\]\(\.\/([^)\s]+)\)/g; // only ./ sibling links
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
    const raw = m[2]; // e.g. "GameModels/" or "Hero"
    const corrected = '../' + raw.replace(/\/+$/, ''); // -> ../GameModels
    const t = resolveTarget(fromRoute, corrected);
    if (!existsAsPage(t)) {
      report.push(`FAIL ${rel}: ./${raw} -> ${corrected} (target missing)`);
      allOk = false;
      continue;
    }
    fixes.push({ full: m[0], repl: `[${text}](${corrected})` });
  }
  report.push(`CHECK ${rel}: ${fixes.length} ./ links to fix`);
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
