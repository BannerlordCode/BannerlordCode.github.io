---
title: "TownManagementVillageItemVM"
description: "Auto-generated class reference for TownManagementVillageItemVM."
---
# TownManagementVillageItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TownManagementVillageItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement/TownManagementVillageItemVM.cs`

## Overview

`TownManagementVillageItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `ProductionName` | `public string ProductionName { get; set; }` |
| `Background` | `public string Background { get; set; }` |
| `VillageType` | `public int VillageType { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of TownManagementVillageItemVM from the subsystem API first
TownManagementVillageItemVM townManagementVillageItemVM = ...;
townManagementVillageItemVM.RefreshValues();
```

### ExecuteShowTooltip
`public void ExecuteShowTooltip()`

**Purpose:** Runs the operation or workflow associated with `show tooltip`.

```csharp
// Obtain an instance of TownManagementVillageItemVM from the subsystem API first
TownManagementVillageItemVM townManagementVillageItemVM = ...;
townManagementVillageItemVM.ExecuteShowTooltip();
```

### ExecuteHideTooltip
`public void ExecuteHideTooltip()`

**Purpose:** Runs the operation or workflow associated with `hide tooltip`.

```csharp
// Obtain an instance of TownManagementVillageItemVM from the subsystem API first
TownManagementVillageItemVM townManagementVillageItemVM = ...;
townManagementVillageItemVM.ExecuteHideTooltip();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TownManagementVillageItemVM townManagementVillageItemVM = ...;
townManagementVillageItemVM.RefreshValues();
```

## See Also

- [Area Index](../)