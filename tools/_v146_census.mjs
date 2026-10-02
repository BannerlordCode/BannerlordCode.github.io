#!/usr/bin/env node
/**
 * _v146_census.mjs — READ-ONLY. Classifies every page under content/v1.4.6 as
 * handwritten, generator-produced, or other, and cross-checks two independent
 * judgments. Writes only to tools/_v146_out/.
 *
 *   node tools/_v146_census.mjs
 */
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'fs';
import { join, relative, dirname } from 'path';
import { fileURLToPath } from 'url';
import { writeGuarded, mkdirGuarded } from './_v146_content_freeze.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, '..');
const DOCS = join(REPO, 'content', 'v1.4.6');
const OUT = join(REPO, 'tools', '_v146_out');

/* ------------------------------------------------------------- judgments */

// Judgment A — generator fingerprint. Stable strings only this tool ever emits.
const A_MARKER = 'generated-by: tools/_v146_stubs.mjs';
const A_LEGACY_ZH = '本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码';
const A_LEGACY_EN = 'Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source';
const A_SKELETON = /^\| 成员 \| 签名 \| 种类 \|$/m;      // zh member table header
const A_SKELETON_EN = /^\| Member \| Signature \| Kind \|$/m;
const A_BUCKET_LINE = /^\*\*Bucket:\*\* `/m;                // **Bucket:** `<dir>` (<rule>)
const judgeA = (t) =>
  t.includes(A_MARKER) ? 'marker' :
  t.includes(A_LEGACY_ZH) || t.includes(A_LEGACY_EN) ? 'legacy-batch-note' :
  (A_BUCKET_LINE.test(t) && (A_SKELETON.test(t) || A_SKELETON_EN.test(t))) ? 'skeleton-table' :
  null;

// Judgment B — handwritten deep page. Independent of any generator string.
const B_H2 = (t, re) => new RegExp('^#{2}\\s+(?:' + re + ')\\s*$', 'imu').test(t);
const B_CSHARP = /```csharp\r?\n([\s\S]*?)```/i;
const B_PLACEHOLDER = /SomeValue|null;\s*\/\/\s*替换|service\s*=\s*\.\.\./u;
// a real example: >= 3 non-comment lines AND a method call, no banned placeholder
function hasRealExample(t) {
  const m = t.match(/```csharp\r?\n([\s\S]*?)```/i);
  if (!m || B_PLACEHOLDER.test(m[1])) return false;
  const lines = m[1].split(/\r?\n/).map((l) => l.replace(/\/\/.*$/, '').trim()).filter(Boolean);
  return lines.length >= 3 && /\.\w+\s*\(/.test(m[1]);
}
// a real risk section is an H2 heading, not the word "risk" appearing in prose
const RISK_H2 = /^#{2}\s+(?:风险与边界|风险(?:与|和)?边界|Risks?(?:\s*(?:and|&)\s*Boundaries)?)\s*$/imu;
const judgeB = (t) => {
  const overview = B_H2(t, '概述|Overview');
  const mental = B_H2(t, '心智模型|Mental\\s*Model');
  const risk = RISK_H2.test(t);
  const example = hasRealExample(t);
  return { overview, mental, risk, example, deep: overview && mental && (example || risk) };
};

function walk(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name.endsWith('.md')) acc.push(p);
  }
  return acc;
}

const files = walk(DOCS).map((f) => ({
  rel: relative(DOCS, f).replace(/\\/g, '/'),
  abs: f,
  size: statSync(f).size,
  text: readFileSync(f, 'utf8'),
}));

const rows = files.map((f) => {
  const a = judgeA(f.text);
  const b = judgeB(f.text);
  let verdict;
  if (a && !b.deep) verdict = 'generated';
  else if (b.deep && !a) verdict = 'handwritten-deep';
  else if (a && b.deep) verdict = 'handwritten-deep-with-generator-fingerprint';
  else verdict = 'other';
  const seg = f.rel.split('/');
  return {
    rel: f.rel,
    lang: seg[0],
    section: seg[1],
    bucket: seg[2] || null,
    isIndex: seg[seg.length - 1] === '_index.md',
    size: f.size,
    judgeA: a,
    judgeB: b.deep ? 'deep' : JSON.stringify(b),
    verdict,
  };
});

const count = (pred) => rows.filter(pred).length;
const byLang = {};
for (const lang of ['zh', 'en']) {
  const sub = rows.filter((r) => r.lang === lang);
  byLang[lang] = {
    total: sub.length,
    'handwritten-deep': sub.filter((r) => r.verdict === 'handwritten-deep').length,
    'handwritten-deep-with-generator-fingerprint': sub.filter((r) => r.verdict === 'handwritten-deep-with-generator-fingerprint').length,
    generated: sub.filter((r) => r.verdict === 'generated').length,
    other: sub.filter((r) => r.verdict === 'other').length,
    leafGenerated: sub.filter((r) => r.verdict === 'generated' && !r.isIndex).length,
    leafHandwritten: sub.filter((r) => r.verdict.startsWith('handwritten') && !r.isIndex).length,
    indexGenerated: sub.filter((r) => r.verdict === 'generated' && r.isIndex).length,
    indexOther: sub.filter((r) => r.verdict === 'other' && r.isIndex).length,
    byJudgeA: sub.filter((r) => r.judgeA).length,
    byJudgeBDeep: sub.filter((r) => r.judgeB === 'deep').length,
  };
}

const byBucket = {};
for (const r of rows) {
  if (!r.bucket) continue;
  if (!byBucket[r.bucket]) byBucket[r.bucket] = { bucket: r.bucket, total: 0, generated: 0, handwritten: 0, other: 0 };
  const b = byBucket[r.bucket];
  b.total++;
  if (r.verdict === 'generated') b.generated++;
  else if (r.verdict.startsWith('handwritten')) b.handwritten++;
  else b.other++;
}

/* --------------------------------------------- the 40 reserved deep pages */

const RF = JSON.parse(readFileSync(join(HERE, '_v146_reserved-paths.json'), 'utf8'));
const reserved = [];
for (const [owner, list] of Object.entries(RF.owners)) {
  if (owner.startsWith('_')) continue;
  for (const entry of list) {
    for (const lang of RF.mirrorLang) {
      const rel = lang + entry.slice(2) + '.md';
      const row = rows.find((r) => r.rel === rel);
      reserved.push({
        owner,
        path: rel,
        exists: !!row,
        verdict: row ? row.verdict : 'MISSING',
        judgedAs: row ? (row.judgeA ? 'A=' + row.judgeA : 'A=none') + ' / ' + (row.judgeB === 'deep' ? 'B=deep' : 'B=shallow') : '-',
        bytes: row ? row.size : 0,
      });
    }
  }
}

const census = {
  generatedAt: 'tool: _v146_census.mjs (read-only; content freeze active)',
  root: 'content/v1.4.6',
  judgmentA: {
    name: 'generator fingerprint',
    signals: [
      'contains "' + A_MARKER + '"',
      'contains the legacy batch-draft sentence (pre-freeze generator)',
      'has a **Bucket:** `dir` (rule) line AND the generated member-table header "| 成员 | 签名 | 种类 |" / "| Member | Signature | Kind |"',
    ],
  },
  judgmentB: {
    name: 'handwritten deep page',
    signals: [
      'has an H2 概述 / Overview section',
      'has an H2 心智模型 / Mental Model section',
      'AND (has a risk/boundary H2 heading, or a csharp fence with >= 3 non-comment lines and a .Method( call and no banned placeholder)',
      'note: the risk test is a HEADING match only; the word "risk" appearing in prose does not count',
    ],
    note: 'deliberately string-independent: it never looks for a generator marker',
  },
  totals: {
    files: rows.length,
    handwrittenDeep: count((r) => r.verdict === 'handwritten-deep'),
    handwrittenDeepWithGeneratorFingerprint: count((r) => r.verdict === 'handwritten-deep-with-generator-fingerprint'),
    generated: count((r) => r.verdict === 'generated'),
    other: count((r) => r.verdict === 'other'),
  },
  byLang,
  byBucket,
  reservedPathDetail: reserved,
};

mkdirGuarded(OUT, { recursive: true });
writeGuarded(join(OUT, 'census.json'), JSON.stringify(census, null, 1));
writeGuarded(
  join(OUT, 'census.md'),
  [
    '# v1.4.6 手写 / 生成页面对账（markdown 层）',
    '',
    '工具：`node tools/_v146_census.mjs`（只读；`content/` 冻结中，产物写在 `tools/_v146_out/`）',
    '',
    '## 判定方法',
    '',
    '**判据 A — 生成器指纹（只看本工具自己写下的稳定字符串）**',
    '',
    ...census.judgmentA.signals.map((x) => '- ' + x),
    '',
    '**判据 B — 手写深写页（与生成器字符串完全无关）**',
    '',
    ...census.judgmentB.signals.map((x) => '- ' + x),
    '',
    '**交叉表**',
    '',
    '| | B: deep | B: shallow |',
    '| --- | --- | --- |',
    '| A: 有生成器指纹 | 手写深写页（指纹来自被覆盖前的旧版，见下） | 生成页 |',
    '| A: 无生成器指纹 | 手写深写页 | 其它（版本首页、架构页、worker 中间产物） |',
    '',
    '## 总数（按语言）',
    '',
    '| 语言 | 页面总数 | 手写深写 | 生成 | 其它 | 叶子手写 | 叶子生成 |',
    '| --- | --- | --- | --- | --- | --- | --- |',
    ...['zh', 'en'].map((l) => {
      const b = byLang[l];
      return `| ${l} | ${b.total} | ${b['handwritten-deep'] + b['handwritten-deep-with-generator-fingerprint']} | ${b.generated} | ${b.other} | ${b.leafHandwritten} | ${b.leafGenerated} |`;
    }),
    '',
    '## 按桶',
    '',
    '| 桶 | 页面 | 生成 | 手写 | 其它 |',
    '| --- | --- | --- | --- | --- |',
    ...Object.values(byBucket).sort((a, b) => b.total - a.total).map((b) => `| \`${b.bucket}\` | ${b.total} | ${b.generated} | ${b.handwritten} | ${b.other} |`),
    '',
    '## 40 条保留深写路径的归属',
    '',
    '| owner | 路径 | 存在 | 判定 | 判据 | 字节 |',
    '| --- | --- | --- | --- | --- | --- |',
    ...reserved.map((r) => `| ${r.owner} | \`${r.path}\` | ${r.exists ? 'Y' : 'N'} | ${r.verdict} | ${r.judgedAs} | ${r.bytes} |`),
    '',
    '> 冻结后本工具不再写 `content/`，也不删除任何文件。撤回与否由 lead 裁决。',
    '',
  ].join('\n')
);

console.log('root            content/v1.4.6');
console.log('files           ' + census.totals.files);
for (const l of ['zh', 'en']) {
  const b = byLang[l];
  console.log(l.padEnd(16) + 'total=' + b.total + ' handwritten=' + (b['handwritten-deep'] + b['handwritten-deep-with-generator-fingerprint']) + ' generated=' + b.generated + ' other=' + b.other);
}
console.log('reserved paths  ' + reserved.length + ' (' + reserved.filter((r) => r.verdict.startsWith('handwritten')).length + ' handwritten, ' + reserved.filter((r) => r.verdict === 'generated').length + ' generated-stub, ' + reserved.filter((r) => !r.exists).length + ' missing)');
console.log('wrote tools/_v146_out/census.json and census.md');
