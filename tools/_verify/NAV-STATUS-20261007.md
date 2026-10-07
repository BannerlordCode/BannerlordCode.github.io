# NAV-STATUS-20261007 — 导航树完整性线（Boss-3 / lead-13）

> 用户原话：「跳转更自然，成为一个完美的树状结构而非跳过去回不来的状态」「有时候跳着跳着就直接 404 了」。
> 本文件是**三列对照（基线 / 当前 / 差值）**，每格带命令与输出摘要，并在 §3 显式声明「覆盖了哪几类、漏了哪几类」。
> 状态：**草稿（冻结期快照）**。冻结解除、修复轮落地后本文件会更新为终版。

---

## 0. 测量时点与前提（先读这段，否则数字会被误用）

| 项 | 值 |
|---|---|
| merge 前 HEAD | `92df55b69904a402bca09aa573d8df6ac88a089e`（本地领先 origin/main `cc39aaf811` 68 个 commit、落后 4 个） |
| merge 后 HEAD | `55658f4d9d0450335f2b12e160bfb8c9b37fbc57`（parents = `92df55b699` + `cc39aaf811`；origin/main == HEAD，divergence 0/0） |
| 用户外壳 4 commit | `4b10ed6673`（外壳重做/版本语言全局开关）· `fdd540f17e`（先审计链接再构建 + 修 Campaign 死链）· `cb7b700718`（修缺失路由 + 关全文索引）· `cc39aaf811`（渲染提速） |
| 工作区状态 | `content/` 有 **3395 项已静止的未提交存量**（mtime 最新 2026-10-06T23:37:46Z，15 分钟内 0 次写入；release 线随后分批提交） |
| 平台口径 | 本机 Windows（**文件系统大小写不敏感**），部署目标 Linux/GitHub Pages（大小写敏感）→ 大小写错配类缺陷本机门禁看不见 |
| zola build 读数 | **权威口径（Boss #10068，覆盖 #9930/#9931）**：完整全站构建本环境跑不完（>15 分钟被杀）⇒ 不构成门禁。门禁改为 `node tools/audit-links.mjs`（BROKEN_LINKS=0）+ 两个 orphan 工具（秒/分钟级可测）。prev/next 的构建耗时对比改用 `zola build` 跑到 `-> Creating N pages (M orphan)` 那行的**有界运行**（pre 读数：12:39 得 `38486 pages (30 orphan)`；注明「page-creation 阶段读数，非完整构建」）。brief 提到的「136 orphan」是更早时点读数，本轮不引用 |
| 写入冻结 | **不存在（Boss #10068 权威口径，覆盖 #9930/#9931）**：可写 `content/**`、`templates/**`、`data/**`。worker J 的 orphan 入链（marker 块）立即执行；worker M 的生成器可落地。完整构建只在发布前由 release 线在所有写作线确认停手后以长超时后台跑一次，且由 Boss 下达，不由本线推断 |

---

## 1. 基线 / 当前 / 差值（三列对照）

「基线」列分两种来源，必须分清：**(a) brief 给定的历史基线**（本轮实测复现，非转述）；**(b) 冻结基线文件**。

| # | 类别 | 基线 | 当前（实测，终值） | 差值 | 命令 | 状态 |
|---|---|---|---|---|---|---|
| 1 | **audit-links BROKEN_LINKS** | brief 给定 **0**；本轮实测 merge 前/后均为 **1** | **本线自身 1 → 0**；Path A 后全站 2（尺缺口，已登记）→ **尺缺口已修（commit `06214dc20a`）**：本线 2 条由 `static/` 解析（`RESOLVE_STATIC=2`），**不再计入 broken**；当前 52 条全在写作线 `campaign-events.md` | 本线自身 −1；本线 static/ 缺口已消 | `node tools/audit-links.mjs` | 见 §2.1 |
| 1b | audit-links RESOLVE_NEITHER | brief 隐含 0 | **本线 0**；Path A 后全站 **11**（全部来自其他线新页） | — | `node tools/audit-links.mjs` | 见 §2.1 |
| 1c | audit-links FILES | brief 给定 ≈39,015 | **39,027**（多时点） | +12 | `node tools/audit-links.mjs` | 树在写，属并发解释 |
| 1d | NEW_BROKEN vs 冻结基线 | `_nav-baseline-broken-links.tsv`（197 行/173 键）与 `frozen-186`（186 行/162 键） | **NEW_BROKEN=1 / RESOLVED=173 与 162**（merge 前） | 非子集 | `node tools/nav-verify.mjs --ci-compat --baseline …` | 唯一 NEW_BROKEN 见 §2.1 |
| 2 | **orphan（nav-orphans.mjs）** | brief 给定历史读数 **4,312**（naive 工具）；gate 基线已被 reset 为 0（commit `cbabcb9b98`，当时实测 8） | **0** | 相对 4,312：−4,312；相对 gate 基线 0：**0（已归零）** | `node tools/nav-orphans.mjs --by-parent` | ✅ 见 §2.2（含四段成因） |
| 2b | orphan（_v146_orphan_check.mjs） | — | **1**（站点根页 phantom） | +1 vs nav-orphans | `node tools/_v146_orphan_check.mjs` | 差 1 = 工具 keyOf bug，**只登记不修** |
| 2c | orphan 父目录数 | 历史 29 | **0** | −29 | `node tools/nav-orphans.mjs --by-parent` | ✅ |
| 3 | **类页页脚纯文本路径陈述**（§1.1 门槛 = 0） | 门槛 0 | **0**（页脚这一类） | 0 | `node tools/_verify/_navC-scan.mjs` | ✅ 门槛达标；另有 18 条正文 `./X` 见 §2.3 |
| 3b | 类页纯文本路径陈述（全部位置） | — | 命中 **107**：符合 59 / **不符 18** / 非导航 30 | 18 条已登记 open-defects | 同上 | 分母 38,274 张类页 |
| 4 | **索引页「给了链接必须给数量」** | 门槛 0 | 类1=**103** / 类2=**32** / 类3=**3** | 未达门槛（已批准修复方案，未实施） | `node tools/_verify/nav-D-check.mjs` | ⏳ 类1/类2 未交付 |
| 5 | 大小写错配链接（Linux 会 404） | — | **检测器已产出**（`nav-F-case-mismatch.mjs`，14KB）；报告未落盘 | — | `nav-F-*` | ⏳ 按 Boss 指示挂起 |
| 6 | 落错层（解析成功但落错页，A13） | — | **未产出** | — | `nav-G-*` | ⏳ 按 Boss #11008 挂起 |
| 7 | zola build render 期 orphan | brief 给定 **136** | **30**（page-creation 阶段，pre-nav，非完整构建） | — | `zola build`（release 线独占，日志 `RELEASE-BUILD-zola.log`） | 见 §2.7；post 读数待取 |

