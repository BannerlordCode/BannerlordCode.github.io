---
title: "MapInfoVM"
description: "Auto-generated class reference for MapInfoVM."
---
# MapInfoVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapInfoVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoVM.cs`

## Overview

`MapInfoVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInfoBarExtended` | `public bool IsInfoBarExtended { get; set; }` |
| `IsInfoBarEnabled` | `public bool IsInfoBarEnabled { get; set; }` |
| `ExtendHint` | `public HintViewModel ExtendHint { get; set; }` |
| `PrimaryInfoItems` | `public MBBindingList<MapInfoItemVM> PrimaryInfoItems { get; set; }` |
| `SecondaryInfoItems` | `public MBBindingList<MapInfoItemVM> SecondaryInfoItems { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MapInfoVM from the subsystem API first
MapInfoVM mapInfoVM = ...;
mapInfoVM.RefreshValues();
```

### Tick
`public void Tick()`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MapInfoVM from the subsystem API first
MapInfoVM mapInfoVM = ...;
mapInfoVM.Tick();
```

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of MapInfoVM from the subsystem API first
MapInfoVM mapInfoVM = ...;
mapInfoVM.Refresh();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapInfoVM mapInfoVM = ...;
mapInfoVM.RefreshValues();
```

## See Also

- [Area Index](../)