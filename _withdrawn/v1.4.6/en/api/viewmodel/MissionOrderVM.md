---
title: "MissionOrderVM"
description: "MissionOrderVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Order, inheriting ViewModel; 59 exposed members (29 methods, 25 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionOrderVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionOrderVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

MissionOrderVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionOrderVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 59 public/protected members: 29 methods, 25 properties, 1 constructors, 4 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionOrderVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order`, inheritance chain MissionOrderVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 29/59, properties 25/59), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CursorState` | `public MissionOrderVM.CursorStates CursorState` | property |
| `Team` | `public Team Team` | property |
| `OrderController` | `public OrderController OrderController` | property |
| `IsTroopPlacingActive` | `public bool IsTroopPlacingActive` | property |
| `PlayerHasAnyTroopUnderThem` | `public bool PlayerHasAnyTroopUnderThem` | property |
| `SelectedOrderSet` | `public OrderSetVM SelectedOrderSet` | property |
| `DisplayedOrderMessageForLastOrder` | `public bool DisplayedOrderMessageForLastOrder` | property |
| `MissionOrderVM` | `public MissionOrderVM(OrderController orderController, bool isDeployment, bool isMultiplayer)` | constructor |
| `CreateTroopController` | `protected virtual MissionOrderTroopControllerVM CreateTroopController(OrderController orderController)` | method |
| `SetDeploymentParemeters` | `public void SetDeploymentParemeters(Camera deploymentCamera, List<DeploymentPoint>deploymentPoints)` | method |
| `SetCallbacks` | `public void SetCallbacks(MissionOrderCallbacks callbacks)` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `OnOrderExecuted` | `public void OnOrderExecuted(OrderItemVM orderItem)` | method |
| `OnOrderLayoutTypeChanged` | `public virtual void OnOrderLayoutTypeChanged()` | method |
| `OpenToggleOrder` | `public void OpenToggleOrder(bool fromHold, bool displayMessage = true)` | method |
| `TryCloseToggleOrder` | `public bool TryCloseToggleOrder(bool applySelectedOrders = false)` | method |
| `SetActiveOrders` | `public void SetActiveOrders()` | method |
| `SetFocusedFormations` | `public void SetFocusedFormations(MBReadOnlyList<Formation>focusedFormationsCache)` | method |
| `AfterInitialize` | `public void AfterInitialize()` | method |
| `Update` | `public void Update()` | method |
| `OnEscape` | `public void OnEscape()` | method |
| `ViewOrders` | `public void ViewOrders()` | method |
| `GetOrderSetAtIndex` | `public OrderSetVM GetOrderSetAtIndex(int orderSetIndex)` | method |
| `TrySelectOrderSet` | `public bool TrySelectOrderSet(OrderSetVM orderSet)` | method |
| `OnTroopFormationSelected` | `public void OnTroopFormationSelected(int formationTroopIndex)` | method |
| `OnTroopHighlightSelection` | `public void OnTroopHighlightSelection(bool isDirectionLeft)` | method |
| `ExecuteSelectHighlightedFormation` | `public void ExecuteSelectHighlightedFormation()` | method |
| `ExecuteToggleHighlightedFormation` | `public void ExecuteToggleHighlightedFormation()` | method |
| `OnTransferFinished` | `protected void OnTransferFinished()` | method |
| `OnDeploymentFinished` | `public void OnDeploymentFinished()` | method |
| `OnAfterDeploymentFinished` | `public void OnAfterDeploymentFinished()` | method |
| `OnFiltersSet` | `public void OnFiltersSet(List<MissionOrderVM.FormationConfiguration>filterData)` | method |
| `UpdateCanUseShortcuts` | `public void UpdateCanUseShortcuts(bool value)` | method |
| `SetOrderIndexKey` | `public void SetOrderIndexKey(int orderIndex, GameKey gameKey)` | method |
| `SetReturnKey` | `public void SetReturnKey(GameKey gameKey)` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | method |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `MBBindingList` | `public MBBindingList<OrderSetVM>OrderSets` | property |
| `TroopController` | `public MissionOrderTroopControllerVM TroopController` | property |
| `DeploymentController` | `public MissionOrderDeploymentControllerVM DeploymentController` | property |
| `ActiveTargetState` | `public int ActiveTargetState` | property |
| `IsDeployment` | `public bool IsDeployment` | property |
| `HasAnyCascadingOrders` | `public bool HasAnyCascadingOrders` | property |
| `IsToggleOrderShown` | `public bool IsToggleOrderShown` | property |
| `IsTroopListShown` | `public bool IsTroopListShown` | property |
| `CanUseShortcuts` | `public bool CanUseShortcuts` | property |
| `IsHolding` | `public bool IsHolding` | property |
| `IsAnyOrderSetActive` | `public bool IsAnyOrderSetActive` | property |
| `ReturnText` | `public string ReturnText` | property |
| `UseAlternativeFormationLayout` | `public bool UseAlternativeFormationLayout` | property |
| `CursorStates` | `public enum CursorStates` | property |
| `OrderTargets` | `public enum OrderTargets` | property |
| `ClassConfiguration` | `public struct ClassConfiguration` | property |
| `FormationConfiguration` | `public struct FormationConfiguration` | property |
| `CursorStates` | `public enum CursorStates` | nested type |
| `OrderTargets` | `public enum OrderTargets` | nested type |
| `ClassConfiguration` | `public struct ClassConfiguration` | nested type |
| `FormationConfiguration` | `public struct FormationConfiguration` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM/)
- [same namespace MissionOrderCallbacks](../MissionOrderCallbacks/)
- [same namespace MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM/)
- [same namespace MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM/)
