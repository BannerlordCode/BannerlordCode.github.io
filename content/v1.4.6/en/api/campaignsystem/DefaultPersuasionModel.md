---
title: "DefaultPersuasionModel"
description: "DefaultPersuasionModel: a public class in TaleWorlds.CampaignSystem, inheriting PersuasionModel; 7 exposed members (7 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPersuasionModel.cs."
---
# DefaultPersuasionModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPersuasionModel : PersuasionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPersuasionModel.cs`

## Overview

DefaultPersuasionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPersuasionModel.cs. It is a public class, implementing/inheriting PersuasionModel; the inheritance chain is DefaultPersuasionModel → PersuasionModel → MBGameModel. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPersuasionModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultPersuasionModel → PersuasionModel → MBGameModel. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPersuasionModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSkillXpFromPersuasion` | `public override int GetSkillXpFromPersuasion(PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)` | method |
| `GetChances` | `public override void GetChances(PersuasionOptionArgs optionArgs, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance, float difficultyMultiplier)` | method |
| `GetEffectChances` | `public override void GetEffectChances(PersuasionOptionArgs option, out float moveToNextStageChance, out float blockRandomOptionChance, float difficultyMultiplier)` | method |
| `GetArgumentStrengthBasedOnTargetTraits` | `public override PersuasionArgumentStrength GetArgumentStrengthBasedOnTargetTraits(CharacterObject character, Tuple<TraitObject, int>[]traitCorrelations)` | method |
| `CalculateInitialPersuasionProgress` | `public override float CalculateInitialPersuasionProgress(CharacterObject character, float goalValue, float successValue)` | method |
| `CalculatePersuasionGoalValue` | `public override float CalculatePersuasionGoalValue(CharacterObject oneToOneConversationCharacter, float successValue)` | method |
| `GetDifficulty` | `public override float GetDifficulty(PersuasionDifficulty difficulty)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PersuasionModel](../PersuasionModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
