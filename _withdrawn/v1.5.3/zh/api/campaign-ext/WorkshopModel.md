---
title: "WorkshopModel"
description: "WorkshopModel 的自动生成类参考。"
---
# WorkshopModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class WorkshopModel : MBGameModel<WorkshopModel> `
**Base:** MBGameModel<WorkshopModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/WorkshopModel.cs

## 概述

`WorkshopModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/WorkshopModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

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

## 参见

- [本区域目录](../)
- [API 参考](../../)
