---
title: "BattleSpawnPathSelector"
description: "Auto-generated class reference for BattleSpawnPathSelector."
---
# BattleSpawnPathSelector

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleSpawnPathSelector`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BattleSpawnPathSelector.cs`

## Overview

`BattleSpawnPathSelector` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInitialized` | `public bool IsInitialized { get; }` |

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of BattleSpawnPathSelector from the subsystem API first
BattleSpawnPathSelector battleSpawnPathSelector = ...;
battleSpawnPathSelector.Initialize();
```

### HasPath
`public bool HasPath(Path path)`

**Purpose:** Determines whether the current object already holds `path`.

```csharp
// Obtain an instance of BattleSpawnPathSelector from the subsystem API first
BattleSpawnPathSelector battleSpawnPathSelector = ...;
var result = battleSpawnPathSelector.HasPath(path);
```

### GetInitialPathDataOfSide
`public bool GetInitialPathDataOfSide(BattleSideEnum side, out SpawnPathData pathPathData)`

**Purpose:** Reads and returns the `initial path data of side` value held by the current object.

```csharp
// Obtain an instance of BattleSpawnPathSelector from the subsystem API first
BattleSpawnPathSelector battleSpawnPathSelector = ...;
var result = battleSpawnPathSelector.GetInitialPathDataOfSide(side, pathPathData);
```

### GetReinforcementPathsDataOfSide
`public MBReadOnlyList<SpawnPathData> GetReinforcementPathsDataOfSide(BattleSideEnum side)`

**Purpose:** Reads and returns the `reinforcement paths data of side` value held by the current object.

```csharp
// Obtain an instance of BattleSpawnPathSelector from the subsystem API first
BattleSpawnPathSelector battleSpawnPathSelector = ...;
var result = battleSpawnPathSelector.GetReinforcementPathsDataOfSide(side);
```

### FindBestInitialPath
`public static Path FindBestInitialPath(Mission mission, out float pathPivotOffset, out float pathLength, out bool isPathInverted)`

**Purpose:** Looks up the matching `best initial path` in the current collection or scope.

```csharp
// Static call; no instance required
BattleSpawnPathSelector.FindBestInitialPath(mission, pathPivotOffset, pathLength, isPathInverted);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BattleSpawnPathSelector battleSpawnPathSelector = ...;
battleSpawnPathSelector.Initialize();
```

## See Also

- [Area Index](../)