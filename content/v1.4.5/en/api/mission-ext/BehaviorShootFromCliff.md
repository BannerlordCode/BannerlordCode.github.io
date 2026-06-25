---
title: "BehaviorShootFromCliff"
description: "Auto-generated class reference for BehaviorShootFromCliff."
---
# BehaviorShootFromCliff

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorShootFromCliff : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BehaviorShootFromCliff.cs`

## Overview

`BehaviorShootFromCliff` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetTacticalDefendPosition
`public void SetTacticalDefendPosition(TacticalPosition tacticalPosition)`

**Purpose:** Assigns a new value to `tactical defend position` and updates the object's internal state.

```csharp
// Obtain an instance of BehaviorShootFromCliff from the subsystem API first
BehaviorShootFromCliff behaviorShootFromCliff = ...;
behaviorShootFromCliff.SetTacticalDefendPosition(tacticalPosition);
```

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Advances the `occasionally` state each frame or update cycle.

```csharp
// Obtain an instance of BehaviorShootFromCliff from the subsystem API first
BehaviorShootFromCliff behaviorShootFromCliff = ...;
behaviorShootFromCliff.TickOccasionally();
```

### ResetBehavior
`public override void ResetBehavior()`

**Purpose:** Returns `behavior` to its default or initial condition.

```csharp
// Obtain an instance of BehaviorShootFromCliff from the subsystem API first
BehaviorShootFromCliff behaviorShootFromCliff = ...;
behaviorShootFromCliff.ResetBehavior();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BehaviorShootFromCliff behaviorShootFromCliff = ...;
behaviorShootFromCliff.SetTacticalDefendPosition(tacticalPosition);
```

## See Also

- [Area Index](../)