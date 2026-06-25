---
title: "BattleSideSpawnPathSelector"
description: "Auto-generated class reference for BattleSideSpawnPathSelector."
---
# BattleSideSpawnPathSelector

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleSideSpawnPathSelector`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BattleSideSpawnPathSelector.cs`

## Overview

`BattleSideSpawnPathSelector` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InitialSpawnPath` | `public SpawnPathData InitialSpawnPath { get; }` |
| `ReinforcementPaths` | `public MBReadOnlyList<SpawnPathData> ReinforcementPaths { get; }` |

## Key Methods

### HasReinforcementPath
`public bool HasReinforcementPath(Path path)`

**Purpose:** Determines whether the this instance already holds reinforcement path.

```csharp
// Obtain an instance of BattleSideSpawnPathSelector from the subsystem API first
BattleSideSpawnPathSelector battleSideSpawnPathSelector = ...;
var result = battleSideSpawnPathSelector.HasReinforcementPath(path);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BattleSideSpawnPathSelector battleSideSpawnPathSelector = ...;
battleSideSpawnPathSelector.HasReinforcementPath(path);
```

## See Also

- [Area Index](../)