const fs = require("fs");
const path = require("path");
const root = process.cwd();
const zp = [
  "content/v1.3.15/zh/api/campaign-ext/MobilePartyAi.md",
  "content/v1.3.15/zh/api/campaign-ext/PartyComponent.md",
  "content/v1.3.15/zh/api/campaign-ext/PerkObject.md",
  "content/v1.3.15/zh/api/campaign-ext/PolicyObject.md",
  "content/v1.3.15/zh/api/core-extra/ItemCategory.md",
  "content/v1.3.15/zh/api/mission/Mission.md",
];
// Zola clean URL: a .md file maps to a URL directory of the same name.
function urlDir(srcFile) {
  return path.join(path.dirname(srcFile), path.basename(srcFile, ".md"));
}
function resolveExists(srcFile, href) {
  let h = href.split("#")[0];
  if (!h || h === "") return null;
  if (h.startsWith("http")) return "external";
  const base = urlDir(srcFile);
  let abs = path.resolve(base, h);
  abs = abs.replace(/[\\/]zh[\\/]/, "/en/");
  const cands = [abs + ".md", path.join(abs, "_index.md")];
  for (const c of cands) {
    if (fs.existsSync(c)) return c.replace(root, "").replace(/\\/g, "/");
  }
  return "MISSING:" + abs.replace(root, "").replace(/\\/g, "/");
}
let problems = 0;
for (const f of zp) {
  const txt = fs.readFileSync(f, "utf8");
  const re = /\[[^\]]+\]\(([^)]+)\)/g;
  let m;
  while ((m = re.exec(txt))) {
    const href = m[1].trim();
    const r = resolveExists(f, href);
    if (r && r.startsWith("MISSING")) {
      console.log(f.replace(/.*zh[\\/]/, "zh/"), "->", href, "=>", r);
      problems++;
    }
  }
}
console.log(problems === 0 ? "ALL LINK TARGETS RESOLVE OK" : "TOTAL PROBLEMS: " + problems);
