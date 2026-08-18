---
title: "AiMilitaryBehavior"
description: "领主/军团方的军事目标评估行为：在每次 AI 小时 tick 中，为攻城、劫掠、守卫三类任务计算候选定居点与得分，写入 PartyThinkParams，并响应地图事件/围城开始/战斗结束来修正相关方（如港口封锁时让 targeting 港口的方原地待命）。"
---

# AiMilitaryBehavior

**命名空间：** TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors
**模块：** TaleWorlds.CampaignSystem
**类型：** public class AiMilitaryBehavior : CampaignBehaviorBase
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors/AiMilitaryBehavior.cs

## 概述

`AiMilitaryBehavior` 是地图 AI 中负责“军事进攻意图”的一环：它不直接移动任何方，而是在 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 驱动的每小时 tick 里，为进攻方计算“该去围哪座城、劫哪个村、守哪座定居点”的候选 [AIBehaviorData](../AIBehaviorData) 得分，并把这些得分加进 `PartyThinkParams`。真正的移动指令由 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 在汇总后通过 [SetPartyAiAction](../../campaign-ext/SetPartyAiAction) 落地。同时它订阅若干 [CampaignEvents](../CampaignEvents) 来在地图事件/围城/战斗结束时修正相关领主方的行为。

## 心智模型

它是 `CampaignBehaviorBase` 的标准实现，由引擎在战役初始化（`InitializeGameStarter`）阶段通过 `Campaign.Current.AddBehavior(...)` 注册（原版在 SandBox 模块中注册）。它的“入口”不是自己起 tick，而是监听 `CampaignEvents.AiHourlyTickEvent`——这个事件由 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 在 `PartyHourlyAiTick` 内通过 `CampaignEventDispatcher.Instance.AiHourlyTick` 派发，因此它的 `AiHourlyTick` 总是与 [AiEngagePartyBehavior](../AiEngagePartyBehavior)、[AiArmyMemberBehavior](../AiArmyMemberBehavior) 的同类方法在同一帧被调用，三者各自往同一个 `PartyThinkParams` 里累积候选。它属于纯 Campaign 层，不序列化任何字段（`SyncData` 为空实现），重载战役后由引擎重新 `new` 并注册。

## 何时使用 / 何时不要使用

- **使用**：需要理解或修改“领主方为什么会去围城/劫掠/守卫”时，阅读其 `AiHourlyTick` 与 `FindBestTargetAndItsValueForFaction`；若要新增一类军事目标评分，可仿照它实现一个同样监听 `AiHourlyTickEvent` 并向 `PartyThinkParams` 添加 [AIBehaviorData](../AIBehaviorData) 的行为。
- **不要使用**：不要在本行为里（或任何 `AiHourlyTick` 处理器里）直接调用 `party.SetMoveXxx` 去移动方——那只会被随后 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 的汇总覆盖或产生竞争；应走 `PartyThinkParams.AddBehaviorScore`。也不要在 tick 外、或假设 `Campaign.Current` 非空时调用其私有评估方法；事件处理器内的 `mobileParty` 一定有效，但跨战役/主菜单里 `Campaign.Current.Models` 为空。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有并注册本行为，提供 `Campaign.Current.Models`（[TargetScoreCalculatingModel](../TargetScoreCalculatingModel)、[MobilePartyAIModel](../MobilePartyAIModel)）与距离工具。
- [CampaignEvents](../CampaignEvents) —— 本行为订阅 `AiHourlyTickEvent`、`OnSessionLaunchedEvent`、`MapEventEnded`、`OnSiegeEventStartedEvent`、`MapEventStarted`。
- [CampaignEventDispatcher](../CampaignEventDispatcher) —— `AiHourlyTick` 事件的派发者（由 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 调用）。
- [IDisbandPartyCampaignBehavior](../IDisbandPartyCampaignBehavior) —— 在 `OnSessionLaunched` 中取出，用于判断方是否正在等待解散（解散中的方得分打折）。

下游与协同系统（被调用 / 写入）：

