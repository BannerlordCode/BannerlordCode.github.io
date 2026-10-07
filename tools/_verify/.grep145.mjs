// worker-65 一次性检索器：对 1.4.5 源树按标识符找真实调用点，输出 `相对路径:行号:代码`
// 用法： node tools/_verify/.grep145.mjs <regex> [maxPerFile]
import { readFileSync } from "node:fs";
const RE = new RegExp(process.argv[2], "i");
const CAP = Number(process.argv[3] || 4);
const ROOT = "C:/WorkSpace/Bannerlord/bannerlord-1.4.5/Bannerlord.Source/bin/";
const idx = JSON.parse(readFileSync("tools/_verify/.idx145.json", "utf8"));
const files = new Set(Object.values(idx).flat());
const out = [];
for (const f of files) {
  let lines;
  try { lines = readFileSync(f, "utf8").split(/\r?\n/); } catch { continue; }
  let hit = 0;
  for (let i = 0; i < lines.length; i++) {
    if (!RE.test(lines[i])) continue;
    out.push(f.replace(ROOT, "") + ":" + (i + 1) + ": " + lines[i].trim().slice(0, 150));
    if (++hit >= CAP) break;
  }
}
console.log(out.join("\n"));
console.error("total=" + out.length);