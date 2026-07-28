/**
 * Fix BROKEN relative links on family hub _index.md pages (URL mode).
 * Dry-run by default; pass --write to apply.
 *
 * Strategy:
 *  1) Resolve like audit-links (url mode) from section route
 *  2) For broken type leaf links, find TypeName.md under v1.3.15/zh/api
 *  3) Rewrite href to correct relative path from hub URL route
 *  4) Pseudo labels Type/Module/TypeName → unlink to code span
 *
 * Link path surgery only — does not invent prose.
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, basename, relative, sep, posix } from 'node:path';
import { fileURLToPath } from 'node:url';

const WRITE = process.argv.includes('--write');
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = join(ROOT, 'content');
const SLASH = '/';
const reSep = sep === '\\' ? /\\/g : new RegExp(sep, 'g');
function toPosix(p) {
  return p.replace(reSep, SLASH);
}

function walkMd(dir, acc = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return acc;
  }
  for (const e of entries) {
    if (e.startsWith('.') || e === 'node_modules' || e === 'public') continue;
    const p = join(dir, e);
    let s;
    try {
      s = statSync(p);
    } catch {
      continue;
    }
    if (s.isDirectory()) walkMd(p, acc);
    else if (e.endsWith('.md')) acc.push(p);
  }
  return acc;
}

/** simpleName -> [posix path relative to content/] */
const typeIndex = new Map();
function indexApi(lang) {
  const apiRoot = join(CONTENT, 'v1.3.15', lang, 'api');
  if (!existsSync(apiRoot)) return;
  for (const abs of walkMd(apiRoot)) {
    const base = basename(abs, '.md');
    if (base === '_index') continue;
    const simple = base.includes('__') ? base.slice(0, base.indexOf('__')) : base;
    const relFromContent = toPosix(relative(CONTENT, abs));
    if (!typeIndex.has(simple)) typeIndex.set(simple, []);
    typeIndex.get(simple).push(relFromContent);
  }
}
indexApi('zh');

function resolveTarget(fromRoute, href) {
  let h = href.split('#')[0].split('?')[0];
  if (!h || /^(https?:|mailto:|\/)/i.test(h)) return null;
  const base = fromRoute.endsWith('/') ? fromRoute : fromRoute + '/';
  return posix.normalize(posix.join(base, h)).replace(/^\//, '');
}

function existsAsPage(targetNoLead) {
  const t = targetNoLead.replace(/\/$/, '');
  return [join(CONTENT, t + '.md'), join(CONTENT, t, '_index.md')].some((c) => existsSync(c));
}

function relHrefFromHub(hubContentRel, targetContentRelMd) {
  const hubDir = posix.dirname(hubContentRel.replace(/\\/g, '/'));
  const fromRoute = hubDir + '/';
  const targetBase = targetContentRelMd.replace(/\\/g, '/').replace(/\.md$/, '');
  const toRoute = targetBase + '/';
  let rel = posix.relative(fromRoute, toRoute);
  if (!rel.startsWith('.') && !rel.startsWith('/')) rel = './' + rel;
  if (!rel.endsWith('/')) rel += '/';
  return rel;
}

function pickTarget(simple, hubRel) {
  const list = typeIndex.get(simple) || [];
  if (!list.length) return null;
  const hubPosix = hubRel.replace(/\\/g, '/');
  const lang = hubPosix.includes('/en/') ? 'en' : 'zh';
  const sameLang = list.filter((p) => p.includes(`/v1.3.15/${lang}/`));
  const pool = sameLang.length ? sameLang : list;
  pool.sort((a, b) => {
    const aCol = a.includes('__') ? 1 : 0;
    const bCol = b.includes('__') ? 1 : 0;
    if (aCol !== bCol) return aCol - bCol;
    const da = posix.relative(posix.dirname(hubPosix), a).split('/').length;
    const db = posix.relative(posix.dirname(hubPosix), b).split('/').length;
    return da - db;
  });
  return pool[0];
}

const LINK_RE = /\[([^\]]*)\]\(([^)]+)\)/g;

const hubFiles = [
  'v1.3.15/zh/api/campaign-ext/campaignbehaviors/_index.md',
  'v1.3.15/zh/api/campaign-ext/conversation/_index.md',
  'v1.3.15/zh/api/campaign-ext/issues/_index.md',
  'v1.3.15/zh/api/campaign-ext/party/_index.md',
  'v1.3.15/zh/api/campaign-ext/viewmodelcollection/_index.md',
  'v1.3.15/zh/api/core-extra/root/_index.md',
  'v1.3.15/zh/api/gui/platform/_index.md',
  'v1.3.15/zh/api/gui/root/_index.md',
  'v1.3.15/zh/api/mission-ext/gauntletui/_index.md',
  'v1.3.15/zh/api/mission-ext/root/_index.md',
  'v1.3.15/zh/api/mission-ext/viewmodelcollection/_index.md',
];

let totalFixed = 0;
let totalUnfixed = 0;
const report = [];

for (const hubRel of hubFiles) {
  const abs = join(CONTENT, hubRel);
  if (!existsSync(abs)) {
    report.push({ hubRel, error: 'missing' });
    continue;
  }
  let text = readFileSync(abs, 'utf8');
  const hubDir = posix.dirname(hubRel);
  const fromRoute = hubDir + '/';
  const fixes = [];
  const unfixed = [];

  text = text.replace(LINK_RE, (full, label, href) => {
    if (/^(https?:|mailto:|#|\/)/i.test(href)) return full;
    const pure = href.split('#')[0].split('?')[0];
    const target = resolveTarget(fromRoute, pure);
    if (!target) return full;
    if (existsAsPage(target)) return full;

    const tail = pure.replace(/\/+$/, '').split('/').pop() || '';
    const simple = tail.replace(/\.md$/, '');
    if (!simple || simple === '..' || simple === '.') {
      unfixed.push({ href, reason: 'no-simple' });
      totalUnfixed++;
      return full;
    }

    if (/^(Type|Module|TypeName|Class|Namespace)$/i.test(simple)) {
      fixes.push({ href, to: '(unlinked code)', simple });
      totalFixed++;
      return '`' + label.replace(/`/g, '') + '`';
    }

    const found = pickTarget(simple, hubRel);
    if (!found) {
      unfixed.push({ href, simple, reason: 'not-in-index' });
      totalUnfixed++;
      return full;
    }
    const newHref = relHrefFromHub(hubRel, found);
    const hash = href.includes('#') ? '#' + href.split('#').slice(1).join('#') : '';
    fixes.push({ href: pure, to: newHref, simple, found });
    totalFixed++;
    return `[${label}](${newHref}${hash})`;
  });

  if (WRITE && fixes.length) writeFileSync(abs, text, 'utf8');
  report.push({
    hubRel,
    fixes: fixes.length,
    unfixed: unfixed.length,
    fixSample: fixes.slice(0, 5),
    unfixedSample: unfixed.slice(0, 8),
  });
}

console.log(WRITE ? 'WRITE mode' : 'DRY-RUN mode');
console.log(JSON.stringify({ totalFixed, totalUnfixed, report }, null, 2));
if (!WRITE) console.log('\nRe-run with --write to apply.');
