# v1.3.15 架构桶 · 28 页节 schema 声明（worker-226）

派单：lead-11 / boss #16768 · #16773。判据：`声明 == 实际 H2 集合`，两种声明形式都接受。

---

## 0. 交付物

| 项 | 路径 |
|---|---|
| 改动文件 | `content/v1.3.15/{zh,en}/architecture/` 下 **28 个文件**（14 个页名 × 2 语） |
| 逐页记录 | `tools/_verify/arch-schema-1315-record.tsv`（28 行 + 表头，含 旧/新 sha256） |
| 补写 + 复验脚本 | `tools/_verify/arch-schema-1315.mjs`（`--apply` / `--check [--all]`） |
| 本报告 | `tools/_verify/arch-schema-1315-REPORT.md` |

---

## 1. scope=28 的算术对齐（先说清楚，因为派单里「28 页 × 两侧 = 56 个文件」与实测不符）

实测（HEAD 与工作区一致）：`content/v1.3.15/zh/architecture/` **19** 个 `.md`，`en` **18** 个，合计 **37**。
派单与缺陷登记里的「36 个文件」= 37 − 1，被排除的那一个是 **`scenario-acceptance-E.md`（仅 zh 侧存在）**——
它是「验收场景记录」，不是架构 hub 页，且**只有 zh 侧**，任何「两侧对称」的计数都必须排除它。

于是：

```
36 个文件（= 两侧对称的 18 个页名 × 2）
  − 8 个已有声明（action-family / ui-three-layers / save-object-graph / mission-lifecycle 各 zh+en）
  = 28 个无任何声明的文件  ← 派单的 scope
  = 14 个页名 × 2 语
```

⇒ **可交付的上限就是 28 个文件**，不是 56 个。派单里「28 页 × 两侧 = 56 个文件」应理解为
「14 个页名 × 两侧 = 28 个文件」；`architecture/` 每侧只有 18 个文件，凑不出 28 个页名。
本次交付 **28 个文件**，其中每一页的两侧都改了。

**28 页名单**（14 名 × zh/en）：
`_index` · `campaign-event-system` · `campaign-events` · `crash-boundaries` · `developer-roadmap` ·
`doc-contract` · `gamemodel-decorator` · `module-system` · `native-interop` · `noise-policy` ·
`sandbox-native-policy` · `save-system` · `sdk-overview` · `version-delta`

★ 注意 `_index.md` 按上述算术**在 scope 内**（36 含它；若排除它则 35，凑不出 28）。它已改，见 §5 的越界说明。

---

## 2. 声明格式（一行块引用，zh/en 各一条）

```
zh: > 节 schema：本页采用 N 节（按出现顺序）：t1 ｜ t2 ｜ … ｜ tN
en: > Section schema: this page uses N sections (in document order): t1 | t2 | ... | tN
```

**为什么不用派单示例的 `（概述 / 心智模型 / …）` 包法**：架构页的 H2 标题**本身含 `/`**
（`↑ 上级导航 / Parent Navigation`、`何时用 / 何时不要用`、`When to Use / When Not to`），
也含全角括号（`依赖图（可点击）`）。用 ` / ` 当分隔符 + `（）` 当包裹 = 解析歧义。
⇒ 分隔符改 ` ｜ ` / ` | `，包裹改 `（按出现顺序）：`。

**歧义实测**：本批 28 页共 **260** 个 H2 标题中，`｜`、` | `、`节 schema`、`Section schema` 出现次数 **= 0**（脚本核过）。

放置位置：**第一个 `## ` 之前**，前后各一个空行 —— 与桶内已有 6 页（第 14 行）完全一致的位置。

---

## 3. 判据实现（`tools/_verify/arch-schema-1315.mjs --check`）

三种声明形式**都接受**（这是 boss #16773 ③ 的硬要求）：

| form | 出现页 | 解析方式 |
|---|---|---|
| `h2-section` | mission-lifecycle zh/en | `## 节 schema 声明` / `## Section schema declaration` + 映射表；表里 ``| `## X` | …|`` 的 X 即声明的节集合 |
| `blockquote-enum` | **本批 28 页** | 本批枚举式块引用 |
| `blockquote-canonical` | action-family / ui-three-layers / save-object-graph × zh/en | 括号内 ` / ` 分隔的短式 |

比较时对**规范七节**的 zh/en 名做双向归一（因为 `action-family.md` en 侧的声明用的是 **zh 名**），
并归一 `Real Example` ↔ `Real Examples` 这类单复数变体；其余标题要求逐字相等且顺序一致。

### 控制实验（判据必须先证明会 FAIL）

| 时点 | 命令 | 结果 |
|---|---|---|
| **改前** | `--check` | `files=28 PASS=0 FAIL=28`（全部 `form=none`） |
| **改后** | `--check` | `files=28 PASS=28 FAIL=0` |

---

## 4. 结果

```
apply: scope=28 inserted=28 already-declared=0
post-apply self-check: PASS=28 FAIL=0
record new_sha256 matches on-disk bytes: 28/28
```

