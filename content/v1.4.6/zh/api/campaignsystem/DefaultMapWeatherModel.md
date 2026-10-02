---
title: "DefaultMapWeatherModel"
description: "DefaultMapWeatherModel：TaleWorlds.CampaignSystem 的 public 类，继承 MapWeatherModel；公开成员 11 个（方法 9、属性 2、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel.cs。"
---
# DefaultMapWeatherModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultMapWeatherModel : MapWeatherModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel.cs`

## 概述

DefaultMapWeatherModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel.cs。它是一个 public 类，实现/继承 MapWeatherModel，继承链为 DefaultMapWeatherModel → MapWeatherModel → MBGameModel。public/protected 成员共 11 个：9 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultMapWeatherModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultMapWeatherModel → MapWeatherModel → MBGameModel。成员构成以方法为主（方法 9/11，属性 2/11），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultMapWeatherModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WeatherUpdatePeriod` | `public override CampaignTime WeatherUpdatePeriod` | 属性 |
| `WeatherUpdateFrequency` | `public override CampaignTime WeatherUpdateFrequency` | 属性 |
| `GetInterpolatedAtmosphereState` | `public override AtmosphereState GetInterpolatedAtmosphereState(CampaignTime timeOfYear, Vec3 pos)` | 方法 |
| `GetAtmosphereModel` | `public override AtmosphereInfo GetAtmosphereModel(CampaignVec2 position)` | 方法 |
| `InitializeCaches` | `public override void InitializeCaches()` | 方法 |
| `UpdateWeatherForPosition` | `public override MapWeatherModel.WeatherEvent UpdateWeatherForPosition(CampaignVec2 position, CampaignTime ct)` | 方法 |
| `GetSnowAndRainDataForPosition` | `public override void GetSnowAndRainDataForPosition(Vec2 position, CampaignTime ct, out float snowValue, out float rainValue)` | 方法 |
| `GetWeatherEventInPosition` | `public override MapWeatherModel.WeatherEvent GetWeatherEventInPosition(Vec2 pos)` | 方法 |
| `GetWeatherEffectOnTerrainForPosition` | `public override MapWeatherModel.WeatherEventEffectOnTerrain GetWeatherEffectOnTerrainForPosition(Vec2 pos)` | 方法 |
| `GetSeasonTimeFactorOfCampaignTime` | `public override void GetSeasonTimeFactorOfCampaignTime(CampaignTime ct, out float timeFactorForSnow, out float timeFactorForRain, bool snapCampaignTimeToWeatherPeriod = true)` | 方法 |
| `GetWindForPosition` | `public override Vec2 GetWindForPosition(CampaignVec2 position)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MapWeatherModel](../MapWeatherModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
