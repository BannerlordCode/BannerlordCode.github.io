---
title: "BehaviorMountedSkirmish"
description: "Auto-generated class reference for BehaviorMountedSkirmish."
---
# BehaviorMountedSkirmish

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorMountedSkirmish : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BehaviorMountedSkirmish.cs`

## Overview

`BehaviorMountedSkirmish` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTargetPos
`public Vec2 GetTargetPos(Vec2 position, float distance)`

**Purpose:** Reads and returns the target pos value held by the this instance.

```csharp
// Obtain an instance of BehaviorMountedSkirmish from the subsystem API first
BehaviorMountedSkirmish behaviorMountedSkirmish = ...;
var result = behaviorMountedSkirmish.GetTargetPos(position, 0);
```

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Advances the occasionally state each frame or update cycle.

```csharp
// Obtain an instance of BehaviorMountedSkirmish from the subsystem API first
BehaviorMountedSkirmish behaviorMountedSkirmish = ...;
behaviorMountedSkirmish.TickOccasionally();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BehaviorMountedSkirmish behaviorMountedSkirmish = ...;
behaviorMountedSkirmish.GetTargetPos(position, 0);
```

## See Also

- [Area Index](../)