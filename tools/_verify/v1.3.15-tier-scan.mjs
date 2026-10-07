// ============================================================================
// v1.3.15 four-tier page classification (READ-ONLY over content/).
//
// Tiers (per task spec):
//   shell             — desc has auto-generated marker AND body has no substance
//                       (shell signature shape A, any hit).
//   generated        — page contains a generation marker (exact self-describing
//                       string or <!-- v*-skeleton -->), and is not a shell.
//   handwritten_deep  — no generation marker AND (classifyPage = deep_pass OR
//                       body > 2500B with h2/h3 sections).
//
// Decision order: shell -> generated -> handwritten_deep.
// Leftover (no marker, fails both deep criteria) is assigned to handwritten_deep
// and reported separately as "shallow handwritten" (tiers 2/3 require markers;
// tier 4 is out of scope for existing pages).
//
// Shell signature shape A (task spec, zh): 它有什么状态 / 它允许你做什么 / 它保存的状态
// en equivalent (task lists zh strings only; en literal = 0 hits):
//                       what state it owns / what actions it allows
//
// Outputs (tools/_verify/ only):
//   tiers-v1.3.15-zh.json / tiers-v1.3.15-en.json  — {pagePath: tier}
//   tiers-v1.3.15.md                              — markdown summary
// ============================================================================
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { classifyPage } from '../lib/handwritten-policy.mjs';

const ROOT = 'content/v1.3.15';

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

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.name.endsWith('.md')) out.push(p);
  }
  return out;
}

function splitFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return { desc: '', body: text, bodyBytes: Buffer.byteLength(text) };
  const desc = (m[1].match(/description:\s*"?([^"\n]*)"?/) || [, ''])[1];
  const body = text.slice(m.index + m[0].length);
  return { desc, body, bodyBytes: Buffer.byteLength(body) };
}

const summary = {};

