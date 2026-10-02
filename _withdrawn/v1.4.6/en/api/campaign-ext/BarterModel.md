---
title: "BarterModel"
description: "BarterModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<BarterModel>; 4 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/BarterModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BarterModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BarterModel : MBGameModel<BarterModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BarterModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

BarterModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/BarterModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<BarterModel>; the inheritance chain is BarterModel → MBGameModel → GameModel. It exposes 4 public/protected members: 2 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BarterModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain BarterModel → MBGameModel → GameModel. The surface is method-led (methods 2/4, properties 2/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/BarterModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BarterCooldownWithHeroInDays` | `public abstract int BarterCooldownWithHeroInDays` | property |
| `MaximumPercentageOfNpcGoldToSpendAtBarter` | `public abstract float MaximumPercentageOfNpcGoldToSpendAtBarter` | property |
| `CalculateOverpayRelationIncreaseCosts` | `public abstract int CalculateOverpayRelationIncreaseCosts(Hero hero, float overpayAmount);` | method |
| `GetBarterPenalty` | `public abstract ExplainedNumber GetBarterPenalty(IFaction faction, ItemBarterable itemBarterable, Hero otherHero, PartyBase otherParty);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
