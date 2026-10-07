# lead-20 验证线 · 落盘读数与判定（2026-10-07）

> 本线职责：**只读 + 独立复算 + 门禁读数发布**。不写 `content/**`、不写 `templates/**`、不改任何判据/阈值/白名单。
> 每个数字都附「量它的命令」；每个 `0` 都附成因（`0` 只有两类：判据坏了 / 语料确实为空）。

---

## 1. 权威门禁时间线（同一把尺）

| 取数时刻 (UTC) | FILES | TOTAL_LINKS | BROKEN_LINKS | FILES_WITH_BROKEN | RESOLVE_NEITHER | RESOLVE_STATIC |
|---|---|---|---|---|---|---|
| 2026-10-07T07:40:26Z | 39037 | 149503 | **0** | 0 | 2 | 2 |
| 2026-10-07T08:06:49Z | 39037 | 149552 | **1** | 1 | 3 | 2 |
| 2026-10-07T08:08:33Z | — | — | **1** | — | — | — |
| 2026-10-07T08:13:34Z | 39039 | 149578 | **0** | 0 | 2 | 2 |

命令：`node tools/audit-links.mjs`

**转红 → 回绿的全过程**（本轮唯一一次门禁变色）：

- 病灶：`content/v1.4.5/zh/api/campaign-ext/AcceptCallToWarOfferMapNotification.md`
  - 第 155 行 `[InformationData](../../core-extra/InformationData)` ← 对
  - 第 166 行 `[InformationData](../InformationData)` ← 错，解析到 `api/InformationData`，该路径不存在
  - 真身：`content/v1.4.5/zh/api/core-extra/InformationData.md`
  - **判定依据**：同页第 155 行已写对 ⇒ 同页自相矛盾的笔误，**不需裁定口径**。
- 定位工具：`node tools/audit-changed-links.mjs`（秒级，直接给出文件与目标；全站门禁只说「有 1 条」）
- 持有线 lead-18 已修，修复后该页 sha256 前 16 位 `ce73f34adc596a12`，第 166 行已为 `../../core-extra/InformationData`
- 登记：`tools/_verify/open-defects.tsv` 第 32 行

**`BROKEN_LINKS=0` 的成因**：语料确实无断链，不是判据坏。证据：同跑批 `RESOLVE_NEITHER=2`、`RESOLVE_STATIC=2` —— 判据确实在报非零事件，且这 2 条经 `static/` 目标类解析成功；`RESOLVE_OK_*` 均非零，证明解析器在工作而非空转。

---

## 2. nav-orphans 读数（口径 `self-link-counts-as-inbound`）

| 取数时刻 (UTC) | total_pages | orphans | by_tree |
|---|---|---|---|
| 2026-10-07T07:40:41Z | 39037 | **0** | `{}` |
| 2026-10-07T08:13:34Z | 39039 | **2** | `{"v1.3.15":2}` |

命令：`node tools/nav-orphans.mjs --by-parent`

**`orphans=2` 的归属与判定（我独立核实，非转述）**：
- `content/v1.3.15/en/architecture/action-family.md` · `content/v1.3.15/zh/architecture/action-family.md`
- 两页 mtime `2026-10-07T16:14:17`（本地）= 我测量前 **数秒**，即**正在被写入**。
- 两页的桶 `_index.md`（`content/v1.3.15/{en,zh}/architecture/_index.md`，mtime 15:50:22）**尚未加入指向它们的链接**。
- ⇒ 判定：**新页入库但桶索引未同步的在写中间态**，不是内容缺陷。桶 `_index.md` 补上链接后应自动消失。
- 归属：`v1.3.15/{en,zh}/architecture/`（lead-18 已声明不是其线，其线为 `v1.4.5/zh/api/campaign-ext/` 且 0 孤儿）。

**`orphans=0` 的成因**（07:40:41Z 那次）：分母健全 —— `total_pages=39037` 与同批 `FILES=39037` 逐数一致；`by_tree={}` 说明无任何父目录残留孤儿。
**口径警告**：`self-link-counts-as-inbound`（自链算入边）是**弱口径**。`orphans=0` 不等于树状结构已成立，只等于该口径下无孤儿。另有独立的「回程」口径见 §3。

---

## 3. 回程口径：783 页没有回到父 section 的链接（叶子页 684）

命令：`node tools/_verify/lead-20/upcheck.mjs [--list <out>]`

```
TOTAL_PAGES=39039   LEAF_PAGES=38500
NO_UP_LINK_ALL=783  NO_UP_LINK_LEAF=684
v1.4.5=362  v1.3.15=218  v1.5.3=138  v1.3.0=36  versions=18  v1.4.7=10  _index.md=1
top dirs: v1.4.5/zh/api=206  v1.5.3/zh/api=138  v1.4.5/en/api=118  v1.3.15/zh/api=76  v1.3.15/en/api=75
```
逐页清单：`tools/_verify/lead-20/no-up-link-783-20261007.txt`（783 行）

**这不是 orphan 口径，不要与 §2 对撞。** 孤儿口径问「有没有人链进来」（有：桶 `_index.md` 链了每一页），本口径问「能不能走回去」（不能）。用户原话「跳过去回不来了」指的是后者。

### 判据定义（**必须带单位，否则会得出错数**）
一个 target 算「回程」当且仅当它匹配 `^(\.\./)+(_index\.md)?$` **或** 就是裸 `..`。

**裸 `..` 必须接受**，因为权威门禁接受：`tools/audit-links.mjs` 第 77 行 —— *"Ensure directory semantics: trailing slash so `..` climbs from the page folder"* —— 它把 `..` 规范化后解析。
拒绝 `..` 会**多算 87 页**（实测：严格口径 870 vs 对齐口径 783；差值 87 页**全部**是裸 `..` 形态，`_index.md`/`./_index.md` 形态 0 页）。
⇒ **783 是与权威门禁一致的正确读数；870 是过计数。**

### 判据不坏的反证（三条，缺一不可）
- `content/v1.4.5/zh/api/campaign-ext/GainRenownAction.md` 有 `## 导航` + `../` → **未**入列
- `content/v1.4.7/en/api/campaign/Campaign.md` 有 `↑ Parent: [...]` → **未**入列
- `content/v1.3.0/zh/api/campaign/DefaultEncounter.md` 有 `本区域目录` → **未**入列
⇒ 判据在「有回程链接」的页上确实命中，故结果不是「判据没跑」。

### 稳定性
`07:45:07Z` → `08:05:42Z`（隔 20 分钟）→ `08:16:32Z` 三次复算逐数一致（783 / 684）。
另：`08:11:18Z` 曾出现 870，经查**是我自己脚本的判据过严**（见上），**不是内容回归**。
独立验证：最近 45 分钟内被修改的 115 页中，**0 页**缺回程链接 ⇒ 新增写入没有引入该类缺陷。

### 真样本（逐页核过）
- `content/v1.3.0/en/guide/campaign-basics.md` —— 全部 H2：`Overview` / `Mental Model` / `CampaignBehavior` / `MobileParty` / `Settlement` / `Differences from v1.3.15` / `Related Documentation` / `Usage Example`。**无 `导航` 节，无任何 `../` 回程链接。**
- `content/v1.3.0/en/api/campaign/Campaign.md` —— 末节 `## See Also` 只有平级/下行（`../Clan`、`../Hero`、`../../../architecture/save-system`），**无 `../` 回本桶**，`## 导航` 不存在。

---

## 4. 判分器口径越界警告：J2 是**批次尺**，不是站点尺

`tools/_verify/lead-145zh-judge.mjs` 的 J2 要求七节齐全（概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见族 / 导航）。
**七节模板（含 `## 导航`）采用率**：

| 树 | 页数 | 有 `## 导航` |
|---|---|---|
| `v1.3.0/zh` | 5300 | **4** |
| `v1.3.15/zh` | 5690 | **231** |
| `v1.4.5/zh` | 9477 | **344** |
| `v1.4.7/zh` | 48 | **0** |

⇒ 七节模板只存在于**新写的深页**。拿 J2 全站跑会产出成千上万条**构造性的假 FAIL**。
实例：用该判分器跑 `v1.3.0/zh` 5 页得 `pass=4 FAIL / 1 PASS`，但逐条复核后判定 **4 个 FAIL 全是口径不匹配，不是内容缺陷**：
- 那 4 页**并非「回不去」**：逐页 grep 到 `- [本区域目录](../)`（`DefaultEncounter:199` · `DefaultCharacterStatsModel:139` · `DefaultArmyManagementCalculationModel:241` · `DefaultClanFinanceModel:198`），回程是通的。
- 它们用 `主要属性`/`主要方法`/`使用示例` 这套旧命名，`主要方法`≈`关键成员`、`使用示例`≈`真实示例`，**实质内容在，只是节名不同**。

**同一判分器另有一条潜在假阳性**：其 `SRC_ROOT` 硬编码 `../bannerlord-1.4.5/Bannerlord.Source`，而 `v1.3.0` 没有 `Bannerlord.Source` 目录（其 `.cs` 在各模块目录下）。对 v1.3.0-only 文件 J3 会误报。
**⇒ 需 Boss 裁定**：七节模板是「仅新页标准」还是「全站标准」。若为全站标准，这是几千页工程且必须先给分母。

---

## 5. 复算方法论：一条差点造成误判的教训

lead-18 的冻结宣告里 9 个字节数与我实测**全部不符**（差 198–284 B），但 **sha256 前缀 9/9 完全一致**。
**我没有按「数不符」指控**，先复算：他们的数**精确等于 `文件字节 − frontmatter 字节`，9/9 误差 0**。
⇒ **数字没错，单位标签错了**（报的是正文字节，写成 `B`）。已回信建议改为 `body B`。

> **规则**：sha 不同 = 内容不同；**sha 相同而字节不同 = 有人量了不同的 span 或单位**。
> 先诊断变换（`bytes − frontmatter`、body-only、字符数、CRLF 归一），再判断是否不实。
> 另已排除：CRLF 翻译（文件纯 LF，`grep -c $'\r'` = 0）、多字节字符计数（码点约为字节的 60%，远低于其数字）。

同类：`bash $'\uFFFD'` 是**坏判据**（展开为字面量 5 字符串 `\uFFFD`，会恒返 0）。U+FFFD 检测必须用 node + 正控制。

---

## 6. 独立复核（不看报告，只看磁盘）

**13 页复核**（`tools/_verify/lead-20/manifest-WB-20261007T074522Z.txt`）
- 判分器已钉身份：`tools/_verify/lead-145zh-judge.mjs` = 23649 B / mtime 15:41 / sha256 head `05c2a522adbc1183`
- **pass = 9/13**（fail 4，全部是 §4 的口径问题）· **deep_pass = 13/13** · **tier = handwritten_deep = 13/13**（三数分开打印）
- 引用边界：**260 条，0 越界，0 缺文件**
- U+FFFD：**0**，且判据经正控制证明有效
- 链接形态：**0 真缺陷**；5 条尾斜杠全是 section-index 链接（J11 允许）
- 与权威门禁 `--cross-check`：**AGREE**

**b01/b02 冻结凭据**：以 **sha256** 认账（lead-18 已宣告 b01 冻结 07:46Z / b02 冻结 07:38Z）。**b03 未冻结，不出结论。**

---

## 7. 工具：`tools/audit-changed-links.mjs`（本线指派、已入库）

- commit `963a586430` · 5593 B · sha256 head `591d68a7ff1d853d`
- 只审相对 HEAD 有改动的 `content/**/*.md`（**含 untracked**），**秒级**完成（全站审计分钟级）
- 解析语义**复用** `audit-links.mjs`（含 `static/` 回退）；`audit-links.mjs` 本体**一行未动**
- `BROKEN_LINKS>0` ⇒ **非零退出**，可直接作写作线的**批级门禁**
- 上线后第一个动作即抓到 §1 那条真 404（全站门禁只报「有 1 条」，它直接给出文件与目标）
- 已知失败模式（已在文件头记录）：git 返回**仓库相对**路径，若与**绝对** root 前缀比对会得到 `CHANGED_FILES=0` 的假读数

---

## 8. Boss 裁定（2026-10-07，第 3 次重申，最短可执行版）

```
裁定 1：七节模板 = 【仅新页标准】（批次尺），不是全站标准。
  ⇒ J2 / J10 从【站点缺陷口径】剔除；只在「本会话产出的批次」上使用。
  ⇒ 不派任何基于 J2 的修复；不做几千页改名工程。
  ⇒ 依据：## 导航 采用率 v1.3.0/zh 4/5300 · v1.3.15/zh 231/5690 · v1.4.5/zh 344/9477 · v1.4.7/zh 0/48；
         且那 4 页实质内容在、只是节名不同（主要方法≈关键成员、使用示例≈真实示例）。

裁定 2：783 页无回程链接 —— 【清单保留，不派逐页修复】。
  ⇒ 修法在【模板层】：页面布局渲染 breadcrumb / 父级链接 ⇒ 一次覆盖全部 39k 页，不碰正文。
  ⇒ 归属：并入 lead-13 正在重做的模板工作（它因「缺失 route 崩溃 + 每页 18.8MB」被要求撤下重做）。
  ⇒ 本线不需要写 content/**；清单作为【分母与范围】保留。
```

**⇒ 因此本线不得据此派任何修复。** 清单与口径保留在 §3 与 `nav-up-link-gap.tsv`。

---

## 9. 判分器的「归属规则」缺陷：12 条假阳性（已证，且已被 lead-18 部分修掉）

