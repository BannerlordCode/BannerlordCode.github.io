---
title: "BesiegerCamp"
description: "Auto-generated class reference for BesiegerCamp."
---
# BesiegerCamp

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BesiegerCamp : ISiegeEventSide`
**Base:** `ISiegeEventSide`
**File:** `TaleWorlds.CampaignSystem/Siege/BesiegerCamp.cs`

## Overview

`BesiegerCamp` lives in `TaleWorlds.CampaignSystem.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SiegeEvent` | `public SiegeEvent SiegeEvent { get; }` |
| `SiegeEngines` | `public SiegeEvent.SiegeEnginesContainer SiegeEngines { get; }` |
| `LeaderParty` | `public MobileParty LeaderParty { get; }` |
| `MapFaction` | `public IFaction MapFaction { get; }` |
| `BattleSide` | `public BattleSideEnum BattleSide { get; }` |
| `SiegeEngineMissiles` | `public MBReadOnlyList<SiegeEvent.SiegeEngineMissile> SiegeEngineMissiles { get; }` |
| `SiegeStrategy` | `public SiegeStrategy SiegeStrategy { get; }` |
| `NumberOfTroopsKilledOnSide` | `public int NumberOfTroopsKilledOnSide { get; }` |
| `IsPreparationComplete` | `public bool IsPreparationComplete { get; }` |
| `IsReadyToBesiege` | `public bool IsReadyToBesiege { get; }` |

## Key Methods

### GetInvolvedPartiesForEventType
`public IEnumerable<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**Purpose:** Reads and returns the involved parties for event type value held by the this instance.

```csharp
// Obtain an instance of BesiegerCamp from the subsystem API first
BesiegerCamp besiegerCamp = ...;
var result = besiegerCamp.GetInvolvedPartiesForEventType(mapEvent.BattleTypes.Siege);
```

### GetNextInvolvedPartyForEventType
`public PartyBase GetNextInvolvedPartyForEventType(ref int partyIndex, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**Purpose:** Reads and returns the next involved party for event type value held by the this instance.

```csharp
// Obtain an instance of BesiegerCamp from the subsystem API first
BesiegerCamp besiegerCamp = ...;
var result = besiegerCamp.GetNextInvolvedPartyForEventType(partyIndex, mapEvent.BattleTypes.Siege);
```

### HasInvolvedPartyForEventType
`public bool HasInvolvedPartyForEventType(PartyBase party, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)`

**Purpose:** Determines whether the this instance already holds involved party for event type.

```csharp
// Obtain an instance of BesiegerCamp from the subsystem API first
BesiegerCamp besiegerCamp = ...;
var result = besiegerCamp.HasInvolvedPartyForEventType(party, mapEvent.BattleTypes.Siege);
```

### IsBesiegerSideParty
`public bool IsBesiegerSideParty(MobileParty mobileParty)`

**Purpose:** Determines whether the this instance is in the besieger side party state or condition.

```csharp
// Obtain an instance of BesiegerCamp from the subsystem API first
BesiegerCamp besiegerCamp = ...;
var result = besiegerCamp.IsBesiegerSideParty(mobileParty);
```

### InitializeSiegeEventSide
`public void InitializeSiegeEventSide()`

**Purpose:** Prepares the resources, state, or bindings required by siege event side.

```csharp
// Obtain an instance of BesiegerCamp from the subsystem API first
BesiegerCamp besiegerCamp = ...;
besiegerCamp.InitializeSiegeEventSide();
```

### OnTroopsKilledOnSide
`public void OnTroopsKilledOnSide(int killCount)`

**Purpose:** Invoked when the troops killed on side event is raised.

```csharp
// Obtain an instance of BesiegerCamp from the subsystem API first
BesiegerCamp besiegerCamp = ...;
besiegerCamp.OnTroopsKilledOnSide(0);
```

### SetSiegeStrategy
`public void SetSiegeStrategy(SiegeStrategy strategy)`

**Purpose:** Assigns a new value to siege strategy and updates the object's internal state.

```csharp
// Obtain an instance of BesiegerCamp from the subsystem API first
BesiegerCamp besiegerCamp = ...;
besiegerCamp.SetSiegeStrategy(strategy);
```

### RemoveAllSiegeParties
`public void RemoveAllSiegeParties()`

**Purpose:** Removes all siege parties from the current collection or state.

```csharp
// Obtain an instance of BesiegerCamp from the subsystem API first
BesiegerCamp besiegerCamp = ...;
besiegerCamp.RemoveAllSiegeParties();
```

### AddSiegeEngineMissile
`public void AddSiegeEngineMissile(SiegeEvent.SiegeEngineMissile missile)`

**Purpose:** Adds siege engine missile to the current collection or state.

```csharp
// Obtain an instance of BesiegerCamp from the subsystem API first
BesiegerCamp besiegerCamp = ...;
besiegerCamp.AddSiegeEngineMissile(missile);
```

### RemoveDeprecatedMissiles
`public void RemoveDeprecatedMissiles()`

**Purpose:** Removes deprecated missiles from the current collection or state.

```csharp
// Obtain an instance of BesiegerCamp from the subsystem API first
BesiegerCamp besiegerCamp = ...;
besiegerCamp.RemoveDeprecatedMissiles();
```

### BombardHitWalls
`public void BombardHitWalls(SiegeEngineType attackerEngineType, int wallIndex)`

**Purpose:** Executes the BombardHitWalls logic.

```csharp
// Obtain an instance of BesiegerCamp from the subsystem API first
BesiegerCamp besiegerCamp = ...;
besiegerCamp.BombardHitWalls(attackerEngineType, 0);
```

### GetAttackTarget
`public void GetAttackTarget(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngine, int siegeEngineSlot, out SiegeBombardTargets targetType, out int targetIndex)`

**Purpose:** Reads and returns the attack target value held by the this instance.

```csharp
// Obtain an instance of BesiegerCamp from the subsystem API first
BesiegerCamp besiegerCamp = ...;
besiegerCamp.GetAttackTarget(siegeEventSide, siegeEngine, 0, targetType, targetIndex);
```

### FinalizeSiegeEvent
`public void FinalizeSiegeEvent()`

**Purpose:** Executes the FinalizeSiegeEvent logic.

```csharp
// Obtain an instance of BesiegerCamp from the subsystem API first
BesiegerCamp besiegerCamp = ...;
besiegerCamp.FinalizeSiegeEvent();
```

### OnAfterLoad
`public void OnAfterLoad()`

**Purpose:** Invoked when the after load event is raised.

```csharp
// Obtain an instance of BesiegerCamp from the subsystem API first
BesiegerCamp besiegerCamp = ...;
besiegerCamp.OnAfterLoad();
```

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**Purpose:** Assigns a new value to position after map change and updates the object's internal state.

```csharp
// Obtain an instance of BesiegerCamp from the subsystem API first
BesiegerCamp besiegerCamp = ...;
besiegerCamp.SetPositionAfterMapChange(newPosition);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BesiegerCamp besiegerCamp = ...;
besiegerCamp.GetInvolvedPartiesForEventType(mapEvent.BattleTypes.Siege);
```

## See Also

- [Area Index](../)