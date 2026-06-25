---
title: "DefaultSkillEffects"
description: "Auto-generated class reference for DefaultSkillEffects."
---
# DefaultSkillEffects

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSkillEffects`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/DefaultSkillEffects.cs`

## Overview

`DefaultSkillEffects` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OneHandedSpeed` | `public static SkillEffect OneHandedSpeed { get; }` |
| `OneHandedDamage` | `public static SkillEffect OneHandedDamage { get; }` |
| `TwoHandedSpeed` | `public static SkillEffect TwoHandedSpeed { get; }` |
| `TwoHandedDamage` | `public static SkillEffect TwoHandedDamage { get; }` |
| `PolearmSpeed` | `public static SkillEffect PolearmSpeed { get; }` |
| `PolearmDamage` | `public static SkillEffect PolearmDamage { get; }` |
| `BowDamage` | `public static SkillEffect BowDamage { get; }` |
| `BowAccuracy` | `public static SkillEffect BowAccuracy { get; }` |
| `ThrowingSpeed` | `public static SkillEffect ThrowingSpeed { get; }` |
| `ThrowingDamage` | `public static SkillEffect ThrowingDamage { get; }` |
| `ThrowingAccuracy` | `public static SkillEffect ThrowingAccuracy { get; }` |
| `CrossbowReloadSpeed` | `public static SkillEffect CrossbowReloadSpeed { get; }` |
| `CrossbowAccuracy` | `public static SkillEffect CrossbowAccuracy { get; }` |
| `HorseSpeed` | `public static SkillEffect HorseSpeed { get; }` |
| `HorseManeuver` | `public static SkillEffect HorseManeuver { get; }` |
| `MountedWeaponDamagePenalty` | `public static SkillEffect MountedWeaponDamagePenalty { get; }` |
| `MountedWeaponSpeedPenalty` | `public static SkillEffect MountedWeaponSpeedPenalty { get; }` |
| `DismountResistance` | `public static SkillEffect DismountResistance { get; }` |
| `AthleticsSpeedFactor` | `public static SkillEffect AthleticsSpeedFactor { get; }` |
| `AthleticsWeightFactor` | `public static SkillEffect AthleticsWeightFactor { get; }` |
| `KnockBackResistance` | `public static SkillEffect KnockBackResistance { get; }` |
| `KnockDownResistance` | `public static SkillEffect KnockDownResistance { get; }` |
| `SmithingLevel` | `public static SkillEffect SmithingLevel { get; }` |
| `TacticsAdvantage` | `public static SkillEffect TacticsAdvantage { get; }` |
| `TacticsTroopSacrificeReduction` | `public static SkillEffect TacticsTroopSacrificeReduction { get; }` |
| `TrackingRadius` | `public static SkillEffect TrackingRadius { get; }` |
| `TrackingSpottingDistance` | `public static SkillEffect TrackingSpottingDistance { get; }` |
| `TrackingTrackInformation` | `public static SkillEffect TrackingTrackInformation { get; }` |
| `RogueryLootBonus` | `public static SkillEffect RogueryLootBonus { get; }` |
| `CharmRelationBonus` | `public static SkillEffect CharmRelationBonus { get; }` |
| `TradePenaltyReduction` | `public static SkillEffect TradePenaltyReduction { get; }` |
| `SurgeonSurvivalBonus` | `public static SkillEffect SurgeonSurvivalBonus { get; }` |
| `SiegeEngineProductionBonus` | `public static SkillEffect SiegeEngineProductionBonus { get; }` |
| `TownProjectBuildingBonus` | `public static SkillEffect TownProjectBuildingBonus { get; }` |
| `HealingRateBonusForHeroes` | `public static SkillEffect HealingRateBonusForHeroes { get; }` |
| `HealingRateBonusForRegulars` | `public static SkillEffect HealingRateBonusForRegulars { get; }` |
| `GovernorHealingRateBonus` | `public static SkillEffect GovernorHealingRateBonus { get; }` |
| `LeadershipMoraleBonus` | `public static SkillEffect LeadershipMoraleBonus { get; }` |
| `LeadershipGarrisonSizeBonus` | `public static SkillEffect LeadershipGarrisonSizeBonus { get; }` |
| `StewardPartySizeBonus` | `public static SkillEffect StewardPartySizeBonus { get; }` |
| `SneakDamage` | `public static SkillEffect SneakDamage { get; }` |
| `CrouchedSpeed` | `public static SkillEffect CrouchedSpeed { get; }` |
| `NoiseSuppression` | `public static SkillEffect NoiseSuppression { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
DefaultSkillEffects instance = ...;
```

## See Also

- [Area Index](../)