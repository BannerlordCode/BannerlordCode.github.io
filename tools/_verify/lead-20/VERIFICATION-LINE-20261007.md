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
