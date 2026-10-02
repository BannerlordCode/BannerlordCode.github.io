import { readFileSync, existsSync } from 'node:fs';
import { classifyPage } from './lib/handwritten-policy.mjs';
import path from 'node:path';

const ROOT = process.cwd();
const cands = process.argv.slice(2);
for (const [bucket, name] of cands.map((c) => c.split('/'))) {
  for (const lang of ['en', 'zh']) {
    const rel = `content/v1.3.15/${lang}/api/${bucket}/${name}.md`;
    const abs = path.resolve(ROOT, rel);
    if (!existsSync(abs)) { console.log(`${rel}\tMISSING`); continue; }
    const t = readFileSync(abs, 'utf8');
    const r = classifyPage(abs, t);
    console.log(`${rel}\t${r.status}\t${r.reasons.join(',')}  [len=${t.length}]`);
  }
}