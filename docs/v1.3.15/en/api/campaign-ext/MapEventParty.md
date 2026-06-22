<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEventParty`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapEventParty

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MapEventParty` is a class in the `TaleWorlds.CampaignSystem.MapEvents` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)