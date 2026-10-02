import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { classifyPage } from './lib/handwritten-policy.mjs';

const dir = 'content/v1.3.15/zh/api/campaign-ext';
const files = readdirSync(dir).filter((f) => f.endsWith('.md'));

let deep = 0, stub = 0, noise = 0, other = 0;
const stubSamples = [];
const noiseSamples = [];
for (const f of files) {
  const p = join(dir, f);
  const text = readFileSync(p, 'utf8');
  const r = classifyPage(p, text);
  if (r.status === 'deep_pass') deep++;
  else if (r.status === 'stub') { stub++; if (stubSamples.length < 40) stubSamples.push(f + ' :: ' + (r.reasons||[]).join(',')); }
  else if (r.status === 'noise') { noise++; if (noiseSamples.length < 15) noiseSamples.push(f + ' :: ' + (r.reasons||[]).join(',')); }
  else other++;
}
console.log(`TOTAL=${files.length} deep=${deep} stub=${stub} noise=${noise} other=${other}`);
console.log('--- STUB SAMPLES (file :: reasons) ---');
for (const s of stubSamples) console.log(s);
console.log('--- NOISE SAMPLES ---');
for (const s of noiseSamples) console.log(s);
