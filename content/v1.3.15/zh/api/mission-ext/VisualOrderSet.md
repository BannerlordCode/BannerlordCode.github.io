---
title: "VisualOrderSet"
description: "VisualOrderSet 的自动生成类参考。"
---
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

**用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 VisualOrderSet 实例
VisualOrderSet visualOrderSet = ...;
var result = visualOrderSet.GetName(orderController);
```

### AddOrder
`public void AddOrder(VisualOrder order)`

**用途 / Purpose:** 将 order 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 VisualOrderSet 实例
VisualOrderSet visualOrderSet = ...;
visualOrderSet.AddOrder(order);
```

### RemoveOrder
`public void RemoveOrder(VisualOrder order)`

**用途 / Purpose:** 从当前容器或状态中移除 order。

```csharp
// 先通过子系统 API 拿到 VisualOrderSet 实例
VisualOrderSet visualOrderSet = ...;
visualOrderSet.RemoveOrder(order);
```

### ClearOrders
`public void ClearOrders()`

**用途 / Purpose:** 清空当前对象中的orders。

```csharp
// 先通过子系统 API 拿到 VisualOrderSet 实例
VisualOrderSet visualOrderSet = ...;
visualOrderSet.ClearOrders();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
VisualOrderSet instance = ...;
```

## 参见

- [本区域目录](../)