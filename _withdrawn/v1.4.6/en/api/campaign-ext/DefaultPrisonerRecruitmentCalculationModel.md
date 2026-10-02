---
title: "DefaultPrisonerRecruitmentCalculationModel"
description: "DefaultPrisonerRecruitmentCalculationModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting PrisonerRecruitmentCalculationModel; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerRecruitmentCalculationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultPrisonerRecruitmentCalculationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPrisonerRecruitmentCalculationModel : PrisonerRecruitmentCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerRecruitmentCalculationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultPrisonerRecruitmentCalculationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerRecruitmentCalculationModel.cs. It is a public class, implementing/inheriting PrisonerRecruitmentCalculationModel; the inheritance chain is DefaultPrisonerRecruitmentCalculationModel → PrisonerRecruitmentCalculationModel → MBGameModel → GameModel. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPrisonerRecruitmentCalculationModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultPrisonerRecruitmentCalculationModel → PrisonerRecruitmentCalculationModel → MBGameModel → GameModel. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerRecruitmentCalculationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetConformityNeededToRecruitPrisoner` | `public override int GetConformityNeededToRecruitPrisoner(CharacterObject character)` | method |
| `GetConformityChangePerHour` | `public override ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject troopToBoost)` | method |
| `GetPrisonerRecruitmentMoraleEffect` | `public override int GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)` | method |
| `IsPrisonerRecruitable` | `public override bool IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)` | method |
| `ShouldPartyRecruitPrisoners` | `public override bool ShouldPartyRecruitPrisoners(PartyBase party)` | method |
| `CalculateRecruitableNumber` | `public override int CalculateRecruitableNumber(PartyBase party, CharacterObject character)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PrisonerRecruitmentCalculationModel](../PrisonerRecruitmentCalculationModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
