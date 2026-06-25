// tools/fix-leaf-normalized-links.mjs
// The earlier leaf-route normalizer added one extra `../` to relative links in
// class-leaf pages because it treated the file slug as a directory segment.
// Zola resolves Markdown links against the source file location, so this
// script strips a leading `../` when the original target does not exist but the
// shorter target does.
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { dirname, join, normalize, posix } from 'path';
import { REPO_ROOT } from './lib/paths.mjs';

const CONTENT = join(REPO_ROOT, 'content');

function walk(dir, acc = []) {
  let entries;
  try { entries = readdirSync(dir); } catch { return acc; }
  for (const name of entries) {
    const p = join(dir, name);
    let s;
    try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) walk(p, acc);
    else if (p.endsWith('.md')) acc.push(p);
  }
  return acc;
}

function targetExists(abs) {
  const trimmed = abs.replace(/[\\/]+$/, '');
  return existsSync(trimmed + '.md') || existsSync(normalize(join(trimmed, '_index.md')));
}

function resolveFromDir(fileDir, href) {
  const h = href.split('#')[0];
  if (h.startsWith('/') || h.startsWith('http') || h.startsWith('mailto:') || !h) return null;
  const rel = posix.normalize(posix.join(fileDir, h)).replace(/^\//, '');
  return normalize(join(CONTENT, rel));
}

let fixedFiles = 0;
let fixedLinks = 0;

for (const absPath of walk(CONTENT)) {
  const relDir = normalize(dirname(absPath)).replace(normalize(CONTENT) + '\\', '').replace(/\\/g, '/');
  let text = readFileSync(absPath, 'utf8');
  let changed = false;
  text = text.replace(/\[([^\]]*)\]\(([^)\s]+)\)/g, (full, txt, href) => {
    const h = href.split('#')[0];
    if (h.startsWith('/') || h.startsWith('http') || h.startsWith('mailto:') || !h) return full;
    const absTarget = resolveFromDir(relDir, h);
    if (!absTarget || targetExists(absTarget)) return full;
    if (!h.startsWith('../')) return full;
    const reduced = h.replace(/^\.\.\//, '');
    if (!reduced) return full;
    const reducedTarget = resolveFromDir(relDir, reduced);
    if (reducedTarget && targetExists(reducedTarget)) {
      const fragment = href.includes('#') ? '#' + href.split('#')[1] : '';
      fixedLinks++;
      return `[${txt}](${reduced}${fragment})`;
    }
    return full;
  });
  if (fixedLinks > 0 && text !== readFileSync(absPath, 'utf8')) {
    // update counters only when actually changed
  }
  if (text !== readFileSync(absPath, 'utf8')) {
    writeFileSync(absPath, text, 'utf8');
    fixedFiles++;
  }
}

console.log(`Fixed ${fixedLinks} links in ${fixedFiles} files.`);