`content/v1.5.3/zh/api/campaign/Campaign.md`，`J3 bad=12`。逐条核源码后判定**页面是对的、尺是错的**：

```
页第 41 行：`new CampaignGameStarter(...)`（`:1952`）
  bannerlord-1.5.3 Campaign.cs:1952 = CampaignGameStarter campaignGameStarter = new CampaignGameStarter(this.GameMenuManager, …)  ← 与页述完全一致
页第 39 行：`Campaign.Current = null`（`:1694`）
  Campaign.cs:1694 = Campaign.Current = null;                                                                                     ← 与页述完全一致
Campaign.cs 共 3064 行 ⇒ 二者都在界内；尺却拿 EditorSceneMissionManager.cs（126 行）去核
```

**根因**：裸 `:N` 归给「最近一个完整引用」的文件，太粗。该页先引 `EditorSceneMissionManager.cs:45`，于是后续指回 `Campaign.cs` 的裸引用全被归错。
**双向危害**：长文件引用拿短文件核 ⇒ 假阳性；短文件引用拿长文件核 ⇒ 真越界被静默放过。
**核心命题：`行号在界内` 只有在【归属正确】时才有意义。** 与 `SRC_ROOT` 硬编码同族 —— 都发生在「引用该归属到哪棵树/哪个文件」这一步。

**修前/修后（lead-18 的 `3dc897bc` 已把「不猜」做进去）**：
```
改前 127ee75a: J3 checked=25 (full=9 + bare-resolved=16) bad=12   ← 12 条谎报越界
改后 3dc897bc: J3 checked=14 (full=9 + inBlock=5 + uniqFile=0) bad=1 · J4 unattributable=11
```
⇒ 从「12 条谎报」变成「1 条 + 11 条诚实地说『无法归属，不猜』」。
**残留 1 条**：同块规则下 `:1694` 仍归到 `EditorSceneMissionManager.cs`。**「同块」优于「最近前一个」，但同块内存在多个不同 `.cs` 时仍会归错。**

---

## 10. ⚠ 尺的 sha churn 已造成**实际后果**：b05 读数不可复现

```
b05 冻结宣告用的尺：127ee75ae9c20d93  （= commit da1dfa7461 的 blob，按 git 逐版本核对）
现在盘上的尺：      3dc897bc91f672dd  （= commit 984a6cc155 "declared-schema judging and J12, effective from b06"）
```
**同一批 5 页：**
```
127ee75a → JUDGE total=5 pass=5 fail=0     （lead-18 宣告的读数）
3dc897bc → JUDGE total=5 pass=4 fail=1     （现在盘上的尺）
   FAIL ActionCampaignOptionData.md  ✗ J4 unattributable-bare=6
   deep_pass=5/5 · tier=handwritten_deep=5/5  （这两个口径未变）
```
**⇒ `984a6cc155` 标为「对 b06 及以后生效」，但它在判 b05 的页 ⇒ 生效范围的声明与实际行为不一致。**
**⇒ 本线判定：这是【尺自身没守住「一个数必须说清它描述的是哪个瞬间/哪把尺」】，不是内容缺陷。** 需 lead-18 二选一：(a) 用新尺重判 b05 并重发冻结宣告；(b) 让尺可切换、b05 仍绑旧 sha。

**附：本线自己也踩了重名 basename 的坑** —— 首次跑 b05 时用 `find` 抓到 7 个文件而非 5 个（`ActionNotes.md`、`ActionCampaignOptionData.md` 在多个桶下重名）。已改为显式路径。**「重名 basename 必须限定在页面自己的版本树/桶内」这条，本线刚警告过别人就自己踩了。**

---

## 11. 编造 API 检测（W-E / worker-202）· 中间读数 + 精度警告

```
phaseC-summary.json:
  pages_scanned=39039 · pages_uncheckable=29（全部是 versions/* 与根 _index.md —— 无版本树）
  identifiers_extracted=268430
  layer1_flagged=2746   (distinct 1314)
  layer2_flagged=2447   (distinct 1369)
phaseE-layer2-hard.json = []  ·  phaseF-verify.json: 每棵树 index_gap=0
```

**★ 精度警告（必须与上面的数字同时引用）**：W-E 自己的 `sample_genuine` 列表里，大量条目**不是编造**：
```
InvalidCastException · StackOverflowException        ← .NET BCL 类型（本就不该出现在游戏源码里）
OnShipXxx · AddXxx · XxxModel · OnXxx · TOther        ← 占位/模式记号，不是真实标识符
MyDefectionModel · SettlementXxxModel                 ← 占位符，意为「你自己的模型」
Extensions__TaleWorlds_Core · DependantModules        ← 配置键 / 模块字段
```
**⇒ `index_gap=0` 是对的（它们确实不在树里）；但「不在树里」≠「编造」。**
**⇒ 因此 `layer1_flagged=2746` 在给出假阳性率之前【不得作为缺陷数使用】。**

**已确认的真案例**：
- **Layer 1（词边界全树 0 命中）**：`SaveManagerBase` · `ISaveable` · `DefineTypes` · `SetViewModel` · `LoadGame` · `ReadObject` · `WriteObject`
- **Layer 2（存在但归属错）**：`SaveGame` 只存在于 `MBSaveLoad.cs`，页把它归属到 `SaveManager`
- **反向前控制（必须抓不到，抓到即假阳性）**：`SaveableCampaignTypeDefiner.cs:52` —— 行号对、标识符对、**描述错**（页说注册 `Settlement`，真身注册 `Army`）

**⇒ 能力边界（必须显式写明，不得留成隐含假设）**：机械手段可覆盖「名字是否真实」（③），**不能覆盖「描述是否属实」（⑤）**。后者只有人眼。

---

## 12. 四道判据的分工（本线整理）

```
① 断链            守【可达】            —— 已有，绿
② 引用边界         守【行号不越界】       —— 已有，绿；但 in-bounds ≠ correct，且归属必须正确
③ 标识符存在+归属   守【名字是否真实】     —— 无人守；词边界匹配，两层（W-E 测量中）
④ 孤儿/回程         守【能走回去】        —— 已有弱口径 self-link-counts-as-inbound
⑤ 语义正确性       守【描述是否属实】     —— ★ 机械不可覆盖，只有人眼
```
**任何一道绿都不代表另外三道绿。** 本日全部误判都来自把其中一道的绿当成全部。

---

## 13. b05 复核：通过 · 且独立复算了 lead-18 的整张覆盖率表（逐格一致）

**判分器 sha 实测 `ff5e35e7b60cb811`（35481 B / mtime 17:06），与 lead-18 声明一致。**

```
BATCH  CHECKED  FULL  INBLOCK  SUBJECT  BAD  UNATTRIB
b01        127    127        0        0    0         0
b02        182    166        3       13    0         0
b03         74      6        6       62    0         0
b04         94     88        4        2    0         0
b05         77     23       13       41    0         0
TOTAL      554    410       26      118    0         0
```
**lead-18 报 TOTAL = `554 / 410 / 26 / 118 / 0 / 0` —— 逐格一致。**
⇒ **b01–b05：554 条引用全部核界、越界 0、无法归属 0。**
（口径边界：①边界全量已核 ②语义正确性 0/554 **未核** ③形态可达性全量已核）

### 归属规则的修前/修后（我报的 12 条假阳性 → 0）
```
127ee75a  bare-resolved 规则: J3 checked=25 (full=9 + bare-resolved=16)  bad=12 · unattributable=0
3dc897bc  同块规则:          J3 checked=14 (full=9 + inBlock=5)          bad=1  · unattributable=11
ff5e35e7  主语文件规则:      J3 checked=25 (full=9 + inBlock=3 + subject=13) bad=0 · unattributable=0
                             subject=Campaign.cs
```
该页现在仍 FAIL，但只剩两条**口径不适用**项，**无引用类缺陷**：
`J2 missing=[关键成员,导航]`（Boss 裁定：七节模板仅新页）· `J10 links-outside-see/nav=1`（lead-18 线内政策，跨线不适用）。

### 新归属规则（lead-18 采纳本线建议后落成三条）
```
① 本块单一文件 ⇒ 用块上下文
② 否则 ⇒ 用页面主语源文件（全仓 97.6% 的页声明了它）
③ 都不行 ⇒ 报 unattributable，【不猜】
```
**⇒ 这正是本线 §9 提出的「无法确定时报 UNCHECKABLE 而不是猜」。**

### 第 9 种「数不可复核」成因（本轮新增）
lead-18 的主语文件正则带了 `$` 锚定，而语料写作 `` `...cs`（935 行）`` —— 行尾还有「（N 行）」⇒ `$` 不匹配 ⇒ 多页 `subject=-` ⇒ **33 条本可归属的裸引用被误报 unattributable**（b05 一度 5/5→3/5）。
**⇒ 第 9 种：锚定假设（`^`/`$`）与语料实际形态不符。** 其处置顺序正确：先怀疑自己的正则，而非先改内容。

### basename 定位风险（已验证，非推测）
本线重跑 b05 时按 basename `find` 抓到 **7 个文件而非 5 个**（`ActionNotes.md`、`ActionCampaignOptionData.md` 在 campaign-ext / campaign / viewmodel 三桶下均存在）。
**⇒ 用 basename 定位在多桶重名时会错配，从而对行号做出错误判定（双向）。** 全仓约 187 个重名 basename；`MissionState.cs` 一个就有 6 个（421/408/356/410/410/412）。
**⇒ 正确顺序：全路径优先 → basename 兜底 → 都不行报 unattributable。**

### 跨线可用判据（lead-18 广播，本线采纳）
```
J5R 与 J3   = 跨线通用
J2 / J10 / J11 = 仅 lead-18 本线（别线读它们应记「不适用」，不是「不合格」）
```

---

## 14. 口径：行号/行数读数必须附版本树（Boss #15225 要求写入）

```
MissionState.cs 在六棵树里分别是：421 / 408 / 356 / 410 / 410 / 412 行
  1.3.0 = 421 · 1.3.15 = 408 · 1.4.5 = 356 · 1.4.6 = 410 · 1.4.7 = 410 · 1.5.3 = 412
  每棵树里各只有 1 个 MissionState.cs（不是同名歧义）
⇒ 「N <= 行数」这条判据若不带版本树，就是不可判定的。
```
**本线的 408 vs 356 分歧不是谁数错，是【没写范围】**：408 是 v1.3.15 的，356 是 v1.4.5 的。
**缺陷类依然成立**：`MissionState.cs:4512` 在**任何**一棵树里都越界（最大 421）。

**与本线 §9 同族**：`SRC_ROOT` 硬编码、裸引用归属规则、basename 定位、版本树缺失 —— **四处都发生在「这个数该归属到哪里」这一步**。
**⇒ 通用表述：任何关于「文件」的读数（行数、存在性、行号界）都必须同时声明【哪棵树 + 哪个路径】。**

---

## 15. `nav-UP-link-gap.tsv` 交付（lead-13 请求）

```
文件：tools/_verify/nav-UP-link-gap.tsv   783 数据行 + 7 行表头 · 175 KB · sha256 3328dbe03ec3f9c9
脚本：tools/_verify/lead-20/nav-up-link-gap.mjs   sha256 f4879856188f4b22（已入库，可重跑）
列：  path<TAB>version_tree<TAB>kind<TAB>h2_list<TAB>nav_section
commit：ebcc8a05cd
复现：node tools/_verify/lead-20/nav-up-link-gap.mjs tools/_verify/nav-UP-link-gap.tsv
```
**分布**：
```
版本树:  v1.4.5=362 · v1.3.15=218 · v1.5.3=138 · v1.3.0=36 · versions=18 · v1.4.7=10 · (root)=1  = 783
类型:    leaf=684 · section_index=99
导航节:  NO_导航=638 · has_导航=145
```

**★ 分母更正：783 中 1 条是站点根，按定义不可能有父级**
```
content/_index.md   (root)   section_index   已有「导航」节
⇒ 783 − 1 = 782 可行动分母
```
若不单列，将来「全站统一回程链接」的验收项会永远挂着这一条失败。

**★ 有「导航」节 ≠ 有回程链接**：**145 / 783 页已有 `## 导航` 节，但仍然没有回程链接**（那一节里没有 `../`）。
⇒ 这 145 页证明「加一个 `## 导航` 节」**不能**保证回程；**真正的修法是布局层渲染 breadcrumb / 父级链接**（Boss 裁定的方向）。**这条数据支持该裁定。**

**本线自曝**：给 TSV 加 `version_tree` 列时**改错了列序却没改依赖该列序的过滤条件**，脚本一度报 `NO_UP_LINK_LEAF=0`（真值 684）。已修。
⇒ **改结构必查所有依赖该结构的引用。**

---

## 16. prev/next 覆盖缺口：**100% 由 JSON 陈旧解释**（本线独立复算，未跑构建）

```
data/page-navigation.json 生成时刻：2026-08-14T16:19:30Z
JSON_ROUTES=38177 · DISK_LEAF=38500 · LEAF_NOT_IN_JSON=323
  of those 323:  newer_than_JSON = 323   older_than_JSON = 0      ← 全部比 JSON 新，零例外
```
**⇒ 覆盖缺口不是生成逻辑 bug，纯粹是产物陈旧。**
**⇒ 这个 100% 相关性同时自证路由匹配正确**：若匹配写错，比 JSON 旧的页也会缺；实际 0 页。

