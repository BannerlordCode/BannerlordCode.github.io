---
title: "MissionFlagMarkerTargetVM"
description: "Auto-generated class reference for MissionFlagMarkerTargetVM."
---
# MissionFlagMarkerTargetVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFlagMarkerTargetVM : MissionMarkerTargetVM`
**Base:** `MissionMarkerTargetVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets/MissionFlagMarkerTargetVM.cs`

## Overview

`MissionFlagMarkerTargetVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TargetFlag` | `public FlagCapturePoint TargetFlag { get; }` |
| `WorldPosition` | `public override Vec3 WorldPosition { get; }` |
| `FlagProgress` | `public float FlagProgress { get; set; }` |
| `IsSpawnAffectorFlag` | `public bool IsSpawnAffectorFlag { get; set; }` |
| `RemainingRemovalTime` | `public int RemainingRemovalTime { get; set; }` |
| `IsKeepFlag` | `public bool IsKeepFlag { get; set; }` |

## Key Methods

### UpdateScreenPosition
`public override void UpdateScreenPosition(Camera missionCamera)`

**Purpose:** Recalculates and stores the latest representation of screen position.

```csharp
// Obtain an instance of MissionFlagMarkerTargetVM from the subsystem API first
MissionFlagMarkerTargetVM missionFlagMarkerTargetVM = ...;
missionFlagMarkerTargetVM.UpdateScreenPosition(missionCamera);
```

### OnOwnerChanged
`public void OnOwnerChanged(Team team)`

**Purpose:** Invoked when the owner changed event is raised.

```csharp
// Obtain an instance of MissionFlagMarkerTargetVM from the subsystem API first
MissionFlagMarkerTargetVM missionFlagMarkerTargetVM = ...;
missionFlagMarkerTargetVM.OnOwnerChanged(team);
```

### OnRemainingMoraleChanged
`public void OnRemainingMoraleChanged(int remainingMorale)`

**Purpose:** Invoked when the remaining morale changed event is raised.

```csharp
// Obtain an instance of MissionFlagMarkerTargetVM from the subsystem API first
MissionFlagMarkerTargetVM missionFlagMarkerTargetVM = ...;
missionFlagMarkerTargetVM.OnRemainingMoraleChanged(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionFlagMarkerTargetVM missionFlagMarkerTargetVM = ...;
missionFlagMarkerTargetVM.UpdateScreenPosition(missionCamera);
```

## See Also

- [Area Index](../)