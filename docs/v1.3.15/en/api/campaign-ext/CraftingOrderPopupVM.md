<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingOrderPopupVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingOrderPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CraftingOrderPopupVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public void RefreshOrders()
```

### SelectOrder

```csharp
public void SelectOrder(CraftingOrderItemVM order)
```

### ExecuteOpenPopup

```csharp
public void ExecuteOpenPopup()
```

### ExecuteCloseWithoutSelection

```csharp
public void ExecuteCloseWithoutSelection()
```

### Compare

```csharp
public int Compare(CraftingOrder x, CraftingOrder y)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)