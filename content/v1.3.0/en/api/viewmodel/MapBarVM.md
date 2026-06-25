---
title: "MapBarVM"
description: "Auto-generated class reference for MapBarVM."
---
# MapBarVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapBarVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapBarVM.cs`

## Overview

`MapBarVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapInfo` | `public MapInfoVM MapInfo { get; set; }` |
| `MapTimeControl` | `public MapTimeControlVM MapTimeControl { get; set; }` |
| `MapNavigation` | `public MapNavigationVM MapNavigation { get; set; }` |
| `IsGatherArmyVisible` | `public bool IsGatherArmyVisible { get; set; }` |
| `IsInInfoMode` | `public bool IsInInfoMode { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `CanGatherArmy` | `public bool CanGatherArmy { get; set; }` |
| `GatherArmyHint` | `public HintViewModel GatherArmyHint { get; set; }` |
| `IsCameraCentered` | `public bool IsCameraCentered { get; set; }` |
| `CurrentScreen` | `public string CurrentScreen { get; set; }` |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` |

## Key Methods

### Initialize
`public void Initialize(INavigationHandler navigationHandler, IMapStateHandler mapStateHandler, Func<MapBarShortcuts> getMapBarShortcuts, Action openArmyManagement)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of MapBarVM from the subsystem API first
MapBarVM mapBarVM = ...;
mapBarVM.Initialize(navigationHandler, mapStateHandler, getMapBarShortcuts, openArmyManagement);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MapBarVM from the subsystem API first
MapBarVM mapBarVM = ...;
mapBarVM.RefreshValues();
```

### OnRefresh
`public void OnRefresh()`

**Purpose:** Invoked when the `refresh` event is raised.

```csharp
// Obtain an instance of MapBarVM from the subsystem API first
MapBarVM mapBarVM = ...;
mapBarVM.OnRefresh();
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of MapBarVM from the subsystem API first
MapBarVM mapBarVM = ...;
mapBarVM.Tick(0);
```

### ExecuteArmyManagement
`public void ExecuteArmyManagement()`

**Purpose:** Runs the operation or workflow associated with `army management`.

```csharp
// Obtain an instance of MapBarVM from the subsystem API first
MapBarVM mapBarVM = ...;
mapBarVM.ExecuteArmyManagement();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MapBarVM from the subsystem API first
MapBarVM mapBarVM = ...;
mapBarVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapBarVM mapBarVM = ...;
mapBarVM.Initialize(navigationHandler, mapStateHandler, getMapBarShortcuts, openArmyManagement);
```

## See Also

- [Area Index](../)