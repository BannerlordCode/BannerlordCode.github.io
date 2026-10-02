// Robust single-page link checker for Bannerlord Zola docs (leaf page, page-as-dir).
// Usage: node _audit_l1/lead-check-one.mjs <bucket>/<Class>
import fs from "fs";
const apiRoot = "content/v1.3.15/zh/api";
const zhRoot = "content/v1.3.15/zh";
const arg = process.argv[2];
const [bucket] = arg.split("/");
const src = `${apiRoot}/${arg}.md`;
if (!fs.existsSync(src)) { console.log("SRC MISSING:", src); process.exit(2); }
const content = fs.readFileSync(src, "utf8");
const links = [...new Set(content.matchAll(/\]\(([^)]+)\)/g).map(m => m[1]))];
let broken = 0, checked = 0;
function exists(target) {
  return [target + ".md", target + "/_index.md", target].some(c => fs.existsSync(c));
}
for (const l of links) {
  if (l.startsWith("http") || l.startsWith("/") || l.startsWith("#")) continue;
  const up = (l.match(/\.\.\//g) || []).length;
  const segs = l.replace(/^(\.\.\/)+/, "").replace(/\/$/, "").split("/").filter(Boolean);
  let target;
  if (up === 1) {
    if (segs.length === 0) target = `${apiRoot}/${bucket}/_index`;
    else target = `${apiRoot}/${bucket}/${segs[0]}`;
  } else if (up === 2) {
    target = `${apiRoot}/${segs[0]}/${segs.slice(1).join("/")}`;
  } else if (up >= 3) {
    target = `${zhRoot}/${segs.join("/")}`;
  } else continue;
  checked++;
  if (!exists(target)) { broken++; console.log("BROKEN:", l, "=>", target); }
}
console.log(`checked=${checked} broken=${broken} (${arg})`);
process.exit(broken > 0 ? 1 : 0);
