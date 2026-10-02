---
title: "OrderSetVM"
description: "OrderSetVM：TaleWorlds.MountAndBlade.ViewModelCollection.Order 的 public 类，继承 OrderItemBaseVM；公开成员 20 个（方法 12、属性 5、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSetVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderSetVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderSetVM : OrderItemBaseVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSetVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

OrderSetVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSetVM.cs。它是一个 public 类，实现/继承 OrderItemBaseVM，继承链为 OrderSetVM → OrderItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 20 个：12 方法、5 属性、1 事件、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OrderSetVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，继承链 OrderSetVM → OrderItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 12/20，属性 5/20），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSetVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnSelectionStateChanged;` | `public static event OrderSetVM.OnOrderSetSelectionStateChangedDelegate OnSelectionStateChanged;` | 事件 |
| `HasSingleOrder` | `public bool HasSingleOrder` | 属性 |
| `OrderSet` | `public VisualOrderSet OrderSet` | 属性 |
| `OrderSetVM` | `public OrderSetVM(OrderController orderController, VisualOrderSet collection) : base(orderController)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `OnExecuteAction` | `protected override void OnExecuteAction(VisualOrderExecutionParameters executionParameters)` | 方法 |
| `OnRefreshState` | `protected override void OnRefreshState()` | 方法 |
| `ExecuteSelect` | `public void ExecuteSelect()` | 方法 |
| `ExecuteDeSelect` | `public void ExecuteDeSelect()` | 方法 |
| `OnOrderExecuted` | `public void OnOrderExecuted(OrderItemVM order)` | 方法 |
| `RefreshOrders` | `public void RefreshOrders()` | 方法 |
| `OnSelectedStateChanged` | `protected override void OnSelectedStateChanged(bool isSelected)` | 方法 |
| `RefreshOrderStates` | `public void RefreshOrderStates()` | 方法 |
| `UpdateCanUseShortcuts` | `public void UpdateCanUseShortcuts(bool value)` | 方法 |
| `SelectedOrderText` | `public string SelectedOrderText` | 属性 |
| `SoloOrder` | `public OrderItemVM SoloOrder` | 属性 |
| `MBBindingList` | `public MBBindingList<OrderItemVM>Orders` | 属性 |
| `OnOrderSetSelectionStateChangedDelegate` | `public delegate void OnOrderSetSelectionStateChangedDelegate(OrderSetVM orderSet, bool isSelected);` | 方法 |
| `OnOrderSetSelectionStateChangedDelegate` | `public delegate void OnOrderSetSelectionStateChangedDelegate(OrderSetVM orderSet, bool isSelected)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 OrderItemBaseVM](../OrderItemBaseVM/)
- [同命名空间 DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM/)
- [同命名空间 MissionOrderCallbacks](../MissionOrderCallbacks/)
- [同命名空间 MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM/)
- [同命名空间 MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM/)
