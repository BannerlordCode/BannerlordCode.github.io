---
title: "BehaviorDefend"
description: "Auto-generated class reference for BehaviorDefend."
---
# BehaviorDefend

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorDefend : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorDefend.cs`

## Overview

`BehaviorDefend` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Advances the `occasionally` state each frame or update cycle.

```csharp
// Obtain an instance of BehaviorDefend from the subsystem API first
BehaviorDefend behaviorDefend = ...;
behaviorDefend.TickOccasionally();
```

### ResetBehavior
`public override void ResetBehavior()`

**Purpose:** Returns `behavior` to its default or initial condition.

```csharp
// Obtain an instance of BehaviorDefend from the subsystem API first
BehaviorDefend behaviorDefend = ...;
behaviorDefend.ResetBehavior();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BehaviorDefend behaviorDefend = ...;
behaviorDefend.TickOccasionally();
```

## See Also

- [Area Index](../)