#!/usr/bin/env node
// ============================================================================
// tools/_verify/classify-tiers.mjs
// ----------------------------------------------------------------------------
// Read-only four-tier audit of every existing page under content/<tree>/<lang>/
// for the three small trees (v1.4.6, v1.4.7, v1.5.3).
//
// Tiers (checked in this order):
//   1. generated        — body contains an exact generation-marker string
//                         (的自动生成类参考 / Auto-generated class reference /
//                          的自动生成战役动作参考 / Auto-generated campaign action reference)
//                         or a <!-- v*-skeleton --> HTML comment.
//   2. empty_shell      — description claims auto-generation (「的自动生成类参考。」or
//                         「Auto-generated」) OR body carries an empty-shell signature
//                         string (它有什么状态 / 它允许你做什么 / 它保存的状态),
//                         AND the body has no substance (<2500B or no h2/h3 sections).
//   3. handwritten_deep — no generation markers AND (classifyPage status === 'deep_pass'
//                         OR (bodyBytes > 2500 AND h2h3Sections >= 1)).
//   4. other            — none of the above; reported explicitly, never dropped.
//
// This script only READS content/ and only WRITES tools/_verify/.
// ============================================================================
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { classifyPage } from '../lib/handwritten-policy.mjs';

const HERE = dirname(fileURLToPath(import.meta.url)); // tools/_verify
const REPO = dirname(dirname(HERE)); // repo root
const CONTENT = join(REPO, 'content');
const OUT = HERE;

const TREES = ['v1.4.6', 'v1.4.7', 'v1.5.3'];
const LANGS = ['zh', 'en'];

const GENERATION_MARKERS = [
  '的自动生成类参考',
  'Auto-generated class reference',
  '的自动生成战役动作参考',
  'Auto-generated campaign action reference',
];
const SKELETON_COMMENT_RE = /<!--\s*v.*-skeleton\s*-->/is;
const EMPTY_SHELL_SIGNATURES = ['它有什么状态', '它允许你做什么', '它保存的状态'];
const DESC_AUTO_MARKERS = ['的自动生成类参考。', 'Auto-generated'];
const DEEP_BODY_MIN_BYTES = 2500;

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.name.endsWith('.md')) out.push(p);
  }
  return out;
}

function splitFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { frontmatter: '', body: text };
  return { frontmatter: m[1], body: text.slice(m[0].length) };
}

function extractDescription(frontmatter) {
  // All descriptions in these trees are single-line double-quoted scalars.
  const m = frontmatter.match(/^description:\s*"([^"]*)"/m);
  return m ? m[1] : '';
}

