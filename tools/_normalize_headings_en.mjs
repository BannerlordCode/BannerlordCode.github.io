import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const root = 'content/v1.3.15/en/api';
function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (e.endsWith('.md')) out.push(p);
  }
  return out;
}
const depRe = /^#{2}\s+Dependencies\b.+/;
const mentalRe = /^#{2}\s+Mental model\s*:.+/i;
let changed = 0;
for (const f of walk(root)) {
  const t = readFileSync(f, 'utf8');
  const lines = t.split(/\r?\n/);
  let modified = false;
  const newLines = lines.map((line) => {
    if (depRe.test(line)) { modified = true; return '## Dependencies'; }
    if (mentalRe.test(line)) { modified = true; return '## Mental Model'; }
    return line;
  });
  if (modified) {
    writeFileSync(f, newLines.join('\n'));
    changed++;
    console.log('normalized:', f);
  }
}
console.log('TOTAL changed:', changed);
