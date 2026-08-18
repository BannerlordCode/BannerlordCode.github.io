---
title: "AiPatrollingBehavior"
description: "战役 AI 行为：在每小时 tick 时为领主/王国方计算防御性（守卫己方城镇与村庄）与进攻性（针对敌港）巡逻目标的评分，并通过事件在封锁启动、船只损毁或易主时把相关方切到暂停移动；由 Campaign 在 InitializeGameStarter 中注册，评分写入 PartyThinkParams 而非直接改方移动状态。"
---

# AiPatrollingBehavior

**命名空间：** TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors
**模块：** TaleWorlds.CampaignSystem
**类型：** public class AiPatrollingBehavior : CampaignBehaviorBase
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors/AiPatrollingBehavior.cs

## 概述

该行为在战役 AI 的每小时思考里为符合条件的领主方产出“在附近据点巡逻（[AiBehavior](../AiBehavior) 的 `PatrolAroundPoint`）”的候选目标与评分，同时监听围城封锁、船只损毁与船只易主事件，把正在海上巡逻却失去海军能力或正冲向被封锁定居点的方强制转为原地待命。

## 心智模型

它是 `CampaignBehaviorBase` 派生出的“评分器”，不是移动执行器：自身在 `AiHourlyTick` 里只往传入的 `PartyThinkParams` 累加 `AIBehaviorData` 候选，真正的移动指令由后续 AI 思考管线（[AiPartyThinkBehavior](../AiPartyThinkBehavior) 等）依据总分采纳并写入 `MobileParty` 的 AI 状态。它由子模块在 `InitializeGameStarter` 中通过 `starter.AddBehavior(new AiPatrollingBehavior())` 注册一次；`RegisterEvents` 订阅全部所需 `CampaignEvents`，`SyncData` 为空（无字段需要序列化）。tick 时机是 `CampaignEvents.AiHourlyTickEvent`——此时 `Campaign.Current` 一定存在，因此内部大量直接读 `Campaign.Current.Models` 与 `Campaign.Current.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType`。要注意它只影响“巡逻”这一类行为，土匪巡逻在 [AiLandBanditPatrollingBehavior](../AiLandBanditPatrollingBehavior)、前往定居点在 [AiVisitSettlementBehavior](../AiVisitSettlementBehavior)，是同一 AI 簇的兄弟行为。

## 何时使用 / 何时不要使用

- **使用**：需要理解/调试领主方为何在某据点周围巡逻、或想新增一类巡逻评分时，阅读本行为的 `CalculateDefensivePatrollingScores` / `CalculateOffensiveNavalPatrollingScores`；要调整巡逻偏好应改其依赖的 [TargetScoreCalculatingModel](../TargetScoreCalculatingModel)（`CalculateDefensivePatrollingScoreForSettlement` / `CalculateOffensivePatrollingScoreForSettlement`），或覆盖距离评分逻辑。
- **不要使用**：不要在事件处理器或别处直接改写 `MobileParty` 的 `DefaultBehavior` / `TargetSettlement` 来“让它巡逻”——正确路径是让本行为把 `AIBehaviorData(AiBehavior.PatrolAroundPoint, …)` 写入 `PartyThinkParams`，由思考管线采纳。也不要在 `Mission`/战斗层或 `Campaign.Current` 为空时手动调用其评分辅助方法，会直接空引用。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有并驱动所有 `CampaignBehaviorBase`；本行为通过 `Campaign.Current.Models` 与 `Campaign.Current.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType` 读取全局数据。
- [CampaignEvents](../CampaignEvents) —— 订阅 `AiHourlyTickEvent`、`OnSessionLaunchedEvent`、`OnShipDestroyedEvent`、`OnBlockadeActivatedEvent`、`OnShipOwnerChangedEvent`。
- [MobileParty](../MobileParty) / [PartyBase](../PartyBase) —— 被遍历与判定的主体；`MobileParty.All` 在封锁/船只事件中遍历。
- [PartyThinkParams](../PartyThinkParams) —— 评分写入目标，承载所有候选 `AIBehaviorData`。
- [AIBehaviorData](../AIBehaviorData) / [AiBehavior](../AiBehavior) —— 产出的候选（行为恒为 `PatrolAroundPoint` 或进攻性海军巡逻的 `PatrolAroundPoint`）。
- [IDisbandPartyCampaignBehavior](../IDisbandPartyCampaignBehavior) —— 在 `OnSessionLaunched` 中取得，用于判定方是否等待解散并下调其巡逻评分。
- [SiegeEvent](../SiegeEvent) / [Ship](../Ship) —— 封锁与船只事件载荷来源。
- [TargetScoreCalculatingModel](../TargetScoreCalculatingModel) —— 实际巡逻评分的核心公式（`CalculateDefensivePatrollingScoreForSettlement` / `CalculateOffensivePatrollingScoreForSettlement`）。
- [MapDistanceModel](../MapDistanceModel) —— 经 `Campaign.Current.Models.MapDistanceModel.GetDistance` 计算距离。
- [Settlement](../Settlement) / [Town](../Town) / [Village](../Village) —— 巡逻目标据点；防御巡逻只针对城镇与村庄。

