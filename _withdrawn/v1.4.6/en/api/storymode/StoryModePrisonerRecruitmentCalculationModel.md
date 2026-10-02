---
title: "StoryModePrisonerRecruitmentCalculationModel"
description: "StoryModePrisonerRecruitmentCalculationModel: a public class in StoryMode.GameComponents, inheriting PrisonerRecruitmentCalculationModel; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket storymode. Source: StoryMode/GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModePrisonerRecruitmentCalculationModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModePrisonerRecruitmentCalculationModel : PrisonerRecruitmentCalculationModel`
**File:** `StoryMode/GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

StoryModePrisonerRecruitmentCalculationModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs. It is a public class, implementing/inheriting PrisonerRecruitmentCalculationModel; the inheritance chain is StoryModePrisonerRecruitmentCalculationModel → PrisonerRecruitmentCalculationModel → MBGameModel → GameModel. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModePrisonerRecruitmentCalculationModel lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode.GameComponents`, inheritance chain StoryModePrisonerRecruitmentCalculationModel → PrisonerRecruitmentCalculationModel → MBGameModel → GameModel. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CalculateRecruitableNumber` | `public override int CalculateRecruitableNumber(PartyBase party, CharacterObject character)` | method |
| `GetConformityChangePerHour` | `public override ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject character)` | method |
| `GetConformityNeededToRecruitPrisoner` | `public override int GetConformityNeededToRecruitPrisoner(CharacterObject character)` | method |
| `GetPrisonerRecruitmentMoraleEffect` | `public override int GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)` | method |
| `IsPrisonerRecruitable` | `public override bool IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)` | method |
| `ShouldPartyRecruitPrisoners` | `public override bool ShouldPartyRecruitPrisoners(PartyBase party)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PrisonerRecruitmentCalculationModel](../../campaign-ext/PrisonerRecruitmentCalculationModel/)
- [same namespace StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel/)
- [same namespace StoryModeBanditDensityModel](../StoryModeBanditDensityModel/)
- [same namespace StoryModeBannerItemModel](../StoryModeBannerItemModel/)
- [same namespace StoryModeBattleRewardModel](../StoryModeBattleRewardModel/)
