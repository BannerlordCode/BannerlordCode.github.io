import { readFileSync } from 'node:fs';
import { classifyPage, extractFamilyEntries } from './lib/handwritten-policy.mjs';

const p = 'content/v1.3.15/zh/api/core/_index.md';
const t = readFileSync(p, 'utf8');
const c = classifyPage(p, t);
console.log('STATUS:', c.status);
console.log('REASONS:', JSON.stringify(c.reasons));
const entries = extractFamilyEntries(p, t);
console.log('FAMILY ENTRIES:', entries.length);
const byNs = {};
for (const e of entries) { const k = e.namespace || '(none)'; byNs[k] = (byNs[k]||0)+1; }
console.log('BY NAMESPACE:', JSON.stringify(byNs));
console.log('SAMPLE:', JSON.stringify(entries.slice(0,3), null, 0));
