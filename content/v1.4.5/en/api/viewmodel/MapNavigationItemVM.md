---
title: "MapNavigationItemVM"
description: "Auto-generated class reference for MapNavigationItemVM."
---
# MapNavigationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapNavigationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar/MapNavigationItemVM.cs`

## Overview

`MapNavigationItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `HasAlert` | `public bool HasAlert { get; set; }` |
| `ItemId` | `public string ItemId { get; set; }` |
| `AlertText` | `public string AlertText { get; set; }` |
| `Tooltip` | `public BasicTooltipViewModel Tooltip { get; set; }` |
| `AlertTooltip` | `public BasicTooltipViewModel AlertTooltip { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MapNavigationItemVM from the subsystem API first
MapNavigationItemVM mapNavigationItemVM = ...;
mapNavigationItemVM.RefreshValues();
```

### RefreshStates
`public void RefreshStates(bool forceRefresh = false)`

**Purpose:** **Purpose:** Keeps the display or cache of states in sync with the underlying state.

```csharp
// Obtain an instance of MapNavigationItemVM from the subsystem API first
MapNavigationItemVM mapNavigationItemVM = ...;
mapNavigationItemVM.RefreshStates(false);
```

### ExecuteOpen
`public void ExecuteOpen()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with open.

```csharp
// Obtain an instance of MapNavigationItemVM from the subsystem API first
MapNavigationItemVM mapNavigationItemVM = ...;
mapNavigationItemVM.ExecuteOpen();
```

### ExecuteGoToLink
`public void ExecuteGoToLink()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with go to link.

```csharp
// Obtain an instance of MapNavigationItemVM from the subsystem API first
MapNavigationItemVM mapNavigationItemVM = ...;
mapNavigationItemVM.ExecuteGoToLink();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapNavigationItemVM mapNavigationItemVM = ...;
mapNavigationItemVM.RefreshValues();
```

## See Also

- [Area Index](../)