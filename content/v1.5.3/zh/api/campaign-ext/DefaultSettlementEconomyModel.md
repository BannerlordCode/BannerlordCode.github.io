---
title: "DefaultSettlementEconomyModel"
description: "DefaultSettlementEconomyModel 的自动生成类参考。"
---
# DefaultSettlementEconomyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementEconomyModel : SettlementEconomyModel `
**Base:** SettlementEconomyModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementEconomyModel.cs

## 概述

`DefaultSettlementEconomyModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementEconomyModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetSupplyDemandForCategory
`public override ValueTuple<float,float> GetSupplyDemandForCategory(Town town,ItemCategory category,float dailySupply,float dailyDemand,float oldSupply,float oldDemand) `

### GetDailyDemandForCategory
`public override float GetDailyDemandForCategory(Town town,ItemCategory category,int extraProsperity) `

### GetTownGoldChange
`public override int GetTownGoldChange(Town town) `

### CalculateDailySettlementBudgetForItemCategory
`public override float CalculateDailySettlementBudgetForItemCategory(Town town,float demand,ItemCategory category) `

### GetDemandChangeFromValue
`public override float GetDemandChangeFromValue(float purchaseValue) `

### GetEstimatedDemandForCategory
`public override float GetEstimatedDemandForCategory(Town town,ItemData itemData,ItemCategory category) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
