import { classifyPage } from './lib/handwritten-policy.mjs';
import { readFileSync } from 'node:fs';
const rel = process.argv[2];
if (!rel) { console.error('usage: node tools/_tmp_verify_one.mjs <rel-path>'); process.exit(2); }
let t; try { t = readFileSync(rel, 'utf8'); } catch (e) { console.error('MISSING', rel); process.exit(2); }
const r = classifyPage(rel, t);
console.log(r.status.toUpperCase());
console.log('reasons: ' + r.reasons.join(' | '));
process.exit(r.status === 'deep_pass' ? 0 : 1);
