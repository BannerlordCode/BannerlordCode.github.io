<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryTradeVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InventoryTradeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InventoryTradeVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Inventory/InventoryTradeVM.cs`

## Overview

`InventoryTradeVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
| `TakeHint` | `public HintViewModel TakeHint { get; set; }` |
| `GiveHint` | `public HintViewModel GiveHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### UpdateItemData
`public void UpdateItemData(ItemRosterElement itemRoster, InventoryLogic.InventorySide side, bool forceUpdate = true)`

**Purpose:** Updates the state or data of `item data`.

### GetAveragePrice
`public string GetAveragePrice(int totalPrice, int lastPrice, bool isBuying)`

**Purpose:** Gets the current value of `average price`.

### ExecuteIncreaseThisStock
`public void ExecuteIncreaseThisStock()`

**Purpose:** Executes the `increase this stock` operation or workflow.

### ExecuteIncreaseOtherStock
`public void ExecuteIncreaseOtherStock()`

**Purpose:** Executes the `increase other stock` operation or workflow.

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** Executes the `reset` operation or workflow.

### ExecuteApplyTransaction
`public void ExecuteApplyTransaction()`

**Purpose:** Executes the `apply transaction` operation or workflow.

### ExecuteRemoveZeroCounts
`public void ExecuteRemoveZeroCounts()`

**Purpose:** Executes the `remove zero counts` operation or workflow.

## Usage Example

```csharp
var value = new InventoryTradeVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)