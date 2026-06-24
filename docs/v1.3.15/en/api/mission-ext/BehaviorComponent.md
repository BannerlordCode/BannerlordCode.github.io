<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BehaviorComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BehaviorComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BehaviorComponent`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BehaviorComponent.cs`

## Overview

`BehaviorComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `BehaviorComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Formation` | `public Formation Formation { get; }` |
| `BehaviorCoherence` | `public float BehaviorCoherence { get; set; }` |
| `NavmeshlessTargetPositionPenalty` | `public virtual float NavmeshlessTargetPositionPenalty { get; }` |
| `CurrentOrder` | `public MovementOrder CurrentOrder { get; set; }` |
| `PreserveExpireTime` | `public float PreserveExpireTime { get; set; }` |
| `WeightFactor` | `public float WeightFactor { get; set; }` |

## Key Methods

### OnBehaviorCanceled
`public virtual void OnBehaviorCanceled()`

**Purpose:** Called when the `behavior canceled` event is raised.

### OnLostAIControl
`public virtual void OnLostAIControl()`

**Purpose:** Called when the `lost a i control` event is raised.

### OnAgentRemoved
`public virtual void OnAgentRemoved(Agent agent)`

**Purpose:** Called when the `agent removed` event is raised.

### RemindSergeantPlayer
`public void RemindSergeantPlayer()`

**Purpose:** Handles logic related to `remind sergeant player`.

### TickOccasionally
`public virtual void TickOccasionally()`

**Purpose:** Handles logic related to `tick occasionally`.

### GetAIWeight
`public float GetAIWeight()`

**Purpose:** Gets the current value of `a i weight`.

### ResetBehavior
`public virtual void ResetBehavior()`

**Purpose:** Resets `behavior` to its initial state.

### GetBehaviorString
`public virtual TextObject GetBehaviorString()`

**Purpose:** Gets the current value of `behavior string`.

### OnValidBehaviorSideChanged
`public virtual void OnValidBehaviorSideChanged()`

**Purpose:** Called when the `valid behavior side changed` event is raised.

### PrecalculateMovementOrder
`public void PrecalculateMovementOrder()`

**Purpose:** Handles logic related to `precalculate movement order`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

## Usage Example

```csharp
var implementation = new CustomBehaviorComponent();
```

## See Also

- [Complete Class Catalog](../catalog)