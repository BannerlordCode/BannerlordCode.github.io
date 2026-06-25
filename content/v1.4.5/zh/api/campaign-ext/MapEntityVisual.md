---
title: "MapEntityVisual"
description: "MapEntityVisual 的自动生成类参考。"
---
# MapEntityVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public abstract class MapEntityVisual`
**Base:** 无
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map.Visuals/MapEntityVisual.cs`

## 概述

`MapEntityVisual` 位于 `SandBox.View.Map.Visuals`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map.Visuals` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `InteractionPositionForPlayer` | `public abstract CampaignVec2 InteractionPositionForPlayer { get; }` |
| `AttachedTo` | `public abstract MapEntityVisual AttachedTo { get; set; }` |
| `CircleLocalFrame` | `public virtual MatrixFrame CircleLocalFrame { get; set; }` |
| `BearingRotation` | `public virtual float BearingRotation { get; }` |

## 主要方法

### OnMapClick
`public abstract bool OnMapClick(bool followModifierUsed)`

**用途 / Purpose:** 在 「map click」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEntityVisual 实例
MapEntityVisual mapEntityVisual = ...;
var result = mapEntityVisual.OnMapClick(false);
```

### OnHover
`public abstract void OnHover()`

**用途 / Purpose:** 在 「hover」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEntityVisual 实例
MapEntityVisual mapEntityVisual = ...;
mapEntityVisual.OnHover();
```

### OnOpenEncyclopedia
`public abstract void OnOpenEncyclopedia()`

**用途 / Purpose:** 在 「open encyclopedia」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEntityVisual 实例
MapEntityVisual mapEntityVisual = ...;
mapEntityVisual.OnOpenEncyclopedia();
```

### IsVisibleOrFadingOut
`public abstract bool IsVisibleOrFadingOut()`

**用途 / Purpose:** 判断当前对象是否处于 「visible or fading out」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MapEntityVisual 实例
MapEntityVisual mapEntityVisual = ...;
var result = mapEntityVisual.IsVisibleOrFadingOut();
```

### GetVisualPosition
`public abstract Vec3 GetVisualPosition()`

**用途 / Purpose:** 读取并返回当前对象中 「visual position」 的结果。

```csharp
// 先通过子系统 API 拿到 MapEntityVisual 实例
MapEntityVisual mapEntityVisual = ...;
var result = mapEntityVisual.GetVisualPosition();
```

### ReleaseResources
`public virtual void ReleaseResources()`

**用途 / Purpose:** 处理与 「release resources」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MapEntityVisual 实例
MapEntityVisual mapEntityVisual = ...;
mapEntityVisual.ReleaseResources();
```

### OnHoverEnd
`public virtual void OnHoverEnd()`

**用途 / Purpose:** 在 「hover end」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEntityVisual 实例
MapEntityVisual mapEntityVisual = ...;
mapEntityVisual.OnHoverEnd();
```

### OnTrackAction
`public virtual void OnTrackAction()`

**用途 / Purpose:** 在 「track action」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEntityVisual 实例
MapEntityVisual mapEntityVisual = ...;
mapEntityVisual.OnTrackAction();
```

### IsEnemyOf
`public virtual bool IsEnemyOf(IFaction faction)`

**用途 / Purpose:** 判断当前对象是否处于 「enemy of」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MapEntityVisual 实例
MapEntityVisual mapEntityVisual = ...;
var result = mapEntityVisual.IsEnemyOf(faction);
```

### IsAllyOf
`public virtual bool IsAllyOf(IFaction faction)`

**用途 / Purpose:** 判断当前对象是否处于 「ally of」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MapEntityVisual 实例
MapEntityVisual mapEntityVisual = ...;
var result = mapEntityVisual.IsAllyOf(faction);
```

### IsInSameFaction
`public virtual bool IsInSameFaction(IFaction faction)`

**用途 / Purpose:** 判断当前对象是否处于 「in same faction」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MapEntityVisual 实例
MapEntityVisual mapEntityVisual = ...;
var result = mapEntityVisual.IsInSameFaction(faction);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MapEntityVisual instance = ...;
```

## 参见

- [本区域目录](../)