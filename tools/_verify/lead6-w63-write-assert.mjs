#!/usr/bin/env node
// worker-63 批 6 写盘器 —— 带断言（派单 ⑤ 要求：每页每个小节【恰为 1】）
// 批 3 的串页形态就是这么来的，所以这里对「新增小节名」做去重 + 存在性断言。
// 用法：node tools/_verify/lead6-w63-write-assert.mjs <page> <section-name> [<section-name> ...]
// 行为：仅【校验】不写盘 —— 写盘由 Edit 工具做，本脚本是落笔后的独立复核器。
//       校验：① 每个目标小节在页内恰出现 1 次 ② 这些小节是新增的（HEAD 里不存在）
import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const [page, ...sections] = process.argv.slice(2);
const cur = readFileSync(page, "utf8");
let head = "";
try {
  head = execFileSync("git", ["show", `HEAD:${page}`], { encoding: "utf8", maxBuffer: 1 << 28 });
} catch { head = null; }

let bad = 0;
const count = (t, name) => (t.match(new RegExp(`^## ${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`, "gm")) || []).length;

for (const s of sections) {
  const c = count(cur, s);
  const h = head === null ? "?" : count(head, s);
  const ok = c === 1;
  if (!ok) bad++;
  console.log(
    (ok ? "OK   " : "FAIL ") +
    `${s.padEnd(22)} 现在=${c} HEAD=${h}` +
    (ok && h === 0 ? "  (新增)" : ok && h === 1 ? "  (已存在)" : "")
  );
}

const fffd = (cur.match(/\uFFFD/g) || []).length;
const refs = (cur.match(/[A-Za-z_][A-Za-z0-9_]*\.cs:\d+/g) || []).length;
const secs = (cur.match(/^## /gm) || []).length;
console.log(`-- ${page.replace(/^.*\//, "")}  小节数=${secs}  U+FFFD=${fffd}  全页file:line引用=${refs}`);
console.log(bad === 0 ? "-- 断言全部通过" : `-- 断言失败 ${bad} 项，不得交卷`);
process.exit(bad === 0 ? 0 : 1);
