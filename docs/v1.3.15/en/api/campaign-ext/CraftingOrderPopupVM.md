<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingOrderPopupVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Refreshes the display or cache of `orders`.

### SelectOrder
`public void SelectOrder(CraftingOrderItemVM order)`

**Purpose:** Handles logic related to `select order`.

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**Purpose:** Executes the `open popup` operation or workflow.

### ExecuteCloseWithoutSelection
`public void ExecuteCloseWithoutSelection()`

**Purpose:** Executes the `close without selection` operation or workflow.

### Compare
`public int Compare(CraftingOrder x, CraftingOrder y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new CraftingOrderPopupVM();
value.RefreshOrders();
```

## See Also

- [Complete Class Catalog](../catalog)