**「0」的成因**（Boss 规则：0 必须带成因）：
- **orphan=0**（`nav-orphans.mjs` 口径）：四段成因见 §2.2；根页有真实入链（各版本根页的 `../` 回链）⇒ 不是孤儿。`_v146` 的 1 是它自己的 `keyOf` bug（根页 phantom），**只登记不修**。
- **页脚门槛 0**：v1.4.6 的 16 张事故页已修成 markdown 链接，全树反引号「父级导览位于版本根」形态 0 残留（关键词+反引号组合扫描零命中）。
- **本线自身断链 0**：`./SellItemsAction` → `../SellItemsAction`（L1b；叶子页 `./` 多一层）。
- **`RESOLVE_NEITHER` 本线 0**：不存在「URL 口径与文件口径都落空」的链接。

🔴 **这个 0 的成立前提**：依赖 `nav-orphans.mjs` 的 `keyOf` 根路由归一修复（当前为**未提交改动**）；干净检出 HEAD 跑同一条命令会得到 1。详见 §2.2。

---

## 2. 每格的命令与输出摘要

### 2.1 audit-links（类别 1）
命令：`node tools/audit-links.mjs`（仓库自带 CI 门禁，`AUDIT_MODE=url`）
merge 前（`92df55b699`）与 merge 后（`55658f4d9d`）两次读数**完全一致**：

```
FILES=39027  TOTAL_LINKS=148932  AUDIT_MODE=url
BROKEN_LINKS=1  FILES_WITH_BROKEN=1  RESOLVE_NEITHER=0
RESOLVE_OK_URL=148745  RESOLVE_OK_FILE=110047  RESOLVE_OK_EITHER=148746
RESOLVE_OK_BOTH=110046  RESOLVE_URL_ONLY=38699  RESOLVE_FILE_ONLY=1
```

唯一断链：`content/v1.4.5/zh/api/campaign-ext/SellGoodsForTradeAction.md:33` → `[SellItemsAction](./SellItemsAction)`
- URL 口径：叶子页 route 比目录深一层，`./SellItemsAction` → `…/SellGoodsForTradeAction/SellItemsAction` 不存在 → **真 404**
- 文件口径：命中真实兄弟页 `SellItemsAction.md`（存在）→ 故 `RESOLVE_FILE_ONLY=1` 就是这一条
- 违反 **L1b**（叶子页→同桶兄弟须 `../Foo`）；正确写法 `../SellItemsAction`
- 归因：**未提交的工作区改动**（`git show HEAD:…` 无此链接；merge commit `55658f4d9d` 两个 parent 也都没有）→ **不是 merge 引入**，属并发批次；release 线独立复测同一条（`tools/_verify/RELEASE-GATE-auditlinks.txt`）

**修复后（Boss #9979 派单）**：`./SellItemsAction` → `../SellItemsAction`，复跑 `node tools/audit-links.mjs` → **BROKEN_LINKS=0 / FILES_WITH_BROKEN=0 / RESOLVE_NEITHER=0**（原始输出 `tools/_verify/nav-A-auditlinks-after-fix.txt`）。

⚠ **随后 Path A 引入 2 条新 broken（已登记的「尺的覆盖缺口」，非本线可修）**：删掉 `content/v1.3.15/{en,zh}/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt` 后，`COMPLETE-FUNCTIONS.md` 指向它的链接在 `audit-links.mjs` 下无法解析（该工具只在 `content/` 找目标，而目标现在只在 `static/`）。当前 `BROKEN_LINKS=2`（release 线广播 #10971）。本线只负责形态修复（`./` → `../`，使其指向真实路由），剩余 2 条由 release 线用仓库既有 known-failures 机制**登记而非屏蔽**。

