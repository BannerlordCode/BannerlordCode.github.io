// One-off analysis: bucket stubs by immediate subdir under content/<ver>/<lang>/api
import { readdirSync, statSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const root = process.argv[2];
const AUTOGEN = /description:\s*["'][^"'\n]*自动生成类参考[^"'\n]*["']/u;
const OVERVIEW = /(阅读时(?:先|再)?看?(?:属性|状态))|(是\s*TaleWorlds[^\n。]*公开类型)/u;
const PLACE = /\b[A-Za-z_]\w*\s*=\s*\.\.\.\s*;?/;
const DOUBLEI = /\bII[A-Z]\w+\b/;

function* walk(d) {
  let e;
  try { e = readdirSync(d); } catch { return; }
  for (const n of e) {
    if (n.startsWith('.')) continue;
    const p = join(d, n);
    const s = statSync(p);
    if (s.isDirectory()) yield* walk(p);
    else if (n.endsWith('.md')) yield p;
  }
}

const buckets = new Map();
let total = 0, stub = 0;
for (const f of walk(root)) {
  total++;
  const t = readFileSync(f, 'utf8');
  const fm = (t.match(/^---\r?\n([\s\S]*?)\r?\n---/) || [, ''])[1];
  const isStub = AUTOGEN.test(fm) || OVERVIEW.test(t) || PLACE.test(t) || DOUBLEI.test(t);
  const rel = relative(root, f).split(sep);
  const bucket = rel.length > 1 ? rel.slice(0, 2).join('/') : rel[0];
  if (!buckets.has(bucket)) buckets.set(bucket, { total: 0, stub: 0 });
  const b = buckets.get(bucket);
  b.total++;
  if (isStub) { b.stub++; stub++; }
}

const rows = [...buckets.entries()].sort((a, b) => b[1].stub - a[1].stub);
console.log(`ROOT ${root}`);
console.log(`TOTAL ${total}  STUB ${stub}  (${(100*stub/total).toFixed(1)}%)`);
console.log('bucket | total | stub');
for (const [k, v] of rows) console.log(`${k} | ${v.total} | ${v.stub}`);
