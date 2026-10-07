#!/usr/bin/env node
/**
 * v1.3.0 四档分类扫描（tier scan）
 *
 * 判据与决策顺序：shell → generated → handwritten_deep
 *   1. shell：frontmatter description 含生成标记，且正文（frontmatter 之后）命中空壳签名（zh/en 各一组）
 *   2. generated：页面含生成标记（4 个精确自述串之一，或 <!-- v*-skeleton --> 注释），且不是 shell
 *   3. handwritten_deep：不含任何生成标记，且 classifyPage 判 deep_pass，
 *      或正文 UTF-8 字节 >2500 且有 h2/h3 小节（行匹配 /^#{2,3}\s+/m）
 *   4. 残留页：无标记但两个深页判据都不满足 ⇒ 归 handwritten_deep，在 md 里单独列完整清单
 *
 * 输入：content/v1.3.0/{zh,en} 下所有 .md（递归，只读）
 * 输出：tools/_verify/tiers-v1.3.0-zh.json
 *       tools/_verify/tiers-v1.3.0-en.json
 *       tools/_verify/tiers-v1.3.0.md
 *
 * 运行（仓库根目录下）：node tools/_verify/v130-tier-scan.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { classifyPage } from '../lib/handwritten-policy.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url)); // tools/_verify
const ROOT = path.resolve(HERE, '..', '..'); // 仓库根
const V130 = path.join(ROOT, 'content', 'v1.3.0');
const OUT = HERE;

// ---------- 判据常量 ----------
const GEN_MARKER_STRINGS = [
  '的自动生成类参考',
  'Auto-generated class reference',
  '的自动生成战役动作参考',
  'Auto-generated campaign action reference',
];
const SKELETON_RE = /<!--\s*v[\w.*+-]*-skeleton\s*-->/i;
const SHELL_SIG = {
  zh: ['它有什么状态', '它允许你做什么', '它保存的状态'],
  en: ['what state it owns', 'what actions it allows'],
};
const H23_RE = /^#{2,3}\s+/m;
const DEEP_MIN_BYTES = 2500;

function hasGenMarker(text) {
  if (!text) return false;
  for (const s of GEN_MARKER_STRINGS) if (text.includes(s)) return true;
  if (SKELETON_RE.test(text)) return true;
  return false;
}

/** 拆分 frontmatter 与正文；无 frontmatter 时 fm=null、body=全文 */
function splitFrontmatter(raw) {
  const lines = raw.split(/\r?\n/);
  if (lines.length === 0 || lines[0].trim() !== '---') return { fm: null, body: raw };
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      return { fm: lines.slice(1, i).join('\n'), body: lines.slice(i + 1).join('\n') };
    }
  }
  return { fm: null, body: raw };
}

/** 从 frontmatter 提取 description 值（支持内联与块标量，截到下一个顶层键） */
function descriptionFromFrontmatter(fm) {
  if (!fm) return '';
  const lines = fm.split(/\r?\n/);
  let collecting = false;
  let desc = '';
  for (const line of lines) {
    if (!collecting) {
      const m = line.match(/^description\s*:\s*(.*)$/);
      if (m) {
        collecting = true;
        desc = m[1];
      }
      continue;
    }
    if (/^[A-Za-z_][\w-]*\s*:/.test(line)) break; // 下一个顶层键，description 结束
    desc += '\n' + line;
  }
  desc = desc.trim();
  desc = desc.replace(/^[>|][+-]?\s*/, '').trim(); // 折叠/字面块标量标记
  desc = desc.replace(/^["']([\s\S]*)["']\s*$/, '$1'); // 内联引号
  return desc;
}

function walkMd(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walkMd(p));
    else if (ent.isFile() && ent.name.endsWith('.md')) out.push(p);
  }
  return out.sort();
}