**✅ 后续：尺的覆盖缺口已被修（Boss #11426 授权，commit `06214dc20a`）**。`audit-links.mjs` 放宽解析目标空间：`content/` 解析失败时再查 `static/<同相对路径>`，命中则计入**新增**计数器 `RESOLVE_STATIC` 且**不算 broken**（未动阈值/白名单/known-failures/`MODE`/exit）。本线**独立复现**（HEAD=`06214dc20a`）：
```
FILES=39033  TOTAL_LINKS=149140  BROKEN_LINKS=52  RESOLVE_STATIC=2  FILES_WITH_BROKEN=2
broken 列表里 ALL-FUNCTIONS-LIST 出现 0 次   ← 本线那 2 条已由 static/ 解析
```
⇒ **本线自己的 2 条已不再计入 broken**；剩下 52 条全在 `v1.3.15/{en,zh}/architecture/campaign-events.md`（写作线，已登记 open-defects）。

### 2.2 orphan（类别 2）
命令：`node tools/nav-orphans.mjs --by-parent` / `--json tools/_verify/nav-B-orphans.json` / `node tools/_v146_orphan_check.mjs`
口径：`CALIBER=self-link-counts-as-inbound`（冻结口径）

```
total_pages=39027  orphans=9  orphan_parents=8
by_tree={"v1.3.0":2,"v1.3.15":2,"v1.4.5":4,"v1.4.7":1}   v1.4.6_orphans=0
```

9 条 orphan 逐条成因（详见 `nav-B-orphans.md` / `.tsv`）：

| # | route | 磁盘文件 | 自然父索引 | 缺失原因 |
|---|---|---|---|---|
| 1 | `v1.3.0/en/api/mission/root/` | `…/en/api/mission/root/_index.md` | `…/en/api/mission/_index.md` | 父未列 `root` 子桶 |
| 2 | `v1.3.0/zh/api/mission/root/` | `…/zh/api/mission/root/_index.md` | `…/zh/api/mission/_index.md` | 同 #1（zh） |
| 3 | `v1.3.15/en/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt/` | `…/ALL-FUNCTIONS-LIST.txt` | `…/native-1.3.15-src/_index.md` | `.txt` 非 Zola 页面，结构上不可被行内链接命中 |
| 4 | `v1.3.15/zh/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt/` | 同 #3（zh） | 同 #3 | 同 #3 |
| 5 | `v1.4.5/zh/api/save-system/MetaDataExtensions/` | `…/save-system/MetaDataExtensions.md` | `…/save-system/_index.md` | 索引只链了带命名空间的 `MetaDataExtensions__TaleWorlds_SaveSystem` |
| 6 | `v1.4.5/zh/api/system/AutoGeneratedSaveManager/` | `…/system/AutoGeneratedSaveManager.md` | `…/system/_index.md` | 父索引未列 |
| 7 | `v1.4.5/zh/api/system/BoardGameState/` | `…/system/BoardGameState.md` | `…/system/_index.md` | 父索引未列 |
| 8 | `v1.4.5/zh/architecture/milestone-report/` | `…/architecture/milestone-report.md` | `…/architecture/_index.md` | 父索引未列 |
| 9 | `v1.4.7/en/api/engine/MBDebug/` | `…/en/api/engine/MBDebug.md` | `…/en/api/engine/_index.md` | 索引链的是 `../../../zh/api/engine/MBDebug`（跨语言），未链 `./MBDebug` |

**9 vs 10 差异**：`_v146_orphan_check.mjs` 的 `routeOf('_index.md')` 返回 `''`、`res('x/','../')` 返回 `'/'`，两者永远匹配不上 ⇒ 站点根页结构性地永远是 orphan；`nav-orphans.mjs` 已用 `keyOf()` 归一修复。**差异 = 根页 phantom，非内容缺陷。**

**merge 前后对照**：orphans 数、by_tree、9 条清单、自然父索引**逐条一致**（外壳改版 `4b10ed6673` 未影响）。

**修复轮最终结果**：orphan **9 → 4 → 2 → 0**。

| 阶段 | orphans | 命令/成因 |
|---|---|---|
| 初始（merge 后） | 9 | `node tools/nav-orphans.mjs --by-parent` |
| J 补 5 桶机械清单 + 手写 MBDebug 链接 | 2 | `nav-section-index.mjs --apply`（TOTAL_ADD=50、lost=0、幂等）+ 1 条手写索引链接 |
| 并发写作线新增 2 页未补链 | 4 | `v1.3.15/{en,zh}/architecture/gamemodel-decorator.md`（写作线产出，本线一次性代修） |
| Path A 删 2 个 `.txt` 垫片 | 2 | `git rm`（git 跟踪，可回放）；`total_pages` 39029→39027（−2） |
| 索引页补链 2 页新架构页 | **0** | `[GameModel Decorator](./gamemodel-decorator)` |

**终值**：`node tools/nav-orphans.mjs --by-parent` → `total_pages=39027 orphans=0 orphan_parents=0 by_tree={}`。

