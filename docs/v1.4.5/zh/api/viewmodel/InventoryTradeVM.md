<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryTradeVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# InventoryTradeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InventoryTradeVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Inventory/InventoryTradeVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### UpdateItemData
`public void UpdateItemData(ItemRosterElement itemRoster, InventoryLogic.InventorySide side, bool forceUpdate = true)`

**用途 / Purpose:** 更新 `item data` 的状态或数据。

### GetAveragePrice
`public string GetAveragePrice(int totalPrice, int lastPrice, bool isBuying)`

**用途 / Purpose:** 获取 `average price` 的当前值。

### ExecuteIncreaseThisStock
`public void ExecuteIncreaseThisStock()`

**用途 / Purpose:** 执行 `increase this stock` 操作或流程。

### ExecuteIncreaseOtherStock
`public void ExecuteIncreaseOtherStock()`

**用途 / Purpose:** 执行 `increase other stock` 操作或流程。

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** 执行 `reset` 操作或流程。

### ExecuteApplyTransaction
`public void ExecuteApplyTransaction()`

**用途 / Purpose:** 执行 `apply transaction` 操作或流程。

### ExecuteRemoveZeroCounts
`public void ExecuteRemoveZeroCounts()`

**用途 / Purpose:** 执行 `remove zero counts` 操作或流程。

## 使用示例

```csharp
var value = new InventoryTradeVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)