---
title: "MapWeatherModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapWeatherModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapWeatherModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapWeatherModel : MBGameModel<MapWeatherModel>`
**Base:** `MBGameModel<MapWeatherModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapWeatherModel.cs`

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

**Purpose:** Gets the current value of `interpolated atmosphere state`.

### GetAtmosphereModel
`public abstract AtmosphereInfo GetAtmosphereModel(CampaignVec2 position)`

**Purpose:** Gets the current value of `atmosphere model`.

### GetSeasonTimeFactorOfCampaignTime
`public abstract void GetSeasonTimeFactorOfCampaignTime(CampaignTime ct, out float timeFactorForSnow, out float timeFactorForRain, bool snapCampaignTimeToWeatherPeriod = true)`

**Purpose:** Gets the current value of `season time factor of campaign time`.

### UpdateWeatherForPosition
`public abstract MapWeatherModel.WeatherEvent UpdateWeatherForPosition(CampaignVec2 position, CampaignTime ct)`

**Purpose:** Updates the state or data of `weather for position`.

### InitializeCaches
`public abstract void InitializeCaches()`

**Purpose:** Initializes the state, resources, or bindings for `caches`.

### GetWeatherEventInPosition
`public abstract MapWeatherModel.WeatherEvent GetWeatherEventInPosition(Vec2 pos)`

**Purpose:** Gets the current value of `weather event in position`.

### GetSnowAndRainDataForPosition
`public abstract void GetSnowAndRainDataForPosition(Vec2 position, CampaignTime ct, out float snowValue, out float rainValue)`

**Purpose:** Gets the current value of `snow and rain data for position`.

### GetWeatherEffectOnTerrainForPosition
`public abstract MapWeatherModel.WeatherEventEffectOnTerrain GetWeatherEffectOnTerrainForPosition(Vec2 pos)`

**Purpose:** Gets the current value of `weather effect on terrain for position`.

### GetWindForPosition
`public abstract Vec2 GetWindForPosition(CampaignVec2 position)`

**Purpose:** Gets the current value of `wind for position`.

## Usage Example

```csharp
var implementation = new CustomMapWeatherModel();
```

## See Also

- [Complete Class Catalog](../catalog)