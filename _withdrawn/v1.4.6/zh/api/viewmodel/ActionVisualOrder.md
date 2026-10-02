---
title: "ActionVisualOrder"
description: "ActionVisualOrder：TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual 的 public 类，继承 VisualOrder；公开成员 7 个（方法 5、属性 0、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/ActionVisualOrder.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ActionVisualOrder

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public sealed class ActionVisualOrder : VisualOrder`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/ActionVisualOrder.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

ActionVisualOrder 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/ActionVisualOrder.cs。它是一个 public 类（sealed），实现/继承 VisualOrder，继承链为 ActionVisualOrder → VisualOrder。public/protected 成员共 7 个：5 方法、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ActionVisualOrder 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`，继承链 ActionVisualOrder → VisualOrder。成员构成以方法为主（方法 5/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/ActionVisualOrder.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ActionVisualOrder` | `public ActionVisualOrder(string iconId, ActionVisualOrder.OrderActionDelegate orderAction, TextObject name) : base(iconId)` | 构造函数 |
| `GetName` | `public override TextObject GetName(OrderController orderController)` | 方法 |
| `IsTargeted` | `public override bool IsTargeted()` | 方法 |
| `ExecuteOrder` | `public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | 方法 |
| `OnGetFormationHasOrder` | `protected override bool? OnGetFormationHasOrder(Formation formation)` | 方法 |
| `OrderActionDelegate` | `public delegate void OrderActionDelegate(OrderController orderController, VisualOrderExecutionParameters executionParameters);` | 方法 |
| `OrderActionDelegate` | `public delegate void OrderActionDelegate(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 VisualOrder](../VisualOrder/)
- [同命名空间 OrderState](../OrderState/)
- [同命名空间 ReturnVisualOrder](../ReturnVisualOrder/)
- [同命名空间 TransferTroopsVisualOrder](../TransferTroopsVisualOrder/)
- [同命名空间 VisualOrder](../VisualOrder/)
