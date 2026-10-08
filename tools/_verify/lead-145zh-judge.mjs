#!/usr/bin/env node
// ============================================================================
// tools/_verify/lead-145zh-judge.mjs  —  READ-ONLY 判分器（lead-145zh 派单方给定）
// ----------------------------------------------------------------------------
// 用途：对 lead-145zh 的 v1.4.5/zh 手写深页做逐页验收。**不写 content/，只读**。
//
// 用法:
//   node tools/_verify/lead-145zh-judge.mjs <page.md> [<page.md> ...]
//   node tools/_verify/lead-145zh-judge.mjs --manifest <f> [--json <out>] [--links require|off]
//   node tools/_verify/lead-145zh-judge.mjs --manifest <f> --cross-check
//
// ★★ 2026-10-08 修复「ambiguous 静默跳过」洞（vacuous-pass 家族第 7 面）：
//   REF_RE 现在捕获路径段；resolveSource 的后缀消歧分支生效；
//   仍无法判定的引用（裸 basename 重名）⇒ fail closed（计入 fail ⇒ 该页 FAIL）。
//   详见各改动点的 ★★ 2026-10-08 注释。
//
// 判据（每条独立输出 PASS/FAIL，缺一即该页判未通过）:
//   J1 U+FFFD == 0
//   J2 七节齐全: 概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 【参见族】 / 导航（H2）
//       ★ 参见族 = `参见` | `依赖关系` | `依赖图` | `依赖`（boss-3 #12561 裁定）
//         出处：tools/_verify/DISPATCH-TEMPLATE.md §0.0 的共现证据（非空壳 2750 页里 342 页同页共现 ≥2 个）
//         ⚠ 归并方向是【把缺判成有】，是本仓最危险的一类合并 ⇒ 故本判分器
//          **额外打印实际命中的是哪个别名**，让「参见已齐」可审计而不是隐形。
//         若打印出 `via=依赖关系` 而页里没有 `参见`，读的人应当知道那是别名命中。
//   J3 引用边界: 页内每条 `X.cs:N` 的 N <= (wc -l X.cs)，且文件存在（源码根 ../bannerlord-1.4.5）。
//       ★ 2026-10-07 扩展（lead-20 #13908 的论据）：【裸 `:N` 是承前的】——
//         它指同一页上文最近一个完整 `X.cs:N` 的同一个文件。
//         ⇒ J3 现在按文档顺序跟踪【当前文件】，把裸 `:N` 归到它并核界。
//         这比「要求把 71 处裸引用改成完整形态」好：它【不改内容】，而是【补上尺的覆盖面】。
//   J4 裸行号: 【覆盖率指标】—— 归不到文件的裸 `:N` 条数。
//       ★ 2026-10-07 由 FAIL 撤回为 WARN（boss-3 #15013 ①）：实测裸引用全部在界内，
//         把它判 FAIL 会产出假 FAIL。它现在只作每批的一行覆盖率读数。
//   J5 链接形态: 正文不得出现 `](./`；不得直接链 `_index.md`；`_index.md` 自身豁免
//   J5R ★ 链接解析: 页内每条 markdown 链接必须真的能解析（见下方「解析算法是副本」）
//   J10 ★ 链接位置: markdown 链接只允许出现在【参见族】与【导航】小节里。
//       其余位置（正文叙述）写链接 = FAIL —— 这是政策 #12761 的机械形式。
//   J13 ★ 可疑引用行（lead-22 #15360 ②）：行号【在界内】但那一行是【空行 / 纯注释 / 只剩括号标点】。
//       为什么需要它：`N <= 行数` 对这类引用会给出【假 PASS】，而假 PASS 比假 FAIL 危险。
//       实例（lead-22 自己踩的）：`DefinitionContext.cs:278` 写的是 `private void CollectTypes(...)`，
//         而 278 行实际是注释（`// Token: 0x0600031A …`），真声明在 279 行。
//       口径（故意很窄）：只报「空行 / 纯注释 / 纯标点」——
//         【不】要求被引行必须是声明行，因为合法引用经常指向方法体内的一条语句（如 `Campaign.Current = null;`）。
//       ★★ 2026-10-07 收窄（worker-211 实证）：J13 【只对带显式文件名的引用】运行。
//         理由：裸 `:N` 的归属是启发式的，而【两种启发式都会错】：
//           规则 1（单文件块 ⇒ 用块文件）：worker-211 那页的块里只出现 SandBoxHelpers 的完整引用，
//             而裸 `:99` 实际指的是 AgentBehaviorGroup.cs:99 ⇒ 错。
//           规则 2（多文件块 ⇒ 用页面主语文件）：lead-20 的 Campaign.md 靠它修好了 12 条假阳性，
//             但同一规则在这里会把指向【非主语文件】的裸引用归错 ⇒ 错。
//         ⇒ J13 是【精度判据】，不该跑在启发式归属上；它只跑在 `X.cs:N` 这种确定的引用上。
//           （J3 的边界检查仍跑裸引用，但它把 full / inBlock / subject 分开计数，置信度可见。）
//   J11 ★ 链接形态: 【叶子目标】不得带尾斜杠（写 `../X` 而非 `../X/`）。
//       但【节索引】带尾斜杠是对的（`../`、`../../<桶>/`）—— 所以判据不是「不能有斜杠」，
//       而是「去掉尾斜杠后若存在同名叶子页 `X.md` ⇒ 该目标本就是叶子 ⇒ 尾斜杠是缺陷」。
//   J6 机械深页: classifyPage() === deep_pass
//   J7 脱离自动档: 全文不得含生成标记
//   J8 体量: 正文（frontmatter 之后）字节 > 2500 且 H2/H3 >= 1
//   J9 真实示例: ```csharp 代码块总有效行 >= 3
//
// ---------------------------------------------------------------------------
// ★★ 两条【决定「工作算不算数」的机械要求】（boss-3 #12561 要求写进本说明）
//
// 机制① 档位标记扫描【整个文件，含 frontmatter】。
//   tools/_verify/classify-tiers.mjs 的 tier1 判据是 text.includes('的自动生成类参考') 等精确串。
//   ⇒ 把壳页改写成深页时，**必须同时改写 `description`**，
//     否则正文写满 6261B 深页小节，仍会被 census 记成 generated。
//   实例：content/v1.4.5/zh/api/campaign-ext/SellGoodsForTradeAction.md 就是这样被记成 generated 的。
//   本判分器的 J7 就是这条的机械形式。
//
// 机制② classifyPage 的 deep_pass 要求【参见/依赖 小节里 >=2 条 markdown 链接】。
//   ⇒ 写了「依赖」小节但一条链接都没有 = 判不过（理由串 `dependency-section-no-links`）。
//   实例：MakePregnantAction / SellItemsAction / SellGoodsForTradeAction 三页的失败原因。
//   本判分器的 J6 就是这条的机械形式。
// ---------------------------------------------------------------------------
// ★ 政策史（`--links` 默认值随政策变，两次都记下来）
//   2026-10-07 早（#12289）：本轮不写任何跨页链接。
//     ⇒ 与 deep_pass 互斥（后者硬要求参见槽 ≥2 条链接）。曾用 `--links off` 过渡。
//   2026-10-07 晚（#12761，boss-3）：【细化并覆盖】——
//     `参见` 槽位【允许并应当】写跨页链接（每页 ≥2 条，逐条先 find 定桶、只链已存在的目标）；
//     `导航` 保留 `../`；**其余所有位置仍不写链接，用反引号代码片段**；
//     每批收尾报 audit-links 批前/批后两套数，本批不得让 BROKEN_LINKS 上升。
//     ⇒ 默认模式恢复为 `require`，且新增 J10 把「其余位置不写链接」也机器化。
//   `--links off` 仍保留，但它是【过渡态】，不应长期使用。
// ---------------------------------------------------------------------------
// ★ 解析算法是【副本】（重要）
//   J5R 复刻 tools/audit-links.mjs 的解析（URL 口径 + static 回退）。
//   **为什么是副本而不是 import**：audit-links.mjs 是三条内容线共用的门禁，
//   _HANDOFF.md §11 明确「改它需要窗口，不能赶」。所以这里复制、不改它。
//   **副本会漂移** ⇒ 用 `--cross-check` 拿真门禁对账：它会真跑一次
//   `node tools/audit-links.mjs`，并把「真门禁报为 broken 的文件集合」与
//   「J5R 判为不可解析的文件集合」逐文件比对，不一致就报 DRIFT。
//   **权威读数永远是 audit-links.mjs，不是本判分器。**
// ★★ 报告口径要求（boss-3 #16190 采纳，必读）
//   ① 【报任何读数时，直接引用本尺自打的 `# judge sha256 = …` 那一行】，
//      不要引用【外部宣布的冻结值】。
//      理由：「标注冻结 sha」若不配机械校验，就会出现「报告里写 de072002、实际跑的是 6ac3a086」
//            ——【报告与读数脱钩】，是今天反复出现的那类假信号。
//   ② 分工（两者都需要，【不能互相替代】）：
//      · 「冻结 sha」是给【复现】用的（宣告某批读数对应哪一版）
//      · 「自带 sha」是给【归属】用的（这条读数到底出自哪一版）
//   ③ 冻结窗口期内改尺 ⇒ 那段时间任何人报的读数都可能是【跨版本混合】的
//      ⇒ 判据：改尺后【重跑受影响批次】再报（本线已为 b03/b05 执行过，现作为默认动作）。
//   ④ 本尺还会自报【工作区状态】：DIRTY 时读数不得作为对外判决（见下方 selfDirty 检查）。
//   ⑤ 回放一个冻结版本时，副本必须放在 `tools/_verify/` 下运行 ——
//      它对 `../lib/handwritten-policy.mjs` 是相对导入，且从 import.meta.url 推 REPO。
//   ⑥ ★★ 【存在性分类是版本树依赖的】（boss-3 #16601）：
//      任何「标识符是否存在 / 是否存在某类缺陷 / 有多大」的结论，都必须带【版本树】。
//      本会话第 5 个版本树根因：同一标识符在 1.3.15 里是 0、在 1.4.5 里是 2；
//      同一文件被量出 356 与 408 行（两个都对）。
//      ⇒ 本尺的每条 J3 / J13 发现都带 `[bannerlord-X.Y.Z]` 标签（见 treeTag）。
//      ⇒ 通则：缺版本树的结论，会让两个人都说真话而互相矛盾 ——
//        而「两个都对」是本会话最难识别的一类分歧。
// ============================================================================
import { readFileSync, existsSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { basename, join, dirname, resolve, normalize, sep, posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { classifyPage } from '../lib/handwritten-policy.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, '..', '..');
const SRC_ROOT_V145 = resolve(REPO, '..', 'bannerlord-1.4.5', 'Bannerlord.Source');
// ★★ 源码根必须【按页面所在版本树推导】（lead-20 #14162 查出的洞）
//   旧实现把 SRC_ROOT 硬编码为 1.4.5 ⇒ 对其它版本树的页会拿错的树核界。
//   lead-20 量化：全仓 16,307 条引用里 8,349 条（51.2%）不属于 v1.4.5。
//   后果两个方向都会错：一条 v1.3.15 页的 `MissionState.cs:400` 真实在界内（408 行），
//   用 1.4.5 的树（356 行）会得【假 FAIL】；反之也会得【假 PASS】。
//   实测（2026-10-07）各树布局不同：
//     bannerlord-1.4.5/Bannerlord.Source/bin/**   ← 只有 1.4.5 有 Bannerlord.Source 这一层
//     bannerlord-1.3.0/**  bannerlord-1.3.15/**  bannerlord-1.4.6/**  bannerlord-1.4.7/**  bannerlord-1.5.3/**
//   ⇒ 本尺【绝不静默回退到别的树】：推不出源根就报 UNCHECKABLE，而不是拿 1.4.5 顶替。
function versionOf(pageRel) {
  // ★ 不能用 ^content/ 锚定：夹具在 tools/_verify/lead-145zh-judge-fixture/content/v1.4.5/…，
  //   那时 ^ 锚定会推不出版本树 ⇒ 夹具的正向对照永远 FAIL（本会话真的踩到过）。
  //   ⇒ 改为匹配路径中【任意位置】的 content/<ver>/ 段。
  const m = toPosix(pageRel).match(/(?:^|\/)content\/(v[\d.]+)\//);
  return m ? m[1] : null;
}
const SRC_ROOT_CACHE = new Map();
function srcRootFor(pageRel) {
  const ver = versionOf(pageRel);
  if (!ver) return { root: null, reason: 'page-not-under-content-<ver>' };
  if (SRC_ROOT_CACHE.has(ver)) return SRC_ROOT_CACHE.get(ver);
  const base = resolve(REPO, '..', 'bannerlord-' + ver.replace(/^v/, ''));
  let out;
  if (!existsSync(base)) out = { root: null, reason: `no-source-tree-for-${ver}` };
  else if (existsSync(join(base, 'Bannerlord.Source'))) out = { root: join(base, 'Bannerlord.Source'), reason: null };
  else out = { root: base, reason: null };
  SRC_ROOT_CACHE.set(ver, out);
  return out;
}
const CONTENT_ROOT = process.env.LEAD145ZH_CONTENT_ROOT
  ? resolve(REPO, process.env.LEAD145ZH_CONTENT_ROOT)
  : join(REPO, 'content');
// ↑ LEAD145ZH_CONTENT_ROOT 是【测试钩子】，只给 tools/_verify/lead-145zh-judge-fixture/ 用。
//   理由：J5R 的解析必须相对某个 content 根；把夹具放在 tools/ 下会让它永远解析不了自己的链接，
//   于是正向对照永远 PASS 不了 —— 那样「对照通过」就成了空话。
//   ⇒ 夹具自带一棵 content 形状的树，用这个钩子指过去。**绝不要在验收 content/ 时设置它。**
const STATIC_ROOT = join(REPO, 'static');

const SECTIONS = ['概述', '心智模型', '怎么用', '关键成员', '真实示例', '导航'];
// 参见族：boss-3 #12561 裁定，出处 DISPATCH-TEMPLATE.md §0.0 的共现证据
// 参见族：boss-3 #12561 裁定（中文别名）+ #16510（★ 必须含英文形式）
//   ★ 为什么必须含英文：`J10` 的判据是「链接只许出现在参见/导航节内」。
//     若只认中文字面，则【每一个英文页都会构造性地 FAIL】——而且它报的是
//     「links-outside-see/nav」，看起来像【真缺陷】（链接放错位置），实则是【不认英文节名】。
//     实例：content/v1.3.15/en/architecture/save-object-graph.md 报 J10 stray=15，
//     而那 15 条链接全部正确地位于 `## See Also` 内（该页的节名是
//     Overview/Mental Model/How To Use/Key Members/Real Examples/See Also/Navigation
//     —— 七节契约的英文镜像）。
//   ★ 对齐依据：tools/lib/handwritten-policy.mjs 自己的 DEP_OR_SEE_HEADING_RE 已含
//     `Dependencies|Dependency|See\s*Also|Related` ⇒ 本尺之前比项目自己的政策【更窄】。
const SEE_FAMILY_EXACT = ['参见', '依赖关系', '依赖图', '依赖关联', '依赖', 'References'];
const SEE_FAMILY_RE = /^(?:Dependencies|Dependency|See\s*Also|Related|References)$/i;
function isSeeFamily(h) {
  const t = String(h || '').trim();
  return SEE_FAMILY_EXACT.includes(t) || SEE_FAMILY_RE.test(t);
}
// 保留旧名以便其它处引用（仅用于“列出中文别名”的场景）
const SEE_FAMILY = SEE_FAMILY_EXACT;
// 导航槽候选名（J10 用；声明了 schema 时按声明判，见 §30.6）
const NAV_RE = /导航|Navigation|Where to Go/i;

// ---- 页内【声明的】schema（boss-3 #14698 裁定：声明==实际；未声明 ⇒ 走类页七节） ----
function declaredSchema(text, body) {
  const { frontmatter } = splitFrontmatter(text);
  const mList = frontmatter.match(/^schema_sections:\s*\[(.*?)\]/m);
  if (mList) {
    const names = mList[1].split(',').map((s) => s.trim().replace(/^["']|[\"']$/g, '')).filter(Boolean);
    if (names.length) return { names, source: 'frontmatter:schema_sections' };
  }
  const secRe = /^##\s*节\s*schema\s*声明\s*$/im;
  const m = body.match(secRe);
  if (m) {
    const rest = body.slice(m.index + m[0].length);
    const next = rest.search(/^##\s+/m);
    const block = next < 0 ? rest : rest.slice(0, next);
    const names = [...block.matchAll(/^\s*[-*]\s*`?([^`\n]+?)`?\s*$/gm)].map((x) => x[1].trim()).filter(Boolean);
    if (names.length) return { names, source: '## 节 schema 声明' };
  }
  return null;
}
const GEN_MARKERS = [
  '的自动生成类参考',
  '的自动生成战役动作参考',
  'Auto-generated class reference',
  'Auto-generated campaign action reference',
];
const DESC_AUTO_MARKERS = ['的自动生成类参考。', 'Auto-generated'];
const EMPTY_SHELL_SIGS = ['它有什么状态', '它允许你做什么', '它保存的状态'];
const DEEP_BODY_MIN_BYTES = 2500;
// 由「无跨页链接」政策唯一造成的 stub 理由 —— 只有这两个可以被政策豁免。
const LINK_FAMILY_REASONS = ['dependency-section-no-links', 'weak-deps'];
const FFFD = '\uFFFD';

// ---- 源码索引（每棵树一份，按需构建） ----
//   ★ 同时建【全路径索引】与【basename 索引】，并记录重名 basename。
//   lead-20 #15073 已验证重名风险不是理论：全树 8,583 个 .cs 里有 187 个重名 basename
//   （MissionState.cs 一个就有 6 个：421/408/356/410/410/412 行）。
//   按 basename 单一定位会：① 归到错的文件 ② 从而对行号做出错误判定（两个方向都会错）。
//   ⇒ 规则：全路径优先 → basename 兜底且仅在唯一时可用 → 重名时报 ambiguous，【不猜】。
const SRC_INDEX_BY_ROOT = new Map();
function buildSrcIndex(root) {
  if (!root) return { byBase: new Map(), bySuffix: [] };
  if (SRC_INDEX_BY_ROOT.has(root)) return SRC_INDEX_BY_ROOT.get(root);
  const byBase = new Map();
  const bySuffix = [];
  const stack = [root];
  while (stack.length) {
    const dir = stack.pop();
    let entries;
    try { entries = readdirSync(dir, { withFileTypes: true }); } catch { continue; }
    for (const e of entries) {
      const p = join(dir, e.name);
      if (e.isDirectory()) { stack.push(p); continue; }
      if (!e.name.endsWith('.cs')) continue;
      const key = e.name.slice(0, -3);
      if (!byBase.has(key)) byBase.set(key, []);
      byBase.get(key).push(p);
      bySuffix.push({ rel: toPosix(p).replace(toPosix(root) + '/', ''), abs: p, base: key });
    }
  }
  const idx = { byBase, bySuffix };
  SRC_INDEX_BY_ROOT.set(root, idx);
  return idx;
}
const lineCountCache = new Map();
function lineCount(abs) {
  if (!lineCountCache.has(abs)) {
    // ★ 必须与【判据原文】一致：判据写的是 `N <= (wc -l X.cs)`。
    //   `wc -l` 数的是【换行符个数】，所以「以换行结尾的文件」的最后一行不计入。
    //   旧实现用 split(/\r?\n/).length ⇒ 对换行结尾的文件会多算 1 行（= wc -l + 1），
    //   即比判据宽松 1 行。实例：1.4.5 的 Hero.cs，wc -l=2406 而旧实现给 2407。
    //   （lead-22 与我在跨版本回归用例里都观察到过这个 1 行差。）
    const t = readFileSync(abs, 'utf8');
    const parts = t.split(/\r?\n/);
    const endsNl = /(?:\r?\n)$/.test(t);
    lineCountCache.set(abs, endsNl ? parts.length - 1 : parts.length);
  }
  return lineCountCache.get(abs);
}

// ---- J5R 解析（audit-links.mjs 的副本；见文件头「解析算法是副本」） ----------
const reSep = new RegExp(sep === '\\' ? '\\\\' : sep, 'g');
const toPosix = (p) => p.replace(reSep, '/');

function fileToRoute(absOrRel) {
  const rel = toPosix(absOrRel).replace(toPosix(CONTENT_ROOT) + '/', '');
  const dir = posix.dirname(rel);
  const base = posix.basename(rel);
  if (base === '_index.md') return dir + '/';
  return rel.replace(/\.md$/, '/');
}

function resolveTarget(fromBase, href) {
  let h = href.split('#')[0];
  if (!h) return null;
  let rel;
  if (h.startsWith('/')) {
    rel = h.replace(/^\//, '');
  } else {
    const base = fromBase.endsWith('/') ? fromBase : fromBase + '/';
    rel = posix.normalize(posix.join(base, h)).replace(/^\//, '');
  }
  return normalize(join(CONTENT_ROOT, rel)).replace(/[\\/]+$/, '');
}

function existsAsPage(t) {
  if (t === null) return false;
  return existsSync(normalize(t + '.md')) || existsSync(normalize(join(t, '_index.md')));
}

function contentRel(t) {
  if (t === null) return null;
  const a = toPosix(normalize(t));
  const b = toPosix(normalize(CONTENT_ROOT));
  if (a === b) return '';
  if (!a.startsWith(b + '/')) return null;
  return a.slice(b.length + 1);
}

function existsAsStatic(t) {
  const rel = contentRel(t);
  if (rel === null || rel === '') return false;
  try { return existsSync(normalize(join(STATIC_ROOT, rel))); } catch { return false; }
}

// ---- 页面主语源文件（裸 `:N` 归属的首选依据；lead-20 #14961 建议） ----
//   全仓 97.6% 的页在头部声明了它（`**Source:**` / `**源文件:**` / `**File:**` 等）。
function subjectFile(text) {
  // ★ 不能带 `$` 锚定：语料写作 `**源文件：** `path`（935 行）`，行尾还有「（N 行）」等后缀。
  //   （本会话真的因为 `$` 锚定导致多页 subject=- ，进而把 33 条可归属的裸引用误报成 unattributable。）
  const m = text.match(/^\*\*(?:源树路径|源文件|源码|Source file|Source|File|文件)[：:]\*\*\s*`?([^`\n]+?)`?\s*(?:[（(]|$)/im);
  if (!m) return null;
  // ★★ 2026-10-08 修复：携带【完整路径】而非只取 basename。
  //   旧实现只取 basename ⇒ 重名文件时，裸 `:N` 归属（bareSubject）吃不到页面自己声明的路径，
  //   会被判 ambiguous 并（修后）fail closed —— 而页面其实已经写清楚了它是哪个文件。
  //   ⇒ 保留路径（posix 归一），让 resolveSource 的后缀消歧对 bareSubject 同样生效。
  //   安全性：resolveSource 先按 basename 查；basename 唯一 ⇒ 路径分支不可达 ⇒ 与修前逐字节一致。
  const p = m[1].trim().replace(/\\/g, '/');
  return p.endsWith('.cs') ? p : null;
}

const LINK_RE = /\[([^\]]*)\]\(([^)\s]+)\)/g;
function relativeLinks(text) {
  const out = [];
  LINK_RE.lastIndex = 0;
  let m;
  while ((m = LINK_RE.exec(text))) {
    const href = m[2].split(/\s/)[0];
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) continue;
    out.push(href);
  }
  return out;
}

function pageFromUrl(pageRel) {
  const route = fileToRoute(resolve(REPO, pageRel));
  return route.endsWith('/') ? route : route + '/';
}

function unresolvedLinks(pageRel, text) {
  const abs = resolve(REPO, pageRel);
  const route = fileToRoute(abs);
  const fromUrl = route.endsWith('/') ? route : route + '/';
  const out = [];
  let m;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(text))) {
    const href = m[2].split(/\s/)[0];
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) continue;
    const hrefPath = href.split('#')[0];
    if (hrefPath === '' || hrefPath === '.' || hrefPath === './') continue;
    const t = resolveTarget(fromUrl, href);
    if (existsAsPage(t)) continue;
    if (existsAsStatic(t)) continue;
    out.push(href);
  }
  return out;
}

function splitFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  return m ? { frontmatter: m[1], body: text.slice(m[0].length) } : { frontmatter: '', body: text };
}
function extractDescription(fm) {
  const m = fm.match(/^description:\s*"([^"]*)"/m);
  return m ? m[1] : '';
}

// census 档位（与 tools/_verify/classify-tiers.mjs 同一套判据，顺序一致）
function censusTier(pageRel, text, body, cpStatus) {
  const { frontmatter } = splitFrontmatter(text);
  const desc = extractDescription(frontmatter);
  const bodyBytes = Buffer.byteLength(body, 'utf8');
  const h2h3 = (body.match(/^#{2,3}\s+/gm) || []).length;
  const substance = bodyBytes > DEEP_BODY_MIN_BYTES && h2h3 >= 1;
  if (GEN_MARKERS.some((s) => text.includes(s))) return 'generated';
  const descAuto = DESC_AUTO_MARKERS.some((s) => desc.includes(s));
  const sig = EMPTY_SHELL_SIGS.some((s) => body.includes(s));
  if ((descAuto || sig) && !substance) return 'empty_shell';
  if (cpStatus === 'deep_pass' || substance) return 'handwritten_deep';
  return 'other';
}

function judge(pageRel, mode) {
  const abs = resolve(REPO, pageRel);
  const out = { page: pageRel, checks: {}, fail: [], warn: [] };
  if (!existsSync(abs)) { out.fail.push('J0 file-missing'); return out; }
  const text = readFileSync(abs, 'utf8');
  const { frontmatter, body } = splitFrontmatter(text);
  const isIndex = basename(pageRel) === '_index.md';

  // J1
  const fffd = (text.match(new RegExp(FFFD, 'g')) || []).length;
  out.checks.J1_fffd = fffd;
  if (fffd !== 0) out.fail.push(`J1 fffd=${fffd}`);

  // J2（有声明 ⇒ 判「声明 == 实际」；无声明 ⇒ 类页七节，严格度不变）
  const h2 = (body.match(/^##\s+(.+?)\s*$/gm) || []).map((l) => l.replace(/^##\s+/, '').trim());
  const decl = declaredSchema(text, body);
  // ★ 声明小节【自身】也是一个 H2 ⇒ 比较时必须从实际集合里剔除它，
  //   否则「声明 == 实际」永远不可能成立（声明节总是多出来的那一个）。
  const DECL_HEADING_RE = /^节\s*schema\s*声明$/i;
  const h2ForCompare = h2.filter((h) => !DECL_HEADING_RE.test(h));
  out.checks.J2_declared = decl ? { source: decl.source, names: decl.names } : null;
  const missing = [];
  let seeMatched = h2.filter(isSeeFamily);
  if (decl) {
    const miss = decl.names.filter((s) => !h2ForCompare.includes(s));
    const extra = h2ForCompare.filter((s) => !decl.names.includes(s));
    out.checks.J2_declared_missing = miss;
    out.checks.J2_declared_extra = extra;
    if (miss.length || extra.length) {
      out.fail.push(`J2 declared-schema mismatch (${decl.source}): missing=[${miss.join(',')}] extra=[${extra.join(',')}]`);
    }
    seeMatched = SEE_FAMILY.filter((s) => h2.includes(s));
    if (!seeMatched.length && !decl.names.some(isSeeFamily)) {
      out.warn.push('J2 声明 schema 里没有参见族槽位');
    }
  } else {
    for (const s of SECTIONS) if (!h2.includes(s)) missing.push(s);
    if (!seeMatched.length) missing.push('参见族(参见|依赖关系|依赖图|依赖)');
    if (missing.length) {
      // ★ 区分【两种缺法】，因为【修法不同】（boss-3 #15974 要求把
      //   `gamemodel-decorator.md`（5 个 H2、无声明）当真实语料正控制）：
      //   · 类页缺节 ⇒ 补那几节（写内容）
      //   · hub 形页无声明 ⇒ 【补声明】，而不是把 hub 硬写成类页七节
      //   ★ 语言中立的 hub 判定（boss-3 #16510 实例驱动）：
      //     一个 `**Type:**` 行若【不是 C# 声明】（不含 `public `/`class `/`enum `/`struct `/`interface `），
      //     那它就是 hub/主题页而不是类页。
      //     实例：`content/v1.3.15/en/architecture/save-object-graph.md` 写的是
      //       `**Type:** Architecture topic page — spanning SaveManager / …`
      //     —— 旧的「无 Type 行」启发式抓不到它（它有 Type 行），而中文 hub 标记也抓不到（它是英文页）。
      const typeLine = (text.match(/^\*\*(?:Type|类型)[：:]\*\*\s*(.+)$/m) || [])[1] || '';
      const typeIsCsharpDecl = /\b(?:public|internal|protected)\b[\s\S]*\b(?:class|enum|struct|interface|delegate)\b/.test(typeLine);
      const looksHub = h2.some((h) => /一句话定位|大局观|任务地图|常见误用|真实最小示例/.test(h))
        || !/^\*\*(?:Type|类型)[：:]/m.test(text)
        || (typeLine !== '' && !typeIsCsharpDecl);
      if (looksHub) {
        out.fail.push(`J2 hub-shaped page WITHOUT schema declaration: missing=[${missing.join(',')}]`
          + '（修法：【补声明】—— 在页内加 `## 节 schema 声明` 块，或 frontmatter 加 `schema_sections`，而不是把 hub 硬写成类页七节）');
      } else {
        out.fail.push(`J2 missing=${missing.join(',')}`);
      }
    }
  }
  out.checks.J2_h2 = h2;
  out.checks.J2_missing = missing;
  out.checks.J2_see_via = seeMatched;
  // 导航槽：★ 一律从【实际标题】取（而不是硬编码 `导航`）——
  //   与参见族同一个道理：硬编码一个语言的字面，就会让另一种语言的页【构造性地 FAIL】。
  //   实例：`content/v1.3.15/en/architecture/save-object-graph.md` 的导航节叫 `Navigation`，
  //   而旧实现只认 `导航` ⇒ 该节里 6 条正确链接被报成 `links-outside-see/nav`。
  //   声明了 schema 时同样成立（声明只会【缩窄】可接受范围，不会改变“从实际标题取”这个动作）。
  const navNames = h2.filter((h) => NAV_RE.test(h));
  out.checks.J2_nav_slots = navNames;

  // J3 / J4（★ 归属规则已收紧：裸 `:N` 只在【同一块】内归给最近一个完整引用，否则 UNCHECKABLE）
  //   lead-20 #14961 证实旧规则（跨全文归给最近一个完整引用）会【双向】出错：
  //     假阳性：把长文件的引用拿短文件核 ⇒ 报越界（实例 Campaign.md 12 条）
  //     假阴性：把短文件的引用拿长文件核 ⇒ 真越界被静默放过
  //   核心命题：「行号在界内」只有在【归属正确】时才有意义 ⇒ 不确实则报 UNCHECKABLE，【不猜】。
  // ★★ 2026-10-08：捕获组现在允许路径段 `(?:[\w.-]+\/)*`，让 `Dir/File.cs:N` 的路径信息进入 `c.file`。
  //   旧正则只捕获 basename ⇒ 重名文件无法消歧（路径消歧分支成死代码）。
  //   安全性：basename 唯一的引用，其解析路径不经过新逻辑 ⇒ 与修前逐字节一致。
  const REF_RE = /((?:[\w.-]+\/)*[A-Za-z_][\w.]*\.cs):(\d+)|(?<![A-Za-z0-9_.]):(\d+)(?![0-9])/g;
  const fullRefs = [];
  const bareResolved = [];
  const bareUnresolved = [];
  const bareSubject = [];
  // 分块：空行分段；代码围栏自成一整块
  const blocks = [];
  {
    let cur = [];
    let inFence = false;
    for (const line of body.split(/\r?\n/)) {
      if (/^\s*```/.test(line)) {
        inFence = !inFence;
        cur.push(line);
        if (!inFence) { blocks.push(cur.join('\n')); cur = []; }
        continue;
      }
      if (!inFence && line.trim() === '') { if (cur.length) { blocks.push(cur.join('\n')); cur = []; } continue; }
      cur.push(line);
    }
    if (cur.length) blocks.push(cur.join('\n'));
  }
  const seenFiles = new Set();
  const subj = subjectFile(text);
  out.checks.J3_subject_file = subj;
  for (const block of blocks) {
    // 本块内出现的完整引用文件集合
    const blockFiles = new Set();
    REF_RE.lastIndex = 0;
    let m;
    while ((m = REF_RE.exec(block))) if (m[1]) blockFiles.add(m[1]);
    // 归属规则（从确定到不确定）：
    //   ① 本块只有一个文件 ⇒ 用块上下文（最可靠）
    //   ② 本块多个文件 / 本块无完整引用 ⇒ 用【页面主语文件】
    //   ③ 两者都不可用 ⇒ UNCHECKABLE（不猜）
    const blockFile = blockFiles.size === 1 ? [...blockFiles][0] : null;
    REF_RE.lastIndex = 0;
    while ((m = REF_RE.exec(block))) {
      if (m[1]) {
        seenFiles.add(m[1]);
        fullRefs.push({ file: m[1], line: Number(m[2]) });
      } else if (blockFile) {
        bareResolved.push({ file: blockFile, line: Number(m[3]) });
      } else if (subj) {
        bareSubject.push({ file: subj, line: Number(m[3]) });
      } else {
        bareUnresolved.push({ line: Number(m[3]), block: block.slice(0, 40).replace(/\s+/g, ' ') });
      }
    }
  }
  const src = srcRootFor(pageRel);
  const srcIndex = buildSrcIndex(src.root);
  out.checks.J3_src_tree = src.root ? src.root.replace(toPosix(REPO) + '/../', '') : null;
  out.checks.J3_src_unavailable = src.reason;
  // ★★ 每条发现都必须带【版本树标签】（boss-3 #16601）：
  //   理由：存在性/行数/越界都是【版本树依赖】的。实例：同一标识符在 1.3.15 与 1.4.5 里
  //   「存在/不存在」相反；同一文件被量出 356 与 408 行，两个都对。
  //   ⇒ 缺树名的发现，在跨树复核时会被误判。
  const treeTag = src.root
    ? (toPosix(src.root).match(/(bannerlord-[\d.]+)/) || [, 'unknown-tree'])[1]
    : 'no-tree';
  out.checks.J3_tree_tag = treeTag;
  const bad = [];
  const ambiguousList = [];
  let uncheckable = 0;
  let ambiguous = 0;
  const resolveSource = (c) => {
    const base = basename(c.file, '.cs');
    const hits = srcIndex.byBase.get(base);
    if (!hits || !hits.length) return { kind: 'not-found' };
    if (hits.length === 1) return { kind: 'ok', abs: hits[0] };
    // 重名 ⇒ 用引用里的【路径片段】消歧（页面常写 `Dir/File.cs`）。
    // ★★ 2026-10-08 修复：本分支此前是死代码（REF_RE 不捕获 '/'），现已生效。
    const rel = toPosix(c.file);
    if (rel.includes('/')) {
      const tail = rel.replace(/^.*?([A-Za-z_][\w.]*(?:\/[\w.]+)*\.cs)$/, '$1');
      const cand = srcIndex.bySuffix.filter((s) => s.rel.endsWith(tail));
      if (cand.length === 1) return { kind: 'ok', abs: cand[0].abs };
      if (cand.length > 1) return { kind: 'ambiguous', n: cand.length };
      // ★ 路径给了但无任何文件匹配 ⇒ 引用指向不存在的路径 ⇒ not-found（不再落回 ambiguous）
      return { kind: 'not-found' };
    }
    // ★ 裸 basename 且重名 ⇒ 无法判定（调用方 fail closed）
    return { kind: 'ambiguous', n: hits.length };
  };
  const check = (c, kind) => {
    if (!src.root) { uncheckable++; return; }   // ★ 绝不静默回退到别的树
    const r = resolveSource(c);
    if (r.kind === 'not-found') { bad.push(`[${treeTag}] ${c.file}:${c.line} (${kind}: source-not-found)`); return; }
    // ★★ 2026-10-08 修复 ambiguous 洞：重名且无路径消歧 ⇒ 【fail closed】。
    //   旧行为是静默 return（既不查 J3 边界也不查 J13 行内容，且不计 fail）⇒ 页面仍判 PASS，
    //   那是 vacuous-pass 家族的第 7 面。现改为：计数 + 计入 fail ⇒ 该页 FAIL。
    if (r.kind === 'ambiguous') {
      ambiguous++;
      ambiguousList.push(`${c.file}:${c.line} (${kind}, n=${r.n})`);
      return;
    }
    if (c.line > lineCount(r.abs)) {
      bad.push(`[${treeTag}] ${c.file}:${c.line} (${kind}: out-of-range, max=${lineCount(r.abs)})`);
    }
  };
  for (const c of fullRefs) check(c, 'full');
  for (const c of bareResolved) check(c, 'bare-in-block');
  for (const c of bareSubject) check(c, 'bare-subject-file');

  // J13：可疑引用行（行号在界内但那一行是空行 / 纯注释 / 纯标点）
  const suspicious = [];
  if (src.root) {
    const scanJ13 = (c) => {
      const r = resolveSource(c);
      if (r.kind !== 'ok') return;
      if (c.line > lineCount(r.abs)) return;      // 越界交给 J3
      const line = readFileSync(r.abs, 'utf8').split(/\r?\n/)[c.line - 1];
      if (line === undefined) return;
      const t = line.trim();
      if (t === '' || /^\/\//.test(t) || /^[{}()\[\];,]+$/.test(t)) {
        const why = t === '' ? 'blank' : (/^\/\//.test(t) ? 'a comment' : 'punctuation only');
        suspicious.push(`[${treeTag}] ${c.file}:${c.line} (line is ${why})`);
      }
    };
    for (const c of fullRefs) scanJ13(c);
    // ★ 不对 bareResolved / bareSubject 跑 J13：它们的归属是启发式的，
    //   而两种启发式都会错（见文件头 J13 的收窄说明）⇒ 精度判据不跑在启发式归属上。
  }
  out.checks.J13_suspicious_lines = suspicious;
  if (suspicious.length) {
    out.warn.push(`J13 suspicious-citation-lines=${suspicious.length} [${suspicious.slice(0, 3).join('; ')}]`);
  }
  out.checks.J3_citations = fullRefs.length;
  out.checks.J3_bare_resolved = bareResolved.length;
  out.checks.J3_bare_unique_file = bareSubject.length;
  out.checks.J3_checked_total = fullRefs.length + bareResolved.length + bareSubject.length;
  out.checks.J3_uncheckable_no_tree = uncheckable;
  out.checks.J3_unattributable_bare = bareUnresolved.length;
  out.checks.J3_ambiguous_basename = ambiguous;
  out.checks.J3_ambiguous_list = ambiguousList;
  out.checks.J3_bad = bad;
  if (src.reason) {
    out.fail.push(`J3 cannot bounds-check: ${src.reason} ⇒ ${uncheckable} refs UNCHECKABLE（本尺绝不静默用别的版本树顶替）`);
  } else {
    if (bad.length) out.fail.push(`J3 bad-citations=${bad.length} [${bad.slice(0, 4).join('; ')}]`);
    // ★★ 2026-10-08：无法判定的引用单独成条 fail（报不确定 ⇒ 该页 FAIL）
    if (ambiguous) out.fail.push(`J3 ambiguous-citations=${ambiguous}（重名 basename 无法判定 ⇒ fail closed；引用须带路径后缀消歧）[${ambiguousList.slice(0, 4).join('; ')}]`);
  }

  // J4 裸行号 —— ★ 已按 boss-3 #15013 ① 从 FAIL 撤回为【覆盖率指标】。
  //   理由（实测）：裸引用在 b01/b02/b03 里【全部在界内】⇒ 把它判 FAIL 会产出一批假 FAIL，
  //   然后有人据此派修。⇒ 保留为【读数】（每批报一行），不作缺陷判据。
  out.checks.J4_bare_line_refs = bareUnresolved.length;
  if (bareUnresolved.length > 0) {
    out.warn.push(`J4 coverage: unattributable-bare=${bareUnresolved.length}（本块多文件且页面未声明主语源文件 ⇒ 无法归属；【覆盖率读数，不判 FAIL】）`);
  }

  // J5
  if (!isIndex) {
    const dotSlash = (body.match(/\]\(\.\//g) || []).length;
    const indexLinks = (body.match(/\]\([^)]*_index\.md/g) || []).length;
    out.checks.J5_dot_slash = dotSlash;
    out.checks.J5_index_links = indexLinks;
    if (dotSlash) out.fail.push(`J5 dot-slash-links=${dotSlash}`);
    if (indexLinks) out.fail.push(`J5 direct-_index-links=${indexLinks}`);
  }

  // J5R
  const unresolved = unresolvedLinks(pageRel, text);
  out.checks.J5R_unresolved = unresolved;
  if (unresolved.length) out.fail.push(`J5R unresolved-links=${unresolved.length} [${[...new Set(unresolved)].join(', ')}]`);

  // J10：链接只允许出现在【参见族】与【导航】小节（政策 #12761 的机械形式）
  if (!isIndex) {
    let cur = '';
    const stray = [];
    const LINK_ONLY = /\[[^\]]*\]\(([^)\s]+)\)/g;
    for (const line of body.split(/\r?\n/)) {
      const h = line.match(/^##\s+(.+?)\s*$/);
      if (h) { cur = h[1].trim(); continue; }
      if (!cur) continue;
      if (isSeeFamily(cur) || navNames.includes(cur)) continue;
      LINK_ONLY.lastIndex = 0;
      let m;
      while ((m = LINK_ONLY.exec(line))) stray.push(`${cur}: ${m[1]}`);
    }
    out.checks.J10_stray_links = stray;
    if (stray.length) out.fail.push(`J10 links-outside-see/nav=${stray.length} [${stray.slice(0, 4).join('; ')}]`);
  }

  // J11：叶子目标的链接不得带尾斜杠（节索引允许）
  if (!isIndex) {
    const fromUrl = pageFromUrl(pageRel);
    const trailing = [];
    for (const href of relativeLinks(text)) {
      const h = href.split('#')[0];
      if (!h.endsWith('/')) continue;
      if (h === '../' || h === './' || h === '/') continue; // 父节索引
      const stripped = h.replace(/\/+$/, '');
      const t = resolveTarget(fromUrl, stripped);
      // 去掉尾斜杠后存在同名叶子页 ⇒ 目标本就是叶子 ⇒ 尾斜杠是缺陷
      if (t !== null && existsSync(normalize(t + '.md'))) trailing.push(href);
    }
    out.checks.J11_trailing_slash = trailing;
    if (trailing.length) out.fail.push(`J11 leaf-link-with-trailing-slash=${trailing.length} [${[...new Set(trailing)].join(', ')}]`);
  }

  // J12：同一页内【同一链接文字】的所有出现必须指向【同一目标】
  //   ★ boss-3 #15943 精化：比【归一化后的目标】，不是比 href 字符串。
  //   理由：`../Foo` / `./Foo` / `../Foo.md` / `../Foo/` 四种写法若指向同一目标，
  //         应视为【同一个目标】；页内混用两种写法 ⇒ 也应 FAIL。
  //   旧实现只比 href 字符串 ⇒ 会【漏掉】 `../Foo` vs `../Foo.md`（字符串不同、目标相同）
  //         —— 而那正是今天另一批 8 条「多余 .md 后缀」的形态。
  //   归一化：按页面 URL 目录求目标路径 → 去尾斜杠 → 去 `.md`
  //   ⇒ J12 同时覆盖三类：① 同目标两种 href ② 同目标一种带 `.md` ③ 同目标多/少一层 `../`
  //   豁免：`## 导航` 的回程链接（`../` / `../../`）与正文链接【文字不同】⇒ 不会误撞。
  //         已知无「同文字但语义上应指向不同目标」的合法情形；若出现，在此登记豁免与理由。
  if (!isIndex) {
    const fromUrl12 = pageFromUrl(pageRel);
    const normTarget = (href) => {
      const t = resolveTarget(fromUrl12, href);
      if (t === null) return null;
      return normalize(t).replace(/[\\/]+$/, '').replace(/\.md$/, '');
    };
    const byText = new Map();
    const re12 = /\[([^\]]*)\]\(([^)\s]+)\)/g;
    let m12;
    while ((m12 = re12.exec(body))) {
      const label = m12[1].trim();
      const href = m12[2].split('#')[0];
      if (!label || href.startsWith('http') || href.startsWith('mailto:')) continue;
      if (!byText.has(label)) byText.set(label, { targets: new Map(), hrefs: new Set() });
      const rec = byText.get(label);
      rec.hrefs.add(href);
      const key = normTarget(href);
      if (key !== null) rec.targets.set(key, href);
    }
    // ★ 两个条件任一成立即违规（boss-3 #15943 的完整意图）：
    //   · targets.size > 1 ⇒ 同文字指向了【不同目标】（含多/少一层 ../ 的变体）
    //   · hrefs.size   > 1 ⇒ 同文字用了【不同写法】（含 `.md` 后缀、`./`、尾斜杠的变体）
    //     注：后者必须单独判 —— 因为归一化会把 `../Foo` 与 `../Foo.md` 归为同一目标，
    //         只看归一化目标就会【漏掉】那 8 条「多余 .md 后缀」的形态。
    const inconsistent = [...byText.entries()]
      .filter(([, rec]) => rec.targets.size > 1 || rec.hrefs.size > 1)
      .map(([label, rec]) => {
        const why = rec.targets.size > 1 ? 'different targets' : 'same target, different spellings';
        return `${label} -> [${[...rec.hrefs].join(' | ')}] (${why})`;
      });
    out.checks.J12_inconsistent_text = inconsistent;
    if (inconsistent.length) {
      out.fail.push(`J12 same-link-text-different-target=${inconsistent.length} [${inconsistent.slice(0, 3).join('; ')}]`);
    }
  }

  // J6 + 两个口径
  const cp = classifyPage(pageRel, text);
  const nonLinkReasons = cp.reasons.filter((r) => !LINK_FAMILY_REASONS.includes(r));
  const linkOnlyStub = cp.status !== 'deep_pass' && nonLinkReasons.length === 0 && cp.reasons.length > 0;
  const tier = censusTier(pageRel, text, body, cp.status);
  out.checks.J6_classifyPage = { status: cp.status, reasons: cp.reasons };
  out.checks.J6_nonLinkReasons = nonLinkReasons;
  out.checks.J6_linkOnlyStub = linkOnlyStub;
  out.checks.deepPass = cp.status === 'deep_pass';
  out.checks.tier = tier;
  if (mode === 'require') {
    if (cp.status !== 'deep_pass') out.fail.push(`J6 classifyPage=${cp.status} (${cp.reasons.join(', ')})`);
  } else {
    // 政策模式：只允许「链接族」理由，且必须显式记录这是政策造成的
    if (cp.status !== 'deep_pass' && nonLinkReasons.length > 0) {
      out.fail.push(`J6 classifyPage=${cp.status} 非链接族理由=[${nonLinkReasons.join(', ')}]`);
    } else if (linkOnlyStub) {
      out.warn.push(`J6 stub 仅因「无跨页链接」政策（${cp.reasons.join(', ')}）⇒ deepPass=false 但 tier=${tier}`);
    }
  }

  // J7
  const genHits = GEN_MARKERS.filter((s) => text.includes(s));
  out.checks.J7_gen_markers = genHits;
  if (genHits.length) out.fail.push(`J7 gen-marker=${genHits.join('|')}`);

  // J8
  const bodyBytes = Buffer.byteLength(body, 'utf8');
  const h2h3 = (body.match(/^#{2,3}\s+/gm) || []).length;
  out.checks.J8_bodyBytes = bodyBytes;
  out.checks.J8_h2h3 = h2h3;
  if (!(bodyBytes > DEEP_BODY_MIN_BYTES && h2h3 >= 1)) out.fail.push(`J8 body=${bodyBytes}B h2h3=${h2h3}`);

  // J9
  let codeLines = 0;
  for (const m of text.matchAll(/```csharp\r?\n([\s\S]*?)```/gi)) {
    codeLines += m[1].split(/\r?\n/).map((l) => l.replace(/\/\/.*$/, '').trim()).filter(Boolean).length;
  }
  out.checks.J9_csharp_lines = codeLines;
  if (codeLines < 3) out.fail.push(`J9 csharp-lines=${codeLines}`);

  out.pass = out.fail.length === 0;
  return out;
}

// ---- cross-check：拿真门禁对账 J5R 副本 -------------------------------------
function crossCheck(results) {
  let raw;
  try {
    raw = execFileSync(process.execPath, [join(REPO, 'tools', 'audit-links.mjs')], {
      cwd: REPO, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024,
    });
  } catch (e) {
    raw = (e.stdout || '').toString();
  }
  const realBroken = new Set();
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^## (.+?)\s+\(\d+\)\s*$/);
    if (m) realBroken.add(m[1].trim());
  }
  const mineBroken = new Set(results.filter((r) => (r.checks.J5R_unresolved || []).length).map((r) => r.page));
  const judged = results.map((r) => r.page);
  const judgedRel = new Set(judged.map((p) => toPosix(p).replace(/^content\//, '')));
  const realOnJudged = [...realBroken].filter((f) => judgedRel.has(f));
  const agree = realOnJudged.length === mineBroken.size
    && realOnJudged.every((f) => mineBroken.has('content/' + f));
  console.log('\n# CROSS-CHECK vs tools/audit-links.mjs (authoritative)');
  console.log('#   gate says broken among judged files: ' + (realOnJudged.length ? realOnJudged.join(', ') : '(none)'));
  console.log('#   J5R says unresolved among judged files: ' + (mineBroken.size ? [...mineBroken].join(', ') : '(none)'));
  console.log('#   verdict: ' + (agree ? 'AGREE' : 'DRIFT — trust audit-links.mjs, fix the J5R copy'));
  return agree;
}

// ---- main ------------------------------------------------------------------
const argv = process.argv.slice(2);
let pages = [];
let jsonOut = null;
let mode = 'require';
let doCross = false;
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--manifest') {
    const lines = readFileSync(resolve(REPO, argv[++i]), 'utf8').split(/\r?\n/);
    pages.push(...lines.filter((l) => l.trim() && !l.startsWith('#')));
  } else if (argv[i] === '--json') {
    jsonOut = resolve(REPO, argv[++i]);
  } else if (argv[i] === '--links') {
    mode = argv[++i] === 'require' ? 'require' : 'off';
  } else if (argv[i] === '--cross-check') {
    doCross = true;
  } else {
    pages.push(argv[i]);
  }
}
if (!pages.length) {
  console.error('usage: lead-145zh-judge.mjs --manifest <f> [--json <f>] [--links require|off] [--cross-check] | <page.md> ...');
  process.exit(2);
}

// ★ 安全联锁：测试钩子泄露到 content/ 验收时会产出一个【看似合理】的全 FAIL。
//   实例（2026-10-07）：`export LEAD145ZH_CONTENT_ROOT=…fixture/content` 与 b01 的验收同跑，
//   J5R 在夹具根下解析不了 b01 的链接 ⇒ `pass=0 fail=5`，而 deep_pass 仍为 4/5。
//   那个读数看起来完全正常，没有一行在报警。所以这里直接拒跑。
if (process.env.LEAD145ZH_CONTENT_ROOT) {
  const realContent = pages.filter((p) => /^content\//.test(toPosix(p)));
  if (realContent.length) {
    console.error('REFUSING: LEAD145ZH_CONTENT_ROOT is set (fixture-only hook) but these are real content/ pages:');
    for (const p of realContent) console.error('  ' + p);
    console.error('Unset the hook to judge content/ — a leaked hook yields a plausible all-FAIL reading.');
    process.exit(2);
  }
}

console.log(`# mode=--links ${mode}${doCross ? ' +cross-check' : ''}`);
// ★ 自我识别：判分器把自己的 sha256 打进输出。
//   理由（lead-20 #13207 实测）：本判分器在验证过程中被改过（c833eac06e 新增 J11，
//   21981B/15:26 → 23649B/15:41），而当时已发布的 pass/deep_pass/tier 读数【没带 sha】
//   ⇒ 无法判定那些读数是用哪把尺量的。
//   把 sha 放进输出，比要求“发布时记得附 sha”更耐用：
//   前者是一个忘不掉的动作，后者是一个需要记得的动作。
const SELF_SHA = createHash('sha256').update(readFileSync(fileURLToPath(import.meta.url))).digest('hex');
console.log(`# judge sha256 = ${SELF_SHA}`);
console.log(`# judge mtime  = ${statSync(fileURLToPath(import.meta.url)).mtime.toISOString()}`);
// ★★ 自身工作区状态自检（lead-20 #16102 ③ 的机械形式）
//   背景：有一个尺版本 `3dc897bc91f672dd` 【从未进入 git】（未提交的工作区状态），
//         却对已冻结批次 b05 出了 4/5 的判决 ⇒ 而三个【已提交】版本都判 5/5。
//   ⇒ 规则：【判据文件的未提交工作区状态，不得用于产出对外判决】。
//   这里把它做成“忘不掉的动作”：尺自己检测并打印，而不是靠人记得先跑 git status。
let selfDirty = false;
try {
  const rel = toPosix(fileURLToPath(import.meta.url)).replace(toPosix(REPO) + '/', '');
  execFileSync('git', ['diff', '--quiet', 'HEAD', '--', rel], { cwd: REPO, stdio: 'ignore' });
} catch { selfDirty = true; }
if (selfDirty) {
  console.log('# ⚠ judge working-tree = DIRTY（本文件与 HEAD 不同）⇒ 【本读数不得作为对外判决使用】');
  console.log('#   请先 commit 本文件，再用已提交的那一版重跑。');
} else {
  console.log('# judge working-tree = clean（与 HEAD 一致）');
}
const results = pages.map((p) => judge(p, mode));
for (const r of results) {
  console.log(`${r.pass ? 'PASS' : 'FAIL'}  ${r.page}`);
  console.log(`      J1 fffd=${r.checks.J1_fffd} · J2 missing=[${(r.checks.J2_missing || []).join(',')}] · J3 tree=${r.checks.J3_src_tree || ('UNCHECKABLE:' + r.checks.J3_src_unavailable)} subject=${r.checks.J3_subject_file || '-'} checked=${r.checks.J3_checked_total} (full=${r.checks.J3_citations} + inBlock=${r.checks.J3_bare_resolved} + subject=${r.checks.J3_bare_unique_file}) bad=${(r.checks.J3_bad || []).length} ambiguous=${r.checks.J3_ambiguous_basename} · J4 unattributable=${r.checks.J4_bare_line_refs}`);
  console.log(`      J5 dotSlash=${r.checks.J5_dot_slash ?? 'n/a'} indexLinks=${r.checks.J5_index_links ?? 'n/a'} · J5R unresolved=${(r.checks.J5R_unresolved || []).length} · J10 stray=${(r.checks.J10_stray_links || []).length} · J11 trailSlash=${(r.checks.J11_trailing_slash || []).length} · J8 ${r.checks.J8_bodyBytes}B/${r.checks.J8_h2h3} · J9 csharp=${r.checks.J9_csharp_lines}`);
  console.log(`      J6=${r.checks.J6_classifyPage?.status} · deepPass=${r.checks.deepPass} · tier=${r.checks.tier} · J7 markers=${(r.checks.J7_gen_markers || []).length}`);
  if (r.checks.J2_h2?.length) console.log(`      H2: ${r.checks.J2_h2.join(' | ')}`);
  if (r.checks.J2_declared) console.log(`      J2 declared schema via ${r.checks.J2_declared.source} (${r.checks.J2_declared.names.length} names)`);
  console.log(`      J12 inconsistent-text=${(r.checks.J12_inconsistent_text || []).length} · navSlots=[${(r.checks.J2_nav_slots || []).join(',')}] · J13 suspicious-lines=${(r.checks.J13_suspicious_lines || []).length}`);
  if (r.checks.J2_see_via?.length) console.log(`      J2 参见族 via=[${r.checks.J2_see_via.join(',')}]${r.checks.J2_see_via.includes('参见') ? '' : '  ← 别名命中（页里没有 `参见` 标题）'}`);
  for (const f of r.fail) console.log(`      ✗ ${f}`);
  for (const w of r.warn) console.log(`      ! ${w}`);
}
const passed = results.filter((r) => r.pass).length;
const deepPass = results.filter((r) => r.checks.deepPass).length;
const tierDeep = results.filter((r) => r.checks.tier === 'handwritten_deep').length;
console.log(`\nJUDGE total=${results.length} pass=${passed} fail=${results.length - passed}`);
console.log(`# 两个口径（必须分开报）: deep_pass=${deepPass}/${results.length} · tier=handwritten_deep=${tierDeep}/${results.length}`);

let agree = null;
if (doCross) agree = crossCheck(results);

if (jsonOut) {
  writeFileSync(jsonOut, JSON.stringify({
    judgedAt: new Date().toISOString(), judgeSha256: SELF_SHA, mode,
    total: results.length, pass: passed,
    deepPass, tierDeep, crossCheckAgree: agree, results,
  }, null, 2) + '\n');
}
process.exit(passed === results.length ? 0 : 1);
