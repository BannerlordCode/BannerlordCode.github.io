<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapTracksVisualManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapTracksVisualManager

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public class MapTracksVisualManager : EntityVisualManagerBase<Track>`
**Base:** `EntityVisualManagerBase<Track>`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map.Managers/MapTracksVisualManager.cs`

## 概述

`MapTracksVisualManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MapTracksVisualManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnVisualTick
`public override void OnVisualTick(MapScreen screen, float realDt, float dt)`

**用途 / Purpose:** 当 `visual tick` 事件触发时调用此方法。

### OnVisualIntersected
`public override bool OnVisualIntersected(Ray mouseRay, UIntPtr intersectedEntityIDs, Intersection intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)`

**用途 / Purpose:** 当 `visual intersected` 事件触发时调用此方法。

### OnGameLoadFinished
`public override void OnGameLoadFinished()`

**用途 / Purpose:** 当 `game load finished` 事件触发时调用此方法。

### GetVisualOfEntity
`public override MapEntityVisual<Track> GetVisualOfEntity(Track entity)`

**用途 / Purpose:** 获取 `visual of entity` 的当前值。

## 使用示例

```csharp
var manager = MapTracksVisualManager.Current;
```

## 参见

- [完整类目录](../catalog)