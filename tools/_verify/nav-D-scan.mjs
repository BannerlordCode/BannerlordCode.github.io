#!/usr/bin/env node
// nav-D-scan.mjs —— 索引页「给了链接必须给数量」违规扫描（worker D，只读）
//
// 判据来源：
//   tools/_INTEGRATION-GATES.md §1.2（给了链接但没给数量 → 门槛 0）
//   tools/_INTEGRATION-GATES.md §1.3（规模声称 vs 磁盘实测）
//   tools/_NAV-ARCHITECTURE.md §5 A2（每个 _index.md 列出它目录下的全部子页）
//   tools/nav-section-index.mjs 头部（marker 块写入边界 BEGIN/END SECTION INDEX）
//
// 子页集合定义（与 nav-section-index.mjs 的 childrenOf 逐字一致）：
//   该目录下的 .md 叶子页（除 _index.md）+ 含 _index.md 的子目录。
// 路由换算：_index.md 的 route 折叠进所在目录；叶子页 route 比目录深一层。
//   因此桶 _index.md 里 ./Foo 解析到同目录叶子 Foo.md，./sub/ 解析到子目录索引。
//
// 数量声称的已知语义（2026-10-07 读页核实）：
//   「本区页面（N）」「目前 N 页」「N pages」→ 本桶叶子页数
//   「N 篇正文」→ 版本树叶子页；「N 个目录索引」→ 版本树 _index.md 数
//   「N 篇 API 类页」→ 语言 home 指 lang/api 叶子；版本根指中+英合计
//   「N 篇架构页」→ 语言 home 指 lang/architecture 叶子
//   「N 个类页」→ 语言 home 指 lang/api 叶子
//   「N 个 API 子系统桶 / N 个子系统桶」→ api 子目录数
//   「N 个子系统目录索引」→ api 下 _index.md 数减 1（不含 api 自身）
//   「有页面的桶（N 个，M 篇）」→ 有叶子的桶数 + 这些桶的叶子合计
//   「N 个桶没有类页」→ 0 叶子的桶数
//   「分布在 N 个桶里 / N 个桶里」→ 有叶子的桶数
//   「中 N / 英 M」→ 中=zh/api 叶子，英=en/api 叶子
//   千分位空格：「9 384」= 9384；版本号排除：v1.3.15 的 "15" 不是页数
//
// 输出：tools/_verify/nav-D-scan.json（逐页明细），供报告生成使用。
// 本脚本不写 content/ 下任何文件。
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const CONTENT = path.resolve('content');
const BEGIN = '<!-- BEGIN SECTION INDEX -->';
const END = '<!-- END SECTION INDEX -->';

const HEAD = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
const STAMP = new Date().toISOString();

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.isFile() && e.name === '_index.md') out.push(p);
  }
  return out.sort();
}

// 与 nav-section-index.mjs childrenOf 同口径
function childrenOf(dir) {
  const leaves = new Set(), subdirs = new Set();
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '_index.md') continue;
    if (e.isFile() && e.name.endsWith('.md')) leaves.add(e.name.replace(/\.md$/, ''));
    else if (e.isDirectory() && fs.existsSync(path.join(dir, e.name, '_index.md'))) subdirs.add(e.name);
  }
  return { leaves, subdirs };
}

// 解析 href（相对桶目录，BUCKET_INDEX 上下文）；外部/锚点返回 null
function resolveHref(dir, href) {
  if (/^(https?:|#|mailto:)/.test(href)) return null;
  const h = href.split('#')[0];
  if (!h) return null;
  const base = dir.split(path.sep).join('/') + '/';
  return path.posix.normalize(path.posix.join(base, h)).replace(/\/$/, '');
}

const linkRe = /(!?)\[[^\]]*\]\(([^)\s]+)\)/g;

function extractLinks(text) {
  const out = [];
  let m;
  const re = new RegExp(linkRe.source, 'g');
  while ((m = re.exec(text))) {
    if (m[1] === '!') continue; // 图片链接不算
    out.push(m[2]);
  }
  return out;
}

