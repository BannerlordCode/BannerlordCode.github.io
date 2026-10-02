---
title: "DefaultSkillLevelingManager"
description: "DefaultSkillLevelingManager 的自动生成类参考。"
---
# DefaultSkillLevelingManager

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSkillLevelingManager : ISkillLevelingManager `
**Base:** ISkillLevelingManager
**Source:** TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultSkillLevelingManager.cs

## 概述

`DefaultSkillLevelingManager` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultSkillLevelingManager.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnCombatHit
`public void OnCombatHit(CharacterObject affectorCharacter,CharacterObject affectedCharacter,CharacterObject captain,Hero commander,float speedBonusFromMovement,float shotDifficulty,WeaponComponentData affectorWeapon,float hitPointRatio,CombatXpModel.MissionTypeEnum missionType,bool isAffectorMounted,bool isTeamKill,bool isAffectorUnderCommand,float damageAmount,bool isFatal,bool isSiegeEngineHit,bool isHorseCharge,bool isSneakAttack)`

### OnSiegeEngineDestroyed
`public void OnSiegeEngineDestroyed(MobileParty party,SiegeEngineType destroyedSiegeEngine) `

### OnSimulationCombatKill
`public void OnSimulationCombatKill(CharacterObject affectorCharacter,CharacterObject affectedCharacter,PartyBase affectorParty,PartyBase commanderParty) `

### OnTradeProfitMade
`public void OnTradeProfitMade(PartyBase party,int tradeProfit) `
`public void OnTradeProfitMade(Hero hero,int tradeProfit) `

### OnSettlementProjectFinished
`public void OnSettlementProjectFinished(Settlement settlement) `

### OnSettlementGoverned
`public void OnSettlementGoverned(Hero governor,Settlement settlement) `

### OnInfluenceSpent
`public void OnInfluenceSpent(Hero hero,float amountSpent) `

### OnGainRelation
`public void OnGainRelation(Hero hero,Hero gainedRelationWith,float relationChange,ChangeRelationAction.ChangeRelationDetail detail = ChangeRelationAction.ChangeRelationDetail.Default) `

### OnTroopRecruited
`public void OnTroopRecruited(Hero hero,int amount,int tier) `

### OnBribeGiven
`public void OnBribeGiven(int amount) `

### OnBanditsRecruited
`public void OnBanditsRecruited(MobileParty mobileParty,CharacterObject bandit,int count) `

### OnMainHeroReleasedFromCaptivity
`public void OnMainHeroReleasedFromCaptivity(float captivityTime) `

### OnMainHeroTortured
`public void OnMainHeroTortured() `

### OnMainHeroDisguised
`public void OnMainHeroDisguised(bool isNotCaught) `

### OnRaid
`public void OnRaid(MobileParty attackerParty,ItemRoster lootedItems) `

### OnLoot
`public void OnLoot(MobileParty attackerParty,MobileParty forcedParty,ItemRoster lootedItems,bool attacked) `

### OnPrisonerSell
`public void OnPrisonerSell(MobileParty mobileParty,in TroopRoster prisonerRoster) `

### OnSurgeryApplied
`public void OnSurgeryApplied(MobileParty party,bool surgerySuccess,int troopTier) `

### OnTacticsUsed
`public void OnTacticsUsed(MobileParty party,float xp) `

### OnHideoutSpotted
`public void OnHideoutSpotted(MobileParty party,PartyBase spottedParty) `

### OnTrackDetected
`public void OnTrackDetected(Track track) `

### OnTravelOnFoot
`public void OnTravelOnFoot(Hero hero) `

### OnTravelOnHorse
`public void OnTravelOnHorse(Hero hero) `

### OnHeroHealedWhileWaiting
`public void OnHeroHealedWhileWaiting(Hero hero,int healingAmount) `

### OnRegularTroopHealedWhileWaiting
`public void OnRegularTroopHealedWhileWaiting(MobileParty mobileParty,int healedTroopCount,float averageTier) `

### OnLeadingArmy
`public void OnLeadingArmy(MobileParty mobileParty) `

### OnHighMorale
`public void OnHighMorale(MobileParty mobileParty) `

### OnSieging
`public void OnSieging(MobileParty mobileParty) `

### OnSiegeEngineBuilt
`public void OnSiegeEngineBuilt(MobileParty mobileParty,SiegeEngineType siegeEngine) `

### OnUpgradeTroops
`public void OnUpgradeTroops(PartyBase party,CharacterObject troop,CharacterObject upgrade,int numberOfTroops) `

### OnPersuasionSucceeded
`public void OnPersuasionSucceeded(Hero targetHero,SkillObject skill,PersuasionDifficulty difficulty,int argumentDifficultyBonusCoefficient) `

### OnPrisonBreakEnd
`public void OnPrisonBreakEnd(Hero prisonerHero,bool isSucceeded) `

### OnWallBreached
`public void OnWallBreached(MobileParty party) `

### OnForceVolunteers
`public void OnForceVolunteers(MobileParty attackerParty,PartyBase forcedParty) `

### OnForceSupplies
`public void OnForceSupplies(MobileParty attackerParty,ItemRoster lootedItems,bool attacked) `

### OnAIPartiesTravel
`public void OnAIPartiesTravel(Hero hero,bool isCaravanParty,TerrainType currentTerrainType) `

### OnTraverseTerrain
`public void OnTraverseTerrain(MobileParty mobileParty,TerrainType currentTerrainType) `

### OnBattleEnded
`public void OnBattleEnded(PartyBase party,CharacterObject troop,int excessXp) `

### OnFoodConsumed
`public void OnFoodConsumed(MobileParty mobileParty,bool wasStarving) `

### OnAlleyCleared
`public void OnAlleyCleared(Alley alley) `

### OnDailyAlleyTick
`public void OnDailyAlleyTick(Alley alley,Hero alleyLeader) `

### OnBoardGameWonAgainstLord
`public void OnBoardGameWonAgainstLord(Hero lord,BoardGameHelper.AIDifficulty difficulty,bool extraXpGain) `

### OnHideoutClearedAsGhost
`public void OnHideoutClearedAsGhost() `

### OnHideoutMissionEnd
`public void OnHideoutMissionEnd(bool isSucceeded) `

### OnWarehouseProduction
`public void OnWarehouseProduction(EquipmentElement production) `

### OnAIPartyLootCasualties
`public void OnAIPartyLootCasualties(int goldAmount,Hero winnerPartyLeader,PartyBase defeatedParty) `

### OnShipDamaged
`public void OnShipDamaged(Ship ship,float rawDamage,float finalDamage) `

### OnShipRepaired
`public void OnShipRepaired(Ship ship,float repairedHitPoints) `

### OnTravelOnWater
`public void OnTravelOnWater(MobileParty party) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
