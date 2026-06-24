<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapEvent`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapEvent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class MapEvent : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEvent.cs`

## 概述

`MapEvent` 位于 `TaleWorlds.CampaignSystem.MapEvents`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.MapEvents` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TroopUpgradeTracker` | `public TroopUpgradeTracker TroopUpgradeTracker { get; }` |
| `Component` | `public MapEventComponent Component { get; }` |
| `State` | `public MapEventState State { get; }` |
| `InvolvedParties` | `public IEnumerable<PartyBase> InvolvedParties { get; }` |
| `MapEventSettlement` | `public Settlement MapEventSettlement { get; }` |
| `RetreatingSide` | `public BattleSideEnum RetreatingSide { get; }` |
| `EndedByRetreat` | `public bool EndedByRetreat { get; }` |
| `PursuitRoundNumber` | `public int PursuitRoundNumber { get; }` |
| `SimulationContext` | `public PowerCalculationContext SimulationContext { get; }` |
| `Position` | `public CampaignVec2 Position { get; }` |
| `IsInvulnerable` | `public bool IsInvulnerable { get; set; }` |
| `HasWinner` | `public bool HasWinner { get; set; }` |
| `IsPlayerSimulation` | `public bool IsPlayerSimulation { get; }` |
| `WonRounds` | `public MBList<BattleSideEnum> WonRounds { get; }` |
| `WasEverInLootingPhase` | `public bool WasEverInLootingPhase { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; }` |
| `BattleState` | `public BattleState BattleState { get; set; }` |
| `WinningSide` | `public BattleSideEnum WinningSide { get; }` |
| `Winner` | `public MapEventSide Winner { get; }` |
| `DefeatedSide` | `public BattleSideEnum DefeatedSide { get; }` |

## 主要方法

### GetMapEventSide
`public MapEventSide GetMapEventSide(BattleSideEnum side)`

**用途 / Purpose:** 获取 `map event side` 的当前值。

### PartiesOnSide
`public MBReadOnlyList<MapEventParty> PartiesOnSide(BattleSideEnum side)`

**用途 / Purpose:** 处理 `parties on side` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### BeginWait
`public void BeginWait()`

**用途 / Purpose:** 处理 `begin wait` 相关逻辑。

### FinishBattleAndKeepSiegeEvent
`public void FinishBattleAndKeepSiegeEvent()`

**用途 / Purpose:** 处理 `finish battle and keep siege event` 相关逻辑。

### SetOverrideWinner
`public void SetOverrideWinner(BattleSideEnum winner)`

**用途 / Purpose:** 设置 `override winner` 的值或状态。

### SetDefenderPulledBack
`public void SetDefenderPulledBack()`

**用途 / Purpose:** 设置 `defender pulled back` 的值或状态。

### SimulateBattleSetup
`public void SimulateBattleSetup(FlattenedTroopRoster priorTroops)`

**用途 / Purpose:** 处理 `simulate battle setup` 相关逻辑。

### SimulateBattleRound
`public void SimulateBattleRound(int simulationTicksDefender, int simulationTicksAttacker)`

**用途 / Purpose:** 处理 `simulate battle round` 相关逻辑。

### ResetBattleState
`public void ResetBattleState()`

**用途 / Purpose:** 将 `battle state` 重置为初始状态。

### IsPlayerSergeant
`public bool IsPlayerSergeant()`

**用途 / Purpose:** 处理 `is player sergeant` 相关逻辑。

### EndByRunAway
`public void EndByRunAway()`

**用途 / Purpose:** 处理 `end by run away` 相关逻辑。

### RecalculateStrengthOfSides
`public void RecalculateStrengthOfSides()`

**用途 / Purpose:** 处理 `recalculate strength of sides` 相关逻辑。

### GetNumberOfInvolvedMen
`public int GetNumberOfInvolvedMen()`

**用途 / Purpose:** 获取 `number of involved men` 的当前值。

### GetNumberOfInvolvedMen
`public int GetNumberOfInvolvedMen(BattleSideEnum side)`

**用途 / Purpose:** 获取 `number of involved men` 的当前值。

### GetOtherSide
`public BattleSideEnum GetOtherSide(BattleSideEnum side)`

**用途 / Purpose:** 获取 `other side` 的当前值。

### HasTroopsOnBothSides
`public bool HasTroopsOnBothSides()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `troops on both sides`。

### GetLeaderParty
`public PartyBase GetLeaderParty(BattleSideEnum side)`

**用途 / Purpose:** 获取 `leader party` 的当前值。

### CanPartyJoinBattle
`public bool CanPartyJoinBattle(PartyBase party, BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否可以执行 `party join battle`。

### GetStrengthsRelativeToParty
`public void GetStrengthsRelativeToParty(BattleSideEnum partySide, out float partySideStrength, out float opposingSideStrength)`

**用途 / Purpose:** 获取 `strengths relative to party` 的当前值。

### GetPlayerBattleContributionRate
`public float GetPlayerBattleContributionRate()`

**用途 / Purpose:** 获取 `player battle contribution rate` 的当前值。

### FinalizeEvent
`public void FinalizeEvent()`

**用途 / Purpose:** 处理 `finalize event` 相关逻辑。

### RecalculateRenownAndInfluenceValuesOnPartyInvolved
`public void RecalculateRenownAndInfluenceValuesOnPartyInvolved(PartyBase party)`

**用途 / Purpose:** 处理 `recalculate renown and influence values on party involved` 相关逻辑。

### DoSurrender
`public void DoSurrender(BattleSideEnum side)`

**用途 / Purpose:** 处理 `do surrender` 相关逻辑。

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**用途 / Purpose:** 设置 `position after map change` 的值或状态。

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**用途 / Purpose:** 处理 `check positions for map change and update if needed` 相关逻辑。

### OverrideMapEventSettlementForRaidToFieldBattleSwitch
`public void OverrideMapEventSettlementForRaidToFieldBattleSwitch(Settlement settlement)`

**用途 / Purpose:** 处理 `override map event settlement for raid to field battle switch` 相关逻辑。

## 使用示例

```csharp
var value = new MapEvent();
value.GetMapEventSide(side);
```

## 参见

- [完整类目录](../catalog)