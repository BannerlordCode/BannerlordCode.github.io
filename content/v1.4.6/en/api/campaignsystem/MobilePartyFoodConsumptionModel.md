---
title: "MobilePartyFoodConsumptionModel"
description: "MobilePartyFoodConsumptionModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<MobilePartyFoodConsumptionModel>; 4 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyFoodConsumptionModel.cs."
---
# MobilePartyFoodConsumptionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MobilePartyFoodConsumptionModel : MBGameModel<MobilePartyFoodConsumptionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyFoodConsumptionModel.cs`

## Overview

MobilePartyFoodConsumptionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyFoodConsumptionModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<MobilePartyFoodConsumptionModel>; the inheritance chain is MobilePartyFoodConsumptionModel → MBGameModel. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MobilePartyFoodConsumptionModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain MobilePartyFoodConsumptionModel → MBGameModel. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyFoodConsumptionModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NumberOfMenOnMapToEatOneFood` | `public abstract int NumberOfMenOnMapToEatOneFood` | property |
| `CalculateDailyBaseFoodConsumptionf` | `public abstract ExplainedNumber CalculateDailyBaseFoodConsumptionf(MobileParty party, bool includeDescription = false);` | method |
| `CalculateDailyFoodConsumptionf` | `public abstract ExplainedNumber CalculateDailyFoodConsumptionf(MobileParty party, ExplainedNumber baseConsumption);` | method |
| `DoesPartyConsumeFood` | `public abstract bool DoesPartyConsumeFood(MobileParty mobileParty);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
