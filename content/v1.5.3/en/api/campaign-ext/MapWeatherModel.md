---
title: "MapWeatherModel"
description: "Auto-generated class reference for MapWeatherModel."
---
# MapWeatherModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapWeatherModel : MBGameModel<MapWeatherModel> `
**Base:** MBGameModel<MapWeatherModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/MapWeatherModel.cs

## Overview

Auto-generated stub for `MapWeatherModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

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

## See Also

- [Section index](../)
