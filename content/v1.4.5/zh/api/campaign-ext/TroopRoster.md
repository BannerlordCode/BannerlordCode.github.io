---
title: "TroopRoster"
description: "每支部队（MobileParty / Settlement）的成员名册与囚犯名册：以 CharacterObject 为键持有 TroopRosterElement，负责增删兵员、统计人数与战力输入，并承载英雄在队/在押的状态回调。"
---
# TroopRoster

**Namespace:** TaleWorlds.CampaignSystem.Roster
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TroopRoster : ISerializableObject`
**Base:** `ISerializableObject`
**File:** `TaleWorlds.CampaignSystem/Roster/TroopRoster.cs`

## 概述

`TroopRoster` 是**一份以兵种（`CharacterObject`）为键的兵员名册**：它内部用 `TroopRosterElement[]` 数组保存「某 CharacterObject 有多少兵、多少伤员、多少经验」，对外暴露增删、计数、总计与逐元素访问。一支部队有两份 `TroopRoster`：

- `PartyBase.MemberRoster` —— 成员（含英雄领主、普通兵、流浪者）。
- `PartyBase.PrisonRoster` —— 囚犯。

它本身**不包含战力数值**，也不**自动升级**兵员：战力由 `PartyBase.EstimatedStrength`（经 `PartyStrengthModel` 计算）从名册派生，升级由 `PartyUpgraderCampaignBehavior` + `PartyTroopUpgradeModel` 驱动。把它理解成「一个有序的、带缓存统计的兵员容器」即可。

## 心智模型

把 `TroopRoster` 当作**「部队花名册」**：

- **生命周期**：名册随 `PartyBase` 一起创建（`new TroopRoster(this)`），几乎不会由 mod 自己 `new`。`OwnerParty` 在构造时绑定，之后不可改（只有私有 setter）。
- **谁持有它**：`MobileParty.Party.MemberRoster` / `PrisonRoster`，或 `Settlement` 的驻军/囚犯名册。`TroopRoster` 只是数据，它不知道自己属于谁之外的任何世界状态。
- **所在层**：Campaign 层（战役数据），不是 Mission（战斗场景）。战斗里阵亡/负伤是通过 `PlayerEncounter` / `MapEvent` 在战斗结束后回写名册，而不是在场景里直接改 `TroopRoster`。
- **增删的真相**：所有人数变化最终都走 `AddToCounts` → `AddToCountsAtIndex`，它**同时维护缓存总计**（`_totalRegulars` 等）并触发 `OwnerParty` 回调（`OnHeroAdded` / `OnHeroRemoved` / `OnRosterSizeChanged` / `OnXpChanged`）。`VersionNo` 每次变化都会 +1，并联动 `MobileParty.UpdateVersionNo()`。

### 何时用

- 查询某部队成员/囚犯数量、健康/伤员分布：`TotalManCount`、`TotalWounded`、`GetTroopCount(c)`。
- 直接增减普通兵员：`roster.AddToCounts(character, n, ...)` / `roster.RemoveTroop(character, n)`。
- 合并两份名册：`roster.Add(otherRoster)`。
- 需要一份**临时、不归属任何部队**的容器做计算：`TroopRoster.CreateDummyTroopRoster()`（`OwnerParty == null`，增删不会触发任何部队回调）。

### 何时不要用

- **不要**对英雄直接用 `SetElementNumber` / `SetElementWoundedNumber` / `SetElementXp` 去改人数或伤情——这三个 setter 是「裸写」，不维护缓存总计，也不触发 `OwnerParty` 回调，会悄悄破坏 `TotalRegulars` 等统计并让英雄归属状态失同步。改用 `AddToCounts` / `RemoveTroop`，英雄入队/出队请走 `AddHeroToPartyAction.Apply` / `TakePrisonerAction.Apply`。
- **不要**自己 `new TroopRoster()` 再赋给某个 `PartyBase.MemberRoster` 来「替换」名册——`OwnerParty` 为 null 会让后续回调全失效；应通过 `Add` / `Clear` / `AddToCounts` 在既有名册上操作。
- **不要**跨部队共享同一个 `TroopRoster` 实例——`OwnerParty` 是单一绑定，回调会指向错误的一方。
- **不要**指望 `GetElementCopyAtIndex` 返回的对象能写回名册——它是值拷贝（见下「值拷贝陷阱」）。

## 如何获取 TroopRoster

```csharp
// 主队的成员名册（MobileParty.MemberRoster 是 Party.MemberRoster 的快捷属性）
TroopRoster members = MobileParty.MainParty.MemberRoster;

