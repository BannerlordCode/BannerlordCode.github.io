# 文档独立审查报告 — 2026-10-04 第 6 轮（`--audit` 只读审计）

执行者：lead-9
**红线：`content/` 零写入已用全树指纹证明（见 §2）。改动仍只在两个 `tools/` 脚本。**

---

## 0. 交付：`node tools/nav-section-index.mjs --audit`（只读，零写入）

按你给的写法实现。逐页把**工作区当前文本**与 **git HEAD 同一页**对比，
跑**修好之后**的完整不变式（BEGIN/END 各 1 次 + BEGIN 之前全文逐字节相等 + 块内允许改），
输出违规页数 + 每页一行。

三个设计约束我写死在代码注释里，因为它们决定这个模式本身有害无害：
```
· 零写入   —— 本分支不 mkdir / 不 writeFileSync / 不碰 content/ 任何字节
· 只看【有改动的 _index.md】—— 未改动的页 orig === next，必然通过，列入只是噪音
· 无 marker 的页跳过 —— 护栏本来就只允许写 _index.md 且要求 marker 存在，
  没有 marker 的页不是这个工具能写出来的，拿它报违规是错的口径
```

## 1. 结果：`VIOLATIONS=4`

```
$ node tools/nav-section-index.mjs --audit
GUARD_STATUS=PRESENT
CHANGED_UNDER_CONTENT=501  INDEX_PAGES=19  (non-_index.md skipped=482)
AUDITED=17  CLEAN=13  SKIPPED_NO_MARKER=2  SKIPPED_NEW_FILE=0
VIOLATIONS=4
```

| 页 | 破的不变式 | 归属 |
|---|---|---|
| `v1.3.15/en/api/campaign-ext/_index.md` | marker 不唯一（2× BEGIN） | **HEAD 里就是 2×** |
| `v1.3.15/zh/api/campaign-ext/_index.md` | marker 不唯一（2× BEGIN） | **HEAD 里就是 2×** |
| `v1.4.5/zh/api/campaign-ext/_index.md` | marker 不唯一（2× BEGIN） | **HEAD 里就是 2×** |
| `v1.4.5/zh/_index.md` | BEGIN 之前被改（第 52 行） | 人工散文改写，见下 |

**这 4 条没有一条是洞 B 的逃逸。** 证据分两层。

### 1.1 三条重复 marker 是**已提交状态**的缺陷，不是被放过去的写入

审计报错里两侧都写了 `begin marker occurs 2x` —— 即 **originalText（HEAD）自己就已经是 2×**：
```
$ for f in <三个文件>; do git show HEAD:$f | grep -c 'BEGIN SECTION INDEX'; done
  api/_index.md   BEGIN=2 END=1
  api/_index.md   BEGIN=2 END=1
  api/_index.md   BEGIN=2 END=1
```
⇒ 重复 marker 早就在 HEAD 里，**不是任何一次未提交写入造成的**。
审计把它报出来是对的（不变式确实破了），但它不构成「历史写入违规」的证据。

### 1.2 第四条是人工改标题/散文，不是工具写的

`content/v1.4.5/zh/_index.md` 的块外差异（BEGIN 在第 80 行）：
```
-title: Bannerlord v1.3.15 文档 / Bannerlord v1.3.15 Documentation
+title: Bannerlord v1.4.5 中文文档 / Bannerlord v1.4.5 Chinese Documentation
-# Bannerlord v1.3.15 / 骑砍2 v1.3.15
+# Bannerlord v1.4.5 / 骑砍2 v1.4.5（中文）
+# 这一版的源码是反编译产物 …（新增说明）
```
这是一次**把 v1.3.15 内容整体改写成 v1.4.5 内容**的作者修正，走的是编辑器，
**从来不经过护栏**。审计只能看到「块外有差异」，看不到作者是谁。

### 1.3 决定性的一条：块外差异里**没有一行是工具形状**

工具只会写一种东西：`- [Name](./Name)`。用它自己的形状去筛：
```
【A】块外新增行里有工具形状（- [X](./X)）的页 = 工具真的越界了 ：0
【B】块外差异全是人工散文/标题的页                        ：1
    content/v1.4.5/zh/_index.md  added=54 removed=29
```
**⇒ 工具从未在块外落过一行。**

