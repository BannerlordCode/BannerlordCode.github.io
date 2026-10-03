// nav-section-index.mjs —— 把桶目录下所有子页补进该桶 _index.md 的【机械子页清单】。
//
// 🔴 授权边界（boss 裁定，见 tools/_NAV-ARCHITECTURE.md）
//   允许：只写 <!-- BEGIN SECTION INDEX --> ... <!-- END SECTION INDEX --> 之间的机械子页清单
//   禁止：marker 块之外的任何一行（散文 / 心智模型段 / 手写链接）
//   禁止：写任何非 _index.md 的文件
//   禁止：删除或改写任何已有人工链接 —— 只能新增缺失项
//   必须：幂等（连跑两次第二次 0 改动）；先 --dry-run 出报告给人看，再 --apply
//   护栏：assertStructuralScope() 来自 tools/lib/content-write-freeze.mjs（lead-4 的地盘）。
//         本脚本【只调用】它，不自己声明合规，也不自己实现一个同名函数顶替它。
//
// 用法：
//   node tools/nav-section-index.mjs --dry-run <dir> [<dir> ...]   # 只报告，不写
//   node tools/nav-section-index.mjs --apply   <dir> [<dir> ...]   # 写入（需护栏在位）
//   node tools/nav-section-index.mjs --self-test                   # fixture，秒级
//
// 退出码：0 通过 / 1 断言失败（拒绝写入或已回滚）/ 2 检查器没跑起来（护栏缺失、参数错、输入非法）
import fs from 'node:fs';
import path from 'node:path';

const argv = process.argv.slice(2);
const has = (k) => argv.includes(k);
const MODE = has('--apply') ? 'apply' : has('--dry-run') ? 'dry-run' : null;
// 本工具的 flag 都不带值（--dry-run / --apply / --self-test），所以直接去掉 argv[0] 后
// 按位置参数取。🚨 事故：曾用“前一个 token 是不是 flag”来过滤，结果把第一个桶目录
// ——因为它紧跟在 --dry-run 后面——静默丢掉了，报告里 BUCKETS 少 1 也不报错。
const DIRS = argv.slice(1).filter((a) => !a.startsWith('--'));

const BEGIN = '<!-- BEGIN SECTION INDEX -->';
const END = '<!-- END SECTION INDEX -->';

// ── 护栏：由 tools/lib/content-write-freeze.mjs 提供（lead-4）。本脚本不实现它。────
// TODO(lead-4 契约): assertStructuralScope({ mode, targetPath, newText, originalText, marker })
//   mode          'apply'
//   targetPath    即将写入的 content/**/_index.md 绝对路径
//   originalText  写入前的完整文件内容
//   newText       写入后的完整文件内容
//   marker        { begin, end } 两个标记串
//   期望行为：只允许 originalText 与 newText 在 [首个 BEGIN, 首个 END] 之间不同，
//             其余字节必须全等；越界则非零退出 / 抛错。
// 本脚本【只调用】不实现：护栏缺失时 --apply 必须 exit 2（护栏必须先于写入器存在）。
//
// ⚠️ 盘上现状（2026-10-03 读证）：tools/lib/content-write-freeze.mjs 仍是【pre-allowlist 桩】——
//    840 bytes，mtime 2026-10-02 18:38:45，无任何 export 语句，import 即无条件 exit 1。
//    所以必须先静态判断导出是否存在，再决定要不要 import；否则一次 import 会把 --dry-run 一起杀掉。
const FREEZE_URL = new URL('./lib/content-write-freeze.mjs', import.meta.url);
async function loadGuard() {
  if (!fs.existsSync(FREEZE_URL)) return { available: false, reason: 'tools/lib/content-write-freeze.mjs 不存在' };
  const src = fs.readFileSync(FREEZE_URL, 'utf8');
  if (!/export\s+(async\s+)?function\s+assertStructuralScope|export\s+(const|let)\s+assertStructuralScope|export\s*\{[^}]*\bassertStructuralScope\b/.test(src))
    return { available: false, reason: 'assertStructuralScope 未落盘（lead-4 待办；当前该模块 import 即 exit 1）' };
  const mod = await import(FREEZE_URL.href);
  if (typeof mod.assertStructuralScope !== 'function') return { available: false, reason: 'assertStructuralScope 已导出但不是函数' };
  return { available: true, reason: 'ok', fn: mod.assertStructuralScope };
}
function callGuard(g, args) { g.fn(args); return { available: true, reason: 'ok' }; }

