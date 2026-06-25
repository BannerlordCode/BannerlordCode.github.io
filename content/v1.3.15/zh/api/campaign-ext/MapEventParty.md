---
title: "MapEventParty"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapEventParty`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 更新 `update` 的状态或数据。

### OnTroopKilled
`public void OnTroopKilled(UniqueTroopDescriptor troopSeed)`

**用途 / Purpose:** 当 `troop killed` 事件触发时调用此方法。

### OnTroopWounded
`public void OnTroopWounded(UniqueTroopDescriptor troopSeed)`

**用途 / Purpose:** 当 `troop wounded` 事件触发时调用此方法。

### OnTroopRouted
`public void OnTroopRouted(UniqueTroopDescriptor troopSeed)`

**用途 / Purpose:** 当 `troop routed` 事件触发时调用此方法。

### OnShipSunk
`public void OnShipSunk(Ship ship)`

**用途 / Purpose:** 当 `ship sunk` 事件触发时调用此方法。

### OnShipDamaged
`public void OnShipDamaged(Ship ship, SiegeEngineType siegeEngine, int damage)`

**用途 / Purpose:** 当 `ship damaged` 事件触发时调用此方法。

### OnShipScoreHit
`public void OnShipScoreHit(Ship ship, Ship struckShip, SiegeEngineType siegeEngine, int damage, bool isFinishingStrike)`

**用途 / Purpose:** 当 `ship score hit` 事件触发时调用此方法。

### GetTroop
`public CharacterObject GetTroop(UniqueTroopDescriptor troopSeed)`

**用途 / Purpose:** 获取 `troop` 的当前值。

### GetTroopState
`public RosterTroopState GetTroopState(UniqueTroopDescriptor troopSeed)`

**用途 / Purpose:** 获取 `troop state` 的当前值。

### OnRoundEnd
`public void OnRoundEnd(MapEventSide partySide, BattleSideEnum roundWinner)`

**用途 / Purpose:** 当 `round end` 事件触发时调用此方法。

### OnTroopScoreHit
`public void OnTroopScoreHit(UniqueTroopDescriptor attackerTroopDesc, CharacterObject attackedTroop, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon, bool isSimulatedHit)`

**用途 / Purpose:** 当 `troop score hit` 事件触发时调用此方法。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
var value = new MapEventParty();
value.Update();
```

## 参见

- [完整类目录](../catalog)