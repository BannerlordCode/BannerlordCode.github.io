---
title: "MissionSiegeEngineMarkerTargetVM"
description: "Auto-generated class reference for MissionSiegeEngineMarkerTargetVM."
---
# MissionSiegeEngineMarkerTargetVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeEngineMarkerTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerTargetVM.cs`

## Overview

`MissionSiegeEngineMarkerTargetVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Engine` | `public SiegeWeapon Engine { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |
| `EngineType` | `public string EngineType { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `Distance` | `public float Distance { get; set; }` |
| `HitPoints` | `public int HitPoints { get; set; }` |

## Key Methods

### Refresh
`public void Refresh()`

**Purpose:** **Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of MissionSiegeEngineMarkerTargetVM from the subsystem API first
MissionSiegeEngineMarkerTargetVM missionSiegeEngineMarkerTargetVM = ...;
missionSiegeEngineMarkerTargetVM.Refresh();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionSiegeEngineMarkerTargetVM missionSiegeEngineMarkerTargetVM = ...;
missionSiegeEngineMarkerTargetVM.Refresh();
```

## See Also

- [Area Index](../)