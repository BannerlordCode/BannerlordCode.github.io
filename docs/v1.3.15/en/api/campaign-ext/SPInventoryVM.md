<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SPInventoryVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPInventoryVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `SPInventoryVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ResetHint` | `public HintViewModel ResetHint { get; set; }` |
| `LeftInventoryLabel` | `public string LeftInventoryLabel { get; set; }` |
| `RightInventoryLabel` | `public string RightInventoryLabel { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `IsDoneDisabled` | `public bool IsDoneDisabled { get; set; }` |
| `OtherSideHasCapacity` | `public bool OtherSideHasCapacity { get; set; }` |
| `IsSearchAvailable` | `public bool IsSearchAvailable { get; set; }` |
| `IsOtherInventoryGoldRelevant` | `public bool IsOtherInventoryGoldRelevant { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |
| `ResetLbl` | `public string ResetLbl { get; set; }` |
| `TypeText` | `public string TypeText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `QuantityText` | `public string QuantityText { get; set; }` |
| `CostText` | `public string CostText { get; set; }` |
| `SearchPlaceholderText` | `public string SearchPlaceholderText { get; set; }` |
| `ProductionTooltip` | `public BasicTooltipViewModel ProductionTooltip { get; set; }` |
| `InventoryCapacityHint` | `public BasicTooltipViewModel InventoryCapacityHint { get; set; }` |
| `LandCapacityHint` | `public BasicTooltipViewModel LandCapacityHint { get; set; }` |
| `SeaCapacityHint` | `public BasicTooltipViewModel SeaCapacityHint { get; set; }` |
| `TotalWeightCarriedHint` | `public BasicTooltipViewModel TotalWeightCarriedHint { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### RefreshCallbacks

```csharp
public void RefreshCallbacks()
```

### ExecuteShowRecap

```csharp
public void ExecuteShowRecap()
```

### ExecuteCancelRecap

```csharp
public void ExecuteCancelRecap()
```

### ExecuteRemoveZeroCounts

```csharp
public void ExecuteRemoveZeroCounts()
```

### ClosePreview

```csharp
public void ClosePreview()
```

### ProcessItemTooltip

```csharp
public void ProcessItemTooltip(ItemVM item)
```

### ResetSelectedItem

```csharp
public void ResetSelectedItem()
```

### RefreshComparedItem

```csharp
public void RefreshComparedItem()
```

### IsItemEquipmentPossible

```csharp
public bool IsItemEquipmentPossible(SPItemVM itemVM)
```

### CompareNextItem

```csharp
public void CompareNextItem()
```

### ExecuteSelectItem

```csharp
public void ExecuteSelectItem(ItemVM item)
```

### ExecuteClearSelectedItem

```csharp
public void ExecuteClearSelectedItem()
```

### IsAnyEquippedItemSelected

```csharp
public bool IsAnyEquippedItemSelected()
```

### ExecuteSelectStealthOutfit

```csharp
public void ExecuteSelectStealthOutfit()
```

### ExecuteSelectBattleOutfit

```csharp
public void ExecuteSelectBattleOutfit()
```

### ExecuteSelectCivilianOutfit

```csharp
public void ExecuteSelectCivilianOutfit()
```

### ExecuteBuyAllItems

```csharp
public void ExecuteBuyAllItems()
```

### ExecuteSellAllItems

```csharp
public void ExecuteSellAllItems()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)