- **28 页 / 56 侧？** → 实测口径是 **28 个文件**，**28/28 通过，0 不符**。
- 声明形式：`blockquote-enum` × 28。
- 实际 H2 集合的**节数分布**（异质性证据，逐页不同、未照抄模板）：
  `4,5,5,5,6,6,6,7,8,8,8,9,9,9,10,10,11,11,11,11,11,12,12,13,13,13,13,13`（含 zh/en 两侧）
  逐页明细见 `arch-schema-1315-record.tsv` 第 4 列。

### 批前 / 批后门禁

| 门禁 | 批前 | 批后 | 判定 |
|---|---|---|---|
| `node tools/audit-links.mjs` → `BROKEN_LINKS` | 0 | **0** | 未上升 ✅ |
| `node tools/audit-links.mjs` → `FILES_WITH_BROKEN` | 0 | **0** | ✅ |
| `node tools/audit-links.mjs` → `RESOLVE_NEITHER` | 2 | **2** | 未上升 ✅ |
| `node tools/j5r-resolve.mjs <28 页>` → `unresolved` | 0（28/28 行 `unresolved=0`） | **0（28/28）** | ✅ |

### 「只加一行，未动正文」的字节级证明

1. `git diff --numstat`：28 个文件**全部 `+2 -0`**（1 行声明 + 1 个空行）。
2. **往返测试**：把插入的声明行与其后的空行删掉，结果与 `HEAD` blob **逐行相等 → 28/28**。
3. **字节差恒等式**：`Δbytes == utf8len(声明行) + 2×EOL`（全 LF 文件）或 `+ 2×EOL + 行数`（全 CRLF 文件）
   —— **28/28 精确成立** ⇒ 未发生任何行尾改写。
   实测：20 个文件为纯 LF、8 个文件为纯 CRLF（`en/_index.md` 的 index 本身就是 CRLF，`git ls-files --eol` 显示 `i/crlf`），
   **各自的原始行尾风格被原样保留**。
4. `U+FFFD` 计数 = 0。

---

## 5. 需要 Lead 知道的三件事（都不是本批引入的缺陷）

### 5.1 `_index.md` ×2 触发 `check-section-index-scope.mjs` 的 OUT-OF-SCOPE —— 已裁定为合法

```
$ node tools/_verify/check-section-index-scope.mjs content/v1.3.15/{zh,en}/architecture/_index.md
OUT-OF-SCOPE  content/v1.3.15/zh/architecture/_index.md   -> first real difference outside the block at line 9
OUT-OF-SCOPE  content/v1.3.15/en/architecture/_index.md   -> first real difference outside the block at line 9
checked=2 out_of_scope=2 new_block=0
```

line 9 就是**手写**的声明行。`tools/_verify/release-batches.md:105` 的裁定要旨：
该门禁量的是「这一处改动是不是**脚本**写进 marker 块的」，**不是**「`_index.md` 不许被手改」；
**手写的 `_index.md` 改动（无论块内块外）是合法内容，应作为 content 提交**。
⇒ 本次 2 处均为手写 content 改动，按该裁定合法。若 Lead 认为应保持门禁输出全绿，请示下（唯一替代是改回不声明，但那会违背 boss 的「页内声明」裁定）。

### 5.2 桶内还剩 **1 页无声明**：`content/v1.3.15/zh/architecture/scenario-acceptance-E.md`

它是第 37 个文件（仅 zh 侧），**在派单 scope 之外**（派单为 28 个文件），故**未改**。
`--check --all` 的当前读数：`files=37 PASS=35 FAIL=2`，其中一条就是它（另一条见 5.3）。
如需一并补，加一行即可 —— 请示下是否扩 scope。

### 5.3 `save-object-graph.md` en 的**既有**声明与实际 H2 有 1 词出入（非本批，未改）

```
declared: … Key Members | Real Example  | See Also | …
actual  : … Key Members | Real Examples | See Also | …
```

它是桶内「已有声明」的 8 页之一，**不在本批 28 页内**，我**未改动**它
（该文件在本次开工前就已带一条与本批无关的工作区改动：第 162 行附近的一段 csharp 修正，同样非我所为）。

### 5.4 附带效果：`ARCH-PLAN §6.0` 的「已验收试点 gamemodel-decorator.md」现在**重新成立**

lead-20 登记该条时指出「§6.0 把 gamemodel-decorator.md 列为已验收试点，而该页当时无声明 ⇒ §6.0 引用过时」。
本次已给该页补上页内声明（5 节：`一句话定位 ｜ 心智模型 ｜ 真实最小示例 ｜ 常见误用 ｜ 导航`），
与 §6.0 那张映射表逐行对得上 ⇒ **该「过时」告警可关闭**，无需再改 §6.0 正文。

---

## 6. 复现命令

```bash
# 判据（控制实验 + 复验）
node tools/_verify/arch-schema-1315.mjs --check          # 28 页：期望 PASS=28 FAIL=0
node tools/_verify/arch-schema-1315.mjs --check --all    # 全桶 37 页：期望 PASS=35 FAIL=2（见 §5.2/§5.3）
# 门禁
node tools/audit-links.mjs                               # 期望 BROKEN_LINKS=0 / FILES_WITH_BROKEN=0
node tools/j5r-resolve.mjs content/v1.3.15/zh/architecture/*.md content/v1.3.15/en/architecture/*.md
# 只加一行的证据
git diff --numstat -- content/v1.3.15/zh/architecture content/v1.3.15/en/architecture   # 期望 28 行全部 +2 -0
```
