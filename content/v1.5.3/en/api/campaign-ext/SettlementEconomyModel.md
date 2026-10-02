---
title: "SettlementEconomyModel"
description: "Auto-generated class reference for SettlementEconomyModel."
---
# SettlementEconomyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementEconomyModel : MBGameModel<SettlementEconomyModel> `
**Base:** MBGameModel<SettlementEconomyModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs

## Overview

Auto-generated stub for `SettlementEconomyModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetEstimatedDemandForCategory
`public abstract float GetEstimatedDemandForCategory(Town town,ItemData itemData,ItemCategory category)`

### GetDailyDemandForCategory
`public abstract float GetDailyDemandForCategory(Town town,ItemCategory category,int extraProsperity = 0)`

### GetDemandChangeFromValue
`public abstract float GetDemandChangeFromValue(float purchaseValue)`

### GetSupplyDemandForCategory
`public abstract ValueTuple<float,float> GetSupplyDemandForCategory(Town town,ItemCategory category,float dailySupply,float dailyDemand,float oldSupply,float oldDemand)`

### GetTownGoldChange
`public abstract int GetTownGoldChange(Town town)`

### CalculateDailySettlementBudgetForItemCategory
`public abstract float CalculateDailySettlementBudgetForItemCategory(Town town,float demand,ItemCategory category)`

## See Also

- [Section index](../)
