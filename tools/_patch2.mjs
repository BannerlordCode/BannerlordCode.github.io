import { readFileSync, writeFileSync } from 'fs';
const p = 'tools/_v146_stubs.mjs';
let s = readFileSync(p, 'utf8');
function sub(from, to) {
  if (!s.includes(from)) { console.error('NOT FOUND >>> ' + from.slice(0, 80)); process.exit(1); }
  s = s.replace(from, to);
}

sub(`const API = join(DOCS, 'api');`, `const LANG_API = (lang) => join(DOCS, lang, 'api');`);

sub(`// files that already exist under content/v1.4.6 (owned by other workers)
function walkExisting(dir, acc = new Set(), base = dir) {
  if (!existsSync(dir)) return acc;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walkExisting(p, acc, base);
    else if (e.name.endsWith('.md')) acc.add(relative(base, p).replace(/\\\\/g, '/'));
  }
  return acc;
}
const EXISTING = walkExisting(API);

/** Resolve a link target as it would be written from a page in \`fromDir\`. */
function linkTarget(fromRel, moduleSlug, slug) {
  const rel = moduleSlug + '/' + slug + '.md';
  const exists = EXISTING.has(rel) || !RESERVED.has(rel);
  if (!exists) return null;
  // fromRel is like \`zh/api/<module-slug>/Foo.md\`
  const fromDir = fromRel.slice(0, fromRel.lastIndexOf('/'));
  const fromParts = fromDir.split('/');
  const toParts = rel.split('/');
  let common = 0;
  while (common < fromParts.length && common < toParts.length && fromParts[common] === toParts[common]) common++;
  const up = fromParts.length - common;
  const down = toParts.slice(common).map((s, i) => (i === toParts.length - 1 ? s.replace(/\\.md$/, '') : s));
  return '../'.repeat(up) + down.join('/');
}`,
`// every .md already on disk under content/v1.4.6, relative to DOCS.
// Pages owned by other workers therefore stay linkable, and re-running this
// tool picks them up without regenerating anything else.
function walkExisting(dir, acc = new Set(), base = dir) {
  if (!existsSync(dir)) return acc;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const q = join(dir, e.name);
    if (e.isDirectory()) walkExisting(q, acc, base);
    else if (e.name.endsWith('.md')) acc.add(relative(base, q).replace(/\\\\/g, '/'));
  }
  return acc;
}
const EXISTING = walkExisting(DOCS);

const isReserved = (moduleSlug, slug) => RESERVED.has(moduleSlug + '/' + slug + '.md');
const pageExists = (lang, moduleSlug, slug) =>
  EXISTING.has(lang + '/api/' + moduleSlug + '/' + slug + '.md') || !isReserved(moduleSlug, slug);

/** Relative link from \`fromRel\` (relative to DOCS) to a type page, or null. */
function linkTarget(fromRel, lang, moduleSlug, slug) {
  if (!pageExists(lang, moduleSlug, slug)) return null;
  const to = lang + '/api/' + moduleSlug + '/' + slug + '.md';
  const fromParts = fromRel.split('/');
  fromParts.pop();
  const toParts = to.split('/');
  let common = 0;
  while (common < fromParts.length && common < toParts.length && fromParts[common] === toParts[common]) common++;
  const up = fromParts.length - common;
  const down = toParts.slice(common).map((x, i) => (i === toParts.length - 1 ? x.replace(/\\.md$/, '') : x));
  return '../'.repeat(up) + down.join('/');
}`);

sub(`function seeAlso(t, lang) {
  const zh = lang === 'zh';
  const lines = [];
  const L = (rel, label) => lines.push('- [' + label + '](' + rel + ')');
  L('../', zh ? '↑ ' + t.moduleSlug + ' 模块目录' : '↑ ' + t.moduleSlug + ' module index');
  L('../../', zh ? '↑ 版本首页' : '↑ Version home');
  for (const b of basePageLinks(t).slice(0, 3)) {
    const rel = linkTarget(t._rel, b.moduleSlug, b.slug);
    if (rel) L(rel, zh ? '基类 ' + b.name : 'base type ' + b.name);
  }
  for (const s of siblingLinks(t)) {
    const rel = linkTarget(t._rel, s.moduleSlug, s.slug);
    if (rel) L(rel, zh ? '同命名空间 ' + s.name : 'same namespace ' + s.name);
  }
  // cross-module ping for the module the type actually lives in
  if (t.moduleSlug !== 'core') {
    const rel = linkTarget(t._rel, 'core', '_idx_never');
    void rel;
  }
  return lines;
}`,
`function seeAlso(t, lang) {
  const zh = lang === 'zh';
  const lines = [];
  const L = (rel, label) => lines.push('- [' + label + '](' + rel + ')');
  L('../', zh ? '↑ ' + t.moduleSlug + ' 模块目录' : '↑ ' + t.moduleSlug + ' module index');
  if (EXISTING.has(lang + '/_index.md')) L('../../', zh ? '↑ 版本首页' : '↑ Version home');
  for (const b of basePageLinks(t).slice(0, 3)) {
    const rel = linkTarget(t._rel, lang, b.moduleSlug, b.slug);
    if (rel) L(rel, zh ? '基类 ' + b.name : 'base type ' + b.name);
  }
  for (const s of siblingLinks(t, lang, 4)) {
    const rel = linkTarget(t._rel, lang, s.moduleSlug, s.slug);
    if (rel) L(rel, zh ? '同命名空间 ' + s.name : 'same namespace ' + s.name);
  }
  return lines;
}`);

