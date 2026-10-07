// 只读：逐字节判断 0x0A 前是否为 0x0D（契约 §行尾陷阱 要求的字节级判据）
import fs from 'node:fs';
import path from 'node:path';
const scope = fs.readFileSync('tools/_deadmember-scope.txt', 'utf8').split(/\r?\n/)
  .map(s => s.trim()).filter(s => s.startsWith('content/'));
let crlf = 0, lfOnly = 0, mixed = 0, bom = 0;
const detail = [];
for (const rel of scope) {
  if (!fs.existsSync(rel)) { detail.push(['MISSING', rel]); continue; }
  const buf = fs.readFileSync(rel);
  if (buf.length >= 3 && buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) bom++;
  let lf = 0, c = 0;
  for (let i = 0; i < buf.length; i++) {
    if (buf[i] === 0x0A) { lf++; if (i > 0 && buf[i - 1] === 0x0D) c++; }
  }
  const kind = c === lf ? 'CRLF' : (c === 0 ? 'LF' : 'MIXED');
  if (kind === 'CRLF') crlf++; else if (kind === 'LF') lfOnly++; else mixed++;
  detail.push([kind, `${c}/${lf}`, rel]);
}
console.log(`分母 ${scope.length} 页`);
console.log(`CRLF ${crlf} · LF-only ${lfOnly} · MIXED ${mixed} · BOM ${bom}`);
const byBucket = {};
for (const [k, , rel] of detail) {
  const m = /api\/([^/]+)\//.exec(rel);
  const b = m ? m[1] : '?';
  byBucket[b] = byBucket[b] || { CRLF: 0, LF: 0, MIXED: 0 };
  byBucket[b][k === 'CRLF' ? 'CRLF' : k === 'LF' ? 'LF' : 'MIXED']++;
}
console.log('按桶:', JSON.stringify(byBucket));
console.log('契约声称 2/80 CRLF。实测不符的页（LF-only）:');
detail.filter(d => d[0] === 'LF').forEach(d => console.log('  LF      ' + d[1] + '  ' + d[2]));
