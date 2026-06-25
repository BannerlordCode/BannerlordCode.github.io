---
title: "CrosshairVM"
description: "Auto-generated class reference for CrosshairVM."
---
# CrosshairVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CrosshairVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD/CrosshairVM.cs`

## Overview

`CrosshairVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `IsReloadPhasesVisible` | `public bool IsReloadPhasesVisible { get; set; }` |
| `IsHitMarkerVisible` | `public bool IsHitMarkerVisible { get; set; }` |
| `IsVictimDead` | `public bool IsVictimDead { get; set; }` |
| `IsHumanoidHeadshot` | `public bool IsHumanoidHeadshot { get; set; }` |
| `TopArrowOpacity` | `public double TopArrowOpacity { get; set; }` |
| `ReloadPhases` | `public MBBindingList<ReloadPhaseItemVM> ReloadPhases { get; set; }` |
| `BottomArrowOpacity` | `public double BottomArrowOpacity { get; set; }` |
| `RightArrowOpacity` | `public double RightArrowOpacity { get; set; }` |
| `LeftArrowOpacity` | `public double LeftArrowOpacity { get; set; }` |
| `IsTargetInvalid` | `public bool IsTargetInvalid { get; set; }` |
| `CrosshairAccuracy` | `public double CrosshairAccuracy { get; set; }` |
| `CrosshairScale` | `public double CrosshairScale { get; set; }` |
| `CrosshairType` | `public int CrosshairType { get; set; }` |

## Key Methods

### SetProperties
`public void SetProperties(double accuracy, double scale)`

**Purpose:** **Purpose:** Assigns a new value to properties and updates the object's internal state.

```csharp
// Obtain an instance of CrosshairVM from the subsystem API first
CrosshairVM crosshairVM = ...;
crosshairVM.SetProperties(0, 0);
```

### SetArrowProperties
`public void SetArrowProperties(double topArrowOpacity, double rightArrowOpacity, double bottomArrowOpacity, double leftArrowOpacity)`

**Purpose:** **Purpose:** Assigns a new value to arrow properties and updates the object's internal state.

```csharp
// Obtain an instance of CrosshairVM from the subsystem API first
CrosshairVM crosshairVM = ...;
crosshairVM.SetArrowProperties(0, 0, 0, 0);
```

### SetReloadProperties
`public void SetReloadProperties(in StackArray.StackArray10FloatFloatTuple reloadPhases, int reloadPhaseCount)`

**Purpose:** **Purpose:** Assigns a new value to reload properties and updates the object's internal state.

```csharp
// Obtain an instance of CrosshairVM from the subsystem API first
CrosshairVM crosshairVM = ...;
crosshairVM.SetReloadProperties(reloadPhases, 0);
```

### ShowHitMarker
`public void ShowHitMarker(bool isVictimDead, bool isHumanoidHeadShot)`

**Purpose:** **Purpose:** Displays the UI or element associated with hit marker.

```csharp
// Obtain an instance of CrosshairVM from the subsystem API first
CrosshairVM crosshairVM = ...;
crosshairVM.ShowHitMarker(false, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CrosshairVM crosshairVM = ...;
crosshairVM.SetProperties(0, 0);
```

## See Also

- [Area Index](../)