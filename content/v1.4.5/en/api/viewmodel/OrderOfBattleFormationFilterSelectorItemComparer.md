---
title: "OrderOfBattleFormationFilterSelectorItemComparer"
description: "Auto-generated class reference for OrderOfBattleFormationFilterSelectorItemComparer."
---
# OrderOfBattleFormationFilterSelectorItemComparer

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationFilterSelectorItemComparer : IComparer<OrderOfBattleFormationFilterSelectorItemVM>`
**Base:** `IComparer<OrderOfBattleFormationFilterSelectorItemVM>`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle/OrderOfBattleFormationFilterSelectorItemComparer.cs`

## Overview

`OrderOfBattleFormationFilterSelectorItemComparer` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(OrderOfBattleFormationFilterSelectorItemVM x, OrderOfBattleFormationFilterSelectorItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of OrderOfBattleFormationFilterSelectorItemComparer from the subsystem API first
OrderOfBattleFormationFilterSelectorItemComparer orderOfBattleFormationFilterSelectorItemComparer = ...;
var result = orderOfBattleFormationFilterSelectorItemComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OrderOfBattleFormationFilterSelectorItemComparer orderOfBattleFormationFilterSelectorItemComparer = ...;
orderOfBattleFormationFilterSelectorItemComparer.Compare(x, y);
```

## See Also

- [Area Index](../)