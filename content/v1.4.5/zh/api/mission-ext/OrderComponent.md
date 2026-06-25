---
title: "OrderComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# OrderComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class OrderComponent`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/OrderComponent.cs`

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

**用途 / Purpose:** 获取 `direction` 的当前值。

## 使用示例

```csharp
var implementation = new CustomOrderComponent();
```

## 参见

- [完整类目录](../catalog)