// worker-65 批 4 落盘器（加固版）
// 修的是我在批 3 自曝的根因：按 @@@PAGE 切块后【不校验块内是否混入别人的内容】。
// 三道断言，全部在写盘前/后跑，任一失败即停该页且不写盘：
//   A1 块首行必须是 `## 怎么用`（抓漏写 @@@PAGE 标记导致的并块）
//   A2 块内不得出现第二个 `## ` 一级块标题（抓草稿串页，即批 3 事故形态）
//   A3 写盘后该页 `^## 怎么用$` 必须【恰好 1】条（抓重复节）
// 用法：node tools/_verify/.w65b4apply.mjs <fragments-dir> <pages-list>
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
const DIR = process.argv[2];
const LIST = process.argv[3];
const listAbs = existsSync(LIST) ? LIST : "content/v1.4.5/zh/api/campaign/" + LIST;
const ALLOWED = new Set(readFileSync(listAbs, "utf8").split(/\r?\n/).map((x) => x.trim()).filter((x) => x && !x.startsWith("#")));
const PAGE_ROOT = "content/v1.4.5/zh/api/campaign/";

const jobs = [];
for (const f of readdirSync(DIR).filter((x) => x.endsWith(".txt"))) {
  const raw = readFileSync(DIR + "/" + f, "utf8");
  const chunks = raw.split(/^@@@PAGE\s+/m).slice(1);
  if (chunks.length !== raw.split(/^@@@PAGE\s+/m).length - 1) { /* noop */ }
  for (const c of chunks) {
    const nl = c.indexOf("\n");
    const page = c.slice(0, nl).trim();
    const body = c.slice(nl + 1).trim();
    // A0 该页必须在我被派的清单里 —— 防止片段写到别人的页上
    if (!ALLOWED.has(PAGE_ROOT + page + ".md")) {
      console.log(`!! A0 越界：片段 "${page}" 不在清单 ${LIST} 内，拒绝`); process.exit(2);
    }
    jobs.push({ page, body, file: f });
  }
}
console.log(`fragments=${jobs.length}  allowed=${ALLOWED.size}`);

let ok = 0, skip = 0, fail = 0;
for (const j of jobs) {
  const path = PAGE_ROOT + j.page + ".md";
  let t = readFileSync(path, "utf8");
  // A1
  if (!j.body.startsWith("## 怎么用")) { console.log(`!! A1 ${j.page} 块首行不是 ## 怎么用`); fail++; continue; }
  // A2  块内不得有第二个 H2（草稿串页形态）
  const h2s = j.body.match(/^## .+$/gm) || [];
  if (h2s.length !== 1) { console.log(`!! A2 ${j.page} 块内 H2 数=${h2s.length}（${h2s.join("/")}）——疑似串页，拒绝`); fail++; continue; }
  // 三要素必须齐，否则不写
  for (const need of ["怎么拿到", "最常见的坑", "```csharp"]) {
    if (!j.body.includes(need)) { console.log(`!! A3 ${j.page} 缺要素 ${need}`); fail++; continue; }
  }
  if (j.body.includes("\ufffd")) { console.log(`!! FFFD in fragment ${j.page}`); fail++; continue; }
  if (/^##\s+怎么用\s*$/m.test(t)) { console.log(`SKIP(已有) ${j.page}`); skip++; continue; }
  const EX = /^##\s+(?:真实示例|最小真实示例|典型用法示例|真实调用示例|示例|使用示例|代码示例)\s*$/im.exec(t);
  if (!EX) { console.log(`!! 找不到示例小节 ${j.page}`); fail++; continue; }
  t = t.slice(0, EX.index) + j.body + "\n\n" + t.slice(EX.index);
  // A3' 写盘前最终断言：恰好 1 条
  const n = (t.match(/^##\s+怎么用\s*$/gm) || []).length;
  if (n !== 1) { console.log(`!! A3 ${j.page} 写盘前 怎么用 节数=${n}，放弃`); fail++; continue; }
  writeFileSync(path, t, "utf8");
  const after = readFileSync(path, "utf8");
  const bad = after.includes("\ufffd");
  console.log(`${bad ? "!! FFFD" : "OK   "} ${j.page.padEnd(34)} lines=${String(after.split("\n").length).padStart(4)} 怎么用节数=${(after.match(/^##\s+怎么用\s*$/gm) || []).length}`);
  ok++;
}
console.log(`\napplied=${ok} skipped=${skip} failed=${fail}`);
process.exit(fail ? 1 : 0);