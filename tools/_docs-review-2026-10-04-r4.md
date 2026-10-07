# 文档独立审查报告 — 2026-10-04 第 4 轮

审查者：lead-9（只读。未改正文、未 git add/commit/push）
本轮专案：**补三轮欠账 —— `tools/nav-section-index.mjs` 自身审计**
采样时刻：改动文件 316

---

## 0. 先纠正我自己：前三轮我把一条「已知待裁定」报成了「🔴 真缺陷」

`nav-section-index.mjs` 里对重复 marker 有**显式处理**：

```js
// planSummary / 主流程报告里
if (p.dup) report.push(`   PROPOSAL_NOT_DONE_DUPLICATE_MARKER: ... 删掉多余 BEGIN 行属于
   marker 块之外的改动，落在「禁止改动已有人工内容」与「只写 marker 块内」的缝里，
   本轮按 boss 裁定【不删】。需要单独授权才能修。`);
```

自检里还有一条**断言它不许删**：
```js
ok('重复 marker：不删多余 BEGIN 行（禁止项）', bNext.split(/\r?\n/).filter(l => l.trim() === BEGIN).length === 2);
```

⇒ **重复 marker 是已被发现、已被裁定「不删」的待办，不是没人知道的 bug。**
我在第 1/2/3 轮把它写成「🔴 真缺陷 / 护栏失效」，**定性错了**。这条我认。

**但下面这条不是定性错 —— 它是那个「不删」决定从未被评估过的后果，我第一次把它量到底。**

---

## 1. 🔴 新发现：重复 marker 会让护栏的可写区静默吞掉手写散文

### 1.1 代码级证据（三处）

**(a) 护栏用「第一个」marker 定边界**
```js
// tools/lib/content-write-freeze.mjs
function lineOf(text, needle) {
  const i = text.indexOf(needle);      // ← indexOf = 第一个匹配
  if (i < 0) return -1;
  return text.slice(0, i).split('\n').length;
}
```

**(b) 护栏没有任何重复 marker 的检查**
```
$ grep -n "dup\|Duplicate\|count\|lastIndexOf\|indexOf" tools/lib/content-write-freeze.mjs
102:  const i = text.indexOf(needle);
```
全文件只有这一处 `indexOf`。**没有 dup 计数、没有 lastIndexOf、没有 marker 数量断言。**

**(c) 脚本自己也不拦**
```js
// --apply 主循环
if (p.note === 'NO_INDEX_MD') { ...skip... }
if (!p.add.length)         { ...skip... }
// 没有 if (p.dup) skip
```
`p.dup` 只进报告行，**不阻止写入**。

### 1.2 后果量化（三个 b=2/e=1 的文件）

| 文件 | BEGIN 行 | END 行 | 护栏可写区 | 区内手写中文行 | **待写入项** |
|---|---|---|---|---:|---:|
| `v1.3.15/en/api/campaign-ext/_index.md` | 9, 10 | 2978 | 9..2977 | 0 | **0** |
| `v1.3.15/zh/api/campaign-ext/_index.md` | 41, 42 | 3013 | 41..3012 | **31** | **0** |
| `v1.4.5/zh/api/campaign-ext/_index.md` | 41, 42 | 3851 | 41..3850 | **42** | **0** |

区内手写内容（`v1.4.5/zh/api/campaign-ext/_index.md`）：
```
:44  ## ↑ 上级导航
:46  - [API 参考](../)
:47  - [版本首页](../../)
:49  ## 区域索引 / Area Hubs
:51  - [SandBox CampaignBehaviors 家族](./SandBoxCampaignBehaviors/) — 城镇市民/村…
```

### 1.3 当前风险 = 0，但是是**潜伏**的，不是「不存在」

**PENDING ADDS = 0**，三个桶的子页已全部在块内，脚本会走 `!p.add.length → SKIPPED`，不写。

⇒ **今天不会出事。** 但触发条件只需一件事：
**往这三个目录里加一个新 .md**，下一次 `--apply` 就会写进含 31–42 行手写导航的区间，
而护栏会**放行** —— 因为护栏认为那一段就是「marker 块内」。

**这就是「护栏失效」的确切形状**：不是护栏没跑，是护栏对「块内」的判定被一个重复 marker 悄悄撑大了。

### 1.4 最便宜的修法，**不需要那条「删不删」的授权**

不需要决定「能不能删掉多余的 BEGIN 行」。只要一行：

```
if (p.dup) { SKIPPED.push(`${dir}\tDUPLICATE_MARKER（BEGIN=${n} END=${m}）—— 拒绝写入`); continue; }
```

即 **dup 从「只报告」改成「拒绝写入」**。坏文件从「静默撑大可写区」变成「被跳过」，
不必碰任何已有字节，也不必裁定删除权限。

**这条建议我认为应当写进脚本，而不是继续靠人记得这 3 个文件。**

---

## 2. 脚本做对的部分（该记的账）

这个脚本质量高，不是凑合的：

```
✅ R2 授权层：--apply 必须带 --batch-list，且校验【桶在清单内】+【桶数一致】，否则 exit 2
✅ 自检走真实 CLI（spawnSync 本脚本），断言 exit 2 + 文件逐字节未变
✅ 护栏 fail-closed：assertStructuralScope 未导出 → exit 2，绝不降级为「只做 marker 检查照写」
✅ 行尾保留：探测原 EOL，用原 EOL 写回（注释记着曾因 CRLF 被吃掉而整页假 diff）
✅ 纯追加 + 写后独立断言 + 回滚：deletedOrRewritten / outsideChanged 不过就写回原文
✅ deletedOrRewritten 有阳性对照：断言它【能触发】（>0），防的是「正则当字符串」那类恒 0 失效
✅ 路由语义门禁：同桶清单里出现非 SIBLING 即 exit 1
```

