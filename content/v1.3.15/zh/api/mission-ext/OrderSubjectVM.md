---
title: "OrderSubjectVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderSubjectVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderSubjectVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class OrderSubjectVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSubjectVM.cs`

## 概述

`OrderSubjectVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSelectable` | `public bool IsSelectable { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsSelectionHighlightActive` | `public bool IsSelectionHighlightActive { get; set; }` |
| `ShowSelectionInputs` | `public bool ShowSelectionInputs { get; set; }` |
| `BehaviorType` | `public int BehaviorType { get; set; }` |
| `UnderAttackOfType` | `public int UnderAttackOfType { get; set; }` |
| `SelectionText` | `public string SelectionText { get; set; }` |
| `ApplySelectionKey` | `public InputKeyItemVM ApplySelectionKey { get; set; }` |
| `ToggleSelectionKey` | `public InputKeyItemVM ToggleSelectionKey { get; set; }` |
| `ActiveOrders` | `public MBBindingList<OrderItemVM> ActiveOrders { get; set; }` |

## 主要方法

### AddActiveOrder
`public void AddActiveOrder(OrderItemVM order)`

**用途 / Purpose:** 向当前集合/状态中添加 `active order`。

### RemoveActiveOrder
`public void RemoveActiveOrder(OrderItemVM order)`

**用途 / Purpose:** 从当前集合/状态中移除 `active order`。

### ClearActiveOrders
`public void ClearActiveOrders()`

**用途 / Purpose:** 处理 `clear active orders` 相关逻辑。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

## 使用示例

```csharp
var implementation = new CustomOrderSubjectVM();
```

## 参见

- [完整类目录](../catalog)