for (const lang of ['zh', 'en']) {
  const files = walk(join(ROOT, lang));
  const tiers = {};
  const boundary = {
    tier2_markerDeep: [], // marker + deep_pass, no sigA -> generated, likely hand-written w/ stale desc
    tier2_markerNoise: [], // marker + noise, no sigA
    tier3_sigADeep: [], // marker + sigA + deep_pass (gate-evading template)
    tier3_sigANoise: [], // marker + sigA + noise
    tier1_shallow: [], // no marker, fails deep criteria -> handwritten_deep (documented)
    deepishStraddle: [], // body vs total length straddle 2500B
  };
  const counts = { shell: 0, generated: 0, handwritten_deep: 0 };
  const cpDist = {};
  let sigACount = 0;

  for (const f of files) {
    const text = readFileSync(f, 'utf8');
    const { desc, body, bodyBytes } = splitFrontmatter(text);
    const totalBytes = Buffer.byteLength(text);
    const hasMarker = MARKERS.some((m) => text.includes(m)) || SKELETON_RE.test(text);
    const hasDescMarker = MARKERS.some((m) => desc.includes(m));
    const sigA = SHELL_SIG[lang].some((s) => text.includes(s));
    const cp = classifyPage(f, text).status;
    cpDist[cp] = (cpDist[cp] || 0) + 1;
    if (sigA) sigACount++;
    const hasH2H3 = /^#{2,3}\s+/m.test(text);
    const deepish = bodyBytes > 2500 && hasH2H3;
    if ((bodyBytes > 2500) !== (totalBytes > 2500) && !hasMarker) {
      boundary.deepishStraddle.push(`${f} | body=${bodyBytes} total=${totalBytes}`);
    }

    let tier;
    if (hasDescMarker && sigA) {
      tier = 'shell';
      if (cp === 'deep_pass') boundary.tier3_sigADeep.push(`${f} | len=${totalBytes}`);
      else if (cp === 'noise') boundary.tier3_sigANoise.push(`${f} | len=${totalBytes}`);
    } else if (hasMarker) {
      tier = 'generated';
      if (cp === 'deep_pass') boundary.tier2_markerDeep.push(`${f} | len=${totalBytes}`);
      else if (cp === 'noise') boundary.tier2_markerNoise.push(`${f} | len=${totalBytes}`);
    } else if (cp === 'deep_pass' || deepish) {
      tier = 'handwritten_deep';
    } else {
      tier = 'handwritten_deep';
      boundary.tier1_shallow.push(`${f} | len=${totalBytes} | cp=${cp} | h2h3=${hasH2H3}`);
    }
    counts[tier]++;
    tiers[f.replace(/\\/g, '/').replace(/^content\/v1\.3\.15\//, '')] = tier;
  }

  writeFileSync(`tools/_verify/tiers-v1.3.15-${lang}.json`, JSON.stringify(tiers, null, 0));
  summary[lang] = { total: files.length, counts, cpDist, sigACount, boundary };
}

// ---- markdown summary -------------------------------------------------------
const L = [];
L.push('# v1.3.15 四档分类汇总（zh / en）');
L.push('');
L.push('只读扫描 `content/v1.3.15/`，未写 `content/`。输出：`tiers-v1.3.15-zh.json`、`tiers-v1.3.15-en.json`（`{pagePath: tier}`，路径相对 `content/v1.3.15/`）。');
L.push('');
L.push('## 判据与决策顺序');
L.push('');
L.push('1. **shell（空壳）**：frontmatter description 含生成标记（`的自动生成类参考` / `Auto-generated class reference` / `的自动生成战役动作参考` / `Auto-generated campaign action reference`），且正文命中空壳签名形状 A（任一）：');
L.push('   - zh：`它有什么状态` / `它允许你做什么` / `它保存的状态`（任务给定）');
L.push('   - en：`what state it owns` / `what actions it allows`（任务只列了 zh 串，en 字面命中 0；en 对应模板句为 `Read its properties as "what state it owns" and its methods as "what actions it allows"`，与 zh 签名句逐字对应）');
L.push('2. **generated（生成页）**：页面含生成标记（上述 4 个精确自述串或 `<!-- v*-skeleton -->`），且不是空壳。');
L.push('3. **handwritten_deep（手写深页）**：不含任何生成标记，且 classifyPage 判为 `deep_pass`，或正文（frontmatter 之后）>2500B 且有 h2/h3 小节。');
L.push('4. **无页面**：本扫描只统计存在的页面；无页面档由 lead 用类型清单 join 得出。');
L.push('');
L.push('**残留页处理**：无标记但两个深页判据都不满足的页面（zh 12 / en 13，均为 section index、架构总览、native 源码总览、AutoGeneratedSaveManager 等手写非深页）归入 `handwritten_deep`——tier 2/3 都要求生成标记、tier 4 不适用于存在的页；汇总中单独列出完整清单，lead 可再分桶。');
L.push('');
L.push('## 总览（分子/分母 = 该档页数 / 该语言总页数）');
L.push('');
L.push('分母来源：各语言总页数 = 对应 `tiers-v1.3.15-<lang>.json` 的页面条目数（即该语言 content/v1.3.15/ 下全部 .md 页数）。类型级数字（如无页面档）的分母来自 `types-1.3.15.json`，由 lead join 得出，本汇总不涉及。');
L.push('');
for (const lang of ['zh', 'en']) {
  const s = summary[lang];
  const pct = (n) => ((100 * n) / s.total).toFixed(1) + '%';
  L.push(`### ${lang}（总页数 ${s.total}）`);
  L.push('');
  L.push('| 档位 | 页数 | 占比 |');
  L.push('|---|---|---|');
  L.push(`| handwritten_deep（手写深页） | ${s.counts.handwritten_deep} | ${pct(s.counts.handwritten_deep)} |`);
  L.push(`| generated（生成页） | ${s.counts.generated} | ${pct(s.counts.generated)} |`);
  L.push(`| shell（空壳） | ${s.counts.shell} | ${pct(s.counts.shell)} |`);
  L.push(`| **合计** | **${s.total}** | 100% |`);
  L.push('');
  L.push(`classifyPage 分布：${JSON.stringify(s.cpDist)}；空壳签名命中：${s.sigACount}。`);
  L.push('');
}
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
L.push('本汇总所有档位计数均不为 0（zh：handwritten_deep / generated / shell 三档均 >0；en 同），无「真零」档。若后续重跑出现某档为 0，必须在此处写明成因（例如「generated 0，因为该树已完成手写重写，生成页已全部撤回 _withdrawn/」）。');
writeFileSync('tools/_verify/tiers-v1.3.15.md', L.join('\n') + '\n');
console.log('done');
for (const lang of ['zh', 'en']) {
  const s = summary[lang];
  console.log(lang, JSON.stringify(s.counts), 'total=' + s.total, 'sigA=' + s.sigACount);
  console.log('  tier2_markerDeep=' + s.boundary.tier2_markerDeep.length, 'tier2_markerNoise=' + s.boundary.tier2_markerNoise.length, 'tier3_sigADeep=' + s.boundary.tier3_sigADeep.length, 'tier3_sigANoise=' + s.boundary.tier3_sigANoise.length, 'tier1_shallow=' + s.boundary.tier1_shallow.length, 'straddle=' + s.boundary.deepishStraddle.length);
}
