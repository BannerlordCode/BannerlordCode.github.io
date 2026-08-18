---
title: "AiBehavior"
description: "地图 AI 状态机的枚举：MobileParty（通过 MobilePartyAI / PartyBase.Ai）的 DefaultBehavior、ShortTermBehavior、TargetParty / TargetSettlement 等所取的目标类型，决定该方在地图上是劫掠、围城、交战、守卫还是巡逻等行动。"
---

# AiBehavior

**命名空间：** TaleWorlds.CampaignSystem.Party
**模块：** TaleWorlds.CampaignSystem
**类型：** public enum AiBehavior
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/AiBehavior.cs

## 概述

`AiBehavior` 是战役 AI 用来描述“一个 [MobileParty](../MobileParty) 当前想做什么”的枚举。它不持有任何状态，只是把“目标类型”与 `MobilePartyAI`（即 `PartyBase.Ai`）上的目标字段（如 `TargetSettlement`、`TargetParty`、`TargetPosition`）绑定的约定。地图 AI 的整套决策流程——[AiMilitaryBehavior](../AiMilitaryBehavior)、[AiEngagePartyBehavior](../AiEngagePartyBehavior)、[AiArmyMemberBehavior](../AiArmyMemberBehavior) 产出候选、[AiPartyThinkBehavior](../AiPartyThinkBehavior) 汇总并写入——最终都落到一个 `AiBehavior` 值上，再由 [SetPartyAiAction](../../campaign-ext/SetPartyAiAction) 把它翻译成具体的移动/行动指令。

## 心智模型

把它当成一张“意图标签表”：每个 [MobileParty](../MobileParty) 在任意时刻都有两种 AI 状态——长期的 `DefaultBehavior`（`PartyBase.Ai.DefaultBehavior`）和短期的 `ShortTermBehavior`（`PartyBase.Ai.ShortTermBehavior`）。前者由 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 在每个思考周期写入，后者由 [MobilePartyAI](../MobilePartyAi) 在遭遇/突发事件时临时覆盖。`AiBehavior` 枚举本身没有生命周期、不序列化、也不被任何 Behavior 持有——它只是这些状态字段的类型。注意它定义在 `TaleWorlds.CampaignSystem.Party` 命名空间（与 [MobilePartyAI](../MobilePartyAi) 同层），而消费它的几个 `*Behavior` 类在 `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors` 命名空间。枚举值 `NumAiBehaviors` 仅是哨兵/计数项，不代表任何真实意图，比较或切换时应排除它。

## 何时使用 / 何时不要使用

- **使用**：读取或判定某个方的意图时（例如 `party.DefaultBehavior == AiBehavior.RaidSettlement`），或想枚举/切换所有意图类型时。它是只读的标签，可以直接比较、存入 [AIBehaviorData](../AIBehaviorData)、或作为 `switch` 分支。
- **不要使用**：不要试图“设置”这个枚举来指挥一方行动——直接给 `party.DefaultBehavior` 赋值是错误的访问层，既不会触发移动也不会刷新短行为。要改变 AI 意图必须走 [MobilePartyAI](../MobilePartyAi) 的 `SetMoveXxx`/`SetShortTermBehavior` 系列，或经由 [SetPartyAiAction](../../campaign-ext/SetPartyAiAction)（这正是 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 落地的路径）。也不要把它当作存档字段或行为 ID 持久化。

## 依赖图

上游类型与系统：

- [MobileParty](../MobileParty) —— 持有 `DefaultBehavior` / `ShortTermBehavior` 状态字段的载体。
- [MobilePartyAI](../MobilePartyAi)（即 `PartyBase.Ai`）—— 真正读写 `DefaultBehavior` / `ShortTermBehavior` / `TargetSettlement` / `TargetParty` 的 AI 控制器，状态机逻辑在此。
- [PartyBase](../PartyBase) —— `Ai` 属性的定义处，是访问 [MobilePartyAI](../MobilePartyAi) 的入口。

下游与协同系统（写入 / 读取方）：

- [AiMilitaryBehavior](../AiMilitaryBehavior) —— 产出 `DefendSettlement` / `BesiegeSettlement` / `RaidSettlement` 候选。
- [AiEngagePartyBehavior](../AiEngagePartyBehavior) —— 产出 `GoAroundParty`（用于截击/交战敌方 [MobileParty](../MobileParty)）。
- [AiArmyMemberBehavior](../AiArmyMemberBehavior) —— 产出 `EscortParty`（军团成员追赶领袖）。
- [AiPartyThinkBehavior](../AiPartyThinkBehavior) —— 汇总所有候选 [AIBehaviorData](../AIBehaviorData) 并据其调用 [SetPartyAiAction](../../campaign-ext/SetPartyAiAction) 落地。
- [AIBehaviorData](../AIBehaviorData) —— 候选意图的数据载体，其 `AiBehavior` 字段即本枚举值。
- [SetPartyAiAction](../../campaign-ext/SetPartyAiAction) —— 把枚举值翻译成具体移动指令的工厂。
- [Army](../Army) —— `ArmyType`（Besieger / Raider / Defender / Patrolling）与军事类 `AiBehavior` 一一对应。

## 风险

