// Verify the 10 rewritten AI-behavior pages: zero of 4 stub markers + links resolve.
// Emulates Zola clean-URL resolution: page at campaign/<Page>.md has URL dir
// campaign/<page>/, so '../X' -> campaign/X, '../../campaign-ext/X' -> api/campaign-ext/X.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';

const AUT = /description:\s*["'][^"'\n]*自动生成类参考[^"'\n]*["']/u;
const OV = /(阅读时(?:先|再)?看?(?:属性|状态))|(是\s*TaleWorlds[^\n。]*公开类型)/u;
const PL = /\b[A-Za-z_]\w*\s*=\s*\.\.\.\s*;?/;
const DI = /\bII[A-Z]\w+\b/;

const root = 'content/v1.4.5/zh/api';
const byName = new Map();
(function walk(d) {
  let e;
  try { e = readdirSync(d); } catch { return; }
  for (const n of e) {
    if (n.startsWith('.')) continue;
    const p = join(d, n);
    const s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if (n.endsWith('.md')) {
      const base = n.replace(/\.md$/, '').toLowerCase();
      if (!byName.has(base)) byName.set(base, []);
      byName.get(base).push(d.replace(/\\/g, '/'));
    }
  }
})(root);

function resolveLink(link, pagePath) {
  if (link.startsWith('http')) return true;
  if (link === '../' || link.endsWith('/_index') || link === '../_index/') return true;
  const l = link.split('#')[0].replace(/\/$/, '');
  // anchor at the page's URL directory: campaign/<page>/
  const pageBase = pagePath.split(/[\\/]/).pop().replace(/\.md$/, '');
  let anchor = join(dirname(pagePath), pageBase).replace(/\\/g, '/');
  const seg = l.split('/').filter(Boolean);
  let i = 0;
  while (i < seg.length && seg[i] === '..') { anchor = dirname(anchor).replace(/\\/g, '/'); i++; }
  const rest = seg.slice(i);
  const base = (rest[rest.length - 1] || '').toLowerCase();
  const targetDir = join(...anchor.split('/'), ...rest.slice(0, -1)).replace(/\\/g, '/');
  const dirs = byName.get(base);
  if (!dirs) return false;
  return dirs.some((d) => d === targetDir);
}

const files = ['AiBehavior','AiMilitaryBehavior','AiPartyThinkBehavior','AiEngagePartyBehavior','AiArmyMemberBehavior','AIBehaviorData','AiPatrollingBehavior','AiLandBanditPatrollingBehavior','AIMoveToNearestLandBehavior','AiVisitSettlementBehavior'];
let bad = 0;
for (const f of files) {
  const fp = join(root, 'campaign', f + '.md');
  const t = readFileSync(fp, 'utf8');
  const fm = (t.match(/^---\r?\n([\s\S]*?)\r?\n---/) || [, ''])[1];
  const markers = [];
  if (AUT.test(fm)) markers.push('autogen-desc');
  if (OV.test(t)) markers.push('formulaic-overview');
  if (PL.test(t)) markers.push('placeholder-assign');
  if (DI.test(t)) markers.push('double-i');
  const links = [...t.matchAll(/\]\(([^)#]+)(?:#[^)]*)?\)/g)].map((m) => m[1]).filter((l) => !l.startsWith('http'));
  const broken = [];
  for (const l of links) if (!resolveLink(l, fp)) broken.push(l);
  const status = markers.length === 0 ? 'CLEAN' : 'STUB(' + markers.join(',') + ')';
  console.log(f.padEnd(28), status.padEnd(10), 'brokenLinks=' + broken.length, broken.slice(0, 8).join(', '));
  if (markers.length || broken.length) bad++;
}
console.log('PROBLEM FILES:', bad);
process.exit(bad === 0 ? 0 : 1);
