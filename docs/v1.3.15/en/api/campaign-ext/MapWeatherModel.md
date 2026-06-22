<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapWeatherModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapWeatherModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapWeatherModel : MBGameModel<MapWeatherModel>`
**Base:** `MBGameModel<MapWeatherModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapWeatherModel.cs`

## Overview

`MapWeatherModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<MapWeatherModel>(new MyMapWeatherModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `WeatherUpdateFrequency` | `public abstract CampaignTime WeatherUpdateFrequency { get; }` |
| `WeatherUpdatePeriod` | `public abstract CampaignTime WeatherUpdatePeriod { get; }` |

## Key Methods

### GetInterpolatedAtmosphereState
```csharp
public abstract AtmosphereState GetInterpolatedAtmosphereState(CampaignTime timeOfYear, Vec3 pos)
```

### GetAtmosphereModel
```csharp
public abstract AtmosphereInfo GetAtmosphereModel(CampaignVec2 position)
```

### GetSeasonTimeFactorOfCampaignTime
```csharp
public abstract void GetSeasonTimeFactorOfCampaignTime(CampaignTime ct, out float timeFactorForSnow, out float timeFactorForRain, bool snapCampaignTimeToWeatherPeriod = true)
```

### UpdateWeatherForPosition
```csharp
public abstract MapWeatherModel.WeatherEvent UpdateWeatherForPosition(CampaignVec2 position, CampaignTime ct)
```

### InitializeCaches
```csharp
public abstract void InitializeCaches()
```

### GetWeatherEventInPosition
```csharp
public abstract MapWeatherModel.WeatherEvent GetWeatherEventInPosition(Vec2 pos)
```

### GetSnowAndRainDataForPosition
```csharp
public abstract void GetSnowAndRainDataForPosition(Vec2 position, CampaignTime ct, out float snowValue, out float rainValue)
```

### GetWeatherEffectOnTerrainForPosition
```csharp
public abstract MapWeatherModel.WeatherEventEffectOnTerrain GetWeatherEffectOnTerrainForPosition(Vec2 pos)
```

### GetWindForPosition
```csharp
public abstract Vec2 GetWindForPosition(CampaignVec2 position)
```

## Usage Example

```csharp
// Typical usage of MapWeatherModel (Model)
Game.Current.ReplaceModel<MapWeatherModel>(new MyMapWeatherModel());
```

## See Also

- [Complete Class Catalog](../catalog)