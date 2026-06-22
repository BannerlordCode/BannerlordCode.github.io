<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapWeatherModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapWeatherModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapWeatherModel : MBGameModel<MapWeatherModel>`
**Base:** `MBGameModel<MapWeatherModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapWeatherModel.cs`

## 概述

`MapWeatherModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<MapWeatherModel>(new MyMapWeatherModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `WeatherUpdateFrequency` | `public abstract CampaignTime WeatherUpdateFrequency { get; }` |
| `WeatherUpdatePeriod` | `public abstract CampaignTime WeatherUpdatePeriod { get; }` |

## 主要方法

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

## 使用示例

```csharp
// MapWeatherModel (Model) 的典型用法
Game.Current.ReplaceModel<MapWeatherModel>(new MyMapWeatherModel());
```

## 参见

- [完整类目录](../catalog)