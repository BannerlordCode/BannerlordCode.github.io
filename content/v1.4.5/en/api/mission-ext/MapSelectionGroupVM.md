---
title: "MapSelectionGroupVM"
description: "Auto-generated class reference for MapSelectionGroupVM."
---
# MapSelectionGroupVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapSelectionGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/MapSelectionGroupVM.cs`

## Overview

`MapSelectionGroupVM` lives in `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedWallBreachedCount` | `public int SelectedWallBreachedCount { get; }` |
| `SelectedSceneLevel` | `public int SelectedSceneLevel { get; }` |
| `SelectedTimeOfDay` | `public int SelectedTimeOfDay { get; }` |
| `SelectedSeasonId` | `public string SelectedSeasonId { get; }` |
| `SelectedMap` | `public MapItemVM SelectedMap { get; }` |
| `MapSelection` | `public SelectorVM<MapItemVM> MapSelection { get; set; }` |
| `SceneLevelSelection` | `public SelectorVM<SceneLevelItemVM> SceneLevelSelection { get; set; }` |
| `WallHitpointSelection` | `public SelectorVM<WallHitpointItemVM> WallHitpointSelection { get; set; }` |
| `SeasonSelection` | `public SelectorVM<SeasonItemVM> SeasonSelection { get; set; }` |
| `TimeOfDaySelection` | `public SelectorVM<TimeOfDayItemVM> TimeOfDaySelection { get; set; }` |
| `IsCurrentMapSiege` | `public bool IsCurrentMapSiege { get; set; }` |
| `IsSallyOutSelected` | `public bool IsSallyOutSelected { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `MapText` | `public string MapText { get; set; }` |
| `SeasonText` | `public string SeasonText { get; set; }` |
| `TimeOfDayText` | `public string TimeOfDayText { get; set; }` |
| `SceneLevelText` | `public string SceneLevelText { get; set; }` |
| `WallHitpointsText` | `public string WallHitpointsText { get; set; }` |
| `AttackerSiegeMachinesText` | `public string AttackerSiegeMachinesText { get; set; }` |
| `DefenderSiegeMachinesText` | `public string DefenderSiegeMachinesText { get; set; }` |
| `SalloutText` | `public string SalloutText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MapSelectionGroupVM from the subsystem API first
MapSelectionGroupVM mapSelectionGroupVM = ...;
mapSelectionGroupVM.RefreshValues();
```

### ExecuteSallyOutChange
`public void ExecuteSallyOutChange()`

**Purpose:** Runs the operation or workflow associated with `sally out change`.

```csharp
// Obtain an instance of MapSelectionGroupVM from the subsystem API first
MapSelectionGroupVM mapSelectionGroupVM = ...;
mapSelectionGroupVM.ExecuteSallyOutChange();
```

### OnGameTypeChange
`public void OnGameTypeChange(string gameTypeStringId)`

**Purpose:** Invoked when the `game type change` event is raised.

```csharp
// Obtain an instance of MapSelectionGroupVM from the subsystem API first
MapSelectionGroupVM mapSelectionGroupVM = ...;
mapSelectionGroupVM.OnGameTypeChange("example");
```

### RandomizeAll
`public void RandomizeAll()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapSelectionGroupVM from the subsystem API first
MapSelectionGroupVM mapSelectionGroupVM = ...;
mapSelectionGroupVM.RandomizeAll();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapSelectionGroupVM mapSelectionGroupVM = ...;
mapSelectionGroupVM.RefreshValues();
```

## See Also

- [Area Index](../)