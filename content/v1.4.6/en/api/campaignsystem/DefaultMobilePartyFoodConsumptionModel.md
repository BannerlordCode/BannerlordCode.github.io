---
title: "DefaultMobilePartyFoodConsumptionModel"
description: "DefaultMobilePartyFoodConsumptionModel: a public class in TaleWorlds.CampaignSystem, inheriting MobilePartyFoodConsumptionModel; 4 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyFoodConsumptionModel.cs."
---
# DefaultMobilePartyFoodConsumptionModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultMobilePartyFoodConsumptionModel : MobilePartyFoodConsumptionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyFoodConsumptionModel.cs`

## Overview

DefaultMobilePartyFoodConsumptionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyFoodConsumptionModel.cs. It is a public class, implementing/inheriting MobilePartyFoodConsumptionModel; the inheritance chain is DefaultMobilePartyFoodConsumptionModel → MobilePartyFoodConsumptionModel → MBGameModel. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultMobilePartyFoodConsumptionModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultMobilePartyFoodConsumptionModel → MobilePartyFoodConsumptionModel → MBGameModel. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyFoodConsumptionModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NumberOfMenOnMapToEatOneFood` | `public override int NumberOfMenOnMapToEatOneFood` | property |
| `CalculateDailyBaseFoodConsumptionf` | `public override ExplainedNumber CalculateDailyBaseFoodConsumptionf(MobileParty party, bool includeDescription = false)` | method |
| `CalculateDailyFoodConsumptionf` | `public override ExplainedNumber CalculateDailyFoodConsumptionf(MobileParty party, ExplainedNumber baseConsumption)` | method |
| `DoesPartyConsumeFood` | `public override bool DoesPartyConsumeFood(MobileParty mobileParty)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MobilePartyFoodConsumptionModel](../MobilePartyFoodConsumptionModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