🔴 **这个 0 的成立前提（必须与结论一起读）**：`nav-orphans.mjs` 的 `keyOf` 根路由归一修复当前是**未提交改动**（mtime Oct 3 22:55；`git show HEAD:tools/nav-orphans.mjs | grep -c keyOf` = 0）。⇒ **任何人 clone 仓库、checkout 到 HEAD、跑同一条命令，得到的是 1，不是 0**。该修复由 release 线作为独立 checkpoint 提交（commit message：「keyOf 根路由归一，使 orphan 结论可从干净检出复现」）；**该 0 依赖此提交，SHA = `<待 release 线提交后填入>`**。

**第二把尺（`_v146_orphan_check.mjs`）读数**：`orphans=1 by_tree={"":1}`。
- **phantom 点名**：`""` = **站点根页 `content/_index.md`（route `/`）**。`routeOf('_index.md')` 返回 `''`，而 `res('v1.4.5/','../')` 返回 `'/'`，两者永远匹配不上；`nav-orphans.mjs` 的 `keyOf` 把 `''` 归一为 `'/'` 后，各版本根页的 `../` 回链即命中。
- **登记为「已知假阳性 · 本轮不修」**，理由一行：根页**确实有入链**（各版本根页的 `../` 回链），`_v146` 报它是它自己的 `keyOf` bug，不是真孤儿。按 Boss #10867：**两把尺给两个数且差异有成因是健康的**，不为让它也报 0 而改它。
- 该 bug 的既有记录：`_NAV-BASELINE.md` §1.5、`nav-orphans.mjs` 头部注释。
- 另一把尺的 `net_new=1` 相对 `tools/data/known-failures-orphans.json` 的 `known` 数组（当前 `baseline=0` 空），记录于 commit `b38bc13a68968e884658d8c844a5d08aa0f9cc0e`。

**判据未变**：三个检查器均未被本线修改（`nav-orphans.mjs` 的 `M` 是本线开工前就存在的未提交改动，内容 = 根路由 `keyOf` 归一 + selfTest；`_v146_orphan_check.mjs` mtime Oct 3 21:03，今日未动）。

### 2.3 类页页脚纯文本路径陈述（类别 3）
命令：`node tools/_verify/_navC-scan.mjs` / `_navC-classify.mjs`（worker C 交付，含阳/阴性 fixture）
分母 **38,274** 张类页；命中 **107** 条反引号包裹的路径陈述：**符合 59 / 不符 18 / 非导航 30**。
- **页脚这一类 = 0**：v1.4.6 的 16 张事故页（「父级导览位于版本根 `../../../`」）已修成 markdown 链接，全树反引号形态 0 残留（阳性对照：事故原文 fixture 命中 1；修复后形态命中 0）。
- **18 条不符**全部是叶子页写 `./X`（§4.1.0「多一层」静默 404），集中在 3 张 ItemRoster 页：
  `content/v1.3.15/zh/api/campaign-ext/ItemRoster.md`（6）、`content/v1.4.5/zh/api/campaign-ext/ItemRoster.md`（6）、`content/v1.4.5/en/api/campaign-ext/ItemRoster.md`（6）。
  数学证明：叶子页 route 比目录深一层，`./X` → `/<桶>/<本页类名>/X/`，而 `content/` 下不存在以类名命名的目录 → 注定 404，且断链/orphan 口径都看不见（它不是 markdown 链接）。
- 边界：`v1.4.5/en` 有 3 条（`DefaultItems`/`PartySizeLimitModel`/`PartyWageModel`）目标类实际在 `campaign` 桶，除层数错误外叠加「目标桶错误」，正确写法应为 `../../campaign/<类名>`（需确认意图）。
- 非导航 30 条（源码引用 `.cs:行` ×24、BasePath 域值 `../../` ×6）已登记为**非导航陈述**，不算缺陷。
- `_index.md` 范围外另登记 33 条反引号路径（未判定）。

### 2.4 索引页「给了链接必须给数量」（类别 4）
命令：`node tools/_verify/nav-D-check.mjs`（worker D2 交付，只读检测器）。分母 = **111** 个含 marker 的 `_index.md`。

| 类别 | 确认条数 | 按树分布 |
|---|---|---|
| 类1（有链接无数量） | **103** | v1.3.0=29 / v1.3.15=37 / v1.4.5=31 / v1.5.3=5 / versions=1 / v1.4.7=0（无 marker） |
| 类2（少列） | **32** | v1.3.0=18 / v1.3.15=9 / v1.4.5=3 / versions=1 / 站点根=1 |
| 类3（规模声称陈旧） | **3** | 全在 v1.4.7：入口页 42→57、en 8→23、zh 23→28 |

**阳性对照**：v1.4.7 三条全部复现（检测器会开火）。
**不复现**：v1.4.5 的 9336/7121/21/「0 页」——当前入口页声称（9384/7129/20 桶，千分位空格写法）与磁盘实测一致；前序发现来自 merge 前中间态或 `tools/_legacy-nav-spec.md` 旧口径。
**额外发现**：`content/v1.4.7/en/_index.md` 声称「en 侧无 save-system 目录」但磁盘 `content/v1.4.7/en/api/save-system/` 有 3 个类页（存在性矛盾）。

