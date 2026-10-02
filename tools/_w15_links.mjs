// Route-relative link resolver for v1.4.7 pages.
// A page at content/<ver>/<lang>/<section>/<Name>.md has route .../<section>/<Name>/
// so N leading '../' pop N segments from .../<section>/<Name>/.
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve, sep } from 'node:path';

const files = process.argv.slice(2);
const CONTENT = resolve('content');
let bad = 0, checked = 0;

function routeToFile(route) {
  // route = /v1.4.7/zh/api/mission/Mission/  -> content/v1.4.7/zh/api/mission/Mission.md
  const segs = route.split('/').filter(Boolean);
  const last = segs[segs.length - 1];
  const dir = resolve(CONTENT, ...segs.slice(0, -1));
  const md = resolve(dir, last + '.md');
  const idx = resolve(dir, last, '_index.md');
  if (existsSync(md)) return md;
  if (existsSync(idx)) return idx;
  return null;
}

for (const f of files) {
  const abs = resolve(f);
  const text = readFileSync(abs, 'utf8');
  const dir = dirname(abs);
  const rel = abs.slice(CONTENT.length + 1).replace(/\\/g, '/');
  const ownSegs = rel.replace(/\.md$/, '').split('/');
  const links = [...text.matchAll(/\]\(([^)]+)\)/g)].map((m) => m[1]);
  for (const href of links) {
    if (/^(https?:|mailto:|#)/.test(href)) continue;
    checked++;
    const base = ownSegs.slice();                 // route segments incl. page name
    const m = href.match(/^((?:\.\.\/)+)(.*)$/);
    let targetRoute;
    if (m) {
      const pops = (m[1].match(/\.\.\//g) || []).length;
      const rest = m[2].replace(/\/$/, '');
      base.length -= pops;
      if (base.length < 0) { console.log(`POP-OVER  ${rel} -> ${href}`); bad++; continue; }
      targetRoute = '/' + [...base, ...(rest ? rest.split('/') : [])].join('/') + '/';
    } else if (href.startsWith('/')) {
      targetRoute = href.endsWith('/') ? href : href + '/';
    } else {
      base.pop();
      targetRoute = '/' + [...base, ...href.replace(/\/$/, '').split('/')].join('/') + '/';
    }
    const t = routeToFile(targetRoute);
    if (!t) { console.log(`BROKEN    ${rel} -> ${href}   (route ${targetRoute})`); bad++; continue; }
    // self-link?
    if (t === abs) { console.log(`SELF      ${rel} -> ${href}`); bad++; continue; }
    // shape rules: tokenize href
    const tokens = href.replace(/\/$/, '').split('/');
    if (tokens[0] === '.') { console.log(`DOTSLASH  ${rel} -> ${href}`); bad++; }
    let dots = 0;
    while (tokens[dots] === '..') dots++;
    const rest = tokens.slice(dots);
    if (dots === 1 && rest.length === 2) {
      // ../<bucket>/<Name> from a leaf -> always one level short
      console.log(`ONESHORT  ${rel} -> ${href}`); bad++;
    } else if (dots === 1 && rest.length === 1) {
      // ../<Name> : sibling must be in the SAME bucket as this page
      const ownBucket = ownSegs[ownSegs.length - 2];
      const target = routeToFile('/' + ownSegs.slice(0, -1).concat(rest).join('/') + '/');
      if (target && resolve(dirname(target)) !== resolve(dirname(abs))) {
        console.log(`WRONGBUCKET ${rel} -> ${href}`); bad++;
      }
    }
    if (/content\//.test(href)) { console.log(`ROOTLEAK  ${rel} -> ${href}`); bad++; }
  }
}
console.log(`\nchecked ${checked} links across ${files.length} files -> ${bad} defect(s)`);