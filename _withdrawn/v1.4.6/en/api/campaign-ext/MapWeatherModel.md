---
title: "MapWeatherModel"
description: "MapWeatherModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<MapWeatherModel>; 15 exposed members (9 methods, 4 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/MapWeatherModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapWeatherModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MapWeatherModel : MBGameModel<MapWeatherModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapWeatherModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

MapWeatherModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/MapWeatherModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<MapWeatherModel>; the inheritance chain is MapWeatherModel → MBGameModel → GameModel. It exposes 15 public/protected members: 9 methods, 4 properties, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapWeatherModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain MapWeatherModel → MBGameModel → GameModel. The surface is method-led (methods 9/15, properties 4/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/MapWeatherModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `WeatherUpdateFrequency` | `public abstract CampaignTime WeatherUpdateFrequency` | property |
| `GetInterpolatedAtmosphereState` | `public abstract AtmosphereState GetInterpolatedAtmosphereState(CampaignTime timeOfYear, Vec3 pos);` | method |
| `GetAtmosphereModel` | `public abstract AtmosphereInfo GetAtmosphereModel(CampaignVec2 position);` | method |
| `GetSeasonTimeFactorOfCampaignTime` | `public abstract void GetSeasonTimeFactorOfCampaignTime(CampaignTime ct, out float timeFactorForSnow, out float timeFactorForRain, bool snapCampaignTimeToWeatherPeriod = true);` | method |
| `WeatherUpdatePeriod` | `public abstract CampaignTime WeatherUpdatePeriod` | property |
| `UpdateWeatherForPosition` | `public abstract MapWeatherModel.WeatherEvent UpdateWeatherForPosition(CampaignVec2 position, CampaignTime ct);` | method |
| `InitializeCaches` | `public abstract void InitializeCaches();` | method |
| `GetWeatherEventInPosition` | `public abstract MapWeatherModel.WeatherEvent GetWeatherEventInPosition(Vec2 pos);` | method |
| `GetSnowAndRainDataForPosition` | `public abstract void GetSnowAndRainDataForPosition(Vec2 position, CampaignTime ct, out float snowValue, out float rainValue);` | method |
| `GetWeatherEffectOnTerrainForPosition` | `public abstract MapWeatherModel.WeatherEventEffectOnTerrain GetWeatherEffectOnTerrainForPosition(Vec2 pos);` | method |
| `GetWindForPosition` | `public abstract Vec2 GetWindForPosition(CampaignVec2 position);` | method |
| `WeatherEvent` | `public enum WeatherEvent` | property |
| `WeatherEventEffectOnTerrain` | `public enum WeatherEventEffectOnTerrain` | property |
| `WeatherEvent` | `public enum WeatherEvent` | nested type |
| `WeatherEventEffectOnTerrain` | `public enum WeatherEventEffectOnTerrain` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
