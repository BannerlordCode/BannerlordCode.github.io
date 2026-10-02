import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { classifyPage } from './lib/handwritten-policy.mjs';

const API_ROOT = 'content/v1.4.5/zh/api';

// collect all md files under api root
function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = `${dir}/${entry}`;
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (entry.endsWith('.md')) out.push(p);
  }
  return out;
}

const files = walk(API_ROOT);
const mentalColonRe = /^##\s+心智模型[：:].*$/mu;

let total = 0, stub = 0, deep = 0, noise = 0;
let wouldFlip = 0;
const flipList = [];
const reasonsOfFlip = {};

for (const f of files) {
  const text = readFileSync(f, 'utf8');
  const cls = classifyPage(f, text);
  total++;
  if (cls.status === 'deep_pass') deep++;
  else if (cls.status === 'noise') noise++;
  else {
    stub++;
    // simulate normalization
    if (mentalColonRe.test(text)) {
      const fixed = text.replace(mentalColonRe, '## 心智模型');
      const cls2 = classifyPage(f, fixed);
      if (cls2.status === 'deep_pass') {
        wouldFlip++;
        flipList.push(f);
        for (const r of cls.reasons) reasonsOfFlip[r] = (reasonsOfFlip[r] || 0) + 1;
      }
    }
  }
}

console.log(JSON.stringify({
  total, deep, stub, noise,
  stubWithColonMental: (() => { let n = 0; for (const f of files){ const t=readFileSync(f,'utf8'); if(classifyPage(f,t).status!=='deep_pass' && mentalColonRe.test(t)) n++; } return n; })(),
  wouldFlipWithHeadingFixOnly: wouldFlip,
  reasonsOfFlip,
  sampleFlip: flipList.slice(0, 30),
}, null, 2));

writeFileSync('tools/_diag_flip_list.json', JSON.stringify(flipList, null, 2));
