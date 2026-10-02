// Temporary ranking helper for lead-1 (R2 debt, v1.3.0 non-campaign namespaces).
// Usage: node tools/_tmp_rank_r2_lead1.mjs
import { classifyPage } from './lib/handwritten-policy.mjs';
import fs from 'node:fs';
import path from 'node:path';

const apiDir = 'content/v1.3.0/zh/api';
const SLICE = ['core-extra', 'gui', 'system', 'localization', 'mission', 'gameplay', 'core'];

const status = new Map();
const outLinks = new Map();

function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.md')) {
      const rel = path.relative('.', p).replace(/\\/g, '/');
      const t = fs.readFileSync(p, 'utf8');
      status.set(rel, classifyPage(rel, t).status);
      const links = new Set();
      const re = /\[[^\]]+\]\(([^)]+)\)/g;
      let m;
      while ((m = re.exec(t))) {
        let u = m[1];
        if (u.startsWith('http')) continue;
        u = u.split('#')[0];
        if (u) links.add(u);
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
for (const [rel, links] of outLinks) {
  for (const l of links) {
    const target = resolveLink(rel, l);
    for (const cand of [target, target + '.md', path.join(target, '_index.md')]) {
      if (status.has(cand)) {
        indeg.set(cand, (indeg.get(cand) || 0) + 1);
        break;
      }
    }
  }
}

const perDir = {};
for (const [rel, st] of status) {
  const dir = path.dirname(rel).replace(/^content\/v1\.3\.0\/zh\/api\//, '');
  if (!SLICE.includes(dir)) continue;
  perDir[dir] = perDir[dir] || { stub: 0, deep: 0, noise: 0, other: 0 };
  const k = st === 'stub' ? 'stub' : st === 'deep_pass' ? 'deep' : st === 'noise' ? 'noise' : 'other';
  perDir[dir][k]++;
}
console.log('SLICE_STATUS', JSON.stringify(perDir));

const rows = [...status.entries()]
  .filter(([rel, st]) => st === 'stub')
  .filter(([rel]) => {
    const dir = path.dirname(rel).replace(/^content\/v1\.3\.0\/zh\/api\//, '');
    return SLICE.includes(dir);
  })
  .map(([rel]) => ({ rel, ind: indeg.get(rel) || 0, size: fs.statSync(rel).size }))
  .sort((a, b) => b.ind - a.ind || b.size - a.size);

console.log('TOTAL_STUB', rows.length);
for (const r of rows.slice(0, Number(process.argv[2] || 80))) {
  console.log(String(r.ind).padStart(4), String(r.size).padStart(7), r.rel);
}
