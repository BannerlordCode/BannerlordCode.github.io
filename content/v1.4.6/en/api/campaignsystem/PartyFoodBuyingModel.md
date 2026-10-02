---
title: "PartyFoodBuyingModel"
description: "PartyFoodBuyingModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<PartyFoodBuyingModel>; 4 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/PartyFoodBuyingModel.cs."
---
# PartyFoodBuyingModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PartyFoodBuyingModel : MBGameModel<PartyFoodBuyingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyFoodBuyingModel.cs`

## Overview

PartyFoodBuyingModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/PartyFoodBuyingModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<PartyFoodBuyingModel>; the inheritance chain is PartyFoodBuyingModel → MBGameModel. It exposes 4 public/protected members: 1 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyFoodBuyingModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain PartyFoodBuyingModel → MBGameModel. The surface is property-led (properties 3/4, methods 1/4), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/PartyFoodBuyingModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FindItemToBuy` | `public abstract void FindItemToBuy(MobileParty mobileParty, Settlement settlement, out ItemRosterElement itemRosterElement, out float itemElementsPrice);` | method |
| `MinimumDaysFoodToLastWhileBuyingFoodFromTown` | `public abstract float MinimumDaysFoodToLastWhileBuyingFoodFromTown` | property |
| `MinimumDaysFoodToLastWhileBuyingFoodFromVillage` | `public abstract float MinimumDaysFoodToLastWhileBuyingFoodFromVillage` | property |
| `LowCostFoodPriceAverage` | `public abstract float LowCostFoodPriceAverage` | property |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
