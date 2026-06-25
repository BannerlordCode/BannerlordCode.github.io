---
title: "MapWeatherModel"
description: "Auto-generated class reference for MapWeatherModel."
---
# MapWeatherModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapWeatherModel : MBGameModel<MapWeatherModel>`
**Base:** `MBGameModel<MapWeatherModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/MapWeatherModel.cs`

## Overview

`MapWeatherModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MapWeatherModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `WeatherUpdateFrequency` | `public abstract CampaignTime WeatherUpdateFrequency { get; }` |
| `WeatherUpdatePeriod` | `public abstract CampaignTime WeatherUpdatePeriod { get; }` |

## Key Methods

### GetInterpolatedAtmosphereState
`public abstract AtmosphereState GetInterpolatedAtmosphereState(CampaignTime timeOfYear, Vec3 pos)`

**Purpose:** **Purpose:** Reads and returns the interpolated atmosphere state value held by the this instance.

```csharp
// Obtain an instance of MapWeatherModel from the subsystem API first
MapWeatherModel mapWeatherModel = ...;
var result = mapWeatherModel.GetInterpolatedAtmosphereState(timeOfYear, pos);
```

### GetAtmosphereModel
`public abstract AtmosphereInfo GetAtmosphereModel(CampaignVec2 position)`

**Purpose:** **Purpose:** Reads and returns the atmosphere model value held by the this instance.

```csharp
// Obtain an instance of MapWeatherModel from the subsystem API first
MapWeatherModel mapWeatherModel = ...;
var result = mapWeatherModel.GetAtmosphereModel(position);
```

### GetSeasonTimeFactorOfCampaignTime
`public abstract void GetSeasonTimeFactorOfCampaignTime(CampaignTime ct, out float timeFactorForSnow, out float timeFactorForRain, bool snapCampaignTimeToWeatherPeriod = true)`

**Purpose:** **Purpose:** Reads and returns the season time factor of campaign time value held by the this instance.

```csharp
// Obtain an instance of MapWeatherModel from the subsystem API first
MapWeatherModel mapWeatherModel = ...;
mapWeatherModel.GetSeasonTimeFactorOfCampaignTime(ct, timeFactorForSnow, timeFactorForRain, false);
```

### UpdateWeatherForPosition
`public abstract WeatherEvent UpdateWeatherForPosition(CampaignVec2 position, CampaignTime ct)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of weather for position.

```csharp
// Obtain an instance of MapWeatherModel from the subsystem API first
MapWeatherModel mapWeatherModel = ...;
var result = mapWeatherModel.UpdateWeatherForPosition(position, ct);
```

### InitializeCaches
`public abstract void InitializeCaches()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by caches.

```csharp
// Obtain an instance of MapWeatherModel from the subsystem API first
MapWeatherModel mapWeatherModel = ...;
mapWeatherModel.InitializeCaches();
```

### GetWeatherEventInPosition
`public abstract WeatherEvent GetWeatherEventInPosition(Vec2 pos)`

**Purpose:** **Purpose:** Reads and returns the weather event in position value held by the this instance.

```csharp
// Obtain an instance of MapWeatherModel from the subsystem API first
MapWeatherModel mapWeatherModel = ...;
var result = mapWeatherModel.GetWeatherEventInPosition(pos);
```

### GetSnowAndRainDataForPosition
`public abstract void GetSnowAndRainDataForPosition(Vec2 position, CampaignTime ct, out float snowValue, out float rainValue)`

**Purpose:** **Purpose:** Reads and returns the snow and rain data for position value held by the this instance.

```csharp
// Obtain an instance of MapWeatherModel from the subsystem API first
MapWeatherModel mapWeatherModel = ...;
mapWeatherModel.GetSnowAndRainDataForPosition(position, ct, snowValue, rainValue);
```

### GetWeatherEffectOnTerrainForPosition
`public abstract WeatherEventEffectOnTerrain GetWeatherEffectOnTerrainForPosition(Vec2 pos)`

**Purpose:** **Purpose:** Reads and returns the weather effect on terrain for position value held by the this instance.

```csharp
// Obtain an instance of MapWeatherModel from the subsystem API first
MapWeatherModel mapWeatherModel = ...;
var result = mapWeatherModel.GetWeatherEffectOnTerrainForPosition(pos);
```

### GetWindForPosition
`public abstract Vec2 GetWindForPosition(CampaignVec2 position)`

**Purpose:** **Purpose:** Reads and returns the wind for position value held by the this instance.

```csharp
// Obtain an instance of MapWeatherModel from the subsystem API first
MapWeatherModel mapWeatherModel = ...;
var result = mapWeatherModel.GetWindForPosition(position);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MapWeatherModel instance = ...;
```

## See Also

- [Area Index](../)