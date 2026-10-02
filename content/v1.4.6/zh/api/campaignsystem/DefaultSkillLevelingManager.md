---
title: "DefaultSkillLevelingManager"
description: "DefaultSkillLevelingManager：TaleWorlds.CampaignSystem 的 public 类，继承 ISkillLevelingManager；公开成员 49 个（方法 49、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultSkillLevelingManager.cs。"
---
# DefaultSkillLevelingManager

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSkillLevelingManager : ISkillLevelingManager`
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultSkillLevelingManager.cs`

## 概述

DefaultSkillLevelingManager 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultSkillLevelingManager.cs。它是一个 public 类，实现/继承 ISkillLevelingManager，继承链为 DefaultSkillLevelingManager → ISkillLevelingManager。public/protected 成员共 49 个：49 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultSkillLevelingManager 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CharacterDevelopment），继承链 DefaultSkillLevelingManager → ISkillLevelingManager。成员构成以方法为主（方法 49/49，属性 0/49），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultSkillLevelingManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnCombatHit` | `public void OnCombatHit(CharacterObject affectorCharacter, CharacterObject affectedCharacter, CharacterObject captain, Hero commander, float speedBonusFromMovement, float shotDifficulty, WeaponComponentData affectorWeapon, float hitPointRatio, CombatXpModel.MissionTypeEnum missionType, bool isAffectorMounted, bool isTeamKill, bool isAffectorUnderCommand, float damageAmount, bool isFatal, bool isSiegeEngineHit, bool isHorseCharge, bool isSneakAttack)` | 方法 |
| `OnSiegeEngineDestroyed` | `public void OnSiegeEngineDestroyed(MobileParty party, SiegeEngineType destroyedSiegeEngine)` | 方法 |
| `OnSimulationCombatKill` | `public void OnSimulationCombatKill(CharacterObject affectorCharacter, CharacterObject affectedCharacter, PartyBase affectorParty, PartyBase commanderParty)` | 方法 |
| `OnTradeProfitMade` | `public void OnTradeProfitMade(PartyBase party, int tradeProfit)` | 方法 |
| `OnTradeProfitMade` | `public void OnTradeProfitMade(Hero hero, int tradeProfit)` | 方法 |
| `OnSettlementProjectFinished` | `public void OnSettlementProjectFinished(Settlement settlement)` | 方法 |
| `OnSettlementGoverned` | `public void OnSettlementGoverned(Hero governor, Settlement settlement)` | 方法 |
| `OnInfluenceSpent` | `public void OnInfluenceSpent(Hero hero, float amountSpent)` | 方法 |
| `OnGainRelation` | `public void OnGainRelation(Hero hero, Hero gainedRelationWith, float relationChange, ChangeRelationAction.ChangeRelationDetail detail = ChangeRelationAction.ChangeRelationDetail.Default)` | 方法 |
| `OnTroopRecruited` | `public void OnTroopRecruited(Hero hero, int amount, int tier)` | 方法 |
| `OnBribeGiven` | `public void OnBribeGiven(int amount)` | 方法 |
| `OnBanditsRecruited` | `public void OnBanditsRecruited(MobileParty mobileParty, CharacterObject bandit, int count)` | 方法 |
| `OnMainHeroReleasedFromCaptivity` | `public void OnMainHeroReleasedFromCaptivity(float captivityTime)` | 方法 |
| `OnMainHeroTortured` | `public void OnMainHeroTortured()` | 方法 |
| `OnMainHeroDisguised` | `public void OnMainHeroDisguised(bool isNotCaught)` | 方法 |
| `OnRaid` | `public void OnRaid(MobileParty attackerParty, ItemRoster lootedItems)` | 方法 |
| `OnLoot` | `public void OnLoot(MobileParty attackerParty, MobileParty forcedParty, ItemRoster lootedItems, bool attacked)` | 方法 |
| `OnPrisonerSell` | `public void OnPrisonerSell(MobileParty mobileParty, in TroopRoster prisonerRoster)` | 方法 |
| `OnSurgeryApplied` | `public void OnSurgeryApplied(MobileParty party, bool surgerySuccess, int troopTier)` | 方法 |
| `OnTacticsUsed` | `public void OnTacticsUsed(MobileParty party, float xp)` | 方法 |
| `OnHideoutSpotted` | `public void OnHideoutSpotted(MobileParty party, PartyBase spottedParty)` | 方法 |
| `OnTrackDetected` | `public void OnTrackDetected(Track track)` | 方法 |
| `OnTravelOnFoot` | `public void OnTravelOnFoot(Hero hero, float speed)` | 方法 |
| `OnTravelOnHorse` | `public void OnTravelOnHorse(Hero hero, float speed)` | 方法 |
| `OnHeroHealedWhileWaiting` | `public void OnHeroHealedWhileWaiting(Hero hero, int healingAmount)` | 方法 |
| `OnRegularTroopHealedWhileWaiting` | `public void OnRegularTroopHealedWhileWaiting(MobileParty mobileParty, int healedTroopCount, float averageTier)` | 方法 |
| `OnLeadingArmy` | `public void OnLeadingArmy(MobileParty mobileParty)` | 方法 |
| `OnSieging` | `public void OnSieging(MobileParty mobileParty)` | 方法 |
| `OnSiegeEngineBuilt` | `public void OnSiegeEngineBuilt(MobileParty mobileParty, SiegeEngineType siegeEngine)` | 方法 |
| `OnUpgradeTroops` | `public void OnUpgradeTroops(PartyBase party, CharacterObject troop, CharacterObject upgrade, int numberOfTroops)` | 方法 |
| `OnPersuasionSucceeded` | `public void OnPersuasionSucceeded(Hero targetHero, SkillObject skill, PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)` | 方法 |
| `OnPrisonBreakEnd` | `public void OnPrisonBreakEnd(Hero prisonerHero, bool isSucceeded)` | 方法 |
| `OnWallBreached` | `public void OnWallBreached(MobileParty party)` | 方法 |
| `OnForceVolunteers` | `public void OnForceVolunteers(MobileParty attackerParty, PartyBase forcedParty)` | 方法 |
| `OnForceSupplies` | `public void OnForceSupplies(MobileParty attackerParty, ItemRoster lootedItems, bool attacked)` | 方法 |
| `OnAIPartiesTravel` | `public void OnAIPartiesTravel(Hero hero, bool isCaravanParty, TerrainType currentTerrainType)` | 方法 |
| `OnTraverseTerrain` | `public void OnTraverseTerrain(MobileParty mobileParty, TerrainType currentTerrainType)` | 方法 |
| `OnBattleEnded` | `public void OnBattleEnded(PartyBase party, CharacterObject troop, int excessXp)` | 方法 |
| `OnFoodConsumed` | `public void OnFoodConsumed(MobileParty mobileParty, bool wasStarving)` | 方法 |
| `OnAlleyCleared` | `public void OnAlleyCleared(Alley alley)` | 方法 |
| `OnDailyAlleyTick` | `public void OnDailyAlleyTick(Alley alley, Hero alleyLeader)` | 方法 |
| `OnBoardGameWonAgainstLord` | `public void OnBoardGameWonAgainstLord(Hero lord, BoardGameHelper.AIDifficulty difficulty, bool extraXpGain)` | 方法 |
| `OnHideoutClearedAsGhost` | `public void OnHideoutClearedAsGhost()` | 方法 |
| `OnHideoutMissionEnd` | `public void OnHideoutMissionEnd(bool isSucceeded)` | 方法 |
| `OnWarehouseProduction` | `public void OnWarehouseProduction(EquipmentElement production)` | 方法 |
| `OnAIPartyLootCasualties` | `public void OnAIPartyLootCasualties(int goldAmount, Hero winnerPartyLeader, PartyBase defeatedParty)` | 方法 |
| `OnShipDamaged` | `public void OnShipDamaged(Ship ship, float rawDamage, float finalDamage)` | 方法 |
| `OnShipRepaired` | `public void OnShipRepaired(Ship ship, float repairedHitPoints)` | 方法 |
| `OnTravelOnWater` | `public void OnTravelOnWater(MobileParty party, float speed)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ISkillLevelingManager](../ISkillLevelingManager)
- [同命名空间 DefaultCulturalFeats](../DefaultCulturalFeats)
- [同命名空间 DefaultPerks](../DefaultPerks)
- [同命名空间 DefaultTraits](../DefaultTraits)
- [同命名空间 FeatObject](../FeatObject)
