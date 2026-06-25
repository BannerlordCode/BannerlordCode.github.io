---
title: "MapWeatherModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapWeatherModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapWeatherModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapWeatherModel : MBGameModel<MapWeatherModel>`
**Base:** `MBGameModel<MapWeatherModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapWeatherModel.cs`

## 概述

`MapWeatherModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MapWeatherModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `WeatherUpdateFrequency` | `public abstract CampaignTime WeatherUpdateFrequency { get; }` |
| `WeatherUpdatePeriod` | `public abstract CampaignTime WeatherUpdatePeriod { get; }` |

## 主要方法

### GetInterpolatedAtmosphereState
`public abstract AtmosphereState GetInterpolatedAtmosphereState(CampaignTime timeOfYear, Vec3 pos)`

**用途 / Purpose:** 获取 `interpolated atmosphere state` 的当前值。

### GetAtmosphereModel
`public abstract AtmosphereInfo GetAtmosphereModel(CampaignVec2 position)`

**用途 / Purpose:** 获取 `atmosphere model` 的当前值。

### GetSeasonTimeFactorOfCampaignTime
`public abstract void GetSeasonTimeFactorOfCampaignTime(CampaignTime ct, out float timeFactorForSnow, out float timeFactorForRain, bool snapCampaignTimeToWeatherPeriod = true)`

**用途 / Purpose:** 获取 `season time factor of campaign time` 的当前值。

### UpdateWeatherForPosition
`public abstract MapWeatherModel.WeatherEvent UpdateWeatherForPosition(CampaignVec2 position, CampaignTime ct)`

**用途 / Purpose:** 更新 `weather for position` 的状态或数据。

### InitializeCaches
`public abstract void InitializeCaches()`

**用途 / Purpose:** 初始化 `caches` 的状态、资源或绑定。

### GetWeatherEventInPosition
`public abstract MapWeatherModel.WeatherEvent GetWeatherEventInPosition(Vec2 pos)`

**用途 / Purpose:** 获取 `weather event in position` 的当前值。

### GetSnowAndRainDataForPosition
`public abstract void GetSnowAndRainDataForPosition(Vec2 position, CampaignTime ct, out float snowValue, out float rainValue)`

**用途 / Purpose:** 获取 `snow and rain data for position` 的当前值。

### GetWeatherEffectOnTerrainForPosition
`public abstract MapWeatherModel.WeatherEventEffectOnTerrain GetWeatherEffectOnTerrainForPosition(Vec2 pos)`

**用途 / Purpose:** 获取 `weather effect on terrain for position` 的当前值。

### GetWindForPosition
`public abstract Vec2 GetWindForPosition(CampaignVec2 position)`

**用途 / Purpose:** 获取 `wind for position` 的当前值。

## 使用示例

```csharp
var implementation = new CustomMapWeatherModel();
```

## 参见

- [完整类目录](../catalog)