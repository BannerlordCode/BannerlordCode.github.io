---
title: "AiArmyMemberBehavior"
description: "军团成员聚合行为：在每次 AI 小时 tick 中为非领袖的军团成员计算“追赶/跟随军团领袖”的意愿得分（EscortParty 候选），并在围城开始时让被围定居点内的领主方原地待命，维持军团不散。"
---

# AiArmyMemberBehavior

**命名空间：** TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors
**模块：** TaleWorlds.CampaignSystem
**类型：** public class AiArmyMemberBehavior : CampaignBehaviorBase
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors/AiArmyMemberBehavior.cs

## 概述

`AiArmyMemberBehavior` 保证一支 [Army](../Army) 的“非领袖成员”会聚拢到领袖身旁。它在每次 `AiHourlyTick` 中，对非领袖的军团成员计算一个 `EscortParty`（跟随领袖）候选得分——得分高低取决于该成员离领袖的距离、食物是否充足、规模是否达到“征召入军”的阈值；若领袖当前被围且不可达，则给一个极低的“领袖不可达”保底分。最终是否真的去跟随，由 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 汇总裁决。此外它监听 `OnSiegeEventStartedEvent`，让被围定居点里的领主方原地待命（避免它们冲出围城）。

## 心智模型

它是 `CampaignBehaviorBase`，由引擎在战役初始化时 `AddBehavior` 注册。与 [AiMilitaryBehavior](../AiMilitaryBehavior)、[AiEngagePartyBehavior](../AiEngagePartyBehavior) 一样只监听 `CampaignEvents.AiHourlyTickEvent` 贡献候选，该事件由 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 派发；它不移动任何方、无状态、不序列化（`SyncData` 空）。其评分依赖 `Campaign.Current.Models.ArmyManagementCalculationModel`（入军规模比、最低食物天数阈值）与距离工具，因此仅在战役运行期有效。它的存在意义是“粘合剂”——没有它，军团成员会各自按军事/交战逻辑散开，军团无法集结。

## 何时使用 / 何时不要使用

- **使用**：要理解“军团为何能聚到一起”时读其 `AiHourlyTick`；若要调整成员追随力度，可仿照它监听 `AiHourlyTickEvent` 并修改 `EscortParty` 候选得分。
- **不要使用**：不要在本行为里直接调 `SetMoveXxx` 去把成员拽到领袖身边——候选会被 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 覆盖；应走 `PartyThinkParams.AddBehaviorScore`。不要假设 `Campaign.Current.Models.ArmyManagementCalculationModel` 或 `mobileParty.Army` 非空——见风险。也不要把“`EscortParty` 候选存在”等同于“成员一定跟随领袖”，最终由汇总裁决，且领袖方自身的意图可能压过。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 提供 `Campaign.Current.Models.ArmyManagementCalculationModel`、`GetAverageDistanceBetweenClosestTwoTownsWithNavigationType`。
- [CampaignEvents](../CampaignEvents) —— 订阅 `AiHourlyTickEvent`（核心）、`OnSiegeEventStartedEvent`。
- [CampaignEventDispatcher](../CampaignEventDispatcher) —— `AiHourlyTick` 事件派发者（[AiPartyThinkBehavior](../AiPartyThinkBehavior)）。
- [ArmyManagementCalculationModel](../ArmyManagementCalculationModel) —— 取 `PlayerMobilePartySizeRatioToCallToArmy` / `AIMobilePartySizeRatioToCallToArmy` / `MinimumNeededFoodInDaysToCallToArmy`。

下游与协同系统（被调用 / 写入）：

- [AiPartyThinkBehavior](../AiPartyThinkBehavior) —— 派发事件并消费候选（落地为 `EscortParty` 跟随领袖）。
- [AiMilitaryBehavior](../AiMilitaryBehavior) / [AiEngagePartyBehavior](../AiEngagePartyBehavior) —— 同类候选贡献者，共享 `PartyThinkParams`。
- [PartyThinkParams](../PartyThinkParams) —— 通过 `AddBehaviorScore` 累加候选。
- [AIBehaviorData](../AIBehaviorData) —— 候选载体，固定为 `AiBehavior.EscortParty`、目标为 `mobileParty.Army.LeaderParty`。
- [MobileParty](../MobileParty) / [MobilePartyAI](../MobilePartyAi) —— 读 `Army`、`LeaderParty`、`CurrentSettlement`、`HasNavalNavigationCapability`、食物天数、规模比。
- [Army](../Army) —— 读 `LeaderParty`、被围状态。
- [SiegeEvent](../SiegeEvent) —— `OnSiegeEventStarted` 时让被围定居点内领主方 `SetMoveModeHold`。
- [AiHelper](../../campaign-ext/AiHelper) —— 计算到领袖/定居点的最佳导航类型与距离。

## 风险

