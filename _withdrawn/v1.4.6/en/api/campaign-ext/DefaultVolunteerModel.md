---
title: "DefaultVolunteerModel"
description: "DefaultVolunteerModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting VolunteerModel; 6 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultVolunteerModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultVolunteerModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultVolunteerModel : VolunteerModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVolunteerModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultVolunteerModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultVolunteerModel.cs. It is a public class, implementing/inheriting VolunteerModel; the inheritance chain is DefaultVolunteerModel → VolunteerModel → MBGameModel → GameModel. It exposes 6 public/protected members: 5 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultVolunteerModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultVolunteerModel → VolunteerModel → MBGameModel → GameModel. The surface is method-led (methods 5/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultVolunteerModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MaximumIndexHeroCanRecruitFromHero` | `public override int MaximumIndexHeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int useValueAsRelation = -101)` | method |
| `MaximumIndexGarrisonCanRecruitFromHero` | `public override int MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement, Hero sellerHero)` | method |
| `GetDailyVolunteerProductionProbability` | `public override float GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement)` | method |
| `GetBasicVolunteer` | `public override CharacterObject GetBasicVolunteer(Hero sellerHero)` | method |
| `CanHaveRecruits` | `public override bool CanHaveRecruits(Hero hero)` | method |
| `MaxVolunteerTier` | `public override int MaxVolunteerTier` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface VolunteerModel](../VolunteerModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
