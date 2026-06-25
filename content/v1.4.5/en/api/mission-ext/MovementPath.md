---
title: "MovementPath"
description: "Auto-generated class reference for MovementPath."
---
# MovementPath

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MovementPath`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MovementPath.cs`

## Overview

`MovementPath` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InitialDirection` | `public Vec2 InitialDirection { get; }` |
| `FinalDirection` | `public Vec2 FinalDirection { get; }` |

## Key Methods

### TickDebug
`public void TickDebug(Vec2 position)`

**Purpose:** Advances the `debug` state each frame or update cycle.

```csharp
// Obtain an instance of MovementPath from the subsystem API first
MovementPath movementPath = ...;
movementPath.TickDebug(position);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MovementPath movementPath = ...;
movementPath.TickDebug(position);
```

## See Also

- [Area Index](../)