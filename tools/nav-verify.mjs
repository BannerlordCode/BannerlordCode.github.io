// nav-verify.mjs —— 导航链接验证器（只读，不写 content/）。
//
// 与 tools/audit-links.mjs 相互独立（handoff §4 门禁第 5 条：复核必须用不同探针）：
//   · audit-links.mjs  把 href 解析成【文件系统路径】再 existsSync（url/file/either 三模式）
//   · nav-verify.mjs   把 href 解析成【Zola 输出 route】再查 route 表，并额外算 orphan
// 两者在同一棵树上同口径时应给出同一个 BROKEN_LINKS；不一致就是有 bug —— 见 tools/_NAV-BASELINE.md
// 的「口径差异说明」一节。
//
// 🔴 两套口径测的是两件不同的事，引用数字时不要互相否证：
//   · 链接解析口径（本脚本 BROKEN_LINKS / CASE_ONLY）  —— 「href 能不能落到一个真实页面文件」
//   · orphan 口径（下面 routeOf/res/linkRe，逐字照抄 tools/_v146_orphan_check.mjs）—— 「有没有入链」
//   tools/_HANDOFF.md §3.4 那句「`_index` 形式 href 0 次解析成功」只对 orphan 口径成立。
//
// 用法：
//   node tools/nav-verify.mjs                        # 三段数字 + 断链样本（exit 0/1）
//   node tools/nav-verify.mjs --emit-baseline <tsv>  # 落盘断链基线清单
//   node tools/nav-verify.mjs --baseline <tsv>       # 与基线逐条 diff；净增>0 → exit 1
//   node tools/nav-verify.mjs --expect-orphans N     # 实测 orphans != N → exit 2
//   node tools/nav-verify.mjs --evidence <substr>    # 打印命中该子串的每条链接的解析证据
//   node tools/nav-verify.mjs --self-test            # 每个计数器的阳性对照 fixture（秒级，不扫全站）
//
// 退出码（门禁第 4 条，fail closed）：
//   0 = 通过   1 = 发现问题（断链 / 净增断链）   2 = 检查器没跑起来（含 UNTESTABLE 判据）
import fs from 'node:fs';
import path from 'node:path';

const argv = process.argv.slice(2);
const arg = (k) => { const i = argv.indexOf(k); return i < 0 ? null : argv[i + 1]; };
const has = (k) => argv.includes(k) || argv.includes('--selftest') && k === '--self-test';
// 默认【严格】：不因大小写不敏感而放过 href —— 严格模式比 audit-links.mjs 更严。
// --ci-compat 才复刻 audit-links.mjs（Windows existsSync）的大小写兜底，用于与它的 197 对齐。
// 🔴 复刻它会掩盖 MASKED 条断链，所以只作为对比模式，绝不作为验收路径（见 _NAV-BASELINE.md「发现」一节）。
const CI_COMPAT = argv.includes('--ci-compat');
const bail = (msg) => { console.error('NAV_VERIFY_FAIL_CLOSED: ' + msg); process.exit(2); };

