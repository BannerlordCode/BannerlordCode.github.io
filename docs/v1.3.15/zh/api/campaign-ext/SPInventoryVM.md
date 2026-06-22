<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SPInventoryVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPInventoryVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SPInventoryVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)