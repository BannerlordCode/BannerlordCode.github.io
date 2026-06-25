---
title: "MapEventParty"
description: "MapEventParty 的自动生成类参考。"
---
# MapEventParty

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapEventParty`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/MapEvents/MapEventParty.cs`

## 概述

`MapEventParty` 位于 `TaleWorlds.CampaignSystem.MapEvents`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.MapEvents` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Party` | `public PartyBase Party { get; }` |
| `GainedRenown` | `public float GainedRenown { get; set; }` |
| `GainedInfluence` | `public float GainedInfluence { get; set; }` |
| `MoraleChange` | `public float MoraleChange { get; set; }` |
| `PlunderedGold` | `public int PlunderedGold { get; set; }` |
| `GoldLost` | `public int GoldLost { get; set; }` |
| `HealthyManCountAtStart` | `public int HealthyManCountAtStart { get; }` |
| `DiedInBattle` | `public TroopRoster DiedInBattle { get; }` |
| `WoundedInBattle` | `public TroopRoster WoundedInBattle { get; }` |
| `RoutedInBattle` | `public TroopRoster RoutedInBattle { get; }` |
| `ContributionToBattle` | `public int ContributionToBattle { get; }` |
| `IsNpcParty` | `public bool IsNpcParty { get; }` |
| `RosterToReceiveLootMembers` | `public TroopRoster RosterToReceiveLootMembers { get; }` |
| `RosterToReceiveLootPrisoners` | `public TroopRoster RosterToReceiveLootPrisoners { get; }` |
| `RosterToReceiveLootItems` | `public ItemRoster RosterToReceiveLootItems { get; }` |
| `Troops` | `public FlattenedTroopRoster Troops { get; }` |
| `Ships` | `public MBReadOnlyList<Ship> Ships { get; }` |

## 主要方法

### Update
`public void Update()`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 MapEventParty 实例
MapEventParty mapEventParty = ...;
mapEventParty.Update();
```

### OnTroopKilled
`public void OnTroopKilled(UniqueTroopDescriptor troopSeed)`

**用途 / Purpose:** 在 「troop killed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEventParty 实例
MapEventParty mapEventParty = ...;
mapEventParty.OnTroopKilled(troopSeed);
```

### OnTroopWounded
`public void OnTroopWounded(UniqueTroopDescriptor troopSeed)`

**用途 / Purpose:** 在 「troop wounded」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEventParty 实例
MapEventParty mapEventParty = ...;
mapEventParty.OnTroopWounded(troopSeed);
```

### OnTroopRouted
`public void OnTroopRouted(UniqueTroopDescriptor troopSeed)`

**用途 / Purpose:** 在 「troop routed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEventParty 实例
MapEventParty mapEventParty = ...;
mapEventParty.OnTroopRouted(troopSeed);
```

### OnShipSunk
`public void OnShipSunk(Ship ship)`

**用途 / Purpose:** 在 「ship sunk」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEventParty 实例
MapEventParty mapEventParty = ...;
mapEventParty.OnShipSunk(ship);
```

### OnShipDamaged
`public void OnShipDamaged(Ship ship, SiegeEngineType siegeEngine, int damage)`

**用途 / Purpose:** 在 「ship damaged」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEventParty 实例
MapEventParty mapEventParty = ...;
mapEventParty.OnShipDamaged(ship, siegeEngine, 0);
```

### OnShipScoreHit
`public void OnShipScoreHit(Ship ship, Ship struckShip, SiegeEngineType siegeEngine, int damage, bool isFinishingStrike)`

**用途 / Purpose:** 在 「ship score hit」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEventParty 实例
MapEventParty mapEventParty = ...;
mapEventParty.OnShipScoreHit(ship, struckShip, siegeEngine, 0, false);
```

### GetTroop
`public CharacterObject GetTroop(UniqueTroopDescriptor troopSeed)`

**用途 / Purpose:** 读取并返回当前对象中 「troop」 的结果。

```csharp
// 先通过子系统 API 拿到 MapEventParty 实例
MapEventParty mapEventParty = ...;
var result = mapEventParty.GetTroop(troopSeed);
```

### GetTroopState
`public RosterTroopState GetTroopState(UniqueTroopDescriptor troopSeed)`

**用途 / Purpose:** 读取并返回当前对象中 「troop state」 的结果。

```csharp
// 先通过子系统 API 拿到 MapEventParty 实例
MapEventParty mapEventParty = ...;
var result = mapEventParty.GetTroopState(troopSeed);
```

### OnRoundEnd
`public void OnRoundEnd(MapEventSide partySide, BattleSideEnum roundWinner)`

**用途 / Purpose:** 在 「round end」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEventParty 实例
MapEventParty mapEventParty = ...;
mapEventParty.OnRoundEnd(partySide, roundWinner);
```

### OnTroopScoreHit
`public void OnTroopScoreHit(UniqueTroopDescriptor attackerTroopDesc, CharacterObject attackedTroop, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon, bool isSimulatedHit)`

**用途 / Purpose:** 在 「troop score hit」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEventParty 实例
MapEventParty mapEventParty = ...;
mapEventParty.OnTroopScoreHit(attackerTroopDesc, attackedTroop, 0, false, false, attackerWeapon, false);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 MapEventParty 实例
MapEventParty mapEventParty = ...;
var result = mapEventParty.ToString();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapEventParty mapEventParty = ...;
mapEventParty.Update();
```

## 参见

- [本区域目录](../)