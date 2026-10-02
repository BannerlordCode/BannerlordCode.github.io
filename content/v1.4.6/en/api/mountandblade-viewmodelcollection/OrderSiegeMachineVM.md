---
title: "OrderSiegeMachineVM"
description: "OrderSiegeMachineVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting OrderSubjectVM; 11 exposed members (3 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSiegeMachineVM.cs."
---
# OrderSiegeMachineVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderSiegeMachineVM : OrderSubjectVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSiegeMachineVM.cs`

## Overview

OrderSiegeMachineVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSiegeMachineVM.cs. It is a public class, implementing/inheriting OrderSubjectVM; the inheritance chain is OrderSiegeMachineVM → OrderSubjectVM → ViewModel. It exposes 11 public/protected members: 3 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderSiegeMachineVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Order) the module directory; inheritance chain OrderSiegeMachineVM → OrderSubjectVM → ViewModel. The surface is property-led (properties 7/11, methods 3/11), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSiegeMachineVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DeploymentPoint` | `public DeploymentPoint DeploymentPoint` | property |
| `SiegeWeapon` | `public SiegeWeapon SiegeWeapon` | property |
| `IsPrimarySiegeMachine` | `public bool IsPrimarySiegeMachine` | property |
| `OrderSiegeMachineVM` | `public OrderSiegeMachineVM(DeploymentPoint deploymentPoint, Action<OrderSiegeMachineVM>setSelected, int keyIndex)` | constructor |
| `OnSelectionStateChanged` | `protected override void OnSelectionStateChanged(bool isSelected)` | method |
| `RefreshSiegeWeapon` | `public void RefreshSiegeWeapon()` | method |
| `GetSiegeType` | `public static SiegeEngineType GetSiegeType(Type t, BattleSideEnum side)` | method |
| `MachineClass` | `public string MachineClass` | property |
| `CurrentHP` | `public double CurrentHP` | property |
| `IsInside` | `public bool IsInside` | property |
| `Position` | `public Vec2 Position` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface OrderSubjectVM](../OrderSubjectVM)
- [same namespace DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM)
- [same namespace MissionOrderCallbacks](../MissionOrderCallbacks)
- [same namespace MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM)
- [same namespace MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM)
