---
title: "BehaviorDefendCastleKeyPosition"
description: "Auto-generated class reference for BehaviorDefendCastleKeyPosition."
---
# BehaviorDefendCastleKeyPosition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorDefendCastleKeyPosition : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorDefendCastleKeyPosition.cs`

## Overview

`BehaviorDefendCastleKeyPosition` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NavmeshlessTargetPositionPenalty` | `public override float NavmeshlessTargetPositionPenalty { get; }` |

## Key Methods

### GetBehaviorString
`public override TextObject GetBehaviorString()`

**Purpose:** **Purpose:** Reads and returns the behavior string value held by the this instance.

```csharp
// Obtain an instance of BehaviorDefendCastleKeyPosition from the subsystem API first
BehaviorDefendCastleKeyPosition behaviorDefendCastleKeyPosition = ...;
var result = behaviorDefendCastleKeyPosition.GetBehaviorString();
```

### OnValidBehaviorSideChanged
`public override void OnValidBehaviorSideChanged()`

**Purpose:** **Purpose:** Invoked when the valid behavior side changed event is raised.

```csharp
// Obtain an instance of BehaviorDefendCastleKeyPosition from the subsystem API first
BehaviorDefendCastleKeyPosition behaviorDefendCastleKeyPosition = ...;
behaviorDefendCastleKeyPosition.OnValidBehaviorSideChanged();
```

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** **Purpose:** Advances the occasionally state each frame or update cycle.

```csharp
// Obtain an instance of BehaviorDefendCastleKeyPosition from the subsystem API first
BehaviorDefendCastleKeyPosition behaviorDefendCastleKeyPosition = ...;
behaviorDefendCastleKeyPosition.TickOccasionally();
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** **Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of BehaviorDefendCastleKeyPosition from the subsystem API first
BehaviorDefendCastleKeyPosition behaviorDefendCastleKeyPosition = ...;
behaviorDefendCastleKeyPosition.OnDeploymentFinished();
```

### ResetBehavior
`public override void ResetBehavior()`

**Purpose:** **Purpose:** Returns behavior to its default or initial condition.

```csharp
// Obtain an instance of BehaviorDefendCastleKeyPosition from the subsystem API first
BehaviorDefendCastleKeyPosition behaviorDefendCastleKeyPosition = ...;
behaviorDefendCastleKeyPosition.ResetBehavior();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BehaviorDefendCastleKeyPosition behaviorDefendCastleKeyPosition = ...;
behaviorDefendCastleKeyPosition.GetBehaviorString();
```

## See Also

- [Area Index](../)