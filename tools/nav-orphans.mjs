// nav-orphans.mjs —— 孤儿页普查（只读，与 tools/_v146_orphan_check.mjs 口径逐字相同）。
//
// 口径来源：tools/_v146_orphan_check.mjs（其机制推导见 tools/_HANDOFF.md §3.4
// 与 tools/_orphan_resolver_derivation.md）。routeOf / res / linkRe 三行是【逐字照抄】，
// 不要「改进」它们 —— 口径一变，4312 这个数字就不可比了。
//
// 保留的已知机制缺陷（有意为之，改了就对不上历史数字）：
//   · 入链计数处【没有】 tg !== from 守卫 → 自链被计为引用者。
//     直接后果：_index.md 里链向自己桶下页面的链接会掩盖该页面的孤儿状态。
//   · 只认行内链接 [t](u)，不认引用式链接 / HTML <a> / frontmatter。
//   · .txt 文件的 route 与链接侧 audit-links.mjs 口径不同（两张表刻意不同，见 nav-verify.mjs）。
//
// 用法：
//   node tools/nav-orphans.mjs                 # 总数 + 按版本树 + v1.4.6 明细
//   node tools/nav-orphans.mjs --by-parent     # 按父目录聚合（本轮 4312 个 orphan 只落在 28 个父目录）
//   node tools/nav-orphans.mjs --json <file>   # 全量 orphan 列表落盘
//   node tools/nav-orphans.mjs --expect N      # 实测 != N 时 exit 2（区分「没发现」与「没跑」）
//
// 退出码（门禁第 4 条）：0 = 跑通  2 = 检查器没跑起来（空 universe / 参数错 / 期望不符）
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'content';
const argv = process.argv.slice(2);
const arg = (k) => { const i = argv.indexOf(k); return i < 0 ? null : argv[i + 1]; };
const has = (k) => argv.includes(k);

// 🔴 冻结口径（不要“改进”）：入链计数处【没有】tg !== from 守卫 —— 自链被计为引用者。
//    即一个页可以没有任何外部页指向它，却因为指了自己而不算孤儿。
//    4,314 这个基线就是在这个口径下测得的。任何人要改这个口径（例如加 tg !== from 守卫），
//    必须同时重测基线并作废旧数，不许拿新数直接与旧数比。
const CALIBER = 'self-link-counts-as-inbound';

function walk(d, a = []) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); e.isDirectory() ? walk(p, a) : (e.name.endsWith('.md') || e.name.endsWith('.txt')) && a.push(p); } return a; }
const files = walk(SITE);

// 空 universe 守卫：一个什么都没遍历到的检查器，与「正确地什么都没找到」输出完全一样。
// 因此空集必须报错退出，而不是报出一个漂亮的 0。
if (!files.length) {
  console.error('EMPTY_UNIVERSE: 未遍历到任何文件 —— 检查器无法工作，拒绝出结论（这不等于「一切正常」）');
  process.exit(2);
}
const routeOf = (rel) => { const q = rel.split(path.sep).join('/').replace(/\.md$/, ''); return q.endsWith('_index') ? q.replace(/_index$/, '') : q + '/'; };
function res(from, href) { if (/^(https?:|#|mailto:)/.test(href)) return null; const h = href.split('#')[0]; if (!h) return null; const s = from.split('/').filter(Boolean); for (const x of h.split('/')) { if (x === '.' || x === '') continue; if (x === '..') s.pop(); else s.push(x); } const r = s.join('/'); return r.endsWith('/') ? r : r + '/'; }
const routes = new Map(); for (const f of files) routes.set(routeOf(path.relative(SITE, f)), f);
const inbound = new Map(); for (const r of routes.keys()) inbound.set(r, 0);
const linkRe = /\[[^\]]*\]\(([^)\s]+)\)/g;
for (const f of files) { const rel = path.relative(SITE, f); const t = fs.readFileSync(f, 'utf8'); const from = routeOf(rel);
  let m; const re = new RegExp(linkRe.source, 'g');
  while ((m = re.exec(t))) { const tg = res(from, m[1]); if (tg && routes.has(tg)) inbound.set(tg, inbound.get(tg) + 1); } }
const orphans = [...inbound].filter(([, n]) => n === 0).map(([r]) => r);
const perTree = {};
for (const r of orphans) { const seg = r.split('/')[0]; perTree[seg] = (perTree[seg] || 0) + 1; }
// 父目录 = orphan route 去掉最后一段（含尾斜杠）。route 为 '' 时（内容根页）父目录也记成 ''。
const perParent = {};
for (const r of orphans) { const p = r.replace(/[^/]+\/$/, ''); perParent[p] = (perParent[p] || 0) + 1; }

if (has('--json')) {
  const out = arg('--json') && arg('--json') !== true ? arg('--json') : 'tools/_nav-orphans.json';
  fs.writeFileSync(out, JSON.stringify({ pages: routes.size, orphans: orphans.length, byTree: perTree, byParent: perParent, routes: orphans.sort() }, null, 2));
  console.log('JSON=' + out);
}
console.log('CALIBER=' + CALIBER);
console.log('total_pages=' + routes.size + '  orphans=' + orphans.length);
console.log('orphan_parents=' + Object.keys(perParent).length);
console.log('by_tree=' + JSON.stringify(perTree));
const v146 = orphans.filter((r) => r.startsWith('v1.4.6/'));
console.log('v1.4.6_orphans=' + v146.length);
if (has('--by-parent')) {
  console.log('--- orphans by parent dir ---');
  for (const [p, n] of Object.entries(perParent).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))) console.log(`${n}\t${p || '(root)'}`);
}
for (const r of v146.slice(0, 25)) console.log('   ' + r);

const expect = arg('--expect');
if (expect !== null) {
  const n = Number(expect);
  if (!Number.isInteger(n)) { console.error('EXPECT_ORPHANS 需要整数，收到: ' + expect); process.exit(2); }
  if (orphans.length !== n) { console.error(`EXPECT_ORPHANS_MISMATCH: 实测 ${orphans.length} != 期望 ${n}`); process.exit(2); }
  console.log('EXPECT_ORPHANS_OK=' + orphans.length);
}
process.exit(0);