function countH2H3(body) {
  return (body.match(/^#{2,3}\s+/gm) || []).length;
}

function hasSubstance(bodyBytes, h2h3) {
  return bodyBytes > DEEP_BODY_MIN_BYTES && h2h3 >= 1;
}

function classifyPageTier(relPath, text) {
  const { frontmatter, body } = splitFrontmatter(text);
  const description = extractDescription(frontmatter);
  const bodyBytes = Buffer.byteLength(body, 'utf8');
  const h2h3 = countH2H3(body);
  const cp = classifyPage(relPath, text);

  const markerHits = GENERATION_MARKERS.filter((s) => text.includes(s));
  const skeletonHit = SKELETON_COMMENT_RE.test(text);
  const descAutoHits = DESC_AUTO_MARKERS.filter((s) => description.includes(s));
  const sigHits = EMPTY_SHELL_SIGNATURES.filter((s) => body.includes(s));

  let tier;
  const evidence = [];
  if (markerHits.length > 0 || skeletonHit) {
    tier = 'generated';
    if (markerHits.length) evidence.push(`marker:${markerHits.join('|')}`);
    if (skeletonHit) evidence.push('skeleton-comment');
  } else if ((descAutoHits.length > 0 || sigHits.length > 0) && !hasSubstance(bodyBytes, h2h3)) {
    tier = 'empty_shell';
    if (descAutoHits.length) evidence.push(`desc-marker:${descAutoHits.join('|')}`);
    if (sigHits.length) evidence.push(`signature:${sigHits.join('|')}`);
  } else if (cp.status === 'deep_pass' || hasSubstance(bodyBytes, h2h3)) {
    tier = 'handwritten_deep';
    if (cp.status === 'deep_pass') evidence.push('classifyPage:deep_pass');
    if (hasSubstance(bodyBytes, h2h3)) evidence.push(`body>${DEEP_BODY_MIN_BYTES}B+h2h3`);
  } else {
    tier = 'other';
    evidence.push('no-marker+not-deep+not-empty-shell');
  }

  return {
    path: relPath,
    bytes: Buffer.byteLength(text, 'utf8'),
    bodyBytes,
    h2h3,
    classifyPage: { status: cp.status, reasons: cp.reasons },
    tier,
    evidence,
    markerHits,
    descAutoHits,
    sigHits,
  };
}

const CRITERIA = {
  generationMarkers: GENERATION_MARKERS,
  skeletonCommentRegex: SKELETON_COMMENT_RE.source,
  emptyShellSignatures: EMPTY_SHELL_SIGNATURES,
  descriptionAutoMarkers: DESC_AUTO_MARKERS,
  deepPageRule: `classifyPage status === 'deep_pass' OR (bodyBytes > ${DEEP_BODY_MIN_BYTES} AND h2h3Sections >= 1)`,
  bodyDefinition: 'file text after the closing frontmatter delimiter; bytes = UTF-8 byte length',
  h2h3Definition: "count of body lines matching /^#{2,3}\\s+/m",
  tierOrder: ['generated', 'empty_shell', 'handwritten_deep', 'other'],
};

const run = { criteria: CRITERIA, trees: {} };

for (const tree of TREES) {
  const treeEntry = { languages: {}, rootPages: [] };
  for (const lang of LANGS) {
    const dir = join(CONTENT, tree, lang);
    const files = walk(dir).sort();
    const pages = files.map((abs) => {
      const rel = abs.slice(REPO.length + 1).replace(/\\/g, '/');
      return classifyPageTier(rel, readFileSync(abs, 'utf8'));
    });
    const summary = { total: pages.length, handwritten_deep: 0, generated: 0, empty_shell: 0, other: 0 };
    const cpCounts = {};
    for (const p of pages) {
      summary[p.tier]++;
      cpCounts[p.classifyPage.status] = (cpCounts[p.classifyPage.status] || 0) + 1;
    }
    treeEntry.languages[lang] = { pageCount: pages.length, summary, classifyPageStatusCounts: cpCounts, pages };
  }
  // Version-root pages (content/<tree>/*.md directly, not under zh/ or en/) —
  // reported separately so tree totals reconcile with 112 / 97 / 153.
  const rootFiles = readdirSync(join(CONTENT, tree), { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith('.md'))
    .map((e) => e.name)
    .sort();
  for (const name of rootFiles) {
    const abs = join(CONTENT, tree, name);
    const rel = abs.slice(REPO.length + 1).replace(/\\/g, '/');
    treeEntry.rootPages.push(classifyPageTier(rel, readFileSync(abs, 'utf8')));
  }
  run.trees[tree] = treeEntry;
}

mkdirSync(OUT, { recursive: true });
const stamp = new Date().toISOString();

for (const tree of TREES) {
  const t = run.trees[tree];
  for (const lang of LANGS) {
    const l = t.languages[lang];
    const json = {
      tree,
      language: lang,
      generatedAt: stamp,
      pageCount: l.pageCount,
      criteria: CRITERIA,
      summary: l.summary,
      classifyPageStatusCounts: l.classifyPageStatusCounts,
      pages: l.pages,
    };
    writeFileSync(join(OUT, `tiers-${tree}-${lang}.json`), JSON.stringify(json, null, 2) + '\n');
  }

  // Per-tree markdown report (both languages + version-root pages).
  const lines = [];
  lines.push(`# ${tree} — four-tier page audit`);
  lines.push('');
  lines.push(`Generated: ${stamp}`);
  lines.push('');
  lines.push('## Criteria');
  lines.push('');
  lines.push('- **generated**: body contains an exact generation marker (`的自动生成类参考` / `Auto-generated class reference` / `的自动生成战役动作参考` / `Auto-generated campaign action reference`) or a `<!-- v*-skeleton -->` comment.');
  lines.push('- **empty_shell**: description contains `的自动生成类参考。` / `Auto-generated`, or body carries an empty-shell signature (`它有什么状态` / `它允许你做什么` / `它保存的状态`), AND body has no substance.');
  lines.push(`- **handwritten_deep**: no generation markers AND (classifyPage \`deep_pass\` OR body >${DEEP_BODY_MIN_BYTES}B with h2/h3 sections).`);
  lines.push('- **other**: none of the above (listed explicitly).');
  lines.push(`- body = text after closing frontmatter; bodyBytes = UTF-8 byte length; h2h3 = lines matching \`/^#{2,3}\\s+/m\`.`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push('| language | total | handwritten_deep | generated | empty_shell | other |');
  lines.push('| --- | ---: | ---: | ---: | ---: | ---: |');
  for (const lang of LANGS) {
    const s = t.languages[lang].summary;
    lines.push(`| ${lang} | ${s.total} | ${s.handwritten_deep} | ${s.generated} | ${s.empty_shell} | ${s.other} |`);
  }
  const rootTotal = t.rootPages.length;
  const rootDeep = t.rootPages.filter((p) => p.tier === 'handwritten_deep').length;
  lines.push(`| version-root (not zh/en) | ${rootTotal} | ${rootDeep} | ${t.rootPages.filter((p) => p.tier === 'generated').length} | ${t.rootPages.filter((p) => p.tier === 'empty_shell').length} | ${t.rootPages.filter((p) => p.tier === 'other').length} |`);
  lines.push('');
  lines.push('classifyPage status counts:');
  lines.push('');
  lines.push('| language | deep_pass | stub | noise | family_entry_pass |');
  lines.push('| --- | ---: | ---: | ---: | ---: |');
  for (const lang of LANGS) {
    const c = t.languages[lang].classifyPageStatusCounts;
    lines.push(`| ${lang} | ${c.deep_pass || 0} | ${c.stub || 0} | ${c.noise || 0} | ${c.family_entry_pass || 0} |`);
  }
  lines.push('');
  lines.push('## Version-root pages');
  lines.push('');
  for (const p of t.rootPages) {
    lines.push(`- \`${p.path}\` — tier=${p.tier}, classifyPage=${p.classifyPage.status}, bodyBytes=${p.bodyBytes}, h2h3=${p.h2h3}`);
  }
  lines.push('');
  const others = [];
  for (const lang of LANGS) others.push(...t.languages[lang].pages.filter((p) => p.tier === 'other').map((p) => ({ lang, ...p })));
  lines.push('## Other (unclassified) pages');
  lines.push('');
  if (others.length === 0) {
    lines.push('None.');
  } else {
    for (const p of others) {
      lines.push(`- [${p.lang}] \`${p.path}\` — classifyPage=${p.classifyPage.status} (${p.classifyPage.reasons.join(', ')}), bodyBytes=${p.bodyBytes}, h2h3=${p.h2h3}`);
    }
  }
  lines.push('');
  lines.push('## Marker verification');
  lines.push('');
  lines.push(`- generation-marker hits across ${tree}: ${LANGS.reduce((n, lang) => n + t.languages[lang].pages.reduce((m, p) => m + p.markerHits.length, 0), 0)} (exact-string scan of every page)`);
  lines.push(`- skeleton-comment hits: ${LANGS.reduce((n, lang) => n + t.languages[lang].pages.filter((p) => p.evidence.some((e) => e === 'skeleton-comment')).length, 0)}`);
  lines.push(`- empty-shell signature hits: ${LANGS.reduce((n, lang) => n + t.languages[lang].pages.reduce((m, p) => m + p.sigHits.length, 0), 0)}`);
  lines.push(`- description auto-marker hits: ${LANGS.reduce((n, lang) => n + t.languages[lang].pages.reduce((m, p) => m + p.descAutoHits.length, 0), 0)}`);
  lines.push('');
  writeFileSync(join(OUT, `tiers-${tree}.md`), lines.join('\n'));
}

// Compact stdout summary for the report.
for (const tree of TREES) {
  const t = run.trees[tree];
  for (const lang of LANGS) {
    const s = t.languages[lang].summary;
    console.log(`${tree}/${lang}: total=${s.total} deep=${s.handwritten_deep} generated=${s.generated} empty_shell=${s.empty_shell} other=${s.other}`);
  }
  console.log(`${tree}/root: ${t.rootPages.length} page(s): ${t.rootPages.map((p) => `${p.path}=${p.tier}`).join(', ')}`);
}
console.log('Wrote 9 files to tools/_verify/');