下游与协同（同 AI 簇）：

- [AiPartyThinkBehavior](../AiPartyThinkBehavior) —— 消费 `PartyThinkParams` 中本行为写入的候选并决定最终移动。
- [AiMilitaryBehavior](../AiMilitaryBehavior) / [AiEngagePartyBehavior](../AiEngagePartyBehavior) / [AiArmyMemberBehavior](../AiArmyMemberBehavior) / [AiVisitSettlementBehavior](../AiVisitSettlementBehavior) / [AiLandBanditPatrollingBehavior](../AiLandBanditPatrollingBehavior) / [AIMoveToNearestLandBehavior](../AIMoveToNearestLandBehavior) —— 同层兄弟行为，各自往 `PartyThinkParams` 写入不同候选。

辅助（无独立页，按命名空间引用）：`SettlementHelper`、`PartyBaseHelper`、`AiHelper` 提供据点查找与最佳导航类型/距离计算。

## 风险

- **在 tick 外或 Campaign.Current 为空时调用评分辅助**：`CalculateDefensivePatrollingScores` 等方法内部直接读 `Campaign.Current.Models` 与 `Campaign.Current.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType`，在主菜单、子模块加载早期或 `Mission` 层调用会空引用。它们只应在 `AiHourlyTick` 上下文被调用。
- **事件里改写移动状态**：`OnBlockadeActivated` 会遍历 `MobileParty.All` 并对符合条件的方调用 `SetMoveModeHold()`，这是安全的，但如果你在自己订阅同一事件的代码中再去改写这些方的移动状态，会与本行为产生竞态；事件处理器里只应做最小必要改动。
- **海军/陆地边界**：防御性海军巡逻仅在 `mobileParty.HasNavalNavigationCapability` 时计算；`GetBestNavigationTypeAndAdjustedDistanceOfSettlementForMobileParty` 返回 `NavigationType.None` 的候选会被直接丢弃。若你为无海军能力的方强行注入 `PatrolAroundPoint` 海军候选，会因导航类型无效而失效或产生异常。
- **已销毁方的陈旧引用**：`CheckPartyIfNeeded` 接收 `PartyBase`，先判 `party.IsMobile` 再读 `party.MobileParty`；若你拷贝此逻辑时漏掉 `IsMobile` 守卫，遇到非移动方会空引用。
- **重复注册**：行为应在子模块里只 `AddBehavior` 一次；重复注册会让 `AiHourlyTickEvent` 等被多次订阅，评分被重复累加。
- **解散判定缓存**：`_disbandPartyCampaignBehavior` 在 `OnSessionLaunched` 才取得；在此之前（如更早触发的监听）它为 `null`，代码以“视为未等待解散”处理，不会崩溃，但会短暂忽略解散惩罚。

## 成员说明

### 事件订阅与生命周期

- **`RegisterEvents()`**
  - 用途：向 `CampaignEvents` 注册本行为的全部监听器（`AiHourlyTickEvent`、`OnSessionLaunchedEvent`、`OnShipDestroyedEvent`、`OnBlockadeActivatedEvent`、`OnShipOwnerChangedEvent`）。
  - 副作用：无。调用时机：行为被 `AddBehavior` 后由框架自动调用一次。

- **`OnSessionLaunched(CampaignGameStarter campaignGameStarter)`**
  - 用途：取得 `IDisbandPartyCampaignBehavior` 实例并缓存到 `_disbandPartyCampaignBehavior`，供后续判定方是否等待解散。
  - 副作用：仅缓存一个行为引用。调用时机：每次会话启动（`OnSessionLaunchedEvent`）。

- **`SyncData(IDataStore dataStore)`**
  - 用途：空实现；本行为无需要序列化的字段。
  - 副作用：无。调用时机：存读档时由框架调用。

### 事件处理器（在异常情况下改写方移动）

- **`OnBlockadeActivated(SiegeEvent siegeEvent)`**
  - 用途：当某定居点封锁激活时，遍历 `MobileParty.All`，把所有“正以 `GoToSettlement` 前往该被围定居点、`DefaultBehavior` 指向它、且当前不在该定居点内”的方转为原地待命（`SetMoveModeHold`），避免它们一头撞进封锁。
  - 副作用：直接改写相关方的移动模式。调用时机：封锁激活事件。

- **`OnShipDestroyed(PartyBase owner, Ship ship, DestroyShipAction.ShipDestroyDetail detail)` / `OnShipOwnerChanged(Ship ship, PartyBase oldOwner, ChangeShipOwnerAction.ShipOwnerChangeDetail changeDetail)`**
  - 用途：船只损毁或易主后，调用 `CheckPartyIfNeeded(owner/oldOwner)` 检查该方是否因此失去海军能力。
  - 副作用：可能把相关方转为原地待命。调用时机：对应 `CampaignEvents`。

