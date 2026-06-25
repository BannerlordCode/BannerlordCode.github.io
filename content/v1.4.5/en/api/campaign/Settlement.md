---
title: "Settlement"
description: "Auto-generated class reference for Settlement."
---
# Settlement

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Settlement : MBObjectBase, ILocatable<Settlement>, IMapPoint, ITrackableCampaignObject, ITrackableBase, ISiegeEventSide, IRandomOwner, ISettlementDataHolder`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/Settlement.cs`

## Overview

`Settlement` lives in `TaleWorlds.CampaignSystem.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Party` | `public PartyBase Party { get; }` |
| `BribePaid` | `public int BribePaid { get; set; }` |
| `SiegeEvent` | `public SiegeEvent SiegeEvent { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `Banner` | `public Banner Banner { get; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `IsInspected` | `public bool IsInspected { get; set; }` |
| `WallSectionCount` | `public int WallSectionCount { get; set; }` |
| `NearbyLandThreatIntensity` | `public float NearbyLandThreatIntensity { get; set; }` |
| `NearbyNavalThreatIntensity` | `public float NearbyNavalThreatIntensity { get; set; }` |
| `NearbyLandAllyIntensity` | `public float NearbyLandAllyIntensity { get; set; }` |
| `NearbyNavalAllyIntensity` | `public float NearbyNavalAllyIntensity { get; set; }` |
| `Militia` | `public float Militia { get; }` |
| `SettlementTotalWallHitPoints` | `public float SettlementTotalWallHitPoints { get; }` |
| `MaxHitPointsOfOneWallSection` | `public float MaxHitPointsOfOneWallSection { get; set; }` |
| `SettlementHitPoints` | `public float SettlementHitPoints { get; set; }` |
| `PatrolParty` | `public PatrolPartyComponent PatrolParty { get; }` |
| `SettlementComponent` | `public SettlementComponent SettlementComponent { get; }` |
| `GatePosition` | `public CampaignVec2 GatePosition { get; }` |
| `PortPosition` | `public CampaignVec2 PortPosition { get; }` |
| `Position` | `public CampaignVec2 Position { get; }` |
| `HasPort` | `public bool HasPort { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `EncyclopediaText` | `public TextObject EncyclopediaText { get; }` |
| `GarrisonWagePaymentLimit` | `public int GarrisonWagePaymentLimit { get; }` |
| `LastAttackerParty` | `public MobileParty LastAttackerParty { get; set; }` |
| `LastThreatTime` | `public CampaignTime LastThreatTime { get; }` |
| `SiegeEngines` | `public SiegeEvent.SiegeEnginesContainer SiegeEngines { get; }` |
| `NumberOfTroopsKilledOnSide` | `public int NumberOfTroopsKilledOnSide { get; }` |
| `SiegeStrategy` | `public SiegeStrategy SiegeStrategy { get; }` |
| `Alleys` | `public List<Alley> Alleys { get; }` |
| `IsTown` | `public bool IsTown { get; }` |
| `IsCastle` | `public bool IsCastle { get; }` |
| `IsFortification` | `public bool IsFortification { get; }` |
| `IsStarving` | `public bool IsStarving { get; }` |
| `IsRaided` | `public bool IsRaided { get; }` |
| `InRebelliousState` | `public bool InRebelliousState { get; }` |
| `IsUnderRaid` | `public bool IsUnderRaid { get; }` |
| `LocationComplex` | `public LocationComplex LocationComplex { get; }` |
| `CurrentSettlement` | `public static Settlement CurrentSettlement { get; }` |
| `CurrentSiegeState` | `public SiegeState CurrentSiegeState { get; }` |
| `OwnerClan` | `public Clan OwnerClan { get; }` |

## Key Methods

### SetWallSectionHitPointsRatioAtIndex
`public void SetWallSectionHitPointsRatioAtIndex(int index, float hitPointsRatio)`

**Purpose:** Assigns a new value to wall section hit points ratio at index and updates the object's internal state.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.SetWallSectionHitPointsRatioAtIndex(0, 0);
```

### SetPortPosition
`public void SetPortPosition(CampaignVec2 position)`

**Purpose:** Assigns a new value to port position and updates the object's internal state.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.SetPortPosition(position);
```

### GetPositionAsVec3
`public Vec3 GetPositionAsVec3()`

**Purpose:** Reads and returns the position as vec3 value held by the this instance.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
var result = settlement.GetPositionAsVec3();
```

### SetGarrisonWagePaymentLimit
`public void SetGarrisonWagePaymentLimit(int limit)`

**Purpose:** Assigns a new value to garrison wage payment limit and updates the object's internal state.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.SetGarrisonWagePaymentLimit(0);
```

### GetInvolvedPartiesForEventType
`public IEnumerable<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**Purpose:** Reads and returns the involved parties for event type value held by the this instance.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
var result = settlement.GetInvolvedPartiesForEventType(mapEvent.BattleTypes.Siege);
```

### GetNextInvolvedPartyForEventType
`public PartyBase GetNextInvolvedPartyForEventType(ref int partyIndex, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**Purpose:** Reads and returns the next involved party for event type value held by the this instance.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
var result = settlement.GetNextInvolvedPartyForEventType(partyIndex, mapEvent.BattleTypes.Siege);
```

### HasInvolvedPartyForEventType
`public bool HasInvolvedPartyForEventType(PartyBase party, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**Purpose:** Determines whether the this instance already holds involved party for event type.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
var result = settlement.HasInvolvedPartyForEventType(party, mapEvent.BattleTypes.Siege);
```

### IsUnderRebellionAttack
`public bool IsUnderRebellionAttack()`

**Purpose:** Determines whether the this instance is in the under rebellion attack state or condition.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
var result = settlement.IsUnderRebellionAttack();
```

### GetSettlementValueForEnemyHero
`public float GetSettlementValueForEnemyHero(Hero hero)`

**Purpose:** Reads and returns the settlement value for enemy hero value held by the this instance.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
var result = settlement.GetSettlementValueForEnemyHero(hero);
```

### IsSettlementBusy
`public bool IsSettlementBusy(object asker)`

**Purpose:** Determines whether the this instance is in the settlement busy state or condition.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
var result = settlement.IsSettlementBusy(asker);
```

### IsSettlementBusy
`public bool IsSettlementBusy(object asker, int limitingPriority)`

**Purpose:** Determines whether the this instance is in the settlement busy state or condition.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
var result = settlement.IsSettlementBusy(asker, 0);
```

### GetSettlementBusynessPriority
`public int GetSettlementBusynessPriority(object asker)`

**Purpose:** Reads and returns the settlement busyness priority value held by the this instance.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
var result = settlement.GetSettlementBusynessPriority(asker);
```

### GetValue
`public float GetValue(Hero hero = null, bool countAlsoBoundedSettlements = true)`

**Purpose:** Reads and returns the value value held by the this instance.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
var result = settlement.GetValue(null, false);
```

### GetName
`public override TextObject GetName()`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
var result = settlement.GetName();
```

### GetSettlementValueForFaction
`public float GetSettlementValueForFaction(IFaction faction)`

**Purpose:** Reads and returns the settlement value for faction value held by the this instance.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
var result = settlement.GetSettlementValueForFaction(faction);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
var result = settlement.ToString();
```

### OnPartyInteraction
`public void OnPartyInteraction(MobileParty engagingParty)`

**Purpose:** Invoked when the party interaction event is raised.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.OnPartyInteraction(engagingParty);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.Deserialize(objectManager, node);
```

### OnFinishLoadState
`public void OnFinishLoadState()`

**Purpose:** Invoked when the finish load state event is raised.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.OnFinishLoadState();
```

### OnGameCreated
`public void OnGameCreated()`

**Purpose:** Invoked when the game created event is raised.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.OnGameCreated();
```

### OnSessionStart
`public void OnSessionStart()`

**Purpose:** Invoked when the session start event is raised.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.OnSessionStart();
```

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**Purpose:** Verifies whether positions for map change and update if needed holds true for the this instance.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.CheckPositionsForMapChangeAndUpdateIfNeeded();
```

### Find
`public static Settlement Find(string idString)`

**Purpose:** Finds the matching entry in the current collection or scope.

```csharp
// Static call; no instance required
Settlement.Find("example");
```

### FindFirst
`public static Settlement FindFirst(Func<Settlement, bool> predicate)`

**Purpose:** Looks up the matching first in the current collection or scope.

```csharp
// Static call; no instance required
Settlement.FindFirst(func<Settlement, false);
```

### FindAll
`public static IEnumerable<Settlement> FindAll(Func<Settlement, bool> predicate)`

**Purpose:** Looks up the matching all in the current collection or scope.

```csharp
// Static call; no instance required
Settlement.FindAll(func<Settlement, false);
```

### StartFindingLocatablesAroundPosition
`public static LocatableSearchData<Settlement> StartFindingLocatablesAroundPosition(Vec2 position, float radius)`

**Purpose:** Starts the finding locatables around position flow or state machine.

```csharp
// Static call; no instance required
Settlement.StartFindingLocatablesAroundPosition(position, 0);
```

### FindNextLocatable
`public static Settlement FindNextLocatable(ref LocatableSearchData<Settlement> data)`

**Purpose:** Looks up the matching next locatable in the current collection or scope.

```csharp
// Static call; no instance required
Settlement.FindNextLocatable(data);
```

### OnPlayerEncounterFinish
`public void OnPlayerEncounterFinish()`

**Purpose:** Invoked when the player encounter finish event is raised.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.OnPlayerEncounterFinish();
```

### GetPosition
`public Vec3 GetPosition()`

**Purpose:** Reads and returns the position value held by the this instance.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
var result = settlement.GetPosition();
```

### SetNextSiegeState
`public void SetNextSiegeState()`

**Purpose:** Assigns a new value to next siege state and updates the object's internal state.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.SetNextSiegeState();
```

### ResetSiegeState
`public void ResetSiegeState()`

**Purpose:** Returns siege state to its default or initial condition.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.ResetSiegeState();
```

### AddGarrisonParty
`public void AddGarrisonParty()`

**Purpose:** Adds garrison party to the current collection or state.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.AddGarrisonParty();
```

### SetSiegeStrategy
`public void SetSiegeStrategy(SiegeStrategy strategy)`

**Purpose:** Assigns a new value to siege strategy and updates the object's internal state.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.SetSiegeStrategy(strategy);
```

### InitializeSiegeEventSide
`public void InitializeSiegeEventSide()`

**Purpose:** Prepares the resources, state, or bindings required by siege event side.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.InitializeSiegeEventSide();
```

### OnTroopsKilledOnSide
`public void OnTroopsKilledOnSide(int killCount)`

**Purpose:** Invoked when the troops killed on side event is raised.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.OnTroopsKilledOnSide(0);
```

### AddSiegeEngineMissile
`public void AddSiegeEngineMissile(SiegeEvent.SiegeEngineMissile missile)`

**Purpose:** Adds siege engine missile to the current collection or state.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.AddSiegeEngineMissile(missile);
```

### RemoveDeprecatedMissiles
`public void RemoveDeprecatedMissiles()`

**Purpose:** Removes deprecated missiles from the current collection or state.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.RemoveDeprecatedMissiles();
```

### GetAttackTarget
`public void GetAttackTarget(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngine, int siegeEngineSlot, out SiegeBombardTargets targetType, out int targetIndex)`

**Purpose:** Reads and returns the attack target value held by the this instance.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.GetAttackTarget(siegeEventSide, siegeEngine, 0, targetType, targetIndex);
```

### FinalizeSiegeEvent
`public void FinalizeSiegeEvent()`

**Purpose:** Executes the FinalizeSiegeEvent logic.

```csharp
// Obtain an instance of Settlement from the subsystem API first
Settlement settlement = ...;
settlement.FinalizeSiegeEvent();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Settlement settlement = ...;
settlement.SetWallSectionHitPointsRatioAtIndex(0, 0);
```

## See Also

- [Area Index](../)