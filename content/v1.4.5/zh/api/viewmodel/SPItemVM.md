---
title: "SPItemVM"
description: "SPItemVM 的自动生成类参考。"
---
# SPItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SPItemVM : ItemVM`
**Base:** `ItemVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Inventory/SPItemVM.cs`

## 概述

`SPItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `InventorySide` | `public InventoryLogic.InventorySide InventorySide { get; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsArtifact` | `public bool IsArtifact { get; set; }` |
| `IsTransferable` | `public bool IsTransferable { get; set; }` |
| `IsTransferButtonHighlighted` | `public bool IsTransferButtonHighlighted { get; set; }` |
| `IsItemHighlightEnabled` | `public bool IsItemHighlightEnabled { get; set; }` |
| `IsCivilianItem` | `public bool IsCivilianItem { get; set; }` |
| `IsStealthItem` | `public bool IsStealthItem { get; set; }` |
| `IsNew` | `public bool IsNew { get; set; }` |
| `IsGenderDifferent` | `public bool IsGenderDifferent { get; set; }` |
| `CanBeSlaughtered` | `public bool CanBeSlaughtered { get; set; }` |
| `CanBeDonated` | `public bool CanBeDonated { get; set; }` |
| `IsEquipableItem` | `public bool IsEquipableItem { get; set; }` |
| `CanCharacterUseItem` | `public bool CanCharacterUseItem { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `ItemCount` | `public int ItemCount { get; set; }` |
| `ItemLevel` | `public int ItemLevel { get; set; }` |
| `ProfitType` | `public int ProfitType { get; set; }` |
| `TransactionCount` | `public int TransactionCount { get; set; }` |
| `TotalCost` | `public int TotalCost { get; set; }` |
| `TradeData` | `public InventoryTradeVM TradeData { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SPItemVM 实例
SPItemVM sPItemVM = ...;
sPItemVM.RefreshValues();
```

### RefreshWith
`public void RefreshWith(SPItemVM itemVM, InventoryLogic.InventorySide inventorySide)`

**用途 / Purpose:** **用途 / Purpose:** 使 with 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SPItemVM 实例
SPItemVM sPItemVM = ...;
sPItemVM.RefreshWith(itemVM, inventorySide);
```

### ExecuteBuySingle
`public void ExecuteBuySingle()`

**用途 / Purpose:** **用途 / Purpose:** 执行 buy single 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPItemVM 实例
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteBuySingle();
```

### ExecuteBuy
`public void ExecuteBuy(int amount)`

**用途 / Purpose:** **用途 / Purpose:** 执行 buy 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPItemVM 实例
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteBuy(0);
```

### ExecuteSellSingle
`public void ExecuteSellSingle()`

**用途 / Purpose:** **用途 / Purpose:** 执行 sell single 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPItemVM 实例
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteSellSingle();
```

### ExecuteSell
`public void ExecuteSell(int amount)`

**用途 / Purpose:** **用途 / Purpose:** 执行 sell 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPItemVM 实例
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteSell(0);
```

### ExecuteSellItem
`public void ExecuteSellItem()`

**用途 / Purpose:** **用途 / Purpose:** 执行 sell item 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPItemVM 实例
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteSellItem();
```

### ExecuteConcept
`public void ExecuteConcept()`

**用途 / Purpose:** **用途 / Purpose:** 执行 concept 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPItemVM 实例
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteConcept();
```

### ExecuteResetTrade
`public void ExecuteResetTrade()`

**用途 / Purpose:** **用途 / Purpose:** 执行 reset trade 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPItemVM 实例
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteResetTrade();
```

### UpdateTradeData
`public void UpdateTradeData(bool forceUpdateAmounts)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 trade data 的最新表示。

```csharp
// 先通过子系统 API 拿到 SPItemVM 实例
SPItemVM sPItemVM = ...;
sPItemVM.UpdateTradeData(false);
```

### ExecuteSlaughterItem
`public void ExecuteSlaughterItem()`

**用途 / Purpose:** **用途 / Purpose:** 执行 slaughter item 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPItemVM 实例
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteSlaughterItem();
```

### ExecuteDonateItem
`public void ExecuteDonateItem()`

**用途 / Purpose:** **用途 / Purpose:** 执行 donate item 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPItemVM 实例
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteDonateItem();
```

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**用途 / Purpose:** **用途 / Purpose:** 执行 set focused 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPItemVM 实例
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteSetFocused();
```

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**用途 / Purpose:** **用途 / Purpose:** 执行 set unfocused 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPItemVM 实例
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteSetUnfocused();
```

### UpdateCanBeSlaughtered
`public void UpdateCanBeSlaughtered()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 can be slaughtered 的最新表示。

```csharp
// 先通过子系统 API 拿到 SPItemVM 实例
SPItemVM sPItemVM = ...;
sPItemVM.UpdateCanBeSlaughtered();
```

### UpdateHintTexts
`public void UpdateHintTexts()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 hint texts 的最新表示。

```csharp
// 先通过子系统 API 拿到 SPItemVM 实例
SPItemVM sPItemVM = ...;
sPItemVM.UpdateHintTexts();
```

### GetProfitTypeFromDiff
`public static ProfitTypes GetProfitTypeFromDiff(float averageValue, float currentValue)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 profit type from diff 的结果。

```csharp
// 静态调用，不需要实例
SPItemVM.GetProfitTypeFromDiff(0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SPItemVM sPItemVM = ...;
sPItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)