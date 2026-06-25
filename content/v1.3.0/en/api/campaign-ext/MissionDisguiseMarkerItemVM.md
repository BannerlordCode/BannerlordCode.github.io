---
title: "MissionDisguiseMarkerItemVM"
description: "Auto-generated class reference for MissionDisguiseMarkerItemVM."
---
# MissionDisguiseMarkerItemVM

**Namespace:** SandBox.ViewModelCollection.Missions.MainAgentDetection
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionDisguiseMarkerItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs`

## Overview

`MissionDisguiseMarkerItemVM` lives in `SandBox.ViewModelCollection.Missions.MainAgentDetection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.MainAgentDetection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OffenseInfo` | `public DisguiseMissionLogic.ShadowingAgentOffenseInfo OffenseInfo { get; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `AlarmProgress` | `public int AlarmProgress { get; set; }` |
| `AlarmState` | `public string AlarmState { get; set; }` |
| `OffenseTypeIdentifier` | `public string OffenseTypeIdentifier { get; set; }` |
| `IsStealthModeEnabled` | `public bool IsStealthModeEnabled { get; set; }` |
| `IsSuspicious` | `public bool IsSuspicious { get; set; }` |
| `IsTarget` | `public bool IsTarget { get; set; }` |
| `IsInVision` | `public bool IsInVision { get; set; }` |
| `IsInVisibilityRange` | `public bool IsInVisibilityRange { get; set; }` |

## Key Methods

### RefreshVisuals
`public void RefreshVisuals()`

**Purpose:** Keeps the display or cache of visuals in sync with the underlying state.

```csharp
// Obtain an instance of MissionDisguiseMarkerItemVM from the subsystem API first
MissionDisguiseMarkerItemVM missionDisguiseMarkerItemVM = ...;
missionDisguiseMarkerItemVM.RefreshVisuals();
```

### UpdatePosition
`public void UpdatePosition()`

**Purpose:** Recalculates and stores the latest representation of position.

```csharp
// Obtain an instance of MissionDisguiseMarkerItemVM from the subsystem API first
MissionDisguiseMarkerItemVM missionDisguiseMarkerItemVM = ...;
missionDisguiseMarkerItemVM.UpdatePosition();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionDisguiseMarkerItemVM missionDisguiseMarkerItemVM = ...;
missionDisguiseMarkerItemVM.RefreshVisuals();
```

## See Also

- [Area Index](../)