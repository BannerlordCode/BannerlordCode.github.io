---
title: "DuelSpawnFrameBehavior"
description: "Auto-generated class reference for DuelSpawnFrameBehavior."
---
# DuelSpawnFrameBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DuelSpawnFrameBehavior : SpawnFrameBehaviorBase`
**Base:** `SpawnFrameBehaviorBase`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/DuelSpawnFrameBehavior.cs`

## Overview

`DuelSpawnFrameBehavior` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public override void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of DuelSpawnFrameBehavior from the subsystem API first
DuelSpawnFrameBehavior duelSpawnFrameBehavior = ...;
duelSpawnFrameBehavior.Initialize();
```

### GetSpawnFrame
`public override MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn)`

**Purpose:** Reads and returns the `spawn frame` value held by the current object.

```csharp
// Obtain an instance of DuelSpawnFrameBehavior from the subsystem API first
DuelSpawnFrameBehavior duelSpawnFrameBehavior = ...;
var result = duelSpawnFrameBehavior.GetSpawnFrame(team, false, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DuelSpawnFrameBehavior duelSpawnFrameBehavior = ...;
duelSpawnFrameBehavior.Initialize();
```

## See Also

- [Area Index](../)