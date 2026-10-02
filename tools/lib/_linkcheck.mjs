import fs from 'node:fs';
const t = fs.readFileSync('content/v1.3.15/zh/api/gui/SpriteFromTexture.md', 'utf8');
const links = [...t.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map(m => m[1]);
const base = 'content/v1.3.15/zh/api/gui/';
const bad = [];
for (const l of links) {
  if (l.startsWith('http')) continue;
  let rel = l.replace(/\/+$/, '');
  let b = base;
  while (rel.startsWith('../')) {
    rel = rel.slice(3);
    const i = b.replace(/\/$/, '').lastIndexOf('/');
    b = b.slice(0, i + 1);
  }
  if (rel.startsWith('./')) rel = base + rel.slice(2);
  else if (!rel.startsWith('/')) rel = b + rel;
  const f = rel + '.md';
  if (fs.existsSync(f)) console.log('OK  ' + l);
  else { bad.push(l + ' -> ' + f); console.log('BAD ' + l + ' -> ' + f); }
}
console.log(bad.length ? '\nBAD COUNT ' + bad.length : '\nALL LINKS RESOLVE');
