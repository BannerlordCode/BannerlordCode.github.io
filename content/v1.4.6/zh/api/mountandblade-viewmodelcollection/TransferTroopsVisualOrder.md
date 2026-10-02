---
title: "TransferTroopsVisualOrder"
description: "TransferTroopsVisualOrder：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 VisualOrder；公开成员 6 个（方法 4、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/TransferTroopsVisualOrder.cs。"
---
# TransferTroopsVisualOrder

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class TransferTroopsVisualOrder : VisualOrder`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/TransferTroopsVisualOrder.cs`

## 概述

TransferTroopsVisualOrder 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/TransferTroopsVisualOrder.cs。它是一个 public 类，实现/继承 VisualOrder，继承链为 TransferTroopsVisualOrder → VisualOrder。public/protected 成员共 6 个：4 方法、1 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TransferTroopsVisualOrder 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual），继承链 TransferTroopsVisualOrder → VisualOrder。成员构成以方法为主（方法 4/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/TransferTroopsVisualOrder.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnTransferStarted;` | `public static event Action OnTransferStarted;` | 事件 |
| `TransferTroopsVisualOrder` | `public TransferTroopsVisualOrder() : base(" ")` | 构造函数 |
| `ExecuteOrder` | `public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | 方法 |
| `GetName` | `public override TextObject GetName(OrderController orderController)` | 方法 |
| `IsTargeted` | `public override bool IsTargeted()` | 方法 |
| `OnGetFormationHasOrder` | `protected override bool? OnGetFormationHasOrder(Formation formation)` | 方法 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 VisualOrder](../VisualOrder)
- [同命名空间 ActionVisualOrder](../ActionVisualOrder)
- [同命名空间 OrderState](../OrderState)
- [同命名空间 ReturnVisualOrder](../ReturnVisualOrder)
- [同命名空间 VisualOrder](../VisualOrder)
