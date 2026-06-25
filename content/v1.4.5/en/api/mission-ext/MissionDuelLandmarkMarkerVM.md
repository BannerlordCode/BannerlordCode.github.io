---
title: "MissionDuelLandmarkMarkerVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionDuelLandmarkMarkerVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionDuelLandmarkMarkerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionDuelLandmarkMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MissionDuelLandmarkMarkerVM.cs`

## Overview

`MissionDuelLandmarkMarkerVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInScreenBoundaries` | `public bool IsInScreenBoundaries { get; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `TroopType` | `public int TroopType { get; set; }` |
| `ActionDescriptionText` | `public string ActionDescriptionText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### UpdateScreenPosition
`public void UpdateScreenPosition(Camera missionCamera)`

**Purpose:** Updates the state or data of `screen position`.

## Usage Example

```csharp
var value = new MissionDuelLandmarkMarkerVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)