---
title: "VisualOrderFactory"
description: "VisualOrderFactory 的自动生成类参考。"
---
# VisualOrderFactory

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class VisualOrderFactory`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual/VisualOrderFactory.cs`

## 概述

`VisualOrderFactory` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterProvider
`public static void RegisterProvider(VisualOrderProvider provider)`

**用途 / Purpose:** **用途 / Purpose:** 将provider注册到当前系统，以便后续监听或分发。

```csharp
// 静态调用，不需要实例
VisualOrderFactory.RegisterProvider(provider);
```

### UnregisterProvider
`public static void UnregisterProvider(VisualOrderProvider provider)`

**用途 / Purpose:** **用途 / Purpose:** 从当前系统中注销provider。

```csharp
// 静态调用，不需要实例
VisualOrderFactory.UnregisterProvider(provider);
```

### GetOrders
`public static MBReadOnlyList<VisualOrderSet> GetOrders()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 orders 的结果。

```csharp
// 静态调用，不需要实例
VisualOrderFactory.GetOrders();
```

## 使用示例

```csharp
VisualOrderFactory.RegisterProvider(provider);
```

## 参见

- [本区域目录](../)