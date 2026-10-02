---
title: "VisualOrder"
description: "VisualOrder：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类；公开成员 12 个（方法 9、属性 2、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrder.cs。"
---
# VisualOrder

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class VisualOrder`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrder.cs`

## 概述

VisualOrder 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrder.cs。它是一个 public 类（abstract），继承链为 VisualOrder。public/protected 成员共 12 个：9 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：VisualOrder 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual），继承链 VisualOrder。成员构成以方法为主（方法 9/12，属性 2/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrder.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StringId` | `public string StringId` | 属性 |
| `IconId` | `public string IconId` | 属性 |
| `VisualOrder` | `public VisualOrder(string stringId)` | 构造函数 |
| `GetIconId` | `protected virtual string GetIconId()` | 方法 |
| `GetName` | `public abstract TextObject GetName(OrderController orderController);` | 方法 |
| `IsTargeted` | `public abstract bool IsTargeted();` | 方法 |
| `ExecuteOrder` | `public abstract void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters);` | 方法 |
| `BeforeExecuteOrder` | `public virtual void BeforeExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | 方法 |
| `AfterExecuteOrder` | `public virtual void AfterExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | 方法 |
| `OnGetFormationHasOrder` | `protected abstract bool? OnGetFormationHasOrder(Formation formation);` | 方法 |
| `GetFormationHasOrder` | `public bool GetFormationHasOrder(Formation formation)` | 方法 |
| `GetActiveState` | `public OrderState GetActiveState(OrderController orderController)` | 方法 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionVisualOrder](../ActionVisualOrder)
- [同命名空间 OrderState](../OrderState)
- [同命名空间 ReturnVisualOrder](../ReturnVisualOrder)
- [同命名空间 TransferTroopsVisualOrder](../TransferTroopsVisualOrder)
