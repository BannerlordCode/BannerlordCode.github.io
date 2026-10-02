---
title: "OrderSubjectVM"
description: "OrderSubjectVM：TaleWorlds.MountAndBlade.ViewModelCollection.Order 的 public 类，继承 ViewModel；公开成员 16 个（方法 5、属性 10、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSubjectVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderSubjectVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class OrderSubjectVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSubjectVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

OrderSubjectVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSubjectVM.cs。它是一个 public 类（abstract），实现/继承 ViewModel，继承链为 OrderSubjectVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 16 个：5 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OrderSubjectVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，继承链 OrderSubjectVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 10/16，方法 5/16），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSubjectVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrderSubjectVM` | `public OrderSubjectVM()` | 构造函数 |
| `AddActiveOrder` | `public void AddActiveOrder(OrderItemVM order)` | 方法 |
| `RemoveActiveOrder` | `public void RemoveActiveOrder(OrderItemVM order)` | 方法 |
| `ClearActiveOrders` | `public void ClearActiveOrders()` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnSelectionStateChanged` | `protected abstract void OnSelectionStateChanged(bool isSelected);` | 方法 |
| `IsSelectable` | `public bool IsSelectable` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `IsSelectionHighlightActive` | `public bool IsSelectionHighlightActive` | 属性 |
| `ShowSelectionInputs` | `public bool ShowSelectionInputs` | 属性 |
| `BehaviorType` | `public int BehaviorType` | 属性 |
| `UnderAttackOfType` | `public int UnderAttackOfType` | 属性 |
| `SelectionText` | `public string SelectionText` | 属性 |
| `ApplySelectionKey` | `public InputKeyItemVM ApplySelectionKey` | 属性 |
| `ToggleSelectionKey` | `public InputKeyItemVM ToggleSelectionKey` | 属性 |
| `MBBindingList` | `public MBBindingList<OrderItemVM>ActiveOrders` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM/)
- [同命名空间 MissionOrderCallbacks](../MissionOrderCallbacks/)
- [同命名空间 MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM/)
- [同命名空间 MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM/)
