<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMapWeatherModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultMapWeatherModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapWeatherModel : MapWeatherModel`
**Base:** `MapWeatherModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel.cs`

## Overview

`DefaultMapWeatherModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMapWeatherModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `WeatherUpdatePeriod` | `public override CampaignTime WeatherUpdatePeriod { get; }` |
| `WeatherUpdateFrequency` | `public override CampaignTime WeatherUpdateFrequency { get; }` |
| `Angle` | `public float Angle { get; }` |
| `Altitude` | `public float Altitude { get; }` |

## Key Methods

### GetInterpolatedAtmosphereState
`public override AtmosphereState GetInterpolatedAtmosphereState(CampaignTime timeOfYear, Vec3 pos)`

**Purpose:** Gets the current value of `interpolated atmosphere state`.

### GetAtmosphereModel
`public override AtmosphereInfo GetAtmosphereModel(CampaignVec2 position)`

**Purpose:** Gets the current value of `atmosphere model`.

### InitializeCaches
`public override void InitializeCaches()`

**Purpose:** Initializes the state, resources, or bindings for `caches`.

### UpdateWeatherForPosition
`public override MapWeatherModel.WeatherEvent UpdateWeatherForPosition(CampaignVec2 position, CampaignTime ct)`

**Purpose:** Updates the state or data of `weather for position`.

### GetSnowAndRainDataForPosition
`public override void GetSnowAndRainDataForPosition(Vec2 position, CampaignTime ct, out float snowValue, out float rainValue)`

**Purpose:** Gets the current value of `snow and rain data for position`.

### GetWeatherEventInPosition
`public override MapWeatherModel.WeatherEvent GetWeatherEventInPosition(Vec2 pos)`

**Purpose:** Gets the current value of `weather event in position`.

### GetWeatherEffectOnTerrainForPosition
`public override MapWeatherModel.WeatherEventEffectOnTerrain GetWeatherEffectOnTerrainForPosition(Vec2 pos)`

**Purpose:** Gets the current value of `weather effect on terrain for position`.

### GetSeasonTimeFactorOfCampaignTime
`public override void GetSeasonTimeFactorOfCampaignTime(CampaignTime ct, out float timeFactorForSnow, out float timeFactorForRain, bool snapCampaignTimeToWeatherPeriod = true)`

**Purpose:** Gets the current value of `season time factor of campaign time`.

### GetWindForPosition
`public override Vec2 GetWindForPosition(CampaignVec2 position)`

**Purpose:** Gets the current value of `wind for position`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMapWeatherModel>(new MyDefaultMapWeatherModel());
```

## See Also

- [Complete Class Catalog](../catalog)