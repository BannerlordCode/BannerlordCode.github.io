---
title: "CampaignIncidentEffects"
description: "CampaignIncidentEffects 的自动生成类参考。"
---
# CampaignIncidentEffects

**Namespace:** TaleWorlds.CampaignSystem.Incidents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignIncidentEffects `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/Incidents/CampaignIncidentEffects.cs

## 概述

`CampaignIncidentEffects` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/Incidents/CampaignIncidentEffects.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### ChangePrisonerAmount
`public static IncidentEffect ChangePrisonerAmount(Func<CharacterObject> characterGetter,int amount) `

### GoldChange
`public static IncidentEffect GoldChange(Func<int> amountGetter) `

### TraitChange
`public static IncidentEffect TraitChange(TraitObject trait,int amount) `

### BuildingLevelChange
`public static IncidentEffect BuildingLevelChange(Func<Building> buildingGetter,Func<int> amountGetter) `

### SiegeProgressChange
`public static IncidentEffect SiegeProgressChange(Func<float> amountGetter) `

### WorkshopProfitabilityChange
`public static IncidentEffect WorkshopProfitabilityChange(Func<Workshop> workshopGetter,float percentage) `

### SkillChange
`public static IncidentEffect SkillChange(SkillObject skill,float amount) `

### MoraleChange
`public static IncidentEffect MoraleChange(float amount) `

### HealthChance
`public static IncidentEffect HealthChance(int amount) `

### RenownChange
`public static IncidentEffect RenownChange(float amount) `

### CrimeRatingChange
`public static IncidentEffect CrimeRatingChange(Func<IFaction> factionGetter,float amount) `

### InfluenceChange
`public static IncidentEffect InfluenceChange(float amount) `

### SettlementRelationChange
`public static IncidentEffect SettlementRelationChange(Func<Settlement> settlementGetter,int amount,Func<Hero,bool> notablePredicate = null) `

### TownBoundVillageRelationChange
`public static IncidentEffect TownBoundVillageRelationChange(Func<Town> townGetter,int amount) `

### TownBoundVillageHearthChange
`public static IncidentEffect TownBoundVillageHearthChange(Func<Town> townGetter,int amount) `

### VillageHearthChange
`public static IncidentEffect VillageHearthChange(Func<Village> villageGetter,int amount) `

### TownSecurityChange
`public static IncidentEffect TownSecurityChange(Func<Town> townGetter,int amount) `

### HeroRelationChange
`public static IncidentEffect HeroRelationChange(Func<Hero> heroGetter,int amount) `

### TownProsperityChange
`public static IncidentEffect TownProsperityChange(Func<Town> townGetter,int amount) `

### SettlementMilitiaChange
`public static IncidentEffect SettlementMilitiaChange(Func<Settlement> settlementGetter,int amount) `

### InfestNearbyHideout
`public static IncidentEffect InfestNearbyHideout(Func<Settlement> settlementGetter) `

### WoundTroopsRandomly
`public static IncidentEffect WoundTroopsRandomly(float percentage) `
`public static IncidentEffect WoundTroopsRandomly(Func<TroopRosterElement,bool> predicate,Func<int> amountGetter,bool specifyUnitTypeOnHint = true) `
`public static IncidentEffect WoundTroopsRandomly(int amount) `

### WoundTroopsRandomlyWithChanceOfDeath
`public static IncidentEffect WoundTroopsRandomlyWithChanceOfDeath(float percentage,float chanceOfDeathPerUnit) `
`public static IncidentEffect WoundTroopsRandomlyWithChanceOfDeath(int amount,float chanceOfDeathPerUnit) `

### BreachSiegeWall
`public static IncidentEffect BreachSiegeWall(int amount) `

### WoundTroop
`public static IncidentEffect WoundTroop(Func<CharacterObject> characterGetter,int amount) `

### WoundTroopsRandomlyByChance
`public static IncidentEffect WoundTroopsRandomlyByChance(float chancePerUnit) `

### KillTroopsRandomlyOrderedByTier
`public static IncidentEffect KillTroopsRandomlyOrderedByTier(Func<TroopRosterElement,bool> predicate,Func<int> amountGetter) `

### KillTroopsRandomly
`public static IncidentEffect KillTroopsRandomly(Func<TroopRosterElement,bool> predicate,Func<int> amountGetter,bool useLostText = false) `

### KillTroopsRandomlyByChance
`public static IncidentEffect KillTroopsRandomlyByChance(float chancePerUnit) `

### KillTroop
`public static IncidentEffect KillTroop(Func<CharacterObject> characterGetter,int amount) `

### ChangeTroopAmount
`public static IncidentEffect ChangeTroopAmount(Func<CharacterObject> characterGetter,int amount,Func<IncidentEffect,IncidentHint> customHint = null,Func<List<TextObject>> customInformation = null) `

### UpgradeTroop
`public static IncidentEffect UpgradeTroop(Func<CharacterObject> characterGetter,Func<CharacterObject,bool> upgradePredicate,int amount,Func<long> incidentSeedGetter) `
`public static IncidentEffect UpgradeTroop(Func<CharacterObject> characterGetter,Func<CharacterObject> upgradedCharacterGetter,int amount,Func<long> incidentSeedGetter) `

### RemovePrisonersRandomlyWithPredicate
`public static IncidentEffect RemovePrisonersRandomlyWithPredicate(Func<TroopRosterElement,bool> predicate,int amount) `

### ChangeItemsAmount
`public static IncidentEffect ChangeItemsAmount(Func<List<ItemObject>> itemsGetter,int amount) `

### ChangeItemAmount
`public static IncidentEffect ChangeItemAmount(Func<ItemObject> itemGetter,Func<int> amountGetter) `

### PartyExperienceChance
`public static IncidentEffect PartyExperienceChance(int amount) `

### DisorganizeParty
`public static IncidentEffect DisorganizeParty() `

### HealTroopsRandomly
`public static IncidentEffect HealTroopsRandomly(int amount) `

### DemoteTroopsRandomlyWithPredicate
`public static IncidentEffect DemoteTroopsRandomlyWithPredicate(Func<TroopRosterElement,bool> predicate,Func<CharacterObject,bool> demotionPredicate,int amount,bool specifyUnitTypeOnHint = true) `

### Group
`public static IncidentEffect Group(params IncidentEffect[] effects) `

### Select
`public static IncidentEffect Select(IncidentEffect effectOne,IncidentEffect effectTwo,float chanceOfFirstOne) `
`public static IncidentEffect Select([TupleElementNames(new string[] { "Effect","Chance" })] params ValueTuple<IncidentEffect,float>[] effectAndChance) `

### Custom
`public static IncidentEffect Custom(Func<bool> condition,Func<List<TextObject>> consequence,Func<IncidentEffect,IncidentHint> hint) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