- [AiPartyThinkBehavior](../AiPartyThinkBehavior) —— 触发 `AiHourlyTickEvent` 并消费本行为写入的得分。
- [AiEngagePartyBehavior](../AiEngagePartyBehavior) / [AiArmyMemberBehavior](../AiArmyMemberBehavior) —— 同类候选贡献者，共享同一 `PartyThinkParams`。
- [PartyThinkParams](../PartyThinkParams) —— 本行为通过 `AddBehaviorScore` 把 [AIBehaviorData](../AIBehaviorData) 候选累加进去。
- [AIBehaviorData](../AIBehaviorData) —— 候选数据载体（含 `AiBehavior.DefendSettlement` / `BesiegeSettlement` / `RaidSettlement`）。
- [MobileParty](../MobileParty) / [MobilePartyAI](../MobilePartyAi) —— 被读取（阵营、军团、目标、食物天数）；事件处理器内会被 `SetMoveModeHold` 修正。
- [Army](../Army) —— 读 `ArmyType`、`Cohesion`、`LeaderParty` 来决定加权与是否跳过。
- [TargetScoreCalculatingModel](../TargetScoreCalculatingModel) —— `GetTargetScoreForFaction` 计算定居点军事价值。
- [MobilePartyAIModel](../MobilePartyAIModel) —— 取劫掠/围城的食物阈值（`NeededFoodsInDaysThresholdForRaid` / `...Siege`）。
- [MapEvent](../MapEvent) / [SiegeEvent](../SiegeEvent) / [Settlement](../Settlement) / [Town](../Town) / [Village](../Village) —— 事件与评估的目标对象。

## 风险

- **在 tick 内直接改方状态**：`OnMapEventStarted` / `OnMapEventEnded` / `OnSiegeEventStarted` 处理器里直接对 `MobileParty.AllLordParties` 调 `SetMoveModeHold` 会立即改变移动；若与同一 tick 内 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 的汇总产生竞争，可能引发抖动。改状态应谨慎、且只针对明确的“当前方正在做 X 而需让路”的情形。
- **假设 `Campaign.Current` 非空**：`GetFoodScoreForActionType` 等内部方法读取 `Campaign.Current.Models.MobilePartyAIModel`，在主菜单/读档完成前或编辑器上下文调用会空引用。
- **跨战役缓存 `_disbandPartyCampaignBehavior`**：它在 `OnSessionLaunched` 里取一次并持有；若在两次战役间不触发 `OnSessionLaunched` 而旧战役已销毁，该引用会悬空。依赖会话启动重取是正确做法，但不要在别处自行缓存。
- **`MobileParty.MainParty` 特判**：多处（如 `OnMapEventEnded` 里 `mobileParty2 != MobileParty.MainParty`）对玩家方有特殊分支；自定义逻辑若照搬要记得玩家方可能缺席或处于不同状态。
- **`Army.ArmyTypes` 取值顺序**：循环 `for (i=0;i<4;i++)` 依次对应 `Besieger`、`Raider`、`Defender`、`Patrolling`（Patrolling 落到 `default` 分支遍历敌对方）。新增任务类型时要对齐枚举顺序，否则评分错位。

## 成员说明

### 事件注册与生命周期

- **`RegisterEvents()`**
  - 用途：把本行为挂到五个 [CampaignEvents](../CampaignEvents) 上：`AiHourlyTickEvent`（核心评估）、`OnSessionLaunchedEvent`（取 disband 行为）、`MapEventEnded`、`OnSiegeEventStartedEvent`、`MapEventStarted`（修正相关方）。
  - 副作用：仅注册监听，不改世界状态。调用时机：行为被 `AddBehavior` 注册后由引擎调用一次。

- **`SyncData(IDataStore dataStore)`**
  - 用途：存档/读档的序列化钩子。本行为无状态字段，故为空实现。
  - 副作用：无。调用时机：引擎存档/读档时。

- **`OnSessionLaunched(CampaignGameStarter gameStarter)`**
  - 用途：在战役会话启动时取出 `IDisbandPartyCampaignBehavior` 并缓存到 `_disbandPartyCampaignBehavior`，供后续评分时判断是否对“等待解散的方”打折。
  - 副作用：写入私有字段。调用时机：`OnSessionLaunchedEvent` 派发时（每局战役一次）。

### 核心评估：每小时军事 tick

- **`AiHourlyTick(MobileParty mobileParty, PartyThinkParams p)`**
  - 用途：为单个领主方计算军事候选。先过滤掉民兵/商队/村民/强盗/巡逻/解散中/无领袖/非王国阵营方；对处于军团中的方设置 initiative 并视角色（领袖等待成员、Patrol、Defend）调整；随后对四种 `ArmyType` 依次调用 `FindBestTargetAndItsValueForFaction` 累积候选。
  - 副作用：写入 `mobileParty.Ai` 的 initiative（`SetInitiative`），并向 `p` 累加候选（不直接移动）。调用时机：`AiHourlyTickEvent` 派发时（由 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 驱动）。

