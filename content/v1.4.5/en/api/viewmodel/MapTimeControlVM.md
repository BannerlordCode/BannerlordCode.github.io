---
title: "MapTimeControlVM"
description: "Auto-generated class reference for MapTimeControlVM."
---
# MapTimeControlVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapTimeControlVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar/MapTimeControlVM.cs`

## Overview

`MapTimeControlVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInBattleSimulation` | `public bool IsInBattleSimulation { get; set; }` |
| `IsInRecruitment` | `public bool IsInRecruitment { get; set; }` |
| `IsEncyclopediaOpen` | `public bool IsEncyclopediaOpen { get; set; }` |
| `IsInArmyManagement` | `public bool IsInArmyManagement { get; set; }` |
| `IsInTownManagement` | `public bool IsInTownManagement { get; set; }` |
| `IsInHideoutTroopManage` | `public bool IsInHideoutTroopManage { get; set; }` |
| `IsInMap` | `public bool IsInMap { get; set; }` |
| `IsInCampaignOptions` | `public bool IsInCampaignOptions { get; set; }` |
| `IsEscapeMenuOpened` | `public bool IsEscapeMenuOpened { get; set; }` |
| `IsMarriageOfferPopupActive` | `public bool IsMarriageOfferPopupActive { get; set; }` |
| `IsHeirSelectionPopupActive` | `public bool IsHeirSelectionPopupActive { get; set; }` |
| `IsMapCheatsActive` | `public bool IsMapCheatsActive { get; set; }` |
| `IsMapIncidentActive` | `public bool IsMapIncidentActive { get; set; }` |
| `IsOverlayContextMenuEnabled` | `public bool IsOverlayContextMenuEnabled { get; set; }` |
| `TimeOfDayHint` | `public BasicTooltipViewModel TimeOfDayHint { get; set; }` |
| `IsCurrentlyPausedOnMap` | `public bool IsCurrentlyPausedOnMap { get; set; }` |
| `IsCenterPanelEnabled` | `public bool IsCenterPanelEnabled { get; set; }` |
| `Time` | `public double Time { get; set; }` |
| `PausedText` | `public string PausedText { get; set; }` |
| `Date` | `public string Date { get; set; }` |
| `TimeFlowState` | `public int TimeFlowState { get; set; }` |
| `PauseHint` | `public BasicTooltipViewModel PauseHint { get; set; }` |
| `PlayHint` | `public BasicTooltipViewModel PlayHint { get; set; }` |
| `FastForwardHint` | `public BasicTooltipViewModel FastForwardHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MapTimeControlVM from the subsystem API first
MapTimeControlVM mapTimeControlVM = ...;
mapTimeControlVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MapTimeControlVM from the subsystem API first
MapTimeControlVM mapTimeControlVM = ...;
mapTimeControlVM.OnFinalize();
```

### Tick
`public void Tick()`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MapTimeControlVM from the subsystem API first
MapTimeControlVM mapTimeControlVM = ...;
mapTimeControlVM.Tick();
```

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of MapTimeControlVM from the subsystem API first
MapTimeControlVM mapTimeControlVM = ...;
mapTimeControlVM.Refresh();
```

### ExecuteTimeControlChange
`public void ExecuteTimeControlChange(int selectedTimeSpeed)`

**Purpose:** Runs the operation or workflow associated with time control change.

```csharp
// Obtain an instance of MapTimeControlVM from the subsystem API first
MapTimeControlVM mapTimeControlVM = ...;
mapTimeControlVM.ExecuteTimeControlChange(0);
```

### ExecuteResetCamera
`public void ExecuteResetCamera()`

**Purpose:** Runs the operation or workflow associated with reset camera.

```csharp
// Obtain an instance of MapTimeControlVM from the subsystem API first
MapTimeControlVM mapTimeControlVM = ...;
mapTimeControlVM.ExecuteResetCamera();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapTimeControlVM mapTimeControlVM = ...;
mapTimeControlVM.RefreshValues();
```

## See Also

- [Area Index](../)