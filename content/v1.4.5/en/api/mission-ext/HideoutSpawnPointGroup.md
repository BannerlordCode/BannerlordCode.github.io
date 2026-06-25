---
title: "HideoutSpawnPointGroup"
description: "Auto-generated class reference for HideoutSpawnPointGroup."
---
# HideoutSpawnPointGroup

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HideoutSpawnPointGroup : SynchedMissionObject`
**Base:** `SynchedMissionObject`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/HideoutSpawnPointGroup.cs`

## Overview

`HideoutSpawnPointGroup` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSpawnPointFrames
`public MatrixFrame GetSpawnPointFrames()`

**Purpose:** **Purpose:** Reads and returns the spawn point frames value held by the this instance.

```csharp
// Obtain an instance of HideoutSpawnPointGroup from the subsystem API first
HideoutSpawnPointGroup hideoutSpawnPointGroup = ...;
var result = hideoutSpawnPointGroup.GetSpawnPointFrames();
```

### RemoveWithAllChildren
`public void RemoveWithAllChildren()`

**Purpose:** **Purpose:** Removes with all children from the current collection or state.

```csharp
// Obtain an instance of HideoutSpawnPointGroup from the subsystem API first
HideoutSpawnPointGroup hideoutSpawnPointGroup = ...;
hideoutSpawnPointGroup.RemoveWithAllChildren();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HideoutSpawnPointGroup hideoutSpawnPointGroup = ...;
hideoutSpawnPointGroup.GetSpawnPointFrames();
```

## See Also

- [Area Index](../)