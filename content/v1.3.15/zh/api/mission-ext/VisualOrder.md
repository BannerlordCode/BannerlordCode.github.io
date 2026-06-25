---
title: "VisualOrder"
description: "VisualOrder 的自动生成类参考。"
---
# VisualOrder

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class VisualOrder`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrder.cs`

## 概述

`VisualOrder` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `StringId` | `public string StringId { get; }` |
| `IconId` | `public string IconId { get; }` |

## 主要方法

### GetName
`public abstract TextObject GetName(OrderController orderController)`

**用途 / Purpose:** 读取并返回当前对象中 「name」 的结果。

```csharp
// 先通过子系统 API 拿到 VisualOrder 实例
VisualOrder visualOrder = ...;
var result = visualOrder.GetName(orderController);
```

### IsTargeted
`public abstract bool IsTargeted()`

**用途 / Purpose:** 判断当前对象是否处于 「targeted」 状态或条件。

```csharp
// 先通过子系统 API 拿到 VisualOrder 实例
VisualOrder visualOrder = ...;
var result = visualOrder.IsTargeted();
```

### ExecuteOrder
`public abstract void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**用途 / Purpose:** 执行 「order」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 VisualOrder 实例
VisualOrder visualOrder = ...;
visualOrder.ExecuteOrder(orderController, executionParameters);
```

### BeforeExecuteOrder
`public virtual void BeforeExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 VisualOrder 实例
VisualOrder visualOrder = ...;
visualOrder.BeforeExecuteOrder(orderController, executionParameters);
```

### AfterExecuteOrder
`public virtual void AfterExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 VisualOrder 实例
VisualOrder visualOrder = ...;
visualOrder.AfterExecuteOrder(orderController, executionParameters);
```

### GetFormationHasOrder
`public bool GetFormationHasOrder(Formation formation)`

**用途 / Purpose:** 读取并返回当前对象中 「formation has order」 的结果。

```csharp
// 先通过子系统 API 拿到 VisualOrder 实例
VisualOrder visualOrder = ...;
var result = visualOrder.GetFormationHasOrder(formation);
```

### GetActiveState
`public OrderState GetActiveState(OrderController orderController)`

**用途 / Purpose:** 读取并返回当前对象中 「active state」 的结果。

```csharp
// 先通过子系统 API 拿到 VisualOrder 实例
VisualOrder visualOrder = ...;
var result = visualOrder.GetActiveState(orderController);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
VisualOrder instance = ...;
```

## 参见

- [本区域目录](../)