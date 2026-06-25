---
title: "MapEventSide"
description: "MapEventSide 的自动生成类参考。"
---
# MapEventSide

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapEventSide`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventSide.cs`

## 概述

`MapEventSide` 位于 `TaleWorlds.CampaignSystem.MapEvents`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.MapEvents` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SimulationShipList` | `public MBList<Ship> SimulationShipList { get; }` |
| `WeightedShipCombatFactor` | `public float WeightedShipCombatFactor { get; }` |
| `LeaderParty` | `public PartyBase LeaderParty { get; }` |
| `MissionSide` | `public BattleSideEnum MissionSide { get; }` |
| `CasualtyStrength` | `public float CasualtyStrength { get; }` |
| `HasReadyTroops` | `public bool HasReadyTroops { get; }` |

## 主要方法

### GetTroops
`public IReadOnlyList<UniqueTroopDescriptor> GetTroops()`

**用途 / Purpose:** 读取并返回当前对象中 troops 的结果。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
var result = mapEventSide.GetTroops();
```

### GetTotalHealthyHeroCountOfSide
`public int GetTotalHealthyHeroCountOfSide()`

**用途 / Purpose:** 读取并返回当前对象中 total healthy hero count of side 的结果。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
var result = mapEventSide.GetTotalHealthyHeroCountOfSide();
```

### CountTroops
`public int CountTroops(Func<FlattenedTroopRosterElement, bool> pred)`

**用途 / Purpose:** 调用 CountTroops 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
var result = mapEventSide.CountTroops(func<FlattenedTroopRosterElement, false);
```

### GetTotalHealthyTroopCountOfSide
`public int GetTotalHealthyTroopCountOfSide()`

**用途 / Purpose:** 读取并返回当前对象中 total healthy troop count of side 的结果。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
var result = mapEventSide.GetTotalHealthyTroopCountOfSide();
```

### RecalculateMemberCountOfSide
`public int RecalculateMemberCountOfSide()`

**用途 / Purpose:** 重新计算member count of side以反映最新状态。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
var result = mapEventSide.RecalculateMemberCountOfSide();
```

### RecalculateStrengthOfSide
`public float RecalculateStrengthOfSide()`

**用途 / Purpose:** 重新计算strength of side以反映最新状态。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
var result = mapEventSide.RecalculateStrengthOfSide();
```

### IsMainPartyAmongParties
`public bool IsMainPartyAmongParties()`

**用途 / Purpose:** 判断当前对象是否处于 main party among parties 状态或条件。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
var result = mapEventSide.IsMainPartyAmongParties();
```

### CalculateRenownAndInfluenceValuesOnPartyInvolved
`public void CalculateRenownAndInfluenceValuesOnPartyInvolved(float strengthOfSide)`

**用途 / Purpose:** 计算renown and influence values on party involved的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.CalculateRenownAndInfluenceValuesOnPartyInvolved(0);
```

### GetSideMorale
`public float GetSideMorale()`

**用途 / Purpose:** 读取并返回当前对象中 side morale 的结果。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
var result = mapEventSide.GetSideMorale();
```

### HandleMapEventEnd
`public void HandleMapEventEnd()`

**用途 / Purpose:** 响应 map event end 事件，执行对应的处理逻辑。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.HandleMapEventEnd();
```

### AddHeroDamage
`public static void AddHeroDamage(Hero character, int damage)`

**用途 / Purpose:** 将 hero damage 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
MapEventSide.AddHeroDamage(character, 0);
```

### AllocateShips
`public void AllocateShips()`

**用途 / Purpose:** 调用 AllocateShips 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.AllocateShips();
```

### AllocateSiegeEngines
`public void AllocateSiegeEngines()`

**用途 / Purpose:** 调用 AllocateSiegeEngines 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.AllocateSiegeEngines();
```

### AllocateTroops
`public void AllocateTroops(ref List<UniqueTroopDescriptor> troopsList, int numberToAllocate, Func<UniqueTroopDescriptor, MapEventParty, bool> customAllocationConditions = null)`

**用途 / Purpose:** 调用 AllocateTroops 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.AllocateTroops(troopsList, 0, func<UniqueTroopDescriptor, mapEventParty, false);
```

### GetAllTroops
`public void GetAllTroops(ref List<UniqueTroopDescriptor> troopsList)`

**用途 / Purpose:** 读取并返回当前对象中 all troops 的结果。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.GetAllTroops(troopsList);
```

### GetAllocatedTroop
`public CharacterObject GetAllocatedTroop(UniqueTroopDescriptor troopDesc0)`

**用途 / Purpose:** 读取并返回当前对象中 allocated troop 的结果。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
var result = mapEventSide.GetAllocatedTroop(troopDesc0);
```

### GetReadyTroop
`public CharacterObject GetReadyTroop(UniqueTroopDescriptor troopDesc0)`

