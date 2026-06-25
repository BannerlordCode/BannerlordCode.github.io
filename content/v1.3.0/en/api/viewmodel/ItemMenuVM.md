---
title: "ItemMenuVM"
description: "Auto-generated class reference for ItemMenuVM."
---
# ItemMenuVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemMenuVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemMenuVM.cs`

## Overview

`ItemMenuVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### SetItem
`public void SetItem(SPItemVM item, int currentEquipmentMode, ItemVM comparedItem = null, BasicCharacterObject character = null, int alternativeUsageIndex = 0)`

**Purpose:** **Purpose:** Assigns a new value to item and updates the object's internal state.

```csharp
// Obtain an instance of ItemMenuVM from the subsystem API first
ItemMenuVM itemMenuVM = ...;
itemMenuVM.SetItem(item, 0, null, null, 0);
```

### SetTransactionCost
`public void SetTransactionCost(int getItemTotalPrice, int maxIndividualPrice)`

**Purpose:** **Purpose:** Assigns a new value to transaction cost and updates the object's internal state.

```csharp
// Obtain an instance of ItemMenuVM from the subsystem API first
ItemMenuVM itemMenuVM = ...;
itemMenuVM.SetTransactionCost(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemMenuVM itemMenuVM = ...;
itemMenuVM.SetItem(item, 0, null, null, 0);
```

## See Also

- [Area Index](../)