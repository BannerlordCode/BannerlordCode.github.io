---
title: "StoryModePrisonerRecruitmentCalculationModel"
description: "StoryModePrisonerRecruitmentCalculationModel: a public class in StoryMode, inheriting PrisonerRecruitmentCalculationModel; 6 exposed members (6 methods, 0 properties, 0 fields). Source: StoryMode/GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs."
---
# StoryModePrisonerRecruitmentCalculationModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModePrisonerRecruitmentCalculationModel : PrisonerRecruitmentCalculationModel`
**File:** `StoryMode/GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs`

## Overview

StoryModePrisonerRecruitmentCalculationModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs. It is a public class, implementing/inheriting PrisonerRecruitmentCalculationModel; the inheritance chain is StoryModePrisonerRecruitmentCalculationModel → PrisonerRecruitmentCalculationModel. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModePrisonerRecruitmentCalculationModel is a top-level type in StoryMode, namespace differing from (StoryMode.GameComponents) the module directory; inheritance chain StoryModePrisonerRecruitmentCalculationModel → PrisonerRecruitmentCalculationModel. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. PrisonerRecruitmentCalculationModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateRecruitableNumber` | `public override int CalculateRecruitableNumber(PartyBase party, CharacterObject character)` | method |
| `GetConformityChangePerHour` | `public override ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject character)` | method |
| `GetConformityNeededToRecruitPrisoner` | `public override int GetConformityNeededToRecruitPrisoner(CharacterObject character)` | method |
| `GetPrisonerRecruitmentMoraleEffect` | `public override int GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)` | method |
| `IsPrisonerRecruitable` | `public override bool IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)` | method |
| `ShouldPartyRecruitPrisoners` | `public override bool ShouldPartyRecruitPrisoners(PartyBase party)` | method |

## See Also

- [↑ storymode module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel)
- [same namespace StoryModeBanditDensityModel](../StoryModeBanditDensityModel)
- [same namespace StoryModeBannerItemModel](../StoryModeBannerItemModel)
- [same namespace StoryModeBattleRewardModel](../StoryModeBattleRewardModel)
