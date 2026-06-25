---
title: "MapWeatherVisualManager"
description: "Auto-generated class reference for MapWeatherVisualManager."
---
# MapWeatherVisualManager

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public class MapWeatherVisualManager : EntityVisualManagerBase<WeatherNode>`
**Base:** `EntityVisualManagerBase<WeatherNode>`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map.Managers/MapWeatherVisualManager.cs`

## Overview

`MapWeatherVisualManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MapWeatherVisualManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnVisualTick
`public override void OnVisualTick(MapScreen screen, float realDt, float dt)`

**Purpose:** **Purpose:** Invoked when the visual tick event is raised.

```csharp
// Obtain an instance of MapWeatherVisualManager from the subsystem API first
MapWeatherVisualManager mapWeatherVisualManager = ...;
mapWeatherVisualManager.OnVisualTick(screen, 0, 0);
```

### SetRainData
`public void SetRainData(int dataIndex, byte value)`

**Purpose:** **Purpose:** Assigns a new value to rain data and updates the object's internal state.

```csharp
// Obtain an instance of MapWeatherVisualManager from the subsystem API first
MapWeatherVisualManager mapWeatherVisualManager = ...;
mapWeatherVisualManager.SetRainData(0, 0);
```

### SetCloudData
`public void SetCloudData(int dataIndex, byte value)`

**Purpose:** **Purpose:** Assigns a new value to cloud data and updates the object's internal state.

```csharp
// Obtain an instance of MapWeatherVisualManager from the subsystem API first
MapWeatherVisualManager mapWeatherVisualManager = ...;
mapWeatherVisualManager.SetCloudData(0, 0);
```

### GetRainPrefabFromPool
`public GameEntity GetRainPrefabFromPool()`

**Purpose:** **Purpose:** Reads and returns the rain prefab from pool value held by the this instance.

```csharp
// Obtain an instance of MapWeatherVisualManager from the subsystem API first
MapWeatherVisualManager mapWeatherVisualManager = ...;
var result = mapWeatherVisualManager.GetRainPrefabFromPool();
```

### GetBlizzardPrefabFromPool
`public GameEntity GetBlizzardPrefabFromPool()`

**Purpose:** **Purpose:** Reads and returns the blizzard prefab from pool value held by the this instance.

```csharp
// Obtain an instance of MapWeatherVisualManager from the subsystem API first
MapWeatherVisualManager mapWeatherVisualManager = ...;
var result = mapWeatherVisualManager.GetBlizzardPrefabFromPool();
```

### ReleaseRainPrefab
`public void ReleaseRainPrefab(GameEntity prefab)`

**Purpose:** **Purpose:** Executes the ReleaseRainPrefab logic.

```csharp
// Obtain an instance of MapWeatherVisualManager from the subsystem API first
MapWeatherVisualManager mapWeatherVisualManager = ...;
mapWeatherVisualManager.ReleaseRainPrefab(prefab);
```

### ReleaseBlizzardPrefab
`public void ReleaseBlizzardPrefab(GameEntity prefab)`

**Purpose:** **Purpose:** Executes the ReleaseBlizzardPrefab logic.

```csharp
// Obtain an instance of MapWeatherVisualManager from the subsystem API first
MapWeatherVisualManager mapWeatherVisualManager = ...;
mapWeatherVisualManager.ReleaseBlizzardPrefab(prefab);
```

### GetVisualOfEntity
`public override MapEntityVisual<WeatherNode> GetVisualOfEntity(WeatherNode entity)`

**Purpose:** **Purpose:** Reads and returns the visual of entity value held by the this instance.

```csharp
// Obtain an instance of MapWeatherVisualManager from the subsystem API first
MapWeatherVisualManager mapWeatherVisualManager = ...;
var result = mapWeatherVisualManager.GetVisualOfEntity(entity);
```

## Usage Example

```csharp
var manager = MapWeatherVisualManager.Current;
```

## See Also

- [Area Index](../)