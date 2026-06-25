---
title: "MissionSiegeEngineMarkerTargetVM"
description: "Auto-generated class reference for MissionSiegeEngineMarkerTargetVM."
---
# MissionSiegeEngineMarkerTargetVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeEngineMarkerTargetVM : MissionMarkerTargetVM`
**Base:** `MissionMarkerTargetVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets/MissionSiegeEngineMarkerTargetVM.cs`

## Overview

`MissionSiegeEngineMarkerTargetVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WorldPosition` | `public override Vec3 WorldPosition { get; }` |
| `SiegeEngineID` | `public string SiegeEngineID { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
MissionSiegeEngineMarkerTargetVM instance = ...;
```

## See Also

- [Area Index](../)