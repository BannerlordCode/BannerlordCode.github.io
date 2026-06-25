---
title: "MapTrackerItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapTrackerItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapTrackerItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapTrackerItemVM<T> : MapTrackerItemVM where T : ITrackableCampaignObject`
**Base:** `MapTrackerItemVM where T : ITrackableCampaignObject`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker/MapTrackerItemVM.cs`

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

**Purpose:** Updates the state or data of `properties`.

### UpdatePosition
`public void UpdatePosition(float screenX, float screenY, float screenW)`

**Purpose:** Updates the state or data of `position`.

### ExecuteToggleTrack
`public void ExecuteToggleTrack()`

**Purpose:** Executes the `toggle track` operation or workflow.

### ExecuteGoToPosition
`public void ExecuteGoToPosition()`

**Purpose:** Executes the `go to position` operation or workflow.

### ExecuteShowTooltip
`public void ExecuteShowTooltip()`

**Purpose:** Executes the `show tooltip` operation or workflow.

### ExecuteHideTooltip
`public void ExecuteHideTooltip()`

**Purpose:** Executes the `hide tooltip` operation or workflow.

### RefreshBinding
`public void RefreshBinding()`

**Purpose:** Refreshes the display or cache of `binding`.

## Usage Example

```csharp
var implementation = new CustomMapTrackerItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)