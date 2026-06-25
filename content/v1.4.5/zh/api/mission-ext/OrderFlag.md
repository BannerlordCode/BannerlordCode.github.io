---
title: "OrderFlag"
description: "OrderFlag 的自动生成类参考。"
---
# OrderFlag

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderFlag`
**Base:** 无
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Order/OrderFlag.cs`

## 概述

`OrderFlag` 位于 `TaleWorlds.MountAndBlade.View.MissionViews.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.MissionViews.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `FocusedOrderableObject` | `public IOrderable FocusedOrderableObject { get; }` |
| `LatestUpdateFrameNo` | `public int LatestUpdateFrameNo { get; }` |
| `Position` | `public Vec3 Position { get; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |

## 主要方法

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 OrderFlag 实例
OrderFlag orderFlag = ...;
orderFlag.Tick(0);
```

### SetArrowVisibility
`public void SetArrowVisibility(bool isVisible, Vec2 arrowDirection)`

**用途 / Purpose:** **用途 / Purpose:** 为 arrow visibility 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OrderFlag 实例
OrderFlag orderFlag = ...;
orderFlag.SetArrowVisibility(false, arrowDirection);
```

### IsPositionOnValidGround
`public virtual bool IsPositionOnValidGround(WorldPosition worldPosition)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 position on valid ground 状态或条件。

```csharp
// 先通过子系统 API 拿到 OrderFlag 实例
OrderFlag orderFlag = ...;
var result = orderFlag.IsPositionOnValidGround(worldPosition);
```

### IsOrderPositionValid
`public static bool IsOrderPositionValid(WorldPosition orderPosition)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 order position valid 状态或条件。

```csharp
// 静态调用，不需要实例
OrderFlag.IsOrderPositionValid(orderPosition);
```

### SetWidthVisibility
`public void SetWidthVisibility(bool isVisible, float width)`

**用途 / Purpose:** **用途 / Purpose:** 为 width visibility 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OrderFlag 实例
OrderFlag orderFlag = ...;
orderFlag.SetWidthVisibility(false, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
OrderFlag orderFlag = ...;
orderFlag.Tick(0);
```

## 参见

- [本区域目录](../)