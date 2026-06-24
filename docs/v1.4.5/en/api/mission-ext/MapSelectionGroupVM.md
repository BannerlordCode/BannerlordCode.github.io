<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapSelectionGroupVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapSelectionGroupVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapSelectionGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/MapSelectionGroupVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteSallyOutChange
`public void ExecuteSallyOutChange()`

**Purpose:** Executes the `sally out change` operation or workflow.

### OnGameTypeChange
`public void OnGameTypeChange(string gameTypeStringId)`

**Purpose:** Called when the `game type change` event is raised.

### RandomizeAll
`public void RandomizeAll()`

**Purpose:** Handles logic related to `randomize all`.

## Usage Example

```csharp
var value = new MapSelectionGroupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)