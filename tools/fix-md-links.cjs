const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', 'content');

function rewriteTarget(target) {
  if (/^[a-z][a-z0-9+.-]*:/i.test(target) || target.startsWith('#')) return target;

  const hashIdx = target.indexOf('#');
  const base = hashIdx >= 0 ? target.slice(0, hashIdx) : target;
  const hash = hashIdx >= 0 ? target.slice(hashIdx) : '';

  if (base.endsWith('.md')) {
    let route = base.slice(0, -3);
    if (route.endsWith('/index') || route === 'index' || route.endsWith('/_index') || route === '_index') {
      route = route === 'index' || route === '_index'
        ? './'
        : route.replace(/\/(index|_index)$/, '/');
    }
    return route + hash;
  }
  return target;
}

function rewriteLinks(text) {
  return text.replace(/\]\(([^)]+)\)/g, (match, target) => {
    const rewritten = rewriteTarget(target);
    return rewritten === target ? match : `](${rewritten})`;
  });
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(full);
    }
  }
  return files;
}

let changedFiles = 0;
let changedLinks = 0;

for (const file of walk(root)) {
  const original = fs.readFileSync(file, 'utf8');
  const updated = rewriteLinks(original);
  if (updated !== original) {
    fs.writeFileSync(file, updated, 'utf8');
    changedFiles++;
    changedLinks += [...original.matchAll(/\]\([^)]+\.md[^)]*\)/g)].length;
  }
}

console.log(`Fixed ${changedLinks} .md links across ${changedFiles} files.`);
