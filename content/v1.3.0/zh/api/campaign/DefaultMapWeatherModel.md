---
title: "DefaultMapWeatherModel"
description: "DefaultMapWeatherModel 的自动生成类参考。"
---
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

**用途 / Purpose:** 读取并返回当前对象中 「interpolated atmosphere state」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapWeatherModel 实例
DefaultMapWeatherModel defaultMapWeatherModel = ...;
var result = defaultMapWeatherModel.GetInterpolatedAtmosphereState(timeOfYear, pos);
```

### GetAtmosphereModel
`public override AtmosphereInfo GetAtmosphereModel(CampaignVec2 position)`

**用途 / Purpose:** 读取并返回当前对象中 「atmosphere model」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapWeatherModel 实例
DefaultMapWeatherModel defaultMapWeatherModel = ...;
var result = defaultMapWeatherModel.GetAtmosphereModel(position);
```

### InitializeCaches
`public override void InitializeCaches()`

**用途 / Purpose:** 为 「caches」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 DefaultMapWeatherModel 实例
DefaultMapWeatherModel defaultMapWeatherModel = ...;
defaultMapWeatherModel.InitializeCaches();
```

### UpdateWeatherForPosition
`public override MapWeatherModel.WeatherEvent UpdateWeatherForPosition(CampaignVec2 position, CampaignTime ct)`

**用途 / Purpose:** 重新计算并更新 「weather for position」 的最新表示。

```csharp
// 先通过子系统 API 拿到 DefaultMapWeatherModel 实例
DefaultMapWeatherModel defaultMapWeatherModel = ...;
var result = defaultMapWeatherModel.UpdateWeatherForPosition(position, ct);
```

### GetSnowAndRainDataForPosition
`public override void GetSnowAndRainDataForPosition(Vec2 position, CampaignTime ct, out float snowValue, out float rainValue)`

**用途 / Purpose:** 读取并返回当前对象中 「snow and rain data for position」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapWeatherModel 实例
DefaultMapWeatherModel defaultMapWeatherModel = ...;
defaultMapWeatherModel.GetSnowAndRainDataForPosition(position, ct, snowValue, rainValue);
```

### GetWeatherEventInPosition
`public override MapWeatherModel.WeatherEvent GetWeatherEventInPosition(Vec2 pos)`

**用途 / Purpose:** 读取并返回当前对象中 「weather event in position」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapWeatherModel 实例
DefaultMapWeatherModel defaultMapWeatherModel = ...;
var result = defaultMapWeatherModel.GetWeatherEventInPosition(pos);
```

### GetWeatherEffectOnTerrainForPosition
`public override MapWeatherModel.WeatherEventEffectOnTerrain GetWeatherEffectOnTerrainForPosition(Vec2 pos)`

**用途 / Purpose:** 读取并返回当前对象中 「weather effect on terrain for position」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapWeatherModel 实例
DefaultMapWeatherModel defaultMapWeatherModel = ...;
var result = defaultMapWeatherModel.GetWeatherEffectOnTerrainForPosition(pos);
```

### GetSeasonTimeFactorOfCampaignTime
`public override void GetSeasonTimeFactorOfCampaignTime(CampaignTime ct, out float timeFactorForSnow, out float timeFactorForRain, bool snapCampaignTimeToWeatherPeriod = true)`

**用途 / Purpose:** 读取并返回当前对象中 「season time factor of campaign time」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapWeatherModel 实例
DefaultMapWeatherModel defaultMapWeatherModel = ...;
defaultMapWeatherModel.GetSeasonTimeFactorOfCampaignTime(ct, timeFactorForSnow, timeFactorForRain, false);
```

### GetWindForPosition
`public override Vec2 GetWindForPosition(CampaignVec2 position)`

**用途 / Purpose:** 读取并返回当前对象中 「wind for position」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapWeatherModel 实例
DefaultMapWeatherModel defaultMapWeatherModel = ...;
var result = defaultMapWeatherModel.GetWindForPosition(position);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultMapWeatherModel>(new MyDefaultMapWeatherModel());
```

## 参见

- [本区域目录](../)