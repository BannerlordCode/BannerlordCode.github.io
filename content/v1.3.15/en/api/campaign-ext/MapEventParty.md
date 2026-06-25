---
title: "MapEventParty"
description: "Auto-generated class reference for MapEventParty."
---
# MapEventParty

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapEventParty`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/MapEvents/MapEventParty.cs`

## Overview

`MapEventParty` lives in `TaleWorlds.CampaignSystem.MapEvents` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapEvents` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public void Update()`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of MapEventParty from the subsystem API first
MapEventParty mapEventParty = ...;
mapEventParty.Update();
```

### OnTroopKilled
`public void OnTroopKilled(UniqueTroopDescriptor troopSeed)`

**Purpose:** Invoked when the troop killed event is raised.

```csharp
// Obtain an instance of MapEventParty from the subsystem API first
MapEventParty mapEventParty = ...;
mapEventParty.OnTroopKilled(troopSeed);
```

### OnTroopWounded
`public void OnTroopWounded(UniqueTroopDescriptor troopSeed)`

**Purpose:** Invoked when the troop wounded event is raised.

```csharp
// Obtain an instance of MapEventParty from the subsystem API first
MapEventParty mapEventParty = ...;
mapEventParty.OnTroopWounded(troopSeed);
```

### OnTroopRouted
`public void OnTroopRouted(UniqueTroopDescriptor troopSeed)`

**Purpose:** Invoked when the troop routed event is raised.

```csharp
// Obtain an instance of MapEventParty from the subsystem API first
MapEventParty mapEventParty = ...;
mapEventParty.OnTroopRouted(troopSeed);
```

### OnShipSunk
`public void OnShipSunk(Ship ship)`

**Purpose:** Invoked when the ship sunk event is raised.

```csharp
// Obtain an instance of MapEventParty from the subsystem API first
MapEventParty mapEventParty = ...;
mapEventParty.OnShipSunk(ship);
```

### OnShipDamaged
`public void OnShipDamaged(Ship ship, SiegeEngineType siegeEngine, int damage)`

**Purpose:** Invoked when the ship damaged event is raised.

```csharp
// Obtain an instance of MapEventParty from the subsystem API first
MapEventParty mapEventParty = ...;
mapEventParty.OnShipDamaged(ship, siegeEngine, 0);
```

### OnShipScoreHit
`public void OnShipScoreHit(Ship ship, Ship struckShip, SiegeEngineType siegeEngine, int damage, bool isFinishingStrike)`

**Purpose:** Invoked when the ship score hit event is raised.

```csharp
// Obtain an instance of MapEventParty from the subsystem API first
MapEventParty mapEventParty = ...;
mapEventParty.OnShipScoreHit(ship, struckShip, siegeEngine, 0, false);
```

### GetTroop
`public CharacterObject GetTroop(UniqueTroopDescriptor troopSeed)`

**Purpose:** Reads and returns the troop value held by the this instance.

```csharp
// Obtain an instance of MapEventParty from the subsystem API first
MapEventParty mapEventParty = ...;
var result = mapEventParty.GetTroop(troopSeed);
```

### GetTroopState
`public RosterTroopState GetTroopState(UniqueTroopDescriptor troopSeed)`

**Purpose:** Reads and returns the troop state value held by the this instance.

```csharp
// Obtain an instance of MapEventParty from the subsystem API first
MapEventParty mapEventParty = ...;
var result = mapEventParty.GetTroopState(troopSeed);
```

### OnRoundEnd
`public void OnRoundEnd(MapEventSide partySide, BattleSideEnum roundWinner)`

**Purpose:** Invoked when the round end event is raised.

```csharp
// Obtain an instance of MapEventParty from the subsystem API first
MapEventParty mapEventParty = ...;
mapEventParty.OnRoundEnd(partySide, roundWinner);
```

### OnTroopScoreHit
`public void OnTroopScoreHit(UniqueTroopDescriptor attackerTroopDesc, CharacterObject attackedTroop, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon, bool isSimulatedHit)`

**Purpose:** Invoked when the troop score hit event is raised.

```csharp
// Obtain an instance of MapEventParty from the subsystem API first
MapEventParty mapEventParty = ...;
mapEventParty.OnTroopScoreHit(attackerTroopDesc, attackedTroop, 0, false, false, attackerWeapon, false);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of MapEventParty from the subsystem API first
MapEventParty mapEventParty = ...;
var result = mapEventParty.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapEventParty mapEventParty = ...;
mapEventParty.Update();
```

## See Also

- [Area Index](../)