---
title: "OrderSiegeMachineVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderSiegeMachineVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OrderSiegeMachineVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderSiegeMachineVM : OrderSubjectVM`
**Base:** `OrderSubjectVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/OrderSiegeMachineVM.cs`

## Overview

`OrderSiegeMachineVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeploymentPoint` | `public DeploymentPoint DeploymentPoint { get; }` |
| `SiegeWeapon` | `public SiegeWeapon SiegeWeapon { get; }` |
| `MachineClass` | `public string MachineClass { get; set; }` |
| `CurrentHP` | `public double CurrentHP { get; set; }` |
| `IsInside` | `public bool IsInside { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |

## Key Methods

### RefreshSiegeWeapon
`public void RefreshSiegeWeapon()`

**Purpose:** Refreshes the display or cache of `siege weapon`.

### GetSiegeType
`public static SiegeEngineType GetSiegeType(Type t, BattleSideEnum side)`

**Purpose:** Gets the current value of `siege type`.

## Usage Example

```csharp
var value = new OrderSiegeMachineVM();
value.RefreshSiegeWeapon();
```

## See Also

- [Complete Class Catalog](../catalog)