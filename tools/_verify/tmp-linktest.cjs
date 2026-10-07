const { readFileSync, existsSync, readdirSync, statSync } = require('fs');
const { join, normalize, resolve, posix } = require('path');
const root = resolve('content');
function walk(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    let s; try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) { if (!e.startsWith('.') && e !== 'public') walk(p, acc); }
    else if (e.endsWith('.md') || e.endsWith('.txt')) acc.push(p);
  }
  return acc;
}
const allFiles = walk(root);
function fileToRoute(f) {
  const rootPosix = root.split('\\').join('/');
  const rel = f.split('\\').join('/').replace(rootPosix + '/', '');
  const dir = posix.dirname(rel);
  const base = posix.basename(rel);
  if (base === '_index.md') return dir + '/';
  return rel.replace(/\.md$/, '/');
}
const page = allFiles.find(f => f.includes('v1.4.5') && f.includes('zh') && f.includes('LiftSiegeAction.md'));
console.log('page file:', page);
const route = fileToRoute(page);
console.log('page route:', route);
const base = route.endsWith('/') ? route : route + '/';
for (const href of ['../../campaign/Settlement/', '../campaign/Settlement/', '../../campaign/Settlement']) {
  const rel = posix.normalize(posix.join(base, href)).replace(/^\//, '');
  console.log(href, '->', rel, '| .md:', existsSync(join(root, rel + '.md')), '| _index:', existsSync(join(root, rel, '_index.md')));
}
