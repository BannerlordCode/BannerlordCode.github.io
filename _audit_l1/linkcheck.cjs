const fs = require("fs");
const path = require("path");
const file = "content/v1.3.15/zh/api/campaign-ext/BarterManager.md";
const renderedBase = file.replace(/\.md$/, "").replace(/\\/g, "/");
const txt = fs.readFileSync(file, "utf8");
const re = /\[[^\]]+\]\(([^)]+)\)/g;
let m, bad = 0, total = 0;
while ((m = re.exec(txt))) {
  let p = m[1].trim();
  if (p.startsWith("http") || p.startsWith("#")) continue;
  total++;
  let abs = path.posix.normalize(renderedBase + "/" + p).replace(/\/+$/, "");
  const candidates = [abs + ".md", abs + "/_index.md"];
  const ok = candidates.some((c) => { try { fs.accessSync(c); return true; } catch (e) { return false; } });
  if (!ok) { bad++; console.log("BROKEN:", p, "->", abs); }
}
console.log("total=" + total + " broken=" + bad);
