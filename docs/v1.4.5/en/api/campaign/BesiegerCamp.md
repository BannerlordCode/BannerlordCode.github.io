<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BesiegerCamp`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BesiegerCamp

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BesiegerCamp : ISiegeEventSide`
**Base:** `ISiegeEventSide`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/BesiegerCamp.cs`

## Overview

`BesiegerCamp` lives in `TaleWorlds.CampaignSystem.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SiegeEvent` | `public SiegeEvent SiegeEvent { get; }` |
| `SiegeEngines` | `public SiegeEvent.SiegeEnginesContainer SiegeEngines { get; }` |
| `SiegeStrategy` | `public SiegeStrategy SiegeStrategy { get; }` |
| `NumberOfTroopsKilledOnSide` | `public int NumberOfTroopsKilledOnSide { get; }` |
| `IsReadyToBesiege` | `public bool IsReadyToBesiege { get; }` |

## Key Methods

### GetInvolvedPartiesForEventType
`public IEnumerable<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**Purpose:** Gets the current value of `involved parties for event type`.

### GetNextInvolvedPartyForEventType
`public PartyBase GetNextInvolvedPartyForEventType(ref int partyIndex, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**Purpose:** Gets the current value of `next involved party for event type`.

### HasInvolvedPartyForEventType
`public bool HasInvolvedPartyForEventType(PartyBase party, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**Purpose:** Checks whether the current object has/contains `involved party for event type`.

### IsBesiegerSideParty
`public bool IsBesiegerSideParty(MobileParty mobileParty)`

**Purpose:** Handles logic related to `is besieger side party`.

### InitializeSiegeEventSide
`public void InitializeSiegeEventSide()`

**Purpose:** Initializes the state, resources, or bindings for `siege event side`.

### OnTroopsKilledOnSide
`public void OnTroopsKilledOnSide(int killCount)`

**Purpose:** Called when the `troops killed on side` event is raised.

### SetSiegeStrategy
`public void SetSiegeStrategy(SiegeStrategy strategy)`

**Purpose:** Sets the value or state of `siege strategy`.

### CheckBesiegerPartiesAndMakeThemLeave
`public void CheckBesiegerPartiesAndMakeThemLeave()`

**Purpose:** Handles logic related to `check besieger parties and make them leave`.

### RemoveAllSiegeParties
`public void RemoveAllSiegeParties()`

**Purpose:** Removes `all siege parties` from the current collection or state.

### AddSiegeEngineMissile
`public void AddSiegeEngineMissile(SiegeEvent.SiegeEngineMissile missile)`

**Purpose:** Adds `siege engine missile` to the current collection or state.

### RemoveDeprecatedMissiles
`public void RemoveDeprecatedMissiles()`

**Purpose:** Removes `deprecated missiles` from the current collection or state.

### BombardHitWalls
`public void BombardHitWalls(SiegeEngineType attackerEngineType, int wallIndex)`

**Purpose:** Handles logic related to `bombard hit walls`.

### GetAttackTarget
`public void GetAttackTarget(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngine, int siegeEngineSlot, out SiegeBombardTargets targetType, out int targetIndex)`

**Purpose:** Gets the current value of `attack target`.

### FinalizeSiegeEvent
`public void FinalizeSiegeEvent()`

**Purpose:** Handles logic related to `finalize siege event`.

### OnAfterLoad
`public void OnAfterLoad()`

**Purpose:** Called when the `after load` event is raised.

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**Purpose:** Sets the value or state of `position after map change`.

## Usage Example

```csharp
var value = new BesiegerCamp();
value.GetInvolvedPartiesForEventType(mapEvent.BattleTypes.Siege);
```

## See Also

- [Complete Class Catalog](../catalog)