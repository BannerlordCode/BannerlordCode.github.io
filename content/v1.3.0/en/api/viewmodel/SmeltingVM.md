---
title: "SmeltingVM"
description: "Auto-generated class reference for SmeltingVM."
---
# SmeltingVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SmeltingVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingVM.cs`

## Overview

`SmeltingVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WeaponTypeName` | `public string WeaponTypeName { get; set; }` |
| `WeaponTypeCode` | `public string WeaponTypeCode { get; set; }` |
| `CurrentSelectedItem` | `public SmeltingItemVM CurrentSelectedItem { get; set; }` |
| `IsAnyItemSelected` | `public bool IsAnyItemSelected { get; set; }` |
| `SmeltableItemList` | `public MBBindingList<SmeltingItemVM> SmeltableItemList { get; set; }` |
| `SelectAllHint` | `public HintViewModel SelectAllHint { get; set; }` |
| `SortController` | `public SmeltingSortControllerVM SortController { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of SmeltingVM from the subsystem API first
SmeltingVM smeltingVM = ...;
smeltingVM.RefreshValues();
```

### RefreshList
`public void RefreshList()`

**Purpose:** Keeps the display or cache of list in sync with the underlying state.

```csharp
// Obtain an instance of SmeltingVM from the subsystem API first
SmeltingVM smeltingVM = ...;
smeltingVM.RefreshList();
```

### TrySmeltingSelectedItems
`public void TrySmeltingSelectedItems(Hero currentCraftingHero)`

**Purpose:** Attempts to retrieve smelting selected items, usually returning success through an out parameter.

```csharp
// Obtain an instance of SmeltingVM from the subsystem API first
SmeltingVM smeltingVM = ...;
smeltingVM.TrySmeltingSelectedItems(currentCraftingHero);
```

### SaveItemLockStates
`public void SaveItemLockStates()`

**Purpose:** Writes item lock states to persistent storage or a stream.

```csharp
// Obtain an instance of SmeltingVM from the subsystem API first
SmeltingVM smeltingVM = ...;
smeltingVM.SaveItemLockStates();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SmeltingVM smeltingVM = ...;
smeltingVM.RefreshValues();
```

## See Also

- [Area Index](../)