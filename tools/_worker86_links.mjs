// Zola-URL link check for worker D's pages. Resolves each md link the way Zola
// does: page URL is its directory + index.html, so a relative link resolves
// against the page's own directory. Writes nothing.
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve, join, basename } from 'node:path';
const REPO = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io/';
const ROOT = REPO + 'content/v1.4.5/';
let bad = 0;
for (const p of process.argv.slice(2)) {
  const abs = resolve(REPO, p);
  const lang = abs.includes('/zh/') ? 'zh' : 'en';
  const bucket = abs.slice(abs.indexOf('content/')).split('/').slice(0,4).join('/');
  const text = readFileSync(abs, 'utf8');
  for (const m of text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    const link = m[1];
    if (/^(https?:|#|mailto:)/.test(link)) continue;
    if (link.endsWith('/')) continue; // section index link
    // Zola URL for this page is /v1.4.5/<lang>/api/<bucket>/<Name>/ , so the
    // base directory for relative resolution is that page's OWN name as a dir.
    const pageUrlDir = join(dirname(abs), basename(abs, '.md'));
    const target = resolve(pageUrlDir, link) + '.md';
    if (!existsSync(target)) {
      bad++;
      const alt = (lang === 'en' && link.includes('/campaign-ext/'))
        ? ' (same name exists in the OTHER language only)'
        : (link.includes('/campaign-ext/') ? ' (en side lacks this file)' : '');
      console.log(`BROKEN ${lang}/${bucket}/${abs.split('/').pop()} -> ${link}${alt}`);
    }
  }
}
console.log(bad === 0 ? 'ALL LINKS OK' : bad + ' broken links');
