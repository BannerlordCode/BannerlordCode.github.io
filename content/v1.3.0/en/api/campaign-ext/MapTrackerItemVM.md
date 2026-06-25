---
title: "MapTrackerItemVM"
description: "Auto-generated class reference for MapTrackerItemVM."
---
# MapTrackerItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapTrackerItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.2.cs`

## Overview

`MapTrackerItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `CanToggleTrack` | `public bool CanToggleTrack { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `TrackerType` | `public string TrackerType { get; set; }` |
| `PartyPosition` | `public Vec2 PartyPosition { get; set; }` |
| `FactionVisual` | `public BannerImageIdentifierVM FactionVisual { get; set; }` |
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |

## Key Methods

### UpdateProperties
`public void UpdateProperties()`

**Purpose:** Recalculates and stores the latest representation of properties.

```csharp
// Obtain an instance of MapTrackerItemVM from the subsystem API first
MapTrackerItemVM mapTrackerItemVM = ...;
mapTrackerItemVM.UpdateProperties();
```

### UpdatePosition
`public void UpdatePosition(float screenX, float screenY, float screenW)`

**Purpose:** Recalculates and stores the latest representation of position.

```csharp
// Obtain an instance of MapTrackerItemVM from the subsystem API first
MapTrackerItemVM mapTrackerItemVM = ...;
mapTrackerItemVM.UpdatePosition(0, 0, 0);
```

### ExecuteToggleTrack
`public void ExecuteToggleTrack()`

**Purpose:** Runs the operation or workflow associated with toggle track.

```csharp
// Obtain an instance of MapTrackerItemVM from the subsystem API first
MapTrackerItemVM mapTrackerItemVM = ...;
mapTrackerItemVM.ExecuteToggleTrack();
```

### ExecuteGoToPosition
`public void ExecuteGoToPosition()`

**Purpose:** Runs the operation or workflow associated with go to position.

```csharp
// Obtain an instance of MapTrackerItemVM from the subsystem API first
MapTrackerItemVM mapTrackerItemVM = ...;
mapTrackerItemVM.ExecuteGoToPosition();
```

### ExecuteShowTooltip
`public void ExecuteShowTooltip()`

**Purpose:** Runs the operation or workflow associated with show tooltip.

```csharp
// Obtain an instance of MapTrackerItemVM from the subsystem API first
MapTrackerItemVM mapTrackerItemVM = ...;
mapTrackerItemVM.ExecuteShowTooltip();
```

### ExecuteHideTooltip
`public void ExecuteHideTooltip()`

**Purpose:** Runs the operation or workflow associated with hide tooltip.

```csharp
// Obtain an instance of MapTrackerItemVM from the subsystem API first
MapTrackerItemVM mapTrackerItemVM = ...;
mapTrackerItemVM.ExecuteHideTooltip();
```

### RefreshBinding
`public void RefreshBinding()`

**Purpose:** Keeps the display or cache of binding in sync with the underlying state.

```csharp
// Obtain an instance of MapTrackerItemVM from the subsystem API first
MapTrackerItemVM mapTrackerItemVM = ...;
mapTrackerItemVM.RefreshBinding();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MapTrackerItemVM instance = ...;
```

## See Also

- [Area Index](../)