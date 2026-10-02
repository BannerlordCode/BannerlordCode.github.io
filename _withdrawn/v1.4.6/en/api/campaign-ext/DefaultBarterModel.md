---
title: "DefaultBarterModel"
description: "DefaultBarterModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting BarterModel; 4 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultBarterModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultBarterModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultBarterModel : BarterModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBarterModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultBarterModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultBarterModel.cs. It is a public class, implementing/inheriting BarterModel; the inheritance chain is DefaultBarterModel → BarterModel → MBGameModel → GameModel. It exposes 4 public/protected members: 2 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultBarterModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultBarterModel → BarterModel → MBGameModel → GameModel. The surface is method-led (methods 2/4, properties 2/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultBarterModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BarterCooldownWithHeroInDays` | `public override int BarterCooldownWithHeroInDays` | property |
| `MaximumPercentageOfNpcGoldToSpendAtBarter` | `public override float MaximumPercentageOfNpcGoldToSpendAtBarter` | property |
| `CalculateOverpayRelationIncreaseCosts` | `public override int CalculateOverpayRelationIncreaseCosts(Hero hero, float overpayAmount)` | method |
| `GetBarterPenalty` | `public override ExplainedNumber GetBarterPenalty(IFaction faction, ItemBarterable itemBarterable, Hero otherHero, PartyBase otherParty)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BarterModel](../BarterModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