sub(`function siblingLinks(t, n = 3) {
  return types
    .filter((x) => x.moduleSlug === t.moduleSlug && x.namespace === t.namespace && x.slug !== t.slug)
    .slice(0, n);
}`,
`function siblingLinks(t, lang, n = 3) {
  return types
    .filter((x) => x.moduleSlug === t.moduleSlug && x.namespace === t.namespace && x.slug !== t.slug)
    .filter((x) => pageExists(lang, x.moduleSlug, x.slug))
    .slice(0, n);
}`);

sub(`    const simple = name.split(/[\\s(]/).filter(Boolean).pop() || name;
    rows.push('| \`' + simple.replace(/<.*$/, '') + (m.kind === 'enum' ? '' : '') + '\` | \`' + m.signature + '\` | ' + (map[m.kind] || m.kind) + ' |');`,
`    const simple = name.split(/[\\s(]/).filter(Boolean).pop() || name;
    const label = m.kind === 'indexer' ? 'this[...]' : simple.replace(/<.*$/, '');
    rows.push('| \`' + label + '\` | \`' + m.signature + '\` | ' + (map[m.kind] || m.kind) + ' |');`);

sub(`  const groups = new Map();
  for (const t of list) {
    const ch = (displayName(t)[0] || '#').toUpperCase();`,
`  const groups = new Map();
  const pending = list.filter((t) => !pageExists(lang, t.moduleSlug, t.slug));
  const shown = list.filter((t) => pageExists(lang, t.moduleSlug, t.slug));
  for (const t of shown) {
    const ch = (displayName(t)[0] || '#').toUpperCase();`);

sub(`    'Below is the complete A–Z class catalog for this module. Each link points at a real type page whose \`**Namespace:**\` / \`**Type:**\` / \`**File:**\` metadata comes straight from the bannerlord-1.4.6 source, with signatures unmodified.'));
  L.push('');`,
`    'Below is the A–Z class catalog for this module. Each link points at a real type page whose \`**Namespace:**\` / \`**Type:**\` / \`**File:**\` metadata comes straight from the bannerlord-1.4.6 source, with signatures unmodified.'));
  L.push('');
  if (pending.length) {
    L.push('> ' + (zh
      ? '另有 ' + pending.length + ' 个类型由深写 worker 负责、页面尚未落地，因此这里只列名字不列链接：' + pending.map((x) => x.name).join('、') + '。'
      : pending.length + ' further types are owned by the deep-writing workers and their pages have not landed yet, so they are listed by name only: ' + pending.map((x) => x.name).join(', ') + '.'));
    L.push('');
  }`);

sub(`  L.push('- [' + (zh ? 'API 参考' : 'API Reference') + '](../)');
  L.push('- [' + (zh ? '版本首页' : 'Version home') + '](../../)');`,
`  L.push('- [' + (zh ? 'API 参考' : 'API Reference') + '](../)');
  if (EXISTING.has(lang + '/_index.md')) L.push('- [' + (zh ? '版本首页' : 'Version home') + '](../../)');`);

sub(`for (const [moduleSlug, list] of [...byModule.entries()].sort()) {
  const mod = list[0].module;
  const dir = join(API, moduleSlug);
  mkdirSync(dir, { recursive: true });
  const n = { leaves: 0, reserved: 0, index: 0, zh: 0, en: 0 };
  for (const t of list) {
    const rel = moduleSlug + '/' + t.slug + '.md';
    if (RESERVED.has(rel)) {
      n.reserved++;
      skippedReserved++;
      continue;
    }
    for (const lang of ['zh', 'en']) {
      const out = join(API, lang, moduleSlug, t.slug + '.md');
      mkdirSync(dirname(out), { recursive: true });
      writeFileSync(out, renderType(t, lang), 'utf8');
      written++;
      n[lang]++;
    }
    n.leaves++;
  }
  for (const lang of ['zh', 'en']) {
    const out = join(API, lang, moduleSlug, '_index.md');`,
`for (const [moduleSlug, list] of [...byModule.entries()].sort()) {
  const mod = list[0].module;
  const n = { leaves: 0, reserved: 0, index: 0, zh: 0, en: 0 };
  for (const t of list) {
    if (isReserved(moduleSlug, t.slug)) {
      n.reserved++;
      skippedReserved++;
      continue;
    }
    for (const lang of ['zh', 'en']) {
      const out = join(LANG_API(lang), moduleSlug, t.slug + '.md');
      mkdirSync(dirname(out), { recursive: true });
      writeFileSync(out, renderType(t, lang), 'utf8');
      written++;
      n[lang]++;
    }
    n.leaves++;
  }
  for (const lang of ['zh', 'en']) {
    const out = join(LANG_API(lang), moduleSlug, '_index.md');`);

writeFileSync(p, s);
console.log('patched stubs');
