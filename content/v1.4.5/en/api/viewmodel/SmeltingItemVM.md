---
title: "SmeltingItemVM"
description: "Auto-generated class reference for SmeltingItemVM."
---
# SmeltingItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SmeltingItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting/SmeltingItemVM.cs`

## Overview

`SmeltingItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EquipmentElement` | `public EquipmentElement EquipmentElement { get; }` |
| `Visual` | `public ItemImageIdentifierVM Visual { get; set; }` |
| `Yield` | `public MBBindingList<CraftingResourceItemVM> Yield { get; set; }` |
| `InputMaterials` | `public MBBindingList<CraftingResourceItemVM> InputMaterials { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `NumOfItems` | `public int NumOfItems { get; set; }` |
| `HasMoreThanOneItem` | `public bool HasMoreThanOneItem { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `LockHint` | `public HintViewModel LockHint { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of SmeltingItemVM from the subsystem API first
SmeltingItemVM smeltingItemVM = ...;
smeltingItemVM.RefreshValues();
```

### ExecuteSelection
`public void ExecuteSelection()`

**Purpose:** Runs the operation or workflow associated with `selection`.

```csharp
// Obtain an instance of SmeltingItemVM from the subsystem API first
SmeltingItemVM smeltingItemVM = ...;
smeltingItemVM.ExecuteSelection();
```

### ExecuteShowItemTooltip
`public void ExecuteShowItemTooltip()`

**Purpose:** Runs the operation or workflow associated with `show item tooltip`.

```csharp
// Obtain an instance of SmeltingItemVM from the subsystem API first
SmeltingItemVM smeltingItemVM = ...;
smeltingItemVM.ExecuteShowItemTooltip();
```

### ExecuteHideItemTooltip
`public void ExecuteHideItemTooltip()`

**Purpose:** Runs the operation or workflow associated with `hide item tooltip`.

```csharp
// Obtain an instance of SmeltingItemVM from the subsystem API first
SmeltingItemVM smeltingItemVM = ...;
smeltingItemVM.ExecuteHideItemTooltip();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SmeltingItemVM smeltingItemVM = ...;
smeltingItemVM.RefreshValues();
```

## See Also

- [Area Index](../)