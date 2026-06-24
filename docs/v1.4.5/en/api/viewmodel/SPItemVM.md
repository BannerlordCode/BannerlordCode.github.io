<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SPItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SPItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SPItemVM : ItemVM`
**Base:** `ItemVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Inventory/SPItemVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### RefreshWith
`public void RefreshWith(SPItemVM itemVM, InventoryLogic.InventorySide inventorySide)`

**Purpose:** Refreshes the display or cache of `with`.

### ExecuteBuySingle
`public void ExecuteBuySingle()`

**Purpose:** Executes the `buy single` operation or workflow.

### ExecuteBuy
`public void ExecuteBuy(int amount)`

**Purpose:** Executes the `buy` operation or workflow.

### ExecuteSellSingle
`public void ExecuteSellSingle()`

**Purpose:** Executes the `sell single` operation or workflow.

### ExecuteSell
`public void ExecuteSell(int amount)`

**Purpose:** Executes the `sell` operation or workflow.

### ExecuteSellItem
`public void ExecuteSellItem()`

**Purpose:** Executes the `sell item` operation or workflow.

### ExecuteConcept
`public void ExecuteConcept()`

**Purpose:** Executes the `concept` operation or workflow.

### ExecuteResetTrade
`public void ExecuteResetTrade()`

**Purpose:** Executes the `reset trade` operation or workflow.

### UpdateTradeData
`public void UpdateTradeData(bool forceUpdateAmounts)`

**Purpose:** Updates the state or data of `trade data`.

### ExecuteSlaughterItem
`public void ExecuteSlaughterItem()`

**Purpose:** Executes the `slaughter item` operation or workflow.

### ExecuteDonateItem
`public void ExecuteDonateItem()`

**Purpose:** Executes the `donate item` operation or workflow.

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**Purpose:** Executes the `set focused` operation or workflow.

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**Purpose:** Executes the `set unfocused` operation or workflow.

### UpdateCanBeSlaughtered
`public void UpdateCanBeSlaughtered()`

**Purpose:** Updates the state or data of `can be slaughtered`.

### UpdateHintTexts
`public void UpdateHintTexts()`

**Purpose:** Updates the state or data of `hint texts`.

### GetProfitTypeFromDiff
`public static ProfitTypes GetProfitTypeFromDiff(float averageValue, float currentValue)`

**Purpose:** Gets the current value of `profit type from diff`.

## Usage Example

```csharp
var value = new SPItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)