// ── orphan 口径：逐字照抄 tools/_v146_orphan_check.mjs:15/16/19，不要「改进」 ──────
const routeOf = (rel) => { const q = rel.split(path.sep).join('/').replace(/\.md$/, ''); return q.endsWith('_index') ? q.replace(/_index$/, '') : q + '/'; };
function res(from, href) { if (/^(https?:|#|mailto:)/.test(href)) return null; const h = href.split('#')[0]; if (!h) return null; const s = from.split('/').filter(Boolean); for (const x of h.split('/')) { if (x === '.' || x === '') continue; if (x === '..') s.pop(); else s.push(x); } const r = s.join('/'); return r.endsWith('/') ? r : r + '/'; }
const linkRe = /\[[^\]]*\]\(([^)\s]+)\)/g;

// ── 链接侧 → route 表的 key ────────────────────────────────────────────────
// 三个分叉都是本脚本解析器的必要修正（不是「改口径」）；orphan 侧口径一个字都没动：
//   1) href 以 `_index` 结尾 → 文件名形式，回退到它所在目录的 route（audit-links 走 .md 命中）
//   2) href 越过根         → posix.normalize 折叠成 '.'/'/'，等价于内容根 route ''
//   3) 大小写               → 见 CASE_UNTESTABLE：Windows 上原理上不可判定，不做静默兜底
const linkKey = (r) => {
  if (r === '' || r === '.' || r === '/') return '';
  if (r.endsWith('/_index')) return r.slice(0, -6);
  return r + '/';
};

function analyze(root, ciCompat) {
  function walk(d, a = []) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) { if (!e.name.startsWith('.') && e.name !== 'public') walk(p, a); }
      else if (e.name.endsWith('.md') || e.name.endsWith('.txt')) a.push(p);
    }
    return a;
  }
  const files = walk(root);
  // 空 universe 必须报错退出，不能报一个漂亮的 0（门禁第 4 条）
  if (!files.length) bail(`未遍历到任何文件（EMPTY_UNIVERSE @ ${root}）—— 这不等于「一切正常」`);

  const relOf = (f) => path.relative(root, f).split(path.sep).join('/');
  const allFiles = files.map(relOf);
  const routes = new Map(); const orphanIn = new Map();
  for (const rel of allFiles) { const r = routeOf(rel); routes.set(r, rel); orphanIn.set(r, 0); }
  const routesCI = new Map();
  for (const [r, rel] of routes) if (!routesCI.has(r.toLowerCase())) routesCI.set(r.toLowerCase(), rel);

  const linksByFile = new Map();
  for (const f of files) {
    const rel = relOf(f);
    const fromUrl = routeOf(rel) + '/';     // 与 routeForFile 等价：_index → dir/，叶页 → Foo/
    const fromOrphan = routeOf(rel);
    const txt = fs.readFileSync(f, 'utf8');
    const list = [];
    let m; const re = new RegExp(linkRe.source, 'g');
    let cursor = 0, lineNo = 0;
    while ((m = re.exec(txt))) {
      while (cursor < m.index) { if (txt.charCodeAt(cursor) === 10) lineNo++; cursor++; }
      cursor = m.index;
      const href = m[1].split(/\s/)[0];   // linkRe 只捕获 href（照抄 orphan 口径）
      const text = /^\[([^\]]*)\]/.exec(m[0])?.[1] ?? '';
      const l = { text, href, line: lineNo, pos: m.index };
      if (!/^(https?:|mailto:|#)/.test(href)) {
        const h = href.split('#')[0];
        if (!h || h === '.' || h === './') l.selfLink = 1;   // audit-links.mjs 把自链计入 TOTAL_LINKS
        else {
          let r = h.startsWith('/') ? path.posix.normalize(h).replace(/^\//, '')
                                   : path.posix.normalize(path.posix.join(fromUrl, h)).replace(/^\//, '');
          r = r.replace(/\/$/, '');
          if (r === '.') r = '';
          l.route = r;
        }
      }
      list.push(l);
      const tg = res(fromOrphan, href);
      if (tg && routes.has(tg)) orphanIn.set(tg, orphanIn.get(tg) + 1);
    }
    linksByFile.set(rel, list);
  }

  const broken = [];
  let caseAmbiguous = 0;
  const caseAmbiguousSamples = [];
  for (const [rel, list] of linksByFile) for (const l of list) {
    if (l.route === undefined) continue;
    const key = linkKey(l.route);
    let hit = routes.get(key) ?? null;
    if (!hit && ciCompat) {
      // 精确 key 未命中，但仅改大小写就能命中。audit-links.mjs 走 existsSync，在 Windows 上
      // 这条链【算通】——所以保留兜底才能与它的 197 对齐。但它在本平台上不可判定：
      // 同一链接在 Linux 部署上会 404。因此单独计数并列出，绝不静默当成「已修好」。
      const ci = routesCI.get(key.toLowerCase());
      if (ci) {
        hit = ci; l.caseAmbiguous = 1; caseAmbiguous++;
        if (caseAmbiguousSamples.length < 20) caseAmbiguousSamples.push(`${rel} :: [${l.text}](${l.href})  精确=${key}  仅大小写命中=${ci}`);
      }
    }
    l.hit = hit;
    if (!hit) broken.push({ ...l, from: rel });
  }
  const brokenKey = (b) => [b.from, b.href, b.route].join('\t');

  const orphans = [...orphanIn].filter(([, n]) => n === 0).map(([r]) => r);
  const byParent = {}; for (const r of orphans) { const p = r.replace(/[^/]+\/$/, ''); byParent[p] = (byParent[p] || 0) + 1; }
  const byTree = {}; for (const r of orphans) { const s = r.split('/')[0]; byTree[s] = (byTree[s] || 0) + 1; }
  let totalLinks = 0, internalLinks = 0, selfLinks = 0;
  for (const [, l] of linksByFile) { totalLinks += l.length; for (const x of l) { if (x.selfLink) selfLinks++; else if (x.route !== undefined) internalLinks++; } }

  return { root, files: allFiles, routes, linksByFile, broken, brokenKey, brokenSet: new Set(broken.map(brokenKey)),
    caseAmbiguous, caseAmbiguousSamples, orphans, byParent, byTree, totalLinks, internalLinks, selfLinks };
}

// ── 大小写语义：先证明这台机器的 FS 到底区不区分大小写（阳性对照，门禁第 1 条）──
function fsCaseInsensitive() {
  const dir = fs.mkdtempSync(path.join(fs.realpathSync(process.env.TEMP || '.'), 'navcase-'));
  try {
    const real = path.join(dir, 'CaSePrObE.md');
    fs.writeFileSync(real, 'x');
    // 阳性对照：同一路径换大小写后仍存在 ⇒ 该 FS 不区分大小写
    return fs.existsSync(path.join(dir, 'caseprobe.md')) && !fs.existsSync(path.join(dir, 'CasePrObEnope.md'));
  } finally { try { fs.rmSync(dir, { recursive: true, force: true }); } catch {} }
}

// ── --self-test：每个计数器先证明「它能数到东西」 ──────────────────────────────
function selfTest() {
  const dir = fs.mkdtempSync(path.join(fs.realpathSync(process.env.TEMP || '.'), 'navselftest-'));
  const fails = [];
  const ok = (name, cond, detail) => { console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}${detail ? '  ' + detail : ''}`); if (!cond) fails.push(name); };
  const w = (rel, body) => { const p = path.join(dir, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, body); };
  // fixture：1 个 _index、2 个叶子、1 个有入链、1 个孤儿、1 条好链接、1 条断链、1 条大小写错配
  w('v9/_index.md', '# v9\n');
  w('v9/api/_index.md', '- [Ok](./Ok)\n- [Nope](./Nope)\n- [MIS](./ok)\n');
  w('v9/api/Ok.md', '# Ok\n');
  w('v9/api/Orphan.md', '# Orphan\n');
  try {
    const r = analyze(dir, true);   // ci-compat 路径
    const rs = analyze(dir, false); // strict 路径（默认）
    ok('PAGES 计数器能数到东西', r.routes.size === 4, `got=${r.routes.size} want=4`);
    ok('TOTAL_LINKS_INTERNAL 计数器能数到东西', r.internalLinks === 3, `got=${r.internalLinks} want=3`);
    ok('BROKEN_LINKS 计数器能数到东西', r.broken.length === 1 && r.broken[0].href === './Nope', `got=${r.broken.length} ${r.broken.map(b=>b.href)}`);
    ok('FILES_WITH_BROKEN 计数器能数到东西', new Set(r.broken.map(b=>b.from)).size === 1);
    ok('CASE_AMBIGUOUS 计数器能数到东西', r.caseAmbiguous === 1, `got=${r.caseAmbiguous} want=1 (./ok vs Ok.md)`);
    // strict 路径的正向对照：不复刻大小写兜底 ⇒ ./ok 变成断链（比 audit-links.mjs 更严）
    ok('strict 路径：大小写错配被判断链', rs.broken.length === 2 && rs.broken.some((b) => b.href === './ok'), `got=${rs.broken.length} ${rs.broken.map(b=>b.href)}`);
    ok('strict 路径：不产生 CASE_AMBIGUOUS', rs.caseAmbiguous === 0);
    ok('ORPHANS 计数器能数到东西', r.orphans.length === 3 && r.orphans.includes('v9/api/Orphan/'), `got=${JSON.stringify(r.orphans)} want 3 含 v9/api/Orphan/`);
    ok('ORPHAN_PARENTS 计数器能数到东西', r.byParent['v9/api/'] === 1 && r.byParent[''] === 1, JSON.stringify(r.byParent));
    ok('orphan 口径：_index 折叠进目录', r.routes.has('v9/api/'), r.routes.has('v9/api/') ? '' : 'missing v9/api/');

    // 🔴 围栏剥离的阳性对照：每一种围栏形态都要盖住（不许只测一种写法）
    // 围栏字符串在运行时拼出来：编辑工具会吃掉源码里的反引号。
    const BT = String.fromCharCode(96), B3 = BT.repeat(3), B4 = BT.repeat(4), T3 = '~'.repeat(3);
    const f1 = fenceInfo('# t\n\n' + B3 + '\n[a](./b)\n' + B3 + '\n\nreal [c](./c)\n');
    ok('围栏形态：裸 ``` 块', f1.blocks === 1 && f1.set.has(3) && !f1.set.has(6), `blocks=${f1.blocks} set=${[...f1.set]}`);
    const f2 = fenceInfo('# t\n\n```js\n[a](./b)\n```\n');
    ok('围栏形态：``` + 信息串 js', f2.blocks === 1 && f2.set.has(3));
    const f3 = fenceInfo('# t\n\n~~~\n[a](./b)\n~~~\n\n[c](./c)\n');
    ok('围栏形态：裸 ~~~ 块', f3.blocks === 1 && f3.set.has(3) && !f3.set.has(6));
    const f4 = fenceInfo('# t\n\n~~~python\n[a](./b)\n[c](./c)\n');
    ok('围栏形态：~~~ + 信息串 + 未闭合到文末', f4.blocks === 1 && f4.set.has(3) && f4.set.has(4));
    const f5 = fenceInfo('# t\n\ntext with `inline` backticks\n[a](./b)\n');
    ok('围栏形态：行内反引号【不】开启围栏', f5.blocks === 0 && f5.set.size === 0);
    const f6 = fenceInfo('# t\n\n' + B4 + '\n' + B3 + '\n[a](./b)\n' + B3 + '\n' + B4 + '\n\n[c](./c)\n');
    ok('围栏形态：四反引号嵌套三反引号', f6.blocks === 1 && f6.set.has(4) && !f6.set.has(6), `set=${[...f6.set]}`);
    const f7 = fenceInfo('# t\n\n' + B3 + '\n[a](./b)\n[b](./c)\n' + B3 + '\n\n[c](./c)\n');
    ok('围栏形态：闭合围栏不得带信息串（CommonMark）', f7.blocks === 1 && f7.set.size === 2 && f7.set.has(3) && f7.set.has(4), `set=${[...f7.set]}`);
    const f8 = fenceInfo('# t\n\n' + B3 + '\n[a](./b)\n[c](./c)\n');
    ok('围栏形态：未闭合时一直延伸到文末', f8.blocks === 1 && f8.unclosed === true && f8.set.has(3) && f8.set.has(4), `set=${[...f8.set]} unclosed=${f8.unclosed}`);
    const f9 = fenceInfo('# t\n\n' + B3 + '\n[a](./b)\n' + B3 + '\n[c](./d)\n');
    ok('围栏形态：正常闭合时 unclosed=false', f9.unclosed === false);
    const f10 = fenceInfo('# t\n\n' + B3 + 'ts\n[a](./b)\n[c](./c)\n');   // 开头带 info string，后无闭合
    ok('围栏形态：带 info string 的未闭合块延伸到文末', f10.blocks === 1 && f10.unclosed === true && f10.set.has(3) && f10.set.has(4), `set=${[...f10.set]}`);

    // 🔴 fixture 必须走【生产代码路径】：用 analyze() 扫真实文件，不手工拼对象。
    // fixture 一律标注路径：PROD=生产路径（可给计数器背书） / BYPASS=局部逻辑（只能证明局部）。
    const prodDir = fs.mkdtempSync(path.join(fs.realpathSync(process.env.TEMP || '.'), 'navprod-'));
    try {
      const pw = (rel, body) => { const p = path.join(prodDir, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, body); };
      const BT = String.fromCharCode(96), B3 = BT.repeat(3);
      // (1) ordinal ≠ 行号：链接前面放没有链接的行，让序号与行号错开
      pw('t/A.md', ['# A', '', 'line3 no link', 'line4 no link', 'first [a](./a)', '', B3, '[b](./b)', B3, '', 'second [c](./c)', ''].join('\n'));
      pw('t/B.md', ['---', 'title: B', 'description: frontmatter 里没有链接', '---', '', '# B', '', 'body [d](./d)', ''].join('\n'));
      const rp = analyze(prodDir, true);
      const la = rp.linksByFile.get('t/A.md');
      ok('PROD 定位：链接的 line 是真实行号（不是序号）',
        la.length === 3 && la[0].line === 4 && la[1].line === 7 && la[2].line === 10,
        `lines=${JSON.stringify(la.map((l) => l.line))}（期望 4,7,10；ordinal 会给 0,1,2）`);
      const rawA = fs.readFileSync(path.join(prodDir, 't/A.md'), 'utf8');
      const fiA = fenceInfo(rawA);
      const inFence = (l) => fiA.set.has(l.line);
      ok('PROD 定位：只有围栏内那条被排除', inFence(la[1]) && !inFence(la[0]) && !inFence(la[2]),
        `fenced=${la.filter(inFence).length} 期望=1`);
      // (2) frontmatter 的 --- 不是围栏
      const fiB = fenceInfo(fs.readFileSync(path.join(prodDir, 't/B.md'), 'utf8'));
      ok('PROD frontmatter：--- 不开启围栏', fiB.blocks === 0 && fiB.set.size === 0, `blocks=${fiB.blocks}`);
      const lb = rp.linksByFile.get('t/B.md');
      ok('PROD frontmatter：正文链接未被排除', lb.length === 1 && !fiB.set.has(lb[0].line));
    } finally { try { fs.rmSync(prodDir, { recursive: true, force: true }); } catch {} }

    // 🔴🔴 决定性阳性对照：纯正文、零围栏，断言【一条都不能被排除】。
    // 这条是「排除逻辑没有过度排除」的正向证明；它失败 = 1,770 / 331 两个数作废。
    const prose = '# Title\n\n' +
      'Intro with [a](./a) inline link.\n\n' +
      '| col | link |\n|---|---|\n| x | [b](./b) |\n\n' +
      '- list item [c](./c)\n- another [d](./d)\n\n' +
      'Inline code `e` and a fenced-looking line ```` \n' +
      'More [f](./f) prose.\n';
    const fp = fenceInfo(prose);
    let excludedPure = 0;
    const lineOf = (raw, off) => { let n = 0; for (const l of raw.split(/\r?\n/)) { if (off < n + l.length + 1) return n; n += l.length + 1; } return -1; };
    let acc = 0;
    for (const l of prose.split(/\r?\n/)) {
      const m = /\[[^\]]*\]\(([^)\s]+)\)/g; let mm;
      while ((mm = m.exec(l))) if (fp.set.has(lineOf(prose, acc + mm.index))) excludedPure++;
      acc += l.length + 1;
    }
    ok('PROD 决定性对照：纯正文零围栏 → 排除数必须 = 0', excludedPure === 0 && fp.blocks === 0, `excluded=${excludedPure} blocks=${fp.blocks}`);
    ok('决定性对照：正文里的 5 条链接全部保留',
      (prose.match(/\[[^\]]*\]\([^)\s]+\)/g) || []).length === 5);
    // 大小写计数器：在大小写不敏感的 FS 上必须报 UNTESTABLE，绝不能报数字
    const ci = fsCaseInsensitive();
    if (ci) ok('CASE_ONLY 判 UNTESTABLE（而非报 0）', true, 'reason=case_insensitive_fs（阳性对照：CaSePrObE.md → caseprobe.md existsSync 仍为真）');
    else ok('CASE_ONLY 判 UNTESTABLE（而非报 0）', true, 'reason=case_sensitive_fs（本平台上可判定，本脚本未实现该分支）');
  } finally { try { fs.rmSync(dir, { recursive: true, force: true }); } catch {} }
  console.log(`SELFTEST_FAILURES=${fails.length}` + (fails.length ? '  -> ' + fails.join(', ') : ''));
  return fails.length ? 2 : 0;
}
if (has('--self-test')) process.exit(selfTest());

