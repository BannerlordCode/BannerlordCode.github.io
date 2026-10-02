import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { classifyPage } from './lib/handwritten-policy.mjs';

const API_ROOT = 'content/v1.4.5/zh/api';
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

const mentalRe = /^##\s+心智模型[：:][^\r\n]*$/mu;
const depRe = /^##\s+依赖(?!关系|图|关联)[^\r\n]*$/mu; // 依赖... but not the exact allowed tokens

function normalize(text) {
  return text
    .replace(mentalRe, '## 心智模型')
    .replace(depRe, '## 依赖');
}

const files = walk(API_ROOT);
let flip = 0;
const list = [];
const reasons = {};
let mentalChanged = 0, depChanged = 0;

for (const f of files) {
  const t = readFileSync(f, 'utf8');
  const before = classifyPage(f, t);
  if (before.status === 'deep_pass') continue;
  const fixed = normalize(t);
  if (fixed !== t) {
    if (mentalRe.test(t)) mentalChanged++;
    if (depRe.test(t)) depChanged++;
  }
  const after = classifyPage(f, fixed);
  if (after.status === 'deep_pass') {
    flip++;
    list.push(f);
  } else {
    // record why it still fails (the dominant remaining reason)
    for (const r of after.reasons) reasons[r] = (reasons[r] || 0) + 1;
  }
}

console.log(JSON.stringify({
  stubScanned: files.length,
  mentalHeadingNormalized: mentalChanged,
  depHeadingNormalized: depChanged,
  wouldFlipToDeep: flip,
  remainingReasonsAfterFix: reasons,
  sampleFlip: list.slice(0, 40),
}, null, 2));
writeFileSync('tools/_diag_heading_flip_list.json', JSON.stringify(list, null, 2));
