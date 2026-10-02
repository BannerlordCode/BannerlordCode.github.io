// Report-only link-shape linter for the v1.5.3 tree.
// For every broken link it prints the link, the route it resolved to, and the
// existing page it most likely meant. Never writes content.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, dirname, posix } from 'node:path';

const ROOT = posix.normalize(process.env.AUDIT_CONTENT_ROOT || 'content/v1.5.3').replace(/\\/g, '/');

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.') || name === 'node_modules') continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (name.endsWith('.md')) acc.push(p.replace(/\\/g, '/'));
  }
  return acc;
}
function toRoute(rel) {
  const r = rel.replace(/\\/g, '/');
  const rel2 = r.startsWith(ROOT + '/') ? r.slice(ROOT.length + 1) : r;
  const d = posix.dirname(rel2);
  return posix.basename(rel2) === '_index.md' ? d + '/' : rel2.replace(/\.md$/, '/');
}
function resolve(route, link) {
  const segs = route.split('/').filter(Boolean);
  for (const part of link.split('/')) {
    if (!part || part === '.') continue;
    if (part === '..') segs.pop();
    else segs.push(part);
  }
  return segs.join('/') + (link.endsWith('/') ? '/' : '');
}

const files = existsSync(ROOT) ? walk(ROOT) : [];
const routes = new Set(files.map((f) => toRoute(f).replace(/\/$/, '')));

// index -> owning leaf dir, for suggesting a corrected target
const byDir = new Map();
for (const f of files) {
  const dir = posix.dirname(f.replace(/\\/g, '/').replace(ROOT + '/', ''));
  if (!byDir.has(dir)) byDir.set(dir, new Set());
  byDir.get(dir).add(posix.basename(f).replace(/\.md$/, ''));
}

let broken = 0;
const report = [];
for (const f of files) {
  const rel = f.replace(/\\/g, '/');
  const route = toRoute(rel);
  const text = readFileSync(f, 'utf8');
  for (const m of text.matchAll(/\[([^\]]*)\]\(([^)\s]+)\)/g)) {
    const link = m[2].split('#')[0];
    if (!link || link.startsWith('http')) continue;
    const target = resolve(route, link);
    if (routes.has(target.replace(/\/$/, ''))) continue;
    broken++;
    // guess: last segment of the link is (or should be) a type in some bucket
    const segs = link.split('/').filter(Boolean);
    const last = segs[segs.length - 1].replace(/\/$/, '');
    const suggestions = [];
    for (const [dir, names] of byDir) {
      if (names.has(last)) {
        suggestions.push(`../../${dir}/${last}`);
      }
    }
    report.push({ file: rel.slice(ROOT.length + 1), link, resolvedTo: target, suggestions });
  }
}

console.log(`ROOT=${ROOT} FILES=${files.length} BROKEN=${broken}`);
const uniq = new Map();
for (const r of report) {
  const key = `${r.link}|${r.resolvedTo}`;
  uniq.set(key, r);
}
let i = 0;
for (const r of uniq.values()) {
  i++;
  console.log(`\n${i}. ${r.file}\n   bad: ${r.link}\n   -> route: ${r.resolvedTo}`);
  if (r.suggestions.length) {
    for (const s of [...new Set(r.suggestions)].slice(0, 3)) console.log(`   fix: ${s}`);
  } else {
    console.log('   fix: (no same-named page exists — drop or repoint the link)');
  }
}
