---
title: "SiegeTowerSpawner"
description: "Auto-generated class reference for SiegeTowerSpawner."
---
# SiegeTowerSpawner

**Namespace:** TaleWorlds.MountAndBlade.Objects.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeTowerSpawner : SpawnerBase`
**Base:** `SpawnerBase`
**File:** `TaleWorlds.MountAndBlade/Objects/Siege/SiegeTowerSpawner.cs`

## Overview

`SiegeTowerSpawner` lives in `TaleWorlds.MountAndBlade.Objects.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RampRotationRadian` | `public float RampRotationRadian { get; }` |

## Key Methods

### AssignParameters
`public override void AssignParameters(SpawnerEntityMissionHelper _spawnerMissionHelper)`

**Purpose:** **Purpose:** Executes the AssignParameters logic.

```csharp
// Obtain an instance of SiegeTowerSpawner from the subsystem API first
SiegeTowerSpawner siegeTowerSpawner = ...;
siegeTowerSpawner.AssignParameters(_spawnerMissionHelper);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeTowerSpawner siegeTowerSpawner = ...;
siegeTowerSpawner.AssignParameters(_spawnerMissionHelper);
```

## See Also

- [Area Index](../)