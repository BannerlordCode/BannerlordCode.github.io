---
title: "BehaviorDefensiveRing"
description: "Auto-generated class reference for BehaviorDefensiveRing."
---
# BehaviorDefensiveRing

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorDefensiveRing : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorDefensiveRing.cs`

## Overview

`BehaviorDefensiveRing` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** **Purpose:** Advances the occasionally state each frame or update cycle.

```csharp
// Obtain an instance of BehaviorDefensiveRing from the subsystem API first
BehaviorDefensiveRing behaviorDefensiveRing = ...;
behaviorDefensiveRing.TickOccasionally();
```

### ResetBehavior
`public override void ResetBehavior()`

**Purpose:** **Purpose:** Returns behavior to its default or initial condition.

```csharp
// Obtain an instance of BehaviorDefensiveRing from the subsystem API first
BehaviorDefensiveRing behaviorDefensiveRing = ...;
behaviorDefensiveRing.ResetBehavior();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BehaviorDefensiveRing behaviorDefensiveRing = ...;
behaviorDefensiveRing.TickOccasionally();
```

## See Also

- [Area Index](../)