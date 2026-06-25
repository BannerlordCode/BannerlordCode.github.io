---
title: "BehaviorShootFromCastleWalls"
description: "Auto-generated class reference for BehaviorShootFromCastleWalls."
---
# BehaviorShootFromCastleWalls

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorShootFromCastleWalls : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BehaviorShootFromCastleWalls.cs`

## Overview

`BehaviorShootFromCastleWalls` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ArcherPosition` | `public GameEntity ArcherPosition { get; set; }` |

## Key Methods

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Advances the `occasionally` state each frame or update cycle.

```csharp
// Obtain an instance of BehaviorShootFromCastleWalls from the subsystem API first
BehaviorShootFromCastleWalls behaviorShootFromCastleWalls = ...;
behaviorShootFromCastleWalls.TickOccasionally();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BehaviorShootFromCastleWalls behaviorShootFromCastleWalls = ...;
behaviorShootFromCastleWalls.TickOccasionally();
```

## See Also

- [Area Index](../)