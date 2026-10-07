// READ-ONLY helper for tools/_orphan_resolver_derivation.md
//
// It re-implements NOTHING from the gate: `routeOf` and `res` below are copied character-for-
// character from tools/_v146_orphan_check.mjs lines 15-16 so that what is measured is what the
// gate does. The "naive" resolvers below are NOT the gate; they exist only to establish which
// naive convention reproduces the 5,281-path candidate list, so that the difference from the
// gate can be attributed to named rules instead of fitted.
//
// Usage: node tools/_orphan_resolver_probe.mjs
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'content';

// ---- verbatim from _v146_orphan_check.mjs:6
function walk(d, a = []) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); e.isDirectory() ? walk(p, a) : (e.name.endsWith('.md') || e.name.endsWith('.txt')) && a.push(p); } return a; }
// ---- verbatim from _v146_orphan_check.mjs:15
const routeOf = (rel) => { const q = rel.split(path.sep).join('/').replace(/\.md$/, ''); return q.endsWith('_index') ? q.replace(/_index$/, '') : q + '/'; };
// ---- verbatim from _v146_orphan_check.mjs:16
function res(from, href) { if (/^(https?:|#|mailto:)/.test(href)) return null; const h = href.split('#')[0]; if (!h) return null; const s = from.split('/').filter(Boolean); for (const x of h.split('/')) { if (x === '.' || x === '') continue; if (x === '..') s.pop(); else s.push(x); } const r = s.join('/'); return r.endsWith('/') ? r : r + '/'; }
// ---- verbatim from _v146_orphan_check.mjs:19
const linkRe = /\[[^\]]*\]\(([^)\s]+)\)/g;

const files = walk(SITE);
const pagePaths = files.map((f) => path.relative(SITE, f).split(path.sep).join('/')); // e.g. v1.4.6/zh/api/x/Foo.md
const gateRoutes = new Set(pagePaths.map(routeOf));

// generic relative resolver (the only thing the gate's `res` adds is the trailing-slash rule)
function resRaw(from, href) {
  if (/^(https?:|#|mailto:)/.test(href)) return null;
  const h = href.split('#')[0];
  if (!h) return null;
  const s = from.split('/').filter(Boolean);
  for (const x of h.split('/')) { if (x === '.' || x === '') continue; if (x === '..') s.pop(); else s.push(x); }
  return s.join('/');
}

// per-page: the set of hrefs the gate's own regex sees
const perPage = new Map();
for (const f of files) {
  const rel = path.relative(SITE, f).split(path.sep).join('/');
  const t = fs.readFileSync(f, 'utf8');
  const hrefs = [];
  const re = new RegExp(linkRe.source, 'g');
  let m; while ((m = re.exec(t))) hrefs.push(m[1]);
  perPage.set(rel, { from: routeOf(rel), hrefs, text: t });
}

// ---- NAIVE VARIANTS: each returns the set of orphan page paths
function naiveSet(mapper) {
  const linked = new Set();
  for (const [rel, info] of perPage) {
    for (const href of info.hrefs) {
      const target = mapper(info.from, href);
      if (target) linked.add(target);
    }
  }
  return new Set(pagePaths.filter((p) => !linked.has(p)));
}
const V = {};
// A: extensionless href -> append .md ; href already ending in .md kept. no dir-style, no _index
V.A = naiveSet((from, href) => { const r = resRaw(from, href); if (r === null) return null; return r.endsWith('.md') ? r : r + '.md'; });
// B: A + a trailing-slash href means the directory's _index.md
V.B = naiveSet((from, href) => { const r = resRaw(from, href); if (r === null) return null; if (href.endsWith('/')) return r + '_index.md'; return r.endsWith('.md') ? r : r + '.md'; });
// C: B + a trailing-slash href also matches the bare directory (some pages live at dir/index.md)
V.C = naiveSet((from, href) => {
  const r = resRaw(from, href); if (r === null) return null;
  if (href.endsWith('/')) { linked_multi: return [r + '_index.md', r.replace(/\/$/, '') + '.md', r]; }
  return [r.endsWith('.md') ? r : r + '.md'];
});
function naiveSetMulti(mapper) {
  const linked = new Set();
  for (const [rel, info] of perPage) for (const href of info.hrefs) { const t = mapper(info.from, href); if (t) for (const x of (Array.isArray(t) ? t : [t])) linked.add(x); }
  return new Set(pagePaths.filter((p) => !linked.has(p)));
}
V.C = naiveSetMulti((from, href) => {
  const r = resRaw(from, href); if (r === null) return null;
  if (href.endsWith('/')) return [r + '_index.md', r.replace(/\/$/, '') + '.md', r];
  return [r.endsWith('.md') ? r : r + '.md'];
});

console.log('measured at', new Date().toISOString());
console.log('universe pages =', pagePaths.length, ' gate routes =', gateRoutes.size);
console.log('');
console.log('NAIVE VARIANT ORPHAN COUNTS (target: the 5281-line tools/_review_graph_orphans.txt)');
for (const [k, s] of Object.entries(V)) console.log('  variant ' + k + ': ' + s.size);

// which variant matches the shipped candidate list exactly?
const candPath = 'tools/_review_graph_orphans.txt';
let cand = null;
try { cand = new Set(fs.readFileSync(candPath, 'utf8').split(/\r?\n/).map((s) => s.trim()).filter(Boolean)); } catch { /* absent */ }
console.log('');
if (cand) {
  console.log('candidate list tools/_review_graph_orphans.txt =', cand.size);
  for (const [k, s] of Object.entries(V)) {
    let inter = 0; for (const x of s) if (cand.has(x)) inter++;
    console.log('  variant ' + k + ': overlap ' + inter + '/' + s.size + '  (candidate-only ' + (cand.size - inter) + ')');
  }
}

// ---- the gate
const gateInbound = new Map(); for (const r of gateRoutes) gateInbound.set(r, 0);
for (const info of perPage.values()) for (const href of info.hrefs) { const tg = res(info.from, href); if (tg && gateRoutes.has(tg)) gateInbound.set(tg, gateInbound.get(tg) + 1); }
const gateOrphans = new Set([...gateInbound].filter(([, n]) => n === 0).map(([r]) => r));

console.log('');
console.log('GATE orphans =', gateOrphans.size);

// ---- attribute the difference, rule by rule, for the variant that matches the candidate list
const bestKey = cand ? Object.keys(V).find((k) => { let i = 0; for (const x of V[k]) if (cand.has(x)) i++; return i / V[k].size > 0.9; }) || 'A' : 'A';
const naiveOrphans = V[bestKey];
console.log('using naive variant', bestKey, '(' + naiveOrphans.size + ' orphans) for attribution');

const gateLinked = new Set([...gateInbound].filter(([, n]) => n > 0).map(([r]) => r));
const naiveLinked = new Set(pagePaths.filter((p) => !naiveOrphans.has(p)));
const gateLinkedPaths = new Set([...gateLinked].map((r) => pagePaths.find((p) => routeOf(p) === r)).filter(Boolean));

const onlyGate = [...gateLinkedPaths].filter((p) => !naiveLinked.has(p));
const onlyNaive = [...naiveLinked].filter((p) => !gateLinkedPaths.has(p));
console.log('');
console.log('gate says LINKED but naive says ORPHAN :', onlyGate.length, '  <-- this is the delta to explain');
console.log('naive says LINKED but gate says ORPHAN :', onlyNaive.length, '  <-- gate is stricter than naive');

// For each onlyGate page, find WHICH href, in WHICH page, the gate counted and why the naive
// convention missed it. The referrer is some OTHER page, so we invert: scan every page's hrefs.
const referrers = new Map(); // route -> [{referrer, href}]
for (const [p, info] of perPage) {
  for (const href of info.hrefs) {
    const tg = res(info.from, href);
    if (!tg) continue;
    if (!referrers.has(tg)) referrers.set(tg, []);
    referrers.get(tg).push({ referrer: p, href });
  }
}
const ruleCount = { 'href ended with / -> gate maps to the DIRECTORY route': 0, '_index href -> gate collapses _index to the directory': 0, 'href with .md extension -> gate DROPS it (so this cannot explain a gate-only link)': 0, 'extensionless href -> naive convention also resolved it (unexplained)': 0, 'no referrer found at all': 0 };
const samples = {};
for (const p of onlyGate) {
  const pageRoute = routeOf(p);
  const refs = referrers.get(pageRoute) || [];
  let why = 'no referrer found at all';
  for (const { href } of refs) {
    if (href.endsWith('/')) { why = 'href ended with / -> gate maps to the DIRECTORY route'; break; }
    if (/_index$/.test(href)) { why = '_index href -> gate collapses _index to the directory'; break; }
    if (/\.md$/.test(href)) { why = 'href with .md extension -> gate DROPS it (so this cannot explain a gate-only link)'; break; }
    why = 'extensionless href -> naive convention also resolved it (unexplained)';
    break;
  }
  ruleCount[why] = (ruleCount[why] || 0) + 1;
  if (!samples[why]) samples[why] = [];
  if (samples[why].length < 4) samples[why].push(p + '   <- ' + (refs[0] ? refs[0].referrer + ' : "' + refs[0].href + '"' : 'NO REFERRER'));
}
console.log('');
console.log('ATTRIBUTION of the ' + onlyGate.length + '-page delta, by gate rule:');
for (const [k, v] of Object.entries(ruleCount)) console.log('  ' + String(v).padStart(5) + '  ' + k);
console.log('');
for (const [k, v] of Object.entries(samples)) { console.log('  ' + k + ':'); v.forEach((s) => console.log('      ' + s)); }

// ---- ALSO: how many hrefs does the gate resolve to a route the naive convention would NOT?
// This is the rule-level cost, counted over ALL links rather than over orphan pages.
let gateMatched = 0, gateMatchedByRule = { 'href ended with / (directory route)': 0, 'extensionless href (route + "/")': 0, '_index href (collapsed to directory)': 0, 'other': 0 };
let gateDroppedMd = 0, gateDroppedIndex = 0, gateUnresolved = 0;
for (const [p, info] of perPage) {
  for (const href of info.hrefs) {
    const tg = res(info.from, href);
    const r = resRaw(info.from, href);
    if (/\.md$/.test(href) && r !== null && !/\/$/.test(r)) { gateDroppedMd++; continue; }   // res() appends '/' -> never matches
    if (/_index$/.test(href) && r !== null) { gateDroppedIndex++; continue; }
    if (tg && gateRoutes.has(tg)) { gateMatched++; if (href.endsWith('/')) gateMatchedByRule['href ended with / (directory route)']++; else gateMatchedByRule['extensionless href (route + "/")']++; }
    else gateUnresolved++;
  }
}
console.log('');
console.log('ALL-LINK view: gate resolved ' + gateMatched + ' hrefs to a live route');
console.log('  ' + JSON.stringify(gateMatchedByRule));
console.log('  hrefs the gate DROPS because it appends "/" to a .md href : ' + gateDroppedMd);
console.log('  hrefs the gate DROPS because _index is collapsed to the dir : ' + gateDroppedIndex);
console.log('  hrefs resolving to no route (dangling / "../../" to root) : ' + gateUnresolved);

// ---- SELF LINK question
const selfLinked = [];
for (const [p, info] of perPage) { const pr = routeOf(p); if (info.hrefs.some((h) => res(info.from, h) === pr)) selfLinked.push(p); }
console.log('');
console.log('SELF-LINKS: pages whose own href resolves to their own gate route =', selfLinked.length);
console.log('  of those, the gate still reports ORPHAN for:', selfLinked.filter((p) => gateOrphans.has(routeOf(p))).length);
console.log('  -> a self-link DOES increment inbound (line 22 counts every resolved target, including the page itself)');

// ---- navigation.json question
console.log('');
console.log('navigation.json: the gate imports only node:fs and node:path and reads only ' + SITE + '/**');
console.log('  occurrences of "navigation" in the gate source:', (fs.readFileSync('tools/_v146_orphan_check.mjs', 'utf8').match(/navigation/g) || []).length);
console.log('  occurrences of "group" in the gate source:', (fs.readFileSync('tools/_v146_orphan_check.mjs', 'utf8').match(/group/g) || []).length);
try { const nav = JSON.parse(fs.readFileSync('data/navigation.json', 'utf8')); console.log('  data/navigation.json parses; top-level keys:', Object.keys(nav).slice(0, 8).join(', '), '... routes entries:', (nav.routes ? Object.keys(nav.routes).length : 'n/a')); } catch (e) { console.log('  data/navigation.json:', e.message.slice(0, 80)); }