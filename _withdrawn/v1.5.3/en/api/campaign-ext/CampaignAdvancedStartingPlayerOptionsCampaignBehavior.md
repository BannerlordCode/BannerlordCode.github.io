---
title: "CampaignAdvancedStartingPlayerOptionsCampaignBehavior"
description: "Auto-generated class reference for CampaignAdvancedStartingPlayerOptionsCampaignBehavior."
---
# CampaignAdvancedStartingPlayerOptionsCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignAdvancedStartingPlayerOptionsCampaignBehavior : CampaignBehaviorBase `
**Base:** CampaignBehaviorBase
**Source:** TaleWorlds.CampaignSystem/CampaignBehaviors/CampaignAdvancedStartingPlayerOptionsCampaignBehavior.cs

## Overview

Auto-generated stub for `CampaignAdvancedStartingPlayerOptionsCampaignBehavior`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

### SyncData
`public override void SyncData(IDataStore dataStore)`

### AssignMainHeroEquipmentKeepingHorse
`public static void AssignMainHeroEquipmentKeepingHorse(Equipment sourceEquipment)`

### GetSuitableEquipmentSet
`public static Equipment GetSuitableEquipmentSet(Hero hero,CultureObject culture,EquipmentCategories customFlags,Equipment.EquipmentType equipmentType,MBFastRandom random)`

### GiveStartingFiefs
`public static Settlement GiveStartingFiefs(int count,MBFastRandom random,Func<Settlement,bool> condition = null)`

### UpdateMainHeroHomeSettlement
`public static void UpdateMainHeroHomeSettlement(Settlement settlement)`

### FindFallbackStartingTown
`public static Settlement FindFallbackStartingTown(MBFastRandom random,bool preferPort = false)`

### GiveTradeGoods
`public static void GiveTradeGoods(CultureObject culture,int goldValueMin,int goldValueMax,int typeCount,MBFastRandom random)`

### GiveStartingCompanions
`public static void GiveStartingCompanions(int count,MBFastRandom random)`

### EnsureMinimumClanTier
`public static void EnsureMinimumClanTier(int minimumTier)`

### ResolveKingdom
`public static Kingdom ResolveKingdom(string kingdomId)`

### AdjustStartingFood
`public static void AdjustStartingFood(MBFastRandom random,int minFoodAmount,int maxFoodAmount,CultureObject culture)`

## See Also

- [Section index](../)
