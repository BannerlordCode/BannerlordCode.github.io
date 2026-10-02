---
title: "ISkillLevelingManager"
description: "ISkillLevelingManager：TaleWorlds.CampaignSystem 的 public 接口；公开成员 49 个（方法 49、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/CharacterDevelopment/ISkillLevelingManager.cs。"
---
# ISkillLevelingManager

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ISkillLevelingManager`
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/ISkillLevelingManager.cs`

## 概述

ISkillLevelingManager 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CharacterDevelopment/ISkillLevelingManager.cs。它是一个 public 接口，继承链为 ISkillLevelingManager。public/protected 成员共 49 个：49 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ISkillLevelingManager 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CharacterDevelopment），继承链 ISkillLevelingManager。成员构成以方法为主（方法 49/49，属性 0/49），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CharacterDevelopment/ISkillLevelingManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnCombatHit` | `void OnCombatHit(CharacterObject affectorCharacter, CharacterObject affectedCharacter, CharacterObject captain, Hero commander, float speedBonusFromMovement, float shotDifficulty, WeaponComponentData affectorWeapon, float hitPointRatio, CombatXpModel.MissionTypeEnum missionType, bool isAffectorMounted, bool isTeamKill, bool isAffectorUnderCommand, float damageAmount, bool isFatal, bool isSiegeEngineHit, bool isHorseCharge, bool isSneakAttack);` | 方法 |
| `OnSiegeEngineDestroyed` | `void OnSiegeEngineDestroyed(MobileParty party, SiegeEngineType destroyedSiegeEngine);` | 方法 |
| `OnSimulationCombatKill` | `void OnSimulationCombatKill(CharacterObject affectorCharacter, CharacterObject affectedCharacter, PartyBase affectorParty, PartyBase commanderParty);` | 方法 |
| `OnTradeProfitMade` | `void OnTradeProfitMade(PartyBase party, int tradeProfit);` | 方法 |
| `OnTradeProfitMade` | `void OnTradeProfitMade(Hero hero, int tradeProfit);` | 方法 |
| `OnSettlementProjectFinished` | `void OnSettlementProjectFinished(Settlement settlement);` | 方法 |
| `OnSettlementGoverned` | `void OnSettlementGoverned(Hero governor, Settlement settlement);` | 方法 |
| `OnInfluenceSpent` | `void OnInfluenceSpent(Hero hero, float amountSpent);` | 方法 |
| `OnGainRelation` | `void OnGainRelation(Hero hero, Hero gainedRelationWith, float relationChange, ChangeRelationAction.ChangeRelationDetail detail = ChangeRelationAction.ChangeRelationDetail.Default);` | 方法 |
| `OnTroopRecruited` | `void OnTroopRecruited(Hero hero, int amount, int tier);` | 方法 |
| `OnBribeGiven` | `void OnBribeGiven(int amount);` | 方法 |
| `OnWarehouseProduction` | `void OnWarehouseProduction(EquipmentElement production);` | 方法 |
| `OnAIPartyLootCasualties` | `void OnAIPartyLootCasualties(int goldAmount, Hero winnerPartyLeader, PartyBase defeatedParty);` | 方法 |
| `OnBanditsRecruited` | `void OnBanditsRecruited(MobileParty mobileParty, CharacterObject bandit, int count);` | 方法 |
| `OnMainHeroReleasedFromCaptivity` | `void OnMainHeroReleasedFromCaptivity(float captivityTime);` | 方法 |
| `OnMainHeroTortured` | `void OnMainHeroTortured();` | 方法 |
| `OnMainHeroDisguised` | `void OnMainHeroDisguised(bool isNotCaught);` | 方法 |
| `OnRaid` | `void OnRaid(MobileParty attackerParty, ItemRoster lootedItems);` | 方法 |
| `OnLoot` | `void OnLoot(MobileParty attackerParty, MobileParty forcedParty, ItemRoster lootedItems, bool attacked);` | 方法 |
| `OnPrisonerSell` | `void OnPrisonerSell(MobileParty mobileParty, in TroopRoster prisonerRoster);` | 方法 |
| `OnSurgeryApplied` | `void OnSurgeryApplied(MobileParty party, bool surgerySuccess, int troopTier);` | 方法 |
| `OnTacticsUsed` | `void OnTacticsUsed(MobileParty party, float xp);` | 方法 |
| `OnHideoutSpotted` | `void OnHideoutSpotted(MobileParty party, PartyBase spottedParty);` | 方法 |
| `OnTrackDetected` | `void OnTrackDetected(Track track);` | 方法 |
| `OnTravelOnFoot` | `void OnTravelOnFoot(Hero hero, float speed);` | 方法 |
| `OnTravelOnHorse` | `void OnTravelOnHorse(Hero hero, float speed);` | 方法 |
| `OnTravelOnWater` | `void OnTravelOnWater(MobileParty party, float speed);` | 方法 |
| `OnHeroHealedWhileWaiting` | `void OnHeroHealedWhileWaiting(Hero hero, int healingAmount);` | 方法 |
| `OnRegularTroopHealedWhileWaiting` | `void OnRegularTroopHealedWhileWaiting(MobileParty mobileParty, int healedTroopCount, float averageTier);` | 方法 |
| `OnLeadingArmy` | `void OnLeadingArmy(MobileParty mobileParty);` | 方法 |
| `OnSieging` | `void OnSieging(MobileParty mobileParty);` | 方法 |
| `OnSiegeEngineBuilt` | `void OnSiegeEngineBuilt(MobileParty mobileParty, SiegeEngineType siegeEngine);` | 方法 |
| `OnUpgradeTroops` | `void OnUpgradeTroops(PartyBase party, CharacterObject troop, CharacterObject upgrade, int numberOfTroops);` | 方法 |
| `OnPersuasionSucceeded` | `void OnPersuasionSucceeded(Hero targetHero, SkillObject skill, PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient);` | 方法 |
| `OnPrisonBreakEnd` | `void OnPrisonBreakEnd(Hero prisonerHero, bool isSucceeded);` | 方法 |
| `OnWallBreached` | `void OnWallBreached(MobileParty party);` | 方法 |
| `OnForceVolunteers` | `void OnForceVolunteers(MobileParty attackerParty, PartyBase forcedParty);` | 方法 |
| `OnForceSupplies` | `void OnForceSupplies(MobileParty attackerParty, ItemRoster lootedItems, bool attacked);` | 方法 |
| `OnAIPartiesTravel` | `void OnAIPartiesTravel(Hero hero, bool isCaravanParty, TerrainType currentTerrainType);` | 方法 |
| `OnTraverseTerrain` | `void OnTraverseTerrain(MobileParty mobileParty, TerrainType currentTerrainType);` | 方法 |
| `OnBattleEnded` | `void OnBattleEnded(PartyBase party, CharacterObject troop, int excessXp);` | 方法 |
| `OnFoodConsumed` | `void OnFoodConsumed(MobileParty mobileParty, bool wasStarving);` | 方法 |
| `OnAlleyCleared` | `void OnAlleyCleared(Alley alley);` | 方法 |
| `OnDailyAlleyTick` | `void OnDailyAlleyTick(Alley alley, Hero alleyLeader);` | 方法 |
| `OnBoardGameWonAgainstLord` | `void OnBoardGameWonAgainstLord(Hero lord, BoardGameHelper.AIDifficulty difficulty, bool extraXpGain);` | 方法 |
| `OnShipDamaged` | `void OnShipDamaged(Ship ship, float rawDamage, float finalDamage);` | 方法 |
| `OnShipRepaired` | `void OnShipRepaired(Ship ship, float repairedHitPoints);` | 方法 |
| `OnHideoutMissionEnd` | `void OnHideoutMissionEnd(bool isSucceeded);` | 方法 |
| `OnHideoutClearedAsGhost` | `void OnHideoutClearedAsGhost();` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 DefaultCulturalFeats](../DefaultCulturalFeats)
- [同命名空间 DefaultPerks](../DefaultPerks)
- [同命名空间 DefaultSkillLevelingManager](../DefaultSkillLevelingManager)
- [同命名空间 DefaultTraits](../DefaultTraits)
