#!/usr/bin/env node
// ============================================================================
// tools/_verify/j13-hard-gate.mjs — 把判分器的 J13 从【警告】提升为【硬门禁】
// ----------------------------------------------------------------------------
// 为什么需要它（boss-4 #20634 实测的跨线门禁洞）：
//   lead-145zh-judge.mjs 把 `J13 suspicious-lines` 只当 `!` 警告，不进 pass/fail。
//   于是 content/v1.4.6/zh/api/mission-ext/MissionLogic.md 拿到了
//   `deep_pass · tier=handwritten_deep · J3 checked=13 bad=0 · J9 csharp=76`
//   —— 而 11/11 条 `X.cs:N` 引用指向的是空行 / 纯注释 / 纯标点（按文件长度均匀铺开编的）。
//   ⇒ 「机械门禁全绿、内容为假」。本脚本把那个警告变成 exit code。
//
// 它【不重新实现】J13：它调用权威判分器，解析它自报的 `J13 suspicious-lines=N` 逐页取数。
//   ⇒ 不复制判据、不与判据漂移（_INTEGRATION-GATES §5「门禁自身的门禁」）。
//
// ★★ 2026-10-07 扩展之二（boss-4 #20733 统一的四道硬判据，本线逐条落地）：
//   ① J3 bad = 0
//   ② J3 checked ≥ 该页「关键成员」行数   ← 防空引用：checked=0 的「空洞 PASS」
//   ③ J13 suspicious-lines = 0           ← 防伪造引用（空行/纯注释/纯标点）
//   ④ M+K = 0                             ← 防裸引用绕过 J13
//   本脚本①②③④ 全查；其中 ② 需要读页面本身数「关键成员」表的数据行。
//
// ★★ 常设规则（boss-4 #20808 定为跨线，本门禁遵守并在代码里实现）：
//   每条判据必须在【输入缺失 / 不可解析】时 fail closed（exit 2），**不得 vacuous PASS**。
//   判据的「通过」必须由一个**可被证伪的读数**支撑。
//   同一族的第 4 次实例（四次都是「没量到 ⇒ 通过」）：
//     ① `j3bad` 未初始化 ⇒ undefined 逃过守卫（lead-29 自查）
//     ② `memberRowCount()` 只数表格行 ⇒ bullet 格式页 members=0（lead-28 发现，boss-4 实测）
//     ③ J13 在判分器里只是警告 ⇒ 伪造行号能拿 deep_pass（boss-4）
//     ④ `checked=0` 空洞 PASS（boss-4）
//   实现手法：**让输出里出现一个不该出现的值**（例：正常应为 `bad=0`，它却变成 `bad=undefined`），
//   于是不需要人去对账，它自己报警（DISPATCH-TEMPLATE.md §2）。
//
// ★★ 2026-10-08 扩展之三（boss-4 #22070 裁定）：hard gate 必须**镜像 brief 的页级验收清单**。
//   根因（本会话实测）：worker 只跑本脚本，而旧版本只查 ①②③④（J3 bad / checked≥members / J13 / bare），
//   **不查 J6 / J10 / J11 / J12 / J7** —— 而 brief 里列了它们 ⇒ worker 看到 PASS 就以为全绿，
//   形状类缺陷（`J6=stub`、正文里写链接）只能等 R2 才暴露，而 R2 是瓶颈。
//   实测两个反复复发的缺陷类：
//     · `J6=stub (no-real-example)`：本会话 2 次（LocalizationException、SettlementSecurityModel）
//     · `J10 stray=2`（链接写在概述/怎么用）：本会话 2 次
//   ⇒ 完整清单（**明确排除 J5R** —— 批次级、并发批里天然非零）：
//     ① J3 bad=0  ② checked≥members  ③ J13=0  ④ bare=0
//     ⑤ J6=deep_pass  ⑥ J10 stray=0  ⑦ J11 trailSlash=0  ⑧ J12 inconsistent-text=0  ⑨ J7 markers=0
//   ★ 这不是放宽也不是加强判据本身：它只是让本 wrapper **完整反映权威判分器已有的读数**。
//
//   ★ 运行夹具时必须设测试钩子（判分器自身的设计，见其 `LEAD145ZH_CONTENT_ROOT`）：
//       LEAD145ZH_CONTENT_ROOT=tools/_verify/j13-fixture node tools/_verify/j13-hard-gate.mjs <夹具页>
//     为什么：判分器默认按【真实】content 根解析页内链接，而夹具在 tools/ 下 ⇒ 夹具内部链接全解析不到，
//     **`J11` 这类依赖「目标是否真实存在」的判据就不会红**（我实测踩过：J11Trail 不带钩子时 J11=0）。
//     带钩子后：J6Stub→J6=stub · J10Stray→J10=1 · J11Trail→J11=1 · J12Inconsistent→J12=1 · J7Marker→J7=1。
//     正向对照 = 真实已提交页（如 content/v1.4.7/zh/api/campaign-ext/SettlementFoodModel.md）⇒ ⑨ 条全绿。
//
// 用法:
//   node tools/_verify/j13-hard-gate.mjs <page.md> [<page.md> ...]
//   node tools/_verify/j13-hard-gate.mjs --manifest <list.txt>
// 退出码: 0 = 九条全过 ；1 = 任一条不过 ；2 = 读数不完整或「关键成员」无法判定（fail closed）
//
// ★ READ-ONLY：只读页面、只跑判分器。不写 content/，不写任何文件。
// ============================================================================
import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, '..', '..');
const JUDGE = resolve(HERE, 'lead-145zh-judge.mjs');

