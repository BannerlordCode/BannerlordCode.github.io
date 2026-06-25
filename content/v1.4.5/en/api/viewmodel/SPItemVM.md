---
title: "SPItemVM"
description: "Auto-generated class reference for SPItemVM."
---
# SPItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SPItemVM : ItemVM`
**Base:** `ItemVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Inventory/SPItemVM.cs`

## Overview

`SPItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of SPItemVM from the subsystem API first
SPItemVM sPItemVM = ...;
sPItemVM.RefreshValues();
```

### RefreshWith
`public void RefreshWith(SPItemVM itemVM, InventoryLogic.InventorySide inventorySide)`

**Purpose:** Keeps the display or cache of with in sync with the underlying state.

```csharp
// Obtain an instance of SPItemVM from the subsystem API first
SPItemVM sPItemVM = ...;
sPItemVM.RefreshWith(itemVM, inventorySide);
```

### ExecuteBuySingle
`public void ExecuteBuySingle()`

**Purpose:** Runs the operation or workflow associated with buy single.

```csharp
// Obtain an instance of SPItemVM from the subsystem API first
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteBuySingle();
```

### ExecuteBuy
`public void ExecuteBuy(int amount)`

**Purpose:** Runs the operation or workflow associated with buy.

```csharp
// Obtain an instance of SPItemVM from the subsystem API first
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteBuy(0);
```

### ExecuteSellSingle
`public void ExecuteSellSingle()`

**Purpose:** Runs the operation or workflow associated with sell single.

```csharp
// Obtain an instance of SPItemVM from the subsystem API first
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteSellSingle();
```

### ExecuteSell
`public void ExecuteSell(int amount)`

**Purpose:** Runs the operation or workflow associated with sell.

```csharp
// Obtain an instance of SPItemVM from the subsystem API first
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteSell(0);
```

### ExecuteSellItem
`public void ExecuteSellItem()`

**Purpose:** Runs the operation or workflow associated with sell item.

```csharp
// Obtain an instance of SPItemVM from the subsystem API first
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteSellItem();
```

### ExecuteConcept
`public void ExecuteConcept()`

**Purpose:** Runs the operation or workflow associated with concept.

```csharp
// Obtain an instance of SPItemVM from the subsystem API first
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteConcept();
```

### ExecuteResetTrade
`public void ExecuteResetTrade()`

**Purpose:** Runs the operation or workflow associated with reset trade.

```csharp
// Obtain an instance of SPItemVM from the subsystem API first
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteResetTrade();
```

### UpdateTradeData
`public void UpdateTradeData(bool forceUpdateAmounts)`

**Purpose:** Recalculates and stores the latest representation of trade data.

```csharp
// Obtain an instance of SPItemVM from the subsystem API first
SPItemVM sPItemVM = ...;
sPItemVM.UpdateTradeData(false);
```

### ExecuteSlaughterItem
`public void ExecuteSlaughterItem()`

**Purpose:** Runs the operation or workflow associated with slaughter item.

```csharp
// Obtain an instance of SPItemVM from the subsystem API first
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteSlaughterItem();
```

### ExecuteDonateItem
`public void ExecuteDonateItem()`

**Purpose:** Runs the operation or workflow associated with donate item.

```csharp
// Obtain an instance of SPItemVM from the subsystem API first
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteDonateItem();
```

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**Purpose:** Runs the operation or workflow associated with set focused.

```csharp
// Obtain an instance of SPItemVM from the subsystem API first
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteSetFocused();
```

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**Purpose:** Runs the operation or workflow associated with set unfocused.

```csharp
// Obtain an instance of SPItemVM from the subsystem API first
SPItemVM sPItemVM = ...;
sPItemVM.ExecuteSetUnfocused();
```

### UpdateCanBeSlaughtered
`public void UpdateCanBeSlaughtered()`

**Purpose:** Recalculates and stores the latest representation of can be slaughtered.

```csharp
// Obtain an instance of SPItemVM from the subsystem API first
SPItemVM sPItemVM = ...;
sPItemVM.UpdateCanBeSlaughtered();
```

### UpdateHintTexts
`public void UpdateHintTexts()`

**Purpose:** Recalculates and stores the latest representation of hint texts.

```csharp
// Obtain an instance of SPItemVM from the subsystem API first
SPItemVM sPItemVM = ...;
sPItemVM.UpdateHintTexts();
```

### GetProfitTypeFromDiff
`public static ProfitTypes GetProfitTypeFromDiff(float averageValue, float currentValue)`

**Purpose:** Reads and returns the profit type from diff value held by the this instance.

```csharp
// Static call; no instance required
SPItemVM.GetProfitTypeFromDiff(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SPItemVM sPItemVM = ...;
sPItemVM.RefreshValues();
```

## See Also

- [Area Index](../)