**Boss #11008 裁定**：类2 批准用 `nav-section-index.mjs` 补；类1 批准方案 (a)（marker 块内加一行机械计数，五条件见 §5.3）；类3 **只登记不修**（`_INTEGRATION-GATES.md` §3：树在写时的数字只是瞬时采样，应在树静止时一次性对齐）；类5/6/7 挂起。

### 2.5 大小写错配（类别 5，扩展）
⏳ 待 worker F 交付 `nav-F-case-mismatch.md` / `.tsv`。已知阳性对照：`../MBEvent`、`../../engine/Options`、`../../Campaign`×3（3 对 / 5 次出现），本机 Windows 判「链通」，Linux 上会 404。

### 2.6 落错层（类别 6，扩展，§5 A13「待实现」）
⏳ 待 worker G 交付 `nav-G-wrong-layer.md` / `.tsv`。

### 2.7 zola build render 期 orphan（类别 7）

**读数（page-creation 阶段，非完整构建；Boss #10069 口径）**：`-> Creating 38486 pages (30 orphan) and 538 sections`。

| 来源 | 命令/日志 | exit | 读数 |
|---|---|---|---|
| 本线被杀的构建（monitor #1） | `tools/_verify/nav-zola-build.log` | **无（900s 被杀）** | 38486 pages / **30 orphan** / 538 sections |
| release 线独占构建 | `tools/_verify/RELEASE-BUILD-zola.log` | **0**（2011s） | 38486 pages / **30 orphan** / 538 sections |

- **两处读数一致** ⇒ **30 orphan** 是本轮（merge 后、pre-nav）的 render 期孤儿数。
- **与 brief 的「136」对照**：136 是**更早时点**的读数（brief 自标为历史基线）；本轮实测 **30**，差异由时点与并发写入解释，**不引用 136 作本轮判据**。
- 限定：构建期间本线在恢复写入（工作区 3510→3745），是**移动靶上的读数**；且当时门禁已红（BROKEN_LINKS=2，见 §2.1）。
- **post-nav 读数待取**（nav 恢复落地后由 release 线再做一次有界运行做对比）。
- ⚠ 本机 `public/` 是被杀构建的不完整产物（未拷任何 static 文件）⇒ **不得用 public/ 作任何正/反证据**（Boss #11382）。

---

## 3. 覆盖了哪几类、漏了哪几类

**已覆盖（本轮）**：
1. audit-links 断链口径（BROKEN_LINKS / RESOLVE_NEITHER / FILES_WITH_BROKEN）+ 与两份冻结基线逐条 diff ✅
2. orphan 口径（nav-orphans 与 _v146 双读数 + 差异归因 + 逐条成因 + 父目录分布）✅ → **0**
3. 类页页脚纯文本路径陈述（§1.1 盲区）✅ 门槛 **0**；并扩到全部位置的 107 条分类
4. 索引页「给了链接必须给数量」（§1.2 盲区）✅ 已测（类1=103 / 类2=32 / 类3=3），修复未实施
5. 大小写错配链接（§1.1 盲区）——检测器已产出（`nav-F-case-mismatch.mjs`），报告未落盘
6. 落错层（§5 A13，两道门禁盲区）——按 Boss 指示挂起
7. zola build render 期 orphan ✅ **30**（page-creation 阶段，pre-nav）
8. §1.4 域消失无标记——读文档 + 复核 NAV-REWORK-QUEUE 时一并核对

**未覆盖 / 漏（如实列出）**：
1. **类1/类2 修复**——已批准且方案已过，但未实施（worker I2 反复 idle 未落盘）。
2. **F 大小写报告**未落盘（仅检测器）；**G 落错层**未产出（按 Boss 指示挂起）。
3. **zola render 期 orphan 的 post 读数**未取（等 nav 恢复落地后由 release 线有界跑一次）。
4. **§1.3 规模声称**的全量核查只做了抽样（由 worker D2 部分覆盖：类3=3）。
5. **§1.4 域消失无标记**未做机器化全站扫描，只做了文档复核。
6. **`_index.md` 的 33 条反引号路径**未判定（worker C 标为范围外）。
7. **部署真相 ≥ 本机读数**：Windows 大小写不敏感使本机 BROKEN_LINKS 是**下限**（见类别 5）；且本机 `public/` 是**被杀构建的不完整产物**（mtime 13:41:45，未拷任何 static 文件）⇒ **路由修复本轮不可判定，待 release 线 fixture 结论**（既不写「已验证」也不写「未修复」）。

---

## 4. 需正文线 / 人工处理的缺陷（`tools/_verify/open-defects.tsv`）

由 worker K 独占维护，3 列制表符：`完整相对路径 / 缺陷一句话 / 归属线`。已确认需登记（待 K 落盘）：
1. `content/v1.4.5/zh/api/campaign-ext/SellGoodsForTradeAction.md:33` — 断链 `./SellItemsAction` 应为 `../SellItemsAction`（类页正文）。
2. 3 张 ItemRoster 页共 18 条 `` `./X/` `` 应为 `../X/`（类页正文）；`v1.4.5/en` 其中 3 条叠加目标桶错误。

## 5. 修复轮（本线授权范围内）

授权：只改导航结构（索引页链接与数量、父/前/后/相关生成数据）；**不得改类页正文**（Boss #9979 单独授权的一行断链修复除外）；不得改判据/阈值；不得为减 orphan 删页。

