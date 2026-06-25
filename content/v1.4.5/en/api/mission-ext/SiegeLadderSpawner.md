---
title: "SiegeLadderSpawner"
description: "Auto-generated class reference for SiegeLadderSpawner."
---
# SiegeLadderSpawner

**Namespace:** TaleWorlds.MountAndBlade.Objects.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeLadderSpawner : SpawnerBase`
**Base:** `SpawnerBase`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects.Siege/SiegeLadderSpawner.cs`

## Overview

`SiegeLadderSpawner` lives in `TaleWorlds.MountAndBlade.Objects.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AssignParameters
`public override void AssignParameters(SpawnerEntityMissionHelper _spawnerMissionHelper)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SiegeLadderSpawner from the subsystem API first
SiegeLadderSpawner siegeLadderSpawner = ...;
siegeLadderSpawner.AssignParameters(_spawnerMissionHelper);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeLadderSpawner siegeLadderSpawner = ...;
siegeLadderSpawner.AssignParameters(_spawnerMissionHelper);
```

## See Also

- [Area Index](../)