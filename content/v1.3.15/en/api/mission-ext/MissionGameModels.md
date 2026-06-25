---
title: "MissionGameModels"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGameModels`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionGameModels

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class MissionGameModels : GameModelsManager`
**Base:** `GameModelsManager`
**Area:** mission-ext

## Overview

`MissionGameModels` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

**Purpose:** Handles logic related to `clear`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MissionGameModels.Clear();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
