---
title: "OrderTroopItemFormationClassVM"
description: "OrderTroopItemFormationClassVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Order, inheriting ViewModel; 4 exposed members (1 methods, 2 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemFormationClassVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderTroopItemFormationClassVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderTroopItemFormationClassVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemFormationClassVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

OrderTroopItemFormationClassVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemFormationClassVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is OrderTroopItemFormationClassVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderTroopItemFormationClassVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order`, inheritance chain OrderTroopItemFormationClassVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemFormationClassVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OrderTroopItemFormationClassVM` | `public OrderTroopItemFormationClassVM(Formation formation, FormationClass formationClass)` | constructor |
| `UpdateTroopCount` | `public void UpdateTroopCount()` | method |
| `FormationClassValue` | `public int FormationClassValue` | property |
| `TroopCount` | `public int TroopCount` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM/)
- [same namespace MissionOrderCallbacks](../MissionOrderCallbacks/)
- [same namespace MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM/)
- [same namespace MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM/)
