---
title: "MissionOrderVM"
description: "MissionOrderVM：TaleWorlds.MountAndBlade.ViewModelCollection.Order 的 public 类，继承 ViewModel；公开成员 59 个（方法 29、属性 25、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionOrderVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionOrderVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

MissionOrderVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionOrderVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 59 个：29 方法、25 属性、1 构造函数、4 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionOrderVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，继承链 MissionOrderVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 29/59，属性 25/59），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CursorState` | `public MissionOrderVM.CursorStates CursorState` | 属性 |
| `Team` | `public Team Team` | 属性 |
| `OrderController` | `public OrderController OrderController` | 属性 |
| `IsTroopPlacingActive` | `public bool IsTroopPlacingActive` | 属性 |
| `PlayerHasAnyTroopUnderThem` | `public bool PlayerHasAnyTroopUnderThem` | 属性 |
| `SelectedOrderSet` | `public OrderSetVM SelectedOrderSet` | 属性 |
| `DisplayedOrderMessageForLastOrder` | `public bool DisplayedOrderMessageForLastOrder` | 属性 |
| `MissionOrderVM` | `public MissionOrderVM(OrderController orderController, bool isDeployment, bool isMultiplayer)` | 构造函数 |
| `CreateTroopController` | `protected virtual MissionOrderTroopControllerVM CreateTroopController(OrderController orderController)` | 方法 |
| `SetDeploymentParemeters` | `public void SetDeploymentParemeters(Camera deploymentCamera, List<DeploymentPoint>deploymentPoints)` | 方法 |
| `SetCallbacks` | `public void SetCallbacks(MissionOrderCallbacks callbacks)` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `OnOrderExecuted` | `public void OnOrderExecuted(OrderItemVM orderItem)` | 方法 |
| `OnOrderLayoutTypeChanged` | `public virtual void OnOrderLayoutTypeChanged()` | 方法 |
| `OpenToggleOrder` | `public void OpenToggleOrder(bool fromHold, bool displayMessage = true)` | 方法 |
| `TryCloseToggleOrder` | `public bool TryCloseToggleOrder(bool applySelectedOrders = false)` | 方法 |
| `SetActiveOrders` | `public void SetActiveOrders()` | 方法 |
| `SetFocusedFormations` | `public void SetFocusedFormations(MBReadOnlyList<Formation>focusedFormationsCache)` | 方法 |
| `AfterInitialize` | `public void AfterInitialize()` | 方法 |
| `Update` | `public void Update()` | 方法 |
| `OnEscape` | `public void OnEscape()` | 方法 |
| `ViewOrders` | `public void ViewOrders()` | 方法 |
| `GetOrderSetAtIndex` | `public OrderSetVM GetOrderSetAtIndex(int orderSetIndex)` | 方法 |
| `TrySelectOrderSet` | `public bool TrySelectOrderSet(OrderSetVM orderSet)` | 方法 |
| `OnTroopFormationSelected` | `public void OnTroopFormationSelected(int formationTroopIndex)` | 方法 |
| `OnTroopHighlightSelection` | `public void OnTroopHighlightSelection(bool isDirectionLeft)` | 方法 |
| `ExecuteSelectHighlightedFormation` | `public void ExecuteSelectHighlightedFormation()` | 方法 |
| `ExecuteToggleHighlightedFormation` | `public void ExecuteToggleHighlightedFormation()` | 方法 |
| `OnTransferFinished` | `protected void OnTransferFinished()` | 方法 |
| `OnDeploymentFinished` | `public void OnDeploymentFinished()` | 方法 |
| `OnAfterDeploymentFinished` | `public void OnAfterDeploymentFinished()` | 方法 |
| `OnFiltersSet` | `public void OnFiltersSet(List<MissionOrderVM.FormationConfiguration>filterData)` | 方法 |
| `UpdateCanUseShortcuts` | `public void UpdateCanUseShortcuts(bool value)` | 方法 |
| `SetOrderIndexKey` | `public void SetOrderIndexKey(int orderIndex, GameKey gameKey)` | 方法 |
| `SetReturnKey` | `public void SetReturnKey(GameKey gameKey)` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | 方法 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `MBBindingList` | `public MBBindingList<OrderSetVM>OrderSets` | 属性 |
| `TroopController` | `public MissionOrderTroopControllerVM TroopController` | 属性 |
| `DeploymentController` | `public MissionOrderDeploymentControllerVM DeploymentController` | 属性 |
| `ActiveTargetState` | `public int ActiveTargetState` | 属性 |
| `IsDeployment` | `public bool IsDeployment` | 属性 |
| `HasAnyCascadingOrders` | `public bool HasAnyCascadingOrders` | 属性 |
| `IsToggleOrderShown` | `public bool IsToggleOrderShown` | 属性 |
| `IsTroopListShown` | `public bool IsTroopListShown` | 属性 |
| `CanUseShortcuts` | `public bool CanUseShortcuts` | 属性 |
| `IsHolding` | `public bool IsHolding` | 属性 |
| `IsAnyOrderSetActive` | `public bool IsAnyOrderSetActive` | 属性 |
| `ReturnText` | `public string ReturnText` | 属性 |
| `UseAlternativeFormationLayout` | `public bool UseAlternativeFormationLayout` | 属性 |
| `CursorStates` | `public enum CursorStates` | 属性 |
| `OrderTargets` | `public enum OrderTargets` | 属性 |
| `ClassConfiguration` | `public struct ClassConfiguration` | 属性 |
| `FormationConfiguration` | `public struct FormationConfiguration` | 属性 |
| `CursorStates` | `public enum CursorStates` | 嵌套类型 |
| `OrderTargets` | `public enum OrderTargets` | 嵌套类型 |
| `ClassConfiguration` | `public struct ClassConfiguration` | 嵌套类型 |
| `FormationConfiguration` | `public struct FormationConfiguration` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM/)
- [同命名空间 MissionOrderCallbacks](../MissionOrderCallbacks/)
- [同命名空间 MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM/)
- [同命名空间 MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM/)
