// Per-page gate for the 14 L5/L6 EN-sync target pages.
// Verifies: classifyPage deep_pass  +  Zola clean-URL link resolution  +  flags stale mis-bucket links.
import { classifyPage } from '../lib/handwritten-policy.mjs';
import { readFileSync, existsSync } from 'node:fs';
import { posix } from 'node:path';
const presolve = posix.resolve;

const repo = process.cwd();
const files = [
  'content/v1.3.15/en/api/campaign-ext/ConversationManager.md',
  'content/v1.3.15/en/api/campaign-ext/GameMenuManager.md',
  'content/v1.3.15/en/api/campaign-ext/GameMenuOption.md',
  'content/v1.3.15/en/api/campaign-ext/KingdomDecision.md',
  'content/v1.3.15/en/api/campaign-ext/MapEvent.md',
  'content/v1.3.15/en/api/gui/GamepadNavigationHelper.md',
  'content/v1.3.15/en/api/gui/LayoutBox.md',
  'content/v1.3.15/en/api/gui/Material.md',
  'content/v1.3.15/en/api/gui/SpriteFromTexture.md',
  'content/v1.3.15/en/api/gui/TextHelper.md',
  'content/v1.3.15/en/api/gui/Brush.md',
  'content/v1.3.15/en/api/gui/Widget.md',
  'content/v1.3.15/en/api/viewmodel/CharacterViewModel.md',
  'content/v1.3.15/en/api/viewmodel/HintViewModel.md',
];

const MISBUCKET = /\]\(\.\.\/\.\.\/campaign-ext\/(Brush|Widget)\)/;

function resolveLink(baseUrlDir, href) {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean || clean.startsWith('http') || clean.startsWith('mailto:')) return null;
  const abs = presolve('/' + baseUrlDir, clean).slice(1);
  const candidates = abs.endsWith('/')
    ? [abs.slice(0, -1) + '/_index.md', abs.slice(0, -1) + '.md']
    : [abs + '.md', abs + '/_index.md'];
  for (const c of candidates) {
    if (existsSync(repo + '/content/' + c)) return { ok: true, target: c };
  }
  return { ok: false, target: candidates[0] };
}

let allOk = true;
for (const f of files) {
  const text = readFileSync(repo + '/' + f, 'utf8');
  const baseUrlDir = f.replace(/^content\//, '').replace(/\.md$/, '');
  const cls = classifyPage(f, text);
  const linkRe = /\[[^\]]+\]\(([^)]+)\)/g;
  let m, broken = [], misbucket = [];
  while ((m = linkRe.exec(text))) {
    if (MISBUCKET.test(m[0])) misbucket.push(m[1]);
    const r = resolveLink(baseUrlDir, m[1]);
    if (r === null) continue;
    if (!r.ok) broken.push(m[1] + '  ->  ' + r.target);
  }
  const pass = cls.status === 'deep_pass' && broken.length === 0;
  if (!pass) allOk = false;
  console.log(`\n=== ${f.replace(/^content\/v1.3.15\/en\/api\//, '')} ===`);
  console.log('classify:', cls.status, '| broken:', broken.length ? broken : 'NONE', '| misbucket:', misbucket.length ? misbucket : 'none');
}
console.log('\nRESULT:', allOk ? 'PASS' : 'FAIL');
process.exit(allOk ? 0 : 1);
