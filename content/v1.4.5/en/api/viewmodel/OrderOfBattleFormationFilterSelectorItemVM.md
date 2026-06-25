---
title: "OrderOfBattleFormationFilterSelectorItemVM"
description: "Auto-generated class reference for OrderOfBattleFormationFilterSelectorItemVM."
---
# OrderOfBattleFormationFilterSelectorItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationFilterSelectorItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle/OrderOfBattleFormationFilterSelectorItemVM.cs`

## Overview

`OrderOfBattleFormationFilterSelectorItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FilterTypeValue` | `public int FilterTypeValue { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of OrderOfBattleFormationFilterSelectorItemVM from the subsystem API first
OrderOfBattleFormationFilterSelectorItemVM orderOfBattleFormationFilterSelectorItemVM = ...;
orderOfBattleFormationFilterSelectorItemVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OrderOfBattleFormationFilterSelectorItemVM orderOfBattleFormationFilterSelectorItemVM = ...;
orderOfBattleFormationFilterSelectorItemVM.RefreshValues();
```

## See Also

- [Area Index](../)