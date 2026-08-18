---
title: "AIBehaviorData"
description: "每支 MobileParty 在一次 AI 思考周期中的候选意图结构：打包目标点（IMapPoint 或坐标）、意图类型 AiBehavior、导航方式、是否集结军团、是否从/向港口出发，配合得分被 Ai*Behavior 产出、由 AiPartyThinkBehavior 汇总后落地。"
---

# AIBehaviorData

**命名空间：** TaleWorlds.CampaignSystem
**模块：** TaleWorlds.CampaignSystem
**类型：** public struct AIBehaviorData : IEquatable<AIBehaviorData>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/AIBehaviorData.cs

## 概述

`AIBehaviorData` 是地图 AI 决策流水线的“候选意图数据包”。每个 [AiMilitaryBehavior](../AiMilitaryBehavior)、[AiEngagePartyBehavior](../AiEngagePartyBehavior)、[AiArmyMemberBehavior](../AiArmyMemberBehavior) 在 `AiHourlyTick` 中算出“想去哪、想干嘛”后，就构造一个 `AIBehaviorData` 并通过 `PartyThinkParams.AddBehaviorScore` 连同得分一起提交；[AiPartyThinkBehavior](../AiPartyThinkBehavior) 随后从所有候选里挑得分最高的那个，据其 `AiBehavior` 与 `Party`/`Position` 调用 [SetPartyAiAction](../../campaign-ext/SetPartyAiAction) 落地。它是不可变的轻量 `struct`，自身不序列化（字段全为值/接口引用，由包含它的 `PartyThinkParams` 随方存档）。

## 心智模型

把它当成“一个 AI 候选票”：包含**意图**（`AiBehavior`）、**目标**（`Party` 为 [IMapPoint](../IMapPoint)，或 `Position` 为 [CampaignVec2](../CampaignVec2)——两者二选一，由构造函数决定）、**导航**（`NavigationType`、`IsFromPort`、`IsTargetingPort`）、以及**是否要集结军团**（`WillGatherArmy`）。它不是状态机、不持有逻辑；三个 AI 行为各产各的票，[AiPartyThinkBehavior](../AiPartyThinkBehavior) 负责计票。静态字段 `Invalid` 是“废票”哨兵（意图 `None`、无目标、无导航），用于初始化“尚未选中任何候选”。因为实现了 `IEquatable<AIBehaviorData>` 与 `==`/`!=`，比较时按全部字段（除 `Position` 仅在两方都有目标时参与）判定相等——注意当 `Party` 为 null 时只比较意图/导航/港口标志，`Position` 不参与（见风险）。

## 何时使用 / 何时不要使用

- **使用**：在自定义 `AiHourlyTickEvent` 处理器中，用两个构造函数之一构造候选并 `PartyThinkParams.AddBehaviorScore((data, score))`；比较/判定候选时用 `==`/`!=` 或 `Equals`，或读 `AIBehaviorData.Invalid` 判断“是否尚未选中”。
- **不要使用**：不要把它当作可写的“指令”直接赋给方——它只是候选，落地点在 [AiPartyThinkBehavior](../AiPartyThinkBehavior) + [SetPartyAiAction](../../campaign-ext/SetPartyAiAction)；直接改它的字段不会影响任何方。不要持久化对它自身的引用并跨战役持有（`Party` 指向的 [MobileParty](../MobileParty)/[Settlement](../Settlement) 会随读档失效）。

## 依赖图

上游类型与系统：

- [AiBehavior](../AiBehavior) —— 其 `AiBehavior` 字段即意图枚举。
- [IMapPoint](../IMapPoint) —— `Party` 字段的类型（[MobileParty](../MobileParty)、[Settlement](../Settlement) 等均实现它）。
- [CampaignVec2](../CampaignVec2) —— `Position` 字段的类型（用于“去坐标点”类意图）。
- [MobileParty](../MobileParty) —— `NavigationType` 字段来自 `MobileParty.NavigationType`；候选的 `Party` 常是某 [MobileParty](../MobileParty)。
- [NavigationType](../NavigationType) —— 导航方式枚举。

