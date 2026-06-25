---
title: "OrderSetVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderSetVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderSetVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderSetVM : OrderItemBaseVM`
**Base:** `OrderItemBaseVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderSetVM.cs`

## 概述

`OrderSetVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HasSingleOrder` | `public bool HasSingleOrder { get; }` |
| `OrderSet` | `public VisualOrderSet OrderSet { get; }` |
| `SelectedOrderText` | `public string SelectedOrderText { get; set; }` |
| `SoloOrder` | `public OrderItemVM SoloOrder { get; set; }` |
| `Orders` | `public MBBindingList<OrderItemVM> Orders { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### ExecuteSelect
`public void ExecuteSelect()`

**用途 / Purpose:** 执行 `select` 操作或流程。

### ExecuteDeSelect
`public void ExecuteDeSelect()`

**用途 / Purpose:** 执行 `de select` 操作或流程。

### OnOrderExecuted
`public void OnOrderExecuted(OrderItemVM order)`

**用途 / Purpose:** 当 `order executed` 事件触发时调用此方法。

### RefreshOrders
`public void RefreshOrders()`

**用途 / Purpose:** 刷新 `orders` 的显示或缓存。

### RefreshOrderStates
`public void RefreshOrderStates()`

**用途 / Purpose:** 刷新 `order states` 的显示或缓存。

### UpdateCanUseShortcuts
`public void UpdateCanUseShortcuts(bool value)`

**用途 / Purpose:** 更新 `can use shortcuts` 的状态或数据。

### OnOrderSetSelectionStateChangedDelegate
`public delegate void OnOrderSetSelectionStateChangedDelegate(OrderSetVM orderSet, bool isSelected)`

**用途 / Purpose:** 当 `order set selection state changed delegate` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new OrderSetVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)