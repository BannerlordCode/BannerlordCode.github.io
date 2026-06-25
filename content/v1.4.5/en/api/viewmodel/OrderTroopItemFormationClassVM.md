---
title: "OrderTroopItemFormationClassVM"
description: "Auto-generated class reference for OrderTroopItemFormationClassVM."
---
# OrderTroopItemFormationClassVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderTroopItemFormationClassVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/OrderTroopItemFormationClassVM.cs`

## Overview

`OrderTroopItemFormationClassVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FormationClassValue` | `public int FormationClassValue { get; set; }` |
| `TroopCount` | `public int TroopCount { get; set; }` |

## Key Methods

### UpdateTroopCount
`public void UpdateTroopCount()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of troop count.

```csharp
// Obtain an instance of OrderTroopItemFormationClassVM from the subsystem API first
OrderTroopItemFormationClassVM orderTroopItemFormationClassVM = ...;
orderTroopItemFormationClassVM.UpdateTroopCount();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OrderTroopItemFormationClassVM orderTroopItemFormationClassVM = ...;
orderTroopItemFormationClassVM.UpdateTroopCount();
```

## See Also

- [Area Index](../)