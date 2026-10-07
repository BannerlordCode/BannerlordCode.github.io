// worker-63 自用工具：campaign-ext 页面七节语义体检（不是判分器，判分器仍用 sentence-scorer.mjs）
// 用途：批 5 交卷时逐页报「缺哪几节」。campaign-ext 存在三种标题方言，故按语义而非字面匹配。
// 用法：node tools/_verify/lead6-w63-section-audit.mjs <pages.txt>
import { readFileSync } from "node:fs";

const SLOTS = {
  "概述": [/^##\s+(One-line job|一句话职责|概述)\s*$/im],
  "心智模型": [/^##\s+(Mental Model|心智模型)\s*$/im],
  "关键成员": [/^##\s+(Key contract|公共契约|默认计算细节|方法)\s*$/im],
  "真实示例": [/^##\s+(Real access path|真实使用示例|真实读取路径|使用示例)\s*$/im],
  "依赖": [/^##\s+(Dependencies|依赖|依赖关系|上下游关系)\s*$/im],
  "风险": [/^##\s+(风险与调试顺序|风险与生命周期|风险与调试边界|风险与崩溃边界|风险)\s*$/im],
  "参见": [/^##\s+(Navigation|导航|版本注记|版本说明|参见)\s*$/im],
};

const list = readFileSync(process.argv[2], "utf8").split(/\r?\n/)
  .map((l) => l.trim()).filter((l) => l && !l.startsWith("#"));

let full = 0;
for (const rel of list) {
  const t = readFileSync(rel, "utf8");
  const miss = Object.entries(SLOTS).filter(([, rs]) => !rs.some((r) => r.test(t))).map(([k]) => k);
  const howto = /^##\s+(怎么用|How to use)\s*$/im.test(t);
  const refs = (t.match(/[A-Za-z_][A-Za-z0-9_]*\.cs:\d+/g) || []).length;
  if (miss.length === 0) full++;
  console.log(
    (miss.length === 0 ? "OK   " : "MISS ") +
    rel.replace(/^.*\//, "").padEnd(42) +
    "sec=" + String((t.match(/^## /gm) || []).length).padEnd(3) +
    "怎么用=" + (howto ? "Y" : "n") +
    " refs=" + String(refs).padEnd(3) +
    " missing=[" + miss.join(",") + "]"
  );
}
console.log("--- 七节齐全 " + full + "/" + list.length);
