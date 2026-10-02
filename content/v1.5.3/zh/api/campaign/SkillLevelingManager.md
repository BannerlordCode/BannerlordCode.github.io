---
title: "SkillLevelingManager"
description: "SkillLevelingManager 的自动生成类参考。"
---
# SkillLevelingManager

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class SkillLevelingManager `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/CharacterDevelopment/SkillLevelingManager.cs

## 概述

`SkillLevelingManager` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/CharacterDevelopment/SkillLevelingManager.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnCombatHit
`public static void OnCombatHit(CharacterObject affectorCharacter,CharacterObject affectedCharacter,CharacterObject captain,Hero commander,float speedBonusFromMovement,float shotDifficulty,WeaponComponentData affectorWeapon,float hitPointRatio,CombatXpModel.MissionTypeEnum missionType,bool isAffectorMounted,bool isTeamKill,bool isAffectorUnderCommand,float damageAmount,bool isFatal,bool isSiegeEngineHit,bool isHorseCharge,bool isSneakAttack)`

### OnSiegeEngineDestroyed
`public static void OnSiegeEngineDestroyed(MobileParty party,SiegeEngineType destroyedSiegeEngine) `

### OnWallBreached
`public static void OnWallBreached(MobileParty party) `

### OnSimulationCombatKill
`public static void OnSimulationCombatKill(CharacterObject affectorCharacter,CharacterObject affectedCharacter,PartyBase affectorParty,PartyBase commanderParty) `

### OnTradeProfitMade
`public static void OnTradeProfitMade(PartyBase party,int tradeProfit) `
`public static void OnTradeProfitMade(Hero hero,int tradeProfit) `

### OnSettlementProjectFinished
`public static void OnSettlementProjectFinished(Settlement settlement) `

### OnSettlementGoverned
`public static void OnSettlementGoverned(Hero governor,Settlement settlement) `

### OnInfluenceSpent
`public static void OnInfluenceSpent(Hero hero,float amountSpent) `

### OnGainRelation
`public static void OnGainRelation(Hero hero,Hero gainedRelationWith,float relationChange,ChangeRelationAction.ChangeRelationDetail detail = ChangeRelationAction.ChangeRelationDetail.Default) `

### OnTroopRecruited
`public static void OnTroopRecruited(Hero hero,int amount,int tier) `

### OnBribeGiven
`public static void OnBribeGiven(int amount) `

### OnBanditsRecruited
`public static void OnBanditsRecruited(MobileParty mobileParty,CharacterObject bandit,int count) `

### OnMainHeroReleasedFromCaptivity
`public static void OnMainHeroReleasedFromCaptivity(float captivityTime) `

### OnMainHeroTortured
`public static void OnMainHeroTortured() `

### OnMainHeroDisguised
`public static void OnMainHeroDisguised(bool isNotCaught) `

### OnRaid
`public static void OnRaid(MobileParty attackerParty,ItemRoster lootedItems) `

### OnLoot
`public static void OnLoot(MobileParty attackerParty,MobileParty forcedParty,ItemRoster lootedItems,bool attacked) `

### OnForceVolunteers
`public static void OnForceVolunteers(MobileParty attackerParty,PartyBase forcedParty) `

### OnForceSupplies
`public static void OnForceSupplies(MobileParty attackerParty,ItemRoster lootedItems,bool attacked) `

### OnPrisonerSell
`public static void OnPrisonerSell(MobileParty mobileParty,in TroopRoster prisonerRoster) `

### OnSurgeryApplied
`public static void OnSurgeryApplied(MobileParty party,bool surgerySuccess,int troopTier) `

### OnTacticsUsed
`public static void OnTacticsUsed(MobileParty party,float xp) `

### OnHideoutSpotted
`public static void OnHideoutSpotted(MobileParty party,PartyBase spottedParty) `

### OnTrackDetected
`public static void OnTrackDetected(Track track) `

### OnTravelOnFoot
`public static void OnTravelOnFoot(Hero hero) `

### OnTravelOnHorse
`public static void OnTravelOnHorse(Hero hero) `

### OnTravelOnWater
`public static void OnTravelOnWater(MobileParty party) `

### OnAIPartiesTravel
`public static void OnAIPartiesTravel(Hero hero,bool isCaravanParty,TerrainType currentTerrainType) `

### OnTraverseTerrain
`public static void OnTraverseTerrain(MobileParty mobileParty,TerrainType currentTerrainType) `

### OnBattleEnded
`public static void OnBattleEnded(PartyBase party,CharacterObject troop,int excessXp) `

### OnHeroHealedWhileWaiting
`public static void OnHeroHealedWhileWaiting(Hero hero,int healingAmount) `

### OnRegularTroopHealedWhileWaiting
`public static void OnRegularTroopHealedWhileWaiting(MobileParty mobileParty,int healedTroopCount,float averageTier) `

### OnLeadingArmy
`public static void OnLeadingArmy(MobileParty mobileParty) `

### OnSieging
`public static void OnSieging(MobileParty mobileParty) `

### OnSiegeEngineBuilt
`public static void OnSiegeEngineBuilt(MobileParty mobileParty,SiegeEngineType siegeEngine) `

### OnUpgradeTroops
`public static void OnUpgradeTroops(PartyBase party,CharacterObject troop,CharacterObject upgrade,int numberOfTroops) `

### OnPersuasionSucceeded
`public static void OnPersuasionSucceeded(Hero targetHero,SkillObject skill,PersuasionDifficulty difficulty,int argumentDifficultyBonusCoefficient) `

### OnPrisonBreakEnd
`public static void OnPrisonBreakEnd(Hero prisonerHero,bool isSucceeded) `

### OnFoodConsumed
`public static void OnFoodConsumed(MobileParty mobileParty,bool wasStarving) `

### OnAlleyCleared
`public static void OnAlleyCleared(Alley alley) `

### OnDailyAlleyTick
`public static void OnDailyAlleyTick(Alley alley,Hero alleyLeader) `

### OnBoardGameWonAgainstLord
`public static void OnBoardGameWonAgainstLord(Hero lord,BoardGameHelper.AIDifficulty difficulty,bool extraXpGain) `

### OnProductionProducedToWarehouse
`public static void OnProductionProducedToWarehouse(EquipmentElement production) `

### OnAIPartyLootCasualties
`public static void OnAIPartyLootCasualties(int goldAmount,Hero winnerPartyLeader,PartyBase defeatedParty) `

### OnShipDamaged
`public static void OnShipDamaged(Ship ship,float rawDamage,float finalDamage) `

### OnShipRepaired
`public static void OnShipRepaired(Ship ship,float repairedHitPoints) `

### OnHighMorale
`public static void OnHighMorale(MobileParty mobileParty) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