const linkRe = /\[[^\]]*\]\(([^)\s]+)\)/g;
const headingRe = /^(#{2,6})\s+/;

function readBucket(dir) {
  const idx = path.join(dir, '_index.md');
  const lines = fs.existsSync(idx) ? fs.readFileSync(idx, 'utf8').split(/\r?\n/) : null;
  const beginIdx = [], endIdx = [];
  if (lines) lines.forEach((l, i) => {
    if (l.trim() === BEGIN) beginIdx.push(i);
    if (l.trim() === END) endIdx.push(i);
  });
  // 确定性取【第一个 BEGIN 到第一个 END】；重复 marker 报告但不崩、也不当正常
  const b = beginIdx[0] ?? -1, e = endIdx[0] ?? -1;
  const dup = beginIdx.length > 1 || endIdx.length > 1;
  return { dir, idx, lines, b, e, beginCount: beginIdx.length, endCount: endIdx.length, dup };
}

function childrenOf(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '_index.md') continue;
    if (e.isFile() && e.name.endsWith('.md')) out.push({ name: e.name.replace(/\.md$/, ''), href: './' + e.name.replace(/\.md$/, ''), kind: 'leaf' });
    else if (e.isDirectory() && fs.existsSync(path.join(dir, e.name, '_index.md'))) out.push({ name: e.name, href: './' + e.name + '/', kind: 'subdir' });
  }
  return out.sort((a, b) => a.name.localeCompare(b.name));
}

