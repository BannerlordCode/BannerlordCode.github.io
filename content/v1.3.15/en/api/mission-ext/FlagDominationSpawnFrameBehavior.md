---
title: "FlagDominationSpawnFrameBehavior"
description: "Auto-generated class reference for FlagDominationSpawnFrameBehavior."
---
# FlagDominationSpawnFrameBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FlagDominationSpawnFrameBehavior : SpawnFrameBehaviorBase`
**Base:** `SpawnFrameBehaviorBase`
**File:** `TaleWorlds.MountAndBlade/FlagDominationSpawnFrameBehavior.cs`

## Overview

`FlagDominationSpawnFrameBehavior` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public override void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of FlagDominationSpawnFrameBehavior from the subsystem API first
FlagDominationSpawnFrameBehavior flagDominationSpawnFrameBehavior = ...;
flagDominationSpawnFrameBehavior.Initialize();
```

### GetSpawnFrame
`public override MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn)`

**Purpose:** Reads and returns the `spawn frame` value held by the current object.

```csharp
// Obtain an instance of FlagDominationSpawnFrameBehavior from the subsystem API first
FlagDominationSpawnFrameBehavior flagDominationSpawnFrameBehavior = ...;
var result = flagDominationSpawnFrameBehavior.GetSpawnFrame(team, false, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FlagDominationSpawnFrameBehavior flagDominationSpawnFrameBehavior = ...;
flagDominationSpawnFrameBehavior.Initialize();
```

## See Also

- [Area Index](../)