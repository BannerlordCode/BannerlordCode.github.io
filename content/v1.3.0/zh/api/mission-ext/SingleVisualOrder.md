---
title: "SingleVisualOrder"
description: "SingleVisualOrder 的自动生成类参考。"
---
# SingleVisualOrder

**Namespace:** TaleWorlds.MountAndBlade.View.VisualOrders.Orders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SingleVisualOrder : VisualOrder`
**Base:** `VisualOrder`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/SingleVisualOrder.cs`

## 概述

`SingleVisualOrder` 位于 `TaleWorlds.MountAndBlade.View.VisualOrders.Orders`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.VisualOrders.Orders` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ExecuteOrder
`public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**用途 / Purpose:** **用途 / Purpose:** 执行 order 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SingleVisualOrder 实例
SingleVisualOrder singleVisualOrder = ...;
singleVisualOrder.ExecuteOrder(orderController, executionParameters);
```

### GetName
`public override TextObject GetName(OrderController orderController)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 SingleVisualOrder 实例
SingleVisualOrder singleVisualOrder = ...;
var result = singleVisualOrder.GetName(orderController);
```

### IsTargeted
`public override bool IsTargeted()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 targeted 状态或条件。

```csharp
// 先通过子系统 API 拿到 SingleVisualOrder 实例
SingleVisualOrder singleVisualOrder = ...;
var result = singleVisualOrder.IsTargeted();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SingleVisualOrder singleVisualOrder = ...;
singleVisualOrder.ExecuteOrder(orderController, executionParameters);
```

## 参见

- [本区域目录](../)