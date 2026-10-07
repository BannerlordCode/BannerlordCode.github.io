// worker-65 片段落盘器：把 .w65/*.txt 里的 `## 怎么用` 插到目标页的示例小节之前
// 幂等：目标页已有 `## 怎么用` 则跳过并报告
// 每写完一页立刻单扫该文件的 U+FFFD（批 3 硬要求）
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
const DIR = "tools/_verify/.w65";
const PAGE_ROOT = "content/v1.4.5/zh/api/campaign/";
const EX = /^##\s+(?:真实示例|最小真实示例|典型用法示例|真实调用示例|示例|使用示例|代码示例)\s*$/im;

const jobs = [];
for (const f of readdirSync(DIR).filter((x) => x.endsWith(".txt"))) {
  const raw = readFileSync(DIR + "/" + f, "utf8");
  for (const chunk of raw.split(/^@@@PAGE\s+/m).slice(1)) {
    const nl = chunk.indexOf("\n");
    jobs.push({ page: chunk.slice(0, nl).trim(), body: chunk.slice(nl + 1).trim() });
  }
}

let done = 0, skip = 0, bad = 0;
for (const j of jobs) {
  const path = PAGE_ROOT + j.page + ".md";
  let t = readFileSync(path, "utf8");
  if (/^##\s+怎么用\s*$/m.test(t)) { console.log("SKIP(已有) " + j.page); skip++; continue; }
  if (j.body.includes("�")) { console.log("!! FFFD in fragment " + j.page); bad++; continue; }
  const m = EX.exec(t);
  if (!m) { console.log("!! 找不到示例小节 " + j.page); bad++; continue; }
  t = t.slice(0, m.index) + j.body + "\n\n" + t.slice(m.index);
  if (t.includes("�")) { console.log("!! FFFD after write " + j.page); bad++; continue; }
  writeFileSync(path, t, "utf8");
  // 单扫该文件
  const after = readFileSync(path, "utf8");
  console.log((after.includes("�") ? "!! FFFD " : "OK   ") + j.page +
    "  lines=" + after.split("\n").length +
    "  howto=" + (after.match(/^## 怎么用$/m) ? 1 : 0));
  done++;
}
console.log(`\napplied=${done} skipped=${skip} failed=${bad}`);
process.exit(bad ? 1 : 0);