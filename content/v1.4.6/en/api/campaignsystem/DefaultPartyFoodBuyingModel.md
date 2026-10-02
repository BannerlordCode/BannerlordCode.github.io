---
title: "DefaultPartyFoodBuyingModel"
description: "DefaultPartyFoodBuyingModel: a public class in TaleWorlds.CampaignSystem, inheriting PartyFoodBuyingModel; 4 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPartyFoodBuyingModel.cs."
---
# DefaultPartyFoodBuyingModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartyFoodBuyingModel : PartyFoodBuyingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyFoodBuyingModel.cs`

## Overview

DefaultPartyFoodBuyingModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPartyFoodBuyingModel.cs. It is a public class, implementing/inheriting PartyFoodBuyingModel; the inheritance chain is DefaultPartyFoodBuyingModel → PartyFoodBuyingModel → MBGameModel. It exposes 4 public/protected members: 1 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPartyFoodBuyingModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultPartyFoodBuyingModel → PartyFoodBuyingModel → MBGameModel. The surface is property-led (properties 3/4, methods 1/4), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPartyFoodBuyingModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MinimumDaysFoodToLastWhileBuyingFoodFromTown` | `public override float MinimumDaysFoodToLastWhileBuyingFoodFromTown` | property |
| `MinimumDaysFoodToLastWhileBuyingFoodFromVillage` | `public override float MinimumDaysFoodToLastWhileBuyingFoodFromVillage` | property |
| `LowCostFoodPriceAverage` | `public override float LowCostFoodPriceAverage` | property |
| `FindItemToBuy` | `public override void FindItemToBuy(MobileParty mobileParty, Settlement settlement, out ItemRosterElement itemElement, out float itemElementsPrice)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PartyFoodBuyingModel](../PartyFoodBuyingModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
