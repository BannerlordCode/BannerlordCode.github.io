---
title: "MissionGameModels"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionGameModels`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGameModels

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class MissionGameModels : GameModelsManager`
**Base:** `GameModelsManager`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionGameModels.cs`

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

**用途 / Purpose:** 处理 `clear` 相关逻辑。

## 使用示例

```csharp
MissionGameModels.Clear();
```

## 参见

- [完整类目录](../catalog)