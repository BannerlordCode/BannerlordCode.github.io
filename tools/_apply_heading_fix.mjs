import { readFileSync, writeFileSync } from 'node:fs';
import { classifyPage } from './lib/handwritten-policy.mjs';

const list = JSON.parse(readFileSync('tools/_diag_heading_flip_list.json', 'utf8'));
const mentalRe = /^##\s+心智模型[：:][^\r\n]*$/mu;
const depRe = /^##\s+依赖(?!关系|图|关联)[^\r\n]*$/mu;

let applied = 0, failed = 0, skipped = 0;
const failedFiles = [];
for (const f of list) {
  const t = readFileSync(f, 'utf8');
  const before = classifyPage(f, t);
  if (before.status === 'deep_pass') { skipped++; continue; }
  const fixed = t.replace(mentalRe, '## 心智模型').replace(depRe, '## 依赖');
  if (fixed === t) { skipped++; continue; }
  const after = classifyPage(f, fixed);
  if (after.status !== 'deep_pass') {
    failed++; failedFiles.push(f + ' :: ' + after.reasons.join(','));
    continue;
  }
  writeFileSync(f, fixed);
  applied++;
}
console.log(JSON.stringify({ target: list.length, applied, skipped, failed, failedFiles }, null, 2));
