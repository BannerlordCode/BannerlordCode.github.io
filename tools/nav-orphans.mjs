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
import { spawnSync } from 'node:child_process';

const SITE = process.env.NAV_ORPHANS_ROOT || 'content';
const argv = process.argv.slice(2);
const arg = (k) => { const i = argv.indexOf(k); return i < 0 ? null : argv[i + 1]; };
const has = (k) => argv.includes(k) || (k === '--self-test' && argv.includes('--selftest'));

// 🔴 根路由的 lookup key 必须与 res() 的解析结果一致。
// bug（2026-10-03 14:28 前生效）：routeOf('_index.md') 返回 ''，而 res('v1.4.5/','../') 返回 '/'，
// 两者永远匹配不上 ⇒ 站点首页**结构性地**永远是 orphan，加多少条回首页的链接都不改这个数字。
// 修法：lookup 用 keyOf() 归一；对外展示仍用 ''（人看的形式不变）。
const keyOf = (r) => (r === '' ? '/' : r);

// 🔴 fixture 必须走生产路径：造真目录树、用真 CLI 跑，断言根页【不算】 orphan。
// 没有这条，就不知道「修对了没有」—— 这正是 1,770 与 R2 那两次的教训。
async function selfTest() {
  const fails = [];
  const ok = (n, c, d) => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n}${d ? '  ' + d : ''}`); if (!c) fails.push(n); };
  const dir = fs.mkdtempSync(path.join(fs.realpathSync(process.env.TEMP || '.'), 'navroot-'));
  const w = (rel, body) => { const p = path.join(dir, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, body); };
  const script = new URL(import.meta.url).pathname.replace(/^\//, '');
  const jf = path.join(fs.realpathSync(process.env.TEMP || '.'), 'navroot-out.json');
  const run = () => { spawnSync(process.execPath, [script, '--json', jf], { encoding: 'utf8', env: { ...process.env, NAV_ORPHANS_ROOT: dir } }); return jf; };
  const routesOf = () => { try { return JSON.parse(fs.readFileSync(jf, 'utf8')).routes; } catch { return null; } };
  try {
    w('_index.md', '# 站点首页\n');
    w('v9/_index.md', '# v9\n\n- [站点首页](../)\n');   // 版本根用 ../ 链回根（真实仓里 6 个版本根都这么写）
    w('v9/api/_index.md', '# api\n\n- [v9 home](../)\n');
    w('v9/api/Alpha.md', '# Alpha\n');
    w('v9/api/Lonely.md', '# Lonely\n');               // 真孤儿：无人链到
    let rs = routesOf(run());
    ok('fixture 跑通并产出 routes 列表', Array.isArray(rs), JSON.stringify(rs));
    ok('🔴 根页【不算】 orphan：v9 的 ../ 命中了根', Array.isArray(rs) && !rs.includes(''), `orphans=${JSON.stringify(rs)}`);
    ok('真孤儿仍在（没把计数清零糊过去）', Array.isArray(rs) && rs.includes('v9/api/Lonely/'));
    ok('CALIBER 抬头仍在', spawnSync(process.execPath, [script], { encoding: 'utf8', env: { ...process.env, NAV_ORPHANS_ROOT: dir } }).stdout.includes('CALIBER=self-link-counts-as-inbound'));
    ok('对照：删掉那条 ../ 后根页【重新变回】orphan（证明不是「碰巧不算」）', (() => {
      fs.writeFileSync(path.join(dir, 'v9/_index.md'), '# v9\n');
      const rs2 = routesOf(run());
      return Array.isArray(rs2) && rs2.includes('');
    })());

    // ── ③ 不变式（boss + lead 泛化版）──
    // 泛化：对【每一对】(来源页 route, href)，若该 href 解析后确实命中一个真实存在的页面，
    // 则断言 keyOf(routeOf(该页面文件)) === res(来源页 route, href)，逐字符相等。
    // 根只是这族里最显眼的一例；只断根，下一个同类 bug 换个路由就又漏了。
    //
    // 方法论：一个恒为假的判断，只测反向会被「它不再恒为假」满足，而看不见它是否恒为真；
    // 只测正向则会让「把检查整个删掉」也通过。恒假 → 恒真是一次转向，两个方向都要有钉子；
    // 而且钉子要钉在【不变式】上，不是钉在某个具体值上。
    //
    // 这一族已在 handoff §3.4 记过一次（`_index` 形式 href「0 次解析成功」）：同一个根 ——
    // 【两个函数的定义没对齐】。
    const linkReT = /\[[^\]]*\]\(([^)\s]+)\)/g;
    const fx = buildIndex(dir);
    // 上面的反向对照已经把 v9/_index.md 的链接删掉了；③ 必须在完整 fixture 上跑。
    fs.writeFileSync(path.join(dir, 'v9/_index.md'), '# v9\n\n- [站点首页](../)\n');
    let pairs = 0; const mismatch = [];
    for (const rel of fs.readdirSync(dir, { recursive: true }).filter((f) => f.endsWith('.md'))) {
      const posixRel = rel.split(path.sep).join('/');
      const txt = fs.readFileSync(path.join(dir, rel), 'utf8');
      const from = routeOf(posixRel);
      let m2; const re2 = new RegExp(linkReT.source, 'g');
      while ((m2 = re2.exec(txt))) {
        const tg = res(from, m2[1]);
        if (!tg) continue;
        const hitFile = fx.routes.get(keyOf(tg));           // 命中真实存在的页面才断
        if (!hitFile) continue;
        pairs++;
        const expected = keyOf(routeOf(path.relative(dir, hitFile)));   // 页面文件反推出的表内 key
        if (expected !== tg) mismatch.push(`${posixRel} (${m2[1]}) => ${JSON.stringify(tg)} vs ${JSON.stringify(expected)}`);
      }
    }
    ok(`③ 泛化不变式：每一对命中页面的 (来源 route, href) 都逐字符相等（共 ${pairs} 对）`,
      pairs >= 2 && mismatch.length === 0, mismatch.join(' ; ') || `pairs=${pairs}`);
    ok('③ 泛化不变式：不是空跑（对数 ≥ 2，含根那对）', pairs >= 2, `pairs=${pairs}`);

    // ③ 的第二半：原型键不得成为合法 route 参与 lookup。
    // 现在安全是因为【容器选对了（Map）】，不是因为有检查 —— 必须用 fixture 钉住；
    // 否则下个会话把 Map 换成普通对象，这三格会静默通过（与本次修的 bug 同形态：
    // 靠对的选择活着，不靠检查活着）。
    for (const k of ['__proto__', 'constructor', 'toString']) {
      ok(`③ 原型键 ${k} 不被 routes.has() 判为存在（生产表与 fixture 表都断）`, !routes.has(k) && !fx.routes.has(k));
      ok(`③ 原型键 ${k} 作为 href 解析时不得命中任何页面`,
        !fx.routes.has(keyOf(res('v1.4.5/', k) ?? '')) && !fx.routes.has(k));
    }

    // ── 重构不得改变生产行为 ──
    // 建表抽成函数、fixture 与生产共用之后，fixture 的正确性就依赖「抽出来的函数与原来等价」。
    // 若这次重构悄悄改了 routeOf / res 的任一行为，fixture 会跟着一起错 —— 全绿但生产已坏。
    // 这与 CRLF 那次同形态：断言建立在被改动的对象上，会跟着一起变。
    const prod = spawnSync(process.execPath, [script], { encoding: 'utf8', env: { ...process.env, NAV_ORPHANS_ROOT: '' } });
    const po = prod.stdout || '';
    const g = (re) => (po.match(re) || [])[1];
    ok('重构不改生产：orphans = 7', g(/orphans=(\d+)/) === '7', po.split('\n').slice(1, 2).join(''));
    ok('重构不改生产：orphan_parents = 6', g(/orphan_parents=(\d+)/) === '6', `got=${g(/orphan_parents=(\d+)/)}`);
    ok('重构不改生产：by_tree 里没有 "" 这一项', !/by_tree=[^\n]*"":/.test(po), g(/by_tree=(\{[^}]*\})/));
    ok('重构不改生产：CALIBER 抬头仍在', po.includes('CALIBER=self-link-counts-as-inbound'));
    ok('重构不改生产：total_pages 未变', g(/total_pages=(\d+)/) === '39027', `got=${g(/total_pages=(\d+)/)}`);
  } finally { try { fs.rmSync(dir, { recursive: true, force: true }); } catch {} }
  console.log(`SELFTEST_FAILURES=${fails.length}` + (fails.length ? '  -> ' + fails.join(', ') : ''));
  return fails.length ? 1 : 0;
}

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
// 建表：生产与 fixture 共用同一个函数（避免 fixture 走旁路）。
// 「routes 表的 key 与链接解析的产物永远是同一个字符串」这条不变式能被断言，
// 前提是表和解析器用的是同一套 routeOf / keyOf / res。
function buildIndex(root) {
  const routes = new Map(); const display = new Map();
  for (const f of walk(root)) { const r = routeOf(path.relative(root, f)); routes.set(keyOf(r), f); display.set(keyOf(r), r); }
  return { routes, display };
}
const { routes, display } = buildIndex(SITE);
const inbound = new Map(); for (const r of display.values()) inbound.set(r, 0);
const linkRe = /\[[^\]]*\]\(([^)\s]+)\)/g;
for (const f of files) { const rel = path.relative(SITE, f); const t = fs.readFileSync(f, 'utf8'); const from = routeOf(rel);
  let m; const re = new RegExp(linkRe.source, 'g');
  while ((m = re.exec(t))) { const tg = res(from, m[1]); const k = tg === null ? null : keyOf(tg); const d = k === null ? null : display.get(k);
    if (d !== null && d !== undefined && routes.has(k)) inbound.set(d, inbound.get(d) + 1); } }
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
if (has('--self-test')) process.exit(await selfTest());
process.exit(0);