---
title: "WorkshopModel"
description: "WorkshopModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<WorkshopModel>; 15 exposed members (8 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/WorkshopModel.cs."
---
# WorkshopModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class WorkshopModel : MBGameModel<WorkshopModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/WorkshopModel.cs`

## Overview

WorkshopModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/WorkshopModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<WorkshopModel>; the inheritance chain is WorkshopModel → MBGameModel. It exposes 15 public/protected members: 8 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WorkshopModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain WorkshopModel → MBGameModel. The surface is method-led (methods 8/15, properties 7/15), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/WorkshopModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DaysForPlayerSaveWorkshopFromBankruptcy` | `public abstract int DaysForPlayerSaveWorkshopFromBankruptcy` | property |
| `CapitalLowLimit` | `public abstract int CapitalLowLimit` | property |
| `InitialCapital` | `public abstract int InitialCapital` | property |
| `GetMaxWorkshopCountForClanTier` | `public abstract int GetMaxWorkshopCountForClanTier(int tier);` | method |
| `GetCostForPlayer` | `public abstract int GetCostForPlayer(Workshop workshop);` | method |
| `DailyExpense` | `public abstract int DailyExpense` | property |
| `GetCostForNotable` | `public abstract int GetCostForNotable(Workshop workshop);` | method |
| `WarehouseCapacity` | `public abstract int WarehouseCapacity` | property |
| `DefaultWorkshopCountInSettlement` | `public abstract int DefaultWorkshopCountInSettlement` | property |
| `MaximumWorkshopsPlayerCanHave` | `public abstract int MaximumWorkshopsPlayerCanHave` | property |
| `GetNotableOwnerForWorkshop` | `public abstract Hero GetNotableOwnerForWorkshop(Workshop workshop);` | method |
| `GetEffectiveConversionSpeedOfProduction` | `public abstract ExplainedNumber GetEffectiveConversionSpeedOfProduction(Workshop workshop, float speed, bool includeDescriptions);` | method |
| `GetConvertProductionCost` | `public abstract int GetConvertProductionCost(WorkshopType workshopType);` | method |
| `CanPlayerSellWorkshop` | `public abstract bool CanPlayerSellWorkshop(Workshop workshop, out TextObject explanation);` | method |
| `GetTradeXpPerWarehouseProduction` | `public abstract float GetTradeXpPerWarehouseProduction(EquipmentElement production);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