// ── 规模声称提取 ────────────────────────────────────────────────────────────
// 数字统一允许「9 384」式千分位空格；(?<![\d.]) 排除 v1.3.15 里的 "15"。
const NUM = '([\\d][\\d, ]*?)';
const LB = '(?<![\\d.])';
const CLAIM_PATTERNS = [
  // 复合句（中/英分作用域）——必须先于通用模式
  { re: new RegExp(LB + '中文侧\\s*' + NUM + '\\s*个类页', 'g'), kind: 'lang-api-leaves', scope: 'zh' },
  { re: new RegExp(LB + '中文\\s*' + NUM + '\\s*篇类页', 'g'), kind: 'lang-api-leaves', scope: 'zh' },
  { re: new RegExp(LB + '英文\\s*' + NUM + '\\s*篇类页', 'g'), kind: 'lang-api-leaves', scope: 'en' },
  { re: new RegExp(LB + '英文\\s*' + NUM + '\\s*篇', 'g'), kind: 'lang-api-leaves', scope: 'en' },
  { re: new RegExp(LB + 'zh\\s*树\\s*' + NUM + '\\s*个类页', 'g'), kind: 'lang-api-leaves', scope: 'zh' },
  { re: new RegExp(LB + 'en\\s*树\\s*' + NUM + '\\s*个', 'g'), kind: 'lang-api-leaves', scope: 'en' },
  { re: new RegExp(LB + '中\\s*' + NUM + '\\s*篇\\s*API\\s*类页', 'g'), kind: 'lang-api-leaves', scope: 'zh' },
  { re: new RegExp(LB + '英\\s*' + NUM + '\\s*篇', 'g'), kind: 'lang-api-leaves', scope: 'en' },
  { re: new RegExp(LB + NUM + '\\s*篇\\s*API\\s*类页（中\\s*' + NUM + '\\s*/\\s*英\\s*' + NUM + '）', 'g'), kind: 'version-api-split' },
  // 版本根合计
  { re: new RegExp(LB + NUM + '\\s*篇\\s*API\\s*类页', 'g'), kind: 'version-api-total' },
  { re: new RegExp(LB + NUM + '\\s*篇架构页', 'g'), kind: 'version-arch-total' },
  // 桶数声称（多种语义）
  { re: /有页面的桶（([\d]+)\s*个[，,]\s*([\d][\d, ]*?)\s*篇）/g, kind: 'api-bucket-group' },
  { re: new RegExp(LB + NUM + '\\s*个桶没有类页', 'g'), kind: 'api-bucket-zero' },
  { re: /分布在\s*([\d]+)\s*个桶里/g, kind: 'api-bucket-withpages' },
  { re: new RegExp(LB + NUM + '\\s*个桶里', 'g'), kind: 'api-bucket-withpages' },
  { re: new RegExp(LB + NUM + '\\s*个\\s*API\\s*子系统桶', 'g'), kind: 'api-subdirs' },
  { re: new RegExp(LB + NUM + '\\s*个子系统桶', 'g'), kind: 'api-subdirs' },
  { re: new RegExp(LB + NUM + '\\s*个子系统目录索引', 'g'), kind: 'api-subindexes' },
  { re: new RegExp(LB + NUM + '\\s*个桶', 'g'), kind: 'api-subdirs' },
  // 版本根规模
  { re: new RegExp(LB + NUM + '\\s*篇正文', 'g'), kind: 'version-leaves' },
  { re: new RegExp(LB + NUM + '\\s*个目录索引', 'g'), kind: 'version-indexes' },
  // 语言 home / 桶
  { re: new RegExp(LB + NUM + '\\s*篇\\s*API\\s*类页', 'g'), kind: 'lang-api-leaves', scope: 'self' },
  { re: new RegExp(LB + NUM + '\\s*篇类页', 'g'), kind: 'lang-api-leaves', scope: 'self' },
  { re: new RegExp(LB + NUM + '\\s*个类页', 'g'), kind: 'lang-api-leaves', scope: 'self' },
  { re: new RegExp(LB + NUM + '\\s*篇架构页', 'g'), kind: 'lang-arch-leaves' },
  { re: /本区页面（([\d,]+)）/g, kind: 'bucket-pages' },
  { re: /(目前|当前|现在|现有|共计|共)\s*([\d,]+)\s*页/g, kind: 'bucket-pages' },
  { re: /（([\d,]+)\s*篇）/g, kind: 'bucket-pages' },
  { re: /（([\d,]+)\s*页）/g, kind: 'bucket-pages' },
  { re: new RegExp(LB + NUM + '\\s*个页面', 'g'), kind: 'bucket-pages' },
  { re: new RegExp(LB + NUM + '\\s*pages?', 'gi'), kind: 'bucket-pages' },
];

