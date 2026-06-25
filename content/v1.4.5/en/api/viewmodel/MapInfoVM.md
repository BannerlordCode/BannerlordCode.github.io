---
title: "MapInfoVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapInfoVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapInfoVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapInfoVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar/MapInfoVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### Tick
`public void Tick()`

**Purpose:** Handles logic related to `tick`.

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

## Usage Example

```csharp
var value = new MapInfoVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)