---
title: "MapEventSide"
description: "Auto-generated class reference for MapEventSide."
---
# MapEventSide

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapEventSide`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventSide.cs`

## Overview

`MapEventSide` lives in `TaleWorlds.CampaignSystem.MapEvents` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapEvents` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SimulationShipList` | `public MBList<Ship> SimulationShipList { get; }` |
| `WeightedShipCombatFactor` | `public float WeightedShipCombatFactor { get; }` |
| `LeaderParty` | `public PartyBase LeaderParty { get; }` |
| `MissionSide` | `public BattleSideEnum MissionSide { get; }` |
| `CasualtyStrength` | `public float CasualtyStrength { get; }` |
| `HasReadyTroops` | `public bool HasReadyTroops { get; }` |

## Key Methods

### GetTroops
`public IReadOnlyList<UniqueTroopDescriptor> GetTroops()`

**Purpose:** **Purpose:** Reads and returns the troops value held by the this instance.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
var result = mapEventSide.GetTroops();
```

### GetTotalHealthyHeroCountOfSide
`public int GetTotalHealthyHeroCountOfSide()`

**Purpose:** **Purpose:** Reads and returns the total healthy hero count of side value held by the this instance.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
var result = mapEventSide.GetTotalHealthyHeroCountOfSide();
```

### CountTroops
`public int CountTroops(Func<FlattenedTroopRosterElement, bool> pred)`

**Purpose:** **Purpose:** Executes the CountTroops logic.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
var result = mapEventSide.CountTroops(func<FlattenedTroopRosterElement, false);
```

### GetTotalHealthyTroopCountOfSide
`public int GetTotalHealthyTroopCountOfSide()`

**Purpose:** **Purpose:** Reads and returns the total healthy troop count of side value held by the this instance.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
var result = mapEventSide.GetTotalHealthyTroopCountOfSide();
```

### RecalculateMemberCountOfSide
`public int RecalculateMemberCountOfSide()`

**Purpose:** **Purpose:** Recalculates member count of side to reflect the latest state.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
var result = mapEventSide.RecalculateMemberCountOfSide();
```

### RecalculateStrengthOfSide
`public float RecalculateStrengthOfSide()`

**Purpose:** **Purpose:** Recalculates strength of side to reflect the latest state.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
var result = mapEventSide.RecalculateStrengthOfSide();
```

### IsMainPartyAmongParties
`public bool IsMainPartyAmongParties()`

**Purpose:** **Purpose:** Determines whether the this instance is in the main party among parties state or condition.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
var result = mapEventSide.IsMainPartyAmongParties();
```

### CalculateRenownAndInfluenceValuesOnPartyInvolved
`public void CalculateRenownAndInfluenceValuesOnPartyInvolved(float strengthOfSide)`

**Purpose:** **Purpose:** Calculates the current value or result of renown and influence values on party involved.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.CalculateRenownAndInfluenceValuesOnPartyInvolved(0);
```

### GetSideMorale
`public float GetSideMorale()`

**Purpose:** **Purpose:** Reads and returns the side morale value held by the this instance.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
var result = mapEventSide.GetSideMorale();
```

### HandleMapEventEnd
`public void HandleMapEventEnd()`

**Purpose:** **Purpose:** Executes the response logic associated with map event end.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.HandleMapEventEnd();
```

### AddHeroDamage
`public static void AddHeroDamage(Hero character, int damage)`

**Purpose:** **Purpose:** Adds hero damage to the current collection or state.

```csharp
// Static call; no instance required
MapEventSide.AddHeroDamage(character, 0);
```

### AllocateShips
`public void AllocateShips()`

**Purpose:** **Purpose:** Executes the AllocateShips logic.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.AllocateShips();
```

### AllocateSiegeEngines
`public void AllocateSiegeEngines()`

**Purpose:** **Purpose:** Executes the AllocateSiegeEngines logic.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.AllocateSiegeEngines();
```

### AllocateTroops
`public void AllocateTroops(ref List<UniqueTroopDescriptor> troopsList, int numberToAllocate, Func<UniqueTroopDescriptor, MapEventParty, bool> customAllocationConditions = null)`

**Purpose:** **Purpose:** Executes the AllocateTroops logic.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.AllocateTroops(troopsList, 0, func<UniqueTroopDescriptor, mapEventParty, false);
```

### GetAllTroops
`public void GetAllTroops(ref List<UniqueTroopDescriptor> troopsList)`

**Purpose:** **Purpose:** Reads and returns the all troops value held by the this instance.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.GetAllTroops(troopsList);
```

### GetAllocatedTroop
`public CharacterObject GetAllocatedTroop(UniqueTroopDescriptor troopDesc0)`

**Purpose:** **Purpose:** Reads and returns the allocated troop value held by the this instance.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
var result = mapEventSide.GetAllocatedTroop(troopDesc0);
```

### GetReadyTroop
`public CharacterObject GetReadyTroop(UniqueTroopDescriptor troopDesc0)`

**Purpose:** **Purpose:** Reads and returns the ready troop value held by the this instance.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
var result = mapEventSide.GetReadyTroop(troopDesc0);
```