- **`CheckPartyIfNeeded(PartyBase party)`**
  - 用途：若 `party` 是移动方、且其领主方正处于 `PatrolAroundPoint`、目标位置不在陆地、且自身无海军导航能力，则 `SetMoveModeHold()`（在海上巡逻却没了船，必须停下）。
  - 副作用：改写移动模式。调用时机：由上面两个船只事件间接调用；带 `party.IsMobile` 守卫，非移动方安全跳过。

### 每小时巡逻评分

- **`AiHourlyTick(MobileParty mobileParty, PartyThinkParams p)`**
  - 用途：入口。先过滤——民兵/商队/村民/土匪/巡逻方/正在解散/非领主的小派系方/正处于被围定居点内/已附属于军团/食物不足 6 天/当前定居点正处围城等的方直接返回；再按方规模（含军团时取平均）计算 `scoreAdjustment`，最后分别调用防御与进攻性海军巡逻评分。
  - 副作用：仅向 `p` 累加候选，不改世界。调用时机：`AiHourlyTickEvent`。

- **`CalculateDefensivePatrollingScores(MobileParty mobileParty, PartyThinkParams p, float scoreAdjustment)`**
  - 用途：为己方（及王国方有条件地）所有城镇/村庄计算陆地与（若具海军能力）海军防御巡逻评分；距离过远的据点（超出 `furthestDistance` 阈值）被忽略。为每个合适据点构造 `AIBehaviorData(settlement, AiBehavior.PatrolAroundPoint, navigationType, willGatherArmy:false, …)` 并乘以距离/规模调整后的分数后 `AddBehaviorScore`。
  - 副作用：写 `p`。调用时机：由 `AiHourlyTick` 调用。

- **`CalculateOffensiveNavalPatrollingScores(MobileParty mobileParty, PartyThinkParams p, float scoreAdjustment)`**
  - 用途：仅当方具海军能力、属王国派系且非国王本人领军时，对所有交战派系中“有港口”的定居点计算进攻性海军巡逻评分（距离评分阈值 `0.5` 以上才计入）。
  - 副作用：写 `p`。调用时机：由 `AiHourlyTick` 调用。

- **距离评分辅助**：`GetDistanceScoreForLandPatrolling` / `GetDistanceScoreForDefensiveNavalPatrolling` / `GetDistanceScoreForOffensiveNavalPatrolling`
  - 用途：把“方到据点距离”映射为 `0.2~1`（陆地）或 `0.2~1` / `0.5~1.5`（海军）的距离分数，超出平均城镇间距倍数则返回负分（即不可行）。
  - 副作用：无，纯计算 `out` 出参。调用时机：被上面的评分方法调用。

- **`CalculateDefensivePatrollingScoreForSettlement` / `CalculateOffensiveNavalPatrollingScoreForSettlement`**
  - 用途：取 `TargetScoreCalculatingModel` 的 `CalculateDefensivePatrollingScoreForSettlement` / `CalculateOffensivePatrollingScoreForSettlement` 得到基础分，乘以 `scoreAdjustment`，若 `> 0` 则 `p.AddBehaviorScore((AIBehaviorData, 1.44f + 分数))`（`1.44f` 即 `BasePatrolScore` 基准）。
  - 副作用：写 `p`。调用时机：由上面的评分方法调用。

## 示例

在子模块中注册本行为（需要且仅需要一次）：

```csharp
public override void InitializeGameStarter(Game game, CampaignGameStarter starter)
{
    starter.AddBehavior(new AiPatrollingBehavior());
}
```

观察某方被本行为判为巡逻候选（只观察，不要在此改写移动状态）：

```csharp
CampaignEvents.AiHourlyTickEvent.AddNonSerializedListener(this, OnAiHourlyTick);

private void OnAiHourlyTick(MobileParty mobileParty, PartyThinkParams p)
{
    if (mobileParty.DefaultBehavior == AiBehavior.PatrolAroundPoint)
    {
        Settlement patrolTarget = mobileParty.TargetSettlement;
    }
}
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [MobileParty](../MobileParty) · [PartyBase](../PartyBase) · [PartyThinkParams](../PartyThinkParams) · [AIBehaviorData](../AIBehaviorData) · [AiBehavior](../AiBehavior) · [IDisbandPartyCampaignBehavior](../IDisbandPartyCampaignBehavior) · [SiegeEvent](../SiegeEvent) · [Ship](../Ship) · [TargetScoreCalculatingModel](../TargetScoreCalculatingModel) · [MapDistanceModel](../MapDistanceModel) · [Settlement](../Settlement) · [Town](../Town) · [Village](../Village) · [AiPartyThinkBehavior](../AiPartyThinkBehavior) · [AiMilitaryBehavior](../AiMilitaryBehavior) · [AiEngagePartyBehavior](../AiEngagePartyBehavior) · [AiArmyMemberBehavior](../AiArmyMemberBehavior) · [AiVisitSettlementBehavior](../AiVisitSettlementBehavior) · [AiLandBanditPatrollingBehavior](../AiLandBanditPatrollingBehavior) · [AIMoveToNearestLandBehavior](../AIMoveToNearestLandBehavior)