// 同一支部队的囚犯名册
TroopRoster prisoners = MobileParty.MainParty.PrisonRoster;

// 据点驻军 / 囚犯（Settlement 的 Party 同样持有两个名册）
TroopRoster garrison = Settlement.CurrentSettlement.Party.MemberRoster;

// 一份临时、无归属的名册（不触发任何回调，常用于计算或模板）
TroopRoster temp = TroopRoster.CreateDummyTroopRoster();
```

## 成员说明（按主题）

> 约定：元素数量（兵数）指 `data[i].Number`；`Count` 是「不同 CharacterObject 的条目数」，不是总人数。

### 增删兵员

#### `public int AddToCounts(CharacterObject character, int count, bool insertAtFront = false, int woundedCount = 0, int xpChange = 0, bool removeDepleted = true, int index = -1)`
**用途**：名册增删的核心入口。加 `count` 个兵、其中 `woundedCount` 个伤员、并附带 `xpChange` 经验。
**副作用**：维护缓存总计（普通兵进 `_totalRegulars`，英雄进 `_totalHeroes`）；英雄增减会触发 `OwnerParty.OnHeroAdded` / `OnHeroRemoved` 与 `OnRosterSizeChanged`；任何数量变化都会 `UpdateVersion()`（进而 `MobileParty.UpdateVersionNo()`）。若条目人数归零且 `removeDepleted == true`，该兵种条目被移除。
**调用时机**：随时随地改普通兵员；加英雄也走它（但更推荐 `AddHeroToPartyAction.Apply` 以保证英雄侧状态一致）。返回该兵种在 `data` 中的索引。

#### `public void RemoveTroop(CharacterObject troop, int numberToRemove = 1, UniqueTroopDescriptor troopSeed = default, int xp = 0)`
**用途**：从名册移除若干兵员（含普通兵与英雄）。
**副作用**：对非英雄会回退 `xp`（即减经验）；**在 `PlayerEncounter.CurrentBattleSimulation != null` 且非英雄时，`removeDepleted` 被强制为 `false`**——即战斗模拟期间普通兵只减 `Number` 不立即压缩条目，等模拟结束再统一整理。这是故意的「延迟清理」，若在战斗模拟中反复 `RemoveTroop` 到 0 却不触发压缩，名册里会残留 `Number==0` 的条目。
**调用时机**：日常减员、释放囚犯、战后结算。

#### `public void WoundTroop(CharacterObject troop, int numberToWound = 1, UniqueTroopDescriptor troopSeed = default)`
**用途**：把若干普通兵标记为伤员（底层 `AddToCountsAtIndex(index, 0, numberToWound)`）。
**陷阱**：英雄的 `WoundedNumber` 由 `Character.HeroObject.IsWounded` 派生（`TroopRosterElement` 的 getter 对英雄直接返回 0 或 1），所以 `WoundTroop` 对**英雄无效**。要让英雄负伤请走 `Hero.MakeWounded(...)`，它会经 `OnHeroHealthStatusChanged` 回写名册的 `_totalWoundedHeroes`。

#### `public void Add(TroopRoster troopRoster)` / `public void Add(TroopRosterElement element)`
**用途**：把另一份名册（或单个元素）并入当前名册。逐个调用 `AddToCounts`，因此会正常维护缓存与回调。
**注意**：`Add` 用的是**当前**名册的 `OwnerParty`，被并入的名册归属被忽略。

#### `public void Clear()`
**用途**：移除所有条目。逐条走 `AddToCountsAtIndex(负数)`，因此会为每个英雄触发 `OnHeroRemoved` 回调。
**调用时机**：解散部队、重置名册前（注意会触发归属回调，可能改动英雄世界状态）。

#### `public ICollection<TroopRosterElement> RemoveIf(Predicate<TroopRosterElement> match)`
**用途**：按条件批量移除，返回被移除元素的**拷贝列表**。从末尾向前遍历，对每个命中的条目调用 `AddToCountsAtIndex` 反向冲减，因此会正常维护统计与回调。

#### `public void RemoveZeroCounts()`
**用途**：压缩 `data` 数组，丢弃所有 `Number == 0` 的条目。
**风险**：它直接搬移数组并只 `UpdateVersion()`，**不触发 `OwnerParty.OnHeroRemoved`**。若用它清掉一个人数归零的英雄条目，英雄的 `PartyBelongedTo` 等归属状态不会被通知，造成失同步。移除英雄务必用 `RemoveTroop`。

### 计数与总计（只读属性）

| 属性 | 含义 | 来源 |
|------|------|------|
| `Count` | 不同 CharacterObject 的条目数（不是总人数） | `_count` |
| `TotalRegulars` | 所有非英雄兵员的总数 | 缓存，由增删维护 |
| `TotalHeroes` | 名册中英雄条目数（计条目，非计兵数） | 缓存 |
| `TotalWoundedRegulars` / `TotalWoundedHeroes` | 普通兵 / 英雄伤员数 | 缓存 |
| `TotalWounded` | `TotalWoundedRegulars + TotalWoundedHeroes` | 派生 |
| `TotalManCount` | `TotalRegulars + TotalHeroes`（部队总人数） | 派生 |
| `TotalHealthyCount` | `TotalManCount - TotalWounded` | 派生 |
| `VersionNo` | 每次增删/改经验自增的版本号；联动 `MobileParty.UpdateVersionNo()` | `CachedData` |

> 这些总计是**缓存字段**，仅在 `AddToCountsAtIndex` / `OnHeroHealthStatusChanged` / `CalculateCachedStatsOnLoad` 时刷新。若你用 `SetElementNumber` 等裸 setter 改了人数，这些属性会失准（见风险段）。

### 元素访问与查询

#### `public MBList<TroopRosterElement> GetTroopRoster()`
**用途**：返回当前所有元素的（缓存）列表，便于 `foreach` 遍历。
**陷阱**：返回的是按 `VersionNo` 缓存的 `MBList`。若你**持有这个引用**之后名册发生增删，`VersionNo` 变化会让下一次 `GetTroopRoster()` 重建列表，但你手里那份旧引用仍是旧快照。遍历请在每次需要时现取，不要长期缓存。

#### `public TroopRosterElement GetElementCopyAtIndex(int index)`
**用途**：按索引取元素。
**值拷贝陷阱**：`TroopRosterElement` 是 `struct`，这里按值返回。下面这样写**不会**改变名册：
```csharp
TroopRosterElement e = roster.GetElementCopyAtIndex(i);
e.Number = 5;      // 只改了局部副本，名册不变！
e.Xp += 100;       // 同上，无效
```
要真正修改请用 `AddToCounts` / `SetElementNumber` / `SetElementXp`。

#### `public CharacterObject GetCharacterAtIndex(int index)`
返回索引处兵种模板；越界抛 `IndexOutOfRangeException`。

#### `public int GetElementNumber(int index)` / `GetElementNumber(CharacterObject character)`
返回某条目 / 某兵种的兵数（`0` 表示不存在）。

#### `public int GetElementWoundedNumber(int index)` / `GetTroopCount(CharacterObject troop)` / `Contains(CharacterObject character)` / `FindIndexOfTroop(CharacterObject character)`
常规查询：`GetTroopCount` 是 `FindIndexOfTroop` + 读 `Number` 的便捷封装；`Contains` / `FindIndexOfTroop` 用 `==` 比较 `CharacterObject` 引用。

#### `public int Sum(Func<TroopRosterElement, int> selector)`
对全部元素求和的便捷函数，例如 `roster.Sum(e => e.Number)` 等于 `TotalManCount`。

### 经验、版本与复制

#### `public void AddXpToTroop(CharacterObject troop, int xpAmount)` / `AddXpToTroopAtIndex(int index, int xpAmount)`
**用途**：给某兵种累加经验。底层经 `SetElementXp`，会触发 `OwnerParty.OnXpChanged`。
**注意**：它**只写经验，不触发升级**。兵员升级到上一阶由 `PartyUpgraderCampaignBehavior` 在每日 tick 中读取经验、经 `PartyTroopUpgradeModel` 决定并调用 `AddToCounts` 完成——`TroopRoster` 本身没有「自动升级」逻辑。

#### `public void SetElementXp(int index, int number)` / `SetElementNumber(int index, int number)` / `SetElementWoundedNumber(int index, int number)`
**用途**：底层直接写元素的 `Xp` / `Number` / `WoundedNumber`。
**风险（重要）**：这三个 setter **只改数据 + `UpdateVersion()`，不维护缓存总计，也不触发 `OwnerParty` 回调**。用 `SetElementNumber` 改完人数后，`TotalRegulars` / `TotalHeroes` 等会与实际不符，且英雄的入队/出队回调不会触发，直到下次读档 `CalculateCachedStatsOnLoad` 才被整体重算。除非你在做底层/序列化相关操作，否则请一律用 `AddToCounts` / `RemoveTroop`。

#### `public void UpdateVersion()`
每次增删/改经验后自动调用；使 `VersionNo++` 并联动 `MobileParty.UpdateVersionNo()`，从而让依赖名册的缓存（兵力、工资、分层人数等）失效重建。

#### `public void OnHeroHealthStatusChanged(Hero hero)`
英雄负伤状态变化时由英雄系统回调：刷新 `_totalWoundedHeroes`。普通兵的伤员变化不走这里，而在 `AddToCountsAtIndex` 内维护。

#### `public TroopRoster CloneRosterData()`
**用途**：复制一份 `OwnerParty == null` 的新名册，仅含 `Character` / `Number` / `WoundedNumber`（**不含经验**）。适合做快照或合并前的暂存。

#### `public FlattenedTroopRoster ToFlattenedRoster()`
返回把每个元素展开成「单兵」的 `FlattenedTroopRoster`（用于模板/UI/招募表）。

#### `public static TroopRoster CreateDummyTroopRoster()`
返回一个 `OwnerParty == null` 的空名册。适合临时计算容器。

#### `public static void CalculateCachedStatsOnLoad()`
**用途**：读档后由存档系统统一调用，**仅一次**：遍历本会话所有刚反序列化的 `TroopRoster`，重算 `_totalRegulars` / `_totalHeroes` / 伤员等缓存（序列化只存 `data` + `_count` + `VersionNo`，总计不落盘）。mod 一般无需主动调用；但若你自己反序列化/构造名册并依赖 `TotalRegulars` 等，必须记住这些字段在载入流水线的该步骤之前是 0/过期值。

#### `public static bool RostersAreIdentical(TroopRoster a, TroopRoster b)`
比较 `Count` / `OwnerParty` / `VersionNo` 以及逐条 `Character` + `Number` 是否一致（用于存档校验/测试）。

## 最小真实示例

### 示例 1：给主队补充新兵并附经验

```csharp
MobileParty party = MobileParty.MainParty;
TroopRoster roster = party.MemberRoster; // 等同于 party.Party.MemberRoster

