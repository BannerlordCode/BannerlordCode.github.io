---
title: "VisualOrderProvider"
description: "VisualOrderProvider 的自动生成类参考。"
---
# VisualOrderProvider

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class VisualOrderProvider`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual/VisualOrderProvider.cs`

## 概述

`VisualOrderProvider` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsAvailable
`public abstract bool IsAvailable()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 available 状态或条件。

```csharp
// 先通过子系统 API 拿到 VisualOrderProvider 实例
VisualOrderProvider visualOrderProvider = ...;
var result = visualOrderProvider.IsAvailable();
```

### GetOrders
`public abstract MBReadOnlyList<VisualOrderSet> GetOrders()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 orders 的结果。

```csharp
// 先通过子系统 API 拿到 VisualOrderProvider 实例
VisualOrderProvider visualOrderProvider = ...;
var result = visualOrderProvider.GetOrders();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
VisualOrderProvider instance = ...;
```

## 参见

- [本区域目录](../)