---
title: "OrderItemVM"
description: "OrderItemVM：TaleWorlds.MountAndBlade.ViewModelCollection.Order 的 public 类，继承 OrderItemBaseVM；公开成员 5 个（方法 3、属性 0、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderItemVM : OrderItemBaseVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

OrderItemVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemVM.cs。它是一个 public 类，实现/继承 OrderItemBaseVM，继承链为 OrderItemVM → OrderItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 5 个：3 方法、1 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OrderItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，继承链 OrderItemVM → OrderItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 3/5，属性 0/5），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public static event Action<OrderItemVM>OnExecuteOrder;` | 事件 |
| `OrderItemVM` | `public OrderItemVM(OrderController orderController, VisualOrder order) : base(orderController)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnRefreshState` | `protected override void OnRefreshState()` | 方法 |
| `OnExecuteAction` | `protected override void OnExecuteAction(VisualOrderExecutionParameters executionParameters)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 OrderItemBaseVM](../OrderItemBaseVM/)
- [同命名空间 DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM/)
- [同命名空间 MissionOrderCallbacks](../MissionOrderCallbacks/)
- [同命名空间 MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM/)
- [同命名空间 MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM/)
