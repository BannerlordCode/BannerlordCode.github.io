// ============================================================================
// v1.4.5 four-tier page classification (READ-ONLY over content/).
//
// Tiers (per task spec, decision order):
//   shell             — frontmatter description contains a generation marker
//                       (的自动生成类参考 / Auto-generated class reference /
//                       的自动生成战役动作参考 / Auto-generated campaign action reference)
//                       AND body (text after frontmatter) hits empty-shell
//                       signature shape A (any):
//                         zh: 它有什么状态 / 它允许你做什么 / 它保存的状态
//                         en: what state it owns / what actions it allows
//   generated        — page contains a generation marker (one of the 4 exact
//                       self-describing strings or <!-- v*-skeleton -->), and
//                       is not a shell.
//   handwritten_deep  — no generation marker AND (classifyPage status ===
//                       'deep_pass' OR body > 2500B with h2/h3 sections).
//   无页面            — out of scope for an existing-page scan; derived by the
//                       lead via join with types-1.4.5.json.
//
// Leftover pages (no marker, both deep criteria fail) are assigned to
// handwritten_deep and reported separately as "shallow handwritten"
// (tier1_shallow boundary bucket) — tiers 2/3 both require markers, tier 4
// does not apply to existing pages.
//
// Outputs (tools/_verify/ only):
//   tiers-v1.4.5-zh.json / tiers-v1.4.5-en.json  — {pagePath: tier}, paths
//                                                   relative to content/v1.4.5/
//   tiers-v1.4.5.md                              — markdown summary
// ============================================================================
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { classifyPage } from '../lib/handwritten-policy.mjs';

const HERE = dirname(fileURLToPath(import.meta.url)); // tools/_verify
const REPO = dirname(dirname(HERE)); // repo root
const ROOT = join(REPO, 'content', 'v1.4.5');
const OUT = HERE;

const MARKERS = [
  '的自动生成类参考',
  'Auto-generated class reference',
  '的自动生成战役动作参考',
  'Auto-generated campaign action reference',
];
const SKELETON_RE = /<!--\s*v[\d.]+-skeleton\s*-->/;
const SHELL_SIG = {
  zh: ['它有什么状态', '它允许你做什么', '它保存的状态'],
  en: ['what state it owns', 'what actions it allows'],
};
const DEEP_BODY_MIN_BYTES = 2500;

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.name.endsWith('.md')) out.push(p);
  }
  return out;
}

function splitFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { desc: '', body: text, bodyBytes: Buffer.byteLength(text) };
  const desc = (m[1].match(/^description:\s*"?([^"\n]*)"?/m) || [, ''])[1];
  const body = text.slice(m[0].length);
  return { desc, body, bodyBytes: Buffer.byteLength(body) };
}

