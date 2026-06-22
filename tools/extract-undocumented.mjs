/* Extract undocumented type names from catalog-*.md files */
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const dir = 'BannerlordCode.github.io/docs/v1.3.15/zh/api';
const files = readdirSync(dir).filter(f => f.startsWith('catalog-') && f.endsWith('.md'));
const names = new Set();

for (const f of files) {
  const lines = readFileSync(join(dir, f), 'utf8').split('\n');
  for (const line of lines) {
    const m = line.match(/^\|\s+([CSEI])\s+\|\s+([^|]+?)\s+\|\s+([\u2014\u26d3])\s+\|\s*$/);
    if (m && m[3] === '\u2014') {
      let name = m[2].trim();
      const linkM = name.match(/^\[([^\]]+)\]/);
      if (linkM) name = linkM[1];
      if (name && !name.includes('Name') && !name.includes('header')) names.add(name);
    }
  }
}

const sorted = [...names].sort();
console.log(sorted.join('\n'));
console.error('Total undocumented: ' + sorted.length);
