---
title: "DefaultVolunteerModel"
description: "DefaultVolunteerModel: a public class in TaleWorlds.CampaignSystem, inheriting VolunteerModel; 6 exposed members (5 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultVolunteerModel.cs."
---
# DefaultVolunteerModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultVolunteerModel : VolunteerModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVolunteerModel.cs`

## Overview

DefaultVolunteerModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultVolunteerModel.cs. It is a public class, implementing/inheriting VolunteerModel; the inheritance chain is DefaultVolunteerModel → VolunteerModel → MBGameModel. It exposes 6 public/protected members: 5 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultVolunteerModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultVolunteerModel → VolunteerModel → MBGameModel. The surface is method-led (methods 5/6, properties 1/6), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultVolunteerModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaximumIndexHeroCanRecruitFromHero` | `public override int MaximumIndexHeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int useValueAsRelation = -101)` | method |
| `MaximumIndexGarrisonCanRecruitFromHero` | `public override int MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement, Hero sellerHero)` | method |
| `GetDailyVolunteerProductionProbability` | `public override float GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement)` | method |
| `GetBasicVolunteer` | `public override CharacterObject GetBasicVolunteer(Hero sellerHero)` | method |
| `CanHaveRecruits` | `public override bool CanHaveRecruits(Hero hero)` | method |
| `MaxVolunteerTier` | `public override int MaxVolunteerTier` | property |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface VolunteerModel](../VolunteerModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
