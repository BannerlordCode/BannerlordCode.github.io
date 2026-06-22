<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMapWeatherModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMapWeatherModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapWeatherModel : MapWeatherModel`
**Base:** `MapWeatherModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel.cs`

## Overview

`DefaultMapWeatherModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultMapWeatherModel>(new MyDefaultMapWeatherModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `WeatherUpdatePeriod` | `public override CampaignTime WeatherUpdatePeriod { get; }` |
| `WeatherUpdateFrequency` | `public override CampaignTime WeatherUpdateFrequency { get; }` |
| `Angle` | `public float Angle { get; }` |
| `Altitude` | `public float Altitude { get; }` |

## Key Methods

### GetInterpolatedAtmosphereState
```csharp
public override AtmosphereState GetInterpolatedAtmosphereState(CampaignTime timeOfYear, Vec3 pos)
```

### GetAtmosphereModel
```csharp
public override AtmosphereInfo GetAtmosphereModel(CampaignVec2 position)
```

### InitializeCaches
```csharp
public override void InitializeCaches()
```

### UpdateWeatherForPosition
```csharp
public override MapWeatherModel.WeatherEvent UpdateWeatherForPosition(CampaignVec2 position, CampaignTime ct)
```

### GetSnowAndRainDataForPosition
```csharp
public override void GetSnowAndRainDataForPosition(Vec2 position, CampaignTime ct, out float snowValue, out float rainValue)
```

### GetWeatherEventInPosition
```csharp
public override MapWeatherModel.WeatherEvent GetWeatherEventInPosition(Vec2 pos)
```

### GetWeatherEffectOnTerrainForPosition
```csharp
public override MapWeatherModel.WeatherEventEffectOnTerrain GetWeatherEffectOnTerrainForPosition(Vec2 pos)
```

### GetSeasonTimeFactorOfCampaignTime
```csharp
public override void GetSeasonTimeFactorOfCampaignTime(CampaignTime ct, out float timeFactorForSnow, out float timeFactorForRain, bool snapCampaignTimeToWeatherPeriod = true)
```

### GetWindForPosition
```csharp
public override Vec2 GetWindForPosition(CampaignVec2 position)
```

## Usage Example

```csharp
// Typical usage of DefaultMapWeatherModel (Model)
Game.Current.ReplaceModel<DefaultMapWeatherModel>(new MyDefaultMapWeatherModel());
```

## See Also

- [Complete Class Catalog](../catalog)