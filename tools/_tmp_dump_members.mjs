import fs from 'node:fs';

const file = process.argv[2];
const src = fs.readFileSync(file, 'utf8').split(/\r?\n/);
// strip comments
let depth = 0, inBlock = false;
const lines = src.map(l => {
  let out = '';
  let i = 0;
  while (i < l.length) {
    if (!inBlock && l[i] === '/' && l[i+1] === '/') break;
    if (!inBlock && l[i] === '/' && l[i+1] === '*') { inBlock = true; i += 2; continue; }
    if (inBlock && l[i] === '*' && l[i+1] === '/') { inBlock = false; i += 2; continue; }
    if (!inBlock && l[i] === '"') { out += l[i]; i++; while (i < l.length && l[i] !== '"') { out += l[i] === '\\' ? l[i] : l[i]; if (l[i] === '\\') out += l[++i]; i++; } if (i < l.length) out += l[i]; i++; continue; }
    out += l[i]; i++;
  }
  return out;
});
let br = 0;
for (const l of lines) {
  const t = l.trim();
  const before = br;
  for (const ch of l) { if (ch === '{') br++; else if (ch === '}') br--; }
  if (/\b(public|protected)\b/.test(t) && (/\(|;|=|\{|get|=>|\]\s*[\{\(;]/.test(t)) && before === 0) {
    console.log(t.replace(/\s*\{$/, '').trim());
  } else if (/\b(public|protected)\b/.test(t) && before === 0 && t.endsWith(';')) {
    console.log(t);
  }
}