### GetAllocatedTroopParty
`public PartyBase GetAllocatedTroopParty(UniqueTroopDescriptor troopDescriptor)`

**Purpose:** **Purpose:** Reads and returns the allocated troop party value held by the this instance.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
var result = mapEventSide.GetAllocatedTroopParty(troopDescriptor);
```

### GetReadyTroopParty
`public PartyBase GetReadyTroopParty(UniqueTroopDescriptor troopDescriptor)`

**Purpose:** **Purpose:** Reads and returns the ready troop party value held by the this instance.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
var result = mapEventSide.GetReadyTroopParty(troopDescriptor);
```

### OnTroopWounded
`public void OnTroopWounded(UniqueTroopDescriptor troopDesc1)`

**Purpose:** **Purpose:** Invoked when the troop wounded event is raised.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.OnTroopWounded(troopDesc1);
```

### OnTroopKilled
`public void OnTroopKilled(UniqueTroopDescriptor troopDesc1)`

**Purpose:** **Purpose:** Invoked when the troop killed event is raised.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.OnTroopKilled(troopDesc1);
```

### OnTroopRouted
`public void OnTroopRouted(UniqueTroopDescriptor troopDesc1, bool isOrderRetreat)`

**Purpose:** **Purpose:** Invoked when the troop routed event is raised.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.OnTroopRouted(troopDesc1, false);
```

### OnTroopScoreHit
`public void OnTroopScoreHit(UniqueTroopDescriptor troopDesc1, CharacterObject attackedTroop, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon, bool isSimulatedHit)`

**Purpose:** **Purpose:** Invoked when the troop score hit event is raised.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.OnTroopScoreHit(troopDesc1, attackedTroop, 0, false, false, attackerWeapon, false);
```

### OnShipScoreHit
`public void OnShipScoreHit(Ship strikerShip, Ship struckShip, SiegeEngineType siegeEngine, int damage, bool isFinishingStrike)`

**Purpose:** **Purpose:** Invoked when the ship score hit event is raised.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.OnShipScoreHit(strikerShip, struckShip, siegeEngine, 0, false);
```

### OnShipDamaged
`public void OnShipDamaged(Ship struckShip, SiegeEngineType siegeEngine, int damage)`

**Purpose:** **Purpose:** Invoked when the ship damaged event is raised.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.OnShipDamaged(struckShip, siegeEngine, 0);
```

### MakeReadyForSimulation
`public void MakeReadyForSimulation(FlattenedTroopRoster priorTroops, int sizeOfSide)`

**Purpose:** **Purpose:** Executes the MakeReadyForSimulation logic.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.MakeReadyForSimulation(priorTroops, 0);
```

### MakeReadyForMission
`public void MakeReadyForMission(FlattenedTroopRoster priorTroops)`

**Purpose:** **Purpose:** Executes the MakeReadyForMission logic.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.MakeReadyForMission(priorTroops);
```

### EndSimulation
`public void EndSimulation()`

**Purpose:** **Purpose:** Executes the EndSimulation logic.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.EndSimulation();
```

### Clear
`public void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.Clear();
```

### SelectRandomSimulationTroop
`public UniqueTroopDescriptor SelectRandomSimulationTroop()`

**Purpose:** **Purpose:** Executes the SelectRandomSimulationTroop logic.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
var result = mapEventSide.SelectRandomSimulationTroop();
```

### GetRandomSimulationShip
`public Ship GetRandomSimulationShip()`

**Purpose:** **Purpose:** Reads and returns the random simulation ship value held by the this instance.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
var result = mapEventSide.GetRandomSimulationShip();
```

### Surrender
`public void Surrender()`

**Purpose:** **Purpose:** Executes the Surrender logic.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.Surrender();
```

### Route
`public void Route()`

**Purpose:** **Purpose:** Executes the Route logic.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.Route();
```

### CommitXpGains
`public void CommitXpGains()`

**Purpose:** **Purpose:** Executes the CommitXpGains logic.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.CommitXpGains();
```

### CommitRenownChanges
`public void CommitRenownChanges()`

**Purpose:** **Purpose:** Executes the CommitRenownChanges logic.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.CommitRenownChanges();
```

### CommitInfluenceChanges
`public void CommitInfluenceChanges()`

**Purpose:** **Purpose:** Executes the CommitInfluenceChanges logic.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.CommitInfluenceChanges();
```

### CommitMoraleChanges
`public void CommitMoraleChanges()`

**Purpose:** **Purpose:** Executes the CommitMoraleChanges logic.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.CommitMoraleChanges();
```

### CommitGoldChanges
`public void CommitGoldChanges()`

**Purpose:** **Purpose:** Executes the CommitGoldChanges logic.

```csharp
// Obtain an instance of MapEventSide from the subsystem API first
MapEventSide mapEventSide = ...;
mapEventSide.CommitGoldChanges();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapEventSide mapEventSide = ...;
mapEventSide.GetTroops();
```

## See Also

- [Area Index](../)