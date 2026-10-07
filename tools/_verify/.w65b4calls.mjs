// worker-65：按模型名找真实调用点（回源码追调用点用），输出 相对路径:行号:代码
// 用法：node tools/_verify/.w65b4calls.mjs <ModelName> [maxPerFile]
import { readFileSync } from "node:fs";
const NAME = process.argv[2];
const CAP = Number(process.argv[3] || 2);
const ROOT = "C:/WorkSpace/Bannerlord/bannerlord-1.4.5/Bannerlord.Source/bin/";
const idx = JSON.parse(readFileSync("tools/_verify/.idx145.json", "utf8"));
const RE = new RegExp("Models\\." + NAME + "\\b");
const out = [];
for (const f of new Set(Object.values(idx).flat())) {
  let lines;
  try { lines = readFileSync(f, "utf8").split(/\r?\n/); } catch { continue; }
  const rel = f.replace(ROOT, "");
  if (rel.includes("/" + NAME + ".cs")) continue;              // 自身声明与默认实现不算调用点
  let hit = 0;
  for (let i = 0; i < lines.length; i++) {
    if (!RE.test(lines[i])) continue;
    out.push(rel.replace(/\\/g, "/") + ":" + (i + 1) + ": " + lines[i].trim().slice(0, 120));
    if (++hit >= CAP) break;
  }
}
console.log(out.join("\n") || "(no external call sites)");
console.error("total=" + out.length);