/** 返回计划：{ add:[{name,href}], insertAt, proposedLines } —— 纯新增，绝不改动已有行。 */
// 路由语义标签（boss/worker-6 实测的层级规则；href 解析成功 ≠ 落在你以为的层）：
//   同桶兄弟 <bucket>/Foo   ·  API 参考 ../   ·  语言首页 ../../   ·  版本首页 ../../../
// 桶 _index.md 里 ../ = /<ver>/<lang>/api/ ， ../../ = 语言首页 ， ../../../ = 版本首页
// 路由语义分类 —— 【相对写入位置】判定，不是「./ 合法 / ../ 越界」的无位置判断。
//
// 🔴 位置相关性（worker-4 实测推翻的旧规则）：同桶兄弟的写法取决于你写在哪个文件里：
//     桶 _index.md 里  → ./Foo      （页面路由 == 文件目录）
//     叶子页 X.md 里   → ../Foo     （页面路由比文件目录深一层）
//   在叶子页里写 ./Foo 会解析成 /…/<bucket>/X/Foo/ —— 多一层、静默错误、不报断链。
// tools/_HANDOFF.md §4 的「同桶兄弟 ./Foo」是不带位置的简写。
//
// 返回 layerUp = 写入页路由深度 - 目标路由深度（正数 = 往上跳了几层，0 = 同层，负数 = 往下）。
function pageRouteOf(bucketDir, context) {
  const dir = bucketDir.split(path.sep).join('/').replace(/\/$/, '');
  return context === 'LEAF_PAGE' ? dir + '/<Page>/' : dir + '/';
}
function layerUp(bucketDir, href, context) {
  const dir = bucketDir.split(path.sep).join('/').replace(/\/$/, '');
  const segs = context === 'LEAF_PAGE' ? dir.split('/').length + 1 : dir.split('/').length;
  const route = routeOfHref(bucketDir, href, context);
  if (!route) return null;
  return segs - route.replace(/\/$/, '').split('/').length;
}
function routeOfHref(bucketDir, href, context = 'BUCKET_INDEX') {
  if (/^(https?:|#|mailto:)/.test(href)) return null;
  const h = href.split('#')[0];
  const dir = bucketDir.split(path.sep).join('/').replace(/\/$/, '');
  const base = context === 'LEAF_PAGE' ? dir + '/<Page>/' : dir + '/';
  const seg = path.posix.normalize(path.posix.join(base, h)).replace(/\/$/, '');
  return seg + '/';   // 【不】剥 content/ 前缀：写入侧目录带着它，两边必须同口径才能算层数
}
function semantics(bucketDir, href, route, context = 'BUCKET_INDEX') {
  const dir = bucketDir.split(path.sep).join('/').replace(/\/$/, '');
  if (!route) return 'EXTERNAL';
  if (route === dir + '/' || route.startsWith(dir + '/')) return 'SIBLING';
  const up = layerUp(bucketDir, href, context);
  if (route === dir.split('/').slice(0, -1).join('/') + '/' && dir.split('/').slice(0, -1).join('/') + '/'.endsWith('/api/')) return 'API_REFERENCE'; // ../
  if (up === null) return 'OTHER_TREE';
  if (route !== dir.split('/').slice(0, -up).join('/') + '/') return route.includes('/api/') ? 'CROSS_BUCKET' : 'CROSS_TREE';
  if (up === 0) return 'PARENT_DIR';
  if (up === 1) return 'API_REFERENCE';
  if (up === 2) return 'LANG_HOME';    // ../../
  if (up === 3) return 'VERSION_HOME'; // ../../../
  return 'LEVEL_' + up;
}

function planBucket(bkt) {
  const kids = childrenOf(bkt.dir);
  if (!bkt.lines) return { bkt, kids, add: [], insertAt: null, note: 'NO_INDEX_MD', alreadyInProse: [], proposedLines: null };
  const L = bkt.lines;
  const block = bkt.b >= 0 && bkt.e > bkt.b ? L.slice(bkt.b + 1, bkt.e) : [];
  const inBlock = new Set();
  let m; const re = new RegExp(linkRe.source, 'g');
  while ((m = re.exec(block.join('\n')))) inBlock.add(m[1]);
  const inProse = new Set();
  const re2 = new RegExp(linkRe.source, 'g');
  const outside = bkt.b >= 0 ? [...L.slice(0, bkt.b), ...L.slice(bkt.e + 1)] : L;
  while ((m = re2.exec(outside.join('\n')))) inProse.add(m[1]);
  const add = kids.filter((k) => !inBlock.has(k.href));
  const alreadyInProse = kids.filter((k) => !inBlock.has(k.href) && inProse.has(k.href));
  // 分组插入点：有 ### X 小节就插进对应小节，否则整体追加到块尾
  const letter = (n) => { const c = n[0].toUpperCase(); return /[A-Z]/.test(c) ? c : '#'; };
  const groups = {};
  for (const k of add) (groups[letter(k.name)] ||= []).push(k);
  let insertAt, proposedLines;
  if (!add.length) { insertAt = null; proposedLines = null; }
  else {
    const headIdx = [];
    block.forEach((l, i) => { const h = headingRe.exec(l); if (h && h[1].length >= 3) headIdx.push(i); });
    const ops = [];
    for (const L2 of Object.keys(groups).sort()) {
      const entries = groups[L2].sort((a, b) => a.name.localeCompare(b.name));
      const target = headIdx.find((i) => block[i].trim() === `### ${L2}`);
      if (target !== undefined) {
        let stop = block.length;
        for (let i = target + 1; i < block.length; i++) if (headingRe.test(block[i])) { stop = i; break; }
        ops.push({ at: target + stop, lines: entries.map((k) => `- [${k.name}](${k.href})`) });
      } else {
        ops.push({ at: block.length, lines: [`### ${L2}`, '', ...entries.map((k) => `- [${k.name}](${k.href})`), ''] });
      }
    }
    ops.sort((a, c) => a.at - c.at);
    const newBlock = [...block];
    for (const op of ops) newBlock.splice(op.at, 0, ...op.lines);
    insertAt = bkt.b + 1;
    proposedLines = newBlock;
  }
  return { bkt, kids, add, alreadyInProse, insertAt, proposedLines, dup: bkt.dup };
}

function applyPlan(p) {
  const { bkt } = p;
  const L = bkt.lines;
  if (bkt.b < 0) {
    // 无 marker：在文件末尾新建一个 marker 块（纯追加，不碰任何已有行）
    const body = ['', BEGIN, '', '## Parent Navigation', '', '- [API Reference](../)', '- [Version Home](../../)', '',
      '## Child Pages — Alphabetical', ''];
    const groups = {};
    for (const k of p.add) { const c = k.name[0].toUpperCase(); (groups[/[A-Z]/.test(c) ? c : '#'] ||= []).push(k); }
    for (const g of Object.keys(groups).sort()) {
      body.push(`### ${g}`, '');
      for (const k of groups[g].sort((a, b) => a.name.localeCompare(b.name))) body.push(`- [${k.name}](${k.href})`);
      body.push('');
    }
    body.push(END, '');
    return [...L, ...body.slice(1)].join('\n');
  }
  const next = [...L];
  if (!p.proposedLines) return next.join('\n');
  next.splice(p.insertAt, p.bkt.e - p.bkt.b - 1, ...p.proposedLines);
  return next.join('\n');
}

/** 删除/改写行数：原文每一条非空行都必须在新文里原样出现（多重集口径）。纯插入 ⇒ 恒为 0。 */
function deletedOrRewritten(original, next) {
  const pool = new Map();
  for (const l of next.split(/\r?\n/)) pool.set(l, (pool.get(l) || 0) + 1);
  let lost = 0;
  for (const l of original.split(/\r?\n/)) {
    if (!l.trim()) continue;
    const n = pool.get(l) || 0;
    if (n === 0) { lost++; continue; }
    pool.set(l, n - 1);
  }
  return lost;
}
/** marker 块之外必须逐字节全等 */
function outsideChanged(bkt, original, next) {
  const cut = (s) => {
    const L = s.split(/\r?\n/);
    const b = L.findIndex((l) => l.trim() === BEGIN), e = L.findIndex((l) => l.trim() === END);
    if (b < 0 || e < b) return L;
    return [...L.slice(0, b), ...L.slice(e + 1)];
  };
  return cut(original).join('\n') !== cut(next).join('\n');
}

function planSummary(p) {
  const { bkt } = p;
  const where = bkt.idx ? bkt.idx : '(缺 _index.md)';
  if (p.note === 'NO_INDEX_MD') return `BUCKET=${p.bkt.dir}  children=${p.kids.length}  PLANNED=0  NOTE=NO_INDEX_MD（目录没有 _index.md；新建整页超出「机械子页清单」授权，见 _NAV-ARCHITECTURE.md 待裁定项）`;
  const head = `BUCKET=${bkt.dir}  children=${p.kids.length}  ALREADY_IN_BLOCK=${p.kids.length - p.add.length}  ADD=${p.add.length}  ALSO_LINKED_IN_PROSE=${p.alreadyInProse.length}  MARKER=${bkt.b >= 0 ? 'existing' : 'new'}  BEGIN=${bkt.beginCount} END=${bkt.endCount}${bkt.dup ? '  **DUPLICATE_MARKER**' : ''}`;
  return head;
}

// ── --self-test：fixture 覆盖 正常桶 / 重复 marker / 无 marker 桶 / 无 _index 目录 ──
async function selfTest() {
  const fails = [];
  const ok = (n, c, d) => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n}${d ? '  ' + d : ''}`); if (!c) fails.push(n); };
  const dir = fs.mkdtempSync(path.join(fs.realpathSync(process.env.TEMP || '.'), 'navsi-'));
  const w = (rel, body) => { const p = path.join(dir, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, body); };
  try {
    // (a) 正常桶：已有 B 组小节，缺 A、B
    w('t1/api/_index.md', '# T1\n\n## prose\n\nkeep me\n\n' + BEGIN + '\n\n## Child Classes\n\n### B\n\n- [Beta](./Beta)\n\n' + END + '\n');
    w('t1/api/Alpha.md', '# Alpha\n'); w('t1/api/Beta.md', '# Beta\n'); w('t1/api/Gamma.md', '# Gamma\n');
    w('t1/api/Sub/_index.md', '# Sub\n');
    // (b) 重复 marker
    w('t2/api/_index.md', '# T2\n' + BEGIN + '\n' + BEGIN + '\n\n- [Beta](./Beta)\n\n' + END + '\n');
    w('t2/api/Alpha.md', '# Alpha\n'); w('t2/api/Beta.md', '# Beta\n');
    // (c) 无 marker 桶（有散文）
    w('t3/api/_index.md', '# T3\n\nprose line one\n\nprose line two\n');
    w('t3/api/Alpha.md', '# Alpha\n');
    // (d) 无 _index.md 的目录
    w('t4/api/Alpha.md', '# Alpha\n');

    const P = (d) => planBucket(readBucket(path.join(dir, d)));
    const a = P('t1/api');
    ok('正常桶：只新增缺失项', a.add.length === 3 && a.add.map((k) => k.name).join(',') === 'Alpha,Gamma,Sub', JSON.stringify(a.add.map((k) => k.href)));
    // boss 门禁：只生成同桶子页清单时，每条新链接的路由语义标签必须恒为 SIBLING
    const badSem = a.add.filter((k) => semantics(path.join(dir, 't1/api'), k.href, routeOfHref(path.join(dir, 't1/api'), k.href)) !== 'SIBLING');
    ok('生成链接的路由语义恒为 SIBLING', badSem.length === 0, badSem.map((k) => k.href).join(','));
    ok('层级规则：../ = API 参考 / ../../ = 语言首页 / ../../../ = 版本首页',
      semantics('content/v1.4.5/en/api/campaign', '../', 'content/v1.4.5/en/api/') === 'API_REFERENCE'
      && semantics('content/v1.4.5/en/api/campaign', '../../', 'content/v1.4.5/en/') === 'LANG_HOME'
      && semantics('content/v1.4.5/en/api/campaign', '../../../', 'content/v1.4.5/') === 'VERSION_HOME',
      JSON.stringify(['../', '../../', '../../../'].map((h) => semantics('content/v1.4.5/en/api/campaign', h, routeOfHref('content/v1.4.5/en/api/campaign', h)))));

    // 分层断言（boss：断「返回的层 == 期望的层」，不能只断「解析成功」）。6 层各一例。
    const B = 'content/v1.4.5/en/api/campaign';
    const layers = [['./Hero', -1], ['../', 1], ['../../', 2], ['../../../', 3],
      ['../mission/Mission', -1], ['../../../../v1.3.0/en/api/campaign/Hero', -1]];
    for (const [h, want] of layers) {
      const got = layerUp(B, h, 'BUCKET_INDEX');
      ok(`分层断言 BUCKET_INDEX ${h} => up=${want}`, got === want, `got=${got} route=${routeOfHref(B, h)}`);
    }
    // 🔴 位置相关性：同桶兄弟在叶子页里必须写 ../Foo，./Foo 会多一层且静默错误
    const L = 'content/v1.4.5/en/api/campaign/Hero.md';
    ok('位置相关：叶子页写 ./Foo 落在 Hero/ 里（静默错误层）',
      routeOfHref('content/v1.4.5/en/api/campaign', './Foo', 'LEAF_PAGE') === 'content/v1.4.5/en/api/campaign/<Page>/Foo/');
    ok('位置相关：叶子页写 ../Foo 才落到桶里', layerUp(L, '../Foo', 'LEAF_PAGE') === 0 && layerUp(L, './Foo', 'LEAF_PAGE') === -1);
    const aNext = applyPlan(a);
    ok('正常桶：删除/改写行数 = 0', deletedOrRewritten(a.bkt.lines.join('\n'), aNext) === 0);
    ok('正常桶：marker 块之外全等', !outsideChanged(a.bkt, a.bkt.lines.join('\n'), aNext));
    ok('正常桶：新条目进了 B 组', aNext.includes('### B') && aNext.includes('- [Alpha](./Alpha)') && aNext.includes('- [Sub](./Sub/)'));
    ok('正常桶：散文未被触碰', aNext.includes('keep me') && aNext.includes('prose'));

    const b = P('t2/api');
    ok('重复 marker：确定性取第一个 BEGIN→第一个 END', b.bkt.beginCount === 2 && b.bkt.endCount === 1 && b.bkt.dup === true, `BEGIN=${b.bkt.beginCount} END=${b.bkt.endCount}`);
    ok('重复 marker：报告而不崩', planSummary(b).includes('DUPLICATE_MARKER'));
    const bNext = applyPlan(b);
    ok('重复 marker：不删多余 BEGIN 行（禁止项）', bNext.split(/\r?\n/).filter((l) => l.trim() === BEGIN).length === 2);

    const c = P('t3/api');
    ok('无 marker 桶：新建 marker 块', c.bkt.b === -1 && c.add.length === 1);
    const cNext = applyPlan(c);
    ok('无 marker 桶：删除/改写行数 = 0', deletedOrRewritten(c.bkt.lines.join('\n'), cNext) === 0);
    ok('无 marker 桶：原有散文逐行保留', c.bkt.lines.every((l) => cNext.includes(l)));

    const d = P('t4/api');
    ok('无 _index.md 目录：只报告不新建整页', d.note === 'NO_INDEX_MD' && planSummary(d).includes('NO_INDEX_MD'));

    // 幂等：把计划写进 fixture 文件后再跑一次，必须 0 改动
    fs.writeFileSync(path.join(dir, 't1/api/_index.md'), aNext);
    const a2 = P('t1/api');
    ok('幂等：第二次 ADD=0', a2.add.length === 0, `add=${a2.add.length}`);
    ok('幂等：第二次内容逐字节相同', applyPlan(a2) === aNext);

    // 阳性对照：护栏缺失时 --apply 必须拒绝（fail closed）
    const g = await loadGuard();
    if (!g.available) ok('护栏缺失 → 拒绝 --apply（fail closed）', true, `reason=${g.reason}`);
    else ok('护栏已在位', true);

    // 阳性对照（boss 要求）：deletedOrRewritten 必须【能触发】。构造一个必删一行的场景，
    // 断言它 > 0。事故记录：它曾写成 split('\\r?\\n/')（正则当字符串），断言结构性失效。
    const orig = 'a\nb\nc\n';
    ok('deletedOrRewritten 断言会触发（不是恒 0）', deletedOrRewritten(orig, 'a\nb\n') === 1, `got=${deletedOrRewritten(orig, 'a\nb\n')} want=1`);
    ok('deletedOrRewritten 对改写也触发', deletedOrRewritten('a\nb\n', 'a\nB\n') === 1);
    ok('outsideChanged 会触发', outsideChanged(readBucket(path.join(dir, 't1/api')), 'x', 'y') === true);
  } finally { try { fs.rmSync(dir, { recursive: true, force: true }); } catch {} }
  console.log(`SELFTEST_FAILURES=${fails.length}` + (fails.length ? '  -> ' + fails.join(', ') : ''));
  return fails.length ? 1 : 0;
}

if (has('--self-test')) process.exit(await selfTest());
if (!MODE) { console.error('用法：--dry-run <dir...> 或 --apply <dir...>'); process.exit(2); }
if (!DIRS.length) { console.error('没有指定桶目录'); process.exit(2); }
if (DIRS.length !== argv.slice(1).filter((a) => !a.startsWith('--')).length) { console.error('桶目录参数解析不一致'); process.exit(2); }
for (const d of DIRS) if (!fs.existsSync(d) || !fs.statSync(d).isDirectory()) { console.error('不是目录: ' + d); process.exit(2); }

// ── 主流程 ────────────────────────────────────────────────────────────────
const plans = DIRS.map((d) => planBucket(readBucket(d)));
let totalAdded = 0, maxDeleted = 0;
const report = [];

// dry-run 报告第一行必须是 DELETED_OR_REWRITTEN_LINES
for (const p of plans) {
  const orig = p.bkt.lines ? p.bkt.lines.join('\n') : '';
  const next = p.note ? orig : applyPlan(p);
  const del = p.note ? 0 : deletedOrRewritten(orig, next);
  maxDeleted = Math.max(maxDeleted, del);
  totalAdded += p.add.length;
  report.push(planSummary(p));
  if (p.add.length && !p.note) {
    let badSem = 0;
    for (const k of p.add) {
      const route = routeOfHref(p.bkt.dir, k.href);
      const sem = semantics(p.bkt.dir, k.href, route);
      if (sem !== 'SIBLING') badSem++;
      if (p.add.indexOf(k) < 10) report.push(`   + ${k.href}  |  route=${route}  |  ${sem}  |  ${k.kind}`);
    }
    if (p.add.length > 10) report.push(`   ... 共 ${p.add.length} 条`);
    // boss 门禁：同桶子页清单里出现非 SIBLING 语义 = 目录遍历跑出了本桶 ⇒ fail closed
    if (badSem) { console.error(`ROUTE_SEMANTICS_VIOLATION: ${p.bkt.dir} 有 ${badSem} 条不是 SIBLING —— 拒绝继续`); process.exit(1); }
  }
  if (p.alreadyInProse.length) report.push(`   NOTE_ALREADY_LINKED_IN_PROSE=${p.alreadyInProse.length}（散文中已链到，不重复进清单）`);
  if (p.dup) report.push(`   PROPOSAL_NOT_DONE_DUPLICATE_MARKER: ${p.bkt.dir} BEGIN=${p.bkt.beginCount} END=${p.bkt.endCount}。删掉多余 BEGIN 行属于 marker 块之外的改动，落在「禁止改动已有人工内容」与「只写 marker 块内」的缝里，本轮按 boss 裁定【不删】。需要单独授权才能修。`);
}
const g = await loadGuard();
report.unshift(`DELETED_OR_REWRITTEN_LINES=${maxDeleted}`);
report.splice(1, 0, `GUARD_STATUS=${g.available ? 'PRESENT' : 'ABSENT(' + g.reason + ')'}`);
report.push(`TOTAL_ADD=${totalAdded}  BUCKETS=${plans.length}  MODE=${MODE}`);
console.log(report.join('\n'));

if (maxDeleted !== 0) { console.error('DELETED_OR_REWRITTEN_LINES != 0 —— 拒绝写入'); process.exit(1); }
if (MODE === 'dry-run') process.exit(0);

// --apply：护栏必须先于写入器存在
if (!g.available) { console.error(`GUARD_ABSENT: assertStructuralScope() 未落盘（${g.reason}），拒绝对 content/ 写入。绝不降级为「只做 marker 检查照写」——那等于把护栏废掉。`); process.exit(2); }
for (const p of plans) {
  if (p.note === 'NO_INDEX_MD' || !p.add.length) continue;
  const orig = p.bkt.lines.join('\n');
  const next = applyPlan(p);
  const ga = callGuard(g, { mode: 'apply', targetPath: p.bkt.idx, originalText: orig, newText: next, marker: { begin: BEGIN, end: END } });
  if (!ga.available) { console.error('GUARD_REJECTED: ' + ga.reason); process.exit(1); }
  fs.writeFileSync(p.bkt.idx, next, 'utf8');
  // 写入后独立断言（不依赖写入逻辑本身）
  const back = fs.readFileSync(p.bkt.idx, 'utf8');
  const lost = deletedOrRewritten(orig, back);
  const outChanged = outsideChanged(p.bkt, orig, back);
  if (lost !== 0 || outChanged) {
    fs.writeFileSync(p.bkt.idx, orig, 'utf8');   // 回滚
    console.error(`POST_WRITE_ASSERT_FAILED: ${p.bkt.dir} lost=${lost} outsideChanged=${outChanged} —— 已回滚`);
    process.exit(1);
  }
  console.log(`APPLIED ${p.bkt.dir}  added=${p.add.length}  lost=0  outsideChanged=false`);
}
process.exit(0);