---
title: "MapEvent"
description: "MapEvent 的自动生成类参考。"
---
# MapEvent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class MapEvent : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEvent.cs`

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

**用途 / Purpose:** 读取并返回当前对象中 「map event side」 的结果。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.GetMapEventSide(side);
```

### PartiesOnSide
`public MBReadOnlyList<MapEventParty> PartiesOnSide(BattleSideEnum side)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.PartiesOnSide(side);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.ToString();
```

### BeginWait
`public void BeginWait()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.BeginWait();
```

### FinishBattleAndKeepSiegeEvent
`public void FinishBattleAndKeepSiegeEvent()`

**用途 / Purpose:** 结束「battle and keep siege event」流程并执行必要的收尾工作。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.FinishBattleAndKeepSiegeEvent();
```

### SetOverrideWinner
`public void SetOverrideWinner(BattleSideEnum winner)`

**用途 / Purpose:** 为 「override winner」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.SetOverrideWinner(winner);
```

### SetDefenderPulledBack
`public void SetDefenderPulledBack()`

**用途 / Purpose:** 为 「defender pulled back」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.SetDefenderPulledBack();
```

### SimulateBattleSetup
`public void SimulateBattleSetup(FlattenedTroopRoster priorTroops)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.SimulateBattleSetup(priorTroops);
```

### SimulateBattleRound
`public void SimulateBattleRound(int simulationTicksDefender, int simulationTicksAttacker)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.SimulateBattleRound(0, 0);
```

### ResetBattleState
`public void ResetBattleState()`

**用途 / Purpose:** 将 「battle state」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.ResetBattleState();
```

### IsPlayerSergeant
`public bool IsPlayerSergeant()`

**用途 / Purpose:** 判断当前对象是否处于 「player sergeant」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.IsPlayerSergeant();
```

### EndByRunAway
`public void EndByRunAway()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.EndByRunAway();
```

### RecalculateStrengthOfSides
`public void RecalculateStrengthOfSides()`

**用途 / Purpose:** 重新计算「strength of sides」以反映最新状态。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.RecalculateStrengthOfSides();
```

### GetNumberOfInvolvedMen
`public int GetNumberOfInvolvedMen()`

**用途 / Purpose:** 读取并返回当前对象中 「number of involved men」 的结果。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.GetNumberOfInvolvedMen();
```

### GetNumberOfInvolvedMen
`public int GetNumberOfInvolvedMen(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「number of involved men」 的结果。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.GetNumberOfInvolvedMen(side);
```

### GetOtherSide
`public BattleSideEnum GetOtherSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「other side」 的结果。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.GetOtherSide(side);
```

### HasTroopsOnBothSides
`public bool HasTroopsOnBothSides()`

**用途 / Purpose:** 判断当前对象是否已经持有 「troops on both sides」。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.HasTroopsOnBothSides();
```

### GetLeaderParty
`public PartyBase GetLeaderParty(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「leader party」 的结果。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.GetLeaderParty(side);
```

### CanPartyJoinBattle
`public bool CanPartyJoinBattle(PartyBase party, BattleSideEnum side)`

**用途 / Purpose:** 检查当前对象是否满足 「party join battle」 的前置条件。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.CanPartyJoinBattle(party, side);
```

### GetStrengthsRelativeToParty
`public void GetStrengthsRelativeToParty(BattleSideEnum partySide, out float partySideStrength, out float opposingSideStrength)`

**用途 / Purpose:** 读取并返回当前对象中 「strengths relative to party」 的结果。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.GetStrengthsRelativeToParty(partySide, partySideStrength, opposingSideStrength);
```

### GetPlayerBattleContributionRate
`public float GetPlayerBattleContributionRate()`

**用途 / Purpose:** 读取并返回当前对象中 「player battle contribution rate」 的结果。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.GetPlayerBattleContributionRate();
```

### FinalizeEvent
`public void FinalizeEvent()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.FinalizeEvent();
```

### RecalculateRenownAndInfluenceValuesOnPartyInvolved
`public void RecalculateRenownAndInfluenceValuesOnPartyInvolved(PartyBase party)`

**用途 / Purpose:** 重新计算「renown and influence values on party involved」以反映最新状态。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.RecalculateRenownAndInfluenceValuesOnPartyInvolved(party);
```

### DoSurrender
`public void DoSurrender(BattleSideEnum side)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.DoSurrender(side);
```

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**用途 / Purpose:** 为 「position after map change」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.SetPositionAfterMapChange(newPosition);
```

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**用途 / Purpose:** 检查「positions for map change and update if needed」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.CheckPositionsForMapChangeAndUpdateIfNeeded();
```

### OverrideMapEventSettlementForRaidToFieldBattleSwitch
`public void OverrideMapEventSettlementForRaidToFieldBattleSwitch(Settlement settlement)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.OverrideMapEventSettlementForRaidToFieldBattleSwitch(settlement);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapEvent mapEvent = ...;
mapEvent.GetMapEventSide(side);
```

## 参见

- [本区域目录](../)