下游与协同系统（消费方）：

- [AiMilitaryBehavior](../AiMilitaryBehavior) / [AiEngagePartyBehavior](../AiEngagePartyBehavior) / [AiArmyMemberBehavior](../AiArmyMemberBehavior) —— 产出候选（分别产 `DefendSettlement`/`BesiegeSettlement`/`RaidSettlement`、`GoAroundParty`、`EscortParty`）。
- [AiPartyThinkBehavior](../AiPartyThinkBehavior) —— 读 `AIBehaviorScores`、用 `==` 区分 `Invalid`、据其落地。
- [PartyThinkParams](../PartyThinkParams) —— 通过 `AddBehaviorScore((AIBehaviorData, float))` 收集候选与得分。
- [SetPartyAiAction](../../campaign-ext/SetPartyAiAction) —— 据候选的 `AiBehavior` + `Party`/`Position` + 港口标志翻译成移动指令。
- [MobilePartyAI](../MobilePartyAi) —— 最终意图被写入方的 `DefaultBehavior` / `TargetSettlement` / `TargetParty`。

## 风险

- **`Party` 与 `Position` 二选一的语义**：构造时要么传 `IMapPoint`（此时 `Position = Zero`），要么传 `CampaignVec2`（此时 `Party = null`）。混用或在落地时读错字段会得到空目标。例如“去坐标点”类意图（`GoToPoint`）用的是 `Position`，而 `Party` 为 null。
- **相等比较忽略 `Party` 为 null 时的 `Position`**：`==` 运算符在 `Party` 相等（含都为 null）时才比较 `Position`；若两候选 `Party` 均为 null 但 `Position` 不同，仍可能被判等（取决于实现细节），用作字典键或去重时要小心。
- **不可变性 vs 引用目标失效**：结构是值类型，但 `Party` 是引用（[MobileParty](../MobileParty)/[Settlement](../Settlement)）。跨战役/读档后该引用指向旧对象；不要长期缓存候选并假定其 `Party` 仍存活。
- **`WillGatherArmy` 的含义**：仅标记“若采纳此候选则应尝试集结军团”，真正的 `Kingdom.CreateArmy` 由 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 在落地时执行；不要本结构自己调用。
- **`Invalid` 哨兵的 `NavigationType.None`**：`Invalid` 的导航类型为 `None`，若误把它当正常候选提交，[AiPartyThinkBehavior](../AiPartyThinkBehavior) 会因 `bestNavigationType == None` 而丢弃（不落地移动）。

## 成员说明

### 静态与字段

- **`Invalid`**（静态只读）
  - 用途：“废票”哨兵：意图 `None`、无目标、导航 `None`、不集结、不从/向港口。用于初始化“尚未选中任何候选”的状态。
  - 副作用：无。调用时机：[AiPartyThinkBehavior](../AiPartyThinkBehavior) 初始化最高分变量、以及比较“是否选中有效候选”时。

- **`Party`**（IMapPoint）
  - 用途：候选目标点（如目标定居点或目标敌方 [MobileParty](../MobileParty)）。与 `Position` 二选一。
  - 副作用：无。调用时机：由产出方构造、落地方（`SetPartyAiAction`）读取。

- **`Position`**（CampaignVec2）
  - 用途：当意图是“去坐标点”时使用的目标坐标；此时 `Party` 为 null。
  - 副作用：无。

- **`AiBehavior`**（[AiBehavior](../AiBehavior)）
  - 用途：本候选的意图类型（如 `RaidSettlement`、`GoAroundParty`、`EscortParty`）。
  - 副作用：无。

- **`WillGatherArmy`**（bool）
  - 用途：采纳此候选时是否应尝试集结军团（由 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 据此调 `Kingdom.CreateArmy`）。
  - 副作用：无。

