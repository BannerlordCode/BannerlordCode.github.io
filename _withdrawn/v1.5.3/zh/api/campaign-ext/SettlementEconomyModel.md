---
title: "SettlementEconomyModel"
description: "SettlementEconomyModel 的自动生成类参考。"
---
# SettlementEconomyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementEconomyModel : MBGameModel<SettlementEconomyModel> `
**Base:** MBGameModel<SettlementEconomyModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs

## 概述

`SettlementEconomyModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

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

## 参见

- [本区域目录](../)
- [API 参考](../../)
