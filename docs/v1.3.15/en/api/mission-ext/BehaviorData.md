<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BehaviorData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BehaviorData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorData`
**Area:** mission-ext

## Overview

`BehaviorData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BehaviorData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var value = new BehaviorData();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
