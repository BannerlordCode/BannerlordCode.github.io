---
title: "BehaviorEliminateEnemyInsideCastle"
description: "Auto-generated class reference for BehaviorEliminateEnemyInsideCastle."
---
# BehaviorEliminateEnemyInsideCastle

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorEliminateEnemyInsideCastle : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BehaviorEliminateEnemyInsideCastle.cs`

## Overview

`BehaviorEliminateEnemyInsideCastle` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnValidBehaviorSideChanged
`public override void OnValidBehaviorSideChanged()`

**Purpose:** Invoked when the `valid behavior side changed` event is raised.

```csharp
// Obtain an instance of BehaviorEliminateEnemyInsideCastle from the subsystem API first
BehaviorEliminateEnemyInsideCastle behaviorEliminateEnemyInsideCastle = ...;
behaviorEliminateEnemyInsideCastle.OnValidBehaviorSideChanged();
```

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Advances the `occasionally` state each frame or update cycle.

```csharp
// Obtain an instance of BehaviorEliminateEnemyInsideCastle from the subsystem API first
BehaviorEliminateEnemyInsideCastle behaviorEliminateEnemyInsideCastle = ...;
behaviorEliminateEnemyInsideCastle.TickOccasionally();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BehaviorEliminateEnemyInsideCastle behaviorEliminateEnemyInsideCastle = ...;
behaviorEliminateEnemyInsideCastle.OnValidBehaviorSideChanged();
```

## See Also

- [Area Index](../)