const argv = process.argv.slice(2);
let pages = [];
if (argv[0] === '--manifest') {
  const f = argv[1];
  if (!f || !existsSync(f)) {
    console.error(`manifest not found: ${f}`);
    process.exit(2);
  }
  pages = readFileSync(f, 'utf8')
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'));
} else {
  pages = argv.filter((a) => !a.startsWith('--'));
}
if (!pages.length) {
  console.error('usage: node tools/_verify/j13-hard-gate.mjs <page.md> [...]');
  process.exit(2);
}

let out;
try {
  out = execFileSync(process.execPath, [JUDGE, ...pages], {
    cwd: REPO,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  });
} catch (e) {
  // 判分器以非 0 退出（页面 FAIL）是正常情形，输出仍在 stdout
  out = (e.stdout || '') + (e.stderr || '');
  if (!out.trim()) {
    console.error('judge produced no output; cannot trust J13 reading');
    process.exit(2);
  }
}

// 逐页解析：判分器每页打一行 `FAIL  <path>` / `PASS  <path>`，随后有 `J13 suspicious-lines=N`
const rows = [];
let current = null;
for (const line of out.split(/\r?\n/)) {
  const mHead = line.match(/^(PASS|FAIL)\s+(\S+)\s*$/);
  if (mHead) {
    current = { status: mHead[1], path: mHead[2], j13: null, bare: null, checked: null, j3bad: null, j6: null, j7: null, j10: null, j11: null, j12: null };
    rows.push(current);
    continue;
  }
  const m13 = line.match(/J13 suspicious-lines=(\d+)/);
  if (m13 && current && current.j13 === null) current.j13 = Number(m13[1]);
  // `checked=81 (full=81 + inBlock=0 + subject=0)` ⇒ 裸引用 = inBlock + subject
  const mChk = line.match(/checked=(\d+)\s*\(full=(\d+)\s*\+\s*inBlock=(\d+)\s*\+\s*subject=(\d+)\)/);
  if (mChk && current && current.bare === null) {
    current.checked = Number(mChk[1]);
    current.bare = Number(mChk[3]) + Number(mChk[4]);
  }
  const mBad = line.match(/J3\s+tree=.*?\bbad=(\d+)/);
  if (mBad && current && current.j3bad === null) current.j3bad = Number(mBad[1]);
  // ⑤ J6（判分器同页会打 `J6=deep_pass · deepPass=true · tier=… · J7 markers=N`）
  const m6 = line.match(/J6=(\S+)/);
  if (m6 && current && current.j6 === null) current.j6 = m6[1];
  // ⑨ J7 生成标记
  const m7 = line.match(/J7 markers=(\d+)/);
  if (m7 && current && current.j7 === null) current.j7 = Number(m7[1]);
  // ⑥ J10 / ⑦ J11（同一行：`J10 stray=N · J11 trailSlash=N`）
  const m10 = line.match(/J10 stray=(\d+)/);
  if (m10 && current && current.j10 === null) current.j10 = Number(m10[1]);
  const m11 = line.match(/J11 trailSlash=(\d+)/);
  if (m11 && current && current.j11 === null) current.j11 = Number(m11[1]);
  // ⑧ J12（`J12 inconsistent-text=N`）
  const m12 = line.match(/J12 inconsistent-text=(\d+)/);
  if (m12 && current && current.j12 === null) current.j12 = Number(m12[1]);
}

