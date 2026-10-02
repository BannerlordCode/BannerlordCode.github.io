---
title: "DefaultMobilePartyFoodConsumptionModel"
description: "DefaultMobilePartyFoodConsumptionModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting MobilePartyFoodConsumptionModel; 4 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyFoodConsumptionModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultMobilePartyFoodConsumptionModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultMobilePartyFoodConsumptionModel : MobilePartyFoodConsumptionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyFoodConsumptionModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultMobilePartyFoodConsumptionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyFoodConsumptionModel.cs. It is a public class, implementing/inheriting MobilePartyFoodConsumptionModel; the inheritance chain is DefaultMobilePartyFoodConsumptionModel → MobilePartyFoodConsumptionModel → MBGameModel → GameModel. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultMobilePartyFoodConsumptionModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultMobilePartyFoodConsumptionModel → MobilePartyFoodConsumptionModel → MBGameModel → GameModel. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyFoodConsumptionModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `NumberOfMenOnMapToEatOneFood` | `public override int NumberOfMenOnMapToEatOneFood` | property |
| `CalculateDailyBaseFoodConsumptionf` | `public override ExplainedNumber CalculateDailyBaseFoodConsumptionf(MobileParty party, bool includeDescription = false)` | method |
| `CalculateDailyFoodConsumptionf` | `public override ExplainedNumber CalculateDailyFoodConsumptionf(MobileParty party, ExplainedNumber baseConsumption)` | method |
| `DoesPartyConsumeFood` | `public override bool DoesPartyConsumeFood(MobileParty mobileParty)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MobilePartyFoodConsumptionModel](../MobilePartyFoodConsumptionModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
