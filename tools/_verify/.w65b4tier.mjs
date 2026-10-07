// 按 lead-6 发布的口径（campaign-final-state.txt「分档口径」+ DISPATCH-TEMPLATE.md「形状 A」）
// 实测重算 tier 数字，不做算术推算。
//   机器空壳 = description 含「的自动生成类参考。」AND 正文含形状 A 之一
//   tier1    = 非空壳 且 六节齐全 5/6（缺「怎么用」）
//   tier2    = 非空壳 且 ≤4/6
import { readFileSync, readdirSync } from "node:fs";
const DIR = "content/v1.4.5/zh/api/campaign";
const SHAPE_A = ["它有什么状态", "它允许你做什么", "它保存的状态"];
const SIX = ["概述", "心智模型", "怎么用", "示例", "风险", "依赖"];
const files = readdirSync(DIR).filter((f) => f.endsWith(".md"));
let shell = 0, nonShell = 0, t1 = 0, t1done = 0, t2 = 0, other = 0;
const t1todo = [];
for (const f of files) {
  const t = readFileSync(DIR + "/" + f, "utf8");
  const desc = (/^description:\s*"?(.*?)"?\s*$/m.exec(t) || [])[1] || "";
  const isShell = desc.includes("的自动生成类参考。") && SHAPE_A.some((s) => t.includes(s));
  if (isShell) { shell++; continue; }
  nonShell++;
  const h2 = (t.match(/^## .+$/gm) || []).map((x) => x.slice(3).trim());
  const hit = SIX.filter((s) => h2.some((x) => x === s || x.startsWith(s) || x.includes(s))).length;
  const hasHowto = h2.includes("怎么用");
  if (hit >= 5 && !hasHowto) { t1++; t1todo.push(f); }
  else if (hit >= 5 && hasHowto) { t1done++; }
  else if (hit <= 4) { t2++; }
  else { other++; }
}
console.log(`总叶页 ${files.length} · 机器空壳 ${shell} · 非空壳 ${nonShell}`);
console.log(`tier1 已落地 ${t1done} / 未做 ${t1}`);
console.log(`tier2 未做 ${t2}`);
console.log(`其它（5/6 但缺「怎么用」以外的组合） ${other}`);
console.log(`核对: t1done + t1 + t2 + other = ${t1done + t1 + t2 + other} vs 非空壳 ${nonShell}`);