### 5.1 🔴 登记：`content/**/_index.md` 的 SECTION INDEX 块由**脚本**写入（Boss 要求显式登记）

**写入器**：`tools/nav-section-index.mjs`（只写 `<!-- BEGIN SECTION INDEX -->` … `<!-- END SECTION INDEX -->` 之间的机械子页清单）。

**授权出处**（Boss #10032 查实，原文引用）：
- `tools/_NAV-SECTION-INDEX-WRITE-DESIGN.md` §1「硬前提与它的窄口」：boss 已为桶 `_index.md` 的机械子页清单开了一个窄口，理由是该清单「其正确内容由目录里有哪些文件**唯一决定**，没有作者判断成分」；硬前提保护的是「机器不得生成正文」。
- `tools/_NAV-ARCHITECTURE.md` §7.1「裁定（原文，不改写）」：
  ```text
  允许：只写 <!-- BEGIN SECTION INDEX --> ... <!-- END SECTION INDEX --> 这两块之间的机械子页清单
  禁止：写 marker 块之外的任何一行（包括散文、心智模型段、手写链接）
  禁止：写任何非 _index.md 的文件（叶子类页一律手写，硬前提不动）
  禁止：改动已有人工链接 —— 只能新增缺失项
  ```
- 护栏：`tools/lib/content-write-freeze.mjs:143` 导出 `assertStructuralScope()`，`nav-section-index.mjs` 调用它；**护栏跑不起来即停，禁止降级为「只做 marker 检查然后照写」**。
- 未删除任何重复 marker（3 个 `BEGIN=2/END=1` 文件保留，§7.5）。

**范围声明**：本线**没有**用脚本写任何叶子类页（`content/**/api/**/<Class>.md`），也没有写 marker 块之外的任何一行；叶子类页正文一律手写。

### 5.2 ★ 团队级常设规则（Boss #10767）——写进派单模板，转给写作线

```
任何【新写出来的页】，必须在同一批里接进它所属父索引的机械子页清单。
否则每写一页就多一个 orphan —— 写 4 万页就是 4 万个 orphan。
```

这条比修 orphan 本身更重要：**「补链」不能是事后的清理批次，必须是产出流水线的一步。**

**可执行收尾步骤（每批写作完成后跑）**：
```bash
node tools/nav-section-index.mjs --dry-run <桶目录>   # 先出报告给人看
node tools/nav-section-index.mjs --apply   <桶目录>   # 需护栏在位 + R2 批次清单
node tools/nav-orphans.mjs --by-parent                # 复测 orphan 不上升
node tools/audit-links.mjs                            # ★ 复测 BROKEN_LINKS 不上升（Boss #11215 补全）
```

**★ 完整批次验收判据（Boss #11215 补全）**：
```
每个写作批次的验收判据 = 六节齐全 + 关键成员逐成员 + 父索引补链
                        + ★ 批前/批后 node tools/audit-links.mjs 两套数，本批不得让 BROKEN_LINKS 上升
```
原因：`fdd540f17e` 把链接审计放在构建前，`BROKEN_LINKS≠0` 会让用户的 deploy 直接失败。
工具已带护栏（`assertStructuralScope()`）/ 幂等 / 只动 marker 块。

**一次性代修登记（Boss #10789）**：
| orphan | 产出方 | 处理方 | 性质 |
|---|---|---|---|
| `v1.3.15/{en,zh}/architecture/gamemodel-decorator/` | 写作线（并发新页） | 导航线（本线）**一次性代修** | **不是长期分工** |

- 本规则的真实代价实例：并发写作线新写上述 2 页时未同批补链 ⇒ 全站 orphan 从 2 立刻回到 4（`total_pages` 39027→39029）。
- 已要求 lead-15 把「补链」并入其**批次验收判据**（含批前/批后 orphan 两数）。
- 若 orphan 又涨，可直接按上表看出是哪条写作线的流程没落地。

### 5.3 🔴 窄口扩展登记（Boss #11008 批准）：marker 块内新增一行机械计数

**动作**：在桶/域索引页的 `<!-- BEGIN SECTION INDEX -->` … `<!-- END SECTION INDEX -->` 块内新增一行「共 N 个子页」类机械计数，用于消除 `_INTEGRATION-GATES.md` §1.2 的「索引页给了链接但没给数量」违规（当前 103 条）。

**为何落在窄口内**：该计数是**机械数字**——由目录里有哪些文件**唯一决定**，没有作者判断成分，与子页清单本身是同一种东西。

**授权出处**：`tools/_NAV-SECTION-INDEX-WRITE-DESIGN.md` §1（窄口原文）+ `_NAV-ARCHITECTURE.md` §7.1 + **Boss #11008 本次批准**。

**五条硬条件（Boss 原话）**：
1. 该行必须在 `<!-- BEGIN SECTION INDEX -->` … `<!-- END SECTION INDEX -->` **块内**；
2. **N 必须由生成清单的同一份枚举算出**（不许另走一次统计，否则会漂移）；
3. 写入器仍须调用 `assertStructuralScope()`；
4. 报**改前/改后**两套数（类1 由 103 → ?），并证明**只有**类1 被消除、没有顺带改动别的行；
5. 本条登记为**窄口的扩展**（即本表）。

