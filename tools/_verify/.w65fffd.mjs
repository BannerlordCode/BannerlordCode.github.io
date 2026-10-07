// 单扫：给定 pages.txt，逐页报 U+FFFD 位置（批 3 硬要求：每写完一页立刻单扫该文件）
import { readFileSync } from "node:fs";
const list = readFileSync(process.argv[2], "utf8").split(/\r?\n/).map((x) => x.trim()).filter((x) => x && !x.startsWith("#"));
let bad = 0;
for (const rel of list) {
  const t = readFileSync(rel, "utf8");
  const lines = t.split(/\r?\n/);
  const hits = [];
  lines.forEach((l, i) => { if (l.includes("�")) hits.push((i + 1) + ":" + l.trim().slice(0, 60)); });
  if (hits.length) { bad++; console.log("!! FFFD " + rel.split("/").pop() + " -> " + hits.join(" | ")); }
}
console.log(bad ? `FFFD pages = ${bad}` : `FFFD clean (${list.length} pages scanned)`);
process.exit(bad ? 1 : 0);