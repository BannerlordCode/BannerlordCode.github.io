---
title: "OrderItemBaseVM"
description: "OrderItemBaseVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 15 个（方法 7、属性 7、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemBaseVM.cs。"
---
# OrderItemBaseVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class OrderItemBaseVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemBaseVM.cs`

## 概述

OrderItemBaseVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemBaseVM.cs。它是一个 public 类（abstract），实现/继承 ViewModel，继承链为 OrderItemBaseVM → ViewModel。public/protected 成员共 15 个：7 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OrderItemBaseVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.Order），继承链 OrderItemBaseVM → ViewModel。成员构成以方法为主（方法 7/15，属性 7/15），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemBaseVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrderItemBaseVM` | `public OrderItemBaseVM(OrderController orderController)` | 构造函数 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `RefreshState` | `public void RefreshState()` | 方法 |
| `ExecuteAction` | `public void ExecuteAction(VisualOrderExecutionParameters executionParameters)` | 方法 |
| `OnSelectedStateChanged` | `protected virtual void OnSelectedStateChanged(bool isSelected)` | 方法 |
| `OnRefreshState` | `protected abstract void OnRefreshState();` | 方法 |
| `OnExecuteAction` | `protected abstract void OnExecuteAction(VisualOrderExecutionParameters executionParameters);` | 方法 |
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey` | 属性 |
| `SetShortcutKey` | `public void SetShortcutKey(InputKeyItemVM inputKeyItem)` | 方法 |
| `IsActive` | `public bool IsActive` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `CanUseShortcuts` | `public bool CanUseShortcuts` | 属性 |
| `OrderIconId` | `public string OrderIconId` | 属性 |
| `SelectionState` | `public string SelectionState` | 属性 |
| `Name` | `public string Name` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM)
- [同命名空间 MissionOrderCallbacks](../MissionOrderCallbacks)
- [同命名空间 MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM)
- [同命名空间 MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM)
