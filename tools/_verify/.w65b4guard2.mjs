// 度量守卫 v2 —— 覆盖【会打印页名】的度量工具（我自己的 accept / fffd 也有页名输出，
// 批 3 的越界事故形态就出在自写工具上，只守派单方的 scorer 是守不住的）
// 规则（boss #8236）：凡输出出现【自己清单之外的页名】⇒ 立即停止，该轮判为无效并重跑。
// 对照（②）：同一把尺跑两次输出必须逐字一致；不一致 = 尺没跑起来/不稳，本轮作废。
// 用法：node tools/_verify/.w65b4guard2.mjs <my-pages-list>
import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
const LIST = process.argv[2];
// 清单允许带 `#` 注释头（lead 采样会写），一律过滤
const readList = (p) => readFileSync(p, "utf8").split(/\r?\n/).map((x) => x.trim()).filter((x) => x && !x.startsWith("#"));
// 可选第 3 参：度量工具实际扫描的清单（对照用）。不传则与 LIST 相同。
const TOOLLIST = process.argv[3] || LIST;
const mine = new Set(readList(LIST));
// 工具有些打印全路径、有些只打印 basename ⇒ 两套都算「我的」，否则全量误报
const mineBase = new Set([...mine].map((p) => p.split("/").pop()));
const isMine = (x) => mine.has(x) || mineBase.has(x);

const TOOLS = [
  { n: "sentence-scorer(派单方)", cmd: "tools/_verify/sentence-scorer.mjs", args: [TOOLLIST] },
  { n: "w65accept", cmd: "tools/_verify/.w65accept.mjs", args: [TOOLLIST] },
  { n: "w65fffd", cmd: "tools/_verify/.w65fffd.mjs", args: [TOOLLIST] },
];
const run = (t) => execFileSync("node", [t.cmd, ...t.args], { encoding: "utf8", maxBuffer: 1e8 });

let bad = 0;
for (const t of TOOLS) {
  // ② 对照自检：两次跑必须逐字一致
  let a, b, cErr = "";
  try { a = run(t); b = run(t); } catch (e) { a = e.stdout || ""; cErr = String(e.status ?? ""); }
  if (a !== b) { console.error(`!! 对照失败 [${t.n}]：两次输出不一致，本轮作废`); process.exit(3); }
  // ① 越界判定
  const names = [...new Set((a.match(/[\w./-]+\.md/g) || []))];
  const foreign = names.filter((x) => !isMine(x));
  const tag = foreign.length ? "!! 越界" : "OK     ";
  console.log(`${tag} [${t.n}] 页名 ${names.length} 条，越界 ${foreign.length} 条${cErr ? " (exit=" + cErr + ")" : ""}`);
  if (foreign.length) { console.error("   清单外页名：\n     " + foreign.join("\n     ")); bad = 1; }
  if (!names.length) console.log(`   (该工具本次未打印页名——越界检查对它天然无效，勿据此认为安全)`);
}
console.log(bad ? "\n本轮无效：出现清单外页名，须重跑" : "\n越界检查全部通过");
process.exit(bad ? 2 : 0);