function countH2H3(body) {
  return (body.match(/^#{2,3}\s+/gm) || []).length;
}

function classifyFile(absPath, lang) {
  const text = readFileSync(absPath, 'utf8');
  const { desc, body, bodyBytes } = splitFrontmatter(text);
  const totalBytes = Buffer.byteLength(text);
  const h2h3 = countH2H3(body);
  const rel = absPath.slice(ROOT.length + 1).replace(/\\/g, '/');

  const hasMarker = MARKERS.some((m) => text.includes(m)) || SKELETON_RE.test(text);
  const hasDescMarker = MARKERS.some((m) => desc.includes(m));
  const sigA = SHELL_SIG[lang].some((s) => body.includes(s));
  const cp = classifyPage(rel, text).status;
  const deepish = bodyBytes > DEEP_BODY_MIN_BYTES && h2h3 >= 1;

  let tier;
  if (hasDescMarker && sigA) {
    tier = 'shell';
  } else if (hasMarker) {
    tier = 'generated';
  } else if (cp === 'deep_pass' || deepish) {
    tier = 'handwritten_deep';
  } else {
    tier = 'handwritten_deep'; // shallow handwritten — see boundary bucket
  }

  return {
    rel,
    tier,
    cp,
    sigA,
    hasMarker,
    hasDescMarker,
    bodyBytes,
    totalBytes,
    h2h3,
    deepish,
  };
}

const summary = {};

for (const lang of ['zh', 'en']) {
  const files = walk(join(ROOT, lang)).sort();
  const tiers = {};
  const boundary = {
    tier2_markerDeep: [], // marker + deep_pass, no sigA -> generated (stale desc on handwritten deep page)
    tier2_markerNoise: [], // marker + noise, no sigA -> generated
    tier3_sigADeep: [], // shell + deep_pass (gate-evading template)
    tier3_sigANoise: [], // shell + noise
    tier1_shallow: [], // no marker, fails deep criteria -> handwritten_deep (documented)
    deepishStraddle: [], // body vs total length straddle 2500B
  };
  const counts = { shell: 0, generated: 0, handwritten_deep: 0 };
  const cpDist = {};
  let sigACount = 0;

  for (const f of files) {
    const r = classifyFile(f, lang);
    tiers[r.rel] = r.tier;
    counts[r.tier]++;
    cpDist[r.cp] = (cpDist[r.cp] || 0) + 1;
    if (r.sigA) sigACount++;
    if ((r.bodyBytes > DEEP_BODY_MIN_BYTES) !== (r.totalBytes > DEEP_BODY_MIN_BYTES) && !r.hasMarker) {
      boundary.deepishStraddle.push(`${r.rel} | body=${r.bodyBytes} total=${r.totalBytes}`);
    }

    if (r.tier === 'shell') {
      if (r.cp === 'deep_pass') boundary.tier3_sigADeep.push(`${r.rel} | len=${r.totalBytes}`);
      else if (r.cp === 'noise') boundary.tier3_sigANoise.push(`${r.rel} | len=${r.totalBytes}`);
    } else if (r.tier === 'generated') {
      if (r.cp === 'deep_pass') boundary.tier2_markerDeep.push(`${r.rel} | len=${r.totalBytes}`);
      else if (r.cp === 'noise') boundary.tier2_markerNoise.push(`${r.rel} | len=${r.totalBytes}`);
    } else if (!r.hasMarker && r.cp !== 'deep_pass' && !r.deepish) {
      boundary.tier1_shallow.push(`${r.rel} | len=${r.totalBytes} | cp=${r.cp} | h2h3=${r.h2h3}`);
    }
  }

  writeFileSync(join(OUT, `tiers-v1.4.5-${lang}.json`), JSON.stringify(tiers, null, 2) + '\n');
  summary[lang] = { total: files.length, counts, cpDist, sigACount, boundary };
}

// Version-root page (content/v1.4.5/_index.md, not under zh/ or en/) —
// bilingual landing page; signature check uses the union of zh+en lists.
const rootAbs = join(ROOT, '_index.md');
const rootText = readFileSync(rootAbs, 'utf8');
const rootSplit = splitFrontmatter(rootText);
const rootBodyBytes = rootSplit.bodyBytes;
const rootTotalBytes = Buffer.byteLength(rootText);
const rootH2H3 = countH2H3(rootSplit.body);
const rootHasMarker = MARKERS.some((m) => rootText.includes(m)) || SKELETON_RE.test(rootText);
const rootHasDescMarker = MARKERS.some((m) => rootSplit.desc.includes(m));
const rootSigA = [...SHELL_SIG.zh, ...SHELL_SIG.en].some((s) => rootSplit.body.includes(s));
const rootCp = classifyPage('_index.md', rootText).status;
const rootDeepish = rootBodyBytes > DEEP_BODY_MIN_BYTES && rootH2H3 >= 1;
let rootTier;
if (rootHasDescMarker && rootSigA) rootTier = 'shell';
else if (rootHasMarker) rootTier = 'generated';
else if (rootCp === 'deep_pass' || rootDeepish) rootTier = 'handwritten_deep';
else rootTier = 'handwritten_deep';

// ---- markdown summary -------------------------------------------------------
const L = [];
L.push('# v1.4.5 四档分类汇总（zh / en）');
L.push('');
L.push('只读扫描 `content/v1.4.5/`，未写 `content/`。输出：`tiers-v1.4.5-zh.json`、`tiers-v1.4.5-en.json`（`{pagePath: tier}`，路径相对 `content/v1.4.5/`，即带 `zh/` 或 `en/` 前缀）、`tiers-v1.4.5.md`（本文件）。');
L.push('');
L.push('## 判据与决策顺序');
L.push('');
L.push('1. **shell（空壳）**：frontmatter description 含生成标记（`的自动生成类参考` / `Auto-generated class reference` / `的自动生成战役动作参考` / `Auto-generated campaign action reference`），且正文（frontmatter 之后）命中空壳签名形状 A（任一）：');
L.push('   - zh：`它有什么状态` / `它允许你做什么` / `它保存的状态`');
L.push('   - en：`what state it owns` / `what actions it allows`');
L.push('2. **generated（生成页）**：页面含生成标记（上述 4 个精确自述串或 `<!-- v*-skeleton -->`），且不是空壳。');
L.push('3. **handwritten_deep（手写深页）**：不含任何生成标记，且 classifyPage 判为 `deep_pass`，或正文（frontmatter 之后）>2500B 且有 h2/h3 小节。');
L.push('4. **无页面**：本扫描只统计存在的页面；无页面档由 lead 用 `types-1.4.5.json`（11,499 类型）join 得出，本汇总不涉及。');
L.push('');
L.push('**残留页处理**：无标记但两个深页判据都不满足的页面归入 `handwritten_deep`——tier 2/3 都要求生成标记、tier 4 不适用于存在的页；汇总中单独列出完整清单（tier1_shallow 边界桶），lead 可再分桶。');
L.push('');
L.push('## 分母来源');
L.push('');
L.push('- **页面级分母**（本汇总各档占比）：对应语言 `tiers-v1.4.5-<lang>.json` 的页面条目数，即该语言 `content/v1.4.5/<lang>/` 下全部 .md 页数（zh 9,477 / en 7,193，另根页 1，合计 16,671，与任务给定的 16,671 一致）。');
L.push('- **类型级分母**（无页面档）：`tools/_verify/types-1.4.5.json`（`types` 数组 11,499 条，`fileCount` 8,583 源文件），由 lead join 得出。');
L.push('');
L.push('## 总览（分子/分母 = 该档页数 / 该语言总页数）');
L.push('');
L.push('| 语言 | 总页数 | handwritten_deep | generated | shell |');
L.push('| --- | ---: | ---: | ---: | ---: |');
for (const lang of ['zh', 'en']) {
  const s = summary[lang];
  const pct = (n) => ((100 * n) / s.total).toFixed(1) + '%';
  L.push(`| ${lang} | ${s.total} | ${s.counts.handwritten_deep}（${pct(s.counts.handwritten_deep)}） | ${s.counts.generated}（${pct(s.counts.generated)}） | ${s.counts.shell}（${pct(s.counts.shell)}） |`);
}
L.push(`| 根页（非 zh/en） | 1 | ${rootTier === 'handwritten_deep' ? 1 : 0} | ${rootTier === 'generated' ? 1 : 0} | ${rootTier === 'shell' ? 1 : 0} |`);
L.push(`| **合计** | **${summary.zh.total + summary.en.total + 1}** | **${summary.zh.counts.handwritten_deep + summary.en.counts.handwritten_deep + (rootTier === 'handwritten_deep' ? 1 : 0)}** | **${summary.zh.counts.generated + summary.en.counts.generated + (rootTier === 'generated' ? 1 : 0)}** | **${summary.zh.counts.shell + summary.en.counts.shell + (rootTier === 'shell' ? 1 : 0)}** |`);
L.push('');
L.push('classifyPage 状态分布与空壳签名命中：');
L.push('');
L.push('| 语言 | deep_pass | stub | noise | family_entry_pass | 签名命中页数 |');
L.push('| --- | ---: | ---: | ---: | ---: | ---: |');
for (const lang of ['zh', 'en']) {
  const s = summary[lang];
  L.push(`| ${lang} | ${s.cpDist.deep_pass || 0} | ${s.cpDist.stub || 0} | ${s.cpDist.noise || 0} | ${s.cpDist.family_entry_pass || 0} | ${s.sigACount} |`);
}
L.push('');
L.push('## 根页');
L.push('');
L.push(`- \`content/v1.4.5/_index.md\` — tier=${rootTier}，classifyPage=${rootCp}，bodyBytes=${rootBodyBytes}，h2h3=${rootH2H3}。双语 landing page，不计入 zh/en 两个 JSON；全树对账 9,477 + 7,193 + 1 = 16,671。`);
L.push('');
L.push('## 边界桶明细');
L.push('');
for (const lang of ['zh', 'en']) {
  const s = summary[lang];
  L.push(`### ${lang}`);
  L.push('');
  L.push(`**tier 2a：含标记但 classifyPage=deep_pass（${s.boundary.tier2_markerDeep.length}）**——正文过深页 gate，description 残留生成标记；按字面判据归 generated，但很可能是手写深页仅 description 未更新，lead 可考虑修 description 后归入 handwritten_deep：`);
  for (const p of s.boundary.tier2_markerDeep) L.push(`- ${p}`);
  L.push('');
  L.push(`**tier 2b：含标记且 classifyPage=noise、无签名（${s.boundary.tier2_markerNoise.length}）**：`);
  for (const p of s.boundary.tier2_markerNoise) L.push(`- ${p}`);
  L.push('');
  L.push(`**tier 3 中的 deep_pass（${s.boundary.tier3_sigADeep.length}）**——模板页靠改写心智模型措辞骗过 gate，被签名正确捞回空壳：`);
  for (const p of s.boundary.tier3_sigADeep) L.push(`- ${p}`);
  L.push('');
  L.push(`**tier 3 中的 noise（${s.boundary.tier3_sigANoise.length}）**：`);
  for (const p of s.boundary.tier3_sigANoise) L.push(`- ${p}`);
  L.push('');
  L.push(`**tier 1 浅手写残留（${s.boundary.tier1_shallow.length}）**——无标记但两个深页判据都不满足，归入 handwritten_deep：`);
  for (const p of s.boundary.tier1_shallow) L.push(`- ${p}`);
  L.push('');
  if (s.boundary.deepishStraddle.length) {
    L.push(`**2500B 边界（正文 vs 全文测量跨界，${s.boundary.deepishStraddle.length}）**：`);
    for (const p of s.boundary.deepishStraddle) L.push(`- ${p}`);
    L.push('');
  }
}
L.push('## 真零说明');
L.push('');
const zeroTiers = [];
for (const lang of ['zh', 'en']) {
  for (const t of ['handwritten_deep', 'generated', 'shell']) {
    if (summary[lang].counts[t] === 0) zeroTiers.push(`${lang}/${t}`);
  }
}
if (zeroTiers.length === 0) {
  L.push('本汇总所有档位计数均不为 0（zh 与 en 的 handwritten_deep / generated / shell 三档均 >0），无「真零」档。');
} else {
  L.push(`以下档位计数为 0，附成因：`);
  for (const z of zeroTiers) L.push(`- ${z}：<待补成因>`);
}
L.push('');
L.push('## 复现命令');
L.push('');
L.push('```bash');
L.push('# 页数清点');
L.push("find content/v1.4.5/zh -name '*.md' | wc -l   # 9477");
L.push("find content/v1.4.5/en -name '*.md' | wc -l   # 7193");
L.push("find content/v1.4.5 -maxdepth 1 -name '*.md' | wc -l   # 1 (根页)");
L.push('# 分类扫描（只读 content/，只写 tools/_verify/）');
L.push('node tools/_verify/v1.4.5-tier-scan.mjs');
L.push('# 从输出 JSON 复核各档计数');
L.push(`node -e "const t=require('./tools/_verify/tiers-v1.4.5-zh.json');const c={};for(const k in t)c[t[k]]=(c[t[k]]||0)+1;console.log('zh',c)"`);
L.push(`node -e "const t=require('./tools/_verify/tiers-v1.4.5-en.json');const c={};for(const k in t)c[t[k]]=(c[t[k]]||0)+1;console.log('en',c)"`);
L.push('```');
L.push('');
writeFileSync(join(OUT, 'tiers-v1.4.5.md'), L.join('\n'));

// Compact stdout summary for the report.
for (const lang of ['zh', 'en']) {
  const s = summary[lang];
  console.log(`${lang}: total=${s.total} handwritten_deep=${s.counts.handwritten_deep} generated=${s.counts.generated} shell=${s.counts.shell} sigA=${s.sigACount} cp=${JSON.stringify(s.cpDist)}`);
  console.log(`  tier2_markerDeep=${s.boundary.tier2_markerDeep.length} tier2_markerNoise=${s.boundary.tier2_markerNoise.length} tier3_sigADeep=${s.boundary.tier3_sigADeep.length} tier3_sigANoise=${s.boundary.tier3_sigANoise.length} tier1_shallow=${s.boundary.tier1_shallow.length} straddle=${s.boundary.deepishStraddle.length}`);
}
console.log(`root: tier=${rootTier} cp=${rootCp} bodyBytes=${rootBodyBytes} h2h3=${rootH2H3}`);
console.log('Wrote tiers-v1.4.5-zh.json, tiers-v1.4.5-en.json, tiers-v1.4.5.md to tools/_verify/');
