---
title: "BattleSpawnPathSelector"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleSpawnPathSelector`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleSpawnPathSelector

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleSpawnPathSelector`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BattleSpawnPathSelector.cs`

## Overview

`BattleSpawnPathSelector` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `InitialPath` | `public Path InitialPath { get; }` |

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### HasPath
`public bool HasPath(Path path)`

**Purpose:** Checks whether the current object has/contains `path`.

### GetInitialPathDataOfSide
`public bool GetInitialPathDataOfSide(BattleSideEnum side, out SpawnPathData pathPathData)`

**Purpose:** Gets the current value of `initial path data of side`.

### GetReinforcementPathsDataOfSide
`public MBReadOnlyList<SpawnPathData> GetReinforcementPathsDataOfSide(BattleSideEnum side)`

**Purpose:** Gets the current value of `reinforcement paths data of side`.

### FindBestInitialPath
`public static Path FindBestInitialPath(Mission mission, out float pivotRatio, out bool isInverted)`

**Purpose:** Handles logic related to `find best initial path`.

## Usage Example

```csharp
var value = new BattleSpawnPathSelector();
value.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)