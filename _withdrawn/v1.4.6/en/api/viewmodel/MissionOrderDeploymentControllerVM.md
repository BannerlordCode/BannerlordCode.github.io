---
title: "MissionOrderDeploymentControllerVM"
description: "MissionOrderDeploymentControllerVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Order, inheriting ViewModel; 22 exposed members (14 methods, 5 properties, 2 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderDeploymentControllerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionOrderDeploymentControllerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionOrderDeploymentControllerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderDeploymentControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

MissionOrderDeploymentControllerVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderDeploymentControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionOrderDeploymentControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 22 public/protected members: 14 methods, 5 properties, 2 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionOrderDeploymentControllerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order`, inheritance chain MissionOrderDeploymentControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 14/22, properties 5/22), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderDeploymentControllerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OrderController` | `public OrderController OrderController` | property |
| `SetMissionParameters` | `public void SetMissionParameters(Camera deploymentCamera, List<DeploymentPoint>deploymentPoints)` | method |
| `SetCallbacks` | `public void SetCallbacks(MissionOrderCallbacks callbacks)` | method |
| `MissionOrderDeploymentControllerVM` | `public MissionOrderDeploymentControllerVM(MissionOrderVM missionOrder)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnRefreshSelectedDeploymentPoint` | `public void OnRefreshSelectedDeploymentPoint(DeploymentSiegeMachineVM item)` | method |
| `OnEntityHover` | `public void OnEntityHover(WeakGameEntity hoveredEntity)` | method |
| `OnEntityHover` | `public void OnEntityHover(DeploymentPoint deploymentPoint)` | method |
| `OnEntitySelect` | `public void OnEntitySelect(WeakGameEntity selectedEntity)` | method |
| `RefreshSelectedDeploymentPoint` | `public void RefreshSelectedDeploymentPoint(DeploymentPoint selectedDeploymentPoint)` | method |
| `ExecuteCancelSelectedDeploymentPoint` | `public void ExecuteCancelSelectedDeploymentPoint()` | method |
| `ExecuteBeginMission` | `public void ExecuteBeginMission()` | method |
| `ExecuteAutoDeploy` | `public void ExecuteAutoDeploy()` | method |
| `ExecuteDeployPlayerSide` | `public void ExecuteDeployPlayerSide()` | method |
| `FinalizeDeployment` | `public void FinalizeDeployment()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `MBBindingList` | `public MBBindingList<OrderSiegeMachineVM>SiegeMachineList` | property |
| `MBBindingList` | `public MBBindingList<DeploymentSiegeMachineVM>DeploymentTargets` | property |
| `IsSiegeDeploymentListActive` | `public bool IsSiegeDeploymentListActive` | property |
| `MBBindingList` | `public MBBindingList<DeploymentSiegeMachineVM>SiegeDeploymentList` | property |
| `_entityHiglightColor` | `public const uint _entityHiglightColor` | field |
| `_entitySelectedColor` | `public const uint _entitySelectedColor` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM/)
- [same namespace MissionOrderCallbacks](../MissionOrderCallbacks/)
- [same namespace MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM/)
- [same namespace MissionOrderVM](../MissionOrderVM/)
