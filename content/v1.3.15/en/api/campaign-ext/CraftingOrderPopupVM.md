---
title: "CraftingOrderPopupVM"
description: "Auto-generated class reference for CraftingOrderPopupVM."
---
# CraftingOrderPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingOrderPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderPopupVM.cs`

## Overview

`CraftingOrderPopupVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasOrders` | `public bool HasOrders { get; }` |
| `HasEnabledOrders` | `public bool HasEnabledOrders { get; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `QuestType` | `public int QuestType { get; set; }` |
| `OrderCountText` | `public string OrderCountText { get; set; }` |
| `SelectedCraftingOrder` | `public CraftingOrderItemVM SelectedCraftingOrder { get; set; }` |
| `CraftingOrders` | `public MBBindingList<CraftingOrderItemVM> CraftingOrders { get; set; }` |

## Key Methods

### RefreshOrders
`public void RefreshOrders()`

**Purpose:** **Purpose:** Keeps the display or cache of orders in sync with the underlying state.

```csharp
// Obtain an instance of CraftingOrderPopupVM from the subsystem API first
CraftingOrderPopupVM craftingOrderPopupVM = ...;
craftingOrderPopupVM.RefreshOrders();
```

### SelectOrder
`public void SelectOrder(CraftingOrderItemVM order)`

**Purpose:** **Purpose:** Executes the SelectOrder logic.

```csharp
// Obtain an instance of CraftingOrderPopupVM from the subsystem API first
CraftingOrderPopupVM craftingOrderPopupVM = ...;
craftingOrderPopupVM.SelectOrder(order);
```

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with open popup.

```csharp
// Obtain an instance of CraftingOrderPopupVM from the subsystem API first
CraftingOrderPopupVM craftingOrderPopupVM = ...;
craftingOrderPopupVM.ExecuteOpenPopup();
```

### ExecuteCloseWithoutSelection
`public void ExecuteCloseWithoutSelection()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close without selection.

```csharp
// Obtain an instance of CraftingOrderPopupVM from the subsystem API first
CraftingOrderPopupVM craftingOrderPopupVM = ...;
craftingOrderPopupVM.ExecuteCloseWithoutSelection();
```

### Compare
`public int Compare(CraftingOrder x, CraftingOrder y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of CraftingOrderPopupVM from the subsystem API first
CraftingOrderPopupVM craftingOrderPopupVM = ...;
var result = craftingOrderPopupVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CraftingOrderPopupVM craftingOrderPopupVM = ...;
craftingOrderPopupVM.RefreshOrders();
```

## See Also

- [Area Index](../)