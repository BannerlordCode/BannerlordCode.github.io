---
title: "MapWeatherModel"
description: "MapWeatherModel 的自动生成类参考。"
---
# MapWeatherModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapWeatherModel : MBGameModel<MapWeatherModel> `
**Base:** MBGameModel<MapWeatherModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/MapWeatherModel.cs

## 概述

`MapWeatherModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/MapWeatherModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetInterpolatedAtmosphereState
`public abstract AtmosphereState GetInterpolatedAtmosphereState(CampaignTime timeOfYear,Vec3 pos)`

### GetAtmosphereModel
`public abstract AtmosphereInfo GetAtmosphereModel(CampaignVec2 position)`

### GetSeasonTimeFactorOfCampaignTime
`public abstract void GetSeasonTimeFactorOfCampaignTime(CampaignTime ct,out float timeFactorForSnow,out float timeFactorForRain,bool snapCampaignTimeToWeatherPeriod = true)`

### UpdateWeatherForPosition
`public abstract MapWeatherModel.WeatherEvent UpdateWeatherForPosition(CampaignVec2 position,CampaignTime ct)`

### InitializeCaches
`public abstract void InitializeCaches()`

### GetWeatherEventInPosition
`public abstract MapWeatherModel.WeatherEvent GetWeatherEventInPosition(Vec2 pos)`

### GetSnowAndRainDataForPosition
`public abstract void GetSnowAndRainDataForPosition(Vec2 position,CampaignTime ct,out float snowValue,out float rainValue)`

### GetWeatherEffectOnTerrainForPosition
`public abstract MapWeatherModel.WeatherEventEffectOnTerrain GetWeatherEffectOnTerrainForPosition(Vec2 pos)`

### GetWindForPosition
`public abstract Vec2 GetWindForPosition(CampaignVec2 position)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
