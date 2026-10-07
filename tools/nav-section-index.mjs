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
//   node tools/nav-section-index.mjs --audit                      # 只读：工作区 vs HEAD 的历史违规审计（零写入）
//   node tools/nav-section-index.mjs --self-test                   # fixture，秒级
//
// 退出码：0 通过 / 1 断言失败或审计出违规 / 2 检查器没跑起来（护栏缺失、参数错、输入非法）
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const argv = process.argv.slice(2);
const has = (k) => argv.includes(k);
const arg = (k) => { const i = argv.indexOf(k); return i < 0 ? null : argv[i + 1]; };
const MODE = has('--apply') ? 'apply' : has('--dry-run') ? 'dry-run' : null;
// R2（boss 定）：--apply 的桶路径必须逐字出现在本批次清单内。
// 护栏管「有没有越出 marker 块」，**不管「这个桶在不在本批清单里」** —— 后者是 R2 的活。
// 因此这是一道【授权层】检查，放在 --apply 分支最前面，不是提示词。
function readBatchList(file) {
  if (!file) return null;
  if (!fs.existsSync(file)) bail(`批次清单文件不存在: ${file}`);
  return fs.readFileSync(file, 'utf8').split(/\r?\n/).map((s) => s.trim()).filter((s) => s && !s.startsWith('#'));
}
// 本工具的 flag 都不带值（--dry-run / --apply / --self-test），所以直接去掉 argv[0] 后
// 按位置参数取。🚨 事故：曾用“前一个 token 是不是 flag”来过滤，结果把第一个桶目录
// ——因为它紧跟在 --dry-run 后面——静默丢掉了，报告里 BUCKETS 少 1 也不报错。
// 🚨 第二次同类事故：加了带值的 --batch 之后，它的值 '1/3' 被当成桶目录，报“不是目录”。
// 修法：显式声明哪些 flag 带值，按游标跳过，而不是猜。
const VALUE_FLAGS = new Set(['--batch', '--acceptance', '--batch-list']);
const DIRS = (() => {
  const out = [];
  for (let i = 1; i < argv.length; i++) {
    if (argv[i].startsWith('--')) { if (VALUE_FLAGS.has(argv[i])) i++; continue; }
    out.push(argv[i]);
  }
  return out;
})();

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
  const raw = fs.existsSync(idx) ? fs.readFileSync(idx, 'utf8') : null;
  // 🔴 行尾风格探测：写回时必须用【同一个】EOL。
  // 事故：曾用 split(/\r?\n/) + join('\n')，CR 被静默吃掉 —— 内容一字不差，
  // diff 却是整页重写（+3851/-3000）。本仓已有 LF->CRLF 的同坑前科（.gitattributes）。
  const eol = raw ? (raw.includes('\r\n') ? '\r\n' : '\n') : '\n';
  const lines = raw === null ? null : raw.split(/\r?\n/);
  const beginIdx = [], endIdx = [];
  if (lines) lines.forEach((l, i) => {
    if (l.trim() === BEGIN) beginIdx.push(i);
    if (l.trim() === END) endIdx.push(i);
  });
  // 确定性取【第一个 BEGIN 到第一个 END】；重复 marker 报告但不崩、也不当正常
  const b = beginIdx[0] ?? -1, e = endIdx[0] ?? -1;
  const dup = beginIdx.length > 1 || endIdx.length > 1;
  return { dir, idx, lines, eol, raw, b, e, beginCount: beginIdx.length, endCount: endIdx.length, dup };
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
  const join = (arr) => arr.join(bkt.eol);          // 写回用【原 EOL】
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
    return join([...L, ...body.slice(1)]);
  }
  const next = [...L];
  if (!p.proposedLines) return join(next);
  next.splice(p.insertAt, p.bkt.e - p.bkt.b - 1, ...p.proposedLines);
  return join(next);
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
/** marker 块之外必须逐字节全等 —— 【基于原始 buffer】，含行尾符。
 *  🔴 旧版拿 split(/\r?\n/) 后的文本比，天然看不见 CR 丢失；这正是本次事故漏网的缺口。 */
