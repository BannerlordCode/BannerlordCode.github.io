---
title: "TownManagementShopItemVM"
description: "Auto-generated class reference for TownManagementShopItemVM."
---
# TownManagementShopItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TownManagementShopItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementShopItemVM.cs`

## Overview

`TownManagementShopItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEmpty` | `public bool IsEmpty { get; set; }` |
| `ShopName` | `public string ShopName { get; set; }` |
| `ShopId` | `public string ShopId { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of TownManagementShopItemVM from the subsystem API first
TownManagementShopItemVM townManagementShopItemVM = ...;
townManagementShopItemVM.RefreshValues();
```

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**Purpose:** Runs the operation or workflow associated with `begin hint`.

```csharp
// Obtain an instance of TownManagementShopItemVM from the subsystem API first
TownManagementShopItemVM townManagementShopItemVM = ...;
townManagementShopItemVM.ExecuteBeginHint();
```

### ExecuteEndHint
`public void ExecuteEndHint()`

**Purpose:** Runs the operation or workflow associated with `end hint`.

```csharp
// Obtain an instance of TownManagementShopItemVM from the subsystem API first
TownManagementShopItemVM townManagementShopItemVM = ...;
townManagementShopItemVM.ExecuteEndHint();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TownManagementShopItemVM townManagementShopItemVM = ...;
townManagementShopItemVM.RefreshValues();
```

## See Also

- [Area Index](../)