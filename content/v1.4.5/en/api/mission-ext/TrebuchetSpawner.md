---
title: "TrebuchetSpawner"
description: "Auto-generated class reference for TrebuchetSpawner."
---
# TrebuchetSpawner

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TrebuchetSpawner : SpawnerBase`
**Base:** `SpawnerBase`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TrebuchetSpawner.cs`

## Overview

`TrebuchetSpawner` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AssignParameters
`public override void AssignParameters(SpawnerEntityMissionHelper _spawnerMissionHelper)`

**Purpose:** Executes the AssignParameters logic.

```csharp
// Obtain an instance of TrebuchetSpawner from the subsystem API first
TrebuchetSpawner trebuchetSpawner = ...;
trebuchetSpawner.AssignParameters(_spawnerMissionHelper);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TrebuchetSpawner trebuchetSpawner = ...;
trebuchetSpawner.AssignParameters(_spawnerMissionHelper);
```

## See Also

- [Area Index](../)