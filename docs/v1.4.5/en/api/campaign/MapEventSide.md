<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEventSide`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapEventSide

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapEventSide`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventSide.cs`

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

**Purpose:** Gets the current value of `troops`.

### GetTotalHealthyHeroCountOfSide
`public int GetTotalHealthyHeroCountOfSide()`

**Purpose:** Gets the current value of `total healthy hero count of side`.

### CountTroops
`public int CountTroops(Func<FlattenedTroopRosterElement, bool> pred)`

**Purpose:** Handles logic related to `count troops`.

### GetTotalHealthyTroopCountOfSide
`public int GetTotalHealthyTroopCountOfSide()`

**Purpose:** Gets the current value of `total healthy troop count of side`.

### RecalculateMemberCountOfSide
`public int RecalculateMemberCountOfSide()`

**Purpose:** Handles logic related to `recalculate member count of side`.

### RecalculateStrengthOfSide
`public float RecalculateStrengthOfSide()`

**Purpose:** Handles logic related to `recalculate strength of side`.

### IsMainPartyAmongParties
`public bool IsMainPartyAmongParties()`

**Purpose:** Handles logic related to `is main party among parties`.

### CalculateRenownAndInfluenceValuesOnPartyInvolved
`public void CalculateRenownAndInfluenceValuesOnPartyInvolved(float strengthOfSide)`

**Purpose:** Handles logic related to `calculate renown and influence values on party involved`.

### GetSideMorale
`public float GetSideMorale()`

**Purpose:** Gets the current value of `side morale`.

### HandleMapEventEnd
`public void HandleMapEventEnd()`

**Purpose:** Handles the `map event end` event or callback.

### AddHeroDamage
`public static void AddHeroDamage(Hero character, int damage)`

**Purpose:** Adds `hero damage` to the current collection or state.

### AllocateShips
`public void AllocateShips()`

**Purpose:** Handles logic related to `allocate ships`.

### AllocateSiegeEngines
`public void AllocateSiegeEngines()`

**Purpose:** Handles logic related to `allocate siege engines`.

### AllocateTroops
`public void AllocateTroops(ref List<UniqueTroopDescriptor> troopsList, int numberToAllocate, Func<UniqueTroopDescriptor, MapEventParty, bool> customAllocationConditions = null)`

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
`public void OnTroopRouted(UniqueTroopDescriptor troopDesc1, bool isOrderRetreat)`

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
`public void MakeReadyForSimulation(FlattenedTroopRoster priorTroops, int sizeOfSide)`

**Purpose:** Handles logic related to `make ready for simulation`.

### MakeReadyForMission
`public void MakeReadyForMission(FlattenedTroopRoster priorTroops)`

**Purpose:** Handles logic related to `make ready for mission`.

### EndSimulation
`public void EndSimulation()`

**Purpose:** Handles logic related to `end simulation`.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### SelectRandomSimulationTroop
`public UniqueTroopDescriptor SelectRandomSimulationTroop()`

**Purpose:** Handles logic related to `select random simulation troop`.

### GetRandomSimulationShip
`public Ship GetRandomSimulationShip()`

**Purpose:** Gets the current value of `random simulation ship`.

### Surrender
`public void Surrender()`

**Purpose:** Handles logic related to `surrender`.

### Route
`public void Route()`

**Purpose:** Handles logic related to `route`.

### CommitXpGains
`public void CommitXpGains()`

**Purpose:** Handles logic related to `commit xp gains`.

### CommitRenownChanges
`public void CommitRenownChanges()`

**Purpose:** Handles logic related to `commit renown changes`.

### CommitInfluenceChanges
`public void CommitInfluenceChanges()`

**Purpose:** Handles logic related to `commit influence changes`.

### CommitMoraleChanges
`public void CommitMoraleChanges()`

**Purpose:** Handles logic related to `commit morale changes`.

### CommitGoldChanges
`public void CommitGoldChanges()`

**Purpose:** Handles logic related to `commit gold changes`.

## Usage Example

```csharp
var value = new MapEventSide();
value.GetTroops();
```

## See Also

- [Complete Class Catalog](../catalog)