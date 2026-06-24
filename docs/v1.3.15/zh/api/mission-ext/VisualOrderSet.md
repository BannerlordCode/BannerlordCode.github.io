<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VisualOrderSet`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VisualOrderSet

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class VisualOrderSet`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrderSet.cs`

## 概述

`VisualOrderSet` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Orders` | `public MBReadOnlyList<VisualOrder> Orders { get; }` |
| `SoloOrder` | `public VisualOrder SoloOrder { get; }` |
| `IsSoloOrder` | `public abstract bool IsSoloOrder { get; }` |
| `StringId` | `public abstract string StringId { get; }` |
| `IconId` | `public abstract string IconId { get; }` |

## 主要方法

### GetName
`public abstract TextObject GetName(OrderController orderController)`

**用途 / Purpose:** 获取 `name` 的当前值。

### AddOrder
`public void AddOrder(VisualOrder order)`

**用途 / Purpose:** 向当前集合/状态中添加 `order`。

### RemoveOrder
`public void RemoveOrder(VisualOrder order)`

**用途 / Purpose:** 从当前集合/状态中移除 `order`。

### ClearOrders
`public void ClearOrders()`

**用途 / Purpose:** 处理 `clear orders` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomVisualOrderSet();
```

## 参见

- [完整类目录](../catalog)