if (!rows.length) {
  console.error('could not parse any per-page verdict from judge output');
  process.exit(2);
}
// 「关键成员」的成员行数（供判据② 防空引用 用）
// ★ 必须同时认两种合法页面形态（本仓三种格式都有在用）：
//   · 表格行：  `| \`AddToCounts\` | 用途 |`   （v1.4.7 / v1.4.6）
//   · bullet 行：`- **AddToCounts**（`File.cs:12`）— 用途`  或  `- \`AddToCounts\``   （v1.5.3）
// ★ fail closed：数不出任何成员行（0 行）或找不到「关键成员」节 ⇒ 返回 null ⇒ 上层 exit 2，**不得 PASS**。
//   理由（boss-4 #20808）：一条「因为没量到所以通过」的判据不是判据。
function memberRows(abs) {
  if (!existsSync(abs)) return null;
  const text = readFileSync(abs, 'utf8');
  const m = text.match(/^##\s*(?:关键成员|Key\s*Members)\s*$/m);
  if (!m) return null; // 节缺失 ⇒ 无法判定
  const rest = text.slice(m.index + m[0].length);
  const next = rest.search(/^##\s+/m);
  const block = next < 0 ? rest : rest.slice(0, next);
  let table = 0;
  let bullet = 0;
  for (const line of block.split(/\r?\n/)) {
    const t = line.trim();
    if (t.startsWith('|')) {
      if (/^\|\s*:?-{2,}/.test(t)) continue; // 分隔行 | --- | --- |
      if (/^\|\s*成员\s*\|/.test(t)) continue; // 表头
      if (/^\|\s*Member\s*\|/i.test(t)) continue; // 表头（en）
      table += 1;
      continue;
    }
    // bullet 形态：`- **Name**` / `- \`Name\`` / `* **Name**`
    if (/^[-*]\s+\*\*[^*]+\*\*/.test(t) || /^[-*]\s+`[^`]+`/.test(t)) bullet += 1;
  }
  const count = table + bullet;
  if (count === 0) return null; // ★ fail closed
  return { count, table, bullet };
}

const unparsed = rows.filter(
  (r) =>
    r.j13 === null || r.bare === null || r.checked === null || r.j3bad === null ||
    r.j6 === null || r.j7 === null || r.j10 === null || r.j11 === null || r.j12 === null
);
if (unparsed.length) {
  console.error(`judge readings incomplete for ${unparsed.length} page(s):`);
  for (const r of unparsed) console.error(`  ${relative(REPO, r.path)}`);
  console.error('⇒ reading is untrustworthy; treating as failure (exit 2)');
  process.exit(2);
}

for (const r of rows) {
  const abs = resolve(REPO, r.path);
  r.mr = memberRows(abs);
}

// ★ fail closed：成员行数不可判定 ⇒ exit 2，不得 PASS
const undeterminable = rows.filter((r) => r.mr === null);
if (undeterminable.length) {
  console.error(`「关键成员」member rows NOT determinable for ${undeterminable.length} page(s):`);
  for (const r of undeterminable) console.error(`  ${relative(REPO, r.path)}`);
  console.error('⇒ fail closed：判据② 无法成立，「没量到」不等于「通过」。');
  console.error('⇒ 检查：该页是否有 `## 关键成员` 节？成员行是否写成表格或 `- **Name**` 形态？');
  process.exit(2);
}

const bad = rows.filter((r) => r.j13 > 0);
const bare = rows.filter((r) => r.bare > 0);
const j3bad = rows.filter((r) => r.j3bad > 0);
const empty = rows.filter((r) => r.checked < r.mr.count);
const notDeep = rows.filter((r) => r.j6 !== 'deep_pass');
const markers = rows.filter((r) => r.j7 > 0);
const stray = rows.filter((r) => r.j10 > 0);
const trail = rows.filter((r) => r.j11 > 0);
const inconsistent = rows.filter((r) => r.j12 > 0);

console.log(`# page gate — ${rows.length} page(s)  [①bad=0 ②checked>=members ③J13=0 ④bare=0 ⑤J6=deep_pass ⑥J10=0 ⑦J11=0 ⑧J12=0 ⑨J7=0]`);
for (const r of rows) {
  const ok =
    r.j3bad === 0 && r.j13 === 0 && r.bare === 0 && r.checked >= r.mr.count &&
    r.j6 === 'deep_pass' && r.j7 === 0 && r.j10 === 0 && r.j11 === 0 && r.j12 === 0;
  console.log(
    `  ${ok ? 'OK  ' : 'FAIL'}  bad=${r.j3bad}  checked=${String(r.checked).padStart(4)}  members=${String(r.mr.count).padStart(4)} (tbl=${r.mr.table},bul=${r.mr.bullet})  J13=${String(r.j13).padStart(3)}  bare=${String(r.bare).padStart(3)}  J6=${String(r.j6).padEnd(9)}  J7=${r.j7}  J10=${r.j10}  J11=${r.j11}  J12=${r.j12}  ${relative(REPO, r.path).replace(/\\/g, '/')}`
  );
}
if (j3bad.length) console.error(`\nRESULT: FAIL — ${j3bad.length}/${rows.length} page(s) have out-of-bounds citations (J3 bad>0)`);
if (empty.length) {
  console.error(`\nRESULT: FAIL — ${empty.length}/${rows.length} page(s) have fewer citations than 「关键成员」rows (防空引用)`);
  for (const r of empty) console.error(`  checked=${r.checked} < members=${r.mr.count}  ${relative(REPO, r.path)}`);
}
if (bad.length) console.error(`\nRESULT: FAIL — ${bad.length}/${rows.length} page(s) have suspicious line citations (J13>0)`);
if (bare.length) console.error(`\nRESULT: FAIL — ${bare.length}/${rows.length} page(s) contain BARE ` + '`:N` citations (no filename)');
if (notDeep.length) {
  console.error(`\nRESULT: FAIL — ${notDeep.length}/${rows.length} page(s) are not deep_pass (J6=stub/noise)`);
  for (const r of notDeep) console.error(`  J6=${r.j6}  ${relative(REPO, r.path)}`);
  console.error('⇒ 最常见原因：`## 真实示例` 里没有一次真实 `.Method(` 调用（`new X(...)` 不算）。');
}
if (markers.length) console.error(`\nRESULT: FAIL — ${markers.length}/${rows.length} page(s) contain generation markers (J7>0)`);
if (stray.length) {
  console.error(`\nRESULT: FAIL — ${stray.length}/${rows.length} page(s) have links outside 参见/导航 (J10>0)`);
  for (const r of stray) console.error(`  J10 stray=${r.j10}  ${relative(REPO, r.path)}`);
}
if (trail.length) console.error(`\nRESULT: FAIL — ${trail.length}/${rows.length} page(s) have leaf links with trailing slash (J11>0)`);
if (inconsistent.length) console.error(`\nRESULT: FAIL — ${inconsistent.length}/${rows.length} page(s) reuse one link text for different targets (J12>0)`);
if (j3bad.length || empty.length || bad.length || bare.length || notDeep.length || markers.length || stray.length || trail.length || inconsistent.length) process.exit(1);
console.log(`\nRESULT: PASS — all ${rows.length} page(s): ①②③④⑤⑥⑦⑧⑨ all green`);