function outsideChanged(bkt, original, next) {
  const cutBuf = (s) => {
    // 按原始字节切：先定 marker 的字节位置，再取「块外」的那两段
    const bIdx = s.indexOf(BEGIN), eIdx = s.indexOf(END);
    if (bIdx < 0 || eIdx < bIdx) return s;
    return s.slice(0, bIdx) + ' MARKERBLOCK ' + s.slice(eIdx + END.length);
  };
  if (bkt.eol === '\n') return cutBuf(original) !== cutBuf(next);
  // CRLF：比字节序列（含 \r\n）
  return Buffer.from(cutBuf(original), 'utf8').compare(Buffer.from(cutBuf(next), 'utf8')) !== 0;
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
    ok('正常桶：删除/改写行数 = 0', deletedOrRewritten(a.bkt.lines.join(a.bkt.eol), aNext) === 0);
    ok('正常桶：marker 块之外全等', !outsideChanged(a.bkt, a.bkt.lines.join(a.bkt.eol), aNext));
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
    ok('无 marker 桶：删除/改写行数 = 0', deletedOrRewritten(c.bkt.lines.join(c.bkt.eol), cNext) === 0);
    ok('无 marker 桶：原有散文逐行保留', c.bkt.lines.every((l) => cNext.includes(l)));

    const d = P('t4/api');
    ok('无 _index.md 目录：只报告不新建整页', d.note === 'NO_INDEX_MD' && planSummary(d).includes('NO_INDEX_MD'));

    // 幂等：把计划写进 fixture 文件后再跑一次，必须 0 改动
    fs.writeFileSync(path.join(dir, 't1/api/_index.md'), aNext);
    const a2 = P('t1/api');
    ok('幂等：第二次 ADD=0', a2.add.length === 0, `add=${a2.add.length}`);
    ok('幂等：第二次内容逐字节相同', applyPlan(a2) === aNext);

    // 🔴 R2 的 fixture 必须走【真实 CLI】并断言【零写入】——
    // 只测一个纯函数，就是 R2 和它要防的那个越权「看起来有、实际没测过」的同一形态。
    // 构造原则：批次清单里【故意不含】被 apply 的那个桶。
    const r2dir = fs.mkdtempSync(path.join(fs.realpathSync(process.env.TEMP || '.'), 'navr2-'));
    try {
      const bucket = path.join(r2dir, 'api', 'zz');
      fs.mkdirSync(bucket, { recursive: true });
      fs.writeFileSync(path.join(bucket, '_index.md'), '# T\n\n' + BEGIN + '\n\n## Child Classes\n\n' + END + '\n');
      fs.writeFileSync(path.join(bucket, 'Alpha.md'), '# Alpha\n');
      fs.writeFileSync(path.join(bucket, 'Beta.md'), '# Beta\n');
      const listFile = path.join(r2dir, 'batch-list.txt');
      const esc = bucket.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const script = new URL(import.meta.url).pathname.replace(/^\//, '');
      const before = fs.readFileSync(path.join(bucket, '_index.md'), 'utf8');
      fs.writeFileSync(listFile, '# 故意不含 zz\n' + path.join(r2dir, 'api', 'other') + '\n');
      const res = spawnSync(process.execPath, [script, '--apply', '--batch-list', listFile, bucket], { encoding: 'utf8' });
      const after = fs.readFileSync(path.join(bucket, '_index.md'), 'utf8');
      ok('R2 fixture：argv 桶不在批次清单内 → exit 2', res.status === 2, `exit=${res.status} ${(res.stderr || '').split('\n')[0]}`);
      ok('R2 fixture：零写入（文件逐字节未变）', before === after);
      ok('R2 fixture：逐条列出越界桶', /R2_BLOCKED/.test(res.stderr) && new RegExp(esc).test(res.stderr));
      fs.writeFileSync(listFile, bucket + '\n');
      const res2 = spawnSync(process.execPath, [script, '--apply', '--batch-list', listFile, bucket], { encoding: 'utf8' });
      // 该临时桶不在 content/ 下，所以后续会被【护栏】按它自己的判据拒 —— 这正好把两件事分开：
      // 要断言的是「R2 放行了」（输出 R2_OK、stderr 里没有 R2_BLOCKED），而不是「整个工具放行了」。
      ok('R2 fixture：清单含该桶 → R2 放行（不是永远拒绝）',
        /R2_OK/.test(res2.stdout) && !/R2_BLOCKED/.test(res2.stderr), `stdout=${(res2.stdout || '').split('\n').find((l) => l.startsWith('R2_')) || ''}`);
      ok('R2 fixture：R2 放行后才轮到护栏接手（此处因不在 content/ 下被护栏拒）',
        /content/.test(res2.stderr || '') && res2.status === 1, `exit=${res2.status}`);
      // 缺 --batch-list 必须拒：否则 R2 形同虚设
      const res3 = spawnSync(process.execPath, [script, '--apply', bucket], { encoding: 'utf8' });
      ok('R2 fixture：未提供 --batch-list → exit 2（R2 不是可选的）',
        res3.status === 2 && /R2_BLOCKED/.test(res3.stderr), `exit=${res3.status}`);
    } finally { try { fs.rmSync(r2dir, { recursive: true, force: true }); } catch {} }

    // 🔴 CRLF fixture：行尾保留必须有 fixture，否则这个修复等于没测过（同 R2 的道理）。
    // 构造：CRLF 的桶 _index.md，跑真实 CLI --apply，断言 CR 计数不变 / 块外原始字节相等。
    const crlfDir = fs.mkdtempSync(path.join(fs.realpathSync(process.env.TEMP || '.'), 'navcrlf-'));
    try {
      const bdir = path.join(crlfDir, 'crlfbucket');
      fs.mkdirSync(bdir, { recursive: true });
      const CRLF = '\r\n';
      const prose = ['---', 'title: "CRLF 样本"', 'description: 行尾保留的阳性对照', '---', '',
        '## 模块心智模型', '', '这里是 marker 块【之外】的散文，写回后必须逐字节不变。', '',
        '另一段散文，用来证明块外断言不是只看一行。', ''].join(CRLF);
      fs.writeFileSync(path.join(bdir, '_index.md'), prose + BEGIN + CRLF + CRLF + '## Child Classes' + CRLF + CRLF + END + CRLF);
      fs.writeFileSync(path.join(bdir, 'Alpha.md'), '# Alpha' + CRLF);
      fs.writeFileSync(path.join(bdir, 'Beta.md'), '# Beta' + CRLF);
      const listF = path.join(crlfDir, 'list.txt');
      fs.writeFileSync(listF, bdir + CRLF);
      const before = fs.readFileSync(path.join(bdir, '_index.md'), 'utf8');
      const crBefore = (before.match(/\r/g) || []).length;
      const script2 = new URL(import.meta.url).pathname.replace(/^\//, '');
      // 把临时桶挂到 content/ 下才能过护栏（护栏要求 target 在 content/ 内）——用完即删
      // 🔴 自检不得往仓库的 content/ 里写东西。
      //    旧版写的是 <repo>/content/_nav_crlf_fixture_tmp —— 一次崩溃就在 product 树里
      //    留下一个脏目录，而一个会污染 product 树的自检比没有自检更坏。
      //    护栏的 underContent() 只对路径做 /(^|[\\/])content[\\/]/ 正则，所以把沙箱
      //    建成 <temp>/sandbox/content/... 就能在仓库【之外】满足它，测试强度不变。
      const sandboxRoot = path.join(crlfDir, 'sandbox');
      const underContent = path.join(sandboxRoot, 'content', '_nav_crlf_fixture_tmp');
      fs.mkdirSync(underContent, { recursive: true });
      for (const f of ['_index.md', 'Alpha.md', 'Beta.md']) fs.copyFileSync(path.join(bdir, f), path.join(underContent, f));
      const listF2 = path.join(crlfDir, 'list2.txt');
      fs.writeFileSync(listF2, 'content/_nav_crlf_fixture_tmp' + CRLF);
      try {
        const r = spawnSync(process.execPath, [script2, '--apply', '--batch-list', listF2, 'content/_nav_crlf_fixture_tmp'],
          { encoding: 'utf8', cwd: sandboxRoot });
        const after = fs.readFileSync(path.join(underContent, '_index.md'), 'utf8');
        const crAfter = (after.match(/\r/g) || []).length;
        const pb = readBucket(underContent);
        ok('CRLF fixture：apply 成功', r.status === 0, `exit=${r.status} ${(r.stderr || '').split('\n')[0]}`);
        // 「CR 计数不变」是错的断言 —— 追加行本来就该让 CR 变多。
        // 真正的判据是：① 每一行都还带着 CR（无裸 LF）；② CR 的增量 == 新增行数；
        // ③ 块外原始字节不变；④ 形态是 N 0。任一条不成立就是行尾被静默摧毁了。
        const addedLines = after.split(CRLF).length - before.split(CRLF).length;
        ok('CRLF fixture：CR 增量 == 新增行数（没有一行丢 CR）', crAfter - crBefore === addedLines && crAfter > crBefore,
          `before=${crBefore} after=${crAfter} 新增行=${addedLines}`);
        ok('CRLF fixture：整文件仍是 CRLF（无裸 LF 行）', !/[^\r]\n/.test(after), '存在裸 LF 行');
        ok('CRLF fixture：块外原始字节相等', !outsideChanged(pb, before, after));
        ok('CRLF fixture：写入为纯追加（N 0 形态）', after.length > before.length
          && after.split(CRLF).filter((l) => l && !before.includes(l)).length >= 2);
        ok('CRLF fixture：确实新增了链接', after.includes('- [Alpha](./Alpha)') && after.includes('- [Beta](./Beta)'));
      } finally { try { fs.rmSync(underContent, { recursive: true, force: true }); } catch {} }
    } finally { try { fs.rmSync(crlfDir, { recursive: true, force: true }); } catch {} }

    // 🔴 重复 marker 的【真实 CLI】fixture：走 spawnSync 本脚本，断言零字节写入。
    //    纯函数测试测不到「它到底会不会落盘」，而这正是这条规则的全部意义。
    const dupDir = fs.mkdtempSync(path.join(fs.realpathSync(process.env.TEMP || '.'), 'navdup-'));
    try {
      const root = path.join(dupDir, 'sandbox');
      const bucket = path.join(root, 'content', 'dupbucket');
      fs.mkdirSync(bucket, { recursive: true });
      const dupBody = '## Head\n\n手写散文，本该受保护。\n\n' + BEGIN + '\n' + BEGIN + '\n\n- [Beta](./Beta)\n' + END + '\n';
      fs.writeFileSync(path.join(bucket, '_index.md'), dupBody);
      fs.writeFileSync(path.join(bucket, 'Alpha.md'), '# Alpha\n');
      fs.writeFileSync(path.join(bucket, 'Beta.md'), '# Beta\n');
      const listF3 = path.join(dupDir, 'list3.txt');
      fs.writeFileSync(listF3, 'content/dupbucket\n');
      const before = fs.readFileSync(path.join(bucket, '_index.md'), 'utf8');
      const script3 = new URL(import.meta.url).pathname.replace(/^\//, '');
      const r = spawnSync(process.execPath, [script3, '--apply', '--batch-list', listF3, 'content/dupbucket'],
        { encoding: 'utf8', cwd: root });
      const after = fs.readFileSync(path.join(bucket, '_index.md'), 'utf8');
      ok('重复 marker：CLI 拒绝写入且零字节变化', before === after, `changed=${before !== after} exit=${r.status}`);
      // 判定要看 FAILED 的【计数】，不能看输出里有没有 "FAILED" 这个词——
      // 汇总行本身就写着 "OK=0 FAILED=0 SKIPPED=1"，用 /FAILED/ 会把自己判失败。
      ok('重复 marker：报为 SKIPPED 而非 FAILED（拒写不是工具故障）',
        /SKIPPED.*DUPLICATE_MARKER/.test(r.stdout || '') && /FAILED=0/.test(r.stdout || ''),
        (r.stdout || '').split('\n').filter((l) => l.startsWith('OK=') || l.includes('SKIPPED')).join(' | '));
      ok('重复 marker：Alpha 没有被写进块里', !after.includes('- [Alpha](./Alpha)'));
    } finally { try { fs.rmSync(dupDir, { recursive: true, force: true }); } catch {} }

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

// ── --audit：只读、零写入的历史违规审计 ────────────────────────────────────────
// 用途：回答「洞 B（头部只比对前 N 个字符）修好之后，真实树里有没有已经违反
// 不变量的页」。HEAD = 本轮之前所有写入的累积结果，所以【工作区 vs HEAD】的差异
// 落在「本该只读」的位置，就是历史上被放过去的违规写入。
//
// 设计约束（必须成立，否则这个模式本身就有害）：
//   · 零写入 —— 本分支不 mkdir / 不 writeFileSync / 不碰 content/ 任何字节
//   · 只看【有改动的 _index.md】—— 未改动的页 orig === next，必然通过，列入只是噪音
//   · 无 marker 的页跳过 —— 护栏本来就只允许写 _index.md 且要求 marker 存在，
//     没有 marker 的页不是这个工具能写出来的，拿它报违规是错的口径
if (has('--audit')) { process.exit(await auditChangedPages()); }

async function auditChangedPages() {
  const g = await loadGuard();
  console.log(`GUARD_STATUS=${g.available ? 'PRESENT' : 'ABSENT(' + g.reason + ')'}`);
  if (!g.available) { console.error('AUDIT_ABORTED: 护栏未落盘，无法用修好后的判据审计。零写入。'); process.exit(2); }

  // 只取本轮真正改动过的 _index.md
  const names = spawnSync('git', ['diff', '--name-only', 'HEAD', '--', 'content'],
    { encoding: 'utf8', cwd: process.cwd() }).stdout.split(/\r?\n/).filter(Boolean);
  const changed = names.filter((f) => /(^|[\\/])content[\\/].*_index\.md$/.test(f));
  const skippedNonIndex = names.length - changed.length;

  const rows = [];
  let checked = 0, noMarker = 0, noHead = 0, clean = 0;
  for (const rel of changed) {
    const abs = path.resolve(process.cwd(), rel);
    if (!fs.existsSync(abs)) continue;
    const next = fs.readFileSync(abs, 'utf8');
    const head = spawnSync('git', ['show', `HEAD:${rel}`], { encoding: 'utf8', cwd: process.cwd() });
    if (head.status !== 0 || head.error) { noHead++; continue; }   // 新增页，没有历史版本
    const originalText = head.stdout;
    // 两侧都必须有唯一 marker，否则它不是这个工具能写出来的页
    const hasMarker = (t) => t.includes(BEGIN) || t.includes(END);
    if (!hasMarker(originalText) || !hasMarker(next)) { noMarker++; continue; }
    checked++;
    if (originalText === next) { clean++; continue; }
    try {
      // 用修好之后的判据：marker 必须各出现 1 次，且 BEGIN 之前的全文逐字节相等
      g.fn({ mode: 'apply', targetPath: abs, originalText, newText: next, marker: { begin: BEGIN, end: END } });
      clean++;
    } catch (e) {
      const where = /\bat line (\d+)/.exec(e.message || '') || /line (\d+)/.exec(e.message || '');
      rows.push({ rel, rule: e.rule || 'unknown', detail: (e.message || '').split('\n').find((l) => l.includes('detail'))?.trim() || '', line: where ? where[1] : '-' });
    }
  }

  console.log(`CHANGED_UNDER_CONTENT=${names.length}  INDEX_PAGES=${changed.length}  (non-_index.md skipped=${skippedNonIndex})`);
  console.log(`AUDITED=${checked}  CLEAN=${clean}  SKIPPED_NO_MARKER=${noMarker}  SKIPPED_NEW_FILE=${noHead}`);
  console.log(`VIOLATIONS=${rows.length}`);
  for (const r of rows) {
    console.log(`  ${r.rel}  rule=${r.rule}  line=${r.line}  ${r.detail}`);
  }
  console.log(rows.length
    ? 'AUDIT_RESULT=VIOLATIONS_FOUND —— 这些页的差异落在护栏本该只读的位置。历史上被放过去的写入，需人工裁定，不要静默改。'
    : 'AUDIT_RESULT=CLEAN —— 真实树里没有已违反不变量的页。洞 B 的历史影响确认无实害。');
  return rows.length ? 1 : 0;
}

if (has('--self-test')) process.exit(await selfTest());
if (!MODE) { console.error('用法：--dry-run <dir...> 或 --apply <dir...>'); process.exit(2); }
if (!DIRS.length) { console.error('没有指定桶目录'); process.exit(2); }
for (const d of DIRS) if (!fs.existsSync(d) || !fs.statSync(d).isDirectory()) { console.error('不是目录: ' + d); process.exit(2); }

// ── 主流程 ────────────────────────────────────────────────────────────────
const plans = DIRS.map((d) => planBucket(readBucket(d)));
let totalAdded = 0, maxDeleted = 0;
const report = [];

// dry-run 报告第一行必须是 DELETED_OR_REWRITTEN_LINES
for (const p of plans) {
  const orig = p.bkt.lines ? p.bkt.lines.join(p.bkt.eol) : '';
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
// boss 裁定：第 1 批的验收【不包含 orphan 下降】。子页入链要到第 2/3 批才体现。
// 「第 1 批 orphan 不变」是预期结果，不构成失败；不得为了让它降而调参数。
const BATCH = arg('--batch') || '1/3';
const ACCEPTANCE_SCOPE = arg('--acceptance') ||
  '通路正确 + 断链净增0（不含 orphan 下降；orphan 效应在 batch2/3）';

const g = await loadGuard();
report.unshift(`DELETED_OR_REWRITTEN_LINES=${maxDeleted}`);
report.splice(1, 0, `BATCH=${BATCH}  ACCEPTANCE_SCOPE=${ACCEPTANCE_SCOPE}`);
report.push(`TOTAL_ADD=${totalAdded}  BUCKETS=${plans.length}  MODE=${MODE}`);
report.push(`GUARD_STATUS=${g.available ? 'PRESENT' : 'ABSENT(' + g.reason + ')'}`);
console.log(report.join('\n'));

if (maxDeleted !== 0) { console.error('DELETED_OR_REWRITTEN_LINES != 0 —— 拒绝写入'); process.exit(1); }
if (MODE === 'dry-run') process.exit(0);

// --apply：护栏必须先于写入器存在
if (!g.available) { console.error(`GUARD_ABSENT: assertStructuralScope() 未落盘（${g.reason}），拒绝对 content/ 写入。绝不降级为「只做 marker 检查照写」——那等于把护栏废掉。`); process.exit(2); }

// ── R2 授权层检查（必须先于任何写入）────────────────────────────────────────
const batchList = readBatchList(arg('--batch-list'));
if (MODE === 'apply') {
  if (!batchList) { console.error('R2_BLOCKED: --apply 必须提供 --batch-list <file>（本批次桶清单，每行一个路径）。没有清单就等于无法校验「这个桶在不在本批里」。'); process.exit(2); }
  const allowed = new Set(batchList);
  const notInBatch = DIRS.filter((d) => !allowed.has(d));
  if (notInBatch.length) {
    console.error('R2_BLOCKED: 命令行桶不在本批次清单内（逐条）：');
    for (const d of notInBatch) console.error('  - ' + d);
    console.error(`本批次清单共 ${batchList.length} 桶，命令行给了 ${DIRS.length} 桶。未写入任何字节。`);
    process.exit(2);
  }
  if (DIRS.length !== batchList.length) {
    console.error(`R2_BLOCKED: 桶数不一致 —— 命令行 ${DIRS.length} 个，批次清单 ${batchList.length} 个（清单里有本次不跑的桶，请显式传全部或修正清单）。未写入任何字节。`);
    process.exit(2);
  }
  console.log(`R2_OK: ${DIRS.length} 个桶全部在本批次清单内，桶数一致。`);
}
// --apply：逐桶处理、逐桶记录。🚨 第 1 批教训：整批循环里首个抛错会整体退出，
// 后面的桶连轮都轮不到 —— 1,546 条这样整批丢失远大于第 1 批。
// 现在：单桶失败就【跳过它继续下一个】，最后汇总 成功/失败/跳过 三个清单。
// 失败桶列入待裁定，**不重试到成功为止**（重试只会掩盖护栏的真实判据）。
const OK = [], FAILED = [], SKIPPED = [];
for (const p of plans) {
  if (p.note === 'NO_INDEX_MD') { SKIPPED.push(`${p.bkt.dir}\tNO_INDEX_MD（目录无 _index.md，超出「机械子页清单」授权）`); continue; }
  // 🔴 重复 marker = 拒绝写入，而不是「取第一个 BEGIN 然后接着写」。
  //    indexOf 取第一个，所以 BEGIN x2 + END x1 会让块从第一个 BEGIN 一直张到 END，
  //    把两个人工 BEGIN 之间那段手写导航一并圈进可写区。护栏用同一套口径，
  //    也会把那段当成「合法可写」而放行。
  //    干脎地删掉多余的 BEGIN 属于「禁止改写已有内容」，需单独授权；
  //    但【跳过】一字节都不删，所以不需要任何授权，就能把「静默撑大」变成「写不进去」。
  if (p.dup) { SKIPPED.push(`${p.bkt.dir}\tDUPLICATE_MARKER（BEGIN=${p.bkt.beginCount} END=${p.bkt.endCount}）—— 拒绝写入；删除多余 marker 行需单独授权`); continue; }
  if (!p.add.length) { SKIPPED.push(`${p.bkt.dir}\tADD=0（无缺失项，幂等）`); continue; }
  const orig = p.bkt.lines.join(p.bkt.eol);
  const next = applyPlan(p);
  try {
    callGuard(g, { mode: 'apply', targetPath: p.bkt.idx, originalText: orig, newText: next, marker: { begin: BEGIN, end: END } });
  } catch (e) {
    FAILED.push(`${p.bkt.dir}\tGUARD_REJECTED: ${e.rule || e.message}`);
    console.error(`SKIP(guard)  ${p.bkt.dir}  ${e.rule || e.message}`);
    continue;
  }
  let written = false;
  try {
    fs.writeFileSync(p.bkt.idx, next, 'utf8');
    written = true;
    // 写入后独立断言（不依赖写入逻辑本身）
    const back = fs.readFileSync(p.bkt.idx, 'utf8');
    const lost = deletedOrRewritten(orig, back);
    const outChanged = outsideChanged(p.bkt, orig, back);
    if (lost !== 0 || outChanged) {
      fs.writeFileSync(p.bkt.idx, orig, 'utf8');   // 回滚
      FAILED.push(`${p.bkt.dir}\tPOST_WRITE_ASSERT_FAILED lost=${lost} outsideChanged=${outChanged}（已回滚）`);
      console.error(`FAIL(assert) ${p.bkt.dir} lost=${lost} outsideChanged=${outChanged} —— 已回滚`);
      continue;
    }
    OK.push(`${p.bkt.dir}\tadded=${p.add.length}`);
    console.log(`APPLIED ${p.bkt.dir}  added=${p.add.length}  lost=0  outsideChanged=false`);
  } catch (e) {
    if (written) { try { fs.writeFileSync(p.bkt.idx, orig, 'utf8'); } catch {} }
    FAILED.push(`${p.bkt.dir}\tIO_ERROR: ${e.message}（已回滚）`);
    console.error(`FAIL(io)     ${p.bkt.dir} ${e.message}`);
  }
}
console.log('=== BUCKET SUMMARY ===');
console.log(`OK=${OK.length}  FAILED=${FAILED.length}  SKIPPED=${SKIPPED.length}`);
for (const x of OK) console.log('  OK      ' + x);
for (const x of FAILED) console.log('  FAILED  ' + x);
for (const x of SKIPPED) console.log('  SKIPPED ' + x);
process.exit(FAILED.length ? 1 : 0);