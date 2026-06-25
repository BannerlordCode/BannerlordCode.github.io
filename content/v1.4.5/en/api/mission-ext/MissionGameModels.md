---
title: "MissionGameModels"
description: "Auto-generated class reference for MissionGameModels."
---
# MissionGameModels

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class MissionGameModels : GameModelsManager`
**Base:** `GameModelsManager`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionGameModels.cs`

## Overview

`MissionGameModels` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### Clear
`public static void Clear()`

**Purpose:** Removes all content from the current object.

```csharp
// Static call; no instance required
MissionGameModels.Clear();
```

## Usage Example

```csharp
MissionGameModels.Clear();
```

## See Also

- [Area Index](../)