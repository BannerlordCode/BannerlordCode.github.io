---
title: "MapEventSide"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEventSide`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapEventSide

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapEventSide`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/MapEvents/MapEventSide.cs`

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
| `Parties` | `public MBReadOnlyList<MapEventParty> Parties { get; }` |
| `MissionSide` | `public BattleSideEnum MissionSide { get; }` |
| `TroopCount` | `public int TroopCount { get; }` |
| `HasReadyTroops` | `public bool HasReadyTroops { get; }` |
| `NumRemainingSimulationTroops` | `public int NumRemainingSimulationTroops { get; }` |
| `NumRemainingSimulationShips` | `public int NumRemainingSimulationShips { get; }` |
| `NumRemainingSimulationSiegeEngines` | `public int NumRemainingSimulationSiegeEngines { get; }` |
| `CasualtyStrength` | `public float CasualtyStrength { get; }` |
| `HealthyTroopCountAtMapEventStart` | `public int HealthyTroopCountAtMapEventStart { get; }` |
| `MapEvent` | `public MapEvent MapEvent { get; }` |
| `OtherSide` | `public MapEventSide OtherSide { get; }` |
| `MapFaction` | `public IFaction MapFaction { get; }` |

## Key Methods

### CountTroops
`public int CountTroops(Func<FlattenedTroopRosterElement, bool> pred)`

**Purpose:** Handles logic related to `count troops`.

### GetTotalHealthyTroopCountOfSide
`public int GetTotalHealthyTroopCountOfSide()`

**Purpose:** Gets the current value of `total healthy troop count of side`.

### GetTotalHealthyHeroCountOfSide
`public int GetTotalHealthyHeroCountOfSide()`

**Purpose:** Gets the current value of `total healthy hero count of side`.

### RecalculateMemberCountOfSide
`public int RecalculateMemberCountOfSide()`

**Purpose:** Handles logic related to `recalculate member count of side`.

### RecalculateStrengthOfSide
`public float RecalculateStrengthOfSide()`

**Purpose:** Handles logic related to `recalculate strength of side`.

### IsMainPartyAmongParties
`public bool IsMainPartyAmongParties()`

**Purpose:** Handles logic related to `is main party among parties`.

### GetPlayerPartyContributionRate
`public float GetPlayerPartyContributionRate()`

**Purpose:** Gets the current value of `player party contribution rate`.

### CalculateRenownAndInfluenceValues
`public void CalculateRenownAndInfluenceValues(float strengthOfSide)`

**Purpose:** Handles logic related to `calculate renown and influence values`.

### DistributeRenownAndInfluence
`public virtual void DistributeRenownAndInfluence(MapEventResultExplainer resultExplainers = null)`

**Purpose:** Handles logic related to `distribute renown and influence`.

### ApplyRenownAndInfluenceChanges
`public void ApplyRenownAndInfluenceChanges()`

**Purpose:** Applies `renown and influence changes` to the current object.

### GetSideMorale
`public float GetSideMorale()`

**Purpose:** Gets the current value of `side morale`.

### ApplyFinalRewardsAndChanges
`public void ApplyFinalRewardsAndChanges()`

**Purpose:** Applies `final rewards and changes` to the current object.

### HandleMapEventEnd
`public void HandleMapEventEnd()`

**Purpose:** Handles the `map event end` event or callback.

### AddHeroDamage
`public void AddHeroDamage(Hero character, int damage)`

**Purpose:** Adds `hero damage` to the current collection or state.

### AllocateShips
`public void AllocateShips()`

**Purpose:** Handles logic related to `allocate ships`.

### AllocateSiegeEngines
`public void AllocateSiegeEngines()`

**Purpose:** Handles logic related to `allocate siege engines`.

### AllocateTroops
`public void AllocateTroops(ref List<UniqueTroopDescriptor> troopsList, int number = -1, Func<UniqueTroopDescriptor, MapEventParty, bool> customAllocationConditions = null)`

**Purpose:** Handles logic related to `allocate troops`.

### GetAllTroops
`public void GetAllTroops(ref List<UniqueTroopDescriptor> troopsList)`

**Purpose:** Gets the current value of `all troops`.

### GetAllocatedTroop
`public CharacterObject GetAllocatedTroop(UniqueTroopDescriptor troopDesc0)`

**Purpose:** Gets the current value of `allocated troop`.

### GetReadyTroop
`public CharacterObject GetReadyTroop(UniqueTroopDescriptor troopDesc0)`

**Purpose:** Gets the current value of `ready troop`.

### GetAllocatedTroopParty
`public PartyBase GetAllocatedTroopParty(UniqueTroopDescriptor troopDescriptor)`

**Purpose:** Gets the current value of `allocated troop party`.

### GetReadyTroopParty
`public PartyBase GetReadyTroopParty(UniqueTroopDescriptor troopDescriptor)`

**Purpose:** Gets the current value of `ready troop party`.

### OnTroopWounded
`public void OnTroopWounded(UniqueTroopDescriptor troopDesc1)`

**Purpose:** Called when the `troop wounded` event is raised.

### OnTroopKilled
`public void OnTroopKilled(UniqueTroopDescriptor troopDesc1)`

**Purpose:** Called when the `troop killed` event is raised.

### OnTroopRouted
`public void OnTroopRouted(UniqueTroopDescriptor troopDesc1)`

**Purpose:** Called when the `troop routed` event is raised.

### OnTroopScoreHit
`public void OnTroopScoreHit(UniqueTroopDescriptor troopDesc1, CharacterObject attackedTroop, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon, bool isSimulatedHit)`

**Purpose:** Called when the `troop score hit` event is raised.

### OnShipScoreHit
`public void OnShipScoreHit(Ship strikerShip, Ship struckShip, SiegeEngineType siegeEngine, int damage, bool isFinishingStrike)`

**Purpose:** Called when the `ship score hit` event is raised.

### OnShipDamaged
`public void OnShipDamaged(Ship struckShip, SiegeEngineType siegeEngine, int damage)`

**Purpose:** Called when the `ship damaged` event is raised.

### MakeReadyForSimulation
`public void MakeReadyForSimulation(FlattenedTroopRoster priorTroops, int sizeOfSide = -1)`

**Purpose:** Handles logic related to `make ready for simulation`.

### MakeReadyForMission
`public void MakeReadyForMission(FlattenedTroopRoster priorTroops)`

**Purpose:** Handles logic related to `make ready for mission`.

### EndSimulation
`public void EndSimulation()`

**Purpose:** Handles logic related to `end simulation`.

### ItemRosterForPlayerLootShare
`public ItemRoster ItemRosterForPlayerLootShare(PartyBase playerParty)`

**Purpose:** Handles logic related to `item roster for player loot share`.

### MemberRosterForPlayerLootShare
`public TroopRoster MemberRosterForPlayerLootShare(PartyBase playerParty)`

**Purpose:** Handles logic related to `member roster for player loot share`.

### PrisonerRosterForPlayerLootShare
`public TroopRoster PrisonerRosterForPlayerLootShare(PartyBase playerParty)`

**Purpose:** Handles logic related to `prisoner roster for player loot share`.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### SelectRandomSimulationTroop
`public UniqueTroopDescriptor SelectRandomSimulationTroop()`

**Purpose:** Handles logic related to `select random simulation troop`.

### GetRandomSimulationSiegeEngine
`public ValueTuple<SiegeEngineType, Ship> GetRandomSimulationSiegeEngine()`

**Purpose:** Gets the current value of `random simulation siege engine`.

### GetRandomSimulationShip
`public Ship GetRandomSimulationShip()`

**Purpose:** Gets the current value of `random simulation ship`.

### Surrender
`public void Surrender()`

**Purpose:** Handles logic related to `surrender`.

### Route
`public void Route()`

**Purpose:** Handles logic related to `route`.

## Usage Example

```csharp
var value = new MapEventSide();
value.CountTroops(func<FlattenedTroopRosterElement, false);
```

## See Also

- [Complete Class Catalog](../catalog)