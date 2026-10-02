---
title: "DefaultBarterModel"
description: "DefaultBarterModel: a public class in TaleWorlds.CampaignSystem, inheriting BarterModel; 4 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultBarterModel.cs."
---
# DefaultBarterModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultBarterModel : BarterModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBarterModel.cs`

## Overview

DefaultBarterModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultBarterModel.cs. It is a public class, implementing/inheriting BarterModel; the inheritance chain is DefaultBarterModel → BarterModel → MBGameModel. It exposes 4 public/protected members: 2 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultBarterModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultBarterModel → BarterModel → MBGameModel. The surface is method-led (methods 2/4, properties 2/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultBarterModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BarterCooldownWithHeroInDays` | `public override int BarterCooldownWithHeroInDays` | property |
| `MaximumPercentageOfNpcGoldToSpendAtBarter` | `public override float MaximumPercentageOfNpcGoldToSpendAtBarter` | property |
| `CalculateOverpayRelationIncreaseCosts` | `public override int CalculateOverpayRelationIncreaseCosts(Hero hero, float overpayAmount)` | method |
| `GetBarterPenalty` | `public override ExplainedNumber GetBarterPenalty(IFaction faction, ItemBarterable itemBarterable, Hero otherHero, PartyBase otherParty)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BarterModel](../BarterModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
