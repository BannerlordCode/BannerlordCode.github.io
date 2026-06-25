---
title: "BehaviorAssaultWalls"
description: "Auto-generated class reference for BehaviorAssaultWalls."
---
# BehaviorAssaultWalls

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorAssaultWalls : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorAssaultWalls.cs`

## Overview

`BehaviorAssaultWalls` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NavmeshlessTargetPositionPenalty` | `public override float NavmeshlessTargetPositionPenalty { get; }` |

## Key Methods

### GetBehaviorString
`public override TextObject GetBehaviorString()`

**Purpose:** Reads and returns the `behavior string` value held by the current object.

```csharp
// Obtain an instance of BehaviorAssaultWalls from the subsystem API first
BehaviorAssaultWalls behaviorAssaultWalls = ...;
var result = behaviorAssaultWalls.GetBehaviorString();
```

### OnValidBehaviorSideChanged
`public override void OnValidBehaviorSideChanged()`

**Purpose:** Invoked when the `valid behavior side changed` event is raised.

```csharp
// Obtain an instance of BehaviorAssaultWalls from the subsystem API first
BehaviorAssaultWalls behaviorAssaultWalls = ...;
behaviorAssaultWalls.OnValidBehaviorSideChanged();
```

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Advances the `occasionally` state each frame or update cycle.

```csharp
// Obtain an instance of BehaviorAssaultWalls from the subsystem API first
BehaviorAssaultWalls behaviorAssaultWalls = ...;
behaviorAssaultWalls.TickOccasionally();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BehaviorAssaultWalls behaviorAssaultWalls = ...;
behaviorAssaultWalls.GetBehaviorString();
```

## See Also

- [Area Index](../)