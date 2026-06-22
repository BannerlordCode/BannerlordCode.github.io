<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultMapWeatherModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMapWeatherModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapWeatherModel : MapWeatherModel`
**Base:** `MapWeatherModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel.cs`

## 概述

`DefaultMapWeatherModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultMapWeatherModel>(new MyDefaultMapWeatherModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `WeatherUpdatePeriod` | `public override CampaignTime WeatherUpdatePeriod { get; }` |
| `WeatherUpdateFrequency` | `public override CampaignTime WeatherUpdateFrequency { get; }` |
| `Angle` | `public float Angle { get; }` |
| `Altitude` | `public float Altitude { get; }` |

## 主要方法

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

## 使用示例

```csharp
// DefaultMapWeatherModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultMapWeatherModel>(new MyDefaultMapWeatherModel());
```

## 参见

- [完整类目录](../catalog)