<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemMenuVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemMenuVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ItemMenuVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

### SetItem

```csharp
public void SetItem(SPItemVM item, InventoryLogic.InventorySide currentEquipmentMode, ItemVM comparedItem = null, BasicCharacterObject character = null, int alternativeUsageIndex = 0)
```

### SetTransactionCost

```csharp
public void SetTransactionCost(int getItemTotalPrice, int maxIndividualPrice)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)