// 批 3 验收：五节齐全 + 三要素齐全。计句用派单方给的句法口径（排除结构标签与代码块），
// 这里只做「节是否在」与「三要素是否在」的存在性判定，不复制计句器。
import { readFileSync } from "node:fs";
const list = readFileSync(process.argv[2], "utf8").split(/\r?\n/).map((x) => x.trim()).filter((x) => x && !x.startsWith("#"));
const FIVE = ["概述", "心智模型", "怎么用"];
let okFive = 0, okThree = 0;
const rows = [];
for (const rel of list) {
  const t = readFileSync(rel, "utf8");
  const h2 = (t.match(/^## .+$/gm) || []).map((s) => s.slice(3).trim());
  // ① 怎么拿到：源树 · 文件:行号 · 从哪个入口
  const howto = (() => {
    const m = /^##\s+怎么用\s*$/m.exec(t);
    if (!m) return "";
    const rest = t.slice(m.index + m[0].length);
    const nx = /^##\s+/m.exec(rest);
    return rest.slice(0, nx ? nx.index : rest.length);
  })();
  const c1 = /怎么拿到/.test(howto) &&
    /bannerlord-1\.4\.5|Bannerlord\.Source/.test(howto) &&
    /[\w.]+\.cs:\d+/.test(howto);
  // ② 一段可跑 csharp：>=3 行真实语句
  // 围栏必须是 ```csharp 后跟【任意换行】——写成 \n 会在 CRLF 页面上静默漏掉整段代码
  const code = (howto.match(/```csharp\r?\n([\s\S]*?)```/g) || []).map((b) => b.replace(/```csharp\r?\n|```/g, ""))
    .join("\n").split("\n")
    .map((l) => l.replace(/^\s+/, ""))
    .filter((l) => l.trim() && !/^\/\//.test(l));
  const c2 = code.length >= 3;
  // ③ 最常见的坑
  const c3 = /最常见的坑/.test(howto);
  // 五节齐全：概述 + 心智模型 + 怎么用 + 示例 + 风险(与边界)
  const hasEx = h2.some((x) => /真实示例|^示例$|最小真实示例/.test(x));
  const hasRisk = h2.some((x) => /风险/.test(x));
  const five = FIVE.every((x) => h2.includes(x)) && hasEx && hasRisk;
  if (five) okFive++;
  if (c1 && c2 && c3) okThree++;
  rows.push(`${five ? "5" : "-"}${c1 && c2 && c3 ? "3" : "-"}  codelines=${String(code.length).padStart(2)}  ${rel.split("/").pop()}` +
    (five ? "" : `  MISSING=[${[...FIVE.filter((x) => !h2.includes(x)), hasEx ? "" : "示例", hasRisk ? "" : "风险"].filter(Boolean)}]`));
}
rows.forEach((r) => console.log(r));
console.log(`\n五节齐全 = ${okFive}/${list.length}   三要素齐全 = ${okThree}/${list.length}`);