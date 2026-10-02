---
title: "DefaultWorkshopModel"
description: "DefaultWorkshopModel: a public class in TaleWorlds.CampaignSystem, inheriting WorkshopModel; 15 exposed members (8 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultWorkshopModel.cs."
---
# DefaultWorkshopModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultWorkshopModel : WorkshopModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultWorkshopModel.cs`

## Overview

DefaultWorkshopModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultWorkshopModel.cs. It is a public class, implementing/inheriting WorkshopModel; the inheritance chain is DefaultWorkshopModel → WorkshopModel → MBGameModel. It exposes 15 public/protected members: 8 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultWorkshopModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultWorkshopModel → WorkshopModel → MBGameModel. The surface is method-led (methods 8/15, properties 7/15), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultWorkshopModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WarehouseCapacity` | `public override int WarehouseCapacity` | property |
| `DaysForPlayerSaveWorkshopFromBankruptcy` | `public override int DaysForPlayerSaveWorkshopFromBankruptcy` | property |
| `CapitalLowLimit` | `public override int CapitalLowLimit` | property |
| `InitialCapital` | `public override int InitialCapital` | property |
| `DailyExpense` | `public override int DailyExpense` | property |
| `DefaultWorkshopCountInSettlement` | `public override int DefaultWorkshopCountInSettlement` | property |
| `MaximumWorkshopsPlayerCanHave` | `public override int MaximumWorkshopsPlayerCanHave` | property |
| `GetEffectiveConversionSpeedOfProduction` | `public override ExplainedNumber GetEffectiveConversionSpeedOfProduction(Workshop workshop, float speed, bool includeDescription)` | method |
| `GetMaxWorkshopCountForClanTier` | `public override int GetMaxWorkshopCountForClanTier(int tier)` | method |
| `GetCostForPlayer` | `public override int GetCostForPlayer(Workshop workshop)` | method |
| `GetCostForNotable` | `public override int GetCostForNotable(Workshop workshop)` | method |
| `GetNotableOwnerForWorkshop` | `public override Hero GetNotableOwnerForWorkshop(Workshop workshop)` | method |
| `GetConvertProductionCost` | `public override int GetConvertProductionCost(WorkshopType workshopType)` | method |
| `CanPlayerSellWorkshop` | `public override bool CanPlayerSellWorkshop(Workshop workshop, out TextObject explanation)` | method |
| `GetTradeXpPerWarehouseProduction` | `public override float GetTradeXpPerWarehouseProduction(EquipmentElement production)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface WorkshopModel](../WorkshopModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
