<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryTradeVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryTradeVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`InventoryTradeVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### UpdateItemData

```csharp
public void UpdateItemData(ItemRosterElement itemRoster, InventoryLogic.InventorySide side, bool forceUpdate = true)
```

### GetAveragePrice

```csharp
public string GetAveragePrice(int totalPrice, int lastPrice, bool isBuying)
```

### ExecuteIncreaseThisStock

```csharp
public void ExecuteIncreaseThisStock()
```

### ExecuteIncreaseOtherStock

```csharp
public void ExecuteIncreaseOtherStock()
```

### ExecuteReset

```csharp
public void ExecuteReset()
```

### ExecuteApplyTransaction

```csharp
public void ExecuteApplyTransaction()
```

### ExecuteRemoveZeroCounts

```csharp
public void ExecuteRemoveZeroCounts()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)