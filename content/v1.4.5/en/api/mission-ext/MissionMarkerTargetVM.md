---
title: "MissionMarkerTargetVM"
description: "Auto-generated class reference for MissionMarkerTargetVM."
---
# MissionMarkerTargetVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionMarkerTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets/MissionMarkerTargetVM.cs`

## Overview

`MissionMarkerTargetVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WorldPosition` | `public abstract Vec3 WorldPosition { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Color` | `public string Color { get; set; }` |
| `Color2` | `public string Color2 { get; set; }` |
| `MarkerType` | `public int MarkerType { get; set; }` |
| `VisualState` | `public string VisualState { get; set; }` |

## Key Methods

### UpdateScreenPosition
`public virtual void UpdateScreenPosition(Camera missionCamera)`

**Purpose:** Recalculates and stores the latest representation of `screen position`.

```csharp
// Obtain an instance of MissionMarkerTargetVM from the subsystem API first
MissionMarkerTargetVM missionMarkerTargetVM = ...;
missionMarkerTargetVM.UpdateScreenPosition(missionCamera);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionMarkerTargetVM instance = ...;
```

## See Also

- [Area Index](../)