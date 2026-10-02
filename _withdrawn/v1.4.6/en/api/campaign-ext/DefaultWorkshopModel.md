---
title: "DefaultWorkshopModel"
description: "DefaultWorkshopModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting WorkshopModel; 15 exposed members (8 methods, 7 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultWorkshopModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultWorkshopModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultWorkshopModel : WorkshopModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultWorkshopModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultWorkshopModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultWorkshopModel.cs. It is a public class, implementing/inheriting WorkshopModel; the inheritance chain is DefaultWorkshopModel → WorkshopModel → MBGameModel → GameModel. It exposes 15 public/protected members: 8 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultWorkshopModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultWorkshopModel → WorkshopModel → MBGameModel → GameModel. The surface is method-led (methods 8/15, properties 7/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultWorkshopModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface WorkshopModel](../WorkshopModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
