---
title: "OrderSiegeMachineVM"
description: "Auto-generated class reference for OrderSiegeMachineVM."
---
# OrderSiegeMachineVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderSiegeMachineVM : OrderSubjectVM`
**Base:** `OrderSubjectVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSiegeMachineVM.cs`

## Overview

`OrderSiegeMachineVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeploymentPoint` | `public DeploymentPoint DeploymentPoint { get; }` |
| `SiegeWeapon` | `public SiegeWeapon SiegeWeapon { get; }` |
| `IsPrimarySiegeMachine` | `public bool IsPrimarySiegeMachine { get; }` |
| `MachineClass` | `public string MachineClass { get; set; }` |
| `CurrentHP` | `public double CurrentHP { get; set; }` |
| `IsInside` | `public bool IsInside { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |

## Key Methods

### RefreshSiegeWeapon
`public void RefreshSiegeWeapon()`

**Purpose:** **Purpose:** Keeps the display or cache of siege weapon in sync with the underlying state.

```csharp
// Obtain an instance of OrderSiegeMachineVM from the subsystem API first
OrderSiegeMachineVM orderSiegeMachineVM = ...;
orderSiegeMachineVM.RefreshSiegeWeapon();
```

### GetSiegeType
`public static SiegeEngineType GetSiegeType(Type t, BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the siege type value held by the this instance.

```csharp
// Static call; no instance required
OrderSiegeMachineVM.GetSiegeType(t, side);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OrderSiegeMachineVM orderSiegeMachineVM = ...;
orderSiegeMachineVM.RefreshSiegeWeapon();
```

## See Also

- [Area Index](../)