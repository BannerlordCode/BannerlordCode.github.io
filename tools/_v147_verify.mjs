#!/usr/bin/env node
// Independent acceptance harness for the v1.4.7 docs tree (lead-2 owned).
// Re-derives every acceptance number from files on disk. Never trusts worker self-reports.
//
// Usage: node tools/_v147_verify.mjs            (full report)
//        node tools/_v147_verify.mjs --quiet    (numbers only, exit code carries pass/fail)
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative, resolve, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { classifyPage } from './lib/handwritten-policy.mjs';

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ROOT_V = join(REPO, 'content', 'v1.4.7');
const QUIET = process.argv.includes('--quiet');
const log = (...a) => { if (!QUIET) console.log(...a); };

const failures = [];
const fail = (msg) => { failures.push(msg); console.error('FAIL: ' + msg); };

// ---------- 1. walk the tree ----------
function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

const langs = ['zh', 'en'];
const trees = {};
for (const lang of langs) {
  const base = join(ROOT_V, lang);
  trees[lang] = {
    all: walk(base),
    api: walk(join(base, 'api')),
    index: walk(base).filter((p) => p.endsWith('_index.md')),
    arch: walk(join(base, 'architecture')),
  };
  log(`\n=== ${lang} ===`);
  log(`total md      : ${trees[lang].all.length}`);
  log(`  api leaves : ${trees[lang].api.filter((p) => !p.endsWith('_index.md')).length}`);
  log(`  _index.md  : ${trees[lang].index.length}`);
  log(`  architecture: ${trees[lang].arch.length}`);
}
if (!trees.zh.all.length) fail('no zh pages found under content/v1.4.7/zh');

// ---------- 2. classify every page ----------
const stats = {};
for (const lang of langs) {
  stats[lang] = { deep_pass: 0, stub: 0, noise: 0, family_entry_pass: 0, other: 0 };
  for (const p of trees[lang].all) {
    const rel = relative(REPO, p).replace(/\\/g, '/');
    let r;
    try { r = classifyPage(rel, readFileSync(p, 'utf8')); }
    catch (e) { stats[lang].other++; continue; }
    stats[lang][r.status] = (stats[lang][r.status] || 0) + 1;
  }
  log(`\n${lang} classification:`, JSON.stringify(stats[lang]));
}

// ---------- 3. banned boilerplate strings ----------
const BANNED = [
  'SomeValue',
  'null; // replace',
  'null; // 替换',
  'service = ...',
  'read the actual subsystem API',
  'Get...Implementation',
  'start by reading the properties',
  '阅读时先通过属性了解状态',
];
const bannedHits = [];
for (const lang of langs) {
  for (const p of trees[lang].all) {
    const t = readFileSync(p, 'utf8');
    for (const b of BANNED) {
      if (t.includes(b)) bannedHits.push(`${relative(REPO, p).replace(/\\/g, '/')} :: ${b}`);
    }
    // zh-side boilerplate "是 TaleWorlds.X 下的公开类型"
    const m = t.match(/是\s+TaleWorlds\.\S+\s+(?:下|中)的公开类型/);
    if (m) bannedHits.push(`${relative(REPO, p).replace(/\\/g, '/')} :: zh public-type boilerplate`);
    // en-side boilerplate
    if (/is a public type (?:in|under)\s+TaleWorlds\./i.test(t))
      bannedHits.push(`${relative(REPO, p).replace(/\\/g, '/')} :: en public-type boilerplate`);
  }
}
log(`\nbanned-string hits: ${bannedHits.length}`);
if (bannedHits.length) { bannedHits.slice(0, 20).forEach((h) => console.error('  ' + h)); fail(`${bannedHits.length} banned boilerplate strings`); }

