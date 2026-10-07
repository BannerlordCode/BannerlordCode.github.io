// One-off data integrity check for nav-R2 (not committed; deleted after use).
const fs = require('fs');
const path = require('path');

const pn = require('../../data/page-navigation.json');
const nav = require('../../data/navigation.json');

const routes = Object.keys(pn.routes);
let nullParent = 0, nullPrev = 0, nullNext = 0, bothNull = 0;
const versions = {};
for (const r of routes) {
  const n = pn.routes[r];
  if (!n.parent) nullParent++;
  if (!n.previous) nullPrev++;
  if (!n.next) nullNext++;
  if (!n.previous && !n.next) bothNull++;
  const v = r.split('/')[1] || '(root)';
  versions[v] = (versions[v] || 0) + 1;
}
console.log('pn total:', routes.length, '| nullParent:', nullParent, '| nullPrev:', nullPrev, '| nullNext:', nullNext, '| bothNull:', bothNull);
console.log('pn versions:', JSON.stringify(versions));

// disk leaves missing from page-navigation.json
function walk(dir, cb) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, cb);
    else cb(p, e.name);
  }
}
let disk = 0;
const missing = [];
const CONTENT_ROOT = path.join(__dirname, '..', '..', 'content');
walk(CONTENT_ROOT, (p, name) => {
  if (!name.endsWith('.md') || name === '_index.md') return;
  disk++;
  const rel = path.relative(CONTENT_ROOT, p).split(path.sep).join('/');
  const route = '/' + rel.replace(/\.md$/i, '') + '/';
  if (!pn.routes[route]) missing.push(route);
});
console.log('disk leaves:', disk, '| missing from pn:', missing.length);
const missVer = {};
for (const m of missing) {
  const v = m.split('/')[1];
  missVer[v] = (missVer[v] || 0) + 1;
}
console.log('missing by version:', JSON.stringify(missVer));
console.log('sample missing:', missing.slice(0, 5));

// For missing leaves in versions covered by navigation.json: does the derived parent exist?
const covered = missing.filter(m => {
  const segs = m.replace(/\/$/, '').split('/').slice(0, -1);
  const parentRoute = segs.join('/') + '/';
  return nav.routes[parentRoute] !== undefined;
});
console.log('missing leaves whose derived parent IS in navigation.json:', covered.length);
console.log('sample covered:', covered.slice(0, 3));

// navigation.json: any route with null children? any parent pointing to undefined?
let nullChildren = 0, badParent = 0;
for (const [k, v] of Object.entries(nav.routes)) {
  if (!v.children) nullChildren++;
  if (v.parent && !nav.routes[v.parent]) badParent++;
}
console.log('nav routes:', Object.keys(nav.routes).length, '| nullChildren:', nullChildren, '| badParent:', badParent);