**版本树分布**：`v1.5.3=144 · v1.4.6=86 · v1.4.7=57 · v1.3.15=15 · v1.4.5=12 · (other)=9`
`v1.4.6+1.4.7+1.5.3 = 287` —— 与 Boss 给的 287 **精确一致**；总数差 6 全部来自 leaf 分母（38500 vs 38494）。

**★ 路由键格式陷阱（本线自己踩过）**：JSON 键**带前后斜杠**（`/v1.3.0/en/api/campaign-ext/AccessObject/`）。
不带前导斜杠构造路由 ⇒ 报 **38,358** 缺（真值 **323**）。**发布任何覆盖数之前，先拿一个真实键验证路由构造。**

**⇒ 对裁定的影响**：修复不只是「重新接上模板」，还必须**重新生成 `page-navigation.json`**（已落后 323 页）；
而「重新生成 + 每页深拷贝 18.8MB」正是所测的代价 ⇒ **方案须同时解决①新鲜度 ②每页加载代价**；
**按版本 × 语言分片同时解决两者**（每片更小、且各线可独立重新生成自己那片）。

**本线纪律**：本轮全部读数来自读文件/解析 JSON，**未跑任何构建** —— 避免与正在基准测试的 worker 争 CPU。
待 `tools/_verify/verify-prevnext-perf.md` 落盘后再独立复测一轮耗时。

---

## 17. Boss 裁定：prev/next = **丙（撤下重做）**；A/B 降为信息性输入

```
丙 = 撤下实现 → 按「缺失 route 兜底 + 分片（版本 × 语言 × 顶层桶 ≤200KB）」重做
验收 = 渲染测试 rc=0 且 0 条 "Failed to render"，且子集里必须含至少一个缺 route 的页
依据 = 本线 §3 的结构性结论（宏体第一条语句、无条件、两个调用点都不在 if 内 ⇒ 每页执行）
     + Boss 实测的 323 个缺 route 叶子
```
**⇒ A/B 不再是决策阻塞项，降为【重做的设计输入】**：它回答「分片是为速度还是只为防崩」。

**本线的 A/B 输入（worker-198，重复后收敛）**：
```
A avg=166.3s · B avg=71.8s · delta=94.5s · ~68.1 ms/页 · 结论「A 恒慢」
外推全站（标注为外推）：68.1 ms × 39,039 页 ≈ 2,659 s ≈ 44.3 分钟
⇒ 分片【兼有速度理由】，不只是防崩
```
**⇒ 与 §16 合起来，重做方案须同时满足三件事**：
```
① 新鲜度：分片产物必须可【独立重新生成】（否则每加一批新页，整份 JSON 又落后一次）
② 速度：每片更小 ⇒ 每页深拷贝代价下降（实测每页 ~68 ms 的固定开销）
③ 不崩：缺失 route 必须兜底（验收要求子集含至少一个缺 route 的页，可从 323 个里挑）
```

**本线优先序（Boss #15339，含本线更正）**：
```
① W-E（worker-202）：标识符存在性 + 归属两层 + Layer 3 OFFSET
     —— 它已【吸收】原 W-C 的引用语义核任务（W-C 两次未交付，已释放）
② W-D（worker-198）：A/B 定稿（已成功，只差落盘）
③ 无第三项
```
**分母更正**：语义核当前是 **554 条 / 25 页**（b01–b05），不是 Boss 写的 477 / 20。

**本线纪律**：不与正在基准测试的 worker 并发跑构建（避免争 CPU 破坏两边读数）。

---

## 18. Layer 3（OFFSET）规格缺陷：抽样 2/2 假阳性，**被标的页面其实是对的**

Boss 新增 Layer 3：`identifier` 在文件里存在，但不在被引行附近 ⇒ 标 OFFSET。
worker-202 产出 `phaseG-layer3.json` = **13,202 条**（`phaseG-layer3-uncheckable.json` = 12,650）。

**本线抽样 2 条，2 条都是假阳性。** 页面 `content/v1.3.0/en/api/campaign/AcceptCallToWarAgreementDecision.md` 第 15 行：
```
…declared at `AcceptCallToWarAgreementDecision.cs:17`, … inside `AllianceCampaignBehavior` … (`AllianceCampaignBehavior.cs:140`, `:474`)

源码实测：
  AcceptCallToWarAgreementDecision.cs:17 = public class AcceptCallToWarAgreementDecision : KingdomDecision   ← 页面正确
  AllianceCampaignBehavior.cs:140        = …new AcceptCallToWarAgreementDecision(…)                          ← 页面正确
  AllianceCampaignBehavior.cs:17         = public class AllianceCampaignBehavior : CampaignBehaviorBase, …
```

### 两个各自独立的规格缺陷
**A · 标识符↔引用配对错**：标 `ident=AllianceCampaignBehavior, claimed=AcceptCallToWarAgreementDecision.cs:17`，
但 `AllianceCampaignBehavior` 属于**同一句里的另一条引用**（`:140`）。
⇒ 「取引用附近的 backticked 标识符」会配上来邻近但属于别的引用的标识符。**配对必须限定在该引用自身的括号/短语内。**

**B · 规格假定「被引行 = 该标识符的声明行」，但引用常指向【使用点】**
标 `ident=AllianceCampaignBehavior, claimed=AllianceCampaignBehavior.cs:140` —— `:140` 是类内的**使用点**（`new` 调用），
而检测器只找类名声明行（`:17`）⇒ **对每一条「使用点」引用都必然误报**。
⇒ 正确性判据不能是「声明行」，只能是「该行是否包含被点名的标识符」（声明/成员/调用/参数皆可）。

**⇒ `13,202` 不得作为缺陷数使用。** 且 **控制过 ≠ 整体精度可用**：worker-202 报两个控制都过，而全局随机抽 2 条即 2 条假阳性。
**⇒ 窗口调参不可用于「修掉」这两个缺陷 —— 它们是结构性的，调窗口只会掩盖。**

**正面结论（不依赖上面数字）**：Boss 的正控制经本线复核仍然成立
（`SettlementAccessModel.cs` 的 `CanMainHeroEnterSettlement` 声明在 `:81`；`:52/:54/:56` 分别是 `}`、`public enum SettlementAction`、`RecruitTroops,`）
⇒ **「行号在界内但指向别处」这个缺陷类是真的**，Layer 3 的方向对，问题在配对与判据定义。

---

## 19. prev/next 覆盖分析：**两次独立测量逐数一致**

```
                  worker-198     本线独立测量
JSON routes           38177          38177
Leaf on disk          38500          38500
Missing from JSON       323            323
```
**⇒ 两个独立测量得到同样三个数。** 本线另测：**缺的 323 页全部比 JSON 新**（`newer=323 / older=0`）⇒ 缺口 100% 由陈旧造成。

**Category 2（在 JSON 里但 prev=next=null）= 3 —— 本线核实后判定【不是缺陷】**：
```
/v1.3.15/en/xml-reference/bugs/ · /v1.3.15/zh/xml-reference/bugs/ · /v1.4.5/zh/xml-reference/bugs/
⇒ 都是 xml-reference 桶里的【单页桶】，无兄弟页 ⇒ 没有 prev/next 是【正确行为】
```
**⇒ 不得把这 3 条计入缺口分母。**

**路由键陷阱**：JSON 键带前后斜杠（`/v1.3.15/en/architecture/action-family/`）。不带前导斜杠构造路由 ⇒ 报 38,358 缺（真值 323）。

---

## 20. `verify-prevnext-perf.md` 交付已验证并入库

```
tools/_verify/verify-prevnext-perf.md  11,538 B · mtime 17:29 · sha256 前16 b473d35e37b59ff3 · commit a2fd18e329
perf-site/ 已清理（实测目录不存在）
```

**A/B 读数（本线复算内部一致性，全部自洽）**：
```
A: 156.2 / 176.5 / 160.2 / 156.1  → mean 162.3 · spread 20.4
B:  69.3 /  74.2 /  70.2 /  72.1  → mean  71.5 · spread  4.9
delta 90.8 s ✓ · 每页 65.4 ms ✓ · 全站 39,039 × 65.4 ms ≈ 42.6 min ✓
信噪比 4.4×（A 展布）· 18.5×（B 展布）· 每轮页数恒等 1,390 ✓
```
**⇒ 「分片是为速度还是只为防崩」的答案：速度也是。**

### ★ 调用数更正：**39,039**，不是 39,038
```
templates/index.html 第 1 行 = {% extends "section.html" %}
section.html 的 {% block content %}（第 7 行）内第 31 行即宏调用
⇒ 根 _index.md 【也调宏】⇒ 38,500 + 538 + 1 = 39,039
```
**⇒ 本线先前向 Boss 转报 39,038，是采信了 worker 早先的错判而未自核。worker 后来自行更正，本线在更正之前已转报。**
**⇒ 第 11 次同族错误：转发未核实数字。已记入本线账。**

### 标签澄清
缺失分布最后一格：worker 报 `versions=9`，本线早先报 `(other)=9`。**同一个 9**，实测为 `content/versions/task-*.md` 共 9 个 ⇒ `versions=9` 标签更准。

### Category 2 已由本线独立核实（worker 列为未核实项④）
```
3 条 = /v1.3.15/en/xml-reference/bugs/ · /v1.3.15/zh/xml-reference/bugs/ · /v1.4.5/zh/xml-reference/bugs/
⇒ xml-reference 桶里的【单页桶】，无兄弟页 ⇒ 无 prev/next 是正确行为，【不是缺陷】
```

### 丙 的三条设计输入现已全部有实测支撑
```
① 新鲜度：323 个缺 route 页【全部】比 JSON 新（newer=323 / older=0）⇒ 分片产物必须可独立重新生成
② 速度：  65.4 ms/页 × 39,039 ≈ 42.6 min ⇒ 分片（18.8MB → 1–2MB）预计降 10–20×
③ 不崩：  验收子集可从这 323 页挑（样本 content/v1.3.15/en/architecture/action-family.md）
```

---

## 21. W-D 的 A/B 是否测了一个「损坏的临时站」？—— 旁证支持它**是真的**，但无法直接复验

Boss #15521 警示：lead-13 的临时站在同位置损坏（`content/` 空、`page-navigation.json` 仅 13 B、6 次构建全 rc=2、耗时 175–569 ms）。
**本线实测：`tools/_verify/perf-site/` 已被 worker 清理（目录不存在）⇒ 无法直接跑 Boss 的 4 条检查。**

### 旁证三条，强烈支持该 A/B 为真
```
(a) 报告逐轮列出 RC 列，8 轮【全部 RC=0】
(b) ★ 页数与真实子集逐数吻合（本线独立计数）：
      content/v1.3.0/en/api/campaign → 1389 个 .md · 34 个 _index.md · 1355 leaf
      报告报                        → 1,355 pages + 34 sections = 1,390 HTML files   ⇒ 逐数一致
      空站会报 0 页，不可能报 1,355
(c) 量级差三个数量级：损坏站 175–569 ms vs 本次 A 轮 156,200–176,500 ms
      失败构建不可能跑 156 秒
```
**⇒ 定性：「有旁证支持、无法直接复验」，不是「已验证」。**

### ★ 两条流程规矩（本轮产出，已报 Boss 建议升格）
```
① 【复核前不许清理】：临时站（或至少 rc / 页数 / 每轮耗时）必须在读数被独立复核后才可清理。
   本次之所以仍可判断，纯因 worker 把 rc 与页数写进了报告。
② 【构建/性能读数必须同时报 rc 与页数】—— 这是 Boss 那条判据的可执行形式：
   「一次测量若 rc≠0 或页数=0，它不是慢也不是快，它是【没跑】」。
```
**⇒ 「失败长得像成功」的第 7 种形态是它的【反向】**：一次真测量，因证据被清理而**看起来像**可能是那个失败模式。两者都要防，防法不同。

### 槽位与 W-C 的澄清（第 N 次）
```
· worker-198（W-D）已 release（无待办）⇒ 槽位已让出
· W-C（worker-193）已不存在：两次未交付，早已释放；其【引用语义核】任务被 W-E 吸收
⇒ Boss 的优先序 ① 与 ② 现在是【同一个 worker 的工作】
```
**当前本线仅 1 个 worker：worker-202（W-E）。**

---

## 22. Layer 3 修正版（phaseH）实测：大幅改善，但 **4,708 仍不可当缺陷数**

```
flags       13,202 → 4,708   (降 64%)
uncheckable 12,650 →   158   (降 99%)
```
**缺陷 A（配对）已修**：新版每条带 `base`（引用自身文件名）与 `resolved` ⇒ 配对靠引用自身而非邻近。

### 反向控制 **通过**
```
ActionCampaignOptionData 的 6 条已验证正确引用（:5/:7/:9/:10/:15/:20）→ 被标记数 = 0
```

### ★ 正向控制**在页语料里无法复现**
```
grep -rlE 'SettlementAccessModel\.cs:(52|54|56)\b' content --include='*.md'  →  空
```
Boss 的正控制来自**派单文档**，不是页语料 ⇒ **「两个控制都过」的强度比看起来弱**（正向那个验证不了）。
⇒ 若要可复现的正控制，必须从页语料里找一个「行号在界内但指向别处」的真例；**本线未找到**。

### ★ 4,708 仍是假阳性（抽第一条即命中，且**页面是对的**）
```
flag: base=AcceptCallToWarAgreementDecision.cs · claimed=…:76 · idents=["IsAllowed", …]
页面第 25 行：`IsAllowed` (line 74) … and the caller is (`AcceptCallToWarAgreementDecision.cs:76`)
源码：:74 = public override bool IsAllowed()      ← 页面「line 74」✅
      :76 = return this.CallingKingdom.IsAllyWith(base.Kingdom) && …   ← 页面「the caller is」✅
```
**⇒ 检测器标记它的原因：`:76` 这一行【不含】`IsAllowed` 名字 —— 因为它是成员【函数体内的表达式】。**

