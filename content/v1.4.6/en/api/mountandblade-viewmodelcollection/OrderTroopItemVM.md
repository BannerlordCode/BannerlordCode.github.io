---
title: "OrderTroopItemVM"
description: "OrderTroopItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting OrderSubjectVM; 31 exposed members (11 methods, 17 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemVM.cs."
---
# OrderTroopItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderTroopItemVM : OrderSubjectVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemVM.cs`

## Overview

OrderTroopItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemVM.cs. It is a public class, implementing/inheriting OrderSubjectVM; the inheritance chain is OrderTroopItemVM → OrderSubjectVM → ViewModel. It exposes 31 public/protected members: 11 methods, 17 properties, 1 events, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderTroopItemVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Order) the module directory; inheritance chain OrderTroopItemVM → OrderSubjectVM → ViewModel. The surface is property-led (properties 17/31, methods 11/31), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `bool>OnSelectionChange;` | `public static event Action<OrderTroopItemVM, bool>OnSelectionChange;` | event |
| `ContainsDeadTroop` | `public bool ContainsDeadTroop` | property |
| `OrderTroopItemVM` | `public OrderTroopItemVM(Formation formation, Action<OrderTroopItemVM>setSelected, Func<Formation, int>getMorale)` | constructor |
| `OrderTroopItemVM` | `public OrderTroopItemVM()` | constructor |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `OnSelectionStateChanged` | `protected override void OnSelectionStateChanged(bool isSelected)` | method |
| `OnFormationAgentRemoved` | `public void OnFormationAgentRemoved(Agent agent)` | method |
| `UpdateVisuals` | `public virtual void UpdateVisuals()` | method |
| `Update` | `public virtual void Update()` | method |
| `UpdateSelectionKeyInfo` | `public void UpdateSelectionKeyInfo()` | method |
| `SetFormationClassFromFormation` | `public bool SetFormationClassFromFormation(Formation formation)` | method |
| `UpdateFilterData` | `public void UpdateFilterData(List<FormationFilterType>usedFilters)` | method |
| `ExecuteAction` | `public void ExecuteAction()` | method |
| `RefreshTargetedOrderVisual` | `public virtual void RefreshTargetedOrderVisual()` | method |
| `GetVisibleNameOfFormationForMessage` | `public virtual TextObject GetVisibleNameOfFormationForMessage()` | method |
| `IsValid` | `public bool IsValid` | property |
| `FormationIndex` | `public int FormationIndex` | property |
| `CurrentMemberCount` | `public int CurrentMemberCount` | property |
| `Morale` | `public int Morale` | property |
| `AmmoPercentage` | `public float AmmoPercentage` | property |
| `IsAmmoAvailable` | `public bool IsAmmoAvailable` | property |
| `HaveTroops` | `public bool HaveTroops` | property |
| `HasTarget` | `public bool HasTarget` | property |
| `IsTargetRelevant` | `public bool IsTargetRelevant` | property |
| `HasCaptain` | `public bool HasCaptain` | property |
| `CurrentOrderIconId` | `public string CurrentOrderIconId` | property |
| `CurrentTargetFormationType` | `public string CurrentTargetFormationType` | property |
| `FormationName` | `public string FormationName` | property |
| `CaptainImageIdentifier` | `public CharacterImageIdentifierVM CaptainImageIdentifier` | property |
| `MBBindingList` | `public MBBindingList<OrderTroopItemFormationClassVM>ActiveFormationClasses` | property |
| `MBBindingList` | `public MBBindingList<OrderTroopItemFilterVM>ActiveFilters` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface OrderSubjectVM](../OrderSubjectVM)
- [same namespace DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM)
- [same namespace MissionOrderCallbacks](../MissionOrderCallbacks)
- [same namespace MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM)
- [same namespace MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM)
