---
title: "DefaultMapWeatherModel"
description: "DefaultMapWeatherModel: a public class in TaleWorlds.CampaignSystem, inheriting MapWeatherModel; 11 exposed members (9 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel.cs."
---
# DefaultMapWeatherModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultMapWeatherModel : MapWeatherModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel.cs`

## Overview

DefaultMapWeatherModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel.cs. It is a public class, implementing/inheriting MapWeatherModel; the inheritance chain is DefaultMapWeatherModel → MapWeatherModel → MBGameModel. It exposes 11 public/protected members: 9 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultMapWeatherModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultMapWeatherModel → MapWeatherModel → MBGameModel. The surface is method-led (methods 9/11, properties 2/11), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WeatherUpdatePeriod` | `public override CampaignTime WeatherUpdatePeriod` | property |
| `WeatherUpdateFrequency` | `public override CampaignTime WeatherUpdateFrequency` | property |
| `GetInterpolatedAtmosphereState` | `public override AtmosphereState GetInterpolatedAtmosphereState(CampaignTime timeOfYear, Vec3 pos)` | method |
| `GetAtmosphereModel` | `public override AtmosphereInfo GetAtmosphereModel(CampaignVec2 position)` | method |
| `InitializeCaches` | `public override void InitializeCaches()` | method |
| `UpdateWeatherForPosition` | `public override MapWeatherModel.WeatherEvent UpdateWeatherForPosition(CampaignVec2 position, CampaignTime ct)` | method |
| `GetSnowAndRainDataForPosition` | `public override void GetSnowAndRainDataForPosition(Vec2 position, CampaignTime ct, out float snowValue, out float rainValue)` | method |
| `GetWeatherEventInPosition` | `public override MapWeatherModel.WeatherEvent GetWeatherEventInPosition(Vec2 pos)` | method |
| `GetWeatherEffectOnTerrainForPosition` | `public override MapWeatherModel.WeatherEventEffectOnTerrain GetWeatherEffectOnTerrainForPosition(Vec2 pos)` | method |
| `GetSeasonTimeFactorOfCampaignTime` | `public override void GetSeasonTimeFactorOfCampaignTime(CampaignTime ct, out float timeFactorForSnow, out float timeFactorForRain, bool snapCampaignTimeToWeatherPeriod = true)` | method |
| `GetWindForPosition` | `public override Vec2 GetWindForPosition(CampaignVec2 position)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MapWeatherModel](../MapWeatherModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
