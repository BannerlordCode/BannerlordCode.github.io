---
title: "PartyThinkParams"
description: "Auto-generated class reference for PartyThinkParams."
---
# PartyThinkParams

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyThinkParams`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/PartyThinkParams.cs`

## Overview

`PartyThinkParams` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AIBehaviorScores` | `public MBReadOnlyList<ValueTuple<AIBehaviorData, float>> AIBehaviorScores { get; }` |
| `PossibleArmyMembersUponArmyCreation` | `public MBReadOnlyList<MobileParty> PossibleArmyMembersUponArmyCreation { get; }` |

## Key Methods

### Reset
`public void Reset(MobileParty mobileParty)`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of PartyThinkParams from the subsystem API first
PartyThinkParams partyThinkParams = ...;
partyThinkParams.Reset(mobileParty);
```

### Initialization
`public void Initialization()`

**Purpose:** Prepares the resources, state, or bindings required by `ialization`.

```csharp
// Obtain an instance of PartyThinkParams from the subsystem API first
PartyThinkParams partyThinkParams = ...;
partyThinkParams.Initialization();
```

### AddPotentialArmyMember
`public void AddPotentialArmyMember(MobileParty armyMember)`

**Purpose:** Adds `potential army member` to the current collection or state.

```csharp
// Obtain an instance of PartyThinkParams from the subsystem API first
PartyThinkParams partyThinkParams = ...;
partyThinkParams.AddPotentialArmyMember(armyMember);
```

### TryGetBehaviorScore
`public bool TryGetBehaviorScore(in AIBehaviorData aiBehaviorData, out float score)`

**Purpose:** Attempts to retrieve `get behavior score`, usually returning success through an out parameter.

```csharp
// Obtain an instance of PartyThinkParams from the subsystem API first
PartyThinkParams partyThinkParams = ...;
var result = partyThinkParams.TryGetBehaviorScore(aiBehaviorData, score);
```

### SetBehaviorScore
`public void SetBehaviorScore(in AIBehaviorData aiBehaviorData, float score)`

**Purpose:** Assigns a new value to `behavior score` and updates the object's internal state.

```csharp
// Obtain an instance of PartyThinkParams from the subsystem API first
PartyThinkParams partyThinkParams = ...;
partyThinkParams.SetBehaviorScore(aiBehaviorData, 0);
```

### AddBehaviorScore
`public void AddBehaviorScore(in ValueTuple<AIBehaviorData, float> value)`

**Purpose:** Adds `behavior score` to the current collection or state.

```csharp
// Obtain an instance of PartyThinkParams from the subsystem API first
PartyThinkParams partyThinkParams = ...;
partyThinkParams.AddBehaviorScore(valueTuple<AIBehaviorData, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyThinkParams partyThinkParams = ...;
partyThinkParams.Reset(mobileParty);
```

## See Also

- [Area Index](../)