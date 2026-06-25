---
title: "DefaultMapWeatherModel"
description: "Auto-generated class reference for DefaultMapWeatherModel."
---
# DefaultMapWeatherModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapWeatherModel : MapWeatherModel`
**Base:** `MapWeatherModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMapWeatherModel.cs`

## Overview

`DefaultMapWeatherModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMapWeatherModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Angle` | `public float Angle { get; }` |
| `Altitude` | `public float Altitude { get; }` |

## Key Methods

### GetInterpolatedAtmosphereState
`public override AtmosphereState GetInterpolatedAtmosphereState(CampaignTime timeOfYear, Vec3 pos)`

**Purpose:** Reads and returns the interpolated atmosphere state value held by the this instance.

```csharp
// Obtain an instance of DefaultMapWeatherModel from the subsystem API first
DefaultMapWeatherModel defaultMapWeatherModel = ...;
var result = defaultMapWeatherModel.GetInterpolatedAtmosphereState(timeOfYear, pos);
```

### GetAtmosphereModel
`public override AtmosphereInfo GetAtmosphereModel(CampaignVec2 position)`

**Purpose:** Reads and returns the atmosphere model value held by the this instance.

```csharp
// Obtain an instance of DefaultMapWeatherModel from the subsystem API first
DefaultMapWeatherModel defaultMapWeatherModel = ...;
var result = defaultMapWeatherModel.GetAtmosphereModel(position);
```

### InitializeCaches
`public override void InitializeCaches()`

**Purpose:** Prepares the resources, state, or bindings required by caches.

```csharp
// Obtain an instance of DefaultMapWeatherModel from the subsystem API first
DefaultMapWeatherModel defaultMapWeatherModel = ...;
defaultMapWeatherModel.InitializeCaches();
```

### UpdateWeatherForPosition
`public override WeatherEvent UpdateWeatherForPosition(CampaignVec2 position, CampaignTime ct)`

**Purpose:** Recalculates and stores the latest representation of weather for position.

```csharp
// Obtain an instance of DefaultMapWeatherModel from the subsystem API first
DefaultMapWeatherModel defaultMapWeatherModel = ...;
var result = defaultMapWeatherModel.UpdateWeatherForPosition(position, ct);
```

### GetSnowAndRainDataForPosition
`public override void GetSnowAndRainDataForPosition(Vec2 position, CampaignTime ct, out float snowValue, out float rainValue)`

**Purpose:** Reads and returns the snow and rain data for position value held by the this instance.

```csharp
// Obtain an instance of DefaultMapWeatherModel from the subsystem API first
DefaultMapWeatherModel defaultMapWeatherModel = ...;
defaultMapWeatherModel.GetSnowAndRainDataForPosition(position, ct, snowValue, rainValue);
```

### GetWeatherEventInPosition
`public override WeatherEvent GetWeatherEventInPosition(Vec2 pos)`

**Purpose:** Reads and returns the weather event in position value held by the this instance.

```csharp
// Obtain an instance of DefaultMapWeatherModel from the subsystem API first
DefaultMapWeatherModel defaultMapWeatherModel = ...;
var result = defaultMapWeatherModel.GetWeatherEventInPosition(pos);
```

### GetWeatherEffectOnTerrainForPosition
`public override WeatherEventEffectOnTerrain GetWeatherEffectOnTerrainForPosition(Vec2 pos)`

**Purpose:** Reads and returns the weather effect on terrain for position value held by the this instance.

```csharp
// Obtain an instance of DefaultMapWeatherModel from the subsystem API first
DefaultMapWeatherModel defaultMapWeatherModel = ...;
var result = defaultMapWeatherModel.GetWeatherEffectOnTerrainForPosition(pos);
```

### GetSeasonTimeFactorOfCampaignTime
`public override void GetSeasonTimeFactorOfCampaignTime(CampaignTime ct, out float timeFactorForSnow, out float timeFactorForRain, bool snapCampaignTimeToWeatherPeriod = true)`

**Purpose:** Reads and returns the season time factor of campaign time value held by the this instance.

```csharp
// Obtain an instance of DefaultMapWeatherModel from the subsystem API first
DefaultMapWeatherModel defaultMapWeatherModel = ...;
defaultMapWeatherModel.GetSeasonTimeFactorOfCampaignTime(ct, timeFactorForSnow, timeFactorForRain, false);
```

### GetWindForPosition
`public override Vec2 GetWindForPosition(CampaignVec2 position)`

**Purpose:** Reads and returns the wind for position value held by the this instance.

```csharp
// Obtain an instance of DefaultMapWeatherModel from the subsystem API first
DefaultMapWeatherModel defaultMapWeatherModel = ...;
var result = defaultMapWeatherModel.GetWindForPosition(position);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMapWeatherModel>(new MyDefaultMapWeatherModel());
```

## See Also

- [Area Index](../)