---
title: "BehaviorSparseSkirmish"
description: "Auto-generated class reference for BehaviorSparseSkirmish."
---
# BehaviorSparseSkirmish

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorSparseSkirmish : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorSparseSkirmish.cs`

## Overview

`BehaviorSparseSkirmish` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ArcherPosition` | `public GameEntity ArcherPosition { get; set; }` |
| `NavmeshlessTargetPositionPenalty` | `public override float NavmeshlessTargetPositionPenalty { get; }` |

## Key Methods

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Advances the occasionally state each frame or update cycle.

```csharp
// Obtain an instance of BehaviorSparseSkirmish from the subsystem API first
BehaviorSparseSkirmish behaviorSparseSkirmish = ...;
behaviorSparseSkirmish.TickOccasionally();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BehaviorSparseSkirmish behaviorSparseSkirmish = ...;
behaviorSparseSkirmish.TickOccasionally();
```

## See Also

- [Area Index](../)