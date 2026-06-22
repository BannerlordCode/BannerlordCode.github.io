<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemMenuVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemMenuVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ItemMenuVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsComparing` | `public bool IsComparing { get; set; }` |
| `IsPlayerItem` | `public bool IsPlayerItem { get; set; }` |
| `ImageIdentifier` | `public ItemImageIdentifierVM ImageIdentifier { get; set; }` |
| `ComparedImageIdentifier` | `public ItemImageIdentifierVM ComparedImageIdentifier { get; set; }` |
| `TransactionTotalCost` | `public int TransactionTotalCost { get; set; }` |
| `IsInitializationOver` | `public bool IsInitializationOver { get; set; }` |
| `ItemName` | `public string ItemName { get; set; }` |
| `ComparedItemName` | `public string ComparedItemName { get; set; }` |
| `IsStealthModeActive` | `public bool IsStealthModeActive { get; set; }` |
| `TargetItemProperties` | `public MBBindingList<ItemMenuTooltipPropertyVM> TargetItemProperties { get; set; }` |
| `ComparedItemProperties` | `public MBBindingList<ItemMenuTooltipPropertyVM> ComparedItemProperties { get; set; }` |
| `TargetItemFlagList` | `public MBBindingList<ItemFlagVM> TargetItemFlagList { get; set; }` |
| `ComparedItemFlagList` | `public MBBindingList<ItemFlagVM> ComparedItemFlagList { get; set; }` |
| `AlternativeUsageIndex` | `public int AlternativeUsageIndex { get; set; }` |
| `AlternativeUsages` | `public MBBindingList<StringItemWithHintVM> AlternativeUsages { get; set; }` |


## Key Methods

### SetItem

```csharp
public void SetItem(SPItemVM item, InventoryLogic.InventorySide currentEquipmentMode, ItemVM comparedItem = null, BasicCharacterObject character = null, int alternativeUsageIndex = 0)
```

### SetTransactionCost

```csharp
public void SetTransactionCost(int getItemTotalPrice, int maxIndividualPrice)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)