import { classifyPage } from './lib/handwritten-policy.mjs';
import { readFileSync } from 'fs';
const files = [
  'content/v1.4.5/zh/api/view/_index.md',
  'content/v1.4.5/zh/api/gui/gauntlet-ui/_index.md'
];
for (const f of files) {
  const txt = readFileSync(f, 'utf8');
  const r = classifyPage(f, txt);
  console.log(f, '=>', r.status, JSON.stringify(r.reasons));
}
