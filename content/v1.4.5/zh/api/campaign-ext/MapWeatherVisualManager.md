---
title: "MapWeatherVisualManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapWeatherVisualManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapWeatherVisualManager

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public class MapWeatherVisualManager : EntityVisualManagerBase<WeatherNode>`
**Base:** `EntityVisualManagerBase<WeatherNode>`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map.Managers/MapWeatherVisualManager.cs`

## 概述

`MapWeatherVisualManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MapWeatherVisualManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnVisualTick
`public override void OnVisualTick(MapScreen screen, float realDt, float dt)`

**用途 / Purpose:** 当 `visual tick` 事件触发时调用此方法。

### SetRainData
`public void SetRainData(int dataIndex, byte value)`

**用途 / Purpose:** 设置 `rain data` 的值或状态。

### SetCloudData
`public void SetCloudData(int dataIndex, byte value)`

**用途 / Purpose:** 设置 `cloud data` 的值或状态。

### GetRainPrefabFromPool
`public GameEntity GetRainPrefabFromPool()`

**用途 / Purpose:** 获取 `rain prefab from pool` 的当前值。

### GetBlizzardPrefabFromPool
`public GameEntity GetBlizzardPrefabFromPool()`

**用途 / Purpose:** 获取 `blizzard prefab from pool` 的当前值。

### ReleaseRainPrefab
`public void ReleaseRainPrefab(GameEntity prefab)`

**用途 / Purpose:** 处理 `release rain prefab` 相关逻辑。

### ReleaseBlizzardPrefab
`public void ReleaseBlizzardPrefab(GameEntity prefab)`

**用途 / Purpose:** 处理 `release blizzard prefab` 相关逻辑。

### GetVisualOfEntity
`public override MapEntityVisual<WeatherNode> GetVisualOfEntity(WeatherNode entity)`

**用途 / Purpose:** 获取 `visual of entity` 的当前值。

## 使用示例

```csharp
var manager = MapWeatherVisualManager.Current;
```

## 参见

- [完整类目录](../catalog)