// §6h 搬运判定：唯一分句器（此前 worker-57 与 worker-58 各写一把，口径不同 ⇒ 产出密度不可比）
// 用法：node tools/_verify/sentence-scorer.mjs <pages.txt>
// 口径（唯一权威，写在这里以便复现）：
//   1. 只取【## 怎么用】/【## How to use】正文
//   2. 去掉围栏代码块（代码块【不折成句子】，§6h：只计句不计形状）
//   3. 去掉结构标签行（怎么拿到 / 最常见的坑 / 典型用法 等）
//   4. 按换行 + 。；;.!！?？ 切句
//   5. 丢弃长度 < 12 的残句
//   6. 「重合」= 与同页示例小节任一句【归一化后互为子串】
import { readFileSync } from "node:fs";
const LABEL = /^\**\s*(?:怎么拿到它|怎么拿到|如何拿到|获取方式|最容易踩的坑|最常见的坑|常见的坑|坑|典型用法|How to obtain it|The most common pitfall)\s*\**\s*[：:.]?\s*\**/i;
const HOWTO = /^(?:怎么用|如何使用|用法|使用方式|How to use)/;
const EXAMPLE = /^(?:真实示例|最小真实示例|典型用法示例|真实调用示例|示例|使用示例|代码示例|Examples?|Example)/;
function body(t, re) {
  const m = re.exec(t); if (!m) return "";
  const rest = t.slice(m.index + m[0].length);
  const nx = /^##\s+/m.exec(rest);
  return rest.slice(0, nx ? nx.index : rest.length);
}
function sents(s) {
  return s.replace(/```[\s\S]*?```/g, " ")
    .split(/[\r\n]+|(?<=[。；;.!！?？])\s*/)
    .map(x => x.trim()).filter(x => x.length > 14)
    .map(x => x.replace(LABEL, "").trim()).filter(x => x.length > 12);
}
const norm = x => x.replace(/\s+/g, "");
// 跳过 # 注释行（DISPATCH 三）：否则清单首行的 N_before 说明会被当成路径 ⇒ ENOENT
const list = readFileSync(process.argv[2], "utf8").split(/\r?\n/)
  .map(l => l.trim()).filter(l => l && !l.startsWith("#"));
const scoredPaths = [];
let rows = 0, zero = 0, totFresh = 0, minF = 1e9, noEx = 0;
const short = [];
for (const rel of list) {
  const t = readFileSync(rel, "utf8");
  const h = body(t, /^##\s+(?:怎么用|如何使用|用法|使用方式|How to use)\s*$/im);
  if (!h) continue;
  rows++; scoredPaths.push(rel);
  const ex = body(t, /^##\s+(?:真实示例|最小真实示例|典型用法示例|真实调用示例|示例|使用示例|代码示例|Examples?|Example)\s*$/im);
  if (!ex) { noEx++; continue; }
  const E = sents(ex).map(norm);
  const fresh = sents(h).filter(a => { const k = norm(a).slice(0, 26);
    return !E.some(b => b.includes(k) || k.includes(b.slice(0, 26))); });
  totFresh += fresh.length; if (fresh.length < minF) minF = fresh.length;
  if (fresh.length === 0) { zero++; short.push(rel); }
}
if (process.argv.includes("--list")) { for (const r of list) console.log("PAGE " + r); }
console.log("scored=" + rows + "  pages_scored=" + scoredPaths.length + "  搬运(新句=0)=" + zero + "  无示例可比=" + noEx);
console.log("新句合计=" + totFresh + "  每页最少=" + (minF === 1e9 ? "-" : minF));
short.forEach(s => console.log("  ! " + s));
process.exit(0);