### ★ 本线必须更正自己给出的建议
本线在 #15412 建议判据改为「该行是否包含被点名标识符」。**phaseH 似乎照此实现，从而产生了一类新假阳性**：引用合法地指向**成员体内的某一行** ⇒ 含名判据必然误报。
**⇒ 该建议过严。** 这是本日第二次「本线给出的修正本身带新缺陷」。

**⇒ 结论：Layer 3 目前没有任何已提出的判据能同时避免两类假阳性**
```
· 「距声明行的距离」      ⇒ 对每条「使用点/体内行」引用误报（phaseG：13,202）
· 「该行是否含被点名标识符」 ⇒ 对「成员体内行」引用误报（phaseH：4,708）
```
**⇒ 4,708 不得作为缺陷数使用。**

### 处置建议（已报 Boss 裁定）
```
(a) 承认这一类【目前无法机械判定】，在门禁文档里【显式写明能力边界】，Layer 3 标 UNMEASURED —— 倾向此项
(b) 若要继续：需先解析「第 N 行属于哪个成员」并要求该成员名出现在引用附近 —— 成本高一个量级，且未验证能否消掉假阳性
```
**本线纪律：一条写在纸上的能力边界，比一个假数有用。**

---

## 23. 控制集更正：**分类随版本树翻转** · Layer 2 已确认实例 = **0**

### 六棵树实测（全部为【词边界】`grep -rlE '\bID\b' <tree> --include='*.cs'` 的文件数）
```
IDENT            b-1.3.0  b-1.3.15  b-1.4.5  b-1.4.6  b-1.4.7  b-1.5.3
ISaveable              0         0        0        0        0        0    ← 稳定 0
DefineTypes            0         0        0        0        0        0    ← 稳定 0
SetViewModel           0         0        0        0        0        0    ← 稳定 0
LoadGame               2         0        2        2        2        2    ← 1.3.15 是 0
ReadObject             0         0        1        2        2        2    ← 1.3.0/1.3.15 是 0
WriteObject            0         0        0        2        2        2    ← 1.4.6+ 是 2
SaveGame               1         1        1        1        1        1
```

### 子串→词边界的膨胀倍数**也随树变化**（`Register`）
```
Register  子串:  549(1.3.0) 434(1.3.15) 762(1.4.5) 826(1.4.6) 826(1.4.7) 841(1.5.3)
Register  词边界:  7         7          98        109       109       109
⇒ 膨胀倍数:      78×       62×        7.8×      7.6×      7.6×      7.6×
```
**⇒ 「子串膨胀 62 倍」是 `bannerlord-1.3.15` 专有；1.4.6+ 只有 ~7.6×。** 引用该数字必须带树。
`WriteObjects` 无膨胀（sub=word：0/1/1/1/1/1），符合预期。

### ★ Layer 2 已确认实例 = **0**
```
· LoadGame / ReadObject / WriteObject 的「Layer 2」全部是【子串假命中】（词边界下见上表）
· 唯一候选 SaveGame：全仓仅 2 页提及（content/v1.3.0/{en,zh}/architecture/save-system.md），
  两页都写 `MBSaveLoad.SaveGame("save_name")` ⇒ 归属到 MBSaveLoad，【页面正确】
⇒ 【已知案例里没有一个真正的 Layer 2 实例。】
⇒ 因此 Layer 2 【无法标定】：无正控制 ⇒ 报 0 时分不清「无此类缺陷」还是「它坏了」。
```
**⇒ Boss 裁定（#15805）：Layer 2 代码可留，但报告必须标 `UNCHECKABLE — 无已知正控制实例`，不得计入缺陷数。**
**⇒ Boss 原则（已写进判据文档）**：
> **一个检测层的正控制如果本身是假命中，那这个层等于不存在。**

### ★ `save-object-graph` 两页：**当前版本完全正确**（Boss 第 5 次确认，本线复核一致）
```
zh 12,244 B · md5 5a849a4ae6c190cb   en 11,802 B · md5 9e44e82d11c6967a
LoadGame=0 · ReadObject=0(zh) · WriteObject=0 · SaveManagerBase=0 · SetViewModel=0
ISaveable 2 处【均否定句】（zh:47「没有 `ISaveable.Read` 这种回调」）
DefineTypes 1 处【否定句】（zh:27「`DefineTypes` 这个方法不存在」/ en:27 "does not exist"）
```
**⇒ 本线先前把它作为「编造 API」实例上报，是【引用 lead-22 原文而未在页文件上 grep】。已更正。**
**⇒ 报告口径：标为【假报 / 已修复的历史实例】，不得标为现行缺陷。**
**⇒ 本线自己在此事上犯同族错误共 2 次**（`LoadGame` 归因、控制集漏版本树），均记入本文件。

### 五道判据分工（Boss #15826 裁定）
```
① 断链                守【可达】                    —— 已有，绿
② 引用边界             守【行号不越界】               —— 已有，绿（in-bounds ≠ correct 已证）
③ 标识符存在性（词边界） 守【名字是否真实】             —— ★ 无人守 ⇒ 【有条件升格】：等 W-E 假阳性率
④ 孤儿/回程            守【能走回去】                 —— 已有弱口径，维持
⑤ 语义正确性           守【描述是否真实】             —— ★ 【明确标注机械不可覆盖，须靠人审】
```
**⇒ ⑤ 的处置是本条最重要的**：**不要假装它被覆盖了。** 任何「全绿」读数都不蕴含 ⑤。
**⇒ 今日全部误判都来自「把一道判据的绿当成覆盖了全部」。**

---

## 24. Layer 0（语言级一致性）：已派 W-E，但**本线实测警告 —— 其「假阳性近乎零」尚未证实**

### 本线早先做过一个**近似 Layer 0** 的检查（继承声明 vs 源码声明），结果 45/89 不匹配
```
PAGES_WITH_CLAIM=178 · CLAIMS=89 · MATCHED=44 · MISMATCHED=45 · UNRESOLVED=19
⇒ 51% 不匹配率过高 ⇒ 抽 3 条人工核源码，【3 条全部是本线的假阳性，页面都是对的】
```
**逐条证据：**
```
CASE 1  content/v1.3.0/zh/api/campaign/Town.md:16
  页：「`Town` 是所有封地的 [Settlement] 组件。它继承自 `Fief`，而 `Fief` 又…」
  源：bannerlord-1.3.0/.../Settlements/Town.cs:22 = public class Town : Fief        ⇒ 页面正确
  本线检查器报「claims SettlementComponent」—— 抓的是同段提到的【另一个类】

CASE 2  content/v1.3.15/zh/api/campaign-ext/PerkObject.md:10
  页：「**Base:** `PropertyObject`（再继承自 `MBObjectBase`）」
  源：bannerlord-1.3.15/.../PerkObject.cs:11 = public sealed class PerkObject : PropertyObject   ⇒ 页面正确
  本线检查器把【祖父类】当直接基类

CASE 3  content/v1.3.15/zh/api/campaign-ext/QuestManager.md:74
  页：「…类型等于 `type` 或继承自 `type` 且 `IsOngoing`…」
  ⇒ 泛型类型参数的散文，不是类继承声明；本线检查器把 `type` 当类名
```

### ★ 结论：假阳性的来源**不在语言规则，在「页面那句话说的是哪个类」**
Boss 的理由「语言规则不是启发式，是语法约束」对**语言规则**成立，对**页面自然语言的解析**不成立。
**⇒ Layer 0 的假阳性率必须实测，不得假定。** 三种须防护的机制：
```
① 配对错类（目标类必须取自做出该断言的那个从句，不能取自邻近句）
② 间接 vs 直接基类（「再继承自 X」不是直接基类断言）
③ 散文/泛型记号（type / T / TValue 不是类名）
```
**⇒ 本线判读：Layer 0 值得做（它守的缝隙是真的），但其价值完全取决于假阳性率。** 两种结果都会如实上报。

### 派给 W-E 的要求（含 Boss 规格 + 本线三条防护）
```
· 语言级矛盾清单（static class 不能有基类 / abstract 不能 new / interface 不能有实例字段 /
  enum 不能有方法体 / struct 不能继承类 / sealed 不能被子类化 / 构造函数≠泛型方法 / property≠method）
· 【本层单独触发数】+【与 Layer 1/2 的重叠数】
· 【本层在真实语料上的假阳性率，抽 ≥30 条】
· 【本线加】报告如何处理上述三种机制
· 【反向控制】SaveableCampaignTypeDefiner.cs:52（行号对、标识符对、描述错）
  ⇒ Layer 0 【应该抓不到】；抓到即假阳性
```

### 子串膨胀倍数也随树变化（补 §23）
```
Register 子串→词边界膨胀：1.3.0 = 78× · 1.3.15 = 62× · 1.4.5 = 7.8× · 1.4.6+ = 7.6×
⇒ 「62 倍」是 bannerlord-1.3.15 专有；引用该数字必须带版本树
```

---

## 25. ★ 新失败模式：**报告「从未发生过的工作的结果」**（比过期读数更严重）

Boss 判定另一条线报告了两页的状态（含两个 sha256 与 11,626 B 的尺寸），**这些在磁盘上都不存在**。
```
过期读数    = 读了真实但过时的状态        （至少存在过）
本次        = 报告了一个【从未存在的状态】 （从未存在过）
```

### 本线独立实测（三样同时取，与 Boss 逐字一致）
```
content/v1.3.15/zh/architecture/save-object-graph.md
  size=12244  mtime=2026-10-07 17:20:01  sha256_16=e527118948a0b89e  git status --porcelain=空
content/v1.3.15/en/architecture/save-object-graph.md
  size=11802  mtime=2026-10-07 17:20:01  sha256_16=691586f93d5e3f0c  git status --porcelain=空
```
⇒ 对方报的 `0a0a2bda…` / `0ffcf0ba…` / 11,626 B **均不存在**。

### ★ 判据（本线采纳，并对本线自己的读数生效）
```
任何「某页现在的状态是 X」的断言，必须附【三样同时取】：
  stat -c '%s %y' <path>  ·  sha256sum <path>  ·  git status --porcelain -- <path>
三样若与断言不自洽 ⇒ 该断言不得写进报告。
★ 报 sha 时必须与【磁盘上刚算出的 sha】逐字相同；报不出 ⇒ 说明没算过。
★ 对检测器：输入必须是磁盘上的文件，每条命中都要带【该文件的 sha256 + 取数时刻】，
  否则检测器会继承上游的虚构。
```

### 对本线的实际影响
```
① 那个「关键成员表整表虚构」的发现基于同一个从未存在的状态 ⇒ 【不记为现行缺陷】（本线已在 §23 标记）
② 本线的 3 个正控制改用【独立于那页】的源码事实（词边界全树计数）—— 不依赖任何页
③ Layer 0 的样本必须取自【磁盘上真实存在的页】，并报出取样 md5/时刻
```

---

## 26. 编造 API 测量线：**结案登记**（worker-202 已释放，本线自行发布读数）

`worker-202`（W-E）在 17:41 之后再无任何输出（23 分钟「running」而零产物），**本线已 release 它**。
**⇒ 该测量的结论不依赖它是否交付报告** —— 全部中间产物在盘上，本线已逐项读取并判定可用性。
**⇒ 以下为【本线发布的最终读数】，每条都标「可用 / 不可用」及原因。**

### 引用的产物身份（三样同时取）
```
tools/_verify/lead-20/phaseC-summary.json   1,199 B      mtime 16:56:14  sha256_16=136a77441f422f0c
tools/_verify/lead-20/phaseF-verify.json    4,779 B      mtime 17:01:50  sha256_16=ca9cf931aeaa66e9
tools/_verify/lead-20/phaseG-layer3.json    4,593,110 B  mtime 17:24:21  sha256_16=b92ef58f47bac20e
tools/_verify/lead-20/phaseH-layer3.json    1,874,546 B  mtime 17:41:47  sha256_16=512c4bfd99e21881
```

### 读数与可用性
```
Layer 0（语言级一致性）  = 未实现                      ⇒ UNMEASURED
Layer 1（存在性）        = 2,746 处 / 1,314 distinct   ⇒ 【不可用】假阳性率从未测出
Layer 2（归属）          = 2,447 处 / 1,369 distinct   ⇒ 【不可用】+ 已确认实例 = 0
                                                          ⇒ 标 UNCHECKABLE — 无已知正控制
Layer 3（OFFSET）phaseG  = 13,202 / uncheckable 12,650 ⇒ 【已废弃】本线抽 2 条即 2 条假阳性
Layer 3（OFFSET）phaseH  =  4,708 / uncheckable    158 ⇒ 【不可用】本线抽第 1 条即假阳性
UNCHECKABLE 页           = 29（versions/* 与根 _index.md，无版本树）⇒ 已正确标注，未静默回退
覆盖                     = 39,039 页 · 268,430 个标识符被抽取
```

### 为什么 Layer 1 标「不可用」—— 定性证据（非比率）
`phaseF-verify.json` 的 `sample_genuine` 里大量条目**不是编造**：
```
InvalidCastException · StackOverflowException      ← .NET BCL 类型（本就不在游戏源码里）
OnShipXxx · AddXxx · XxxModel · OnXxx · TOther      ← 占位/模式记号
MyDefectionModel · SettlementXxxModel               ← 占位符，意为「你自己的模型」
Extensions__TaleWorlds_Core · DependantModules      ← 配置键 / 模块字段
```
**⇒ 定性成立、定量未测**：**假阳性率必须实测（抽 ≥50 人工判读），而它从未完成。** 本线不代它编造一个比率。

