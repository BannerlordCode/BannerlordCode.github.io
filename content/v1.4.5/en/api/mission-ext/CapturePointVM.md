---
title: "CapturePointVM"
description: "Auto-generated class reference for CapturePointVM."
---
# CapturePointVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CapturePointVM : CompassTargetVM`
**Base:** `CompassTargetVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions/CapturePointVM.cs`

## Overview

`CapturePointVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FlagProgress` | `public float FlagProgress { get; set; }` |
| `IsSpawnAffectorFlag` | `public bool IsSpawnAffectorFlag { get; set; }` |
| `IsKeepFlag` | `public bool IsKeepFlag { get; set; }` |
| `RemainingRemovalTime` | `public int RemainingRemovalTime { get; set; }` |

## Key Methods

### Refresh
`public override void Refresh(float circleX, float x, float distance)`

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of CapturePointVM from the subsystem API first
CapturePointVM capturePointVM = ...;
capturePointVM.Refresh(0, 0, 0);
```

### OnOwnerChanged
`public void OnOwnerChanged(Team newTeam)`

**Purpose:** Invoked when the owner changed event is raised.

```csharp
// Obtain an instance of CapturePointVM from the subsystem API first
CapturePointVM capturePointVM = ...;
capturePointVM.OnOwnerChanged(newTeam);
```

### ResetFlag
`public void ResetFlag()`

**Purpose:** Returns flag to its default or initial condition.

```csharp
// Obtain an instance of CapturePointVM from the subsystem API first
CapturePointVM capturePointVM = ...;
capturePointVM.ResetFlag();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CapturePointVM capturePointVM = ...;
capturePointVM.Refresh(0, 0, 0);
```

## See Also

- [Area Index](../)