function classifyFile(absPath, lang) {
  const raw = fs.readFileSync(absPath, 'utf8');
  const { fm, body } = splitFrontmatter(raw);
  const desc = descriptionFromFrontmatter(fm);
  const bodyBytes = Buffer.byteLength(body, 'utf8');
  const hasH23 = H23_RE.test(body);

  // 1) shell：description 含生成标记 + 正文命中空壳签名
  if (hasGenMarker(desc)) {
    const sigs = SHELL_SIG[lang] || [];
    const hit = sigs.find((s) => body.includes(s));
    if (hit) {
      return { tier: 'shell', reasons: [`description 含生成标记 + 正文命中空壳签名「${hit}」`], residual: false, policyStatus: null };
    }
  }

  // 2) generated：页面含生成标记，且不是 shell
  if (hasGenMarker(raw)) {
    return { tier: 'generated', reasons: ['页面含生成标记（4 个精确自述串之一或 v*-skeleton 注释）'], residual: false, policyStatus: null };
  }

  // 3) handwritten_deep：无标记 +（classifyPage deep_pass 或 正文>2500B 且有 h2/h3）
  let policyStatus = null;
  try {
    const r = classifyPage(absPath, raw);
    policyStatus = r && r.status ? r.status : null;
  } catch {
    policyStatus = null;
  }
  const policyDeep = policyStatus === 'deep_pass';
  const bigWithSections = bodyBytes > DEEP_MIN_BYTES && hasH23;
  if (policyDeep || bigWithSections) {
    const reasons = [];
    if (policyDeep) reasons.push(`classifyPage=${policyStatus}`);
    if (bigWithSections) reasons.push(`正文 ${bodyBytes}B > ${DEEP_MIN_BYTES}B 且含 h2/h3 小节`);
    return { tier: 'handwritten_deep', reasons, residual: false, policyStatus };
  }

  // 4) 残留页：无标记但两个深页判据都不满足 ⇒ 归 handwritten_deep
  return {
    tier: 'handwritten_deep',
    reasons: ['残留页：无生成标记，classifyPage 非 deep_pass，且正文深页判据不满足'],
    residual: true,
    policyStatus,
  };
}

// ---------- 主流程 ----------
const langs = ['zh', 'en'];
const scan = {};
for (const lang of langs) {
  const langDir = path.join(V130, lang);
  if (!fs.existsSync(langDir)) {
    console.error(`[FATAL] 缺少目录：${langDir}`);
    process.exit(1);
  }
  const files = walkMd(langDir);
  const map = {};
  const residuals = [];
  const counts = { shell: 0, generated: 0, handwritten_deep: 0 };
  const policyStatusDist = {};
  const deepBy = { policy: 0, bytesAndSections: 0, both: 0 };
  for (const f of files) {
    const rel = path.relative(V130, f).split(path.sep).join('/');
    const r = classifyFile(f, lang);
    map[rel] = r.tier;
    counts[r.tier] = (counts[r.tier] || 0) + 1;
    if (r.policyStatus) policyStatusDist[r.policyStatus] = (policyStatusDist[r.policyStatus] || 0) + 1;
    if (r.tier === 'handwritten_deep' && !r.residual) {
      const p = r.reasons.some((x) => x.startsWith('classifyPage='));
      const b = r.reasons.some((x) => x.includes('h2/h3'));
      if (p && b) deepBy.both++;
      else if (p) deepBy.policy++;
      else deepBy.bytesAndSections++;
    }
    if (r.residual) residuals.push(rel);
  }
  scan[lang] = { total: files.length, counts, residuals, policyStatusDist, deepBy };
  fs.writeFileSync(path.join(OUT, `tiers-v1.3.0-${lang}.json`), JSON.stringify(map, null, 2) + '\n');
}

// ---------- 类型级分母 ----------
let uniqueTypeCount = null;
try {
  const t = JSON.parse(fs.readFileSync(path.join(OUT, 'types-1.3.0.json'), 'utf8'));
  if (typeof t.uniqueTypeCount === 'number') uniqueTypeCount = t.uniqueTypeCount;
} catch {
  uniqueTypeCount = null;
}

// ---------- 生成 md 报告 ----------
const md = [];
const pct = (n, d) => (d > 0 ? ((n / d) * 100).toFixed(1) + '%' : 'n/a');

