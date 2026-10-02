// worker-6 清点脚本：只报告，不写页面正文。
// 用法: node tools/_v153_deep-facade.mjs <Type.cs 相对路径> [grep过滤]
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const SRC = 'C:/WorkSpace/Bannerlord/bannerlord-1.5.3';
const file = process.argv[2];
const filter = process.argv[3] || '';
const text = readFileSync(join(SRC, file), 'utf8');
const lines = text.split(/\r?\n/);

const nsIdx = lines.findIndex((l) => /^namespace\s+/.test(l));
console.log('NAMESPACE: ' + (lines[nsIdx] || '').replace(/^namespace\s+/, '').replace(/;\s*$/, '').trim());
for (let i = nsIdx + 1; i < lines.length; i++) {
  const m = lines[i].match(/^\t(?:public|internal)[\w\s]*\b(class|interface|struct|enum)\s+([\w<>,\.\s]+)/);
  if (m) { console.log('DECL: ' + lines[i].trim()); break; }
}

// 花括号深度跟踪：只收 type 体内第一层成员
let depth = 0;
let started = false;
const out = [];
for (const raw of lines) {
  const l = raw.trim();
  for (const ch of raw) {
    if (ch === '{') { depth++; if (depth === 2) started = true; }
    else if (ch === '}') depth--;
  }
  if (!started) continue;
  if (!l || l === '{' || l === '}') continue;
  if (depth !== 2) continue;
  if (filter && !(new RegExp(filter, 'i')).test(l)) continue;
  if (/^(public|protected)\b/.test(l)) out.push(l);
}
console.log('--- MEMBERS (' + out.length + ') ---');
console.log(out.join('\n'));