// 通过 MBObjectManager 拿到一个真实兵种模板（以 "looter" 为例）
CharacterObject recruit = MBObjectManager.Instance.GetObject<CharacterObject>("looter");
if (recruit != null)
{
    // 加 10 人，附带 150 经验；insertAtFront=false 表示追加到队尾
    roster.AddToCounts(recruit, 10, insertAtFront: false, woundedCount: 0, xpChange: 150);

    int now = roster.GetTroopCount(recruit);      // 现在的人数
    int xp  = roster.GetElementXp(recruit);        // 该兵种累计经验
    InformationManager.DisplayMessage(
        new InformationMessage($"{recruit.Name}：{now} 人，经验 {xp}"));
}
```

### 示例 2：遍历成员统计，并释放全部某类囚犯

```csharp
// 统计主队健康/伤员分布
TroopRoster members = MobileParty.MainParty.MemberRoster;
int total    = members.TotalManCount;     // 总人数
int wounded  = members.TotalWounded;      // 伤员总数
int healthy  = members.TotalHealthyCount; // 健康人数

// 遍历每个兵种（注意 GetTroopRoster 返回的是值拷贝列表，改局部变量不影响名册）
foreach (TroopRosterElement element in members.GetTroopRoster())
{
    CharacterObject c = element.Character;
    int n  = element.Number; // 兵数（值拷贝）
    int xp = element.Xp;     // 经验（值拷贝）
}