md.push('# v1.3.0 四档分类扫描报告');
md.push('');
md.push(`- 生成时间：${new Date().toISOString()}`);
md.push('- 扫描脚本：`tools/_verify/v130-tier-scan.mjs`');
md.push('- 运行命令：`node tools/_verify/v130-tier-scan.mjs`（仓库根目录下）');
md.push('- 输入：`content/v1.3.0/zh/**/*.md`、`content/v1.3.0/en/**/*.md`（只读，未写入 content/）');
md.push('');
md.push('## 1. 判据与决策顺序');
md.push('');
md.push('决策顺序：**shell → generated → handwritten_deep**（先命中先定档）。');
md.push('');
md.push('### 1.1 shell（空壳）');
md.push('- frontmatter `description` 含生成标记，**且**');
md.push('- 正文（frontmatter 之后）命中空壳签名形状 A（任一）：');
md.push('  - zh 签名：`它有什么状态` / `它允许你做什么` / `它保存的状态`');
md.push('  - en 签名：`what state it owns` / `what actions it allows`');
md.push('');
md.push('### 1.2 generated（生成页）');
md.push('- 页面含生成标记（下述 4 个精确自述串之一，或 `<!-- v*-skeleton -->` 注释），且不是 shell。');
md.push('  - 4 个精确串：`的自动生成类参考` / `Auto-generated class reference` / `的自动生成战役动作参考` / `Auto-generated campaign action reference`');
md.push('');
md.push('### 1.3 handwritten_deep（手写深页）');
md.push('- 不含任何生成标记，且满足任一：');
md.push('  - `classifyPage(filePath, text)` 判 `deep_pass`');
md.push('  - 正文（frontmatter 之后）UTF-8 字节 > 2500 且有 h2/h3 小节（行匹配 `/^#{2,3}\\s+/m`）');
md.push('');
md.push('### 1.4 残留页');
md.push('- 无标记但两个深页判据都不满足 ⇒ 归 `handwritten_deep`，并在本文档第 5 节单独列完整清单。');
md.push('');
md.push('## 2. 分母来源');
md.push('');
md.push('- **页面级分母** = 对应 `tools/_verify/tiers-v1.3.0-<lang>.json` 的条目数（即该语言扫描到的 .md 页面总数）。');
md.push(`- **类型级分母** = \`tools/_verify/types-1.3.0.json\` 的 \`uniqueTypeCount\` = **${uniqueTypeCount === null ? '（读取失败）' : uniqueTypeCount}**（任务书给定值 5,095）。`);
md.push('');
md.push('## 3. 总览（分子/分母 = 该档页数 / 该语言总页数）');
md.push('');
md.push('| 语言 | 档位 | 分子（页数） | 分母（该语言总页数） | 占比 |');
md.push('| --- | --- | ---: | ---: | ---: |');
for (const lang of langs) {
  const s = scan[lang];
  for (const tier of ['shell', 'generated', 'handwritten_deep']) {
    md.push(`| ${lang} | ${tier} | ${s.counts[tier]} | ${s.total} | ${pct(s.counts[tier], s.total)} |`);
  }
  md.push(`| ${lang} | **合计** | **${s.total}** | **${s.total}** | 100.0% |`);
}
md.push('');
md.push('手写深页（非残留）成因分解：');
md.push('');
md.push('| 语言 | 仅 classifyPage=deep_pass | 仅正文>2500B+h2/h3 | 两者都满足 | 残留页 | 深页合计 |');
md.push('| --- | ---: | ---: | ---: | ---: | ---: |');
for (const lang of langs) {
  const s = scan[lang];
  md.push(`| ${lang} | ${s.deepBy.policy} | ${s.deepBy.bytesAndSections} | ${s.deepBy.both} | ${s.residuals.length} | ${s.counts.handwritten_deep} |`);
}
md.push('');
md.push('## 4. 真零附成因');
md.push('');
const zeros = [];
for (const lang of langs) {
  for (const tier of ['shell', 'generated', 'handwritten_deep']) {
    if (scan[lang].counts[tier] === 0) zeros.push(`${lang}/${tier}`);
  }
}
if (zeros.length === 0) {
  md.push('- 本次扫描**没有任何档位为 0**，无需附成因。');
} else {
  md.push('- 以下档位实测为 0，成因如下：');
  for (const z of zeros) {
    const [lang, tier] = z.split('/');
    if (tier === 'shell' || tier === 'generated') {
      md.push(`  - \`${z}\`：v1.3.0 尚未撤回生成页（生成页仍在树内），shell/generated 预期不为 0；若实测为 0，需检查生成标记串是否已变化或 frontmatter description 是否不再携带标记。`);
    } else {
      md.push(`  - \`${z}\`：该语言全部页面均被 shell/generated 吸收，需人工抽查确认。`);
    }
  }
}
md.push('');
md.push('- 已知事实：v1.3.0 尚未撤回生成页（生成页仍在树内），所以 shell/generated 预期**不为 0**（与已重写完成的 v1.4.6/1.4.7/1.5.3 不同）。');
md.push('');
md.push('## 5. 残留页完整清单');
md.push('');
for (const lang of langs) {
  const s = scan[lang];
  md.push(`### ${lang}（${s.residuals.length} 页）`);
  md.push('');
  if (s.residuals.length === 0) {
    md.push('- 无残留页。');
  } else {
    for (const p of s.residuals) md.push(`- \`${p}\``);
  }
  md.push('');
}
md.push('## 6. 每个数字的复现命令');
md.push('');
md.push('```bash');
md.push('# 0) 重新生成全部三个产出文件');
md.push('node tools/_verify/v130-tier-scan.mjs');
md.push('');
md.push('# 1) 页面级分母：各语言 .md 页面总数');
md.push("find content/v1.3.0/zh -name '*.md' | wc -l");
md.push("find content/v1.3.0/en -name '*.md' | wc -l");
md.push('');
md.push('# 2) 各档页数（分子）与条目总数（分母）');
md.push("node -e \"const fs=require('fs');for(const l of ['zh','en']){const t=JSON.parse(fs.readFileSync('tools/_verify/tiers-v1.3.0-'+l+'.json','utf8'));const c={};for(const v of Object.values(t))c[v]=(c[v]||0)+1;console.log(l,JSON.stringify(c),'total='+Object.keys(t).length)}\"");
md.push('');
md.push('# 3) 类型级分母');
md.push("node -e \"console.log('uniqueTypeCount =',require('./tools/_verify/types-1.3.0.json').uniqueTypeCount)\"");
md.push('');
md.push('# 4) 残留页完整清单：重跑脚本，stdout 按语言打印（与本文第 5 节一致）');
md.push('node tools/_verify/v130-tier-scan.mjs');
md.push('```');
md.push('');
md.push('## 7. 已知事实（已核实，直接引用）');
md.push('');
md.push(`- v1.3.0 页面数：\`content/v1.3.0/zh\` 与 \`en\` 各约 5,300 个 .md（本次扫描实测：zh=${scan.zh.total}，en=${scan.en.total}）。`);
md.push('- v1.3.0 源码树**不完整**：缺 `TaleWorlds.ObjectSystem` / `MBObjectManager` 整个模块，全树仅 4,596 个 .cs（1.5.3 是 11,487）。⇒「某类型在 1.3.0 查不到」是**弱信号**，1.3.0 的缺页集合必须标注 `confidence=low`。');
md.push('- v1.3.0 尚未撤回生成页（生成页仍在树内），所以 shell/generated 预期**不为 0**（与已重写完成的 v1.4.6/1.4.7/1.5.3 不同）。');
md.push('');

fs.writeFileSync(path.join(OUT, 'tiers-v1.3.0.md'), md.join('\n') + '\n');

// ---------- stdout 摘要 ----------
for (const lang of langs) {
  const s = scan[lang];
  console.log(`[${lang}] total=${s.total} shell=${s.counts.shell} generated=${s.counts.generated} handwritten_deep=${s.counts.handwritten_deep} residual=${s.residuals.length}`);
  console.log(`[${lang}] classifyPage status dist (all pages): ${JSON.stringify(s.policyStatusDist)}`);
  console.log(`[${lang}] deep breakdown: ${JSON.stringify(s.deepBy)}`);
  if (s.residuals.length > 0) {
    console.log(`[${lang}] residual paths:`);
    for (const p of s.residuals) console.log(`  - ${p}`);
  }
}
console.log(`uniqueTypeCount = ${uniqueTypeCount}`);
console.log('written: tools/_verify/tiers-v1.3.0-zh.json, tools/_verify/tiers-v1.3.0-en.json, tools/_verify/tiers-v1.3.0.md');
