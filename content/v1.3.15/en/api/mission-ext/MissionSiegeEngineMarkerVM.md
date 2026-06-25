---
title: "MissionSiegeEngineMarkerVM"
description: "Auto-generated class reference for MissionSiegeEngineMarkerVM."
---
# MissionSiegeEngineMarkerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeEngineMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerVM.cs`

## Overview

`MissionSiegeEngineMarkerVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Targets` | `public MBBindingList<MissionSiegeEngineMarkerTargetVM> Targets { get; set; }` |

## Key Methods

### InitializeWith
`public void InitializeWith(List<SiegeWeapon> siegeEngines)`

**Purpose:** Prepares the resources, state, or bindings required by with.

```csharp
// Obtain an instance of MissionSiegeEngineMarkerVM from the subsystem API first
MissionSiegeEngineMarkerVM missionSiegeEngineMarkerVM = ...;
missionSiegeEngineMarkerVM.InitializeWith(siegeEngines);
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MissionSiegeEngineMarkerVM from the subsystem API first
MissionSiegeEngineMarkerVM missionSiegeEngineMarkerVM = ...;
missionSiegeEngineMarkerVM.Tick(0);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MissionSiegeEngineMarkerVM from the subsystem API first
MissionSiegeEngineMarkerVM missionSiegeEngineMarkerVM = ...;
missionSiegeEngineMarkerVM.OnFinalize();
```

### Compare
`public int Compare(MissionSiegeEngineMarkerTargetVM x, MissionSiegeEngineMarkerTargetVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of MissionSiegeEngineMarkerVM from the subsystem API first
MissionSiegeEngineMarkerVM missionSiegeEngineMarkerVM = ...;
var result = missionSiegeEngineMarkerVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionSiegeEngineMarkerVM missionSiegeEngineMarkerVM = ...;
missionSiegeEngineMarkerVM.InitializeWith(siegeEngines);
```

## See Also

- [Area Index](../)