---
title: "FormationAI"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FormationAI`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FormationAI

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationAI`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/FormationAI.cs`

## Overview

`FormationAI` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveBehavior` | `public BehaviorComponent ActiveBehavior { get; }` |
| `Side` | `public FormationAI.BehaviorSide Side { get; set; }` |
| `IsMainFormation` | `public bool IsMainFormation { get; set; }` |
| `BehaviorCount` | `public int BehaviorCount { get; }` |

## Key Methods

### AddAiBehavior
`public void AddAiBehavior(BehaviorComponent behaviorComponent)`

**Purpose:** Adds `ai behavior` to the current collection or state.

### AddSpecialBehavior
`public void AddSpecialBehavior(BehaviorComponent behavior, bool purgePreviousSpecialBehaviors = false)`

**Purpose:** Adds `special behavior` to the current collection or state.

### Tick
`public void Tick()`

**Purpose:** Handles logic related to `tick`.

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**Purpose:** Called when the `agent removed` event is raised.

### GetBehaviorAtIndex
`public BehaviorComponent GetBehaviorAtIndex(int index)`

**Purpose:** Gets the current value of `behavior at index`.

### DebugMore
`public void DebugMore()`

**Purpose:** Handles logic related to `debug more`.

### DebugScores
`public void DebugScores()`

**Purpose:** Handles logic related to `debug scores`.

### ResetBehaviorWeights
`public void ResetBehaviorWeights()`

**Purpose:** Resets `behavior weights` to its initial state.

## Usage Example

```csharp
var value = new FormationAI();
value.AddAiBehavior(behaviorComponent);
```

## See Also

- [Complete Class Catalog](../catalog)