---
title: "InventoryTradeVM"
description: "Auto-generated class reference for InventoryTradeVM."
---
# InventoryTradeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InventoryTradeVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/InventoryTradeVM.cs`

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

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of InventoryTradeVM from the subsystem API first
InventoryTradeVM inventoryTradeVM = ...;
inventoryTradeVM.RefreshValues();
```

### UpdateItemData
`public void UpdateItemData(ItemRosterElement itemRoster, InventoryLogic.InventorySide side, bool forceUpdate = true)`

**Purpose:** Recalculates and stores the latest representation of `item data`.

```csharp
// Obtain an instance of InventoryTradeVM from the subsystem API first
InventoryTradeVM inventoryTradeVM = ...;
inventoryTradeVM.UpdateItemData(itemRoster, side, false);
```

### GetAveragePrice
`public string GetAveragePrice(int totalPrice, int lastPrice, bool isBuying)`

**Purpose:** Reads and returns the `average price` value held by the current object.

```csharp
// Obtain an instance of InventoryTradeVM from the subsystem API first
InventoryTradeVM inventoryTradeVM = ...;
var result = inventoryTradeVM.GetAveragePrice(0, 0, false);
```

### ExecuteIncreaseThisStock
`public void ExecuteIncreaseThisStock()`

**Purpose:** Runs the operation or workflow associated with `increase this stock`.

```csharp
// Obtain an instance of InventoryTradeVM from the subsystem API first
InventoryTradeVM inventoryTradeVM = ...;
inventoryTradeVM.ExecuteIncreaseThisStock();
```

### ExecuteIncreaseOtherStock
`public void ExecuteIncreaseOtherStock()`

**Purpose:** Runs the operation or workflow associated with `increase other stock`.

```csharp
// Obtain an instance of InventoryTradeVM from the subsystem API first
InventoryTradeVM inventoryTradeVM = ...;
inventoryTradeVM.ExecuteIncreaseOtherStock();
```

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** Runs the operation or workflow associated with `reset`.

```csharp
// Obtain an instance of InventoryTradeVM from the subsystem API first
InventoryTradeVM inventoryTradeVM = ...;
inventoryTradeVM.ExecuteReset();
```

### ExecuteApplyTransaction
`public void ExecuteApplyTransaction()`

**Purpose:** Runs the operation or workflow associated with `apply transaction`.

```csharp
// Obtain an instance of InventoryTradeVM from the subsystem API first
InventoryTradeVM inventoryTradeVM = ...;
inventoryTradeVM.ExecuteApplyTransaction();
```

### ExecuteRemoveZeroCounts
`public void ExecuteRemoveZeroCounts()`

**Purpose:** Runs the operation or workflow associated with `remove zero counts`.

```csharp
// Obtain an instance of InventoryTradeVM from the subsystem API first
InventoryTradeVM inventoryTradeVM = ...;
inventoryTradeVM.ExecuteRemoveZeroCounts();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
InventoryTradeVM inventoryTradeVM = ...;
inventoryTradeVM.RefreshValues();
```

## See Also

- [Area Index](../)