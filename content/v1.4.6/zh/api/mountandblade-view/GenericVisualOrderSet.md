---
title: "GenericVisualOrderSet"
description: "GenericVisualOrderSet：TaleWorlds.MountAndBlade.View 的 public 类，继承 VisualOrderSet；公开成员 5 个（方法 1、属性 3、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/OrderSets/GenericVisualOrderSet.cs。"
---
# GenericVisualOrderSet

**Namespace:** `TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class GenericVisualOrderSet : VisualOrderSet`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/OrderSets/GenericVisualOrderSet.cs`

## 概述

GenericVisualOrderSet 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/OrderSets/GenericVisualOrderSet.cs。它是一个 public 类，实现/继承 VisualOrderSet，继承链为 GenericVisualOrderSet → VisualOrderSet。public/protected 成员共 5 个：1 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GenericVisualOrderSet 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets），继承链 GenericVisualOrderSet → VisualOrderSet。成员构成以属性为主（属性 3/5，方法 1/5），对外主要以状态读取接口暴露。继承链上的 VisualOrderSet 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/OrderSets/GenericVisualOrderSet.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsSoloOrder` | `public override bool IsSoloOrder` | 属性 |
| `StringId` | `public override string StringId` | 属性 |
| `IconId` | `public override string IconId` | 属性 |
| `GetName` | `public override TextObject GetName(OrderController orderController)` | 方法 |
| `GenericVisualOrderSet` | `public GenericVisualOrderSet(string stringId, TextObject name, bool useActiveOrderForIconId, bool useActiveOrderForName)` | 构造函数 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 SingleVisualOrderSet](../SingleVisualOrderSet)
