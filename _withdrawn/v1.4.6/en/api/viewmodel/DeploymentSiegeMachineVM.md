---
title: "DeploymentSiegeMachineVM"
description: "DeploymentSiegeMachineVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Order, inheriting ViewModel; 19 exposed members (8 methods, 10 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/DeploymentSiegeMachineVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DeploymentSiegeMachineVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class DeploymentSiegeMachineVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/DeploymentSiegeMachineVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

DeploymentSiegeMachineVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/DeploymentSiegeMachineVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is DeploymentSiegeMachineVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 19 public/protected members: 8 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DeploymentSiegeMachineVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order`, inheritance chain DeploymentSiegeMachineVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 10/19, methods 8/19), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/DeploymentSiegeMachineVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DeploymentPoint` | `public DeploymentPoint DeploymentPoint` | property |
| `DeploymentSiegeMachineVM` | `public DeploymentSiegeMachineVM(DeploymentPoint selectedDeploymentPoint, SiegeWeapon siegeMachine, Camera deploymentCamera, Action<DeploymentSiegeMachineVM>onSelectSiegeMachine, Action<DeploymentPoint>onHoverSiegeMachine, bool isSelected)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Update` | `public void Update()` | method |
| `CalculatePosition` | `public void CalculatePosition()` | method |
| `RefreshPosition` | `public void RefreshPosition()` | method |
| `ExecuteAction` | `public void ExecuteAction()` | method |
| `ExecuteFocusBegin` | `public void ExecuteFocusBegin()` | method |
| `ExecuteFocusEnd` | `public void ExecuteFocusEnd()` | method |
| `RefreshWithDeployedWeapon` | `public void RefreshWithDeployedWeapon()` | method |
| `Type` | `public int Type` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral` | property |
| `MachineClass` | `public string MachineClass` | property |
| `BreachedText` | `public string BreachedText` | property |
| `RemainingCount` | `public int RemainingCount` | property |
| `IsInside` | `public bool IsInside` | property |
| `IsInFront` | `public bool IsInFront` | property |
| `Position` | `public Vec2 Position` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MissionOrderCallbacks](../MissionOrderCallbacks/)
- [same namespace MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM/)
- [same namespace MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM/)
- [same namespace MissionOrderVM](../MissionOrderVM/)
