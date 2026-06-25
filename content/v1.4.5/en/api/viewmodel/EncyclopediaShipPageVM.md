---
title: "EncyclopediaShipPageVM"
description: "Auto-generated class reference for EncyclopediaShipPageVM."
---
# EncyclopediaShipPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaShipPageVM : EncyclopediaContentPageVM`
**Base:** `EncyclopediaContentPageVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaShipPageVM.cs`

## Overview

`EncyclopediaShipPageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameText` | `public string NameText { get; set; }` |
| `AvailableUpgradesText` | `public string AvailableUpgradesText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `PrefabId` | `public string PrefabId { get; set; }` |
| `StatsText` | `public string StatsText { get; set; }` |
| `SailType` | `public string SailType { get; set; }` |
| `SailTypeStat` | `public EncyclopediaShipStatVM SailTypeStat { get; set; }` |
| `StatList` | `public MBBindingList<EncyclopediaShipStatVM> StatList { get; set; }` |
| `AllShipSlots` | `public MBBindingList<EncyclopediaShipSlotVM> AllShipSlots { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaShipPageVM from the subsystem API first
EncyclopediaShipPageVM encyclopediaShipPageVM = ...;
encyclopediaShipPageVM.RefreshValues();
```

### GetName
`public override string GetName()`

**Purpose:** **Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaShipPageVM from the subsystem API first
EncyclopediaShipPageVM encyclopediaShipPageVM = ...;
var result = encyclopediaShipPageVM.GetName();
```

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**Purpose:** **Purpose:** Reads and returns the navigation bar u r l value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaShipPageVM from the subsystem API first
EncyclopediaShipPageVM encyclopediaShipPageVM = ...;
var result = encyclopediaShipPageVM.GetNavigationBarURL();
```

### ExecuteLink
`public void ExecuteLink(string link)`

**Purpose:** **Purpose:** Runs the operation or workflow associated with link.

```csharp
// Obtain an instance of EncyclopediaShipPageVM from the subsystem API first
EncyclopediaShipPageVM encyclopediaShipPageVM = ...;
encyclopediaShipPageVM.ExecuteLink("example");
```

### ExecuteSwitchBookmarkedState
`public override void ExecuteSwitchBookmarkedState()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with switch bookmarked state.

```csharp
// Obtain an instance of EncyclopediaShipPageVM from the subsystem API first
EncyclopediaShipPageVM encyclopediaShipPageVM = ...;
encyclopediaShipPageVM.ExecuteSwitchBookmarkedState();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaShipPageVM encyclopediaShipPageVM = ...;
encyclopediaShipPageVM.RefreshValues();
```

## See Also

- [Area Index](../)