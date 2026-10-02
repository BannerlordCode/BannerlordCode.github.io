---
title: "WorkshopModel"
description: "Auto-generated class reference for WorkshopModel."
---
# WorkshopModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class WorkshopModel : MBGameModel<WorkshopModel> `
**Base:** MBGameModel<WorkshopModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/WorkshopModel.cs

## Overview

Auto-generated stub for `WorkshopModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetMaxWorkshopCountForClanTier
`public abstract int GetMaxWorkshopCountForClanTier(int tier)`

### GetCostForPlayer
`public abstract int GetCostForPlayer(Workshop workshop)`

### GetCostForNotable
`public abstract int GetCostForNotable(Workshop workshop)`

### GetNotableOwnerForWorkshop
`public abstract Hero GetNotableOwnerForWorkshop(Workshop workshop)`

### GetEffectiveConversionSpeedOfProduction
`public abstract ExplainedNumber GetEffectiveConversionSpeedOfProduction(Workshop workshop,float speed,bool includeDescriptions)`

### GetConvertProductionCost
`public abstract int GetConvertProductionCost(WorkshopType workshopType)`

### CanPlayerSellWorkshop
`public abstract bool CanPlayerSellWorkshop(Workshop workshop,out TextObject explanation)`

### GetTradeXpPerWarehouseProduction
`public abstract float GetTradeXpPerWarehouseProduction(EquipmentElement production)`

## See Also

- [Section index](../)
