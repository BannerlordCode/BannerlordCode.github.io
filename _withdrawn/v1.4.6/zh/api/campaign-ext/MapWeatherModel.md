---
title: "MapWeatherModel"
description: "MapWeatherModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<MapWeatherModel>；公开成员 15 个（方法 9、属性 4、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/MapWeatherModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapWeatherModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MapWeatherModel : MBGameModel<MapWeatherModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapWeatherModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

MapWeatherModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/MapWeatherModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<MapWeatherModel>，继承链为 MapWeatherModel → MBGameModel → GameModel。public/protected 成员共 15 个：9 方法、4 属性、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapWeatherModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 MapWeatherModel → MBGameModel → GameModel。成员构成以方法为主（方法 9/15，属性 4/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/MapWeatherModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WeatherUpdateFrequency` | `public abstract CampaignTime WeatherUpdateFrequency` | 属性 |
| `GetInterpolatedAtmosphereState` | `public abstract AtmosphereState GetInterpolatedAtmosphereState(CampaignTime timeOfYear, Vec3 pos);` | 方法 |
| `GetAtmosphereModel` | `public abstract AtmosphereInfo GetAtmosphereModel(CampaignVec2 position);` | 方法 |
| `GetSeasonTimeFactorOfCampaignTime` | `public abstract void GetSeasonTimeFactorOfCampaignTime(CampaignTime ct, out float timeFactorForSnow, out float timeFactorForRain, bool snapCampaignTimeToWeatherPeriod = true);` | 方法 |
| `WeatherUpdatePeriod` | `public abstract CampaignTime WeatherUpdatePeriod` | 属性 |
| `UpdateWeatherForPosition` | `public abstract MapWeatherModel.WeatherEvent UpdateWeatherForPosition(CampaignVec2 position, CampaignTime ct);` | 方法 |
| `InitializeCaches` | `public abstract void InitializeCaches();` | 方法 |
| `GetWeatherEventInPosition` | `public abstract MapWeatherModel.WeatherEvent GetWeatherEventInPosition(Vec2 pos);` | 方法 |
| `GetSnowAndRainDataForPosition` | `public abstract void GetSnowAndRainDataForPosition(Vec2 position, CampaignTime ct, out float snowValue, out float rainValue);` | 方法 |
| `GetWeatherEffectOnTerrainForPosition` | `public abstract MapWeatherModel.WeatherEventEffectOnTerrain GetWeatherEffectOnTerrainForPosition(Vec2 pos);` | 方法 |
| `GetWindForPosition` | `public abstract Vec2 GetWindForPosition(CampaignVec2 position);` | 方法 |
| `WeatherEvent` | `public enum WeatherEvent` | 属性 |
| `WeatherEventEffectOnTerrain` | `public enum WeatherEventEffectOnTerrain` | 属性 |
| `WeatherEvent` | `public enum WeatherEvent` | 嵌套类型 |
| `WeatherEventEffectOnTerrain` | `public enum WeatherEventEffectOnTerrain` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
