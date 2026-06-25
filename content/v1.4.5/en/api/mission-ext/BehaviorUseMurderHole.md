---
title: "BehaviorUseMurderHole"
description: "Auto-generated class reference for BehaviorUseMurderHole."
---
# BehaviorUseMurderHole

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorUseMurderHole : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BehaviorUseMurderHole.cs`

## Overview

`BehaviorUseMurderHole` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Advances the `occasionally` state each frame or update cycle.

```csharp
// Obtain an instance of BehaviorUseMurderHole from the subsystem API first
BehaviorUseMurderHole behaviorUseMurderHole = ...;
behaviorUseMurderHole.TickOccasionally();
```

### IsMurderHoleActive
`public bool IsMurderHoleActive()`

**Purpose:** Determines whether the current object is in the `murder hole active` state or condition.

```csharp
// Obtain an instance of BehaviorUseMurderHole from the subsystem API first
BehaviorUseMurderHole behaviorUseMurderHole = ...;
var result = behaviorUseMurderHole.IsMurderHoleActive();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BehaviorUseMurderHole behaviorUseMurderHole = ...;
behaviorUseMurderHole.TickOccasionally();
```

## See Also

- [Area Index](../)