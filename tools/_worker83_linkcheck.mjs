// READ-ONLY link checker (prints only, never writes content).
// Usage: node tools/_worker83_linkcheck.mjs <contentRootDir> <page.md> [<page.md> ...]
// Zola semantics: page URL = /<path-without-.md>/ (lowercased slug, trailing slash);
// a relative link resolves against the page's own directory.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(process.argv[2]);
const norm = (p) => {
  let r = p.replace(/\\/g, '/').replace(/\.md$/i, '');
  r = r.replace(/\/_index$/i, '/');
  if (!r.startsWith('/')) r = '/' + r;
  if (!r.endsWith('/')) r += '/';
  return r.toLowerCase();
};
const urls = new Set();
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.toLowerCase().endsWith('.md')) urls.add(norm(p.slice(root.length + 1)));
  }
})(root);

let bad = 0, ok = 0;
for (const arg of process.argv.slice(3)) {
  const file = resolve(arg);
  const rel = file.slice(root.length + 1);
  const baseUrl = norm(rel); // norm already yields a leading slash
  for (const m of readFileSync(file, 'utf8').matchAll(/\]\(([^)\s]+)\)/g)) {
    const link = m[1];
    if (/^(https?:|#|mailto:)/i.test(link)) continue;
    // Base is the PAGE url (ends with '/'), so '../x' lands in the page's parent dir.
    const abs = new URL(link, 'https://x' + baseUrl).pathname;
    const key = norm(abs);
    if (urls.has(key)) ok++;
    else { bad++; console.log(`BROKEN ${rel}  [${link}] -> ${key}`); }
  }
}
console.log(`links ok=${ok} broken=${bad}`);
