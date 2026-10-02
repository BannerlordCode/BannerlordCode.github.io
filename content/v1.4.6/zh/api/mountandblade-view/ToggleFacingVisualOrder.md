---
title: "ToggleFacingVisualOrder"
description: "ToggleFacingVisualOrder：TaleWorlds.MountAndBlade.View 的 public 类，继承 VisualOrder；公开成员 6 个（方法 5、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/ToggleOrders/ToggleFacingVisualOrder.cs。"
---
# ToggleFacingVisualOrder

**Namespace:** `TaleWorlds.MountAndBlade.View.VisualOrders.Orders.ToggleOrders`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class ToggleFacingVisualOrder : VisualOrder`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/ToggleOrders/ToggleFacingVisualOrder.cs`

## 概述

ToggleFacingVisualOrder 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/ToggleOrders/ToggleFacingVisualOrder.cs。它是一个 public 类，实现/继承 VisualOrder，继承链为 ToggleFacingVisualOrder → VisualOrder。public/protected 成员共 6 个：5 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ToggleFacingVisualOrder 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.VisualOrders.Orders.ToggleOrders），继承链 ToggleFacingVisualOrder → VisualOrder。成员构成以方法为主（方法 5/6，属性 0/6），对外主要以操作入口暴露。继承链上的 VisualOrder 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/ToggleOrders/ToggleFacingVisualOrder.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ToggleFacingVisualOrder` | `public ToggleFacingVisualOrder(string iconId) : base(iconId)` | 构造函数 |
| `GetName` | `public override TextObject GetName(OrderController orderController)` | 方法 |
| `ExecuteOrder` | `public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | 方法 |
| `IsTargeted` | `public override bool IsTargeted()` | 方法 |
| `OnGetFormationHasOrder` | `protected override bool? OnGetFormationHasOrder(Formation formation)` | 方法 |
| `GetIconId` | `protected override string GetIconId()` | 方法 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
