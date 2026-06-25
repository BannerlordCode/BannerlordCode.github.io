---
title: "ItemMenuVM"
description: "ItemMenuVM 的自动生成类参考。"
---
# ItemMenuVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemMenuVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Inventory/ItemMenuVM.cs`

## 概述

`ItemMenuVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public void SetItem(SPItemVM item, InventoryLogic.InventorySide currentEquipmentMode, ItemVM comparedItem = null, BasicCharacterObject character = null, int alternativeUsageIndex = 0)`

**用途 / Purpose:** **用途 / Purpose:** 为 item 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ItemMenuVM 实例
ItemMenuVM itemMenuVM = ...;
itemMenuVM.SetItem(item, currentEquipmentMode, null, null, 0);
```

### SetTransactionCost
`public void SetTransactionCost(int getItemTotalPrice, int maxIndividualPrice)`

**用途 / Purpose:** **用途 / Purpose:** 为 transaction cost 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ItemMenuVM 实例
ItemMenuVM itemMenuVM = ...;
itemMenuVM.SetTransactionCost(0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ItemMenuVM itemMenuVM = ...;
itemMenuVM.SetItem(item, currentEquipmentMode, null, null, 0);
```

## 参见

- [本区域目录](../)