function extractClaims(text) {
  const claims = [];
  for (const p of CLAIM_PATTERNS) {
    const re = new RegExp(p.re.source, p.re.flags);
    let m;
    while ((m = re.exec(text))) {
      let n = null;
      if (p.kind === 'bucket-pages' && m[2] && /(目前|当前|现在|现有|共计|共)/.test(m[0])) n = m[2];
      else if (p.kind === 'api-bucket-group') n = m[2]; // 篇数；桶数另存
      else if (p.kind === 'version-api-split') n = m[1];
      else if (p.kind === 'api-bucket-withpages' || p.kind === 'api-bucket-zero') n = m[1];
      else n = m[1];
      if (n === null) continue;
      const num = parseInt(n.replace(/[,\s]/g, ''), 10);
      if (Number.isNaN(num)) continue;
      const line = text.slice(0, m.index).split(/\r?\n/).length;
      claims.push({
        kind: p.kind, scope: p.scope || null, num, line,
        text: text.split(/\r?\n/)[line - 1].trim().slice(0, 140),
        buckets: p.kind === 'api-bucket-group' ? parseInt(m[1], 10) : undefined,
        split: p.kind === 'version-api-split' ? { zh: parseInt(m[2].replace(/[,\s]/g, ''), 10), en: parseInt(m[3].replace(/[,\s]/g, ''), 10) } : undefined,
      });
    }
  }
  return claims;
}

// api/_index.md 的「桶 | 页数」表：逐行解析，返回 [{name, href, claimed}]
function extractBucketTable(text) {
  const lines = text.split(/\r?\n/);
  const rows = [];
  let headerSeen = false, colIdx = -1;
  for (const l of lines) {
    if (!l.trim().startsWith('|')) { headerSeen = false; colIdx = -1; continue; }
    const cells = l.split('|').slice(1, -1).map((s) => s.trim());
    if (!headerSeen) {
      const hi = cells.findIndex((c) => /页数/.test(c));
      if (hi >= 0) { headerSeen = true; colIdx = hi; }
      continue;
    }
    if (/^[-:\s|]+$/.test(l)) continue;
    const m = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(cells[0] || '');
    if (m && cells[colIdx] && /^[\d,]+$/.test(cells[colIdx])) {
      rows.push({ name: m[1], href: m[2], claimed: parseInt(cells[colIdx].replace(/,/g, ''), 10) });
    }
  }
  return rows;
}

