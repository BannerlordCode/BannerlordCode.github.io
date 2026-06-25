---
title: "MapEvent"
description: "MapEvent 的自动生成类参考。"
---
# MapEvent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class MapEvent : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/MapEvents/MapEvent.cs`

## 概述

`MapEvent` 位于 `TaleWorlds.CampaignSystem.MapEvents`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.MapEvents` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TroopUpgradeTracker` | `public TroopUpgradeTracker TroopUpgradeTracker { get; }` |
| `PlayerMapEvent` | `public static MapEvent PlayerMapEvent { get; }` |
| `PlayerSide` | `public BattleSideEnum PlayerSide { get; }` |
| `Component` | `public MapEventComponent Component { get; }` |
| `State` | `public MapEventState State { get; }` |
| `AttackerSide` | `public MapEventSide AttackerSide { get; }` |
| `DefenderSide` | `public MapEventSide DefenderSide { get; }` |
| `InvolvedParties` | `public IEnumerable<PartyBase> InvolvedParties { get; }` |
| `MapEventSettlement` | `public Settlement MapEventSettlement { get; }` |
| `RetreatingSide` | `public BattleSideEnum RetreatingSide { get; }` |
| `EndedByRetreat` | `public bool EndedByRetreat { get; }` |
| `PursuitRoundNumber` | `public int PursuitRoundNumber { get; }` |
| `UpdateCount` | `public int UpdateCount { get; }` |
| `Position` | `public CampaignVec2 Position { get; }` |
| `EventType` | `public MapEvent.BattleTypes EventType { get; set; }` |
| `EventTerrainType` | `public TerrainType EventTerrainType { get; set; }` |
| `IsInvulnerable` | `public bool IsInvulnerable { get; set; }` |
| `IsFieldBattle` | `public bool IsFieldBattle { get; }` |
| `IsRaid` | `public bool IsRaid { get; }` |
| `IsForcingVolunteers` | `public bool IsForcingVolunteers { get; }` |
| `IsForcingSupplies` | `public bool IsForcingSupplies { get; }` |
| `IsSiegeAssault` | `public bool IsSiegeAssault { get; }` |
| `IsHideoutBattle` | `public bool IsHideoutBattle { get; }` |
| `IsSallyOut` | `public bool IsSallyOut { get; }` |
| `IsSiegeOutside` | `public bool IsSiegeOutside { get; }` |
| `IsBlockade` | `public bool IsBlockade { get; }` |
| `IsBlockadeSallyOut` | `public bool IsBlockadeSallyOut { get; }` |
| `IsSiegeAmbush` | `public bool IsSiegeAmbush { get; }` |
| `IsVisible` | `public bool IsVisible { get; }` |
| `IsPlayerMapEvent` | `public bool IsPlayerMapEvent { get; set; }` |
| `BattleState` | `public BattleState BattleState { get; set; }` |
| `Winner` | `public MapEventSide Winner { get; }` |
| `WinningSide` | `public BattleSideEnum WinningSide { get; }` |
| `DefeatedSide` | `public BattleSideEnum DefeatedSide { get; }` |
| `BattleResultExplainers` | `public MapEventResultExplainer BattleResultExplainers { get; }` |
| `IsFinalized` | `public bool IsFinalized { get; }` |
| `BattleStartTime` | `public CampaignTime BattleStartTime { get; }` |
| `HasWinner` | `public bool HasWinner { get; set; }` |
| `IsPlayerSimulation` | `public bool IsPlayerSimulation { get; set; }` |
| `IsNavalMapEvent` | `public bool IsNavalMapEvent { get; }` |
| `WonRounds` | `public MBList<BattleSideEnum> WonRounds { get; }` |

## 主要方法

### BeginWait
`public void BeginWait()`

**用途 / Purpose:** 调用 BeginWait 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.BeginWait();
```

### GetMapEventSide
`public MapEventSide GetMapEventSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 map event side 的结果。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.GetMapEventSide(side);
```

### PartiesOnSide
`public MBReadOnlyList<MapEventParty> PartiesOnSide(BattleSideEnum side)`

**用途 / Purpose:** 调用 PartiesOnSide 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.PartiesOnSide(side);
```

### GetBattleRewards
`public void GetBattleRewards(PartyBase party, out float renownChange, out float influenceChange, out float moraleChange, out float goldChange, out float playerEarnedLootPercentage)`

**用途 / Purpose:** 读取并返回当前对象中 battle rewards 的结果。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.GetBattleRewards(party, renownChange, influenceChange, moraleChange, goldChange, playerEarnedLootPercentage);
```

### GetNumberOfInvolvedMen
`public int GetNumberOfInvolvedMen()`

**用途 / Purpose:** 读取并返回当前对象中 number of involved men 的结果。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.GetNumberOfInvolvedMen();
```

