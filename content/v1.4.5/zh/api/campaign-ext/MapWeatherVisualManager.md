---
title: "MapWeatherVisualManager"
description: "MapWeatherVisualManager 的自动生成类参考。"
---
# MapWeatherVisualManager

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public class MapWeatherVisualManager : EntityVisualManagerBase<WeatherNode>`
**Base:** `EntityVisualManagerBase<WeatherNode>`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map.Managers/MapWeatherVisualManager.cs`

## 概述

`MapWeatherVisualManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MapWeatherVisualManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnVisualTick
`public override void OnVisualTick(MapScreen screen, float realDt, float dt)`

**用途 / Purpose:** 在 「visual tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapWeatherVisualManager 实例
MapWeatherVisualManager mapWeatherVisualManager = ...;
mapWeatherVisualManager.OnVisualTick(screen, 0, 0);
```

### SetRainData
`public void SetRainData(int dataIndex, byte value)`

**用途 / Purpose:** 为 「rain data」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapWeatherVisualManager 实例
MapWeatherVisualManager mapWeatherVisualManager = ...;
mapWeatherVisualManager.SetRainData(0, 0);
```

### SetCloudData
`public void SetCloudData(int dataIndex, byte value)`

**用途 / Purpose:** 为 「cloud data」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapWeatherVisualManager 实例
MapWeatherVisualManager mapWeatherVisualManager = ...;
mapWeatherVisualManager.SetCloudData(0, 0);
```

### GetRainPrefabFromPool
`public GameEntity GetRainPrefabFromPool()`

**用途 / Purpose:** 读取并返回当前对象中 「rain prefab from pool」 的结果。

```csharp
// 先通过子系统 API 拿到 MapWeatherVisualManager 实例
MapWeatherVisualManager mapWeatherVisualManager = ...;
var result = mapWeatherVisualManager.GetRainPrefabFromPool();
```

### GetBlizzardPrefabFromPool
`public GameEntity GetBlizzardPrefabFromPool()`

**用途 / Purpose:** 读取并返回当前对象中 「blizzard prefab from pool」 的结果。

```csharp
// 先通过子系统 API 拿到 MapWeatherVisualManager 实例
MapWeatherVisualManager mapWeatherVisualManager = ...;
var result = mapWeatherVisualManager.GetBlizzardPrefabFromPool();
```

### ReleaseRainPrefab
`public void ReleaseRainPrefab(GameEntity prefab)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapWeatherVisualManager 实例
MapWeatherVisualManager mapWeatherVisualManager = ...;
mapWeatherVisualManager.ReleaseRainPrefab(prefab);
```

### ReleaseBlizzardPrefab
`public void ReleaseBlizzardPrefab(GameEntity prefab)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapWeatherVisualManager 实例
MapWeatherVisualManager mapWeatherVisualManager = ...;
mapWeatherVisualManager.ReleaseBlizzardPrefab(prefab);
```

### GetVisualOfEntity
`public override MapEntityVisual<WeatherNode> GetVisualOfEntity(WeatherNode entity)`

**用途 / Purpose:** 读取并返回当前对象中 「visual of entity」 的结果。

```csharp
// 先通过子系统 API 拿到 MapWeatherVisualManager 实例
MapWeatherVisualManager mapWeatherVisualManager = ...;
var result = mapWeatherVisualManager.GetVisualOfEntity(entity);
```

## 使用示例

```csharp
var manager = MapWeatherVisualManager.Current;
```

## 参见

- [本区域目录](../)