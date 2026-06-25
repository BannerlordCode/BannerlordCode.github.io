---
title: "BehaviorComponent"
description: "Auto-generated class reference for BehaviorComponent."
---
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

**Purpose:** Invoked when the behavior canceled event is raised.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
behaviorComponent.OnBehaviorCanceled();
```

### OnLostAIControl
`public virtual void OnLostAIControl()`

**Purpose:** Invoked when the lost a i control event is raised.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
behaviorComponent.OnLostAIControl();
```

### OnAgentRemoved
`public virtual void OnAgentRemoved(Agent agent)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
behaviorComponent.OnAgentRemoved(agent);
```

### RemindSergeantPlayer
`public void RemindSergeantPlayer()`

**Purpose:** Executes the RemindSergeantPlayer logic.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
behaviorComponent.RemindSergeantPlayer();
```

### TickOccasionally
`public virtual void TickOccasionally()`

**Purpose:** Advances the occasionally state each frame or update cycle.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
behaviorComponent.TickOccasionally();
```

### GetAIWeight
`public float GetAIWeight()`

**Purpose:** Reads and returns the a i weight value held by the this instance.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
var result = behaviorComponent.GetAIWeight();
```

### ResetBehavior
`public virtual void ResetBehavior()`

**Purpose:** Returns behavior to its default or initial condition.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
behaviorComponent.ResetBehavior();
```

### GetBehaviorString
`public virtual TextObject GetBehaviorString()`

**Purpose:** Reads and returns the behavior string value held by the this instance.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
var result = behaviorComponent.GetBehaviorString();
```

### OnValidBehaviorSideChanged
`public virtual void OnValidBehaviorSideChanged()`

**Purpose:** Invoked when the valid behavior side changed event is raised.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
behaviorComponent.OnValidBehaviorSideChanged();
```

### PrecalculateMovementOrder
`public void PrecalculateMovementOrder()`

**Purpose:** Executes the PrecalculateMovementOrder logic.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
behaviorComponent.PrecalculateMovementOrder();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
var result = behaviorComponent.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
var result = behaviorComponent.GetHashCode();
```

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of BehaviorComponent from the subsystem API first
BehaviorComponent behaviorComponent = ...;
behaviorComponent.OnDeploymentFinished();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BehaviorComponent instance = ...;
```

## See Also

- [Area Index](../)