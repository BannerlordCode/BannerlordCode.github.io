---
title: "MobilePartyAi"
description: "Auto-generated class reference for MobilePartyAi."
---
# MobilePartyAi

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MobilePartyAi`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/MobilePartyAi.cs`

## Overview

`MobilePartyAi` lives in `TaleWorlds.CampaignSystem.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDisabled` | `public bool IsDisabled { get; }` |
| `RethinkAtNextHourlyTick` | `public bool RethinkAtNextHourlyTick { get; }` |
| `DoNotMakeNewDecisions` | `public bool DoNotMakeNewDecisions { get; }` |
| `IsAlerted` | `public bool IsAlerted { get; }` |
| `DoNotAttackMainPartyUntil` | `public CampaignTime DoNotAttackMainPartyUntil { get; set; }` |
| `AvoidInitiative` | `public float AvoidInitiative { get; }` |
| `AttackInitiative` | `public float AttackInitiative { get; }` |
| `AiBehaviorPartyBase` | `public PartyBase AiBehaviorPartyBase { get; }` |
| `AiBehaviorInteractable` | `public IInteractablePoint AiBehaviorInteractable { get; set; }` |

## Key Methods

### Clear
`public void Clear()`

**Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of MobilePartyAi from the subsystem API first
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.Clear();
```

### CacheAiBehaviorPartyBase
`public void CacheAiBehaviorPartyBase()`

**Purpose:** Executes the CacheAiBehaviorPartyBase logic.

```csharp
// Obtain an instance of MobilePartyAi from the subsystem API first
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.CacheAiBehaviorPartyBase();
```

### CheckPartyNeedsUpdate
`public void CheckPartyNeedsUpdate()`

**Purpose:** Verifies whether party needs update holds true for the this instance.

```csharp
// Obtain an instance of MobilePartyAi from the subsystem API first
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.CheckPartyNeedsUpdate();
```

### CalculateFleePosition
`public void CalculateFleePosition(out CampaignVec2 fleeTargetPoint, MobileParty partyToFleeFrom, Vec2 averageEnemyVec)`

**Purpose:** Calculates the current value or result of flee position.

```csharp
// Obtain an instance of MobilePartyAi from the subsystem API first
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.CalculateFleePosition(fleeTargetPoint, partyToFleeFrom, averageEnemyVec);
```

### GetNearbyPartyDataWhileDefendingSettlement
`public bool GetNearbyPartyDataWhileDefendingSettlement(Settlement targetSettlement, out bool shouldConsiderJoiningNearbyAllyParties, out bool shouldJoinLandSide, out bool shouldEngage, out MobileParty mostPowerfulLandAlly, out MobileParty mostPowerfulNavalAlly)`

**Purpose:** Reads and returns the nearby party data while defending settlement value held by the this instance.

```csharp
// Obtain an instance of MobilePartyAi from the subsystem API first
MobilePartyAi mobilePartyAi = ...;
var result = mobilePartyAi.GetNearbyPartyDataWhileDefendingSettlement(targetSettlement, shouldConsiderJoiningNearbyAllyParties, shouldJoinLandSide, shouldEngage, mostPowerfulLandAlly, mostPowerfulNavalAlly);
```

### DisableForHours
`public void DisableForHours(int hours)`

**Purpose:** Executes the DisableForHours logic.

```csharp
// Obtain an instance of MobilePartyAi from the subsystem API first
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.DisableForHours(0);
```

### DisableAi
`public void DisableAi()`

**Purpose:** Executes the DisableAi logic.

```csharp
// Obtain an instance of MobilePartyAi from the subsystem API first
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.DisableAi();
```

### EnableAi
`public void EnableAi()`

**Purpose:** Executes the EnableAi logic.

```csharp
// Obtain an instance of MobilePartyAi from the subsystem API first
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.EnableAi();
```

### EnableAgainAtHourIsPast
`public bool EnableAgainAtHourIsPast()`

**Purpose:** Executes the EnableAgainAtHourIsPast logic.

```csharp
// Obtain an instance of MobilePartyAi from the subsystem API first
MobilePartyAi mobilePartyAi = ...;
var result = mobilePartyAi.EnableAgainAtHourIsPast();
```

### SetDoNotAttackMainParty
`public void SetDoNotAttackMainParty(int hours)`

**Purpose:** Assigns a new value to do not attack main party and updates the object's internal state.

```csharp
// Obtain an instance of MobilePartyAi from the subsystem API first
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.SetDoNotAttackMainParty(0);
```

### SetInitiative
`public void SetInitiative(float attackInitiative, float avoidInitiative, float hoursUntilReset)`

**Purpose:** Assigns a new value to initiative and updates the object's internal state.

```csharp
// Obtain an instance of MobilePartyAi from the subsystem API first
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.SetInitiative(0, 0, 0);
```

### SetDoNotMakeNewDecisions
`public void SetDoNotMakeNewDecisions(bool doNotMakeNewDecisions)`

**Purpose:** Assigns a new value to do not make new decisions and updates the object's internal state.

```csharp
// Obtain an instance of MobilePartyAi from the subsystem API first
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.SetDoNotMakeNewDecisions(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MobilePartyAi mobilePartyAi = ...;
mobilePartyAi.Clear();
```

## See Also

- [Area Index](../)