---
title: "EncyclopediaSettlementPageVM"
description: "Auto-generated class reference for EncyclopediaSettlementPageVM."
---
# EncyclopediaSettlementPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaSettlementPageVM : EncyclopediaContentPageVM`
**Base:** `EncyclopediaContentPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaSettlementPageVM.cs`

## Overview

`EncyclopediaSettlementPageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OwnerBanner` | `public EncyclopediaFactionVM OwnerBanner { get; set; }` |
| `BoundSettlement` | `public EncyclopediaSettlementVM BoundSettlement { get; set; }` |
| `IsFortification` | `public bool IsFortification { get; set; }` |
| `IsTrackerButtonHighlightEnabled` | `public bool IsTrackerButtonHighlightEnabled { get; set; }` |
| `HasBoundSettlement` | `public bool HasBoundSettlement { get; set; }` |
| `SettlementCropPosition` | `public double SettlementCropPosition { get; set; }` |
| `BoundSettlementText` | `public string BoundSettlementText { get; set; }` |
| `TrackText` | `public string TrackText { get; set; }` |
| `SettlementPath` | `public string SettlementPath { get; set; }` |
| `SettlementName` | `public string SettlementName { get; set; }` |
| `InformationText` | `public string InformationText { get; set; }` |
| `Owner` | `public HeroVM Owner { get; set; }` |
| `SettlementsText` | `public string SettlementsText { get; set; }` |
| `SettlementImageID` | `public string SettlementImageID { get; set; }` |
| `NotableCharactersText` | `public string NotableCharactersText { get; set; }` |
| `SettlementType` | `public int SettlementType { get; set; }` |
| `History` | `public MBBindingList<EncyclopediaHistoryEventVM> History { get; set; }` |
| `Settlements` | `public MBBindingList<EncyclopediaSettlementVM> Settlements { get; set; }` |
| `NotableCharacters` | `public MBBindingList<HeroVM> NotableCharacters { get; set; }` |
| `ShowInMapHint` | `public HintViewModel ShowInMapHint { get; set; }` |
| `LeftSideProperties` | `public MBBindingList<EncyclopediaSettlementPageStatItemVM> LeftSideProperties { get; set; }` |
| `RightSideProperties` | `public MBBindingList<EncyclopediaSettlementPageStatItemVM> RightSideProperties { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `CultureText` | `public string CultureText { get; set; }` |
| `OwnerText` | `public string OwnerText { get; set; }` |
| `IsVisualTrackerSelected` | `public bool IsVisualTrackerSelected { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaSettlementPageVM from the subsystem API first
EncyclopediaSettlementPageVM encyclopediaSettlementPageVM = ...;
encyclopediaSettlementPageVM.RefreshValues();
```

### Refresh
`public override void Refresh()`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Obtain an instance of EncyclopediaSettlementPageVM from the subsystem API first
EncyclopediaSettlementPageVM encyclopediaSettlementPageVM = ...;
encyclopediaSettlementPageVM.Refresh();
```

### GetName
`public override string GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of EncyclopediaSettlementPageVM from the subsystem API first
EncyclopediaSettlementPageVM encyclopediaSettlementPageVM = ...;
var result = encyclopediaSettlementPageVM.GetName();
```

### ExecuteTrack
`public void ExecuteTrack()`

**Purpose:** Runs the operation or workflow associated with `track`.

```csharp
// Obtain an instance of EncyclopediaSettlementPageVM from the subsystem API first
EncyclopediaSettlementPageVM encyclopediaSettlementPageVM = ...;
encyclopediaSettlementPageVM.ExecuteTrack();
```

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**Purpose:** Reads and returns the `navigation bar u r l` value held by the current object.

```csharp
// Obtain an instance of EncyclopediaSettlementPageVM from the subsystem API first
EncyclopediaSettlementPageVM encyclopediaSettlementPageVM = ...;
var result = encyclopediaSettlementPageVM.GetNavigationBarURL();
```

### ExecuteBoundSettlementLink
`public void ExecuteBoundSettlementLink()`

**Purpose:** Runs the operation or workflow associated with `bound settlement link`.

```csharp
// Obtain an instance of EncyclopediaSettlementPageVM from the subsystem API first
EncyclopediaSettlementPageVM encyclopediaSettlementPageVM = ...;
encyclopediaSettlementPageVM.ExecuteBoundSettlementLink();
```

### ExecuteSwitchBookmarkedState
`public override void ExecuteSwitchBookmarkedState()`

**Purpose:** Runs the operation or workflow associated with `switch bookmarked state`.

```csharp
// Obtain an instance of EncyclopediaSettlementPageVM from the subsystem API first
EncyclopediaSettlementPageVM encyclopediaSettlementPageVM = ...;
encyclopediaSettlementPageVM.ExecuteSwitchBookmarkedState();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of EncyclopediaSettlementPageVM from the subsystem API first
EncyclopediaSettlementPageVM encyclopediaSettlementPageVM = ...;
encyclopediaSettlementPageVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaSettlementPageVM encyclopediaSettlementPageVM = ...;
encyclopediaSettlementPageVM.RefreshValues();
```

## See Also

- [Area Index](../)