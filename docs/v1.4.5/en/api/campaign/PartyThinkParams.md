<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyThinkParams`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyThinkParams

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyThinkParams`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/PartyThinkParams.cs`

## Overview

`PartyThinkParams` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Reset
`public void Reset(MobileParty mobileParty)`

**Purpose:** Resets `reset` to its initial state.

### Initialization
`public void Initialization()`

**Purpose:** Initializes the state, resources, or bindings for `ialization`.

### SetArmyMembers
`public void SetArmyMembers(MBList<MobileParty> armyMembers)`

**Purpose:** Sets the value or state of `army members`.

### TryGetBehaviorScore
`public bool TryGetBehaviorScore(in AIBehaviorData aiBehaviorData, out float score)`

**Purpose:** Attempts to get `get behavior score`, usually returning the result in an out parameter.

### SetBehaviorScore
`public void SetBehaviorScore(in AIBehaviorData aiBehaviorData, float score)`

**Purpose:** Sets the value or state of `behavior score`.

### AddBehaviorScore
`public void AddBehaviorScore(in (AIBehaviorData, float) value)`

**Purpose:** Adds `behavior score` to the current collection or state.

## Usage Example

```csharp
var value = new PartyThinkParams();
value.Reset(mobileParty);
```

## See Also

- [Complete Class Catalog](../catalog)