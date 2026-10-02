---
title: "SkillLevelingManager"
description: "SkillLevelingManager：TaleWorlds.CampaignSystem 的 public 类；公开成员 47 个（方法 47、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/CharacterDevelopment/SkillLevelingManager.cs。"
---
# SkillLevelingManager

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class SkillLevelingManager`
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/SkillLevelingManager.cs`

## 概述

SkillLevelingManager 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CharacterDevelopment/SkillLevelingManager.cs。它是一个 public 类，继承链为 SkillLevelingManager。public/protected 成员共 47 个：47 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SkillLevelingManager 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CharacterDevelopment），继承链 SkillLevelingManager。成员构成以方法为主（方法 47/47，属性 0/47），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CharacterDevelopment/SkillLevelingManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnCombatHit` | `public static void OnCombatHit(CharacterObject affectorCharacter, CharacterObject affectedCharacter, CharacterObject captain, Hero commander, float speedBonusFromMovement, float shotDifficulty, WeaponComponentData affectorWeapon, float hitPointRatio, CombatXpModel.MissionTypeEnum missionType, bool isAffectorMounted, bool isTeamKill, bool isAffectorUnderCommand, float damageAmount, bool isFatal, bool isSiegeEngineHit, bool isHorseCharge, bool isSneakAttack)` | 方法 |
| `OnSiegeEngineDestroyed` | `public static void OnSiegeEngineDestroyed(MobileParty party, SiegeEngineType destroyedSiegeEngine)` | 方法 |
| `OnWallBreached` | `public static void OnWallBreached(MobileParty party)` | 方法 |
| `OnSimulationCombatKill` | `public static void OnSimulationCombatKill(CharacterObject affectorCharacter, CharacterObject affectedCharacter, PartyBase affectorParty, PartyBase commanderParty)` | 方法 |
| `OnTradeProfitMade` | `public static void OnTradeProfitMade(PartyBase party, int tradeProfit)` | 方法 |
| `OnTradeProfitMade` | `public static void OnTradeProfitMade(Hero hero, int tradeProfit)` | 方法 |
| `OnSettlementProjectFinished` | `public static void OnSettlementProjectFinished(Settlement settlement)` | 方法 |
| `OnSettlementGoverned` | `public static void OnSettlementGoverned(Hero governor, Settlement settlement)` | 方法 |
| `OnInfluenceSpent` | `public static void OnInfluenceSpent(Hero hero, float amountSpent)` | 方法 |
| `OnGainRelation` | `public static void OnGainRelation(Hero hero, Hero gainedRelationWith, float relationChange, ChangeRelationAction.ChangeRelationDetail detail = ChangeRelationAction.ChangeRelationDetail.Default)` | 方法 |
| `OnTroopRecruited` | `public static void OnTroopRecruited(Hero hero, int amount, int tier)` | 方法 |
| `OnBribeGiven` | `public static void OnBribeGiven(int amount)` | 方法 |
| `OnBanditsRecruited` | `public static void OnBanditsRecruited(MobileParty mobileParty, CharacterObject bandit, int count)` | 方法 |
| `OnMainHeroReleasedFromCaptivity` | `public static void OnMainHeroReleasedFromCaptivity(float captivityTime)` | 方法 |
| `OnMainHeroTortured` | `public static void OnMainHeroTortured()` | 方法 |
| `OnMainHeroDisguised` | `public static void OnMainHeroDisguised(bool isNotCaught)` | 方法 |
| `OnRaid` | `public static void OnRaid(MobileParty attackerParty, ItemRoster lootedItems)` | 方法 |
| `OnLoot` | `public static void OnLoot(MobileParty attackerParty, MobileParty forcedParty, ItemRoster lootedItems, bool attacked)` | 方法 |
| `OnForceVolunteers` | `public static void OnForceVolunteers(MobileParty attackerParty, PartyBase forcedParty)` | 方法 |
| `OnForceSupplies` | `public static void OnForceSupplies(MobileParty attackerParty, ItemRoster lootedItems, bool attacked)` | 方法 |
| `OnPrisonerSell` | `public static void OnPrisonerSell(MobileParty mobileParty, in TroopRoster prisonerRoster)` | 方法 |
| `OnSurgeryApplied` | `public static void OnSurgeryApplied(MobileParty party, bool surgerySuccess, int troopTier)` | 方法 |
| `OnTacticsUsed` | `public static void OnTacticsUsed(MobileParty party, float xp)` | 方法 |
| `OnHideoutSpotted` | `public static void OnHideoutSpotted(MobileParty party, PartyBase spottedParty)` | 方法 |
| `OnTrackDetected` | `public static void OnTrackDetected(Track track)` | 方法 |
| `OnTravelOnFoot` | `public static void OnTravelOnFoot(Hero hero, float speed)` | 方法 |
| `OnTravelOnHorse` | `public static void OnTravelOnHorse(Hero hero, float speed)` | 方法 |
| `OnTravelOnWater` | `public static void OnTravelOnWater(MobileParty party, float speed)` | 方法 |
| `OnAIPartiesTravel` | `public static void OnAIPartiesTravel(Hero hero, bool isCaravanParty, TerrainType currentTerrainType)` | 方法 |
| `OnTraverseTerrain` | `public static void OnTraverseTerrain(MobileParty mobileParty, TerrainType currentTerrainType)` | 方法 |
| `OnBattleEnded` | `public static void OnBattleEnded(PartyBase party, CharacterObject troop, int excessXp)` | 方法 |
| `OnHeroHealedWhileWaiting` | `public static void OnHeroHealedWhileWaiting(Hero hero, int healingAmount)` | 方法 |
| `OnRegularTroopHealedWhileWaiting` | `public static void OnRegularTroopHealedWhileWaiting(MobileParty mobileParty, int healedTroopCount, float averageTier)` | 方法 |
| `OnLeadingArmy` | `public static void OnLeadingArmy(MobileParty mobileParty)` | 方法 |
| `OnSieging` | `public static void OnSieging(MobileParty mobileParty)` | 方法 |
| `OnSiegeEngineBuilt` | `public static void OnSiegeEngineBuilt(MobileParty mobileParty, SiegeEngineType siegeEngine)` | 方法 |
| `OnUpgradeTroops` | `public static void OnUpgradeTroops(PartyBase party, CharacterObject troop, CharacterObject upgrade, int numberOfTroops)` | 方法 |
| `OnPersuasionSucceeded` | `public static void OnPersuasionSucceeded(Hero targetHero, SkillObject skill, PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)` | 方法 |
| `OnPrisonBreakEnd` | `public static void OnPrisonBreakEnd(Hero prisonerHero, bool isSucceeded)` | 方法 |
| `OnFoodConsumed` | `public static void OnFoodConsumed(MobileParty mobileParty, bool wasStarving)` | 方法 |
| `OnAlleyCleared` | `public static void OnAlleyCleared(Alley alley)` | 方法 |
| `OnDailyAlleyTick` | `public static void OnDailyAlleyTick(Alley alley, Hero alleyLeader)` | 方法 |
| `OnBoardGameWonAgainstLord` | `public static void OnBoardGameWonAgainstLord(Hero lord, BoardGameHelper.AIDifficulty difficulty, bool extraXpGain)` | 方法 |
| `OnProductionProducedToWarehouse` | `public static void OnProductionProducedToWarehouse(EquipmentElement production)` | 方法 |
| `OnAIPartyLootCasualties` | `public static void OnAIPartyLootCasualties(int goldAmount, Hero winnerPartyLeader, PartyBase defeatedParty)` | 方法 |
| `OnShipDamaged` | `public static void OnShipDamaged(Ship ship, float rawDamage, float finalDamage)` | 方法 |
| `OnShipRepaired` | `public static void OnShipRepaired(Ship ship, float repairedHitPoints)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 DefaultCulturalFeats](../DefaultCulturalFeats)
- [同命名空间 DefaultPerks](../DefaultPerks)
- [同命名空间 DefaultSkillLevelingManager](../DefaultSkillLevelingManager)
- [同命名空间 DefaultTraits](../DefaultTraits)
