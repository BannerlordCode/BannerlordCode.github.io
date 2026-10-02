---
title: "PrisonerRecruitmentCalculationModel"
description: "PrisonerRecruitmentCalculationModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<PrisonerRecruitmentCalculationModel>; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonerRecruitmentCalculationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PrisonerRecruitmentCalculationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PrisonerRecruitmentCalculationModel : MBGameModel<PrisonerRecruitmentCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonerRecruitmentCalculationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

PrisonerRecruitmentCalculationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonerRecruitmentCalculationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<PrisonerRecruitmentCalculationModel>; the inheritance chain is PrisonerRecruitmentCalculationModel → MBGameModel → GameModel. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PrisonerRecruitmentCalculationModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain PrisonerRecruitmentCalculationModel → MBGameModel → GameModel. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonerRecruitmentCalculationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetConformityNeededToRecruitPrisoner` | `public abstract int GetConformityNeededToRecruitPrisoner(CharacterObject character);` | method |
| `GetConformityChangePerHour` | `public abstract ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject character);` | method |
| `GetPrisonerRecruitmentMoraleEffect` | `public abstract int GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num);` | method |
| `IsPrisonerRecruitable` | `public abstract bool IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded);` | method |
| `ShouldPartyRecruitPrisoners` | `public abstract bool ShouldPartyRecruitPrisoners(PartyBase party);` | method |
| `CalculateRecruitableNumber` | `public abstract int CalculateRecruitableNumber(PartyBase party, CharacterObject character);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
