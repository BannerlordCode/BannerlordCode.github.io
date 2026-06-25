---
title: "VisualOrder"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VisualOrder`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `name` 的当前值。

### IsTargeted
`public abstract bool IsTargeted()`

**用途 / Purpose:** 处理 `is targeted` 相关逻辑。

### ExecuteOrder
`public abstract void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**用途 / Purpose:** 执行 `order` 操作或流程。

### BeforeExecuteOrder
`public virtual void BeforeExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**用途 / Purpose:** 处理 `before execute order` 相关逻辑。

### AfterExecuteOrder
`public virtual void AfterExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**用途 / Purpose:** 处理 `after execute order` 相关逻辑。

### GetFormationHasOrder
`public bool GetFormationHasOrder(Formation formation)`

**用途 / Purpose:** 获取 `formation has order` 的当前值。

### GetActiveState
`public OrderState GetActiveState(OrderController orderController)`

**用途 / Purpose:** 获取 `active state` 的当前值。

## 使用示例

```csharp
var implementation = new CustomVisualOrder();
```

## 参见

- [完整类目录](../catalog)