护栏现状：
```
$ wc -c tools/lib/content-write-freeze.mjs        → 15836
$ grep -c "export function assertStructuralScope" → 1
```
⇒ 护栏已落盘，不再是脚本注释里说的「pre-allowlist 桩」。

---

## 3. 本地化风险：已排除

脚本对**无 marker 的桶**会新建一段**硬编码英文**脚手架：
```js
const body = ['', BEGIN, '', '## Parent Navigation', '', '- [API Reference](../)',
              '- [Version Home](../../)', '', '## Child Pages — Alphabetical', ''];
```

```
$ grep -rl "## Child Pages — Alphabetical" content/     → 无任何命中
```
⇒ **这条路径一次都没被走过**，脚本只作用于已有 marker 的页。

宽松 grep 命中 3 个 zh 页，逐个查证全部是**既有手写内容、非脚本产物**，且都不在本轮 diff：
```
content/v1.3.0/zh/architecture/sdk-overview.md:51            ## Parent Navigation   （叶子页，不是桶索引）
content/v1.3.15/zh/api/system/runtime-tail/_index.md:14     双语链接表里的一行
content/v1.4.5/zh/api/system/runtime-tail/_index.md:14      同上
```

---

## 4. 两条我找到了但**无法触发**的潜在路径（NOT VERIFIED）

**(a) BEGIN 有、END 无** ⇒ `readBucket` 得 `e = -1`。
`planBucket` 里有 `bkt.e > bkt.b ? ... : []` 兜住，`block = []`，安全。
但 `applyPlan` 会走到 `next.splice(insertAt, e - b - 1, ...)` 即 `splice(pos, -2, ...)`，
**负的 deleteCount 在 JS 里等于不删** ⇒ 结果是「只插不删」。
```
$ 当前 content/ 里有 BEGIN 没 END 的文件 → 0 个
```
⇒ 未触发，标 NOT VERIFIED。

**(b) `loadGuard()` 的静态判定**靠正则扫源码找 export。
若 `assertStructuralScope` 被重命名或改成 `export { assertStructuralScope }` 之外的形态，
会判成「未落盘」→ `--apply` exit 2。**这是 fail-closed，方向安全**，不是缺陷。

---

## 5. 我没有跑它的自检 —— 理由

`--self-test` 里有一段：
```js
const underContent = path.join(process.cwd(), 'content', '_nav_crlf_fixture_tmp');
fs.mkdirSync(underContent, { recursive: true });
for (const f of ['_index.md','Alpha.md','Beta.md']) fs.copyFileSync(..., path.join(underContent, f));
... spawnSync(本脚本, '--apply', '--batch-list', listF2, 'content/_nav_crlf_fixture_tmp') ...
finally { fs.rmSync(underContent, {recursive:true, force:true}); }
```

**它会往 `content/` 里真写一个临时目录。** 我是只读审查线，约束是「不改正文」；
万一中途崩溃就会在 `content/` 里留下一个脏目录 —— 那正是我前三轮在报的那类污染。

⇒ 改为**静态通读它的全部断言**（已做，见 §2），执行结果标 **NOT RUN**。

---

## 6. 模板更新：写入第 ③ 条引用判据（boss #3559 提出）

`tools/_docs-review-TEMPLATE.md` 已增第 1.1b 节 —— **第三类引用判据**：

```
boss #3319 给了两条：符号存在性（主）+ 行号漂移（±8 窗口）
boss #3559 补第三条：【引用点类型】—— 引用可能是声明 / 赋值 / 调用
    工具必须先确定这一页指的是哪一种，否则「行号漂」这个分类本身没有意义
    实例：页面写 "assigned in SetObjects at MBAPI.cs:111"（赋值行）
          工具锚在 SetObjects 方法声明行 :79 → 报 drift +32
          :79 对（声明）、:111 也对（赋值）—— 两个都对，
          错的是【工具没问这一页指的是哪一种】
```

---

## 汇总

| 项 | 结论 | 严重度 |
|---|---|---|
| 重复 marker 的定性 | **我前三轮定性错了** —— 它是已裁定「不删」的待办 | ✅ 已纠正 |
| 重复 marker 撑大护栏可写区 | **代码级确认**，含 31–42 行手写中文 | 🔴 真缺陷（潜伏，当前 PENDING=0） |
| 脚本其余部分 | R2 门禁 / fail-closed / 行尾 / 回滚 / 阳性对照 全部到位 | ✅ |
| 英文脚手架落进 zh 页 | **未发生** | ✅ |
| 自检执行 | **NOT RUN**（会写 content/） | — |

### 建议（一条，零删除）
```
nav-section-index.mjs 的 --apply 循环里加：
    if (p.dup) { SKIPPED.push(...DUPLICATE_MARKER 拒绝写入...); continue; }
```
不需要「能不能删多余 BEGIN 行」那条授权，立刻把 3 个坏文件从「静默撑大可写区」变成「被跳过」。

### 仍挂着的旧账
- 6 个空壳段表格行数 0（连续 3 轮）
- `IMBDelegate.md` 2 条跨桶死链 + 3 处行号漂移
- `ActionIndexCache.md`（133/50 重写）行号断言未核
- 657 条引用里 489 条未核（我的工具按模块解析的版本还没写）

## NOT VERIFIED
- `--self-test` 未执行（理由见 §5）
- BEGIN-无-END 路径未触发（当前 0 个文件满足）
- 其余 316 个改动文件本轮未复查（本轮专案只审脚本）
- U+FFFD / `_check_deep` / 链接门禁本轮未跑（改动仍在进行中）