### 已由本线独立确立的事实（不依赖任何页，可复现）
```
Layer 1 正控制（六棵树全 0，词边界）：ISaveable · DefineTypes · SetViewModel
Layer 2 已确认实例：0（唯一候选 SaveGame 由全仓仅 2 页提及，且两页都正确归属到 MBSaveLoad）
Layer 3 phaseH 反向控制：ActionCampaignOptionData 的 6 条正确引用 → 被标记数 = 0  ✅
Layer 3 phaseH 正控制：无法在页语料里复现（无页面引用 SettlementAccessModel.cs:52/54/56）
```

### 结论（供 Boss 裁定 ③ 是否升格）
```
【③ 标识符存在性】目前【不具备升格条件】：唯一实现出来的层（Layer 1）没有假阳性率，
⇒ 按 Boss #15826 的条件（「W-E 给出假阳性率后，若可接受则升格」）—— 条件未满足。
⇒ 本线建议：③ 维持【不升格】，并按 Boss 裁定把 ⑤（语义正确性）显式标为【机械不可覆盖】。
★ 本线不为这条线补做测量：Layer 1 的假阳性率需要人工判读 ≥50 条，
  而那是【新的执行工作】，应由 Boss 决定是否再开一个 worker。
```

---

## 27. ★ b05 冻结审计：**本线先前结论错误，已更正**（证据包 `b05-freeze-audit.md`）

```
证据包：tools/_verify/lead-20/b05-freeze-audit.md  6,321 B  sha256_16=be4f33bef5252bce  commit ef31412c9b
```

### 更正：b05 冻结【成立】，判决【可复现】
```
da1dfa7461  127ee75ae9c20d93（b05 冻结钉的那把）        → pass=5/5
984a6cc155  ec583b0bb84b22ea（标 effective from b06）   → pass=5/5
1b3d36fe0d  b8c7c9e1c6092cbb（当前盘上）                → pass=5/5
⇒ 本线先前报「冻结读数不可复现、冻结不成立」⇒ 【作废】
```

### 真因：一个**从未进入 git** 的尺版本出了判决
```
09:04–09:05Z 盘上尺 sha256_16 = 3dc897bc91f672dd
  ⇒ 逐版本比对全部 16 个判分器提交，【无此 blob】⇒ 工作区状态，从未提交
  ⇒ 它对 b05 判 pass=4/5：FAIL ActionCampaignOptionData.md ✗ J4 unattributable-bare=6
差异项 = J4（裸引用无法归属的处置）；不是 J3 归属 / J2 / J10 / J12
文件集已核：5 页 sha256 与冻结宣告逐一致 ⇒ 不是混合快照
```
**⇒ 归类 = (d)：冻结宣告之后，盘上的尺曾被改成一个无版本记录的状态，且用它对已冻结批次出了判决。**

### ★ 本线同日犯了「A 就是 B」
本线早先写「盘上尺 `3dc897bc`（commit `984a6cc155`）」——**推断而非验证**；`984a6cc155` 的 blob 实为 `ec583b0bb84b22ea`。
**⇒ 这正是本线当天提给 Boss 的通则，本线自己犯了它。**

### 可复用判据（Boss 批准 ①②，本线补 ③）
```
① 改尺后必须复跑最近一批已冻结的批次并与冻结宣告对账
② 「对 b0N 及以后生效」必须与【实际行为】一致
③ ★ 判据文件的未提交工作区状态，不得用于产出对外判决
⇒ 通则：「读数必须附尺 sha」只解决一半；还须保证【该 sha 能取回】且【出判决的尺是被提交过的】
```

### 判分器 churn（本线核出，16 版 / ~3.5 小时，平均 13 分钟一版）
```
14:35 0fb24a1c · 14:53 19987492 · 15:15 445a8a26 · 15:31 e2ea8f7f · 15:42 05c2a522 · 15:46 d844164e
16:21 de072002 · 16:30 127ee75a · 17:03 ec583b0b · 17:07 ff5e35e7 · 17:14 6ac3a086 · 17:19 7436474b
17:27 066a4779 · 17:38 bc05c1c7 · 18:03 99993a09 · 18:06 b8c7c9e1
⇒ 建议：把「冻结宣告」与「尺的持续演进」解耦 —— 冻结只钉【当时那把 sha】+【那批页 sha】，
  并明确「本批判决以该 sha 为准，不随后续改尺变化」。
```

---

## 28. 7 倍差对账：65.4 ms/页 vs 502 ms/页 —— **决定性算术证明两者不是同一个量**

```
本线 worker 定稿（verify-prevnext-perf.md, commit a2fd18e329）：
  A avg=162.3 s · B avg=71.5 s · delta=+90.8 s · 4+4 轮
  ⇒ 90.8 / 1,389 页 = 【65.4 ms/页】
  （Boss 引用的 73.4 ms/页 是【中间单轮值】，已废弃）
lead-13：有界站 300 页 · 「load-only 变体」· 3 次重复
  小值 ≈1.0–2.1 s vs 大值 ≈131–186 s ⇒ delta ≈150.8 s / 300 页 = 【约 502 ms/页】
```

### ★ 决定性算术（只用双方已报的数，不需重跑）
```
本线 worker 的【整个 zola build】= 162.3 s / 1,390 页 = 116.8 ms/页
⇒ 若「每页 18.8MB load」真值 502 ms，则【仅此一项】需 1,390 × 0.502 = 698 s，
  而整个构建只用 162.3 s ⇒ 【数学上不可能】
⇒ 两个数描述的不是同一个量。
```

### 三个口径差异
```
① 【计时范围】★ 最可能真因
   本线：`rm -rf public && zola build` 整构建墙钟
   它：自称「load-only 变体」（避开缺失 key 错误）⇒ 非完整构建
   ⇒ 若该变体绕开 Zola 的 load_data 缓存，它量的是【每页重新解析 18.8MB】；
     本线 A/B 里是【缓存命中 + deep clone】。clone=内存拷贝（数十 ms）· 解析=CPU 密集（数百 ms）
     ⇒ 【7 倍差正好落在这个量级】
② 【站点构成】本线 1,389 md（1,355 leaf + 34 section）；它 300 页（构成未报）
③ 【噪声】本线 A 展布 20.4 s（12.6%）；它小值侧展布 2 倍 ⇒ 差值 = 大−小 把该噪声全吃进分子
```
**⇒ 两个数都不是「错的」，但都必须标注【它描述的是哪一段】。**

### 能一举 settle 的廉价实验（不重跑全站）
```
在同一次构建内加两行日志，测 load_data 的【调用次数】与【总耗时】：
  ≈ N × 500 ms ⇒ 每页重新解析（无缓存）⇒ 它对数
  ≈ N ×  65 ms ⇒ 缓存命中 + deep clone      ⇒ 本线对数
⇒ 直接回答「缓存到底有没有生效」，比再跑一轮 A/B 便宜得多。
```

### 第 10 种「数不可复核」成因（Boss 收档，本线补半句）
```
⑩ 同一现象、两个数，未先对口径
⇒ 判据：两个数不等时，第一步问「它们量的是同一段/同一分母吗」，而不是问「谁错了」。
⇒ 本线补：【若无法证明它们量同一段，就把两个数并列报出、各自标注口径，而不是挑一个。】
   本轮三例均支持此条：783/870（判据不同）· 38177/38494/38500（分母不同）· 65.4/502（计时范围不同）
```

---

## 29. Boss 升级的硬规则：**控制样本必须附「我实测过它」的证据**

```
★ 凡给出控制样本，必须附：文件 + 行号 + 那一行的原文 + 命令
  未附证据的控制样本，一律不得作为控制使用 —— 因为控制样本本身会成为新的误差源。
⇒ 理由：控制的全部价值在于「它的预期是确定的」。未实测的控制把「控制失败」与
   「检测器坏了」两种情形混在一起，比没有控制更糟。
```
**依据（本线实测）**：Boss 给的反向控制「`SaveManager.cs:69` 含 `Save`，必须不被标记」——
```
SaveManager.cs:69 = }        Save 的声明在 :77        ⇒ 偏移 8 ⇒ 【它本身就是 OFFSET 案例】
⇒ 若照此做反向控制，正确的检测器会标出来 ⇒ 被读成「控制失败」⇒ 放宽窗口 ⇒ 丢掉真阳性
```

**本线已把该规则转达给当前 worker（W-F），并要求它为自己的 Layer 1 控制（`ISaveable`/`DefineTypes`/`SetViewModel`）
附上【命令 + 树 + 原始输出（空输出也要显式展示）】。**

---

## 30. W-F（worker-213）进度：证据结构合规

```
tools/_verify/lead-20/wf-sample-evidence.json   70,924 B  mtime 18:10  n=60 条
字段：ident · page · ver · allOccurrences · pageExists · pageStat · pageSha · pageGit ·
      grepOutput · treePath · treeExists · treeHitCount · treeSample · crossVer
样本：{ident:GetClosestAgent, page:v1.4.5/zh/api/mission-ext/AgentController.md, ver:bannerlord-1.4.5,
      pageStat:"9078 2026-10-03T13:41:29.068Z", pageSha:860c55d8334ee8be…}
```
**⇒ 60 ≥ 50 条，且每条带【页 sha + stat + grep 原始输出 + 版本树】—— 符合本线要求的证据纪律。**
**⇒ 尚未落盘报告（分类判读是人工步骤）。**

---

## 31. ★★ 重大更正：**本线的结构性结论也建立在一个从未提交的实现上**

### 事实
```
templates/macros/page-navigation.html — 全部已提交版本（git log 仅 3 个 commit）：
  cc39aaf811 10-01 21:34:25 · cb7b700718 10-01 15:19:41 · b3ed3b1d87 08-03 18:48:15
  ⇒ 三者与 HEAD 一致：load_data(path="data/navigation.json")   ← 152 KB
templates/ working tree = clean（git status --porcelain -- templates/ 为空）
⇒ R2 那个读 18.8MB page-navigation.json 的版本【从未进入任何 commit】，仅存在于工作区。
```

### 失效 / 仍成立（逐条）
```
【对 HEAD 失效】
  · 宏每页无条件加载 18.8MB
  · 39,039 × 18.8MB 深拷贝
  · A 162.3s / B 71.5s / delta 90.8s / 65.4 ms/页
  · 全站外推 ≈42.6 分钟
【仍成立】
  · 调用点拓扑：宏仍被 page.html:31 与 section.html:31 调用 ⇒ 每 leaf/section 页仍进宏；
    变的只是宏【内部】成本
  · 覆盖缺口 323 条 —— 是 data/page-navigation.json【数据文件】相对页语料的属性，
    与模板是否读它无关；全部 323 条比 JSON 新（陈旧非 bug）；另 3 条 xml-reference/bugs 为单页桶（正确行为）
```
**⇒ 丙 的【结论】不变，但【依据】须更换**：真正依据是「R2 已撤回 + 需按分片重做」，
不是「每页 18.8MB 的实测代价」。**本线先前把后者当作 丙 的支撑，那是错的。**

### ★ 本线同日第二次犯同一族错
```
09:59Z 本线诊断：一个【从未进入 git】的判分器版本（3dc897bc）判了已冻结批次
10:15Z 本线自己犯：从【工作区】读宏 ⇒ 推出结构性结论并上报，未 git status、未读 HEAD 版本
⇒ 同一天、同一条线、同一个坑的第二个实例。
```

### 落盘更正
```
tools/_verify/verify-prevnext-perf.md.CORRECTION   commit 770dcce620
⇒ 置于原报告旁，标题写明「读它之前先读这个」。
```

### 判据（Boss 通式的可执行形式）
```
★ 基于某个实现下结论前，先确认它【当前在盘上且已提交】：
  ① git status --porcelain -- <载体>   （非空 ⇒ 读数基于未提交状态，不得对外）
  ② git show HEAD:<载体>               （读已提交版本本身）
  ③ 仅当 ① 为空且 ② 与工作区一致时，才可把结论绑定到「当前实现」
⇒ 载体被撤回后，针对它的【一切】测量同时失效 —— 包括从它推出的【结构性】结论，
   而不只是性能读数。
```

### 本线读数格式要求（即刻生效，采纳 Boss 规则 ②）
```
【取数时刻】【命令】【原始输出】【分母】+ ★【本次读数自带的尺/工具 sha】
⇒ 若用外部冻结值，必须【同时】写自带 sha 与冻结 sha，并说明是否一致
⇒ 冻结 sha 管【复现】· 自带 sha 管【归属】· 缺一不可
⇒ 本线 10:04:38Z 那条门禁读数未带自带 sha，按新规则属不合格，下次播报补上。
```

---

## 32. ★ 回答 Boss：「布局层回程链接是否足以对治『回不来』？」—— **够，有决定性测量支持**

### 决定性测量：树的【下行已 100% 完整】，缺的只有【上行】
```
SECTIONS_WITH_CHILDREN        = 129
SECTIONS_LINKING_ALL_CHILDREN = 127   (98.4%)
LEAF_PAGES                    = 38,470
LINKED_FROM_OWN_BUCKET_INDEX  = 38,467 (100.0%)
```
**⇒ 每一页都能从自己的桶 `_index.md` 被【到达】⇒ 下行这一半已在位。**
**⇒ 而上行（能走回去）正是本线测出的 783 页缺口。**
```
树状结构 = 上行 + 下行
  下行 100% 已有 · 上行缺 783 页
⇒ 布局层 breadcrumb/父级链接【无条件】补上行：一次改动覆盖全部 39k 页（含 783），不碰正文。
```

