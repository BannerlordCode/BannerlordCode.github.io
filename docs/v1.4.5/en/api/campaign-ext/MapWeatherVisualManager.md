<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapWeatherVisualManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapWeatherVisualManager

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public class MapWeatherVisualManager : EntityVisualManagerBase<WeatherNode>`
**Base:** `EntityVisualManagerBase<WeatherNode>`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map.Managers/MapWeatherVisualManager.cs`

## Overview

`MapWeatherVisualManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MapWeatherVisualManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnVisualTick
`public override void OnVisualTick(MapScreen screen, float realDt, float dt)`

**Purpose:** Called when the `visual tick` event is raised.

### SetRainData
`public void SetRainData(int dataIndex, byte value)`

**Purpose:** Sets the value or state of `rain data`.

### SetCloudData
`public void SetCloudData(int dataIndex, byte value)`

**Purpose:** Sets the value or state of `cloud data`.

### GetRainPrefabFromPool
`public GameEntity GetRainPrefabFromPool()`

**Purpose:** Gets the current value of `rain prefab from pool`.

### GetBlizzardPrefabFromPool
`public GameEntity GetBlizzardPrefabFromPool()`

**Purpose:** Gets the current value of `blizzard prefab from pool`.

### ReleaseRainPrefab
`public void ReleaseRainPrefab(GameEntity prefab)`

**Purpose:** Handles logic related to `release rain prefab`.

### ReleaseBlizzardPrefab
`public void ReleaseBlizzardPrefab(GameEntity prefab)`

**Purpose:** Handles logic related to `release blizzard prefab`.

### GetVisualOfEntity
`public override MapEntityVisual<WeatherNode> GetVisualOfEntity(WeatherNode entity)`

**Purpose:** Gets the current value of `visual of entity`.

## Usage Example

```csharp
var manager = MapWeatherVisualManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)