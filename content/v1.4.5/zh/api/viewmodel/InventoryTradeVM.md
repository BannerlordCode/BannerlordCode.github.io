---
title: "InventoryTradeVM"
description: "InventoryTradeVM 的自动生成类参考。"
---
# InventoryTradeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InventoryTradeVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Inventory/InventoryTradeVM.cs`

## 概述

`InventoryTradeVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ThisStockLbl` | `public string ThisStockLbl { get; set; }` |
| `OtherStockLbl` | `public string OtherStockLbl { get; set; }` |
| `PieceLbl` | `public string PieceLbl { get; set; }` |
| `AveragePriceLbl` | `public string AveragePriceLbl { get; set; }` |
| `ApplyExchangeHint` | `public HintViewModel ApplyExchangeHint { get; set; }` |
| `IsExchangeAvailable` | `public bool IsExchangeAvailable { get; set; }` |
| `PriceChange` | `public string PriceChange { get; set; }` |
| `PieceChange` | `public string PieceChange { get; set; }` |
| `AveragePrice` | `public string AveragePrice { get; set; }` |
| `ThisStock` | `public int ThisStock { get; set; }` |
| `InitialThisStock` | `public int InitialThisStock { get; set; }` |
| `OtherStock` | `public int OtherStock { get; set; }` |
| `InitialOtherStock` | `public int InitialOtherStock { get; set; }` |
| `TotalStock` | `public int TotalStock { get; set; }` |
| `IsThisStockIncreasable` | `public bool IsThisStockIncreasable { get; set; }` |
| `IsOtherStockIncreasable` | `public bool IsOtherStockIncreasable { get; set; }` |
| `IsTrading` | `public bool IsTrading { get; set; }` |
| `IsTradeable` | `public bool IsTradeable { get; set; }` |
| `TakeHint` | `public HintViewModel TakeHint { get; set; }` |
| `GiveHint` | `public HintViewModel GiveHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 InventoryTradeVM 实例
InventoryTradeVM inventoryTradeVM = ...;
inventoryTradeVM.RefreshValues();
```

### UpdateItemData
`public void UpdateItemData(ItemRosterElement itemRoster, InventoryLogic.InventorySide side, bool forceUpdate = true)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 item data 的最新表示。

```csharp
// 先通过子系统 API 拿到 InventoryTradeVM 实例
InventoryTradeVM inventoryTradeVM = ...;
inventoryTradeVM.UpdateItemData(itemRoster, side, false);
```

### GetAveragePrice
`public string GetAveragePrice(int totalPrice, int lastPrice, bool isBuying)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 average price 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryTradeVM 实例
InventoryTradeVM inventoryTradeVM = ...;
var result = inventoryTradeVM.GetAveragePrice(0, 0, false);
```

### ExecuteIncreaseThisStock
`public void ExecuteIncreaseThisStock()`

**用途 / Purpose:** **用途 / Purpose:** 执行 increase this stock 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 InventoryTradeVM 实例
InventoryTradeVM inventoryTradeVM = ...;
inventoryTradeVM.ExecuteIncreaseThisStock();
```

### ExecuteIncreaseOtherStock
`public void ExecuteIncreaseOtherStock()`

**用途 / Purpose:** **用途 / Purpose:** 执行 increase other stock 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 InventoryTradeVM 实例
InventoryTradeVM inventoryTradeVM = ...;
inventoryTradeVM.ExecuteIncreaseOtherStock();
```

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** **用途 / Purpose:** 执行 reset 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 InventoryTradeVM 实例
InventoryTradeVM inventoryTradeVM = ...;
inventoryTradeVM.ExecuteReset();
```

### ExecuteApplyTransaction
`public void ExecuteApplyTransaction()`

**用途 / Purpose:** **用途 / Purpose:** 执行 apply transaction 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 InventoryTradeVM 实例
InventoryTradeVM inventoryTradeVM = ...;
inventoryTradeVM.ExecuteApplyTransaction();
```

### ExecuteRemoveZeroCounts
`public void ExecuteRemoveZeroCounts()`

**用途 / Purpose:** **用途 / Purpose:** 执行 remove zero counts 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 InventoryTradeVM 实例
InventoryTradeVM inventoryTradeVM = ...;
inventoryTradeVM.ExecuteRemoveZeroCounts();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
InventoryTradeVM inventoryTradeVM = ...;
inventoryTradeVM.RefreshValues();
```

## 参见

- [本区域目录](../)