- **`FindBestTargetAndItsValueForFaction(Army.ArmyTypes missionType, PartyThinkParams p, float ourStrength)`**
  - 用途：本行为唯一 `public` 的评估入口。按 `missionType`（Defender→`DefendSettlement`、Besieger→`BesiegeSettlement`、Raider→`RaidSettlement`）遍历本方或敌对方的定居点，借助内部 `CalculateMilitaryBehaviorForFactionSettlements` → `CalculateMilitaryBehaviorForSettlement` 计算距离分、目标分，并乘上 cohesion/food/partySize/objective 权重，最终把合格候选以 [AIBehaviorData](../AIBehaviorData) 形式 `AddBehaviorScore` 进 `p`。
  - 副作用：仅向 `p` 加候选分；无世界状态变更。调用时机：被 `AiHourlyTick` 在四种 `ArmyType` 上调用。

### 地图事件修正（只读/谨慎改状态）

- **`OnMapEventStarted(MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)`**
  - 用途：地图战斗开始时，对“正在 targeting 该定居点的港口/去该村庄”的领主方调用 `SetMoveModeHold` 让其让路。
  - 副作用：直接调用 `allLordParty.SetMoveModeHold()`，会改变相关方移动。调用时机：`MapEventStarted` 事件。

- **`OnSiegeEventStarted(SiegeEvent siegeEvent)`**
  - 用途：围城开始时，让“正前往被围定居点”的领主方原地待命。
  - 副作用：`item.SetMoveModeHold()`。调用时机：`OnSiegeEventStartedEvent`。

- **`OnMapEventEnded(MapEvent mapEvent)`**
  - 用途：战斗结束后处理撤退方传送出遭遇半径、以及“非玩家方袭击村庄胜利后继续 raid”的续接。
  - 副作用：调用 `TeleportPartyToOutSideOfEncounterRadius`、`CalculateFleePosition`、`SetMoveGoToPoint` 以及 `RecalculateShortTermBehavior`，会改变相关方状态。调用时机：`MapEventEnded`。

### 内部评分辅助（私有，理解用）

- **`GetFoodScoreForActionType` / `GetPartySizeScore` / `CalculateMilitaryBehaviorForSettlement` / `CalculateDistanceScoreForBesieging` / `GetDistanceScoreForRaiding` / `GetDistanceScoreForDefending`**
  - 用途：把“食物可支撑天数、军团规模比、定居点距离、邻近敌/友要塞、围城/劫掠耗时”等折算为 0~1 的乘子，乘进候选得分。
  - 副作用：无（纯计算）。调用时机：被 `FindBestTargetAndItsValueForFaction` 链调用。

## 示例

运行中取本行为实例，并判断一个领主方当前是否正被它的军事逻辑驱动（只读，安全）：

```csharp
AiMilitaryBehavior military = Campaign.Current.GetCampaignBehavior<AiMilitaryBehavior>();
if (military != null)
{
    MobileParty lord = MobileParty.MainParty;
    if (lord.DefaultBehavior == AiBehavior.BesiegeSettlement && lord.TargetSettlement != null)
    {
        // 该方当前锁定了某个要塞作为攻城目标（由军事决策 + AiPartyThinkBehavior 落地）
        Settlement siegeTarget = lord.TargetSettlement;
    }
}
```

若要新增一类军事候选评分，仿照它监听同一事件并向 `PartyThinkParams` 贡献候选（不要直接移动方）：

```csharp
public class MyMilitaryScorer : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.AiHourlyTickEvent.AddNonSerializedListener(this, AiHourlyTick);
    }

    private void AiHourlyTick(MobileParty mobileParty, PartyThinkParams p)
    {
        if (mobileParty.LeaderHero == null || !mobileParty.MapFaction.IsKingdomFaction)
        {
            return;
        }
        AIBehaviorData data = new AIBehaviorData(
            mobileParty.TargetSettlement, AiBehavior.DefendSettlement,
            MobileParty.NavigationType.Default, willGatherArmy: false,
            isFromPort: false, isTargetingPort: false);
        p.AddBehaviorScore((data, 1f));
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[AiBehavior](../AiBehavior) · [AiPartyThinkBehavior](../AiPartyThinkBehavior) · [AiEngagePartyBehavior](../AiEngagePartyBehavior) · [AiArmyMemberBehavior](../AiArmyMemberBehavior) · [AIBehaviorData](../AIBehaviorData) · [MobileParty](../MobileParty) · [MobilePartyAI](../MobilePartyAi) · [Army](../Army) · [CampaignEvents](../CampaignEvents) · [PartyThinkParams](../PartyThinkParams) · [IDisbandPartyCampaignBehavior](../IDisbandPartyCampaignBehavior) · [TargetScoreCalculatingModel](../TargetScoreCalculatingModel) · [MobilePartyAIModel](../MobilePartyAIModel) · [MapEvent](../MapEvent) · [SiegeEvent](../SiegeEvent) · [Settlement](../Settlement) · [SetPartyAiAction](../../campaign-ext/SetPartyAiAction)
