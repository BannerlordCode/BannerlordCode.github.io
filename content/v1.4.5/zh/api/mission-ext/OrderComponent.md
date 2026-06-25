---
title: "OrderComponent"
description: "OrderComponent 的自动生成类参考。"
---
# OrderComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class OrderComponent`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/OrderComponent.cs`

## 概述

`OrderComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `OrderComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `OrderType` | `public abstract OrderType OrderType { get; }` |

## 主要方法

### GetDirection
`public Vec2 GetDirection(Formation f)`

**用途 / Purpose:** 读取并返回当前对象中 「direction」 的结果。

```csharp
// 先通过子系统 API 拿到 OrderComponent 实例
OrderComponent orderComponent = ...;
var result = orderComponent.GetDirection(f);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
OrderComponent instance = ...;
```

## 参见

- [本区域目录](../)