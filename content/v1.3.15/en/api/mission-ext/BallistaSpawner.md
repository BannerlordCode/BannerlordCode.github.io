---
title: "BallistaSpawner"
description: "Auto-generated class reference for BallistaSpawner."
---
# BallistaSpawner

**Namespace:** TaleWorlds.MountAndBlade.Objects.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BallistaSpawner : SpawnerBase`
**Base:** `SpawnerBase`
**File:** `TaleWorlds.MountAndBlade/Objects/Siege/BallistaSpawner.cs`

## Overview

`BallistaSpawner` lives in `TaleWorlds.MountAndBlade.Objects.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AssignParameters
`public override void AssignParameters(SpawnerEntityMissionHelper _spawnerMissionHelper)`

**Purpose:** Executes the AssignParameters logic.

```csharp
// Obtain an instance of BallistaSpawner from the subsystem API first
BallistaSpawner ballistaSpawner = ...;
ballistaSpawner.AssignParameters(_spawnerMissionHelper);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BallistaSpawner ballistaSpawner = ...;
ballistaSpawner.AssignParameters(_spawnerMissionHelper);
```

## See Also

- [Area Index](../)