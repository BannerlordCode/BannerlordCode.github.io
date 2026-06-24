<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FallbackVisualOrder`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# FallbackVisualOrder

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FallbackVisualOrder : VisualOrder`
**Base:** `VisualOrder`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/MovementOrders/FallbackVisualOrder.cs`

## 概述

`FallbackVisualOrder` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetName
`public override TextObject GetName(OrderController orderController)`

**用途 / Purpose:** 获取 `name` 的当前值。

### ExecuteOrder
`public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)`

**用途 / Purpose:** 执行 `order` 操作或流程。

### IsTargeted
`public override bool IsTargeted()`

**用途 / Purpose:** 处理 `is targeted` 相关逻辑。

## 使用示例

```csharp
var value = new FallbackVisualOrder();
value.GetName(orderController);
```

## 参见

- [完整类目录](../catalog)