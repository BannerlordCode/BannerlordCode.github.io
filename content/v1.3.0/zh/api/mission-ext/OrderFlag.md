---
title: "OrderFlag"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderFlag`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# OrderFlag

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderFlag`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderFlag.cs`

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
| `Frame` | `public MatrixFrame Frame { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |

## 主要方法

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### SetArrowVisibility
`public void SetArrowVisibility(bool isVisible, Vec2 arrowDirection)`

**用途 / Purpose:** 设置 `arrow visibility` 的值或状态。

### IsPositionOnValidGround
`public virtual bool IsPositionOnValidGround(WorldPosition worldPosition)`

**用途 / Purpose:** 处理 `is position on valid ground` 相关逻辑。

### IsOrderPositionValid
`public static bool IsOrderPositionValid(WorldPosition orderPosition)`

**用途 / Purpose:** 处理 `is order position valid` 相关逻辑。

### SetWidthVisibility
`public void SetWidthVisibility(bool isVisible, float width)`

**用途 / Purpose:** 设置 `width visibility` 的值或状态。

## 使用示例

```csharp
var value = new OrderFlag();
value.Tick(0);
```

## 参见

- [完整类目录](../catalog)