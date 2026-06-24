import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { join, relative } from 'path';

const docsRoot = join(import.meta.dirname, '..', 'docs');

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith('.') || entry === 'node_modules') continue;
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
      walk(fullPath, acc);
    } else if (entry.endsWith('.md')) {
      acc.push(fullPath);
    }
  }
  return acc;
}

function isEntryPage(rel) {
  const posix = rel.replace(/\\/g, '/');
  if (!posix.endsWith('/index.md')) return false;
  const parts = posix.split('/');
  const parent = parts[parts.length - 2] || '';
  const grandParent = parts[parts.length - 3] || '';
  return parent === 'api' ||
    (['architecture', 'guide', 'native', 'xml-reference'].includes(parent)) ||
    (grandParent === 'api');
}

const usageHeadingRe = /^##\s+(?:Usage Example|使用示例)\s*$/m;
const exampleSubsectionRe = /^###\s+.*(?:Example|Examples|API Examples|Debug Information|用法|示例).*$/i;

let changed = 0;

function removeSections(lines, predicate) {
  const result = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (predicate(line)) {
      // skip until next markdown heading or EOF
      i += 1;
      while (i < lines.length && !/^#{1,6}\s+/.test(lines[i])) i += 1;
      continue;
    }
    result.push(line);
    i++;
  }
  return result;
}

for (const filePath of walk(docsRoot)) {
  const rel = relative(docsRoot, filePath);
  if (!isEntryPage(rel) && !rel.replace(/\\/g, '/').match(/\/(?:api\/catalog[^/]*\.md|architecture\/[^/]+\.md)$/)) continue;

  let content = readFileSync(filePath, 'utf8');
  if (!usageHeadingRe.test(content) && !exampleSubsectionRe.test(content)) continue;

  let lines = content.split(/\r?\n/);

  // Drop any top-level Usage Example section (with or without a following code block)
  lines = removeSections(lines, (line) => usageHeadingRe.test(line));

  // Drop generic ### Example / Debug Information subsections that usually hold fake snippets
  lines = removeSections(lines, (line) => exampleSubsectionRe.test(line));

  const after = lines.join('\n');
  if (after !== content) {
    writeFileSync(filePath, after, 'utf8');
    changed += 1;
  }
}

console.log(`Removed placeholder usage examples from ${changed} entry/catalog/architecture pages.`);
