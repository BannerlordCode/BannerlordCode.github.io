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