// ── 磁盘计数器 ──────────────────────────────────────────────────────────────
function countLeaves(dir) {
  let n = 0;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '_index.md') continue;
    if (e.isFile() && e.name.endsWith('.md')) n++;
    else if (e.isDirectory()) n += countLeaves(path.join(dir, e.name));
  }
  return n;
}
function countIndexes(dir) {
  let n = 0;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isFile() && e.name === '_index.md') n++;
    else if (e.isDirectory()) n += countIndexes(path.join(dir, e.name));
  }
  return n;
}
function bucketStats(apiDir) {
  // { total, withPages, zeroPages, leavesWithPages }
  let total = 0, withPages = 0, zeroPages = 0, leavesWithPages = 0;
  for (const e of fs.readdirSync(apiDir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    if (!fs.existsSync(path.join(apiDir, e.name, '_index.md'))) continue;
    total++;
    const n = countLeaves(path.join(apiDir, e.name));
    if (n > 0) { withPages++; leavesWithPages += n; } else zeroPages++;
  }
  return { total, withPages, zeroPages, leavesWithPages };
}

// 把页面相对路径解析成作用域
function scopeOf(rel) {
  const parts = rel.split('/');
  if (parts.length === 1) return { type: 'root', dir: CONTENT };
  if (parts[0] === 'versions') return { type: 'versions', dir: path.join(CONTENT, 'versions') };
  const ver = parts[0];
  if (parts.length === 2) return { type: 'version', ver, dir: path.join(CONTENT, ver) };
  if (parts.length === 3) return { type: 'lang', ver, lang: parts[1], dir: path.join(CONTENT, ver, parts[1]) };
  if (parts.length === 4 && parts[2] === 'api') return { type: 'api', ver, lang: parts[1], dir: path.join(CONTENT, ver, parts[1], 'api') };
  return { type: 'bucket', dir: path.dirname(path.join(CONTENT, rel)) };
}

// 核验一条声称；返回 null（无法核验/一致）或 {claimed, actual, scope} 或数组
function verifyClaim(claim, page) {
  const sc = scopeOf(page.rel);
  const apiDirOf = (lang) => path.join(CONTENT, sc.ver, lang, 'api');
  const archDirOf = (lang) => path.join(CONTENT, sc.ver, lang, 'architecture');
  const one = (scope, actual) => actual === claim.num ? null : { claimed: claim.num, actual, scope };
  switch (claim.kind) {
    case 'bucket-pages': {
      if (sc.type !== 'bucket') return null;
      return one('本桶叶子页', countLeaves(sc.dir));
    }
    case 'version-leaves': {
      if (sc.type !== 'version' && sc.type !== 'root') return null;
      return one('版本树叶子页', countLeaves(sc.dir));
    }
    case 'version-indexes': {
      if (sc.type !== 'version' && sc.type !== 'root') return null;
      return one('版本树 _index.md', countIndexes(sc.dir));
    }
    case 'lang-api-leaves': {
      if (claim.scope === 'self') {
        if (sc.type !== 'lang') return null;
        const d = path.join(sc.dir, 'api');
        if (!fs.existsSync(d)) return null;
        return one('语言 api 叶子页', countLeaves(d));
      }
      if (sc.type !== 'version' && sc.type !== 'lang') return null;
      const lang = claim.scope;
      if (sc.type === 'lang' && sc.lang !== lang) return null;
      const d = apiDirOf(lang);
      if (!fs.existsSync(d)) return null;
      return one(`${lang} api 叶子页`, countLeaves(d));
    }
    case 'lang-arch-leaves': {
      if (sc.type !== 'lang') return null;
      const d = path.join(sc.dir, 'architecture');
      if (!fs.existsSync(d)) return null;
      return one('语言 architecture 叶子页', countLeaves(d));
    }
    case 'version-api-total': {
      if (sc.type !== 'version' && sc.type !== 'root') return null;
      const zh = apiDirOf('zh'), en = apiDirOf('en');
      if (!fs.existsSync(zh) || !fs.existsSync(en)) return null;
      return one('中+英 api 叶子页合计', countLeaves(zh) + countLeaves(en));
    }
    case 'version-arch-total': {
      if (sc.type !== 'version' && sc.type !== 'root') return null;
      const zh = archDirOf('zh'), en = archDirOf('en');
      if (!fs.existsSync(zh) || !fs.existsSync(en)) return null;
      return one('中+英 architecture 叶子页合计', countLeaves(zh) + countLeaves(en));
    }
    case 'version-api-split': {
      if (sc.type !== 'version' && sc.type !== 'root') return null;
      const zh = apiDirOf('zh'), en = apiDirOf('en');
      if (!fs.existsSync(zh) || !fs.existsSync(en)) return null;
      const aZh = countLeaves(zh), aEn = countLeaves(en);
      const bad = [];
      if (aZh !== claim.split.zh) bad.push({ claimed: claim.split.zh, actual: aZh, scope: '中 api 叶子页' });
      if (aEn !== claim.split.en) bad.push({ claimed: claim.split.en, actual: aEn, scope: '英 api 叶子页' });
      if (aZh + aEn !== claim.num) bad.push({ claimed: claim.num, actual: aZh + aEn, scope: '中+英合计' });
      return bad.length ? bad : null;
    }
    case 'api-subdirs': {
      const apiDir = sc.type === 'api' ? sc.dir : (sc.type === 'lang' ? path.join(sc.dir, 'api') : null);
      if (!apiDir || !fs.existsSync(apiDir)) return null;
      return one('api 子目录数', bucketStats(apiDir).total);
    }
    case 'api-subindexes': {
      const apiDir = sc.type === 'api' ? sc.dir : (sc.type === 'lang' ? path.join(sc.dir, 'api') : null);
      if (!apiDir || !fs.existsSync(apiDir)) return null;
      return one('api 子系统桶索引', bucketStats(apiDir).total - 1);
    }
    case 'api-bucket-group': {
      if (sc.type !== 'api') return null;
      const st = bucketStats(sc.dir);
      const bad = [];
      if (st.withPages !== claim.buckets) bad.push({ claimed: claim.buckets, actual: st.withPages, scope: '有页面的桶数' });
      if (st.leavesWithPages !== claim.num) bad.push({ claimed: claim.num, actual: st.leavesWithPages, scope: '有页面的桶叶子页合计' });
      return bad.length ? bad : null;
    }
    case 'api-bucket-zero': {
      const apiDir = sc.type === 'api' ? sc.dir : (sc.type === 'lang' ? path.join(sc.dir, 'api') : null);
      if (!apiDir || !fs.existsSync(apiDir)) return null;
      return one('0 页桶数', bucketStats(apiDir).zeroPages);
    }
    case 'api-bucket-withpages': {
      const apiDir = sc.type === 'api' ? sc.dir : (sc.type === 'lang' ? path.join(sc.dir, 'api') : null);
      if (!apiDir || !fs.existsSync(apiDir)) return null;
      return one('有页面的桶数', bucketStats(apiDir).withPages);
    }
    default:
      return null;
  }
}

// ── 主扫描 ────────────────────────────────────────────────────────────────
const pages = walk(CONTENT);
const out = [];

for (const idxPath of pages) {
  const rel = path.relative(CONTENT, idxPath).split(path.sep).join('/');
  const dir = path.dirname(idxPath);
  const raw = fs.readFileSync(idxPath, 'utf8');
  const lines = raw.split(/\r?\n/);

  // marker 块（第一个 BEGIN → 第一个 END，与 nav-section-index.mjs 同口径）
  const bIdx = lines.findIndex((l) => l.trim() === BEGIN);
  const eIdx = bIdx >= 0 ? lines.findIndex((l) => l.trim() === END) : -1;
  const hasMarker = bIdx >= 0 && eIdx > bIdx;
  const blockText = hasMarker ? lines.slice(bIdx + 1, eIdx).join('\n') : '';

  const { leaves, subdirs } = childrenOf(dir);
  const actual = new Set([...leaves, ...subdirs]);

  // 全页链接 → 覆盖的子页
  const linkedAll = new Set();
  for (const href of extractLinks(raw)) {
    const r = resolveHref(dir, href);
    if (!r) continue;
    const rel2 = r.split('/').slice(-1)[0];
    if (leaves.has(rel2) || subdirs.has(rel2)) linkedAll.add(rel2);
  }
  // marker 块内链接 → 覆盖的子页
  const linkedInBlock = new Set();
  if (hasMarker) {
    for (const href of extractLinks(blockText)) {
      const r = resolveHref(dir, href);
      if (!r) continue;
      const rel2 = r.split('/').slice(-1)[0];
      if (leaves.has(rel2) || subdirs.has(rel2)) linkedInBlock.add(rel2);
    }
  }

  // 规模声称 + 核验
  const claims = extractClaims(raw);
  const claimVerdicts = [];
  for (const c of claims) {
    const v = verifyClaim(c, { rel });
    if (v) {
      const arr = Array.isArray(v) ? v : [v];
      for (const vv of arr) claimVerdicts.push({ kind: c.kind, line: c.line, text: c.text, ...vv });
    }
  }
  // 桶表核验
  const bucketTable = /\/api\/_index\.md$/.test(rel) ? extractBucketTable(raw) : [];
  for (const row of bucketTable) {
    const r = resolveHref(dir, row.href);
    if (!r) continue;
    const name = r.split('/').slice(-1)[0];
    const target = path.join(dir, name);
    if (!fs.existsSync(target)) continue;
    const actual2 = countLeaves(target);
    if (actual2 !== row.claimed) {
      claimVerdicts.push({ kind: 'api-bucket-table', line: 0, text: `| [${row.name}](${row.href}) | ${row.claimed} |`, claimed: row.claimed, actual: actual2, scope: `桶 ${row.name} 叶子页` });
    }
  }

  out.push({
    rel,
    dir: path.relative(CONTENT, dir),
    actualLeaves: leaves.size,
    actualSubdirs: subdirs.size,
    actualTotal: actual.size,
    linkedAll: linkedAll.size,
    linkedInBlock: linkedInBlock.size,
    missingLinks: [...actual].filter((x) => !linkedAll.has(x)).sort(),
    missingInBlock: [...actual].filter((x) => !linkedInBlock.has(x)).sort(),
    hasMarker,
    markerDup: lines.filter((l) => l.trim() === BEGIN).length > 1 || lines.filter((l) => l.trim() === END).length > 1,
    claims,
    claimVerdicts,
    bucketTable,
  });
}

fs.writeFileSync(path.resolve('tools/_verify/nav-D-scan.json'), JSON.stringify({ HEAD, STAMP, pages: out }, null, 2));
console.log(`pages=${out.length} marker=${out.filter((p) => p.hasMarker).length} json=tools/_verify/nav-D-scan.json HEAD=${HEAD}`);
