<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyThinkParams`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Resets `reset` to its initial state.

### Initialization
`public void Initialization()`

**Purpose:** Initializes the state, resources, or bindings for `ialization`.

### AddPotentialArmyMember
`public void AddPotentialArmyMember(MobileParty armyMember)`

**Purpose:** Adds `potential army member` to the current collection or state.

### TryGetBehaviorScore
`public bool TryGetBehaviorScore(in AIBehaviorData aiBehaviorData, out float score)`

**Purpose:** Attempts to get `get behavior score`, usually returning the result in an out parameter.

### SetBehaviorScore
`public void SetBehaviorScore(in AIBehaviorData aiBehaviorData, float score)`

**Purpose:** Sets the value or state of `behavior score`.

### AddBehaviorScore
`public void AddBehaviorScore(in ValueTuple<AIBehaviorData, float> value)`

**Purpose:** Adds `behavior score` to the current collection or state.

## Usage Example

```csharp
var value = new PartyThinkParams();
value.Reset(mobileParty);
```

## See Also

- [Complete Class Catalog](../catalog)