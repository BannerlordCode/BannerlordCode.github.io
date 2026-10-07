// Per-page gate helper for worker D (read-only checker, writes nothing under content/).
// Usage: node tools/_worker86_check.mjs <file.md> [...more.md]
import { readFileSync } from 'node:fs';
import { classifyPage } from './lib/handwritten-policy.mjs';
import { checkPage, sourceCorpus } from './lib/anti-fabrication.mjs';
import { resolve } from 'node:path';

const REPO = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io/';
const corpus = sourceCorpus();
let bad = 0;
for (const arg of process.argv.slice(2)) {
  const abs = resolve(REPO, arg);
  const text = readFileSync(abs, 'utf8');
  const r = classifyPage(abs, text);
  const f = checkPage(abs, corpus);
  const file = arg.replace(/^.*content\//, '');
  const ok = r.status === 'deep_pass' && f.fabrications.length === 0;
  if (!ok) bad++;
  console.log(
    (ok ? 'OK   ' : 'FAIL ') + file + '  ' + JSON.stringify(r) +
    (f.fabrications.length ? '  FABRICATED=' + JSON.stringify(f.fabrications) : '')
  );
  if (text.includes('的自动生成类参考')) console.log('     !! auto-gen boilerplate still present');
}
console.log(bad === 0 ? 'ALL PASS' : bad + ' FAILING');