---
title: "TownManagementDescriptionItemVM"
description: "Auto-generated class reference for TownManagementDescriptionItemVM."
---
# TownManagementDescriptionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TownManagementDescriptionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement/TownManagementDescriptionItemVM.cs`

## Overview

`TownManagementDescriptionItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public int Type { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `Value` | `public int Value { get; set; }` |
| `ValueChange` | `public int ValueChange { get; set; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |
| `IsWarning` | `public bool IsWarning { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of TownManagementDescriptionItemVM from the subsystem API first
TownManagementDescriptionItemVM townManagementDescriptionItemVM = ...;
townManagementDescriptionItemVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TownManagementDescriptionItemVM townManagementDescriptionItemVM = ...;
townManagementDescriptionItemVM.RefreshValues();
```

## See Also

- [Area Index](../)