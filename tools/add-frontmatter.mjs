// tools/add-frontmatter.mjs
// Add minimal Zola frontmatter to any content .md file that lacks it.
// Safe to re-run; files already starting with --- are untouched.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { REPO_ROOT } from './lib/paths.mjs';

const CONTENT = join(REPO_ROOT, 'content');

function titleFromMarkdown(text) {
  const m = text.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : '';
}

function walk(dir, callback) {
  let entries;
  try { entries = readdirSync(dir); } catch { return; }
  for (const name of entries) {
    const p = join(dir, name);
    let s;
    try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) walk(p, callback);
    else if (p.endsWith('.md')) callback(p);
  }
}

let fixed = 0;
walk(CONTENT, (p) => {
  const raw = readFileSync(p, 'utf8');
  if (raw.trimStart().startsWith('---')) return;
  const title = titleFromMarkdown(raw) || '';
  const fm = title
    ? `---\ntitle: "${title.replace(/"/g, '\\"')}"\n---\n`
    : `---\ntitle: ""\n---\n`;
  writeFileSync(p, fm + raw, 'utf8');
  fixed++;
  if (fixed % 1000 === 0) process.stdout.write(`  fixed ${fixed}\r`);
});

console.log(`\nAdded frontmatter to ${fixed} files.`);