// 释放主队囚犯名册里的全部某一类囚犯
TroopRoster prisoners = MobileParty.MainParty.PrisonRoster;
CharacterObject prisoner = MBObjectManager.Instance.GetObject<CharacterObject>("prisoner_template");
if (prisoner != null && prisoners.Contains(prisoner))
{
    // 移除该类囚犯的全部数量；英雄囚犯建议改用 TakePrisonerAction 的反向流程
    prisoners.RemoveTroop(prisoner, prisoners.GetTroopCount(prisoner));
}
```

## 依赖图（可点击）

**上游（TroopRoster 依赖）**

- [CharacterObject](../../campaign/CharacterObject/) —— 每个条目的兵种模板（技能、装备、阶层）。
- [Hero](../../campaign/Hero/) —— 英雄是特殊的 `CharacterObject`，以条目形式存放在名册中。
- [PartyBase](../../campaign/PartyBase/) —— `OwnerParty`；持有 `MemberRoster` 与 `PrisonRoster`，并接收增删回调。
- [TroopRosterElement](../TroopRosterElement/) —— 单条「兵种→数量/伤员/经验」记录（值类型）。
- [UniqueTroopDescriptor](../../core-extra/UniqueTroopDescriptor/) —— `RemoveTroop` / `WoundTroop` 用于标识具体英雄个体。

**下游（依赖 TroopRoster）**

- [PartyBase](../../campaign/PartyBase/) 的 `EstimatedStrength` —— 由名册经 `PartyStrengthModel` 计算战力。
- [PartyWageModel](../PartyWageModel/) —— 由名册算工资（`MobileParty.TotalWage`）。
- [PartySizeLimitModel](../PartySizeLimitModel/) —— 队伍人数上限基于名册。
- [PartyHealingModel](../models/) —— 伤员恢复回写 `WoundTroop` / 缓存。
- [PartyTroopUpgradeModel](../PartyTroopUpgradeModel/) + [PartyUpgraderCampaignBehavior](../PartyUpgraderCampaignBehavior/) —— 读取经验完成升级。
- 战斗/遭遇（`PlayerEncounter.CurrentBattleSimulation`）—— 影响 `RemoveTroop` 的 `removeDepleted` 行为。

**相关 Action（优先用它们改英雄/囚犯）**

- [AddHeroToPartyAction](../AddHeroToPartyAction/) —— 把英雄加入部队（正确触发回调）。
- [TakePrisonerAction](../TakePrisonerAction/) —— 抓俘入 `PrisonRoster`。
- [RecruitPrisonersCampaignBehavior](../RecruitPrisonersCampaignBehavior/) —— 囚犯招募。

**同级（Sibling）**

- [ItemRoster](../ItemRoster/) —— 「物品版名册」，结构与 TroopRoster 平行。
- [FlattenedTroopRoster](../FlattenedTroopRoster/) —— 名册的扁平化单兵视图。

## 风险段（可能导致崩溃 / 坏档）

1. **经验在存读档后会丢失**：`TroopRosterElement.SerializeTo` 写入 4 个字段（`Character` / `_number` / `_woundedNumber` / `_xp`），但 `DeserializeFrom` 只读回前 3 个、**没有读 `_xp`**。因此部队名册里的兵员经验在每次存档→读档后会归零（v1.3.15 与 v1.4.5 行为一致）。不要把「经验」当作可跨存读档持久的状态来依赖；若需持久化升级进度，应在 mod 自己管理的数据里保存。

2. **`SetElementNumber` / `SetElementWoundedNumber` / `SetElementXp` 会破坏缓存总计**：三者是裸写，不维护 `_totalRegulars` / `_totalHeroes` / 伤员统计，也不触发 `OwnerParty` 回调。用它们改人数后，`TotalManCount` 等会与实际不符、英雄归属状态失同步，且要等到下次 `CalculateCachedStatsOnLoad`（即下次读档）才会被整体纠正。一律改用 `AddToCounts` / `RemoveTroop`；英雄增减走 `AddHeroToPartyAction` / `TakePrisonerAction`。

3. **`GetElementCopyAtIndex` 是值拷贝**：`TroopRosterElement` 为 `struct`，取到的是副本，对它赋值不会改变名册（见上文示例）。要改数据必须走 `AddToCounts` / `SetElement*`。

4. **`RemoveZeroCounts` 不发回调**：它压缩数组时跳过 `OnHeroRemoved`。用它清掉人数归零的英雄条目会让英雄的 `PartyBelongedTo` 等状态残留。移除英雄用 `RemoveTroop`。

5. **战斗模拟期间 `RemoveTroop` 不立即压缩**：当 `PlayerEncounter.CurrentBattleSimulation != null` 且目标非英雄时，`removeDepleted` 被强制 `false`，条目只减 `Number` 不移除。战斗结算逻辑依赖这一延迟清理；不要在战斗模拟进行中假设「人数减到 0 的兵种已从名册消失」。

6. **英雄伤员不能靠 `WoundTroop`**：英雄的伤员数由 `HeroObject.IsWounded` 派生，对英雄调用 `WoundTroop` 无效。让英雄负伤走 `Hero.MakeWounded(...)`，它会经 `OnHeroHealthStatusChanged` 正确更新 `_totalWoundedHeroes`。

7. **不要跨部队共享 / 手动 `new` 替换名册**：`OwnerParty` 构造后不可改，共享实例会让增删回调指向错误的 `PartyBase`；手动 `new TroopRoster()` 再赋给 `PartyBase.MemberRoster` 会使 `OwnerParty == null`，后续所有回调失效。

8. **缓存列表不要长期持有**：`GetTroopRoster()` 返回按 `VersionNo` 缓存的 `MBList`，名册变化后旧引用成过期快照。每次遍历现取。

## 跨版本提示

- **v1.3.15 / v1.3.0**：核心 API（`AddToCounts`、`RemoveTroop`、`WoundTroop`、`AddXpToTroop`、`CloneRosterData`、`CreateDummyTroopRoster`、`CalculateCachedStatsOnLoad` 等签名与语义）与 v1.4.5 基本一致；上述「经验存读档丢失」的序列化不对称在两版中均存在。
- **v1.4.5（权威源）**：以本页所述为准；若写跨版本 mod，避免依赖 `SetElement*` 系列 setter 的正确性，并假定经验无法跨存读档保留。

## 参见

- ↑ 父级：[campaign-ext 索引](../)
- ↔ 同级：[ItemRoster](../ItemRoster/) · [TroopRosterElement](../TroopRosterElement/) · [FlattenedTroopRoster](../FlattenedTroopRoster/)
- 上游枢纽：[PartyBase](../../campaign/PartyBase/) · [CharacterObject](../../campaign/CharacterObject/) · [Hero](../../campaign/Hero/) · [MobileParty](../../campaign/MobileParty/)
- 相关模型/行为：[PartySizeLimitModel](../PartySizeLimitModel/) · [PartyWageModel](../PartyWageModel/) · [PartyHealingModel](../models/) · [PartyTroopUpgradeModel](../PartyTroopUpgradeModel/) · [PartyUpgraderCampaignBehavior](../PartyUpgraderCampaignBehavior/)
- 相关 Action：[AddHeroToPartyAction](../AddHeroToPartyAction/) · [TakePrisonerAction](../TakePrisonerAction/) · [RecruitPrisonersCampaignBehavior](../RecruitPrisonersCampaignBehavior/)