**声明**：块内新增的是**一行机械计数，非散文**；未新增任何文档页，未改任何叶子类页。

### 5.4 修复动作

- **orphan → 0**：worker J 用 `nav-section-index.mjs`（marker 块内机械子页清单）补入链；授权把机械清单**补齐到完整**（dry-run TOTAL_ADD=50，含 5 个目标桶；这些页虽有其它入链故非 orphan，但缺清单项正是「跳过去回不来」的成因）。`.txt` 2 条与无 marker 块的父索引（如 `v1.4.7/en/api/engine/_index.md` 无 marker）登记 open-defects / 待裁定。
- **唯一断链**（Boss #9979 派单）：`content/v1.4.5/zh/api/campaign-ext/SellGoodsForTradeAction.md:33` 的 `./SellItemsAction` → `../SellItemsAction`，复跑 `audit-links` 目标 `BROKEN_LINKS=0`。
- **索引页数量**：待 worker D2 结果。
- **类页正文类缺陷**：全部登记 open-defects.tsv 交正文线。

## 6. prev/next 恢复工作流（Boss 裁定 #9901）

用户外壳重做（`4b10ed6673`）为构建性能移除了 prev/next 兄弟页扫描，丢了 **15 项导航行为**（仅 2 项有等价替代）——这是「跳过去回不来」的结构性成因。裁定：**用预生成数据恢复**（模板查表、不扫目录），并逐项处置 15 项。

### 6.1 15 项逐项处置（worker L 交付 `nav-L-rework-disposition.md` / `.tsv`）

**汇总：restore 9 / replace 5 / accept loss 3。**

| 处置 | 项 |
|---|---|
| **restore（9）** | #8 版本切换 · #9 语言切换 · #11 prev · #12 next · #13 first/last · #14 父级 · #15 相关入口 · #16 collapsed flag · #17 emitted_routes |
| **replace（5）** | #2–#5、#7（dropdown → sidebar quick-links 块替代） |
| **accept loss（3）** | #1 Home · #6 Native Source · #10 logo（均已被 sidebar 覆盖） |

**优先三项最小方案（均走预生成数据、0 渲染期扫描）**：
1. **prev/next 兄弟页**：模板从 `data/page-navigation.json`（已有 38177 leaf 的 previous/next）查表，删除 `parent_section.pages` 扫描循环。
2. **父级索引**：`section.html` 恢复 `page_navigation::render` 调用，宏内 section 分支查 `data/navigation.json` 的 parent/children。
3. **跨版本/语言切换**：扩展 `switch_href` 宏接受 `current_relkey`，查 `data/relkey_map.json`（已有 9647 条映射）。

**构建代价**：所有 restore 方案均为 O(1) 查表，不增加构建时间。

### 6.2 导航图预生成数据（worker M 交付设计 + schema）

`tools/_verify/nav-M-navgraph.md` + `nav-M-navgraph-schema.json`（11 字段：route/type/path/title/parentRoute/prevRoute/nextRoute/upChain/crossLanguageRoutes/crossVersionRoutes/relatedRoutes）；生成器 `tools/gen-nav-graph.mjs` 已产出 `data/nav-graph.json`。

🔴 **但 Boss #10617/#10691 裁定：不要默认造第 5 个数据文件**——L 已证明优先三项所需数据大多已存在（`page-navigation.json` / `navigation.json` / `relkey_map.json`）。⇒ 需先交「字段 ↔ 现有文件」对照表再决定去留；**在对照表出来前，nav-graph.json 不得接进任何模板**（该文件当前 33MB > `page-navigation.json` 的 18MB）。

### 6.3 后续单元

- **模板查表改造**（worker N）：由孤儿角色 worker-120 越权提前做过，**已存证并回滚**（见 §8.1）；待对照表判定后按正确路径重做。
- **构建耗时「加导航后」测量**：`zola build` 有界运行（到 `-> Creating N pages` 行）；pre 基线 = **38486 pages / 30 orphan**（§2.7）。
- **★ 刷新 `page-navigation.json`（Boss #11408 登记，现在不跑）**：386 条覆盖差的**正确修法是重跑 `tools/generate-page-navigation.mjs`**，而不是新造 33MB 数据文件。**等树静止后再跑**（它会产生新数据文件）。

### 6.4 🔴 「不得引入渲染期扫描」的书面依据（引用原文，Boss #11215）

旧 `templates/macros/page-navigation.html` 头部注释原文（存证于 `tools/_verify/nav-N-premature-template-diff.txt`，被删除的 `-` 行）：

```
{# Parent and related links only. Scanning every sibling in Tera is quadratic
   on the large API sections and pushes a full build past GitHub's 6 hour limit. #}
```

这正是「prev/next 被删」的**原始理由**，也是恢复 prev/next 时必须同时满足「**不引入渲染期扫描**」这条约束的书面依据：用预生成数据 + O(1) 查表，而不是在 Tera 里遍历兄弟页。

---

## 7. 产物清单（tools/_verify/）

