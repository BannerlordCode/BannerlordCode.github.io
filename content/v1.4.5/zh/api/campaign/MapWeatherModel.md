---
title: "MapWeatherModel"
description: "MapWeatherModel 的自动生成类参考。"
---
# MapWeatherModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapWeatherModel : MBGameModel<MapWeatherModel>`
**Base:** `MBGameModel<MapWeatherModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/MapWeatherModel.cs`

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

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 interpolated atmosphere state 的结果。

```csharp
// 先通过子系统 API 拿到 MapWeatherModel 实例
MapWeatherModel mapWeatherModel = ...;
var result = mapWeatherModel.GetInterpolatedAtmosphereState(timeOfYear, pos);
```

### GetAtmosphereModel
`public abstract AtmosphereInfo GetAtmosphereModel(CampaignVec2 position)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 atmosphere model 的结果。

```csharp
// 先通过子系统 API 拿到 MapWeatherModel 实例
MapWeatherModel mapWeatherModel = ...;
var result = mapWeatherModel.GetAtmosphereModel(position);
```

### GetSeasonTimeFactorOfCampaignTime
`public abstract void GetSeasonTimeFactorOfCampaignTime(CampaignTime ct, out float timeFactorForSnow, out float timeFactorForRain, bool snapCampaignTimeToWeatherPeriod = true)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 season time factor of campaign time 的结果。

```csharp
// 先通过子系统 API 拿到 MapWeatherModel 实例
MapWeatherModel mapWeatherModel = ...;
mapWeatherModel.GetSeasonTimeFactorOfCampaignTime(ct, timeFactorForSnow, timeFactorForRain, false);
```

### UpdateWeatherForPosition
`public abstract WeatherEvent UpdateWeatherForPosition(CampaignVec2 position, CampaignTime ct)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 weather for position 的最新表示。

```csharp
// 先通过子系统 API 拿到 MapWeatherModel 实例
MapWeatherModel mapWeatherModel = ...;
var result = mapWeatherModel.UpdateWeatherForPosition(position, ct);
```

### InitializeCaches
`public abstract void InitializeCaches()`

**用途 / Purpose:** **用途 / Purpose:** 为 caches 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MapWeatherModel 实例
MapWeatherModel mapWeatherModel = ...;
mapWeatherModel.InitializeCaches();
```

### GetWeatherEventInPosition
`public abstract WeatherEvent GetWeatherEventInPosition(Vec2 pos)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 weather event in position 的结果。

```csharp
// 先通过子系统 API 拿到 MapWeatherModel 实例
MapWeatherModel mapWeatherModel = ...;
var result = mapWeatherModel.GetWeatherEventInPosition(pos);
```

### GetSnowAndRainDataForPosition
`public abstract void GetSnowAndRainDataForPosition(Vec2 position, CampaignTime ct, out float snowValue, out float rainValue)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 snow and rain data for position 的结果。

```csharp
// 先通过子系统 API 拿到 MapWeatherModel 实例
MapWeatherModel mapWeatherModel = ...;
mapWeatherModel.GetSnowAndRainDataForPosition(position, ct, snowValue, rainValue);
```

### GetWeatherEffectOnTerrainForPosition
`public abstract WeatherEventEffectOnTerrain GetWeatherEffectOnTerrainForPosition(Vec2 pos)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 weather effect on terrain for position 的结果。

```csharp
// 先通过子系统 API 拿到 MapWeatherModel 实例
MapWeatherModel mapWeatherModel = ...;
var result = mapWeatherModel.GetWeatherEffectOnTerrainForPosition(pos);
```

### GetWindForPosition
`public abstract Vec2 GetWindForPosition(CampaignVec2 position)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 wind for position 的结果。

```csharp
// 先通过子系统 API 拿到 MapWeatherModel 实例
MapWeatherModel mapWeatherModel = ...;
var result = mapWeatherModel.GetWindForPosition(position);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MapWeatherModel instance = ...;
```

## 参见

- [本区域目录](../)