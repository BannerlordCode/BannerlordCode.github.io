---
title: "VolunteerModel"
description: "VolunteerModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<VolunteerModel>; 6 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/VolunteerModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VolunteerModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class VolunteerModel : MBGameModel<VolunteerModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VolunteerModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

VolunteerModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/VolunteerModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<VolunteerModel>; the inheritance chain is VolunteerModel → MBGameModel → GameModel. It exposes 6 public/protected members: 5 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VolunteerModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain VolunteerModel → MBGameModel → GameModel. The surface is method-led (methods 5/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/VolunteerModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MaximumIndexHeroCanRecruitFromHero` | `public abstract int MaximumIndexHeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int useValueAsRelation = -101);` | method |
| `MaximumIndexGarrisonCanRecruitFromHero` | `public abstract int MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement, Hero sellerHero);` | method |
| `GetDailyVolunteerProductionProbability` | `public abstract float GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement);` | method |
| `GetBasicVolunteer` | `public abstract CharacterObject GetBasicVolunteer(Hero hero);` | method |
| `CanHaveRecruits` | `public abstract bool CanHaveRecruits(Hero hero);` | method |
| `MaxVolunteerTier` | `public abstract int MaxVolunteerTier` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
