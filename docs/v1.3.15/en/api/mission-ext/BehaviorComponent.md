<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BehaviorComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BehaviorComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BehaviorComponent`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BehaviorComponent.cs`

## Overview

`BehaviorComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<BehaviorComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `BehaviorCoherence` | `public float BehaviorCoherence { get; set; }` |
| `NavmeshlessTargetPositionPenalty` | `public virtual float NavmeshlessTargetPositionPenalty { get { if (this._navmeshlessTargetPositionPenalty == 1f) { return 1f; }` |
| `CurrentOrder` | `public MovementOrder CurrentOrder { get { return this._currentOrder; }` |
| `PreserveExpireTime` | `public float PreserveExpireTime { get; set; }` |
| `WeightFactor` | `public float WeightFactor { get; set; }` |

## Key Methods

### OnBehaviorCanceled
```csharp
public virtual void OnBehaviorCanceled()
```

### OnLostAIControl
```csharp
public virtual void OnLostAIControl()
```

### OnAgentRemoved
```csharp
public virtual void OnAgentRemoved(Agent agent)
```

### RemindSergeantPlayer
```csharp
public void RemindSergeantPlayer()
```

### TickOccasionally
```csharp
public virtual void TickOccasionally()
```

### GetAIWeight
```csharp
public float GetAIWeight()
```

### ResetBehavior
```csharp
public virtual void ResetBehavior()
```

### GetBehaviorString
```csharp
public virtual TextObject GetBehaviorString()
```

### OnValidBehaviorSideChanged
```csharp
public virtual void OnValidBehaviorSideChanged()
```

### PrecalculateMovementOrder
```csharp
public void PrecalculateMovementOrder()
```

### Equals
```csharp
public override bool Equals(object obj)
```

### GetHashCode
```csharp
public override int GetHashCode()
```

### OnDeploymentFinished
```csharp
public virtual void OnDeploymentFinished()
```

## Usage Example

```csharp
// Typical usage of BehaviorComponent (Component)
agent.GetComponent<BehaviorComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)