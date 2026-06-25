---
title: "OrderSetVM"
description: "OrderSetVM 的自动生成类参考。"
---
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

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 OrderSetVM 实例
OrderSetVM orderSetVM = ...;
orderSetVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 OrderSetVM 实例
OrderSetVM orderSetVM = ...;
orderSetVM.OnFinalize();
```

### ExecuteSelect
`public void ExecuteSelect()`

**用途 / Purpose:** 执行 「select」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 OrderSetVM 实例
OrderSetVM orderSetVM = ...;
orderSetVM.ExecuteSelect();
```

### ExecuteDeSelect
`public void ExecuteDeSelect()`

**用途 / Purpose:** 执行 「de select」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 OrderSetVM 实例
OrderSetVM orderSetVM = ...;
orderSetVM.ExecuteDeSelect();
```

### OnOrderExecuted
`public void OnOrderExecuted(OrderItemVM order)`

**用途 / Purpose:** 在 「order executed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 OrderSetVM 实例
OrderSetVM orderSetVM = ...;
orderSetVM.OnOrderExecuted(order);
```

### RefreshOrders
`public void RefreshOrders()`

**用途 / Purpose:** 使 「orders」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 OrderSetVM 实例
OrderSetVM orderSetVM = ...;
orderSetVM.RefreshOrders();
```

### RefreshOrderStates
`public void RefreshOrderStates()`

**用途 / Purpose:** 使 「order states」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 OrderSetVM 实例
OrderSetVM orderSetVM = ...;
orderSetVM.RefreshOrderStates();
```

### UpdateCanUseShortcuts
`public void UpdateCanUseShortcuts(bool value)`

**用途 / Purpose:** 重新计算并更新 「can use shortcuts」 的最新表示。

```csharp
// 先通过子系统 API 拿到 OrderSetVM 实例
OrderSetVM orderSetVM = ...;
orderSetVM.UpdateCanUseShortcuts(false);
```

### OnOrderSetSelectionStateChangedDelegate
`public delegate void OnOrderSetSelectionStateChangedDelegate(OrderSetVM orderSet, bool isSelected)`

**用途 / Purpose:** 在 「order set selection state changed delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 OrderSetVM 实例
OrderSetVM orderSetVM = ...;
orderSetVM.OnOrderSetSelectionStateChangedDelegate(orderSet, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
OrderSetVM orderSetVM = ...;
orderSetVM.RefreshValues();
```

## 参见

- [本区域目录](../)