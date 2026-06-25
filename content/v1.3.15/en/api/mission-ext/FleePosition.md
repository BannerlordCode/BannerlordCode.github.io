---
title: "FleePosition"
description: "Auto-generated class reference for FleePosition."
---
# FleePosition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FleePosition : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/FleePosition.cs`

## Overview

`FleePosition` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSide
`public BattleSideEnum GetSide()`

**Purpose:** Reads and returns the side value held by the this instance.

```csharp
// Obtain an instance of FleePosition from the subsystem API first
FleePosition fleePosition = ...;
var result = fleePosition.GetSide();
```

### GetClosestPointToEscape
`public Vec3 GetClosestPointToEscape(Vec2 position)`

**Purpose:** Reads and returns the closest point to escape value held by the this instance.

```csharp
// Obtain an instance of FleePosition from the subsystem API first
FleePosition fleePosition = ...;
var result = fleePosition.GetClosestPointToEscape(position);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FleePosition fleePosition = ...;
fleePosition.GetSide();
```

## See Also

- [Area Index](../)