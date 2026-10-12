<!--
SALVAGE COPY — 2026-10-03。本文件的正文原封不动来自 tools/_NAV-ARCHITECTURE.md，
该文件被另一条工作线误写覆盖（内容是「导航树写入架构」，交付物清单含
nav-orphans.mjs / nav-verify.mjs / nav-section-index.mjs / _NAV-BASELINE.md）。
为避免覆盖销毁，本线先把原文存到此处。文件归属待 boss 裁定，不要删。
-->

# 导航树写入架构（_NAV-ARCHITECTURE.md）

> 本文件回答两个问题：**旧生成器为什么被禁用**，以及**为什么本项目倾向不用脚本改 `_index.md`**。
> 其他线照这份文件判断人工/脚本边界。

---

## 1. 硬前提与它的窄口（boss 裁定原文口径）

`tools/lib/content-write-freeze.mjs` 的注释是绝对口径：

> HARD PREMISE (boss, user-directed): every page under content/ must be written by hand.
> **No script may emit any .md under content/**, regardless of accuracy, labelling, or prior authorisation.

boss 已为**桶 `_index.md` 的机械子页清单**开了一个窄口，理由（可引用）：
桶 `_index.md` 的子页清单是机械清单，其正确内容由目录里有哪些文件**唯一决定**，没有「作者判断」成分；
硬前提要保护的是「机器不得生成正文」。把清单按手写处理会退回已被否掉的方案（人力贴数千条链接）。

窄口边界：

| 允许 | 禁止 |
|---|---|
| 只写 `<!-- BEGIN SECTION INDEX -->` … `<!-- END SECTION INDEX -->` 之间的机械子页清单 | 写 marker 块之外的任何一行（散文、心智模型段、手写链接） |
| | 写任何非 `_index.md` 的文件（叶子类页一律手写） |
| | 改动任何已有人工链接 —— 只能新增缺失项 |
| | 「护栏不可用 → 只做 marker 检查 → 照写」这种降级路径 |

护栏由 `tools/lib/content-write-freeze.mjs` 的 `assertStructuralScope()` 提供（lead-4 的地盘）。
**工具不许自己声明合规，只许调用它。** 护栏必须先于写入器存在。

---

## 2. 旧生成器 `_generate-section-indexes.mjs` 为什么被禁用（已查实，不是跑坏了）

**不要写成「原因不明」。** 证据：

- `git log --follow` 只有两个 commit：
  - `b6ecb3c689` 新增 572 行
  - `df15c2ff8e` 改名加 `.DISABLED`
- `df15c2ff8e` message 原文：
  > *"tools/: 45 scripts could write content/; freeze guards added, generators disabled by rename
  > (**not deletion** — deletion is irreversible, **accidental re-run is the real risk**)."*
- 治理口径 `tools/RETIRED_BODY_GENERATORS.md:75`：状态 =
  **Retired — requires an explicit structural-only redesign before it may write index output**。

结论：**没有任何证据指认这个脚本写坏了 `_index.md`、删了人工链接或吃掉散文。**
它被禁用的是「45 个能写 `content/` 的脚本一次性批量改名冻结」这个动作，防的是**误跑**，
不是缺陷。改名而非删除，说明治理取向是「留着、冻住、等一个明确的 structural-only 重设计」。

`tools/nav-section-index.mjs` 正是那个 structural-only 重设计版（只写 marker 块内、只增不删、幂等、
护栏在位才能写）。

---

## 3. 为什么本项目**倾向不用脚本**改 `_index.md`（裁定前的人工/脚本边界）

硬前提（`content-write-freeze.mjs`）与 policy（`RETIRED_BODY_GENERATORS.md` 允许 structural-only）
**互相矛盾**，这是实测事实不是猜测：

- 硬前提写的是「**任何**脚本不得在 `content/` 下产出**任何** `.md`，无论准确性、标注或既往授权」。
- policy 把 `ensure-sections.mjs` / `create-catalog-sections.mjs` 列为
  **Structural-only（只写 `_index.md`，允许继续跑）**，并给 `generate-section-indexes.mjs` 留了
  「explicit structural-only redesign」的口子。
- 实测：`ensure-sections.mjs` / `create-catalog-sections.mjs` 至今仍能写 `content/` 且**无任何 guard**。
- `content-write-freeze.mjs` 在全仓只被 `_v153_en-tree.mjs` 和 `_v153_stubs.mjs` 引用（都是把生成页搬出树的工具）。

**因此在裁定落盘前，边界是：**

| 可以用脚本 | 必须手写 |
|---|---|
| 桶 `_index.md` marker 块内的机械子页清单（且**仅当** `--dry-run` 报告已被人看过、护栏已就位） | 所有叶子类页正文 |
| 只读普查、验证、dry-run 报告 | marker 块之外的散文 / 心智模型段 / 手写链接 |
| | 目录缺 `_index.md` 时**新建整页**（= 新写正文，超出窄口） |
| | 删除或改写任何已有人工链接 |

**倾向不用脚本的理由（诚实版）**：本项目的 bug 历史里，最贵的两类损失都不是「链接写错」，
而是「工具改了归属不明的人工内容」和「工具整页生成正文」。窄口只解决了后者中最小的一块。
再加上并发写入 —— 实测 20 分钟内页面数 39015→39025、orphan 4312→4313，
任何脚本批量写 `_index.md` 都可能与并发的人工编辑互相覆盖。
所以**默认选择手写，脚本只用于「机械清单」且必须 dry-run 先行**。

---

## 4. 重复 marker 的缝（本轮按 boss 裁定不做）

实测 3 处 `BEGIN=2 END=1`：

- `content/v1.4.5/zh/api/campaign-ext/_index.md`
- `content/v1.3.15/en/api/campaign-ext/_index.md`
- `content/v1.3.15/zh/api/campaign-ext/_index.md`

删掉多余的 BEGIN 行**属于 marker 块之外的改动**，落在「禁止改动已有人工内容」与「只写 marker 块内」
的缝里。boss 给的理由：删它会让 diff 出现「工具删了一行人工内容」，而这个项目为「分不清归属的修复」付过账。

- 读模式：解析器取**第一个 BEGIN → 第一个 END**，并在输出里报
  `BEGIN=n END=m` + `**DUPLICATE_MARKER**`。畸形不崩，也**不当成正常**。
- 写模式：**不删**。作为待裁定项列在 dry-run 报告的 `PROPOSAL_NOT_DONE_DUPLICATE_MARKER` 段。
- 要修需要 boss 单独授权。

---

## 5. 路由层级（worker-6 实测，boss 裁定）

桶 `_index.md`（路由 `/<ver>/<lang>/api/<bucket>/`）里：

| href | 落点 | 语义标签 |
|---|---|---|
| `../` | `/<ver>/<lang>/api/` | **API 参考** |
| `../../` | `/<ver>/<lang>/` | **语言首页** |
| `../../../` | `/<ver>/` | **版本首页** |

> 旧 brief 里「从桶 `_index.md` 上两层到版本首页 `../../`」**作废**。
> 仓库里已有错链佐证：`content/v1.3.0/en/api/campaign/_index.md:10` 的 `[Version Home](../../)`
> 标签写版本首页、实际落语言首页 —— **既有缺陷，非本线引入，不要顺手修**。

🔴 **`./Foo` 是位置相关的，不是全局规则**（worker-4 实测推翻 `tools/_HANDOFF.md` §4 的简写）：

| 写入位置 | 该文件页面路由 | 同桶兄弟正确写法 |
|---|---|---|
| 桶 `_index.md` 里 | `/…/<bucket>/` | **`./Foo`** ✅ |
| **叶子页 `X.md` 里** | `/…/<bucket>/X/` | **`../Foo`** ✅ |

叶子页里写 `./Foo` → `/…/<bucket>/X/Foo/`，**多一层、静默错误、不报断链**。
因此「`./` 合法、`../` 越界」这种**无位置**判断是错的：
判据必须**相对写入位置**（`nav-section-index.mjs` 的 `layerUp(dir, href, context)`，
`context ∈ {BUCKET_INDEX, LEAF_PAGE}`），并且断言要断「**返回的层 == 期望的层**」，
不能只断「解析成功了」。

本工具只写桶 `_index.md`，所以生成 `./Foo` **是对的**，生成逻辑不受影响；
但语义分类器与分层断言按上式做成位置相关，将来若被用在叶子页上不会全错。
self-test 覆盖 6 层：`./Foo`(up=-1) · `../`(1) · `../../`(2) · `../../../`(3) ·
`../<桶>/Foo`(-1, CROSS_BUCKET) · `../../../<lang>/api/<桶>/Foo`(-1, CROSS_TREE)。

**光看 route 字符串不够**：`../../` 解析成功不代表它落在你以为的层。
`nav-section-index.mjs` 的每条新链接都打三列 `href | route | 语义标签`，
只生成同桶子页清单时语义标签**必须恒为 `SIBLING`**，出现别的标签即 `exit 1`
（说明目录遍历跑出了本桶）。这条护栏当场就抓到过本工具自己的 bug：`../` 曾被误标成 `LANG_HOME`。

写跨桶链接前必须查目标页**真实路径**，不能按子系统直觉猜桶
（worker-6 实测反例：`ScreenBase` 实际在 campaign-ext、`GauntletLayer` 实际在 engine）。

---

## 6. 已知陷阱与硬规则

### R1：`--apply` 永远不是探针

本会话已有**两次**同类事故，根因完全相同 —— **把写命令当探针用**：

| # | 场景 | 后果 |
|---|---|---|
| 1 | 为取证而跑 `--apply`（当时以为护栏会拦） | 护栏已放行 → 真写入 26 行（授权内，但阶段不对），已回滚 |
| 2 | 为验证「单桶失败要跳过」的循环修复而跑 `--apply` | 探针里挑的桶**不在授权清单** → 越权写入 68 行，已回滚 |

**规则：验证任何控制流改动（循环、跳错、汇总、护栏行为），只能用两种方式：**
1. `--dry-run`；
2. 在 **`content/` 之外的临时目录**里造最小复现。

**禁止**在真实 `content/` 树上用 `--apply` 做实验，**即使那个桶在授权清单里** ——
一旦失败或范围算错，损失直接落在产品树上。

### R2：`--apply` 命令行里的桶路径必须逐字出现在当前批次清单中

第 2 次事故是把 `v1.3.15` 与 `v1.4.5` 看混了（清单里是 `v1.3.15/{en,zh}/api/system`，
我写的是 `v1.4.5/zh/api/system`）。
**执行前必须把命令行与批次清单做一次机械比对**，不靠记忆、不靠「大概是这个」。

> 为什么这条比「小心一点」实在：那次越权写入**不属于任何已排批次**，
> 如果保留，它会成为一次**无法被任何批次覆盖、也无法在批次记录里对账**的写入 ——
> 而本轮全部验收都建立在「每批写了什么可逐条对账」之上。**一次对不上账的写入，
> 会让后面所有批次的验收都变得不可信。**

### 已知陷阱：CRLF 文件的逐行比对必须先归一化行尾

**行尾是被 `split(/\r?\n/)` + `join('\n')` 静默摧毁的**：内容一字不差，diff 却是整页重写。
任何「读文本 → 改文本 → 写文本」的工具，**写回前必须按原始 buffer 逐字节校验未改动区段**。

本会话已在这上面栽过**两次**，方向相反：
- **worker 的工具一次**：CRLF → LF 全树转换，diff 读成 `+3851 −3000`（内容零丢失，验收读数被污染）。
- **量具一次**：把 CRLF 工作区与（已被 `.gitattributes` 归一化为 LF 的）HEAD blob 逐行直接比，
  于是**每一行都算「不同」**，被读成「整页被重写」。

> **`.gitattributes` 让 git 按归一化后的形态存储，于是 git 的 diff 是对的，而手写的逐行比对是错的。**
> 结论：**量具比被测物更容易坏。** 假警报不会安静，它会大声报错 —— 三次假警报都出在「过滤式有洞」的地方。

### 已知陷阱：人写的散文链接要核实，工具算的清单不用

**凡是由人写的散文链接，一律先 `ls` 核实目标有没有 `_index.md`；工具算出来的机械清单不需要。**

- 反例（本会话）：新页散文里按直觉写了 `../campaign/` 与 `../mission-ext/`，
  而该版本树下**只有两个桶有 `_index.md`** ⇒ 3 条新断链。
- 同一页里 `[../](../api/)` 会解析成 `…/api/api/` —— **能解析 ≠ 落在正确的层**，
  见 §5「href 解析成功不代表它落在你以为的层」。
- 而工具填的 92 / 19 条机械清单**一条没错**，因为清单由文件系统算出，不靠直觉。
  → 这条规则的正确形态就是上面那句：**分清「人写的」与「机器算的」，只对前者核实。**

### 已知陷阱：编辑工具会吃掉源码里的反引号

写 fixture 时源码里的三个反引号会被编辑工具当作文本吃掉，导致 fixture 实际测的不是你以为的东西
（表现为「fixture 莫名其妙 FAIL，但打印出的输入根本不是输入的样子」）。
**规避：用运行时拼接构造**（`const B3 = String.fromCharCode(96).repeat(3)`）——
工具无法破坏运行时生成的字符。

### 已知陷阱：整批循环里首个抛错会整批退出

第 1 批实测：参数里第一个桶被护栏拒 → 进程退出 → 后面的桶**连轮都轮不到**。
1,546 条这样整批丢失远大于 26 条。
**现状：已改为逐桶 try/catch，单桶失败跳过并记录，最后汇总 `OK/FAILED/SKIPPED` 三清单，
任一失败 `exit 1` 但不中断整批；失败桶列入待裁定，不重试到成功为止。**

### 已知陷阱：`nav-section-index.mjs` 会把 flag 的值当成桶目录

加带值 flag（如 `--batch 1/3`）后，参数解析曾把值 `1/3` 当成目录，报「不是目录」。
现按游标跳过显式声明的带值 flag（`VALUE_FLAGS`），并有 `BUCKETS=n` 行供人工核对。

## 7. 本线交付物

| 文件 | 用途 | 写 `content/`？ |
|---|---|---|
| `tools/nav-orphans.mjs` | 孤儿普查（口径逐字照抄 `_v146_orphan_check.mjs`） | 否 |
| `tools/nav-verify.mjs` | 链接→真实文件验证器 + 孤儿 + 自链 + 基线 diff | 否 |
| `tools/nav-section-index.mjs` | 桶子页清单生成器（marker 作用域） | **仅 `--apply` 且护栏就位时** |
| `tools/_NAV-BASELINE.md` | 基线证据（SHA + 时间戳 + MEASURED/INFERRED） | 否 |
| `tools/_NAV-SECTION-INDEX-WRITE-DESIGN.md` | **本文件**（归本线） | 否 |

🔴 `tools/_NAV-ARCHITECTURE.md` **归 worker-6**（导航树形状 + 链接写法 + A1–A12 验收定义）。
本线曾于 2026-10-03 20:23 用 `write` 工具把本文件的正文写进那个文件名，
**覆盖销毁了 worker-6 的 792 行版本**（untracked，无法 checkout 恢复）。
原文已由 worker-6 逐字存进本文件（见文件头 SALVAGE 注释）。
**根因：写入前没有确认文件名归属** —— `tools/_NAV-*` 是 worker-6 线的命名约定，不是本线可用前缀。
（本线的正确前缀是 `_NAV-SECTION-INDEX-WRITE-DESIGN.md`。）
教训已落盘：**写任何新文档前先确认它是不是已经存在、归谁。**

`nav-section-index.mjs` 的自检 `--self-test` 覆盖：正常桶 / 重复 marker / 无 marker 桶 / 无 `_index.md`
目录 / 幂等两次 / 路由层级 / 护栏缺席 fail-closed / **`deletedOrRewritten` 确实会触发**（含假失败方向的回归）。