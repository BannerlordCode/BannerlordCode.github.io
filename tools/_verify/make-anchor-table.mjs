#!/usr/bin/env node
// ============================================================================
// tools/_verify/make-anchor-table.mjs  —  READ-ONLY 引用锚点表抽取器
// ----------------------------------------------------------------------------
// 用途：为手写深页的「源码引用」提供【唯一合法来源】。
//
// 背景（本线实测，2026-10-07）：
//   content/v1.4.6/zh/api/mission-ext/MissionLogic.md 的 11 个不同引用行号
//   **11/11 全部指向空行 / ILSpy `// Token:` 注释行 / 孤立括号行**，
//   且同一组行号在 1.3.15 / 1.4.7 / 1.5.3 树里同样落在空行或注释上
//   ⇒ 那些行号不是「读错了版本树」，而是按文件长度【均匀铺开的编造】
//     （16→69 均匀分布，正是一份 70 行文件的「看起来合理」假行号）。
//   而该页同时通过了 deep_pass / tier=handwritten_deep / 七节 / J3 bad=0 / 76 个 csharp 块
//   ⇒ 机械门禁全绿、内容却是编的。本工具是那类缺陷的机械反制。
//
// 用法:
//   node tools/_verify/make-anchor-table.mjs <srcRoot> <relative.cs> [<relative.cs> ...]
//   node tools/_verify/make-anchor-table.mjs --list <srcRoot> <listFile>
//
// 输出格式（零散文，逐行 `行号: 原文行`）:
//   ### <relative.cs>   (wc -l = N)
//   <行号>: <原文行>
//
// 规则（故意窄，宁可少列也不列错）:
//   · 只列【声明锚点】: 类型声明 + public/protected 成员声明（含属性/字段/事件）
//   · 显式排除: 空行 / 纯空白 / `//` 注释（含 ILSpy `// Token:`）/ 纯括号标点行
//   · 不写任何散文、不生成任何 content/** 产物 —— 只打印源码原文行
//
// 本工具【不修改任何文件】，只读 + stdout。
// ============================================================================

import fs from 'node:fs';
import path from 'node:path';

const DECL_RE = /^\s*(?:\[[^\]]*\]\s*)?(?:public|protected internal|protected|internal)\s/;
const TYPE_RE = /\b(class|struct|interface|enum|delegate)\s+[A-Za-z_]\w*/;
// 成员声明：终止符可能是 `(`/`<`/`{`/`;`/`=`，也可能【该行就到此为止】
// （反编译产物里属性常写成 `public override MissionBehaviorType BehaviorType` 而把 `{` 放到下一行）
// ★ 2026-10-07 实测修正：原先要求终止符必须在同一行 ⇒ 漏掉 MissionLogic.cs:13，
//   属于「判据比语料窄」。故补 `\s*$` 分支（本文件按行 split，`$` = 行尾）。
//
// ★★ 2026-10-08 扩展（boss #21535 更正一条过窄标准）：
//   旧标准写「关键成员表只列 public/protected」——**过窄**。
//   正确标准：一个成员行是否进表，取决于「**有没有解释价值 + 能不能给出行号引用**」，
//   不取决于 public/private。private 累加器（如 DefaultSettlementSecurityModel 的三个
//   `Calculate*EffectOnSecurity`）与 protected 钩子都承载真实解释价值。
//   ⇒ 本抽取器必须把 **private / internal 的辅助方法与属性**也抽进来，
//     否则写手只能去源码本体找行号，J13 风险上升。
//   仍【不】抽 private/internal 的**字段**（纯状态存储，解释价值低且数量大）。
const MEMBER_RE =
  /^\s*(?:\[[^\]]*\]\s*)*(public|protected internal|protected|internal|private)\s+(?:static\s+|virtual\s+|override\s+|abstract\s+|sealed\s+|readonly\s+|const\s+|new\s+|partial\s+|extern\s+|unsafe\s+|async\s+)*[\w\.<>\[\],\?]+\s+(\w+)\s*(?:[(<{;=]|\s*$)/;

// 一行是否可作为引用锚点
function anchorKind(raw) {
  const t = raw.trim();
  if (t === '') return null;                                  // 空行
  if (t.startsWith('//')) return null;                        // 注释（含 ILSpy Token 行）
  if (/^[{}();,]+$/.test(t)) return null;                     // 纯括号标点
  if (TYPE_RE.test(raw) && DECL_RE.test(raw)) return 'type';
  const m = raw.match(MEMBER_RE);
  if (m) {
    const access = m[1];
    const term = raw.slice(raw.indexOf(m[2]) + m[2].length).trim();
    // 不抽 private/internal 的【字段】（终符为 `;`/`=` 且无 `(`）：解释价值低、数量大
    const isFieldLike = /^[;=]/.test(term) && !raw.includes('(');
    if ((access === 'private' || access === 'internal') && isFieldLike) return null;
    return 'member';
  }
  return null;
}

function anchorsFor(abs) {
  const lines = fs.readFileSync(abs, 'utf8').split(/\r?\n/);
  // wc -l 语义: 末尾换行不计一行
  const wc = lines[lines.length - 1] === '' ? lines.length - 1 : lines.length;
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const kind = anchorKind(lines[i]);
    if (kind) out.push({ line: i + 1, kind, raw: lines[i] });
  }
  return { wc, out };
}

const argv = process.argv.slice(2);
let srcRoot, files;

if (argv[0] === '--list') {
  srcRoot = argv[1];
  files = fs
    .readFileSync(argv[2], 'utf8')
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter((s) => s && !s.startsWith('#'));
} else {
  srcRoot = argv[0];
  files = argv.slice(1);
}

if (!srcRoot || !files.length) {
  console.error('usage: make-anchor-table.mjs <srcRoot> <relative.cs> ... | --list <srcRoot> <listFile>');
  process.exit(2);
}

let totalAnchors = 0;
for (const rel of files) {
  const abs = path.join(srcRoot, rel);
  if (!fs.existsSync(abs)) {
    console.log(`### ${rel}   MISSING`);
    continue;
  }
  const { wc, out } = anchorsFor(abs);
  totalAnchors += out.length;
  console.log(`### ${rel}   (wc -l = ${wc}, anchors = ${out.length})`);
  for (const a of out) console.log(`${a.line}: ${a.raw}`);
  console.log('');
}
console.log(`# TOTAL anchors = ${totalAnchors} across ${files.length} file(s)`);
console.log('# 引用纪律: 页面里每一条 `X.cs:N` 的 N 必须出现在上表；表外的行号一律不得引用。');
