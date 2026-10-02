---
title: "CampaignAdvancedStartingPlayerOptionsCampaignBehavior"
description: "CampaignAdvancedStartingPlayerOptionsCampaignBehavior 的自动生成类参考。"
---
# CampaignAdvancedStartingPlayerOptionsCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignAdvancedStartingPlayerOptionsCampaignBehavior : CampaignBehaviorBase `
**Base:** CampaignBehaviorBase
**Source:** TaleWorlds.CampaignSystem/CampaignBehaviors/CampaignAdvancedStartingPlayerOptionsCampaignBehavior.cs

## 概述

`CampaignAdvancedStartingPlayerOptionsCampaignBehavior` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/CampaignBehaviors/CampaignAdvancedStartingPlayerOptionsCampaignBehavior.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### RegisterEvents
`public override void RegisterEvents() `

### SyncData
`public override void SyncData(IDataStore dataStore) `

### AssignMainHeroEquipmentKeepingHorse
`public static void AssignMainHeroEquipmentKeepingHorse(Equipment sourceEquipment) `

### GetSuitableEquipmentSet
`public static Equipment GetSuitableEquipmentSet(Hero hero,CultureObject culture,EquipmentCategories customFlags,Equipment.EquipmentType equipmentType,MBFastRandom random) `

### GiveStartingFiefs
`public static Settlement GiveStartingFiefs(int count,MBFastRandom random,Func<Settlement,bool> condition = null) `

### UpdateMainHeroHomeSettlement
`public static void UpdateMainHeroHomeSettlement(Settlement settlement) `

### FindFallbackStartingTown
`public static Settlement FindFallbackStartingTown(MBFastRandom random,bool preferPort = false) `

### GiveTradeGoods
`public static void GiveTradeGoods(CultureObject culture,int goldValueMin,int goldValueMax,int typeCount,MBFastRandom random) `

### GiveStartingCompanions
`public static void GiveStartingCompanions(int count,MBFastRandom random) `

### EnsureMinimumClanTier
`public static void EnsureMinimumClanTier(int minimumTier) `

### ResolveKingdom
`public static Kingdom ResolveKingdom(string kingdomId) `

### AdjustStartingFood
`public static void AdjustStartingFood(MBFastRandom random,int minFoodAmount,int maxFoodAmount,CultureObject culture) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
