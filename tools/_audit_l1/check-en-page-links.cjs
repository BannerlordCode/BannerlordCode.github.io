const fs = require("fs");
const path = require("path");
const root = process.cwd();
const en = [
  "content/v1.3.15/en/api/campaign-ext/MobilePartyAi.md",
  "content/v1.3.15/en/api/campaign-ext/PartyComponent.md",
  "content/v1.3.15/en/api/campaign-ext/PerkObject.md",
  "content/v1.3.15/en/api/campaign-ext/PolicyObject.md",
  "content/v1.3.15/en/api/core-extra/ItemCategory.md",
  "content/v1.3.15/en/api/mission/Mission.md",
];
function urlDir(srcFile) {
  return path.join(path.dirname(srcFile), path.basename(srcFile, ".md"));
}
function resolve(srcFile, href) {
  let h = href.split("#")[0];
  if (!h || h === "") return "skip";
  if (h.startsWith("http")) return "external";
  const base = urlDir(srcFile);
  const abs = path.resolve(base, h);
  const cands = [abs + ".md", path.join(abs, "_index.md")];
  for (const c of cands) if (fs.existsSync(c)) return "OK:" + c.replace(root, "").replace(/\\/g, "/");
  return "MISSING:" + abs.replace(root, "").replace(/\\/g, "/");
}
let problems = 0;
for (const f of en) {
  const txt = fs.readFileSync(f, "utf8");
  const re = /\[[^\]]+\]\(([^)]+)\)/g;
  let m;
  while ((m = re.exec(txt))) {
    const r = resolve(f, m[1].trim());
    if (r.startsWith("MISSING")) {
      console.log(f.replace(/.*en[\\/]/, "en/"), "->", m[1].trim(), "=>", r);
      problems++;
    }
  }
}
console.log(problems === 0 ? "ALL 6 EN PAGES: 0 BROKEN LINKS" : "PROBLEMS: " + problems);
