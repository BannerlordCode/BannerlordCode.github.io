// tools/fix-breadcrumb-self-links.mjs
// Breadcrumb "Back to area" links use ./ but leaf pages render at /slug/,
// so ./ points to the current page instead of the parent section. Rewrite them
// to ../ inside every breadcrumb block.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { REPO_ROOT } from './lib/paths.mjs';

const CONTENT = join(REPO_ROOT, 'content');

function walkMd(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const p = join(dir, entry.name);
    if (entry.isDirectory()) {
      walkMd(p, acc);
    } else if (entry.name.endsWith('.md')) {
      acc.push(p);
    }
  }
  return acc;
}

const BLOCK_RE = /<!-- BEGIN BREADCRUMB -->([\s\S]*?)<!-- END BREADCRUMB -->/g;
const SELF_LINK = /\]\(\s*\.\/\s*\)/g;

let changedFiles = 0;
for (const file of walkMd(CONTENT)) {
  const original = readFileSync(file, 'utf8');
  let changed = false;
  const updated = original.replace(BLOCK_RE, (block) => {
    const fixed = block.replace(SELF_LINK, '](../)');
    if (fixed !== block) changed = true;
    return fixed;
  });
  if (changed) {
    writeFileSync(file, updated, 'utf8');
    changedFiles++;
  }
}
console.log(`Fixed breadcrumb self-links in ${changedFiles} files.`);