- **null 守卫不足**：`AiHourlyTick` 开头用 `mobileParty.Army == null` 早退，但后续大量读取 `mobileParty.Army.LeaderParty`、`LeaderParty.CurrentSettlement.SiegeEvent` 等；自定义扩展若去掉早退或改动条件，会触发空引用。
- **假设 `Campaign.Current.Models.ArmyManagementCalculationModel` 非空**：在战役未启动/读档前调用会崩溃；且模型阈值由模组可替换，依赖其返回合理值。
- **在 tick 内直接改方状态**：`OnSiegeEventStarted` 直接对 `Parties[i].SetMoveModeHold()` 改移动；若与同一 tick 的 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 落地竞争会抖动。
- **估值常量写死**：`FollowingArmyLeaderMaxScore=20`、`FollowingArmyLeaderMinScore=10`、`ArmyLeaderIsUnreachableScore≈0.02475` 是私有常量；改动会整体改变成员追随强度，需同步考虑军团集结/解散节奏。

## 成员说明

### 事件注册与生命周期

- **`RegisterEvents()`**
  - 用途：订阅 `AiHourlyTickEvent`（核心评分）与 `OnSiegeEventStartedEvent`（让被围方待命）。
  - 副作用：仅注册监听。调用时机：注册时一次。

- **`SyncData(IDataStore dataStore)`**
  - 用途：无状态，空实现。
  - 副作用：无。调用时机：存档/读档。

- **`OnSiegeEventStarted(SiegeEvent siegeEvent)`**
  - 用途：围城开始时，遍历被围定居点内的所有领主方，调用 `SetMoveModeHold()` 让它们原地待命（防止冲出围城）。
  - 副作用：直接改相关方移动。调用时机：`OnSiegeEventStartedEvent`。

### 核心评估：成员追随领袖

- **`AiHourlyTick(MobileParty mobileParty, PartyThinkParams p)`**
  - 用途：核心评分。早退条件：本方非军团成员、是领袖方、或（未附庸且领袖正被围且本方便捷/本方便被围）——这些情况下无需贡献跟随候选。否则计算到领袖的最佳导航类型与距离；若方食物天数不足阈值或规模比低于“征召入军”比例，则把得分降到 `MinScore` 并按距离额外衰减；最终以 `AiBehavior.EscortParty`、目标为 `LeaderParty` 把候选 `AddBehaviorScore` 进 `p`。若到领袖的导航类型为 `None`（不可达），则给一个极低的 `ArmyLeaderIsUnreachableScore` 保底候选。
  - 副作用：仅向 `p` 累加候选；不改移动。调用时机：`AiHourlyTickEvent` 派发时（由 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 驱动）。

### 内部常量（私有，理解用）

- **`FollowingArmyLeaderMaxScore` (20) / `FollowingArmyLeaderMinScore` (10)**
  - 用途：成员追随领袖的得分上/下限；食物或规模不达标时落到下限并按距离衰减。
- **`ArmyLeaderIsUnreachableScore` (≈0.02475)**
  - 用途：领袖完全不可达时的保底分，确保仍有一个微弱“跟随”意图而非彻底失联。

## 示例

读取一个军团成员是否被本行为驱动去跟随领袖（结果体现在默认/短行为上，只读）：

```csharp
MobileParty member = someArmyMember;
if (member.Army != null && member.Army.LeaderParty != member)
{
    // 该成员由 AiArmyMemberBehavior 贡献 EscortParty 候选，最终由汇总裁决是否跟随
    MobileParty leader = member.Army.LeaderParty;
}
```

理解“成员为何暂时不积极跟随”：食物或规模不足会显著降低追随分（对应源码中的 MinScore 路径）：

```csharp
MobileParty member = someArmyMember;
if (member.Army != null && member.Army.LeaderParty != member)
{
    float minFood = Campaign.Current.Models.ArmyManagementCalculationModel.MinimumNeededFoodInDaysToCallToArmy;
    int daysOfFood = member.GetNumDaysForFoodToLast();
    bool weakFollow = daysOfFood < minFood; // 食物不足 → 追随得分被压低
}
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[AiBehavior](../AiBehavior) · [AiMilitaryBehavior](../AiMilitaryBehavior) · [AiPartyThinkBehavior](../AiPartyThinkBehavior) · [AiEngagePartyBehavior](../AiEngagePartyBehavior) · [AIBehaviorData](../AIBehaviorData) · [MobileParty](../MobileParty) · [MobilePartyAI](../MobilePartyAi) · [Army](../Army) · [CampaignEvents](../CampaignEvents) · [PartyThinkParams](../PartyThinkParams) · [ArmyManagementCalculationModel](../ArmyManagementCalculationModel) · [SiegeEvent](../SiegeEvent) · [MobilePartyAIModel](../MobilePartyAIModel) · [AiHelper](../../campaign-ext/AiHelper)
