---
title: "BehaviorShootFromSiegeTower"
description: "Auto-generated class reference for BehaviorShootFromSiegeTower."
---
# BehaviorShootFromSiegeTower

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorShootFromSiegeTower : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BehaviorShootFromSiegeTower.cs`

## Overview

`BehaviorShootFromSiegeTower` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Advances the occasionally state each frame or update cycle.

```csharp
// Obtain an instance of BehaviorShootFromSiegeTower from the subsystem API first
BehaviorShootFromSiegeTower behaviorShootFromSiegeTower = ...;
behaviorShootFromSiegeTower.TickOccasionally();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BehaviorShootFromSiegeTower behaviorShootFromSiegeTower = ...;
behaviorShootFromSiegeTower.TickOccasionally();
```

## See Also

- [Area Index](../)