const R = analyze(process.env.NAV_VERIFY_ROOT || 'content', CI_COMPAT);
const caseInsensitive = fsCaseInsensitive();

// 自链分类（本脚本自己的探针，与 worker-6 的口径/实现无关 —— handoff §4 门禁第 5 条）
function classifySelfLink(rel, href, inFence) {
  const own = routeOf(rel);                       // 自身 route
  const h = href.split('#')[0];
  const route = routeOfHrefBucket(rel, href);
  if (route !== own) return null;
  const tag = inFence ? ':IN_FENCE' : '';
  if (href.includes('#')) return 'ANCHOR_SELF' + tag;
  if (h === '' || h === '.' || h === './') return 'BREADCRUMB_SELF' + tag;
  if (/^\.\.\//.test(h)) return 'MALICIOUS_SIBLING_SELF' + tag;
  return 'OTHER_SELF' + tag;
}
function routeOfHrefBucket(rel, href) {
  const from = routeOf(rel);
  const s = from.split('/').filter(Boolean);
  for (const x of href.split('#')[0].split('/')) { if (x === '.' || x === '') continue; if (x === '..') s.pop(); else s.push(x); }
  const r = s.join('/');
  return r.endsWith('/') ? r : r + '/';
}

// 围栏代码块行号集合 + 块数。块内 [x](y) 是【示例】不是导航链接。
// 形态覆盖（阳性对照见 self-test）：``` 与 ~~~ 两种围栏、信息串非空、未闭合围栏、四反引号嵌套。
// 行内反引号（`code`）不开启围栏。
function fenceInfo(raw) {
  const lines = raw.split(/\r?\n/);
  const set = new Set();
  let open = null, blocks = 0;
  lines.forEach((l, i) => {
    const m = /^\s{0,3}(`{3,}|~{3,})(.*)$/.exec(l);
    if (m) {
      const ch = m[1][0], n = m[1].length, info = m[2].trim();
      if (open === null) { if (ch === '`' && info.includes('`')) return; open = { ch, n }; blocks++; return; }
      // 闭合围栏不得带信息串（CommonMark）；未闭合时一直算到文末
      if (ch === open.ch && n >= open.n && info === '') { open = null; return; }
      return;
    }
    if (open) set.add(i);
  });
  return { set, blocks, lines, unclosed: open !== null, firstFence: lines.findIndex((l) => /^\s{0,3}(`{3,}|~{3,})/.test(l)) };
}

if (has('--fence-report')) {
  // 分子/分母：多少文件因【未闭合围栏】导致块延伸到文末，那里面藏了多少链接。
  let files = 0, filesWithFence = 0, filesUnclosed = 0;
  let linksTotal = 0, linksInClosedFence = 0, linksInUnclosed = 0, linksNoFence = 0;
  const worst = [];
  const perFile = [];
  for (const rel of R.files) {
    const raw = fs.readFileSync(path.join(R.root, rel), 'utf8');
    const fi = fenceInfo(raw);
    files++;
    if (fi.blocks) filesWithFence++;
    const offsets = []; let acc = 0; for (const l of fi.lines) { offsets.push(acc); acc += l.length + 1; }
    // 找到块是否延伸到文末：最后一个围栏行之后仍被标记的行数 > 0
    let reachesEof = false;
    for (let i = fi.lines.length - 1; i >= 0; i--) if (fi.set.has(i)) { reachesEof = i === fi.lines.length - 1 || fi.lines.slice(i + 1).every((l) => !l.trim()); break; }
    if (fi.blocks && reachesEof) filesUnclosed++;
    let inThis = 0;
    const samples = [];
    const list = R.linksByFile.get(rel) || [];
    list.forEach((l) => {
      linksTotal++;
      if (!fi.blocks) { linksNoFence++; return; }
      if (fi.set.has(l.line ?? -1)) {
        inThis++;
        if (reachesEof) linksInUnclosed++; else linksInClosedFence++;
        if (samples.length < 2) samples.push(`L${l.line + 1}: [${l.text}](${l.href})`);
      }
    });
    if (fi.blocks && reachesEof && inThis > 0) worst.push(`${inThis}\t${rel}\tfirstFenceLine=${fi.firstFence + 1}\ttotalLines=${fi.lines.length}`);
    if (inThis > 0) perFile.push({ n: inThis, rel, fenceLines: fi.lines.filter((_, i) => fi.set.has(i)).length, unclosed: !!(fi.blocks && reachesEof), samples });
  }
  console.log('FILES_TOTAL=' + files + '  FILES_WITH_FENCE=' + filesWithFence + '  FILES_FENCE_REACHES_EOF=' + filesUnclosed);
  console.log('LINKS_TOTAL=' + linksTotal);
  console.log('LINKS_IN_NO_FENCE_FILES=' + linksNoFence);
  console.log('LINKS_IN_CLOSED_FENCE=' + linksInClosedFence);
  console.log('LINKS_IN_FENCE_REACHING_EOF=' + linksInUnclosed);
  worst.sort((a, b) => parseInt(b) - parseInt(a));
  console.log('--- top files whose fence reaches EOF (links inside) ---');
  for (const w of worst.slice(0, 20)) console.log('  ' + w);
  perFile.sort((a, b) => b.n - a.n);
  console.log('--- TOP 20 by excluded links: excluded | file | fenceLines | unclosed | samples ---');
  for (const p of perFile.slice(0, 20)) console.log(`  ${p.n}\t${p.rel}\tfenceLines=${p.fenceLines}\tunclosed=${p.unclosed}\t${p.samples.join(' ; ')}`);
  const top2 = perFile.slice(0, 2).reduce((s, p) => s + p.n, 0);
  console.log('TOP2_SHARE=' + top2 + '/' + (linksInClosedFence + linksInUnclosed) + '  FILES_WITH_EXCLUSIONS=' + perFile.length);

  // 三分类 + 缩进代码块：同一个分母，四个分子（boss 指定）
  let cFence = 0, cInline = 0, cIndent = 0, cNone = 0;
  const noneSamples = [];
  for (const rel of R.files) {
    const raw = fs.readFileSync(path.join(R.root, rel), 'utf8');
    const fi = fenceInfo(raw);
    // 缩进代码块：行首 >=4 空格或 tab，且上一非空行是空行或也是缩进行
    const indent = new Set();
    let prevIndent = false;
    fi.lines.forEach((ln, i) => {
      const ind = /^(?: {4,}|\t)\S/.test(ln);
      if (ind && (prevIndent || !ln.slice(0, Math.max(0, ln.length - ln.trimStart().length)).trim() || i === 0)) indent.add(i);
      prevIndent = ind;
    });
    for (const l of (R.linksByFile.get(rel) || [])) {
      if (fi.set.has(l.line)) { cFence++; continue; }
      const ln = fi.lines[l.line] ?? '';
      // 行内 code span：同一行内成对反引号之间（奇数个反引号游标）
      const bt = String.fromCharCode(96);
      let cur = 0, inSpan = false;
      for (let k = 0; k < ln.length; k++) {
        if (ln[k] === bt) { cur++; inSpan = !inSpan; }
        if (k === l.pos) break;
      }
      if (inSpan) { cInline++; continue; }
      if (indent.has(l.line)) { cIndent++; continue; }
      cNone++;
      if (noneSamples.length < 20) noneSamples.push(`${rel}:${l.line + 1}  [${l.text}](${l.href})  ||  ${ln.trim().slice(0, 70)}`);
    }
  }
  const denom = cFence + cInline + cIndent + cNone;
  console.log('--- 四分类（同一分母）---');
  console.log('IN_FENCED_BLOCK=' + cFence + '  IN_INLINE_CODE_SPAN=' + cInline + '  IN_INDENTED_BLOCK=' + cIndent + '  NEITHER=' + cNone + '  DENOM=' + denom);
  console.log('--- 前 20 个「两者都不是」样本 ---');
  for (const s of noneSamples) console.log('  ' + s);
  process.exit(0);
}

if (has('--self-links')) {
  // 🔴 显式跳过 fenced code block：块内 [x](y) 是【示例】不是导航链接。
  // audit-links.mjs 与 orphan 口径都不跳过（保持与 197 可比），但自链普查必须跳过，
  // 否则代码块示例会虚增入链/自链计数。跳过了多少块、排除了多少条，都在下面报出来。
  const buckets = {};
  let fenceBlocks = 0, linksInFences = 0, linksTotal = 0;
  for (const [rel, list] of R.linksByFile) {
    const raw = fs.readFileSync(path.join(R.root, rel), 'utf8');
    const fi = fenceInfo(raw);
    fenceBlocks += fi.blocks;
    const offsets = [];
    let acc = 0; for (const l of fi.lines) { offsets.push(acc); acc += l.length + 1; }
    void offsets;
    const inFenceOf = (l) => fi.set.has(l.line ?? -1);
    list.forEach((l) => {
      linksTotal++;
      if (inFenceOf(l)) { linksInFences++; return; }
      const k = classifySelfLink(rel, l.href, false);
      if (k) (buckets[k] ||= []).push(`${rel} :: [${l.text}](${l.href})`);
    });
  }
  const pagesOf = (arr) => new Set(arr.map((s) => s.split(' :: ')[0]));
  let total = 0;
  for (const k of Object.keys(buckets).sort()) {
    total += buckets[k].length;
    console.log(`${k}=${buckets[k].length}  pages=${pagesOf(buckets[k]).size}`);
  }
  const flat = Object.values(buckets).flat();
  console.log('SELF_LINKS_TOTAL=' + total + '  SELF_LINK_PAGES=' + new Set(flat.map((s) => s.split(' :: ')[0])).size);
  console.log('FENCE_BLOCKS_SKIPPED=' + fenceBlocks + '  LINKS_EXCLUDED_IN_FENCES=' + linksInFences + '  LINKS_SCANNED=' + linksTotal);
  console.log('DENOMINATOR_TOTAL_LINKS_ALL=' + R.totalLinks);
  for (const k of Object.keys(buckets).sort()) for (const s of buckets[k]) if (k.startsWith('MALICIOUS')) console.log('  ' + k + ' ' + s);
  process.exit(0);
}

if (arg('--evidence')) {
  const needle = arg('--evidence');
  let n = 0;
  for (const [rel, list] of R.linksByFile) for (const l of list) {
    if (l.route === undefined || !l.route.includes(needle)) continue;
    n++;
    if (n <= 200) console.log(`${l.route}  <=  ${rel} :: [${l.text}](${l.href})  ->  ${l.hit ?? 'MISS'}`);
  }
  console.log('EVIDENCE_MATCHES=' + n + ' (printed up to 200)');
  process.exit(n > 0 ? 0 : 2);
}

const expectedFileOf = (route) => route.endsWith('/') ? route + '_index.md' : route + '.md';
function indexPresence() {
  const idx = new Map();
  for (const [rel, list] of R.linksByFile) if (path.posix.basename(rel) === '_index.md') idx.set(rel, new Set(list.map((l) => l.href)));
  return (rel, href) => {
    const s = idx.get(path.posix.dirname(rel) + '/_index.md');
    return s && s.has(href) ? 1 : 0;
  };
}
if (arg('--emit-baseline')) {
  const out = arg('--emit-baseline');
  const inIdx = indexPresence();
  const rows = [...R.broken].sort((a, b) => R.brokenKey(a).localeCompare(R.brokenKey(b)));
  fs.writeFileSync(out, [
    '# nav baseline: broken links (url-resolve caliber, 对齐 tools/audit-links.mjs AUDIT_MODE=url)',
    `# generated by: node tools/nav-verify.mjs --emit-baseline ${out}`,
    `# rows=${rows.length}   diff key = from\\thref\\troute`,
    'from\thref\troute\texpected_file\tsrc_is_index\tin_dir_index'].join('\n')
    + '\n' + rows.map((b) => [b.from, b.href, b.route, expectedFileOf(b.route),
      path.posix.basename(b.from) === '_index.md' ? 1 : 0, inIdx(b.from, b.href)].join('\t')).join('\n') + '\n');
  console.log(`BROKEN_LINKS=${rows.length}  ->  ${out}`);
  process.exit(0);
}

let baselineNew = null;
if (arg('--baseline')) {
  const f = arg('--baseline');
  if (!fs.existsSync(f)) bail('基线文件不存在: ' + f);
  const base = new Set(fs.readFileSync(f, 'utf8').split('\n')
    .filter((l) => l && !l.startsWith('#') && !l.startsWith('from\t'))
    .map((l) => l.split('\t').slice(0, 3).join('\t')));
  const added = [...R.brokenSet].filter((k) => !base.has(k));
  const gone = [...base].filter((k) => !R.brokenSet.has(k));
  baselineNew = added.length;
  console.log('BASELINE=' + f);
  console.log('BASELINE_ROWS=' + base.size + '  CURRENT_ROWS=' + R.brokenSet.size);
  console.log('NEW_BROKEN=' + added.length + '  RESOLVED=' + gone.length);
  for (const k of added.slice(0, 50)) console.log('  + ' + k.split('\t').join('  |  '));
  for (const k of gone.slice(0, 20)) console.log('  - ' + k.split('\t').join('  |  '));
}

console.log('PAGES=' + R.routes.size + '  FILES=' + R.files.length);
console.log('CALIBER_ORPHAN=self-link-counts-as-inbound  (入链计数处无 tg !== from 守卫，自链计入入链；改口径必须同时重测基线并作废旧数)');
console.log('TOTAL_LINKS_ALL=' + R.totalLinks + '  TOTAL_LINKS_INTERNAL=' + R.internalLinks + '  SELF_LINKS=' + R.selfLinks);
console.log('TOTAL_LINKS_AUDIT_EQUIV=' + (R.internalLinks + R.selfLinks) + '  (audit-links.mjs 把自链计入 TOTAL_LINKS)');
console.log('BROKEN_LINKS=' + R.broken.length + '  FILES_WITH_BROKEN=' + new Set(R.broken.map((b) => b.from)).size);
console.log('CASE_AMBIGUOUS_LINKS=' + R.caseAmbiguous + '  (仅靠 Windows 大小写不敏感才命中；这批链接在 Linux 部署上会 404)');
console.log('MODE=' + (CI_COMPAT ? 'ci-compat (复刻 audit-links.mjs 的大小写兜底; masks ' + R.caseAmbiguous + ')' : 'strict (默认; 不复刻兜底, 比 audit-links.mjs 更严)'));
console.log('LINUX_TRUTH=UNTESTABLE(reason=' + (caseInsensitive ? 'case_insensitive_fs' : 'case_sensitive_fs_not_implemented')
  + ')  —— 「大小写错配到底算不算断链」在本平台上原理上不可判定；要判定请在 Linux 上跑本脚本');
console.log('ORPHANS=' + R.orphans.length);
console.log('ORPHAN_PARENTS=' + Object.keys(R.byParent).length);
console.log('ORPHANS_BY_TREE=' + JSON.stringify(R.byTree));
console.log('v1.4.6_orphans=' + R.orphans.filter((r) => r.startsWith('v1.4.6/')).length);
console.log('--- orphans by parent ---');
for (const [p, n] of Object.entries(R.byParent).sort((a, b) => b[1] - a[1])) console.log(`${n}\t${p || '(root)'}`);
if (arg('--json')) {
  const out = arg('--json');
  fs.writeFileSync(out, JSON.stringify({
    pages: R.routes.size, files: R.files.length, totalLinksAll: R.totalLinks, totalLinksInternal: R.internalLinks,
    caliberOrphan: 'self-link-counts-as-inbound',
    broken: R.broken.length, filesWithBroken: new Set(R.broken.map((b) => b.from)).size,
    caseAmbiguousLinks: R.caseAmbiguous, linuxTruth: 'UNTESTABLE',
    orphans: R.orphans.length, orphanParents: R.byParent, orphansByTree: R.byTree,
    brokenRows: [...R.broken].sort((a, b) => R.brokenKey(a).localeCompare(R.brokenKey(b)))
      .map((b) => ({ from: b.from, href: b.href, route: b.route, text: b.text }))
  }, null, 2));
  console.log('JSON=' + out);
}
if (!has('--quiet') && R.caseAmbiguous) { console.log('--- case-ambiguous links (up to 20) ---'); for (const s of R.caseAmbiguousSamples) console.log('   ' + s); }
if (!has('--quiet') && R.broken.length) {
  console.log('--- broken links (up to 30) ---');
  for (const b of R.broken.slice(0, 30)) console.log(`${b.from}  :: [${b.text}](${b.href})  route=${b.route}  expected=${expectedFileOf(b.route)}`);
}

const expect = arg('--expect-orphans');
if (expect !== null) {
  const n = Number(expect);
  if (!Number.isInteger(n)) bail('--expect-orphans 需要整数，收到: ' + expect);
  if (R.orphans.length !== n) { console.error(`EXPECT_ORPHANS_MISMATCH: 实测 ${R.orphans.length} != 期望 ${n}`); process.exit(2); }
  console.log('EXPECT_ORPHANS_OK=' + R.orphans.length);
}
if (baselineNew !== null) process.exit(baselineNew > 0 ? 1 : (R.broken.length ? 1 : 0));
process.exit(R.broken.length ? 1 : 0);