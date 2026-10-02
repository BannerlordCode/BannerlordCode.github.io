import { classifyPage } from './lib/handwritten-policy.mjs';
import fs from 'node:fs';
import path from 'node:path';

const apiDir = 'content/v1.4.5/zh/api';
const status = new Map();      // rel -> status
const outLinks = new Map();    // rel -> Set(link)

function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) {
      const idx = path.join(p, '_index.md');
      if (fs.existsSync(idx)) walk(p);
    } else if (e.name.endsWith('.md')) {
      const rel = path.relative('.', p).replace(/\\/g, '/');
      const t = fs.readFileSync(p, 'utf8');
      const r = classifyPage(rel, t);
      status.set(rel, r.status);
      const links = new Set();
      const re = /\[[^\]]+\]\(([^)]+)\)/g;
      let m;
      while ((m = re.exec(t))) {
        let u = m[1];
        if (u.startsWith('http')) continue;
        u = u.split('#')[0];
        if (!u) continue;
        links.add(u);
      }
      outLinks.set(rel, links);
    }
  }
}
walk(apiDir);

function resolveLink(fromRel, link) {
  const fromDir = path.dirname(fromRel);
  let u = link;
  if (u.startsWith('/')) return path.normalize(u.slice(1)).replace(/\\/g, '/');
  return path.normalize(path.join(fromDir, u)).replace(/\\/g, '/');
}

const indeg = new Map();
for (const [from, links] of outLinks) {
  for (const l of links) {
    const tr = resolveLink(from, l);
    const key = status.has(tr) ? tr : tr + '.md';
    const s = status.get(key);
    if (s === 'stub') indeg.set(key, (indeg.get(key) || 0) + 1);
  }
}

const arr = [...indeg.entries()].sort((a, b) => b[1] - a[1]);
console.log('TOP 60 STUB PAGES BY TOTAL IN-DEGREE:');
for (const [rel, c] of arr.slice(0, 60)) console.log(String(c).padStart(5), rel);
console.log('\nTOTAL stub pages with >=1 inlink:', arr.length);

// Also: stub pages with ZERO inlinks anywhere (true orphans)
let zero = 0;
for (const rel of status.keys()) if (status.get(rel) === 'stub' && !indeg.has(rel)) zero++;
console.log('Stub pages with 0 inlinks (pure orphans):', zero);
