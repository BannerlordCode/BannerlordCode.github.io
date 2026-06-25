import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname, normalize, sep } from 'path';

const root = join(process.cwd(), 'content');
const SLASH = '/';
function walk(dir, acc=[]) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    let s; try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) { if(!e.startsWith('.') && e!=='public') walk(p, acc); }
    else if (e.endsWith('.md') || e.endsWith('.txt')) acc.push(p);
  }
  return acc;
}
const reSep = new RegExp(sep === '\\' ? '\\\\' : sep, 'g');
const allFiles = walk(root);
const files = allFiles.map(f => f.replace(root+sep,'').replace(reSep, SLASH));

const linkRe = /\[([^\]]*)\]\(([^)\s]+)\)/g;
const allLinks = [];
for (const f of files) {
  const txt = readFileSync(join(root,f),'utf8');
  let m;
  while ((m = linkRe.exec(txt))) {
    let href = m[2].split(/\s/)[0];
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) continue;
    allLinks.push({from:f, href, text:m[1]});
  }
}

function resolveTarget(from, href) {
  let h = href.split('#')[0];
  if (!h) return null;
  const base = dirname(from);
  let target;
  if (h.startsWith('/')) target = normalize(join(root, h.replace(/^\//,'')));
  else target = normalize(join(root, base, h));
  return target.replace(reSep, SLASH);
}

const broken = [];
for (const l of allLinks) {
  const t = resolveTarget(l.from, l.href);
  if (t===null) continue;
  let found = false;
  if (l.href.split('#')[0].endsWith('/')) {
    // trailing-slash link: Zola sections use <dir>/_index.md
    found = existsSync(t + SLASH + '_index.md') || existsSync(t.replace(/\/+$/,'') + SLASH + '_index.md');
  } else {
    const cands = [t, t+'.md', t+SLASH+'_index.md'];
    const seen = new Set();
    for (const c of cands) { if (seen.has(c)) continue; seen.add(c); if (existsSync(c)) { found=true; break; } }
  }
  if (!found) broken.push(l);
}

console.log('FILES='+files.length);
console.log('TOTAL_LINKS='+allLinks.length);
console.log('BROKEN_LINKS='+broken.length);
const byFrom = {};
for (const b of broken) (byFrom[b.from] = byFrom[b.from]||[]).push(b.href);
const sortedFrom = Object.keys(byFrom).sort();
console.log('FILES_WITH_BROKEN='+sortedFrom.length);
for (const f of sortedFrom) {
  const hs = [...new Set(byFrom[f])];
  console.log('\n## '+f+'  ('+hs.length+')');
  for (const h of hs) console.log('   -> '+h);
}
