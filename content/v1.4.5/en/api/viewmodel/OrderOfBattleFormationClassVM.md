---
title: "OrderOfBattleFormationClassVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleFormationClassVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationClassVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationClassVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle/OrderOfBattleFormationClassVM.cs`

## Overview

`OrderOfBattleFormationClassVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Class` | `public FormationClass Class { get; set; }` |
| `PreviousWeight` | `public int PreviousWeight { get; }` |
| `IsAdjustable` | `public bool IsAdjustable { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `IsUnset` | `public bool IsUnset { get; set; }` |
| `Weight` | `public int Weight { get; set; }` |
| `ShownFormationClass` | `public int ShownFormationClass { get; set; }` |
| `TroopCountText` | `public string TroopCountText { get; set; }` |
| `LockWeightHint` | `public HintViewModel LockWeightHint { get; set; }` |
| `IsWeightHighlightActive` | `public bool IsWeightHighlightActive { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### UpdateTroopCountText
`public void UpdateTroopCountText()`

**Purpose:** Updates the state or data of `troop count text`.

### SetWeightAdjustmentLock
`public void SetWeightAdjustmentLock(bool isLocked)`

**Purpose:** Sets the value or state of `weight adjustment lock`.

### UpdateWeightAdjustable
`public void UpdateWeightAdjustable()`

**Purpose:** Updates the state or data of `weight adjustable`.

## Usage Example

```csharp
var value = new OrderOfBattleFormationClassVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)