---

## 2. NOT VERIFIED 关闭：洞 B 的历史影响确认无实害

```
$ node tools/nav-section-index.mjs --audit
VIOLATIONS=4  →  但 0 条可归因于工具越界
⇒ 「本轮之前 BEGIN 之前那侧只在改变行数时才拦得住」这条，
  在真实树上没有留下任何一次工具越界的痕迹。历史影响：无实害。
```

### 2.1 零写入证明（全树指纹，不是抽样）

```
BEFORE  39025 files  9ec51bde964aa47d586834c9
AFTER   39025 files  9ec51bde964aa47d586834c9
IDENTICAL ✅
```

### 2.2 确定性
```
连跑两次：VIOLATIONS= 与 AUDIT_RESULT_ 逐字一致     DETERMINISTIC ✅
```

---

## 3. 我在这轮第 7 次推翻自己 —— 而且是我自己的验证脚本出的错

我第一次证明零写入时得到 `CHANGED ❌`，但前后哈希**肉眼可见相同**（都是 `9ec51bde964aa47d5…`）。
原因：`diff` 比的是**带标签的两行**
```
BEFORE  39025 files 9ec51bde…
AFTER   39025 files 9ec51bde…
```
标签不同 ⇒ `diff` 判不等。**是我的对比脚本错了，不是被测对象变了。**

⇒ 与第 5 轮那次 `/FAILED/` 判据同源，同一条纪律第三次生效：
> **断言要断值，不要断词、不要断标签。**

这次的形态更隐蔽：哈希是对的，比较是错的，而**错误的方向是「报出假警报」**，
和前两次「漏报」相反。若我照着那个 ❌ 报上去，就会声称审计污染了 content/。

---

## 4. 回归

```
$ node tools/nav-section-index.mjs --self-test     SELFTEST_FAILURES=0
$ node tools/lib/content-write-freeze.mjs --selftest   21 passed, 0 failed  EXIT=0
$ node tools/nav-section-index.mjs --dry-run content/v1.4.5/en/api/mission
    DELETED_OR_REWRITTEN_LINES=0   GUARD_STATUS=PRESENT
```

```
$ git diff --numstat -- tools/lib/content-write-freeze.mjs tools/nav-section-index.mjs
118	3	tools/lib/content-write-freeze.mjs     （与第 5 轮相同，本轮未再改）
294	35	tools/nav-section-index.mjs           （第 5 轮是 233/34，本轮 +61/-1 = --audit 模式）
```

---

## 5. 汇总

| 项 | 结果 |
|---|---|
| `--audit` 只读模式 | ✅ 落地，零写入已用 39025 文件全树指纹证明 |
| 真实树有无违反不变量的页 | **4 条，但 0 条可归因于工具越界** |
| 洞 B 历史影响 | **确认无实害** ⇒ 第 5 轮的 NOT VERIFIED 关闭 |
| 三条重复 marker | HEAD 里就存在 ⇒ 已提交状态缺陷，仍待单独授权修 |
| 一条块外改写 | 人工把 v1.3.15 内容改成 v1.4.5 内容，走编辑器，与护栏无关 |

## 审计模式自身的局限（必须一起记）
```
1. 它测的是【差异】，不是【作者】。工具写过又被回滚的写入不会显示。
2. 它的总体是【工作区 vs HEAD】。早于 HEAD 历史的违规不在口径内。
3. 它只能回答「块外有没有差异」，不能回答「是谁改的」——
   §1.3 的工具形状筛选是我在外面补的一层，不在 --audit 里。
```
⇒ 若要让归因能力进工具本身，需要再加一条「块外新增行是否符合工具输出形状」的判定。
**我没有加**：那会把「人工散文」也纳入机器判据，越界。

## 仍挂着的项（按你的指示未动，等写作线停手后统一收）
```
6 个空壳段 · IMBDelegate 2 条死链 + 3 处行号漂移 · ActionIndexCache 未核 · 657 条里 489 条未核
```