**用途 / Purpose:** 读取并返回当前对象中 ready troop 的结果。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
var result = mapEventSide.GetReadyTroop(troopDesc0);
```

### GetAllocatedTroopParty
`public PartyBase GetAllocatedTroopParty(UniqueTroopDescriptor troopDescriptor)`

**用途 / Purpose:** 读取并返回当前对象中 allocated troop party 的结果。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
var result = mapEventSide.GetAllocatedTroopParty(troopDescriptor);
```

### GetReadyTroopParty
`public PartyBase GetReadyTroopParty(UniqueTroopDescriptor troopDescriptor)`

**用途 / Purpose:** 读取并返回当前对象中 ready troop party 的结果。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
var result = mapEventSide.GetReadyTroopParty(troopDescriptor);
```

### OnTroopWounded
`public void OnTroopWounded(UniqueTroopDescriptor troopDesc1)`

**用途 / Purpose:** 在 troop wounded 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.OnTroopWounded(troopDesc1);
```

### OnTroopKilled
`public void OnTroopKilled(UniqueTroopDescriptor troopDesc1)`

**用途 / Purpose:** 在 troop killed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.OnTroopKilled(troopDesc1);
```

### OnTroopRouted
`public void OnTroopRouted(UniqueTroopDescriptor troopDesc1, bool isOrderRetreat)`

**用途 / Purpose:** 在 troop routed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.OnTroopRouted(troopDesc1, false);
```

### OnTroopScoreHit
`public void OnTroopScoreHit(UniqueTroopDescriptor troopDesc1, CharacterObject attackedTroop, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon, bool isSimulatedHit)`

**用途 / Purpose:** 在 troop score hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.OnTroopScoreHit(troopDesc1, attackedTroop, 0, false, false, attackerWeapon, false);
```

### OnShipScoreHit
`public void OnShipScoreHit(Ship strikerShip, Ship struckShip, SiegeEngineType siegeEngine, int damage, bool isFinishingStrike)`

**用途 / Purpose:** 在 ship score hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.OnShipScoreHit(strikerShip, struckShip, siegeEngine, 0, false);
```

### OnShipDamaged
`public void OnShipDamaged(Ship struckShip, SiegeEngineType siegeEngine, int damage)`

**用途 / Purpose:** 在 ship damaged 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.OnShipDamaged(struckShip, siegeEngine, 0);
```

### MakeReadyForSimulation
`public void MakeReadyForSimulation(FlattenedTroopRoster priorTroops, int sizeOfSide)`

**用途 / Purpose:** 调用 MakeReadyForSimulation 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.MakeReadyForSimulation(priorTroops, 0);
```

### MakeReadyForMission
`public void MakeReadyForMission(FlattenedTroopRoster priorTroops)`

**用途 / Purpose:** 调用 MakeReadyForMission 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.MakeReadyForMission(priorTroops);
```

### EndSimulation
`public void EndSimulation()`

**用途 / Purpose:** 调用 EndSimulation 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.EndSimulation();
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.Clear();
```

### SelectRandomSimulationTroop
`public UniqueTroopDescriptor SelectRandomSimulationTroop()`

**用途 / Purpose:** 调用 SelectRandomSimulationTroop 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
var result = mapEventSide.SelectRandomSimulationTroop();
```

### GetRandomSimulationShip
`public Ship GetRandomSimulationShip()`

**用途 / Purpose:** 读取并返回当前对象中 random simulation ship 的结果。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
var result = mapEventSide.GetRandomSimulationShip();
```

### Surrender
`public void Surrender()`

**用途 / Purpose:** 调用 Surrender 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.Surrender();
```

### Route
`public void Route()`

**用途 / Purpose:** 调用 Route 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.Route();
```

### CommitXpGains
`public void CommitXpGains()`

**用途 / Purpose:** 调用 CommitXpGains 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.CommitXpGains();
```

### CommitRenownChanges
`public void CommitRenownChanges()`

**用途 / Purpose:** 调用 CommitRenownChanges 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.CommitRenownChanges();
```

### CommitInfluenceChanges
`public void CommitInfluenceChanges()`

**用途 / Purpose:** 调用 CommitInfluenceChanges 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.CommitInfluenceChanges();
```

### CommitMoraleChanges
`public void CommitMoraleChanges()`

**用途 / Purpose:** 调用 CommitMoraleChanges 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.CommitMoraleChanges();
```

### CommitGoldChanges
`public void CommitGoldChanges()`

**用途 / Purpose:** 调用 CommitGoldChanges 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEventSide 实例
MapEventSide mapEventSide = ...;
mapEventSide.CommitGoldChanges();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapEventSide mapEventSide = ...;
mapEventSide.GetTroops();
```

## 参见

- [本区域目录](../)