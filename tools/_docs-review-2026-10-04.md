# 文档独立审查报告 — 2026-10-04

审查者：lead-9（只读审查，未改正文、未 git add/commit/push）
审查对象：工作区未提交改动 `git diff`（197 文件，+7557 / −536）

---

## 0. 本轮范围与口径（先说清楚我查了什么、没查什么）

```
$ git status --short | wc -l          → 229
$ git diff --shortstat
 197 files changed, 7557 insertions(+), 536 deletions(-)
$ git diff --name-only | wc -l        → 199
```

**加行去向（逐行归属，用脚本按行号判定归属，未采样）**

```
ADDED lines inside SECTION INDEX blocks : 5468   (72.3%)
ADDED lines outside those blocks        : 2089
  其中 tools/*.md 报告                  : 1059
  其中 content/ 类页正文（手写）        : ~1030
```

**一个必须先讲清的事实：这一轮 diff 里新增的 ` ```csharp ` 代码块数量 = 0。**

```
$ grep -c '^+.*csharp' rdiff.diff       → 0
$ grep -c '^+.*## 如何'  rdiff.diff     → 0
$ grep -c '^+.*关键成员' rdiff.diff     → 3
```

diff 中 32 个新增围栏块全部带空语言标记，且 32 个**全部**落在 `tools/*.md`（各线自查报告），
没有一个落在 `content/`。所以第 ① 类的「新增代码块」本身为空集。

⇒ **① 类我实际验的是：被改动页面上已经存在的 `csharp` 片段 + 本轮新增的成员表/死成员表里的每一个断言。**
这是本报告里证据最硬的部分，也是唯一能回答「编造还是没编」的部分。

---

## ① 🔴 编造的 API 用法 —— **0 条编造。41/41 条断言实测复现。**

我把本轮新增内容里**每一个可机械判定的断言**都跑到源码树里核对了一遍。
判定口径固定为：`bannerlord-1.4.5/Bannerlord.Source/`（HEAD `ccbc3d40…`，8583 个 `.cs`）。

> ⚠️ **踩过的坑，留给写作线**：`AgentVictoryLogic.cs` 在 v1.4.5 树里的真实路径是
> `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/`，
> 页面里写的 `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/…` 前缀是对的。
> 我第一次拿 v1.5.3 树去核，**19/19 全 FAIL**。这就是本会话记在案的第 ③ 类陷阱的反向版本：
> 「查不到」先怀疑自己找错了树，不是先怀疑页面。

### 1.1 行号级断言：19/19 PASS

被核页面 `content/v1.4.5/en/api/mission-ext/AgentVictoryLogic.md`、
`…/AgentVisualsData.md`（新增 `## Dead members and traps` 段）

```
PASS  EquipmentData decl @17       |  public Equipment EquipmentData { get; private set; }
PASS  UseMorphAnims @169           |  public AgentVisualsData UseMorphAnims(bool useMorphAnims)
PASS  ActionCode @253              |  public AgentVisualsData ActionCode(in ActionIndexCache actionCode)
PASS  GetCachedWeaponEntity @199  |  public GameEntity GetCachedWeaponEntity(EquipmentIndex slotIndex)
PASS  MOOCOOI decl @119            |  private void MasterOrderControllerOnOrderIssued(OrderType orderType, IEnumerable<Formation> appliedF…
PASS  OnOrderIssued += @114        |  base.Mission.PlayerTeam.PlayerOrderController.OnOrderIssued += MasterOrderControllerOnOrderIssued;
PASS  _cheeringAgents @99          |  private List<CheeringAgent> _cheeringAgents;
PASS  _cheerReactionTimerData @61  |  private CheerReactionTimeSettings _cheerReactionTimerData;
PASS  _selectedCheerActions @97    |  private ActionIndexCache[] _selectedCheerActions;
PASS  _cheerActionGroup @59        |  private CheerActionGroupEnum _cheerActionGroup;
PASS  _isInRetreat @101            |  private bool _isInRetreat;
PASS  _midCheerActions @77         |  private readonly ActionIndexCache[] _midCheerActions = new ActionIndexCache[4]
PASS  _lowCheerActions @63         |  private readonly ActionIndexCache[] _lowCheerActions = new ActionIndexCache[10]
PASS  _highCheerActions @85        |  private readonly ActionIndexCache[] _highCheerActions = new ActionIndexCache[8]
PASS  HighCheerThreshold @53       |  private const float HighCheerThreshold = 0.25f;
PASS  MidCheerThreshold @55        |  private const float MidCheerThreshold = 0.75f;
PASS  YellIfOrdered @57            |  private const float YellIfOrderedInRetreatProbability = 0.25f;
PASS  CheerReactionTimerData @105  |  public CheerReactionTimeSettings CheerReactionTimerData => _cheerReactionTimerData;
PASS  CheerActionGroup @103        |  public CheerActionGroupEnum CheerActionGroup => _cheerActionGroup;
```

### 1.2 调用次数断言：12/12 **逐位复现**

页面口径 = 「全树 `\b名称\b` 出现次数 / 命中行数」，且**减去声明行本身**。
按这个口径复算，12 个数字全部对上，一个不差：

```
name                            claimed   wordbnd(all)  minus-decl-line
_cheeringAgents                 18/18     19/19         18/18
_cheerReactionTimerData         6/4       7/5           6/4
_selectedCheerActions           6/6       7/7           6/6
_cheerActionGroup               4/4       5/5           4/4
_isInRetreat                    3/3       4/4           3/3
_midCheerActions                3/3       4/4           3/3
_lowCheerActions                1/1       2/2           1/1
_highCheerActions               1/1       2/2           1/1
EquipmentData                   37/32     38/33         37/32
UseMorphAnims                   22/22     23/23         22/22
ActionCode                      20/20     21/21         20/20
GetCachedWeaponEntity           1/1       2/2           1/1
```

`AgentVisualsData.md` 里那句「inventory 22 恰好复现」「37 次落在 32 行、AgentVisuals.cs:490 一行里 5 次」
—— 12/12 复现成立，这句话可以留在页面上。

### 1.3 MapEventSide 整页重写：9/9 行号 + 14/14 API + 1/1 签名 PASS

`content/v1.4.5/zh/api/campaign-ext/MapEventSide.md` 是本轮唯一整页重写
（`491 行 → 258 行`，23 个 `###` 方法小节塌成一张 `## 关键成员` 表，numstat `182 / 416`）。
**塌缩没有丢内容** —— 每个方法在表格 Notes 列里都保留了行为说明。

```
PASS line25  private Dictionary<UniqueTroopDescriptor, MapEventParty> _readyTroopsTemporaryCache;
PASS line28  private bool _requiresTroopCacheUpdate;
PASS line31  private Dictionary<UniqueTroopDescriptor, MapEventParty> _allocatedTroops;
PASS line34  private Dictionary<MapEventParty, float> _partyStrengthCache;
PASS line64  private List<UniqueTroopDescriptor> _simulationTroopList;
PASS line67  private bool _troopAllocationsLocked;
PASS line88  public MBList<Ship> SimulationShipList { get; private set; } = new MBList<Ship>();
PASS line91  public float WeightedShipCombatFactor { get; private set; }
PASS line126 public int NumRemainingSimulationTroops => _simulationTroopList?.Count ?? 0;
```

页面 `## 真实示例` 里 3 个 csharp 片段用到的成员，逐个在 v1.4.5 全树确认存在：

```
TroopCount / RecalculateStrengthOfSide / GetSideMorale / HealthyTroopCountAtMapEventStart /
OtherSide / AttackerSide / DefenderSide / PlayerSide / StrengthOfSide /
GetTotalHealthyHeroCountOfSide / GetTotalHealthyTroopCountOfSide / CountTroops /
CalculateRenownAndInfluenceValuesOnPartyInvolved / PlayerMapEvent      → 14/14 OK
```

页面那句「`CountTroops` 收的是 `Func<FlattenedTroopRosterElement, bool>`」：
```
$ grep 'public int CountTroops' MapEventSide.cs
public int CountTroops(Func<FlattenedTroopRosterElement, bool> pred)          ← 参数类型逐字对上
```

### 1.4 披露性数字也复现

4 个页面写「源码树 `bannerlord-1.4.5` HEAD `ccbc3d40f88905765a1484492d41b7000e7249fa`，8,583 个 `.cs`（含 `bin/`）」：
```
$ git -C bannerlord-1.4.5 rev-parse HEAD  → ccbc3d40f88905765a1484492d41b7000e7249fa   ✅
$ find bannerlord-1.4.5 -name '*.cs' | wc -l → 8583                                 ✅
```

**① 结论：没找到一条编造。** 这是本轮最干净的账。

---

## ② 🔴 生成指纹 / 模板化 —— **2 条真问题 + 1 条已授权的生成器（须你确认口径）**

### 2.1 【已授权，但必须记账】5,468 行机器生成内容进了 `content/`

**72.3% 的新增行不是人手写的**，是 `tools/nav-section-index.mjs` 写进 120 个 `_index.md`
的 `<!-- BEGIN SECTION INDEX --> … <!-- END SECTION INDEX -->` 机械子页清单。

**这不是违规** —— 脚本头部有明确的 boss 授权边界，我逐字贴出来：

```js
// nav-section-index.mjs —— 把桶目录下所有子页补进该桶 _index.md 的【机械子页清单】。
//
// 🔴 授权边界（boss 裁定，见 tools/_NAV-ARCHITECTURE.md）
//   允许：只写 <!-- BEGIN SECTION INDEX --> ... <!-- END SECTION INDEX --> 之间的机械子页清单
//   禁止：marker 块之外的任何一行（散文 / 心智模型段 / 手写链接）
//   禁止：写任何非 _index.md 的文件
```

`content/_index.md:145-146` 也白纸黑字记着这条口径。
`tools/RETIRED_BODY_GENERATORS.md` 的禁令针对的是「正文散文」—— 概述 / 心智模型 / 方法用途 /
用法示例 / 桩页，机械子页清单不在其列。

**但你要知道数字**：本轮 7,557 行新增里，5,468 行是机器写的。
写进正文的手写内容只有约 1,030 行，分布在 25 个类页上。
⇒ **建议**：把「本轮新增正文 = 25 页 / ~1030 行」作为进度口径对外说，
不要用 numstat 的 7557 说事，否则四条线的工作量被高估 7 倍。

### 2.2 【真缺陷】生成器写出了重复 marker，3 个文件 BEGIN/END 不配对

逐文件 marker 计数（`grep -c`，全 content/ 树）：

```
$ grep -rc "BEGIN SECTION INDEX" content/ | awk -F: '$2>1'
2  content/v1.3.15/en/api/campaign-ext/_index.md
2  content/v1.3.15/zh/api/campaign-ext/_index.md
2  content/v1.4.5/zh/api/campaign-ext/_index.md

$ for f in $(grep -rl "BEGIN SECTION INDEX" content/); do
    b=$(grep -c "BEGIN SECTION INDEX" "$f"); e=$(grep -c "END SECTION INDEX" "$f")
    [ "$b" != "$e" ] && echo "UNBALANCED b=$b e=$e  $f"; done
UNBALANCED b=2 e=1  content/v1.3.15/en/api/campaign-ext/_index.md
UNBALANCED b=2 e=1  content/v1.3.15/zh/api/campaign-ext/_index.md
UNBALANCED b=2 e=1  content/v1.4.5/zh/api/campaign-ext/_index.md
```

现场（`content/v1.4.5/zh/api/campaign-ext/_index.md`）：

```
39  `TaleWorlds.CampaignSystem` 拥有战役全局状态、事件分发和存档边界…
41  <!-- BEGIN SECTION INDEX -->
42  <!-- BEGIN SECTION INDEX -->      ← 多出来的一行
43  ## ↑ 上级导航
...
3851 <!-- END SECTION INDEX -->
```

**后果**：第二个 BEGIN 之后所有内容都被判进 marker 块，护栏 `assertStructuralScope()`
对这一段实际失效（它按 marker 配对划定可写区，现在可写区从 42 行一直吞到 3851 行，
把手写的 `## ↑ 上级导航` 也圈了进去）。脚本的幂等性在此处已经破掉。

**正确的是什么**：每个文件应当恰好 1 个 BEGIN + 1 个 END，相邻成对。
这 3 个文件都在本轮 diff 里（+26 / +26 / +851 行）。

### 2.3 【真缺陷】6 个页面的「死成员与陷阱」段是空壳，且 6 页逐字雷同

全仓 `## Dead members and traps` 段共 25 处：

```
sections WITH table rows: 19
sections WITHOUT any table row: 6
   NO-TABLE /v1.4.5/en/api/mission-ext/AgentCommonAILogic.md  (3 lines)
   NO-TABLE /v1.4.5/en/api/mission-ext/AgentController.md     (3 lines)
   NO-TABLE /v1.4.5/en/api/mission-ext/AgentHumanAILogic.md   (3 lines)
   NO-TABLE /v1.4.5/en/api/mission-ext/AgentStatusCondition.md(3 lines)
   NO-TABLE /v1.4.5/en/api/mission-ext/AgentVisualsCreator.md (3 lines)
   NO-TABLE /v1.4.5/en/api/mission-ext/BattleSpawnModel.md    (3 lines)
```

**逐字对比（要求 5：下面是原文，6 个文件一字不差，同一段 231 字符）**：

| 文件 | 行 |
|---|---|
| `content/v1.4.5/en/api/mission-ext/AgentCommonAILogic.md` | 51 |
| `content/v1.4.5/en/api/mission-ext/AgentController.md` | 52 |
| `content/v1.4.5/en/api/mission-ext/AgentHumanAILogic.md` | 45 |
| `content/v1.4.5/en/api/mission-ext/AgentStatusCondition.md` | 48 |
| `content/v1.4.5/en/api/mission-ext/AgentVisualsCreator.md` | 45 |
| `content/v1.4.5/en/api/mission-ext/BattleSpawnModel.md` | 47 |

> Dead-member status on this page is unknown: every member here falls under UNSUPPORTED (ambiguous multiple declarers, among other causes), so the call-site count must not be read as a conclusion; no call site could be confirmed by an independent probe this pass.

**这 6 页的段落总长都是 3 行，表格行数都是 0。**
段标题承诺了「Dead members **and traps**」，正文一个成员都没列。
对照 `AgentCommonAILogic.md:40-49` 紧邻的 `## Key members` —— 5 行扎实的手写表。
⇒ 同一个人在同一页里写出了好表和空壳，**这不是内容不足，是模板落到了没填内容的地方**。

**正确的是什么**：要么这 6 页逐页补出各自的成员表（哪怕只有 3-5 行），
要么整段删掉 —— 让页面回到「没有这一段」，而不是留一个假装做完的壳。

### 2.4 【观察，非缺陷】4 页共用的口径披露句

```
content/v1.4.5/en/api/campaign-ext/BarberCampaignBehavior.md:61
content/v1.4.5/en/api/campaign-ext/CampaignMusicHandler.md:57
content/v1.4.5/en/api/campaign-ext/CampaignSiegeStateHandler.md:57
content/v1.4.5/en/api/campaign-ext/CharacterCreationScreen.md:61
```
> Counts: source tree `bannerlord-1.4.5` HEAD `ccbc3d40f88905765a1484492d41b7000e7249fa`, 8,583 `.cs` files including `bin/`. Call-site counts are **occurrence counts** (`grep -o -w`), not matching-line counts. …

句 1 逐字相同（4 页），句 2 三页相同、`BarberCampaignBehavior` 多半句。
**这一条我判为「可接受」**：它是方法学披露，且两个数字我都能复现（§1.4）。
与 §2.3 的区别是：这里后面跟着真表格，那 6 页后面什么都没有。
⇒ 但若后续批次继续用这句起头，请确保每页后面都跟本页自己的表。

---

## ③ 「这个 API 不存在 / 未实现」的判断 —— **0 条无据下结论；5 条 UNSUPPORTED 我逐条复算，全部成立**

本轮新增内容里没有出现「不存在 / 已删除 / 未实现」这类断言。
`AgentVictoryLogic.md` 有 5 行判为 `UNSUPPORTED`（「No reference could be reproduced; no conclusion is drawn」），
我逐条复算：

```
$ grep -rn "\bCheerActionGroup\b"       bannerlord-1.4.5 --include=*.cs
AgentVictoryLogic.cs:103: public CheerActionGroupEnum CheerActionGroup => _cheerActionGroup;     ← 仅 1 处 = 声明自己
$ grep -rn "\bCheerReactionTimerData\b" bannerlord-1.4.5 --include=*.cs
AgentVictoryLogic.cs:105: public CheerReactionTimeSettings CheerReactionTimerData => _…;         ← 仅 1 处 = 声明自己
$ grep -rn "\bHighCheerThreshold\b"     → 仅 :53 声明
$ grep -rn "\bMidCheerThreshold\b"      → 仅 :55 声明
$ grep -rn "\bYellIfOrderedInRetreatProbability\b" → 仅 :57 声明
```

**5/5 成立。** 而且这里写作线躲过了本会话记在案的正是那个坑：
`CheerActionGroupEnum` 在树里有 14 处引用，但它是**另一个标识符**，
页面没有把它算成 `CheerActionGroup` 的引用。
⇒ 这正是「6 样本清单里那个被推翻的样本」的同款陷阱，**这次没踩**。

`MapEventSide.md` 8 行 `UNSUPPORTED` 同理，判词统一是「类内无点前缀的访问」，
与 §1.3 的行号实测一致。

---

## ④ 链接解析 —— **净增 1 条死链（要求是 0）。真页面缺陷，不是工具误报。**

```
$ node tools/_check_links_exist.mjs
  pages : 39025   hrefs : 145608   dead : 1 / 145608 (0.00%)
  KNOWN-FAILURES BASELINE : 0 known failure(s)  <-- EMPTY baseline
  net new : 1
  RESULT: FAIL (net new dead = 1)

$ node tools/audit-links.mjs
FILES=39027  BROKEN_LINKS=1  FILES_WITH_BROKEN=1
```

两个独立工具报同一条，交叉验证：

```
content/v1.4.6/zh/api/campaign-ext/MBObjectManager.md:112
  （见 [Game](../core-extra/Game) 的 `RegisterTypes` 前置流程）
  → 解析为 /v1.4.6/zh/api/campaign-ext/core-extra/Game
```

**我确认这是页面的错，不是工具的错**，理由：

```
$ ls content/v1.4.6/zh/api/core-extra/Game.md          → 存在
$ ls content/v1.4.6/zh/api/campaign-ext/core-extra     → No such file or directory
```

Zola 把叶子页路由成 `/…/campaign-ext/MBObjectManager/`，所以 `../` 只回退到 `campaign-ext/`，
要到 `api/core-extra/` 必须回退两级。
同目录下 `_index.md` 写 `../core-extra/` 是对的（`_index` 的路由就是该目录本身），
**叶子页写 `../core-extra/` 是错的** —— 就是「跳过去就 404」的那一类。

**正确的是什么**：`../core-extra/Game` → **`../../core-extra/Game`**。
（`content/v1.4.6/zh/api/campaign-ext/_index.md:…` 的 `../core-extra/` 不用改。）

**这一行是本轮新增的**：
```
$ git diff -- content/v1.4.6/zh/api/campaign-ext/MBObjectManager.md | grep -n "core-extra/Game"
13:+`MBObjectManager` 是 `sealed class`…（见 [Game](../core-extra/Game) 的 `RegisterTypes` 前置流程）。
```

**正面记录**：本轮写作线**主动修了**一批同款链接，方向正确。例如
`AgentVisualsData.md` 的 `[AgentBuildData](./AgentBuildData)` → `[AgentBuildData](../AgentBuildData)`，
`AgentVictoryLogic.md` 的 `[MissionLogic](./MissionLogic)` → `[MissionLogic](../MissionLogic)`。
方向对，净增被压到 1。

---

## ⑤ 字符与行尾损坏 —— **U+FFFD = 6 处（不是 0）；混合行尾 = 1 文件**

### 5.1 U+FFFD：6 文件 / 7 处，全仓独立扫描

我自己跑的，没采信任何线的自报：

```
扫描 content/ 下 39025 个 .md
files with U+FFFD = 6
```

| 文件 | 行 | FFFD 串长 | 现场上下文（`?` = 坏字节） |
|---|---:|---:|---|
| `content/v1.4.5/zh/api/campaign/AlleyLeaderDiedMapNotification.md` | 16 | 2 | `…失去首领（或人手不足）??这条地图通知。` |
| `content/v1.4.6/zh/api/campaign/Hero.md` | 3 | 2 | `…属性技能特质、家??队伍、财富关系…`（frontmatter description） |
| `content/v1.4.6/zh/api/campaign/Hero.md` | 175 | 2 | `\| 增加对本王国的影?? \|` |
| `content/v1.4.6/zh/api/core-extra/ArmorComponent.md` | 65 | 3 | `**缺省值是 `true`**（源???里先无条件赋 true…` |
| `content/v1.4.6/zh/api/core-extra/EventBase.md` | 17 | 2 | `…`RegisterEvent` / `TriggerEvent` 接受??资格；…` |
| `content/v1.4.6/zh/api/mission-ext/ItemType.md` | 165 | 3 | `…`TaleWorlds.MountAndBlade.Diamond` 命名空间，页???尚未撰写…` |
| `content/v1.4.6/zh/api/mission-ext/Team.md` | 34 | 2 | `` `Initialize()`、??`Reset()`、`Clear()` 里都有 `` |

**可判定的 3 处（用本页自身词频做阳性证据，不是猜）**：

```
Hero.md:3            家[??]队伍      本页「家族」x11，「家家」x1  ⇒ 家[族与]队伍
ArmorComponent.md:65 源[???]里      本页「源码」x5                 ⇒ 源[代码…]里（FFFD 串长 3 与「代码」2 字不符，见下）
ItemType.md:165      页[???]尚未撰写 本页「页面」x1                 ⇒ 页[面…]尚未撰写
```

**NOT RESOLVED（我判不了，不许猜）**：
`Hero.md:175 影[??]`、`EventBase.md:17 接受[??]资格`、`Team.md:34 [??]Reset()`、
`AlleyLeaderDiedMapNotification.md:16 [??]这条`、`ArmorComponent.md:65` / `ItemType.md:165` 的 FFFD 串长 3。

> ⚠️ **不要用 FFFD 个数反推丢字数。** 我实测串长 2/2/2/3/2/3/2，
> 而 `ArmorComponent.md:65` 若按「源[代码]里」只需 2 个字。
> `tools/_DEAD-MEMBER-LIST.md:1278` 已经踩过一次同样的坑（它自己也记了
> 「影?? | 响力 ⇒ 影响力 | 依据：「影响」只有 1 字，与 2 字节不符」）。
> **正确做法**：回到原写入源或该文件的 git 历史取原字节，不要在坏字节上做算术。

**这 6 个文件都不在本轮 diff 里**（`git status` 无它们）——是历史遗留债，但仍在页面上被读者看见。

### 5.2 混合行尾：1 个文件

```
changed files: 199   pure-CRLF=36   pure-LF=162   MIXED=1
MIXED content/v1.4.6/zh/api/core-extra/ItemObject.md   crlf=260  lf=5
```

裸 LF 出现在第 **249–253 行**，正是本轮新增的那段「为什么这份源码之前被判为不存在」：
```
L249: `bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Core/ItemObject.cs` 逐行比对，**publ
L251: **1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core
L253: **为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套**
```
⇒ 往 CRLF 文件里塞了 5 行 LF。Git 会照警告
`warning: in the working copy of '…/ItemObject.md', CRLF will be replaced by LF` 处理，
但**仓库内行尾从此不一致**。正确的是：这 5 行按该文件的 CRLF 写入。

### 5.3 numstat 异常项已排除「整页重写」误报

`content/v1.4.5/zh/api/campaign-ext/MapEventSide.md` numstat `182 / 416` 看着像整页重写，
**已确认是真实重写而非行尾漂移**：491 行 → 258 行，行尾纯 LF（无 CRLF 混）。
§1.3 已逐条验过内容真实性。**这一项不是缺陷，是本轮质量最高的产出。**

---

## ⑥ 结构退化 —— **抽检 5 页，4 deep_pass + 1 判为 noise（预期内），0 退化**

```
$ node tools/_check_deep.mjs content/v1.4.5/en/api/mission-ext/AgentVictoryLogic.md
{"status":"deep_pass","reasons":["mental>80","dep-or-see-links=7","real-csharp-example","overview-ok"]}   EXIT=0
$ node tools/_check_deep.mjs content/v1.4.5/en/api/mission-ext/AgentCommonAILogic.md
{"status":"deep_pass","reasons":["mental>80","dep-or-see-links=6","real-csharp-example","overview-ok"]}   EXIT=0
$ node tools/_check_deep.mjs content/v1.4.5/zh/api/campaign-ext/MapEventSide.md
{"status":"deep_pass","reasons":["mental>80","dep-or-see-links=10","real-csharp-example","overview-ok"]}  EXIT=0
$ node tools/_check_deep.mjs content/v1.4.5/en/api/campaign/_index.md
{"status":"noise","reasons":["section-index-or-family-shell"]}                                            EXIT=0
$ node tools/_check_deep.mjs content/v1.4.6/zh/api/core-extra/ItemObject.md
{"status":"deep_pass","reasons":["mental>80","dep-or-see-links=15","real-csharp-example","overview-ok"]}  EXIT=0
```

`_index.md` 判 `noise` 是工具按设计排除桶索引页，不是退化。

**但有一个覆盖口径必须纠正**：`AgentCommonAILogic.md` **deep_pass 通过了**，
而 §2.3 已证明它的「死成员与陷阱」段是 0 行的空壳。
⇒ **`_check_deep.mjs` 不检查「新增段落是否有实质内容」**，它只验心智模型长度 / 依赖链接 / csharp 片段 / 概述。
**不能拿 deep_pass 当作本轮内容合格证明**，得配 §2.3 的「表格行数」一起看。

---

## 全站生成器指纹扫描（② 的必查项，已全量）

```
扫描 39025 个 .md，5 种指纹模式
命中 37653 处的分布：
  "Auto-generated"（frontmatter description）  18658
  "自动生成"（frontmatter description）          18990
  "generated by"                                    4
  "由脚本生成"                                       1
```

**判定：全部是 frontmatter `description` 字段，全部在第 3 行，全部是历史脚手架文案，
不在本轮 diff 内。** 例：
```
content/v1.3.0/en/api/campaign/AccessDetails.md:3
  description: "Auto-generated class reference for AccessDetails."
```
⇒ 这些是**遗留债**（3.6 万页的 description 是机器文案），不是本轮新注入的模板。
**本轮新增正文里没有一条生成器指纹。**

---

## 汇总

| 类 | 发现 | 严重度 | 状态 |
|---|---:|---|---|
| ① 编造的 API 用法 | **0** | — | 41/41 断言实测复现，无编造 |
| ② 生成指纹 / 模板化 | **3** | 🔴 | 2.1 已授权（需你确认口径）/ 2.2 marker 重复真缺陷 / 2.3 六页空壳真缺陷 |
| ③ 无据的「不存在」判断 | **0** | — | 5/5 UNSUPPORTED 复算成立，且躲开了已知陷阱 |
| ④ 链接解析 | **1** | 🔴 | 净增 1 条死链（`MBObjectManager.md:112`），要求是 0 |
| ⑤ 字符 / 行尾损坏 | **8** | 🟠 | U+FFFD 7 处 / 6 文件（遗留债）+ 混合行尾 1 文件 |
| ⑥ 结构退化 | **0** | 🟡 | 抽检 5 页 0 退化，但 deep_pass 覆盖不到空壳段 |

### 要转给写作线的 4 件事（按危害排序）

1. **【必修，1 行】** `content/v1.4.6/zh/api/campaign-ext/MBObjectManager.md:112`
   `../core-extra/Game` → `../../core-extra/Game`。这是全站唯一一条净增死链。
2. **【必修】** 6 个页面的 `## Dead members and traps` 是 3 行空壳 + 6 页逐字雷同
   （`AgentCommonAILogic` / `AgentController` / `AgentHumanAILogic` / `AgentStatusCondition` /
   `AgentVisualsCreator` / `BattleSpawnModel`，全在 `v1.4.5/en/api/mission-ext/`）。
   要么逐页补真表，要么整段删。
3. **【必修】** 3 个 `_index.md` 的 BEGIN marker 重复、BLOCK 不配对
   （`v1.3.15/{en,zh}/api/campaign-ext/_index.md`、`v1.4.5/zh/api/campaign-ext/_index.md`），
   护栏在该区间已失效，脚本幂等性已破。
4. **【必修】** `content/v1.4.6/zh/api/core-extra/ItemObject.md` 第 249–253 行改回 CRLF。

### 要你（boss）裁定的 1 件事

5. **5,468 行机器生成内容占本轮新增的 72.3%。** 授权文件在（`tools/_NAV-ARCHITECTURE.md` +
   脚本头），我不判它违规。但**对外报进度时请用「手写 25 页 / ~1030 行」**，
   用 numstat 的 7557 会把四条线的工作量虚报 7 倍。

### 我没查的（NOT VERIFIED，明说）

- 本轮未改动的 ~39,000 页的 csharp 片段：**未核**。本轮 diff 新增 csharp 块为 0，
  我只核了被改动页面上已有的片段 + 新增成员表的断言。
- `_index.md` 里 5,468 行机械清单的**链接正确性**：只做了抽样
  （`viewmodel` / `campaign-ext` / `mission-ext` / `campaign` / `campaign` en 五个桶，非泛型链接目标缺失 0，
  `__` 泛型链接目标缺失 0）。**未做全量**。
- `tools/nav-section-index.mjs` +192/−34 的改动本身：**未做代码审查**
  （我只从产物侧发现 §2.2 的症状，没看它为什么写重了）。
- U+FFFD 的正确原字：**6 处里 3 处未判**，原因见 §5.1，禁止用 FFFD 个数反推。