| 文件 | 内容 |
|---|---|
| `nav-A-auditlinks-baseline-diff-REPORT.md`、`nav-A-broken-links.tsv` | audit-links 基线 + 差因 + 唯一断链 |
| `nav-H-postmerge.md`、`nav-H-broken-links-postmerge.tsv`、`nav-H-auditlinks-postmerge-raw.txt` | post-merge 重测 |
| `nav-B-orphans.md` / `.tsv` / `.json` | orphan 清单与成因 |
| `nav-C-footer-plaintext.md` / `.tsv`、`_navC-scan.mjs` / `_navC-classify.mjs` / `_navC-fixture/` | 类页纯文本路径陈述扫描 |
| `nav-D-index-counts.md` / `.tsv`（待） | 索引页数量违规 |
| `nav-F-case-mismatch.md` / `.tsv`（待） | 大小写错配 |
| `nav-G-wrong-layer.md` / `.tsv`（待） | 落错层 |
| `nav-I-scope-decisions.md`（待） | `.txt` 退役与页脚生成/正文的边界裁定 |
| `nav-J-orphan-fixes.md`、`nav-J-orphans-before.json`、`nav-J-batch-list.txt`（待） | orphan 修复 |
| `nav-K-open-defects.md`、`open-defects.tsv`（待） | 正文线缺陷登记 |
| `nav-L-rework-disposition.md` / `.tsv`（待） | 15 项处置 |
| `nav-M-navgraph.md`、`nav-M-navgraph-schema.json`（待） | 导航图预生成数据设计 |

---

## 8. 越界与盲区记录

### 8.1 templates/ 越界事件（「违规长得像没发生」）

| 项 | 值 |
|---|---|
| 谁写的 | **worker-120**（为「模板查表改造」创建的角色；创建时 RPC 超时 ⇒ 变 `Unknown target`，我无法再发指令） |
| 什么时候 | 13:40–13:47 |
| 写了什么 | `templates/macros/page-navigation.html`（加 `load_data(path="data/nav-graph.json")`）、`templates/section.html`（加 `page_navigation::render(...)`）、`templates/macros/sidebar.html`（`switch_href` relkey 跟随）⇒ **违反 Boss #10691「对照表出来前不得接线」** |
| 存证 | `tools/_verify/nav-N-premature-template-diff.txt`（6647 B，mtime 13:47） |
| 为何净改动=0 | **本线发现后让 worker I2(101) 还原**：`git diff templates/ > …`（存证）→ `git checkout -- templates/`，执行于 **13:47:30**。越权 diff 里的 3 个文件（`macros/sidebar.html`、`macros/page-navigation.html`、`section.html`）mtime 均为 **13:47:30.34x**；`templates/partials/sidebar.html` = **12:43:35**，**未被该次 checkout 重写**（它不在 diff 里、一直是 HEAD 状态）。 |
| 结果 | `git diff -- templates/` 与 `git status --porcelain -- templates/` 均为空；用户外壳（最近 3 个 templates 提交均为用户本人）完好 |

### 8.2 🔴 检查方法（盲区）：只看 `git status` 会漏掉「写过但净改动为 0」

**除 `git diff` 外必须看 `mtime`**。本次事件中内容与 HEAD 逐字节相同，但 mtime 从旧日期变为 13:47:30 ⇒ 说明**确实被写过**。

```bash
stat -c '%y %n' templates/section.html templates/macros/*.html
```

### 8.2b 🔴 检查方法（盲区）：**同名不同路径的文件必须给全路径**（Boss #11285）

本仓存在**同名不同路径**的文件，只给 basename 会让两个人量的不是同一个东西：

```
templates/macros/sidebar.html     12500 B   mtime 13:47:30.342   ← worker-120 改过（在越权 diff 里）
templates/partials/sidebar.html     984 B   mtime 12:43:35.073   ← 从未在 diff 里
```

引用文件时**必须给全路径**（这是「两把尺读的不是同一个量」的又一形态）。

### 8.3 常设令重申

- `templates/**` 是**用户本人的外壳面**（merge 时按裁定取 THEIRS），任何人动它必须先报 Boss。
- `data/nav-graph.json` 在字段对照表出来之前**不得接线**。
- **孤儿角色也能写工作区** —— 「角色已关闭」不等于「它没改过东西」。

### 8.4 ★ 团队级规则（Boss #11302）：会被引用的产物必须尽快入 git 或改版即改名

```
凡是【下一轮会被引用】的产物（证据文件、清单、进度台账、台账式报告），
必须在产出后【尽快提交进 git】，或【改版即改名】留档。
理由：本会话已有两个孤儿角色在无人控制的情况下改动工作区；
      未提交的产物【会被静默覆盖且不可回放】。
⇒ 孤儿角色是活的风险源：任何它们可能触到的文件都应视为易失。
```

**本会话的两个实例**：

| 事件 | 角色 | 时刻 | 后果 |
|---|---|---|---|
| 越权接线 `templates/**` | worker-120（孤儿） | 13:40–13:47 | 已存证（6647 B）并还原；templates 现已净改动 0 |
| **原地覆盖 `nav-I-scope-decisions.md`** | **worker-110（孤儿）** | **13:51** | worker-101/I2 的原版丢失；**不可回放**（从未进 git、无副本）；Path A 证据已从存活碎片重建 |

两个角色现均为 `Unknown target`（Boss 也无法取消），所以只能靠「**产物尽快入 git / 改名留档**」降低损失。
