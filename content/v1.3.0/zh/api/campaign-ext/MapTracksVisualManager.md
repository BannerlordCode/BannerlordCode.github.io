---
title: "MapTracksVisualManager"
description: "MapTracksVisualManager 的自动生成类参考。"
---
# MapTracksVisualManager

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public class MapTracksVisualManager : EntityVisualManagerBase<Track>`
**Base:** `EntityVisualManagerBase<Track>`
**File:** `SandBox.View/Map/Managers/MapTracksVisualManager.cs`

## 概述

`MapTracksVisualManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MapTracksVisualManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static MapTracksVisualManager Current { get; }` |

## 主要方法

### OnVisualTick
`public override void OnVisualTick(MapScreen screen, float realDt, float dt)`

**用途 / Purpose:** 在 visual tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapTracksVisualManager 实例
MapTracksVisualManager mapTracksVisualManager = ...;
mapTracksVisualManager.OnVisualTick(screen, 0, 0);
```

### OnVisualIntersected
`public override void OnVisualIntersected(Ray mouseRay, UIntPtr intersectedEntityIDs, Intersection intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, float closestDistanceSquared, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)`

**用途 / Purpose:** 在 visual intersected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapTracksVisualManager 实例
MapTracksVisualManager mapTracksVisualManager = ...;
mapTracksVisualManager.OnVisualIntersected(mouseRay, intersectedEntityIDs, intersectionInfos, 0, worldMouseNear, worldMouseFar, terrainIntersectionPoint, 0, hoveredVisual, selectedVisual);
```

### OnGameLoadFinished
`public override void OnGameLoadFinished()`

**用途 / Purpose:** 在 game load finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapTracksVisualManager 实例
MapTracksVisualManager mapTracksVisualManager = ...;
mapTracksVisualManager.OnGameLoadFinished();
```

### GetVisualOfEntity
`public override MapEntityVisual<Track> GetVisualOfEntity(Track entity)`

**用途 / Purpose:** 读取并返回当前对象中 visual of entity 的结果。

```csharp
// 先通过子系统 API 拿到 MapTracksVisualManager 实例
MapTracksVisualManager mapTracksVisualManager = ...;
var result = mapTracksVisualManager.GetVisualOfEntity(entity);
```

## 使用示例

```csharp
var manager = MapTracksVisualManager.Current;
```

## 参见

- [本区域目录](../)