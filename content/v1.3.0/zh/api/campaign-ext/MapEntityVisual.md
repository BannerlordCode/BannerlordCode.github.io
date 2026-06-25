---
title: "MapEntityVisual"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapEntityVisual`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapEntityVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public abstract class MapEntityVisual`
**Base:** 无
**File:** `SandBox.View/Map/Visuals/MapEntityVisual.cs`

## 概述

`MapEntityVisual` 位于 `SandBox.View.Map.Visuals`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map.Visuals` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapScreen` | `public MapScreen MapScreen { get; }` |
| `InteractionPositionForPlayer` | `public abstract CampaignVec2 InteractionPositionForPlayer { get; }` |
| `AttachedTo` | `public abstract MapEntityVisual AttachedTo { get; set; }` |
| `IsMobileEntity` | `public virtual bool IsMobileEntity { get; set; }` |
| `CircleLocalFrame` | `public virtual MatrixFrame CircleLocalFrame { get; set; }` |
| `IsMainEntity` | `public virtual bool IsMainEntity { get; }` |
| `BearingRotation` | `public virtual float BearingRotation { get; }` |

## 主要方法

### OnMapClick
`public abstract bool OnMapClick(bool followModifierUsed)`

**用途 / Purpose:** 当 `map click` 事件触发时调用此方法。

### OnHover
`public abstract void OnHover()`

**用途 / Purpose:** 当 `hover` 事件触发时调用此方法。

### OnOpenEncyclopedia
`public abstract void OnOpenEncyclopedia()`

**用途 / Purpose:** 当 `open encyclopedia` 事件触发时调用此方法。

### IsVisibleOrFadingOut
`public abstract bool IsVisibleOrFadingOut()`

**用途 / Purpose:** 处理 `is visible or fading out` 相关逻辑。

### GetVisualPosition
`public abstract Vec3 GetVisualPosition()`

**用途 / Purpose:** 获取 `visual position` 的当前值。

### ReleaseResources
`public virtual void ReleaseResources()`

**用途 / Purpose:** 处理 `release resources` 相关逻辑。

### OnHoverEnd
`public virtual void OnHoverEnd()`

**用途 / Purpose:** 当 `hover end` 事件触发时调用此方法。

### OnTrackAction
`public virtual void OnTrackAction()`

**用途 / Purpose:** 当 `track action` 事件触发时调用此方法。

### IsEnemyOf
`public virtual bool IsEnemyOf(IFaction faction)`

**用途 / Purpose:** 处理 `is enemy of` 相关逻辑。

### IsAllyOf
`public virtual bool IsAllyOf(IFaction faction)`

**用途 / Purpose:** 处理 `is ally of` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomMapEntityVisual();
```

## 参见

- [完整类目录](../catalog)