// ============================================================================
// tools/_verify/lead-20/upcheck.mjs — READ-ONLY return-path caliber (lead-20)
// ----------------------------------------------------------------------------
// 用途：测「能不能从该页走回它所在桶的 section index」。
//   **这不是 orphan 口径。** nav-orphans.mjs 问「有没有人链进来」；
//   本口径问「能不能走回去」。用户原话「跳过去回不来了」指的是后者。
//
// 判据：页内至少有一条 markdown 链接的 target 匹配 ^(\.\./)+(_index\.md)?$
//       等价于「点得到本桶的 _index.md」。
//
// 用法:
//   node tools/_verify/lead-20/upcheck.mjs                    # 只打印汇总
//   node tools/_verify/lead-20/upcheck.mjs --list <out.txt>   # 汇总 + 逐页清单
//
// 反证（判据不坏的三条证据，缺一不可）：
//   · content/v1.4.5/zh/api/campaign-ext/GainRenownAction.md  有 `## 导航` + `../`  → 未入列
//   · content/v1.4.7/en/api/campaign/Campaign.md              有 `↑ Parent: [...]`   → 未入列
//   · content/v1.3.0/zh/api/campaign/DefaultEncounter.md      有 `本区域目录`         → 未入列
//   ⇒ 判据在「有回程链接」的页上确实命中，故结果不是「判据没跑」。
//
// 稳定性：2026-10-07T07:45:07Z 与 08:05:42Z 两次复算逐数一致（783 / 684）。
// 不写 content/**、不写 templates/**，只读 + 可选落一份清单。
// ============================================================================
import fs from 'fs';
import path from 'path';

const ROOT = 'content';
const argv = process.argv.slice(2);
const listOut = (() => { const i = argv.indexOf('--list'); return i < 0 ? null : argv[i + 1]; })();

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.md')) files.push(p);
  }
})(ROOT);

const norm = (p) => p.split(path.sep).join('/');
const LINK = /\[[^\]]*\]\(([^)\s]+)\)/g;
// Up-link = a link that climbs at least one level (or names a section index).
// ⚠ `..` (bare, no trailing slash) MUST be accepted, because the authoritative
//   gate does: tools/audit-links.mjs line 77 — "Ensure directory semantics:
//   trailing slash so \"..\" climbs from the page folder." — normalises `..` and
//   resolves it. Rejecting `..` over-counts by exactly 87 pages that DO have a
//   working return path. Measured 2026-10-07: strict 870 vs authority-aligned 783,
//   and all 87 of the difference are the bare `..` form (0 use `_index.md`).
const UP = /^(\.\.\/)+(_index\.md)?$/;
const UP_BARE = '..';

let noUpLeaf = [], noUpAll = [], total = 0, leaf = 0;
const byTree = {}, byDir = {};

for (const f of files) {
  const p = norm(f);
  const base = path.basename(p);
  total++;
  const body = fs.readFileSync(p, 'utf8').replace(/^---[\s\S]*?\n---\n/, '');
  const isIndex = base === '_index.md';
  if (!isIndex) leaf++;

  let hasUp = false;
  let m;
  LINK.lastIndex = 0;
  while ((m = LINK.exec(body))) { const t = m[1]; if (UP.test(t) || t === UP_BARE) { hasUp = true; break; } }

  if (!hasUp) {
    const rel = p.slice(ROOT.length + 1);
    noUpAll.push(rel);
    const parts = rel.split('/');
    byTree[parts[0]] = (byTree[parts[0]] || 0) + 1;
    const dir = parts.slice(0, 3).join('/');
    byDir[dir] = (byDir[dir] || 0) + 1;
    if (!isIndex) noUpLeaf.push(rel);
  }
}

console.log('TOTAL_PAGES=' + total);
console.log('LEAF_PAGES=' + leaf);
console.log('NO_UP_LINK_ALL=' + noUpAll.length);
console.log('NO_UP_LINK_LEAF=' + noUpLeaf.length);
console.log('--- by version tree ---');
Object.entries(byTree).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(v + '\t' + k));
console.log('--- top 20 bucket dirs ---');
Object.entries(byDir).sort((a, b) => b[1] - a[1]).slice(0, 20).forEach(([k, v]) => console.log(v + '\t' + k));

if (listOut) {
  const lines = [
    '# lead-20 return-path caliber: pages with NO link back to their parent section index',
    '# caliber: no markdown link target matching ^(\\.\\./)+(_index\\.md)?$ or the bare ".."',
    '#   (bare ".." is accepted because tools/audit-links.mjs line 77 normalises it to climb)',
    '# command: node tools/_verify/lead-20/upcheck.mjs --list <this file>',
    '# NOT the orphan caliber: these pages DO have inbound links; they lack a return path.',
    '# TOTAL_PAGES=' + total + '  LEAF_PAGES=' + leaf + '  NO_UP_LINK_ALL=' + noUpAll.length + '  NO_UP_LINK_LEAF=' + noUpLeaf.length,
    '#',
    ...noUpAll,
  ];
  fs.writeFileSync(listOut, lines.join('\n') + '\n');
  console.log('LIST_WRITTEN=' + listOut + ' lines=' + noUpAll.length);
}
