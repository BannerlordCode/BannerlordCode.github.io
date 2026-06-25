---
title: "OrderTroopItemFormationClassVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderTroopItemFormationClassVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OrderTroopItemFormationClassVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderTroopItemFormationClassVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/OrderTroopItemFormationClassVM.cs`

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

**Purpose:** Updates the state or data of `troop count`.

## Usage Example

```csharp
var value = new OrderTroopItemFormationClassVM();
value.UpdateTroopCount();
```

## See Also

- [Complete Class Catalog](../catalog)