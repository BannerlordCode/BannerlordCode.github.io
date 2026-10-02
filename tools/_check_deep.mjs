// One-page deep_pass checker for the handwritten-policy gate.
// Usage: node _check_deep.mjs "<absolute-page-path>"
import { readFileSync } from 'node:fs';
import { classifyPage } from './lib/handwritten-policy.mjs';

const p = process.argv[2];
if (!p) {
  console.error('usage: node _check_deep.mjs <page.md>');
  process.exit(2);
}
const text = readFileSync(p, 'utf8');
console.log(JSON.stringify(classifyPage(p, text)));
