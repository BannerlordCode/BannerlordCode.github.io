import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';

const versionsDir = join(import.meta.dirname, '..', 'docs', 'versions');

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith('.')) continue;
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) walk(fullPath, acc);
    else if (entry.endsWith('.md')) acc.push(fullPath);
  }
  return acc;
}

let changed = 0;
for (const filePath of walk(versionsDir)) {
  let content = readFileSync(filePath, 'utf8');
  let after = content
    .replace(/完整对比矩阵/g, '全量对比表')
    .replace(/selected set of class comparisons/g, 'curated set of class comparisons');
  if (after !== content) {
    writeFileSync(filePath, after, 'utf8');
    changed += 1;
  }
}
console.log(`Reworded ${changed} versions pages.`);