- **`IsFromPort` / `IsTargetingPort`**（bool）
  - 用途：导航是否从港口出发 / 是否以港口为目标的标志，影响 [SetPartyAiAction](../../campaign-ext/SetPartyAiAction) 选择 naval 路径。
  - 副作用：无。

- **`NavigationType`**（[NavigationType](../NavigationType)）
  - 用途：到达目标应选的导航方式（Land / Naval / All / None）。为 `None` 时该候选不会被落地为移动。
  - 副作用：无。

### 构造函数

- **`AIBehaviorData(IMapPoint party, AiBehavior aiBehavior, MobileParty.NavigationType navigationType, bool willGatherArmy, bool isFromPort, bool isTargetingPort)`**
  - 用途：用“目标点”构造候选（如去某定居点/某方）。构造后 `Position = CampaignVec2.Zero`。
  - 副作用：无。调用时机：三个 AI 行为产出候选时（目标为 [Settlement](../Settlement)/[MobileParty](../MobileParty)）。

- **`AIBehaviorData(CampaignVec2 position, AiBehavior aiBehavior, MobileParty.NavigationType navigationType, bool willGatherArmy, bool isFromPort, bool isTargetingPort)`**
  - 用途：用“目标坐标”构造候选（如 `GoToPoint`/`PatrolAroundPoint`）。构造后 `Party = null`。
  - 副作用：无。调用时机：产出“去坐标点”类意图时。

### 相等性与哈希

- **`Equals(object)` / `Equals(AIBehaviorData other)` / `GetHashCode()` / `==` / `!=`**
  - 用途：按全部业务字段（意图、导航、港口标志、是否集结、`Party`、以及两方都有目标时的 `Position`）判定相等，供汇总时区分 `Invalid`、去重或做字典键。
  - 副作用：无。调用时机：[AiPartyThinkBehavior](../AiPartyThinkBehavior) 比较候选、以及任何需要判等的逻辑。

## 示例

构造一个“劫掠某村庄”的候选并提交给思考参数（这正是 [AiMilitaryBehavior](../AiMilitaryBehavior) 内部做法的精简版）：

```csharp
PartyThinkParams think = MobileParty.MainParty.ThinkParamsCache;
Settlement village = someVillage;
AIBehaviorData raidCandidate = new AIBehaviorData(
    village, AiBehavior.RaidSettlement,
    MobileParty.NavigationType.Default, willGatherArmy: false,
    isFromPort: false, isTargetingPort: false);
think.AddBehaviorScore((raidCandidate, 3.5f));
```

用 `Invalid` 哨兵判断某方在本周期是否已经选中了有效候选：

```csharp
AIBehaviorData best = AIBehaviorData.Invalid;
foreach (var score in MobileParty.MainParty.ThinkParamsCache.AIBehaviorScores)
{
    if (score.Item2 > 0f && score.Item1 != AIBehaviorData.Invalid)
    {
        best = score.Item1;
    }
}
if (best != AIBehaviorData.Invalid && best.AiBehavior == AiBehavior.EscortParty)
{
    MobileParty leader = best.Party as MobileParty;
}
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[AiBehavior](../AiBehavior) · [AiMilitaryBehavior](../AiMilitaryBehavior) · [AiPartyThinkBehavior](../AiPartyThinkBehavior) · [AiEngagePartyBehavior](../AiEngagePartyBehavior) · [AiArmyMemberBehavior](../AiArmyMemberBehavior) · [MobileParty](../MobileParty) · [MobilePartyAI](../MobilePartyAi) · [PartyThinkParams](../PartyThinkParams) · [SetPartyAiAction](../../campaign-ext/SetPartyAiAction) · [IMapPoint](../IMapPoint) · [CampaignVec2](../CampaignVec2) · [NavigationType](../NavigationType) · [Settlement](../Settlement)
