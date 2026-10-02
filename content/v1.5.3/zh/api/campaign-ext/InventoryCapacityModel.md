---
title: "InventoryCapacityModel"
description: "InventoryCapacityModel 的自动生成类参考。"
---
# InventoryCapacityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class InventoryCapacityModel : MBGameModel<InventoryCapacityModel> `
**Base:** MBGameModel<InventoryCapacityModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/InventoryCapacityModel.cs

## 概述

`InventoryCapacityModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/InventoryCapacityModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CalculateInventoryCapacity
`public abstract ExplainedNumber CalculateInventoryCapacity(MobileParty mobileParty,bool isCurrentlyAtSea,bool includeDescriptions = false,int additionalManOnFoot = 0,int additionalSpareMounts = 0,int additionalPackAnimals = 0,bool includeFollowers = false)`

### GetItemAverageWeight
`public abstract int GetItemAverageWeight()`

### GetItemEffectiveWeight
`public abstract float GetItemEffectiveWeight(EquipmentElement equipmentElement,MobileParty mobileParty,bool isCurrentlyAtSea,out TextObject description)`

### CalculateTotalWeightCarried
`public abstract ExplainedNumber CalculateTotalWeightCarried(MobileParty mobileParty,bool isCurrentlyAtSea,bool includeDescriptions = false)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
