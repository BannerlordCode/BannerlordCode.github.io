---
title: "OrderOfBattleFormationClassVM"
description: "Auto-generated class reference for OrderOfBattleFormationClassVM."
---
# OrderOfBattleFormationClassVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationClassVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle/OrderOfBattleFormationClassVM.cs`

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

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of OrderOfBattleFormationClassVM from the subsystem API first
OrderOfBattleFormationClassVM orderOfBattleFormationClassVM = ...;
orderOfBattleFormationClassVM.RefreshValues();
```

### UpdateTroopCountText
`public void UpdateTroopCountText()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of troop count text.

```csharp
// Obtain an instance of OrderOfBattleFormationClassVM from the subsystem API first
OrderOfBattleFormationClassVM orderOfBattleFormationClassVM = ...;
orderOfBattleFormationClassVM.UpdateTroopCountText();
```

### SetWeightAdjustmentLock
`public void SetWeightAdjustmentLock(bool isLocked)`

**Purpose:** **Purpose:** Assigns a new value to weight adjustment lock and updates the object's internal state.

```csharp
// Obtain an instance of OrderOfBattleFormationClassVM from the subsystem API first
OrderOfBattleFormationClassVM orderOfBattleFormationClassVM = ...;
orderOfBattleFormationClassVM.SetWeightAdjustmentLock(false);
```

### UpdateWeightAdjustable
`public void UpdateWeightAdjustable()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of weight adjustable.

```csharp
// Obtain an instance of OrderOfBattleFormationClassVM from the subsystem API first
OrderOfBattleFormationClassVM orderOfBattleFormationClassVM = ...;
orderOfBattleFormationClassVM.UpdateWeightAdjustable();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OrderOfBattleFormationClassVM orderOfBattleFormationClassVM = ...;
orderOfBattleFormationClassVM.RefreshValues();
```

## See Also

- [Area Index](../)