// ---------- 4. CJK leak into the en tree ----------
const CJK = /[\u4e00-\u9fff]/;
const cjkHits = [];
for (const p of trees.en.all) {
  const t = readFileSync(p, 'utf8');
  const lines = t.split(/\r?\n/);
  lines.forEach((l, i) => {
    // ignore fenced code blocks
    if (/^\s*```/.test(l)) return;
    if (CJK.test(l)) cjkHits.push(`${relative(REPO, p).replace(/\\/g, '/')}:${i + 1}`);
  });
}
log(`CJK lines in en tree (outside code fences): ${cjkHits.length}`);
if (cjkHits.length) { cjkHits.slice(0, 20).forEach((h) => console.error('  ' + h)); fail(`${cjkHits.length} CJK lines leaked into en tree`); }

// ---------- 5. relative-link resolution (independent of audit-links.mjs) ----------
function routeOf(p) {
  // zola: content/<a>/<b>/_index.md -> /<a>/<b>/ ; leaf -> /<a>/<b>/
  let r = relative(REPO, p).replace(/\\/g, '/');
  r = r.replace(/^content/, '');
  r = r.replace(/\.md$/, '');
  if (r.endsWith('/_index')) r = r.slice(0, -'_index'.length);
  else r = r + '/';
  return r.replace(/\/+$/, '/');
}
const routes = new Set();
for (const lang of langs) for (const p of trees[lang].all) routes.add(routeOf(p));
log(`\ndistinct routes on disk: ${routes.size}`);

// The site resolves relative links ROUTE-relative, not filesystem-relative:
// every page route is treated as its own directory (see AGENTS.md). So a sibling
// leaf in the same api/<subdir>/ is written `../X`, which is filesystem-WRONG but
// route-CORRECT. Resolving against dirname(fromFile) produces false positives.
function normalizeRoute(p) {
  const parts = p.split('/').filter(Boolean);
  const out = [];
  for (const seg of parts) {
    if (seg === '.' || seg === '') continue;
    if (seg === '..') { if (out.length) out.pop(); continue; }
    out.push(seg);
  }
  return '/' + out.join('/');
}
function routeTarget(fromFile, href) {
  const base = routeOf(fromFile); // always ends with '/'
  return normalizeRoute(base + href);
}
function routeExists(route) {
  const r = route.replace(/\/$/, '');
  if (!r) return true; // site root
  const p = join(REPO, 'content', r);
  if (existsSync(p + '.md')) return true;                       // leaf page
  if (existsSync(join(p, '_index.md'))) return true;            // section index
  return false;
}
function linkResolves(fromFile, href) {
  if (/^(https?:|mailto:|#)/.test(href)) return true;
  const h = href.split('#')[0];
  if (!h) return true;
  return routeExists(routeTarget(fromFile, h));
}
// REVERSE ASSERTION (added after a regression): a depth-only check cannot see a
// wrong PREFIX. The bug this catches looked like "linkRules already applied"
// because the dot-count was right, while every href carried a repo-root-relative
// prefix (content/v1.4.7/...) that no route can contain.
const LEAK_CONTENT = /(^|\/)content(\/|$)/;
const ownVersion = 'v1.4.7';
const prefixLeaks = [];
for (const lang of langs) {
  for (const p of trees[lang].all) {
    const t = readFileSync(p, 'utf8');
    const re = /\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
    let m;
    while ((m = re.exec(t))) {
      const href = m[1];
      if (/^(https?:|mailto:|#)/.test(href)) continue;
      if (LEAK_CONTENT.test(href)) prefixLeaks.push(`${relative(REPO, p).replace(/\\/g, '/')} -> ${href}  [repo-root-relative leak]`);
      // A version segment is FORBIDDEN only in a same-version link. Cross-version
      // links legitimately contain one -- banning it would flag the correct form.
      const v = href.match(/v\d+\.\d+(?:\.\d+)?/);
      if (v && v[0] === ownVersion) prefixLeaks.push(`${relative(REPO, p).replace(/\\/g, '/')} -> ${href}  [same-version link carries a version segment]`);
    }
  }
}
log(`\nreverse-assertion prefix leaks: ${prefixLeaks.length}`);
if (prefixLeaks.length) { prefixLeaks.slice(0, 20).forEach((h) => console.error('  ' + h)); fail(`${prefixLeaks.length} hrefs leak a repo-root prefix or a same-version version segment`); }

const broken = [];
// GATE 4 (added after boss's ruling): self-referential links. A page linking to
// itself is both meaningless and usually a symptom of a wrong-level href.
const selfRefs = [];
for (const lang of langs) {
  for (const p of trees[lang].all) {
    const t = readFileSync(p, 'utf8');
    const re = /\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
    let m;
    while ((m = re.exec(t))) {
      const href = m[1];
      if (/^(https?:|mailto:|#)/.test(href)) continue;
      const target = routeTarget(p, href).replace(/\/$/, '');
      const self = routeOf(p).replace(/\/$/, '');
      if (target === self) selfRefs.push(`${relative(REPO, p).replace(/\\/g, '/')} -> ${href}`);
    }
  }
}
log(`\ngate 4 self-referential links: ${selfRefs.length}`);
if (selfRefs.length) { selfRefs.slice(0, 20).forEach((h) => console.error('  ' + h)); fail(`${selfRefs.length} self-referential links`); }

for (const lang of langs) {
  for (const p of trees[lang].all) {
    const t = readFileSync(p, 'utf8');
    const re = /\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
    let m;
    while ((m = re.exec(t))) {
      const href = m[1];
      if (/^(https?:|mailto:|#)/.test(href)) continue;
      if (!linkResolves(p, href))
        broken.push(`${relative(REPO, p).replace(/\\/g, '/')} -> ${href}`);
    }
  }
}

// classify broken links by cause, so timing is never confused with defect.
// The basename lookup MUST be scoped to the same language tree: otherwise a
// link to a zh page from an en page looks like "exists in another bucket"
// when it is really just "the en twin has not been written yet".
const byCause = { timingIndex: [], timingUnwritten: [], timingOtherLang: [], wrongLevel: [], dead: [] };
{
  const perLang = {};
  for (const lang of langs) {
    const m = new Map(); // basename -> [paths]
    for (const p of trees[lang].all) {
      const b = basename(p, '.md');
      if (!m.has(b)) m.set(b, []);
      m.get(b).push(p);
    }
    perLang[lang] = m;
  }
  for (const entry of broken) {
    const i = entry.lastIndexOf(' -> ');
    const fromRel = entry.slice(0, i), href = entry.slice(i + 4);
    // rel looks like content/v1.4.7/<lang>/... -> language is segment [2]
    const langOf = (rel) => rel.split('/')[2];
    const srcLang = langOf(fromRel);
    if (href === '../' || href === '../../' || href === '../../../' || href === '../../../../') {
      byCause.timingIndex.push(entry); continue;
    }
    const base = basename(href.replace(/\/$/, ''));
    if (perLang[srcLang] && perLang[srcLang].get(base)) { byCause.dead.push(entry); continue; }
    // exists only in the OTHER language tree -> that twin is simply not written yet
    const other = langs.find((l) => l !== srcLang && perLang[l] && perLang[l].get(base));
    if (other) { byCause.timingOtherLang.push(entry); continue; }
    if (/^\.\.\/[a-z-]+\//.test(href)) { byCause.wrongLevel.push(entry); continue; }
    byCause.timingUnwritten.push(entry);
  }
}
log('\nbroken-link cause split:');
log(`  timing: section/bucket _index.md not written yet : ${byCause.timingIndex.length}`);
log(`  timing: target page not written yet              : ${byCause.timingUnwritten.length}`);
log(`  timing: target exists only in the OTHER language : ${byCause.timingOtherLang.length}`);
log(`  REAL: wrong link level (one ../ short)           : ${byCause.wrongLevel.length}`);
log(`  REAL: target basename exists elsewhere in-tree   : ${byCause.dead.length}`);
const realBroken = byCause.wrongLevel.length + byCause.dead.length;
log(`  => REAL DEFECTS: ${realBroken}   (must be 0 at acceptance)`);
if (byCause.dead.length) { byCause.dead.slice(0, 12).forEach((b) => console.error('  DEAD ' + b)); }
log(`broken relative links: ${broken.length}`);
if (broken.length) { broken.slice(0, 25).forEach((b) => console.error('  ' + b)); fail(`${broken.length} broken relative links`); }

// ---------- 6. facade deep-write pages must be deep_pass ----------
const FACADE = [
  'api/campaign/Campaign', 'api/campaign/IFaction', 'api/campaign/CampaignBehaviorBase',
  'api/campaign/CampaignEvents', 'api/campaign/CampaignGameStarter',
  'api/campaign-ext/MBObjectManager', 'api/campaign-ext/MBObjectBase',
  'api/core/MBSubModuleBase', 'api/core/Module',
  'api/core-extra/Game', 'api/core-extra/ViewModel',
  'api/save-system/SaveManager', 'api/save-system/SaveContext', 'api/save-system/LoadContext',
  'api/mission/Mission', 'api/mission/MissionBehavior', 'api/mission/MissionState', 'api/mission/Agent',
  'api/gui/ScreenBase', 'api/gui/ScreenManager', 'api/gui/ScreenLayer',
  'api/engine/GauntletLayer', 'api/engine/MBDebug',
];
const facadeResults = [];
let facadeMissing = 0, facadeNotDeep = 0;
for (const lang of langs) {
  for (const rel of FACADE) {
    const p = join(ROOT_V, lang, rel + '.md');
    if (!existsSync(p)) { facadeMissing++; facadeResults.push(`${lang}/${rel} MISSING`); continue; }
    const r = classifyPage(relative(REPO, p).replace(/\\/g, '/'), readFileSync(p, 'utf8'));
    if (r.status !== 'deep_pass') { facadeNotDeep++; facadeResults.push(`${lang}/${rel} ${r.status} ${JSON.stringify(r.reasons)}`); }
    else facadeResults.push(`${lang}/${rel} deep_pass`);
  }
}
log(`\nfacade pages: ${FACADE.length * 2} expected, missing ${facadeMissing}, not-deep ${facadeNotDeep}`);
log(facadeResults.filter((r) => !r.endsWith('deep_pass')).join('\n') || '  (all deep_pass)');
if (facadeMissing) fail(`${facadeMissing} facade pages missing`);
if (facadeNotDeep) fail(`${facadeNotDeep} facade pages not deep_pass`);

// ---------- 7. zh/en path parity (en must mirror zh, minus facade) ----------
if (trees.zh.all.length && trees.en.all.length) {
  const setOf = (arr, lang) => new Set(arr.map((p) => relative(join(ROOT_V, lang), p).replace(/\\/g, '/')));
  const zhSet = setOf(trees.zh.all, 'zh');
  const enSet = setOf(trees.en.all, 'en');
  const onlyZh = [...zhSet].filter((x) => !enSet.has(x));
  const onlyEn = [...enSet].filter((x) => !zhSet.has(x));
  log(`\nzh-only paths: ${onlyZh.length} | en-only paths: ${onlyEn.length}`);
  log('  zh-only sample: ' + onlyZh.slice(0, 12).join(', '));
  log('  en-only sample: ' + onlyEn.slice(0, 12).join(', '));
  // expected: onlyZh should be ~ the facade set (+ any worker gap)
  const facadeRel = FACADE.map((f) => f + '.md');
  const unexpectedZh = onlyZh.filter((x) => !facadeRel.includes(x));
  const unexpectedEn = onlyEn.filter((x) => !x.endsWith('_index.md'));
  if (unexpectedZh.length) log(`  zh-only beyond facade set (${unexpectedZh.length}): ${unexpectedZh.slice(0, 20).join(', ')}`);
  if (unexpectedEn.length) { log(`  en-only non-index (${unexpectedEn.length}): ${unexpectedEn.slice(0, 20).join(', ')}`); fail(`${unexpectedEn.length} en-only paths (mirror must prune)`); }
}

// ---------- 8. nav-spec routes must exist on disk ----------
const NAVJSON = join(REPO, 'tools', '_v147_nav-spec.json');
if (existsSync(NAVJSON)) {
  const nav = JSON.parse(readFileSync(NAVJSON, 'utf8'));
  const navRoutes = (nav.routes || []).map((r) => (typeof r === 'string' ? r : r.route || r.path)).filter(Boolean);
  const missing = navRoutes.filter((r) => !routes.has(r) && !routes.has(r.replace(/\/$/, '') + '/'));
  log(`\nnav-spec routes: ${navRoutes.length}, not on disk: ${missing.length}`);
  if (missing.length) { log('  ' + missing.slice(0, 15).join('\n  ')); fail(`${missing.length} nav-spec routes have no file`); }
} else log('\nnav-spec json: not present yet');

// ---------- 9. section-index coverage ----------
log('\n=== section index coverage ===');
for (const lang of langs) {
  const apiBase = join(ROOT_V, lang, 'api');
  if (!existsSync(apiBase)) { log(`${lang}: no api dir`); continue; }
  const dirs = readdirSync(apiBase, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name);
  const missingIdx = dirs.filter((d) => !existsSync(join(apiBase, d, '_index.md')));
  log(`${lang}: ${dirs.length} api dirs, ${missingIdx.length} without _index.md` + (missingIdx.length ? ' -> ' + missingIdx.join(', ') : ''));
  const rootIdx = existsSync(join(apiBase, '_index.md'));
  log(`${lang}: api/_index.md ${rootIdx ? 'present' : 'MISSING'}`);
  if (!rootIdx) fail(`${lang} api/_index.md missing`);
}

// ---------- summary ----------
log('\n================ SUMMARY ================');
for (const lang of langs) log(`${lang}: ${JSON.stringify(stats[lang])}`);
log(`deep_pass total: ${stats.zh.deep_pass + stats.en.deep_pass}`);
log(`facade: missing ${facadeMissing}, not-deep ${facadeNotDeep}`);
log(`banned strings: ${bannedHits.length} | CJK in en: ${cjkHits.length} | broken links: ${broken.length}`);
log(`prefix leaks: ${prefixLeaks.length} | REAL link defects: ${realBroken} | self-refs: ${selfRefs.length}`);
log(`routes: ${routes.size}`);
log(failures.length ? `\nRESULT: ${failures.length} FAILURE(S)` : '\nRESULT: PASS');
process.exit(failures.length ? 1 : 0);