### GetNumberOfInvolvedMen
`public int GetNumberOfInvolvedMen(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 number of involved men 的结果。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.GetNumberOfInvolvedMen(side);
```

### FinishBattleAndKeepSiegeEvent
`public void FinishBattleAndKeepSiegeEvent()`

**用途 / Purpose:** 结束battle and keep siege event流程并执行必要的收尾工作。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.FinishBattleAndKeepSiegeEvent();
```

### SimulateBattleSetup
`public void SimulateBattleSetup(FlattenedTroopRoster priorTroops)`

**用途 / Purpose:** 调用 SimulateBattleSetup 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.SimulateBattleSetup(priorTroops);
```

### SimulateBattleRound
`public void SimulateBattleRound(int simulationTicksDefender, int simulationTicksAttacker)`

**用途 / Purpose:** 调用 SimulateBattleRound 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.SimulateBattleRound(0, 0);
```

### SetOverrideWinner
`public void SetOverrideWinner(BattleSideEnum winner)`

**用途 / Purpose:** 为 override winner 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.SetOverrideWinner(winner);
```

### SetDefenderPulledBack
`public void SetDefenderPulledBack()`

**用途 / Purpose:** 为 defender pulled back 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.SetDefenderPulledBack();
```

### ResetBattleState
`public void ResetBattleState()`

**用途 / Purpose:** 将 battle state 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.ResetBattleState();
```

### IsPlayerSergeant
`public bool IsPlayerSergeant()`

**用途 / Purpose:** 判断当前对象是否处于 player sergeant 状态或条件。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.IsPlayerSergeant();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.ToString();
```

### FinalizeEvent
`public void FinalizeEvent()`

**用途 / Purpose:** 调用 FinalizeEvent 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.FinalizeEvent();
```

### HasTroopsOnBothSides
`public bool HasTroopsOnBothSides()`

**用途 / Purpose:** 判断当前对象是否已经持有 troops on both sides。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.HasTroopsOnBothSides();
```

### GetLeaderParty
`public PartyBase GetLeaderParty(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 leader party 的结果。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.GetLeaderParty(side);
```

### GetRenownValue
`public float GetRenownValue(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 renown value 的结果。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.GetRenownValue(side);
```

### RecalculateRenownAndInfluenceValues
`public void RecalculateRenownAndInfluenceValues(PartyBase party)`

**用途 / Purpose:** 重新计算renown and influence values以反映最新状态。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.RecalculateRenownAndInfluenceValues(party);
```

### RecalculateStrengthOfSides
`public void RecalculateStrengthOfSides()`

**用途 / Purpose:** 重新计算strength of sides以反映最新状态。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.RecalculateStrengthOfSides();
```

### DoSurrender
`public void DoSurrender(BattleSideEnum side)`

**用途 / Purpose:** 调用 DoSurrender 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.DoSurrender(side);
```

### EndByRunAway
`public void EndByRunAway()`

**用途 / Purpose:** 调用 EndByRunAway 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.EndByRunAway();
```

### GetOtherSide
`public BattleSideEnum GetOtherSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 other side 的结果。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.GetOtherSide(side);
```

### CanPartyJoinBattle
`public bool CanPartyJoinBattle(PartyBase party, BattleSideEnum side)`

**用途 / Purpose:** 检查当前对象是否满足 party join battle 的前置条件。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.CanPartyJoinBattle(party, side);
```

### GetStrengthsRelativeToParty
`public void GetStrengthsRelativeToParty(BattleSideEnum partySide, out float partySideStrength, out float opposingSideStrength)`

**用途 / Purpose:** 读取并返回当前对象中 strengths relative to party 的结果。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.GetStrengthsRelativeToParty(partySide, partySideStrength, opposingSideStrength);
```

### CheckIfBattleShouldContinueAfterBattleMission
`public bool CheckIfBattleShouldContinueAfterBattleMission(CampaignBattleResult campaignBattleResult)`

**用途 / Purpose:** 检查if battle should continue after battle mission在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
var result = mapEvent.CheckIfBattleShouldContinueAfterBattleMission(campaignBattleResult);
```

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**用途 / Purpose:** 为 position after map change 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.SetPositionAfterMapChange(newPosition);
```

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**用途 / Purpose:** 检查positions for map change and update if needed在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MapEvent 实例
MapEvent mapEvent = ...;
mapEvent.CheckPositionsForMapChangeAndUpdateIfNeeded();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapEvent mapEvent = ...;
mapEvent.BeginWait();
```

## 参见

- [本区域目录](../)