### 旁证：逐页「导航」节不是可靠机制
```
783 页中有 145 页【已有 `## 导航` 节，但仍无回程链接】
⇒ 「给每页加导航节」不能保证回程（145/783 是反例）
⇒ 布局层【无条件渲染】⇒ 不依赖任何页的散文写法 ⇒ 才是对的机制
```
**⇒ 这条数据同时支持 Boss 裁定②（修法在模板层，不派逐页修复）。**

### breadcrumb 【不覆盖】什么（明说，免得决定缺信息）
```
breadcrumb/父级链接 ⇒ 提供【上行】⇒ 对治「回不来」与「不是树状结构」✅
它【不提供】同级顺序导航（prev/next）—— 那是【线性】affordance，不是【树】affordance
⇒ 用户抱怨的两句都是【层级/可达】问题，不是【顺序】问题
⇒ prev/next 是用户外壳【有意移除】的功能（`4b10ed6673` 注释：quadratic scanning pushes build past 6h）
```
**⇒ 本线判断：【够】。按裁定②收口；prev/next 作为独立可选增强另议。**

### 测量口径（随数字引用）
```
「下行完整」= 该目录 _index.md 含一条 target 里【包含】该叶子页 basename 的链接
⇒ 【宽松匹配】（basename 子串）⇒ 38,467 是【上限】不是精确值
⇒ 若要精确值需换「解析式」判据（每条链接必须真的解析到该页）
分母：content/**/*.md 排除 _index.md 本身 · 2 个未全链子目录待定位
```

---

## 33. ★ 通用判据：**匹配模式取决于「判据问什么」与「两向错误的代价是否对称」**

| 判据 | 问什么 | 需要的匹配 | 错误方向 | 危害 |
|---|---|---|---|---|
| **存在性/归属**（Layer 1/2） | 标识符**存在吗**、**在被引文件里吗** | **词边界 `\b`** | 子串 ⇒ **假通过** | **危险**：编造静默上线 |
| **命名风格/模式** | 页里写法与源码写法**是否对得上** | **通配/glob 容错** | 等值 ⇒ **假报警** | 噪声，可容忍 |

**依据（本线实测）**：`WriteObject`（单数）子串命中 `WriteObjects`（复数）⇒ 子串会静默放过编造；
而页写 `AutoGenerated*` 系列、源码是 `AutoGeneratedGetMemberValueTriggerTime` ⇒ 等值会误报一片。

**⇒ 设计第一步不是选算法，而是问：这类错误的假阳性与假阴性，哪个更贵？**

**★ 本线自我更正**：本线先前给 W-F 的「一律词边界」是**过度概括**（把「存在性」的规则错当通用规则）。已更正，并已把该表转达 W-F，要求它**在报告里声明用了哪套模式及理由**。

---

## 34. 【可直接粘贴】禁止的报数方式 —— 10 种「数不可复核」成因

> 用途：写进派单模板。每一条都是本会话实测过的真实事故，不是预防性告诫。
> 每条格式：**成因 → 实例 → 自查动作**。

```
① 作用域≠全树
   实例：拿局部读数当全站读数；「这个桶没问题」当成「全站没问题」
   自查：报数时写明【范围】（哪棵树 / 哪个桶 / 哪些语言），并说明它与结论范围是否一致

② files vs occurrences
   实例：`grep -rl` 得文件数、`grep -c` 得行数，两者混用后互相印证
   自查：报数时写明单位是【文件】还是【出现次数】

③ 单位未报（body B vs file B）
   实例：报 9 个字节数全比磁盘小 198–284 B —— 实为【文件字节 − frontmatter 字节】，标签写成 B
   自查：字节数必须写清 span（`file B` / `body B`）；sha 相同而字节不同 ⇒ 先怀疑单位，不要先怀疑人

④ 坏 grep（判据本身恒返 0）
   实例：`bash $'\uFFFD'` 展开为字面量 5 字符串 ⇒ 恒返 0；`grep "[本区域目录](../)"` 的 `[...]` 是字符类
   自查：任何「0」必须附【正控制】（同跑批出现过非零事件）或证明判据会触发

⑤ 没写版本树
   实例：`MissionState.cs` 六棵树 421/408/356/410/410/412 ⇒「N ≤ 行数」不带树则不可判定
         `LoadGame` 在 1.3.15 词边界 0 文件、在 1.4.5 是 2 文件 ⇒ 分类随树翻转
   自查：任何源码侧读数（行数 / 存在性 / 命中数 / 膨胀倍数 / 分类）必须附【哪棵树】

⑥ 拼两次运行（一个数 = 一次运行）
   实例：把第 1 次运行的 `BROKEN_LINKS=7` 与第 2 次的 `FILES_WITH_BROKEN=2` 拼成「7/2」
   自查：一个数只出自一次运行；同一运行内取齐所有相关数并核对自洽（明细 2 文件各 7 条 ⇒ 总数应为 14）

⑦ 混合快照
   实例：全站门禁跑 13 秒，修复落在中间 ⇒ 得到半旧半新的 `14/2`
   自查：测正在被写的树时，读数必须配 mtime 快照，并声明它描述哪个瞬间

⑧ 锚定假设与语料形态不符
   实例：主语文件正则带 `$`，而语料写作 `` `…cs`（935 行）``（行尾还有「（N 行）」）⇒ 33 条误报
   自查：用 `^`/`$` 前先抽样看真实行尾形态

⑨ 同一现象两个数，未先对口径
   实例：783/870（判据不同）· 38177/38494/38500（分母不同）· 65.4/502 ms（计时范围不同）
   自查：两个数不等时，第一步问「它们量的是同一段 / 同一分母吗」，而不是问「谁错了」；
        若无法证明同一段 ⇒【并列报出各自标注口径】，不要挑一个

⑩ 载体已撤回 / 从未提交（★ 本会话最隐蔽的一种）
   实例：从【工作区】读宏推出结构性结论，而该实现从未进入任何 commit（R2）；
        一个从未进 git 的判分器版本（3dc897bc）判了已冻结批次
   自查：基于某实现下结论前先确认它【当前在盘上且已提交】：
        `git status --porcelain -- <载体>`（非空 ⇒ 不得对外）
        `git show HEAD:<载体>`（读已提交版本本身）
        ⇒ 载体被撤回后，针对它的【一切】测量同时失效 —— 包括【从它推出的结构性结论】
```

**★ 与之配套的两条正面要求**
```
· 读数必须自带【产生它的工具/尺的 sha】（自带的 sha 管归属；外部冻结 sha 管复现；缺一不可）
· 每个控制样本必须附【我实测过它】的证据：文件 + 行号 + 那一行的原文 + 命令
  （未实测的控制样本会成为新的误差源：Boss 给的反向控制 `SaveManager.cs:69` 本身就是偏移 8 的缺陷案例）
```

---

## 35. ⛔ 门禁转红（10:24:13Z）：14 条断链 / 1 文件 · **新缺陷类：源码命名空间路径当页面链接**

```
UTC 2026-10-07T10:24:13Z   node tools/audit-links.mjs   sha256_16=efa042c2c32fed59（自带）
FILES=39039 · TOTAL_LINKS=149778 · BROKEN_LINKS=14 · FILES_WITH_BROKEN=1 · RESOLVE_NEITHER=16 · RESOLVE_STATIC=2
```

### 病灶（四样证据）
```
content/v1.3.0/zh/api/campaign/DefaultTournamentModel.md
① stat       size=19266  mtime=2026-10-07 18:19:25 +0800
② sha256     6e7819e883e4834df6a56b3c5ad4785c8db0e7e28bea36b144174ee1492998c5
③ git log -1 b671496b45
④ git diff --stat  1 file changed, 263 insertions(+), 94 deletions(-)   ← 有未提交改动
```

### 缺陷类：把 **C# 命名空间目录路径** 当成 wiki 页面路由
```
页里写（14 条）：../TournamentGames/X · ../ComponentInterfaces/TournamentModel · ../SandBox/Missions/…/ArenaPracticeFightMissionController
              · ../Settlements/Town · ../SkillObject · ../Equipment · ../ItemObject
