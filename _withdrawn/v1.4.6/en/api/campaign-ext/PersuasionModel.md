---
title: "PersuasionModel"
description: "PersuasionModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<PersuasionModel>; 7 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/PersuasionModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PersuasionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PersuasionModel : MBGameModel<PersuasionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PersuasionModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

PersuasionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/PersuasionModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<PersuasionModel>; the inheritance chain is PersuasionModel → MBGameModel → GameModel. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PersuasionModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain PersuasionModel → MBGameModel → GameModel. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/PersuasionModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetSkillXpFromPersuasion` | `public abstract int GetSkillXpFromPersuasion(PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient);` | method |
| `GetChances` | `public abstract void GetChances(PersuasionOptionArgs optionArgs, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance, float difficultyMultiplier);` | method |
| `GetEffectChances` | `public abstract void GetEffectChances(PersuasionOptionArgs option, out float moveToNextStageChance, out float blockRandomOptionChance, float difficultyMultiplier);` | method |
| `GetArgumentStrengthBasedOnTargetTraits` | `public abstract PersuasionArgumentStrength GetArgumentStrengthBasedOnTargetTraits(CharacterObject character, Tuple<TraitObject, int>[]traitCorrelation);` | method |
| `GetDifficulty` | `public abstract float GetDifficulty(PersuasionDifficulty difficulty);` | method |
| `CalculateInitialPersuasionProgress` | `public abstract float CalculateInitialPersuasionProgress(CharacterObject character, float goalValue, float successValue);` | method |
| `CalculatePersuasionGoalValue` | `public abstract float CalculatePersuasionGoalValue(CharacterObject oneToOneConversationCharacter, float successValue);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