- **误用为写入入口**：`AiBehavior` 只是枚举，给 `PartyBase.Ai.DefaultBehavior` 直接赋枚举值不会启动任何移动或刷新短行为；必须经 `SetMoveXxx` / [SetPartyAiAction](../../campaign-ext/SetPartyAiAction)。
- **把 `NumAiBehaviors` 当真实意图**：它只是计数哨兵，出现在 `switch` 或比较里会导致无意义分支或越界。
- **枚举值与目标字段脱节**：仅看 `DefaultBehavior == RaidSettlement` 不够，真正目标在 `TargetSettlement`；只读枚举不读目标字段会拿到“意图但没有对象”。`ShortTermBehavior` 与 `DefaultBehavior` 可能不同（例如短期交战、长期仍守卫），判定时要分清两层。
- **在 Mission/战斗层比较地图意图**：本枚举只存在于战役层；战场里没有“地图 DefaultBehavior”的概念，跨层误用会读到空或陈旧状态。

## 成员说明

### 意图枚举值（按用途分组）

- **移动 / 驻留类**
  - **`Hold`** —— 原地停留（地图指令 `SetMoveModeHold`）。`AiPartyThinkBehavior` 在方刚创建或决策阈值过低时使用；也常作为“尚未决定”的占位。
  - **`None`** —— 无明确意图（区别于 `Hold` 的主动停留）。被 `AiPartyThinkBehavior` 用作“未选中任何候选”的初始值。
  - **`GoToSettlement`** —— 前往某个定居点（目标 `TargetSettlement`）。访问、贸易、补给等通用移动。
  - **`GoToPoint`** —— 前往地图坐标点（目标 `TargetPosition`）。
  - **`MoveToNearestLandOrPort`** —— 前往最近陆地/港口（ naval 脱困用）。
  - **`PatrolAroundPoint` / `PatrolAroundSettlement`** —— 在某个点/定居点周边巡逻（目标 `TargetPosition` 或 `TargetSettlement`）。由巡逻类行为驱动。

- **军事 / 攻防类**
  - **`RaidSettlement`** —— 劫掠村庄（目标 `TargetSettlement`，须为 [Village](../Village)）。来自 [AiMilitaryBehavior](../AiMilitaryBehavior)。
  - **`BesiegeSettlement`** —— 围攻要塞（目标 `TargetSettlement`，须为 [Town](../Town)/城堡）。来自 [AiMilitaryBehavior](../AiMilitaryBehavior)。
  - **`AssaultSettlement`** —— 强攻（在围城期间的攻城战的延伸意图）。
  - **`DefendSettlement`** —— 守卫定居点（目标 `TargetSettlement`）。来自 [AiMilitaryBehavior](../AiMilitaryBehavior) 的 Defender 任务。

- **交战 / 互动类**
  - **`EngageParty`** —— 主动交战某方（目标 `TargetParty` / `ShortTermTargetParty`）。通常由遭遇逻辑或 [MobilePartyAI](../MobilePartyAi) 在短行为层设置。
  - **`GoAroundParty`** —— 绕开/截击某方（目标 `TargetParty`）。来自 [AiEngagePartyBehavior](../AiEngagePartyBehavior)。
  - **`EscortParty`** —— 护送/跟随某方（目标 `TargetParty`）。来自 [AiArmyMemberBehavior](../AiArmyMemberBehavior)（跟随军团领袖）或编队逻辑。
  - **`JoinParty`** —— 加入某方（合并/附庸）。
  - **`FleeToPoint` / `FleeToGate` / `FleeToParty`** —— 逃离到坐标点 / 城门 / 某方（撤退行为，来自 [MobilePartyAI](../MobilePartyAi) 的 flee 逻辑）。

- **其它 / 哨兵**
  - **`DoOperation`** —— 执行某个地图操作（如采集、特殊任务）。
  - **`NumAiBehaviors`** —— 仅作枚举计数哨兵，不代表任何真实意图，不要在逻辑中使用。

## 示例

读取并区分一个方在当前思考周期的两层意图：

```csharp
MobileParty party = MobileParty.MainParty;
AiBehavior longTerm = party.DefaultBehavior;
AiBehavior shortTerm = party.ShortTermBehavior;

if (longTerm == AiBehavior.RaidSettlement && party.TargetSettlement != null)
{
    Settlement raidTarget = party.TargetSettlement;
}
if (shortTerm == AiBehavior.EngageParty && party.ShortTermTargetParty != null)
{
    MobileParty engageTarget = party.ShortTermTargetParty;
}
```

依据枚举值判定军事类意图并取出目标定居点（与 [AiMilitaryBehavior](../AiMilitaryBehavior) 产出对齐）：

```csharp
switch (party.DefaultBehavior)
{
    case AiBehavior.BesiegeSettlement:
    case AiBehavior.RaidSettlement:
    case AiBehavior.DefendSettlement:
        Settlement target = party.TargetSettlement;
        break;
    case AiBehavior.GoAroundParty:
    case AiBehavior.EngageParty:
    case AiBehavior.EscortParty:
        MobileParty other = party.TargetParty;
        break;
}
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[MobileParty](../MobileParty) · [MobilePartyAI](../MobilePartyAi) · [PartyBase](../PartyBase) · [AiMilitaryBehavior](../AiMilitaryBehavior) · [AiPartyThinkBehavior](../AiPartyThinkBehavior) · [AiEngagePartyBehavior](../AiEngagePartyBehavior) · [AiArmyMemberBehavior](../AiArmyMemberBehavior) · [AIBehaviorData](../AIBehaviorData) · [SetPartyAiAction](../../campaign-ext/SetPartyAiAction) · [Army](../Army) · [Settlement](../Settlement) · [Town](../Town) · [Village](../Village)