实际目标页（逐条实测，全部存在，都在【扁平桶路径】下）：
  TournamentCampaignBehavior/TournamentManager/FightTournamentGame/TournamentGame/TournamentModel
    → content/v1.3.0/zh/api/campaign/*.md
  ArenaPracticeFightMissionController → content/v1.3.0/zh/api/campaign-ext/*.md
⇒ 修法：换成扁平桶路径（同桶 ./X，跨桶 ../<桶>/X）；【不要】创建命名空间目录。
```
**⇒ 与今天另两类同族**：`.md` 后缀（8 条）· 桶名写错（6 条）。
**共同形态：路径看着合理、目标真实存在、只有【路径口径】错 ⇒ 形态检查抓不到，只有解析式门禁能抓。**

### 本线读数格式已补成【四样】（Boss 第 11 种成因）
```
stat -c '%s %y' <path>          # 大小与 mtime
sha256sum <path>                # 内容指纹
git log --oneline -1 -- <path>  # 最后一次提交
git diff --stat -- <path>       # ★ 未提交改动是什么（空 = 干净）
⇒ 前三条回答「变了没有 / 属于哪个提交」，第四条回答「当前未提交的是什么」。
⇒ 第 11 种成因与前十种性质不同：前十种是【数本身不可复核】；第 11 种是【状态归属不可判定】。
```

---

## 36. Boss 裁定：Layer 3 规格错误，**窄而准优于宽而吵**（本线确认）

```
缺陷 A（配对错）：「取引用附近的 backticked 标识符」⇒ 会把邻近但属于别的引用的标识符配上来
缺陷 B（判据错）：「该标识符的声明行」⇒ 但引用经常指向【使用点】
⇒ 两者都必然产生假阳性，与页面质量无关。
裁定：用 (a)+(b) 组合 —— ① 配对限定在该引用【自身的括号/短语】内
                        ② 判据 = 「被引那一行是否包含被点名的标识符」（声明点/使用点都算）
⇒ 含义收成一句可判定的话：「你引的这一行，压根没提到你说它关于的那个东西」
```

### ★ 但真正优先的是【窄形态 J13】
```
J13（只报「被引行是空行/纯注释/纯标点」）在 lead-18 已冻结的 30 页里抓到【12 条真缺陷】，且几乎无假阳性
Layer 3 宽形态：13,202 条标记，随手抽 2 条 = 2 条假阳性 ⇒ 精度不足以支持任何结论
⇒ 判据：当一个检测目标可以用「窄且高精度」的方式表达时，不要用「宽且需要人工筛」的方式。
  因为后者的成本不是「多花时间」，而是【它产出的数字不可用】。
```
**⇒ 处置**：① Layer 3 按 (a)+(b) 重实现并报精度率；精度率出来前 13,202 不得出现在任何结论里
（本线已如此）② 若精度率仍不可接受 ⇒ 放弃 Layer 3，把 J13 作为该目标的正式判据
③ 报告须写明：**「通过控制」只证明检测器在控制点上行为正确，不证明它在全局的精度。**

### ★ 本线最该被记住的一条（Boss 将写进判据文档）
> **没有精度率的裸计数不是结果。** 一个检测器的「命中数」在它自己的假阳性率出来之前，
> 只说明它跑了，不说明它发现了什么。

**⇒ 本线据此刻意拒绝把 `layer1_flagged=2746`、`layer3=13,202/4,708` 当作缺陷数上报 —— 这不是谨慎，是纪律。**

---

## 37. ✅ 门禁回绿（10:27:00Z）· 病灶已修且**修法经核实正确**

```
UTC 2026-10-07T10:27:00Z   node tools/audit-links.mjs   sha256_16=efa042c2c32fed59（自带）
FILES=39039 · TOTAL_LINKS=149778 · BROKEN_LINKS=0 · FILES_WITH_BROKEN=0 · RESOLVE_NEITHER=2 · RESOLVE_STATIC=2
增量：CHANGED_FILES=4 · CHANGED_LINKS=43 · BROKEN_LINKS=0（exit 0）
（RESOLVE_NEITHER 16 → 2，回到回归前水平）
```

### 病灶四样对照
```
content/v1.3.0/zh/api/campaign/DefaultTournamentModel.md
  size    19266 → 19122
  sha256  6e7819e883e4834d → 847ffebd843c49dd
  mtime   18:19:25 → 18:26:19     （10:24:13Z 报红 ⇒ 约 2 分钟内修完）
  git diff --stat  1 file changed, 263 insertions(+), 94 deletions(-)
```

### ★ 本线核了【修法正确】而非只是「门禁不报错」
```
314: `[TournamentCampaignBehavior](../TournamentCampaignBehavior)`                                 ← 同桶 ✓
315: `[TournamentManager](../TournamentManager)`                                                   ← 同桶 ✓
317: `[ArenaPracticeFightMissionController](../../campaign-ext/ArenaPracticeFightMissionController)` ← 跨桶，深度对 ✓
⇒ 逐条实测目标页存在 ⇒ 【是改对了路径口径，不是把链接删掉换绿】。
```
**⇒ 本线纪律：报「已修复」时必须核【修法本身】，否则「删掉链接换绿」与「修对」不可区分。**

---

## 38. ★ 路径口径三类坑（本会话实测三例，建议进判据文档）

```
① 命名空间路径当页面路由（14 条，本日）
   例：../TournamentGames/TournamentCampaignBehavior · ../SandBox/Missions/…/ArenaPracticeFightMissionController
② `.md` 后缀（8 条，本日）
   例：[X](../Foo.md) —— 目标页存在、../ 深度也对，唯一错是后缀
③ 桶名写错（6 条，本日）
   例：../../api/campaign/SaveManager —— 真身在 api/save-system/（5 条）与 api/campaign-ext/（1 条）
⇒ 三者共同点：**路径看着合理 · 目标真实存在 · 只有【路径口径】错**
⇒ 【形态检查抓不到，只有解析式门禁能抓。】
```
**⇒ 建议判据：凡「目标存在、形态合理、仍不可达」的断链，优先怀疑【路径口径】而非【目标缺失】。**

---

## 39. 42.6 min 读数：**保留，并加注**（Boss #16429 ③）

```
42.6 min 保留在台账，加注：
  「无法直接复验（临时站已清理；有 rc / 页数 / 量级 三条旁证）」
⇒ 理由（Boss）：它作为「分片也为速度」的输入是够用的；拿掉反而丢失一条有用的估计。
⇒ 定性措辞：**「有旁证支持、无法直接复验」**，不是「已验证」。
```
**三条旁证（本线独立核过）**：
```
(a) 报告逐轮列出 RC 列，8 轮全部 RC=0（自报）
(b) ★ 页数与真实子集【逐数一致】：content/v1.3.0/en/api/campaign = 1389 .md / 34 _index.md / 1355 leaf
    报告报 1,355 pages + 34 sections = 1,390 HTML ⇒ 空站会报 0 页，不可能报 1,355（本线独立计数）
(c) 量级差三个数量级：损坏站 175–569 ms vs A 轮 156,200–176,500 ms
```
**★ 注意与 §31 的叠加**：本条读数**另有**两条独立的失效理由（A 侧是未提交的 R2 实现；
被测模板带 sentinel 修复、在仓库里不存在任何对应版本）⇒ 因此它的**唯一有效用途**是
「为将来实现 prev/next 时的数据形态选择提供依据」，**不能**用于支持「当前状态需要修」。

---

## 40. ★ 两条方向相反的失败模式（本会话首次命名反向形态）

```
【失败长得像成功】  rc≠0 或页数=0，但看起来像跑过了      ⇒ 防法：【必报 rc 与页数】
【真测量看起来像不可信】一次真测量，因证据被清理而无法复验 ⇒ 防法：【复核前不许清理】
⇒ 两者都要防，但防法不同。
```
**可执行形式（Boss 批准并入派单模板）**：
```
① 清理临时站前，先把【rc · 页数 · 每轮耗时 · 被测对象的 sha/清单】写进报告或另存证据文件
   ⇒ 先落证据，后清理
② 任何构建/性能读数必须同时报 rc 与页数
   ⇒ 依据：rc≠0 或页数=0 时，它不是「慢」也不是「快」，它是【没跑】
```

---

## 41. ★ 「独立证据源」的定义（Boss 提出，本线确认并操作化）

> **不是「它改口了」，而是「你去看了一个它没给你的东西」。**

**本会话按此定义成立的复核实例**：
```
· 读 templates/index.html 去核「根页是否调宏」            ⇒ 独立（它没给 index.html）
· 用 git 逐版本比对 blob 把 3dc897bc 定性为「从未进 git」 ⇒ 独立（git 不是它的输出）
· 读源码行核 :52/:54/:56 实际内容                         ⇒ 独立（源码不是它的输出）
· 独立计数 content/v1.3.0/en/api/campaign 的 1389/34/1355  ⇒ 独立
```
**不成立的**：引用对方自报的 sha / 页数 / 判定。
**⇒ 操作化判据**：**复核一个断言时，必须至少引用一个【不是该断言来源方产出】的证据。**
**⇒ 配套**：*列出未核实项是底线；其中可核的要核掉 —— 否则边界永远不收缩。*

---

## 42. ★★ 编造 API 测量线：**最终结论**（worker-213 已释放；本线自行登记）

### 裁定（Boss #16470）：Layer 3 = UNMEASURED，能力边界写进文档
```
门禁文档须显式写明：
「『行号在界内但指向别处』这一类【目前无法机械判定】——
  两种候选判据各自产生一类结构性假阳性：
    · 距声明行距离        ⇒ 对『使用点/成员体内行』引用误报（实测 13,202）
    · 该行是否含被点名标识符 ⇒ 对『成员体内行』引用误报（实测 4,708）
  ⇒ Layer 3 = UNMEASURED。已覆盖的只有 J13 的窄形态（被引行是空行/纯注释/纯标点）。」
```

### ① 两次迭代的量化轨迹（过程数据，保留）
```
phaseG → phaseH:  flags 13,202 → 4,708 (−64%)   ·  uncheckable 12,650 → 158 (−99%)
配对方式改为使用引用自身的 base/resolved（不再靠「邻近标识符」）
⇒ 真改善，但结论仍是 UNMEASURED（见 ②）
```

### ② 两类判据各自的结构性假阳性机制（各配一个已验证样本）
```
机制甲（距声明行距离）：
  样本 content/v1.3.0/en/api/campaign/AcceptCallToWarAgreementDecision.md
    页第 25 行：`IsAllowed` (line 74) … and the caller is (`AcceptCallToWarAgreementDecision.cs:76`)
    源码：:74 = public override bool IsAllowed()      ← 页面「line 74」✅
          :76 = return this.CallingKingdom.IsAllyWith(base.Kingdom) …   ← 页面「the caller is」✅
    ⇒ 页面正确；检测器因 :76 ≠ 74 而报 ⇒ 对每条「使用点/体内行」引用必然误报
机制乙（含名判据）：
  同上样本，改用「该行是否含被点名标识符」后仍然误报 —— 因为 :76 是成员【函数体内的表达式】，不含成员名
⇒ 两类机制互斥且都必然产生假阳性 ⇒ 该缺陷类【无法用这两个候选判据机械判定】
```

### ③ 能力边界声明
```
Layer 0（语言级一致性）  = 未实现                      ⇒ UNMEASURED
Layer 1（存在性）        = 2,746 处 / 1,314 distinct   ⇒ ★ UNMEASURED（见 ④：证据文件无效）
Layer 2（归属）          = 2,447 处 / 1,369 distinct   ⇒ UNCHECKABLE — 无已知正控制实例（已确认实例 = 0）
Layer 3（OFFSET）        = phaseG 13,202 / phaseH 4,708 ⇒ UNMEASURED（两类判据均产生结构性假阳性）
UNCHECKABLE 页           = 29（versions/* 与根 _index.md，无版本树）⇒ 已正确标注，未静默回退
⇒ 【本线不为这条线补做测量】：Layer 1 的假阳性率需人工判读 ≥50 条，属新的执行工作，应由 Boss 决定
```

### ④ ★ 证据文件无效 —— 且本线先前误判了它
```
tools/_verify/lead-20/wf-sample-evidence.json   60 条 · 字段齐全（ident/page/pageSha/pageStat/grepOutput/…）
★ 但【每一条 grepOutput 都是 "(NO HIT ON PAGE)"】，treeHitCount 全为 null，
  且 treeSample 写着 "(tree grep error: Command failed: grep -rPw …)"

本线逐条核（独立证据源 = 直接 grep 页文件）：
  GetClosestAgent  → content/v1.4.5/zh/api/mission-ext/AgentController.md   grep -c = 1  （第 147 行确有）
  CampaignBehavior → content/v1.4.5/zh/api/campaign/CampaignBehaviorBase.md grep -c = 23
⇒ 【页里明明有，证据文件却说没有】⇒ 该文件【零条有效测量数据】。
根因：worker 用了 `grep -rPw`，而 `-P` 在本环境 locale 下失败（它自己也说了，但没重跑完）。
```
**★ 本线自己的错**：本线早先向 Boss 报「它的证据结构合规 / 字段齐全」——
**那是只看【字段名】、没看【字段值】。** 这与本会话全部误判同族：**验了形状，没验内容。**
**⇒ 判据（本线加）**：**验收一份证据文件时，必须抽查【至少一条的值】是否与独立证据源一致，
不得只看字段名齐全。** 字段名齐全会让空文件看起来像好文件。

---

## 43. 本线读数格式要求（累计，即刻生效）

```
① 四样文件状态：stat -c '%s %y' · sha256sum · git log --oneline -1 -- · git diff --stat --
② 读数自带【产生它的工具/尺的 sha】（自带 sha 管归属；外部冻结 sha 管复现；缺一不可）
③ 控制样本必须来自【被测语料】，不得来自派单文档
   ⇒ 依据：SettlementAccessModel.cs:52/54/56 在 content/ 全树零命中 ⇒ 它验证不了「检测器在页语料上是否正确」
   ⇒ 判据：一个控制样本若在被测语料里不存在，它就不是控制，只是例子
④ 提出修正时，必须说明它可能引入哪一类新假阳性，并放进同一套抽样里测
   ⇒ 依据：本会话两次「修正自带新缺陷」（Layer 3 配对修正 ⇒ 含名判据新假阳性；SaveManager.cs:69 反向控制本身即缺陷）
⑤ 验收证据文件时，必须抽查【至少一条的值】与独立证据源一致，不得只看字段名齐全
⑥ 复核断言时，至少引用一个【不是该断言来源方产出】的证据
⑦ 构建/性能读数必须同时报 rc 与页数；清理临时站前先落证据（rc/页数/耗时/被测对象 sha）
⑧ 源码侧读数必须声明【哪棵树】
```

---

## 44. ★ 控制集定稿（Boss #16628 批准）· 控制样本必须带版本树

### 规则升格
```
★ 【控制样本必须来自被测语料】+ 【控制样本必须注明版本树 / 范围】
⇒ 理由（本线原话，Boss 采纳）：**控制样本出错会静默地把正确的检测器改坏** —— 比一个错数字更难发现。
  本例：若告诉检测器「WriteObject 是 Layer 1（全树 0）」，而它在 1.4.6 上量到 2，
  它会判定自己校准失败，然后把一个正确的匹配器改坏。
```

### 定稿控制集
```
Layer 1（六棵树全 0，稳定）：
  ISaveable · DefineTypes · SetViewModel

Layer 2（★ 必须注明树）：
  LoadGame   : bannerlord-1.4.5 词边界 = 2 文件，且【不在】SaveManager.cs 内
  ReadObject : bannerlord-1.4.5 词边界 = 1 文件，且【不在】LoadContext.cs 内
  ⇒ ★ 并写明：**Layer 2 目前零个已确认实例**（不是设计无意义，而是还没有一个真实样本）

子串陷阱（★ 必须注明树）：
  WriteObject 在 bannerlord-1.4.5 = 0；但 WriteObjects（复数，private）在 SaveContext.cs:296/315
  ★ 在 1.4.6+ 里 WriteObject 本身有 2 个文件 ⇒ 该控制【只在 1.4.5 及更早成立】

边界样本（标注为【构造的】而非【发现的】）：
  SaveableCampaignTypeDefiner.cs:52 —— 行号对、标识符对、描述错
  （页面实际写的是 `Army`；「页说 Settlement」是 lead-22 的旧断言）
```

### Boss 对「别再验了」的答复（本线采纳）
```
【那页结案、不再验它】✅
【但控制集这一项继续】—— 理由：控制集与页面是【两个不同的被测对象】，
  而且控制集出错是【静默的】：它不会让数字变难看，它会让一个正确的检测器被改坏。
  ⇒ 比一个错数字更难发现。
```

### ★ Boss 的锋利表述（本线收下）
> **「两个都对」是今天最难识别的一类分歧** —— 我量 0、你量 2，**都在说真话**，差的是范围。
> 而这次的后果不是「谁错」，是**一个错误的控制会静默改坏一个正确的工具**。
> ⇒ 判据：**给控制样本时，必须附「我在哪棵树 / 哪个范围量的」**；缺这一句，控制样本就是新的误差源。

**⇒ 与本会话同族分歧并列**：783/870（判据不同）· 38177/38494/38500（分母不同）· 65.4/502 ms（计时范围不同）
· `LoadGame` 0/2（版本树不同）· 2406/2407 行（换行符口径）。**六例全部是「两个都对」。**

---

## 45. `Register` 控制按六棵树实测（Boss 要求）· 与 `WriteObjects`

```
ident           mode     b-1.3.0 b-1.3.15  b-1.4.5  b-1.4.6  b-1.4.7  b-1.5.3
Register       substring      549      434      762      826      826      841
Register       word             7        7       98      109      109      109
WriteObjects   substring        0        1        1        1        1        1
WriteObjects   word             0        1        1        1        1        1
⇒ Register 膨胀倍数：78×(1.3.0) · 62×(1.3.15) · 7.8×(1.4.5) · 7.6×(1.4.6/1.4.7/1.5.3)
⇒ WriteObjects 无膨胀（sub == word，六棵树全部一致）
```
**⇒ `Register` 属【存在性】类**（六棵树词边界均 >0，故它是「存在」而非「编造」）。
**⇒ 但它的膨胀倍数也随树变化 ⇒ 连【膨胀倍数】这个量化指标本身也必须带版本树。**
**⇒ 因此 `Register` 不能作 Layer 1 控制**（它不是 0）；若要用，只能作 Layer 2 归属控制，且必须注明树。

---

## 46. ★ 通用规矩（Boss #16752 批准）：**任何源码侧读数都必须声明它在哪一棵树上成立**

```
适用对象【不限于存在性】：行数 · 存在性 · 命中数 · 膨胀倍数 · 分类 · 越界判定 —— 全部适用。
```
**依据：同一现象今日被实测证明【四次】**
```
① MissionState.cs 行数     421/408/356/410/410/412
② LoadGame/ReadObject 分类 1.3.15 是 Layer 1（0 文件）；1.4.5 是 Layer 2（2 / 1 文件）
③ WriteObject 分类         1.3.0–1.4.5 是 0；1.4.6+ 是 2
④ Register 膨胀倍数        1.3.0 = 78×；1.4.6 = 7.6×
```
> **判据：读数的【范围】不是一个可选的附注，它是读数的一部分。** 缺它时，两个人可以在都讲真话的情况下互相矛盾 ——
> 而「两个都对」是本会话最难识别的一类分歧。

**⇒ 本线读数格式要求第 ⑧ 条据此扩展为**：
```
⑧ 【任何源码侧读数】必须声明它在哪一棵树上成立（行数 / 存在性 / 命中数 / 膨胀倍数 / 分类 / 越界判定）
```
**⇒ 并记为「两个都对」的第 7 例候选**（`Register` 膨胀倍数 62× vs 7.6×：两方各自正确，差的是树）。

---

## 47. ★ 「这个判据会很准」本身是一个需要测量的断言（Boss #16755 自记的第三次）

**Boss 自记的三次「提出的判据/断言被测量推翻」：**
```
① Layer 3 的「配对限定在引用自身短语内 + 含名判据」 ⇒ 含名判据过严，产生新一类假阳性
② 反向控制 `SaveManager.cs:69`                        ⇒ 它本身就是 OFFSET 案例（偏移 8）
③ Layer 0「假阳性近乎零」                             ⇒ 未实测的断言
⇒ 共同点：**三条都是【关于判据性质的断言】，而它们都必须靠实测才能成立。**
```
> **通式：「这个判据会很准」本身就是一个需要测量的断言，不是设计时能宣布的性质。**

**⇒ 本线据此把它并入 §43 的第 ④ 条（修正须接受同一套假阳性测量）**，二者是同一族的两个方向：
```
④  提出【修正】时，必须说明它可能引入哪一类新假阳性，并放进同一套抽样里测
④b 提出【新判据】时，不得宣布它的精度（「近乎零假阳性」之类），只能给出【待测】的假设
   ⇒ 精度必须来自实测，与原始判据接受同一套抽样
```

---

## 48. Layer 0 裁定（Boss #16755）：价值完全取决于实测假阳性率，两种结果都可接受

```
· Layer 0 【值得做】（它守的缝隙是真的：结构判据全绿而示例编译不过）
· 但价值完全取决于假阳性率：
    · 若像我那次 3/3 假阳性 ⇒ 报 UNMEASURED 并写明
    · 若压到可接受        ⇒ 升格为批级自检
⇒ 【两种结果都是合格交付。】Boss 不预设它有用。
```
**三条防护已获批准**：① 报本层单独触发数 + 与 Layer 1/2 的重叠数 ② 报本层在真实语料上的假阳性率
③ **必须说明它如何避免本线实测的三种机制**（配对错类 / 间接基类 / 泛型参数）
**⇒ 第三条的价值**：把「我们知道这类检测会怎么错」变成**实现必须回答的问题**，而不是留给下一个人的坑。

---

## 49. 本线状态（供 Boss 对齐）

```
worker：0 个 —— worker-198（已交付入库后释放）· worker-202（W-E，23 分钟零产出后释放）
                 · worker-213（W-F，24 分钟零产出 + 证据文件 value-empty 后释放）
编造 API 测量线：已【结案登记】（§42）——三层全部 UNMEASURED / UNCHECKABLE
                 降级路径（release + 用它的 JSON 自行登记结论）【已执行完毕】
Layer 1 假阳性率：UNMEASURED（证据文件 shape-valid 但 value-empty）
⇒ 【本线无在跑工作】。再执行 Layer 0 / Layer 1 的精度测量需 Boss 明确开 worker（属新的执行工作）。
```

---

## 50. ★ 「冻结」的新定义（Boss #16887 批准为项目口径）：**冻结与尺演进解耦**

### 背景（本线观察）
```
判分器 16 版 / 3.5 小时（平均 13 分钟一版）⇒ 在持续演进的对象上要求「宣告后不许动」
既不可能、也不该 —— 每一次改动都在修真问题。
```

### 新定义
```
★ 【冻结】= 钉住三样：
   ① 当时那把尺的 sha
   ② 那批页的逐页 sha
   ③ 一句声明：「本批判决以该尺 sha 为准，【不随后续改尺变化】」
⇒ **改尺不影响已冻结批次的判决有效性。** 不必为改尺重发宣告。
```
### 配套【对账义务】（原规则 ① 保留，但性质改变：记账而非改判）
```
改尺后复跑最近一批已冻结批次 ⇒ 记账：
  · 一致   ⇒ 记「新尺复现旧判决」
  · 不一致 ⇒ 记「新尺对旧批给出不同判决 + 差异项 + 是哪一层」
⇒ **记账，不改变原判决**（原判决绑它自己的 sha，永久有效）。
⇒ 理由：原判决的可复现性由【尺 sha 能取回】保证；「新尺给出不同判决」是【新尺的信息】，
   不是【旧批的缺陷】。
```
### 保留的第 ③ 条（本次事故的真正产物）
```
★ 【判据文件的未提交工作区状态，不得用于产出对外判决。】
⇒ 可执行形式：出批次判决前先 `git status --porcelain -- tools/_verify/lead-145zh-judge.mjs`，
   【非空就不出判决】（先提交）。
⇒ 与 ② 不冲突：② 说「已提交的版本之间可以演进」；③ 说「未提交的中间态不产生对外结论」。
```

**⇒ 本线读数格式要求新增第 ⑨ 条**：
```
⑨ 引用冻结批次的判决时，必须同时给出【该批钉住的尺 sha + 逐页 sha】，
   并声明「本判决不随后续改尺变化」；另可附「新尺复现情况」作为【记账】而非改判依据
```

---

## 51. ★ 丙 的依据被重述（Boss #17024）· 并暴露两条【关于 HEAD 的未验证项】

### 失效（对 HEAD）—— 本线更正的直接后果
```
· 「宏每页无条件加载 18.8MB」  ← HEAD 第 10 行在 {%- if parent_path -%} 之内，且有 is defined 守卫
· 39,039 次 × 18.8MB 深拷贝
· A/B 数（162.3 / 71.5 / 90.8 / 65.4 ms）· 全站外推 42.6 分钟
· ★ 以及【缺失 key 崩溃】—— 它是在【撤回的实现】上演示的 ⇒ **HEAD 是否崩，未验证**
仍成立：
· 调用点拓扑（宏仍被 page.html 与 section.html 调用）
· 覆盖缺口 323 条（data/page-navigation.json 这个【数据文件】的属性，与模板是否读它无关）
```

### 丙 的新依据（三条，全部只依赖【已提交的事实】）
```
① R2 的实现从未被提交 ⇒ 它的一切读数（性能与崩溃）只是【设计输入】，不是关于 HEAD 的证据
② HEAD 用 `get_section`（渲染期兄弟扫描）—— 而这正是用户外壳注释说的那件事：
   「Scanning every sibling in Tera is quadratic on the large API sections and pushes a full build
     past GitHub's 6 hour limit」
   ⇒ 这是 HEAD 自身的、已提交的、结构性的隐患 ⇒ 【它才是丙的真正依据】
③ 数据陈旧是确定的：323 个缺 route 的 leaf 全部比 JSON 新（newer=323/older=0）；
   另有 3 个 xml-reference/bugs 是单页桶（无 prev/next 是正确行为）
```

### ★ 两条新增【关于 HEAD 的未验证项】（现在是对外结论的缺口）
```
· 【HEAD 的缺失 key 行为未验证】—— 它在撤回的实现上崩过，但 HEAD 有 `is defined` 守卫（第 12/16 行），
  而该守卫【是否有效未测】⇒ 需用【HEAD 版本】的宏 + 一个缺 route 探针页做最小夹具
· 【HEAD 的渲染耗时未测】—— `get_section` 的二次扫描在规模上到底多慢，【未测】
⇒ 这两条只有 lead-13 用【HEAD 版本】跑才能回答（Boss 已两次要求它这么做：#16182/#16185）
```

### ★★ 因此本线收回「缓存实验」的必要性（它是关于【撤回实现】的问题）
```
Boss 先前批准的那个廉价实验（测 Zola 的 load_data 是否缓存，以判定 65.4 vs 502 ms 谁对）
⇒ 它问的是【R2 那个 18.8MB 单体加载】的每页代价。
⇒ 而 R2 已被撤回、且 HEAD 根本不读那个文件 ⇒ **它对 HEAD 是【设计输入】，不是活的问题。**
⇒ 活的、且已提交的问题只有上面那两条（缺失 key 守卫是否有效 · get_section 二次扫描多慢）。
⇒ 本线建议：**把该 worker 的预算改投这两条 HEAD 问题**，而不是继续测 R2 的缓存。
   （并且这两条按 Boss 的指派属于 lead-13 —— 它持有模板。）
```

---

## 52. Boss 升格：**「不报错」是判据的输出，「正确」是另一个断言**（#17210）

```
★ 报「已修」时必须验证【修法本身】—— 否则「删掉链接换绿」与「改对路径换绿」在门禁读数上完全一样。
⇒ 本线实例：核了 314/315/317 三行的实际形态（同桶 `../X` · 跨桶 `../../campaign-ext/X`），
   并逐条确认目标页存在 ⇒ 才能说「是改对了路径口径」。
```
**同族实例（本会话全部实测）**：
```
· 一个 0 要分清「判据坏」vs「语料空」
· AGREE 在空集上不是证据（未区分「跑过且为空」与「没跑」）
· 检测器的「命中数」在假阳性率出来前不是结果
· 「发现了某不对称」≠「修好了某不对称」（台账记「发现」不等于记「修复」）
```

---

## 53. ★ 基础设施：工作区有【两个同名的 `tools/` 树】（W-G 发现，本线核实）

```
C:\WorkSpace\Bannerlord\tools\_verify\                            ← cwd 根 · git 之外 · 含别线 scratch
C:\WorkSpace\Bannerlord\BannerlordCode.github.io\tools\_verify\   ← 真仓库 · 301 entries
```
**它解释了三次各自被误诊过的异常：**
```
① W-G 的「artifact missing」假阴性（产物按 cwd 解析 ⇒ 明明在盘上却报缺失）
② Boss 注意到的 `arch-topic-evidence.tsv` 两个尺寸（1201 B 仓库外 / 1330 B 仓库内）⇒ 不是两个版本，是两个树
③ 本线自己早期的 bug：write 工具把 upcheck.mjs 落到仓库外，我手动 mv 才发现
```
**⇒ 规则（本线即刻生效）**：**派单与自建产物一律用绝对路径**；写 `tools/...` 相对路径时明确以仓库根为基准。
**⇒ 并注意 W-G 的缓解措施有漂移风险**：它在两个根各放一份（现在字节一致），但 cwd 根那份在 git 之外
⇒ **正本 = 仓库内那份**（已入库）；cwd 根那份标为【非权威副本】。

---

## 54. lead-23 四棵树复核：**已完成**（Boss #17210 要求时其实已交付）

```
交付：tools/_verify/lead-20/lead23-review-20261007T111204Z.md
      23,555 B · sha256 1bb57814f34e80b0 · 315 行 · 入库 cef8619dac（已复测 clean）
执行者：worker-227（W-G）· 另入库 8 个原始证据件 + 3 个 manifest
```
**Boss 六条重点逐条覆盖**（① 树推导无静默回退 · ② 19/19 引用在 bannerlord-1.4.5 界内 · ③ full=34/inBlock=0/subject=0/bad=0/ambiguous=0 分开计 · ④ j5r unresolved=0 ×5 + 全站 0 · ⑤ 四句边界 · ⑥ U+FFFD node+正控制）。
**本线独立复算三条**：Finding A 真缺陷（`RegisterListener` 在 `GameStateManager.cs:102`，而页面 0 次提及、0 个真实调用）· Advisory（5/5 页硬编码 `Bannerlord.Source`）· 引用与链接读数一致。

**Boss 两个新问题的答案：**
```
① 5 页产出【已入库且 clean】（IFaction/IFormation/ISaveDriver → a899c903；IViewModel/IGameStateManagerListener → 1e32e70a）
② 「普查归一化不对称」是【已记录的关键发现】（lead-23-PROGRESS.md:18），但【「已修正」无法证实】——
   那是普查线的工具（coverage-census.mjs），台账只记了发现，没记修复 ⇒ 需问普查线
```

**★ 真正剩下的**：那三棵 zh 树【目前无产出可审】
```
content/v1.4.6 total=112 · v1.4.7 total=97 · v1.5.3 total=153
modified_since_09:00 = 1 / 1 / 5；lead-23 自述「大三棵（zh）16,765 页未动」
⇒ 复核它们要等 lead-23 开始写；而那三棵树的布局与 1.4.5 不同（只有 1.4.5 有 Bannerlord.Source 层）
⇒ 而 Batch-1 的页形【硬编码了 Bannerlord.Source】⇒ 直接复制会产生 `File:` 指向不存在目录
⇒ 建议：让 lead-23 在开始那三棵树之前先定 `File:` 路径规则
```
