// Verify L6 hub pages: deep_pass gate + Zola clean-URL link resolution.
import { classifyPage } from '../lib/handwritten-policy.mjs';
import { readFileSync, existsSync } from 'node:fs';
import { posix } from 'node:path';
const presolve = posix.resolve;

const repo = process.cwd();
const files = [
  'content/v1.3.15/zh/api/gui/Brush.md',
  'content/v1.3.15/zh/api/gui/Widget.md',
  'content/v1.3.15/zh/api/viewmodel/CharacterViewModel.md',
  'content/v1.3.15/zh/api/viewmodel/HintViewModel.md',
  'content/v1.3.15/zh/api/gui/Material.md',
];

function resolveLink(baseUrlDir, href) {
  // baseUrlDir is the rendered route dir of the SOURCE page, e.g. v1.3.15/zh/api/gui/Brush
  const clean = href.split('#')[0].split('?')[0];
  if (!clean || clean.startsWith('http') || clean.startsWith('mailto:')) return null;
  const abs = presolve('/' + baseUrlDir, clean).slice(1); // posix, strip leading /
  // Zola clean URL: trailing slash => section (_index.md); else leaf (.md)
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
  const baseUrlDir = f.replace(/^content\//, '').replace(/\.md$/, ''); // v1.3.15/zh/api/gui/Brush
  const cls = classifyPage(f, text);
  console.log(`\n=== ${f} ===`);
  console.log('classify:', JSON.stringify(cls));

  // link extraction
  const linkRe = /\[[^\]]+\]\(([^)]+)\)/g;
  let m, broken = [];
  while ((m = linkRe.exec(text))) {
    const r = resolveLink(baseUrlDir, m[1]);
    if (r === null) continue;
    if (!r.ok) broken.push(m[1] + '  ->  ' + r.target);
  }
  console.log('broken links:', broken.length ? broken : 'NONE');
  if (cls.status !== 'deep_pass' || broken.length) allOk = false;
}
console.log('\nRESULT:', allOk ? 'PASS' : 'FAIL');
process.exit(allOk ? 0 : 1);
