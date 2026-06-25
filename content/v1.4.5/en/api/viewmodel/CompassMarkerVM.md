---
title: "CompassMarkerVM"
description: "Auto-generated class reference for CompassMarkerVM."
---
# CompassMarkerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CompassMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass/CompassMarkerVM.cs`

## Overview

`CompassMarkerVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Angle` | `public float Angle { get; }` |
| `IsPrimary` | `public bool IsPrimary { get; set; }` |
| `Text` | `public string Text { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `Position` | `public float Position { get; set; }` |
| `FullPosition` | `public float FullPosition { get; set; }` |

## Key Methods

### Refresh
`public void Refresh(float circleX, float x, float distance)`

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of CompassMarkerVM from the subsystem API first
CompassMarkerVM compassMarkerVM = ...;
compassMarkerVM.Refresh(0, 0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CompassMarkerVM compassMarkerVM = ...;
compassMarkerVM.Refresh(0, 0, 0);
```

## See Also

- [Area Index](../)