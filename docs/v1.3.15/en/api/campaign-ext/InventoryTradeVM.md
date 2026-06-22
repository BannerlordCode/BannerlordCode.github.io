<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryTradeVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryTradeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `InventoryTradeVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)