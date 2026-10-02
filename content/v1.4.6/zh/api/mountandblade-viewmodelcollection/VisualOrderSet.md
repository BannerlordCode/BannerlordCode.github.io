---
title: "VisualOrderSet"
description: "VisualOrderSet：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类；公开成员 10 个（方法 4、属性 5、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrderSet.cs。"
---
# VisualOrderSet

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class VisualOrderSet`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrderSet.cs`

## 概述

VisualOrderSet 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrderSet.cs。它是一个 public 类（abstract），继承链为 VisualOrderSet。public/protected 成员共 10 个：4 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：VisualOrderSet 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual），继承链 VisualOrderSet。成员构成以属性为主（属性 5/10，方法 4/10），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrderSet.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<VisualOrder>Orders` | 属性 |
| `SoloOrder` | `public VisualOrder SoloOrder` | 属性 |
| `IsSoloOrder` | `public abstract bool IsSoloOrder` | 属性 |
| `GetName` | `public abstract TextObject GetName(OrderController orderController);` | 方法 |
| `StringId` | `public abstract string StringId` | 属性 |
| `IconId` | `public abstract string IconId` | 属性 |
| `VisualOrderSet` | `public VisualOrderSet()` | 构造函数 |
| `AddOrder` | `public void AddOrder(VisualOrder order)` | 方法 |
| `RemoveOrder` | `public void RemoveOrder(VisualOrder order)` | 方法 |
| `ClearOrders` | `public void ClearOrders()` | 方法 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionVisualOrder](../ActionVisualOrder)
- [同命名空间 OrderState](../OrderState)
- [同命名空间 ReturnVisualOrder](../ReturnVisualOrder)
- [同命名空间 TransferTroopsVisualOrder](../TransferTroopsVisualOrder)
