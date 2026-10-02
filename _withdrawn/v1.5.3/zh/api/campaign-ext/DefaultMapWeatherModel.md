---
title: "DefaultMapWeatherModel"
description: "DefaultMapWeatherModel 的自动生成类参考。"
---
# DefaultMapWeatherModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapWeatherModel : MapWeatherModel `
**Base:** MapWeatherModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel.cs

## 概述

`DefaultMapWeatherModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetInterpolatedAtmosphereState
`public override AtmosphereState GetInterpolatedAtmosphereState(CampaignTime timeOfYear,Vec3 pos) `

### GetAtmosphereModel
`public override AtmosphereInfo GetAtmosphereModel(CampaignVec2 position) `

### InitializeCaches
`public override void InitializeCaches() `

### UpdateWeatherForPosition
`public override MapWeatherModel.WeatherEvent UpdateWeatherForPosition(CampaignVec2 position,CampaignTime ct) `

### GetSnowAndRainDataForPosition
`public override void GetSnowAndRainDataForPosition(Vec2 position,CampaignTime ct,out float snowValue,out float rainValue) `

### GetWeatherEventInPosition
`public override MapWeatherModel.WeatherEvent GetWeatherEventInPosition(Vec2 pos) `

### GetWeatherEffectOnTerrainForPosition
`public override MapWeatherModel.WeatherEventEffectOnTerrain GetWeatherEffectOnTerrainForPosition(Vec2 pos) `

### GetSeasonTimeFactorOfCampaignTime
`public override void GetSeasonTimeFactorOfCampaignTime(CampaignTime ct,out float timeFactorForSnow,out float timeFactorForRain,bool snapCampaignTimeToWeatherPeriod = true) `

### GetWindForPosition
`public override Vec2 GetWindForPosition(CampaignVec2 position) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
