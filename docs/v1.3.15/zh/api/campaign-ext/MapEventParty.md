<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapEventParty`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapEventParty

**命名空间:** TaleWorlds.CampaignSystem.MapEvents
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`MapEventParty` 是 `TaleWorlds.CampaignSystem.MapEvents` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public void Update()
```

### OnTroopKilled

```csharp
public void OnTroopKilled(UniqueTroopDescriptor troopSeed)
```

### OnTroopWounded

```csharp
public void OnTroopWounded(UniqueTroopDescriptor troopSeed)
```

### OnTroopRouted

```csharp
public void OnTroopRouted(UniqueTroopDescriptor troopSeed)
```

### OnShipSunk

```csharp
public void OnShipSunk(Ship ship)
```

### OnShipDamaged

```csharp
public void OnShipDamaged(Ship ship, SiegeEngineType siegeEngine, int damage)
```

### OnShipScoreHit

```csharp
public void OnShipScoreHit(Ship ship, Ship struckShip, SiegeEngineType siegeEngine, int damage, bool isFinishingStrike)
```

### GetTroop

```csharp
public CharacterObject GetTroop(UniqueTroopDescriptor troopSeed)
```

### GetTroopState

```csharp
public RosterTroopState GetTroopState(UniqueTroopDescriptor troopSeed)
```

### OnRoundEnd

```csharp
public void OnRoundEnd(MapEventSide partySide, BattleSideEnum roundWinner)
```

### OnTroopScoreHit

```csharp
public void OnTroopScoreHit(UniqueTroopDescriptor attackerTroopDesc, CharacterObject attackedTroop, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon, bool isSimulatedHit)
```

### ToString

```csharp
public override string ToString()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)