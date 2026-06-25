---
title: "SingleVisualOrderSet"
description: "SingleVisualOrderSet 的自动生成类参考。"
---
# SingleVisualOrderSet

**Namespace:** TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SingleVisualOrderSet : VisualOrderSet`
**Base:** `VisualOrderSet`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/OrderSets/SingleVisualOrderSet.cs`

## 概述

`SingleVisualOrderSet` 位于 `TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSoloOrder` | `public override bool IsSoloOrder { get; }` |
| `StringId` | `public override string StringId { get; }` |
| `IconId` | `public override string IconId { get; }` |

## 主要方法

### GetName
`public override TextObject GetName(OrderController orderController)`

**用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 SingleVisualOrderSet 实例
SingleVisualOrderSet singleVisualOrderSet = ...;
var result = singleVisualOrderSet.GetName(orderController);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SingleVisualOrderSet singleVisualOrderSet = ...;
singleVisualOrderSet.GetName(orderController);
```

## 参见

- [本区域目录](../)