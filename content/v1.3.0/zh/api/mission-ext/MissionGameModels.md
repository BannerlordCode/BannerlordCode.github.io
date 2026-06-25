---
title: "MissionGameModels"
description: "MissionGameModels 的自动生成类参考。"
---
# MissionGameModels

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class MissionGameModels : GameModelsManager`
**Base:** `GameModelsManager`
**File:** `TaleWorlds.MountAndBlade/MissionGameModels.cs`

## 概述

`MissionGameModels` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static MissionGameModels Current { get; }` |
| `AgentStatCalculateModel` | `public AgentStatCalculateModel AgentStatCalculateModel { get; }` |
| `ApplyWeatherEffectsModel` | `public ApplyWeatherEffectsModel ApplyWeatherEffectsModel { get; }` |
| `StrikeMagnitudeModel` | `public StrikeMagnitudeCalculationModel StrikeMagnitudeModel { get; }` |
| `AgentApplyDamageModel` | `public AgentApplyDamageModel AgentApplyDamageModel { get; }` |
| `AgentDecideKilledOrUnconsciousModel` | `public AgentDecideKilledOrUnconsciousModel AgentDecideKilledOrUnconsciousModel { get; }` |
| `MissionDifficultyModel` | `public MissionDifficultyModel MissionDifficultyModel { get; }` |
| `BattleMoraleModel` | `public BattleMoraleModel BattleMoraleModel { get; }` |
| `BattleInitializationModel` | `public BattleInitializationModel BattleInitializationModel { get; }` |
| `BattleSpawnModel` | `public BattleSpawnModel BattleSpawnModel { get; }` |
| `BattleBannerBearersModel` | `public BattleBannerBearersModel BattleBannerBearersModel { get; }` |
| `FormationArrangementsModel` | `public FormationArrangementModel FormationArrangementsModel { get; }` |
| `AutoBlockModel` | `public AutoBlockModel AutoBlockModel { get; }` |
| `DamageParticleModel` | `public DamageParticleModel DamageParticleModel { get; }` |
| `ItemPickupModel` | `public ItemPickupModel ItemPickupModel { get; }` |
| `MissionShipParametersModel` | `public MissionShipParametersModel MissionShipParametersModel { get; }` |
| `MissionSiegeEngineCalculationModel` | `public MissionSiegeEngineCalculationModel MissionSiegeEngineCalculationModel { get; }` |

## 主要方法

### Clear
`public static void Clear()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 静态调用，不需要实例
MissionGameModels.Clear();
```

## 使用示例

```csharp
MissionGameModels.Clear();
```

## 参见

- [本区域目录](../)