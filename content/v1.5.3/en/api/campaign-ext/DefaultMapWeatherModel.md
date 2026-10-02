---
title: "DefaultMapWeatherModel"
description: "Auto-generated class reference for DefaultMapWeatherModel."
---
# DefaultMapWeatherModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapWeatherModel : MapWeatherModel `
**Base:** MapWeatherModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel.cs

## Overview

Auto-generated stub for `DefaultMapWeatherModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetInterpolatedAtmosphereState
`public override AtmosphereState GetInterpolatedAtmosphereState(CampaignTime timeOfYear,Vec3 pos)`

### GetAtmosphereModel
`public override AtmosphereInfo GetAtmosphereModel(CampaignVec2 position)`

### InitializeCaches
`public override void InitializeCaches()`

### UpdateWeatherForPosition
`public override MapWeatherModel.WeatherEvent UpdateWeatherForPosition(CampaignVec2 position,CampaignTime ct)`

### GetSnowAndRainDataForPosition
`public override void GetSnowAndRainDataForPosition(Vec2 position,CampaignTime ct,out float snowValue,out float rainValue)`

### GetWeatherEventInPosition
`public override MapWeatherModel.WeatherEvent GetWeatherEventInPosition(Vec2 pos)`

### GetWeatherEffectOnTerrainForPosition
`public override MapWeatherModel.WeatherEventEffectOnTerrain GetWeatherEffectOnTerrainForPosition(Vec2 pos)`

### GetSeasonTimeFactorOfCampaignTime
`public override void GetSeasonTimeFactorOfCampaignTime(CampaignTime ct,out float timeFactorForSnow,out float timeFactorForRain,bool snapCampaignTimeToWeatherPeriod = true)`

### GetWindForPosition
`public override Vec2 GetWindForPosition(CampaignVec2 position)`

## See Also

- [Section index](../)
