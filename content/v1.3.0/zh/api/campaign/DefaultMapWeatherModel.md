---
title: "DefaultMapWeatherModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultMapWeatherModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultMapWeatherModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapWeatherModel : MapWeatherModel`
**Base:** `MapWeatherModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel.cs`

## 概述

`DefaultMapWeatherModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultMapWeatherModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `WeatherUpdatePeriod` | `public override CampaignTime WeatherUpdatePeriod { get; }` |
| `WeatherUpdateFrequency` | `public override CampaignTime WeatherUpdateFrequency { get; }` |
| `Angle` | `public float Angle { get; }` |
| `Altitude` | `public float Altitude { get; }` |

## 主要方法

### GetInterpolatedAtmosphereState
`public override AtmosphereState GetInterpolatedAtmosphereState(CampaignTime timeOfYear, Vec3 pos)`

**用途 / Purpose:** 获取 `interpolated atmosphere state` 的当前值。

### GetAtmosphereModel
`public override AtmosphereInfo GetAtmosphereModel(CampaignVec2 position)`

**用途 / Purpose:** 获取 `atmosphere model` 的当前值。

### InitializeCaches
`public override void InitializeCaches()`

**用途 / Purpose:** 初始化 `caches` 的状态、资源或绑定。

### UpdateWeatherForPosition
`public override MapWeatherModel.WeatherEvent UpdateWeatherForPosition(CampaignVec2 position, CampaignTime ct)`

**用途 / Purpose:** 更新 `weather for position` 的状态或数据。

### GetSnowAndRainDataForPosition
`public override void GetSnowAndRainDataForPosition(Vec2 position, CampaignTime ct, out float snowValue, out float rainValue)`

**用途 / Purpose:** 获取 `snow and rain data for position` 的当前值。

### GetWeatherEventInPosition
`public override MapWeatherModel.WeatherEvent GetWeatherEventInPosition(Vec2 pos)`

**用途 / Purpose:** 获取 `weather event in position` 的当前值。

### GetWeatherEffectOnTerrainForPosition
`public override MapWeatherModel.WeatherEventEffectOnTerrain GetWeatherEffectOnTerrainForPosition(Vec2 pos)`

**用途 / Purpose:** 获取 `weather effect on terrain for position` 的当前值。

### GetSeasonTimeFactorOfCampaignTime
`public override void GetSeasonTimeFactorOfCampaignTime(CampaignTime ct, out float timeFactorForSnow, out float timeFactorForRain, bool snapCampaignTimeToWeatherPeriod = true)`

**用途 / Purpose:** 获取 `season time factor of campaign time` 的当前值。

### GetWindForPosition
`public override Vec2 GetWindForPosition(CampaignVec2 position)`

**用途 / Purpose:** 获取 `wind for position` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultMapWeatherModel>(new MyDefaultMapWeatherModel());
```

## 参见

- [完整类目录](../catalog)