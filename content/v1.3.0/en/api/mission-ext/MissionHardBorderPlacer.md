---
title: "MissionHardBorderPlacer"
description: "Auto-generated class reference for MissionHardBorderPlacer."
---
# MissionHardBorderPlacer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionHardBorderPlacer : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionHardBorderPlacer.cs`

## Overview

`MissionHardBorderPlacer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** **Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MissionHardBorderPlacer from the subsystem API first
MissionHardBorderPlacer missionHardBorderPlacer = ...;
missionHardBorderPlacer.EarlyStart();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionHardBorderPlacer missionHardBorderPlacer = ...;
missionHardBorderPlacer.EarlyStart();
```

## See Also

- [Area Index](../)