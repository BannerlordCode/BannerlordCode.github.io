---
title: "MissionGameModels"
description: "MissionGameModels：TaleWorlds.MountAndBlade 的 public 类，继承 GameModelsManager；公开成员 19 个（方法 1、属性 17、字段 0）。源文件 TaleWorlds.MountAndBlade/MissionGameModels.cs。"
---
# MissionGameModels

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class MissionGameModels : GameModelsManager`
**File:** `TaleWorlds.MountAndBlade/MissionGameModels.cs`

## 概述

MissionGameModels 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionGameModels.cs。它是一个 public 类（sealed），实现/继承 GameModelsManager，继承链为 MissionGameModels → GameModelsManager。public/protected 成员共 19 个：1 方法、17 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionGameModels 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MissionGameModels → GameModelsManager。成员构成以属性为主（属性 17/19，方法 1/19），对外主要以状态读取接口暴露。继承链上的 GameModelsManager 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionGameModels.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static MissionGameModels Current` | 属性 |
| `AgentStatCalculateModel` | `public AgentStatCalculateModel AgentStatCalculateModel` | 属性 |
| `ApplyWeatherEffectsModel` | `public ApplyWeatherEffectsModel ApplyWeatherEffectsModel` | 属性 |
| `StrikeMagnitudeModel` | `public StrikeMagnitudeCalculationModel StrikeMagnitudeModel` | 属性 |
| `AgentApplyDamageModel` | `public AgentApplyDamageModel AgentApplyDamageModel` | 属性 |
| `AgentDecideKilledOrUnconsciousModel` | `public AgentDecideKilledOrUnconsciousModel AgentDecideKilledOrUnconsciousModel` | 属性 |
| `MissionDifficultyModel` | `public MissionDifficultyModel MissionDifficultyModel` | 属性 |
| `BattleMoraleModel` | `public BattleMoraleModel BattleMoraleModel` | 属性 |
| `BattleInitializationModel` | `public BattleInitializationModel BattleInitializationModel` | 属性 |
| `BattleSpawnModel` | `public BattleSpawnModel BattleSpawnModel` | 属性 |
| `BattleBannerBearersModel` | `public BattleBannerBearersModel BattleBannerBearersModel` | 属性 |
| `FormationArrangementsModel` | `public FormationArrangementModel FormationArrangementsModel` | 属性 |
| `AutoBlockModel` | `public AutoBlockModel AutoBlockModel` | 属性 |
| `DamageParticleModel` | `public DamageParticleModel DamageParticleModel` | 属性 |
| `ItemPickupModel` | `public ItemPickupModel ItemPickupModel` | 属性 |
| `MissionShipParametersModel` | `public MissionShipParametersModel MissionShipParametersModel` | 属性 |
| `MissionSiegeEngineCalculationModel` | `public MissionSiegeEngineCalculationModel MissionSiegeEngineCalculationModel` | 属性 |
| `MissionGameModels` | `public MissionGameModels(IEnumerable<GameModel>inputComponents) : base(inputComponents)` | 构造函数 |
| `Clear` | `public static void Clear()` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
