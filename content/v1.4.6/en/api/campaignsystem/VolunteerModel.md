---
title: "VolunteerModel"
description: "VolunteerModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<VolunteerModel>; 6 exposed members (5 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/VolunteerModel.cs."
---
# VolunteerModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class VolunteerModel : MBGameModel<VolunteerModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VolunteerModel.cs`

## Overview

VolunteerModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/VolunteerModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<VolunteerModel>; the inheritance chain is VolunteerModel → MBGameModel. It exposes 6 public/protected members: 5 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VolunteerModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain VolunteerModel → MBGameModel. The surface is method-led (methods 5/6, properties 1/6), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/VolunteerModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaximumIndexHeroCanRecruitFromHero` | `public abstract int MaximumIndexHeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int useValueAsRelation = -101);` | method |
| `MaximumIndexGarrisonCanRecruitFromHero` | `public abstract int MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement, Hero sellerHero);` | method |
| `GetDailyVolunteerProductionProbability` | `public abstract float GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement);` | method |
| `GetBasicVolunteer` | `public abstract CharacterObject GetBasicVolunteer(Hero hero);` | method |
| `CanHaveRecruits` | `public abstract bool CanHaveRecruits(Hero hero);` | method |
| `MaxVolunteerTier` | `public abstract int MaxVolunteerTier` | property |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
