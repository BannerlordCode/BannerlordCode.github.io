---
title: "MissionGameModels"
description: "MissionGameModels: a public class in TaleWorlds.MountAndBlade, inheriting GameModelsManager; 19 exposed members (1 methods, 17 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionGameModels.cs."
---
# MissionGameModels

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class MissionGameModels : GameModelsManager`
**File:** `TaleWorlds.MountAndBlade/MissionGameModels.cs`

## Overview

MissionGameModels lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionGameModels.cs. It is a public class (sealed), implementing/inheriting GameModelsManager; the inheritance chain is MissionGameModels → GameModelsManager. It exposes 19 public/protected members: 1 methods, 17 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGameModels is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionGameModels → GameModelsManager. The surface is property-led (properties 17/19, methods 1/19), so it mostly exposes state for reading. GameModelsManager on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionGameModels.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static MissionGameModels Current` | property |
| `AgentStatCalculateModel` | `public AgentStatCalculateModel AgentStatCalculateModel` | property |
| `ApplyWeatherEffectsModel` | `public ApplyWeatherEffectsModel ApplyWeatherEffectsModel` | property |
| `StrikeMagnitudeModel` | `public StrikeMagnitudeCalculationModel StrikeMagnitudeModel` | property |
| `AgentApplyDamageModel` | `public AgentApplyDamageModel AgentApplyDamageModel` | property |
| `AgentDecideKilledOrUnconsciousModel` | `public AgentDecideKilledOrUnconsciousModel AgentDecideKilledOrUnconsciousModel` | property |
| `MissionDifficultyModel` | `public MissionDifficultyModel MissionDifficultyModel` | property |
| `BattleMoraleModel` | `public BattleMoraleModel BattleMoraleModel` | property |
| `BattleInitializationModel` | `public BattleInitializationModel BattleInitializationModel` | property |
| `BattleSpawnModel` | `public BattleSpawnModel BattleSpawnModel` | property |
| `BattleBannerBearersModel` | `public BattleBannerBearersModel BattleBannerBearersModel` | property |
| `FormationArrangementsModel` | `public FormationArrangementModel FormationArrangementsModel` | property |
| `AutoBlockModel` | `public AutoBlockModel AutoBlockModel` | property |
| `DamageParticleModel` | `public DamageParticleModel DamageParticleModel` | property |
| `ItemPickupModel` | `public ItemPickupModel ItemPickupModel` | property |
| `MissionShipParametersModel` | `public MissionShipParametersModel MissionShipParametersModel` | property |
| `MissionSiegeEngineCalculationModel` | `public MissionSiegeEngineCalculationModel MissionSiegeEngineCalculationModel` | property |
| `MissionGameModels` | `public MissionGameModels(IEnumerable<GameModel>inputComponents) : base(inputComponents)` | constructor |
| `Clear` | `public static void Clear()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
