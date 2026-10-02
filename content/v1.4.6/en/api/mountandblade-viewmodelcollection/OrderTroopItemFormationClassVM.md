---
title: "OrderTroopItemFormationClassVM"
description: "OrderTroopItemFormationClassVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 4 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemFormationClassVM.cs."
---
# OrderTroopItemFormationClassVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderTroopItemFormationClassVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemFormationClassVM.cs`

## Overview

OrderTroopItemFormationClassVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemFormationClassVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is OrderTroopItemFormationClassVM → ViewModel. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderTroopItemFormationClassVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Order) the module directory; inheritance chain OrderTroopItemFormationClassVM → ViewModel. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemFormationClassVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrderTroopItemFormationClassVM` | `public OrderTroopItemFormationClassVM(Formation formation, FormationClass formationClass)` | constructor |
| `UpdateTroopCount` | `public void UpdateTroopCount()` | method |
| `FormationClassValue` | `public int FormationClassValue` | property |
| `TroopCount` | `public int TroopCount` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM)
- [same namespace MissionOrderCallbacks](../MissionOrderCallbacks)
- [same namespace MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM)
- [same namespace MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM)
