<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SkillLevelingManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkillLevelingManager

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class SkillLevelingManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/SkillLevelingManager.cs`

## 概述

`SkillLevelingManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `SkillLevelingManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnCombatHit
`public static void OnCombatHit(CharacterObject affectorCharacter, CharacterObject affectedCharacter, CharacterObject captain, Hero commander, float speedBonusFromMovement, float shotDifficulty, WeaponComponentData affectorWeapon, float hitPointRatio, CombatXpModel.MissionTypeEnum missionType, bool isAffectorMounted, bool isTeamKill, bool isAffectorUnderCommand, float damageAmount, bool isFatal, bool isSiegeEngineHit, bool isHorseCharge, bool isSneakAttack)`

**用途 / Purpose:** 当 `combat hit` 事件触发时调用此方法。

### OnSiegeEngineDestroyed
`public static void OnSiegeEngineDestroyed(MobileParty party, SiegeEngineType destroyedSiegeEngine)`

**用途 / Purpose:** 当 `siege engine destroyed` 事件触发时调用此方法。

### OnWallBreached
`public static void OnWallBreached(MobileParty party)`

**用途 / Purpose:** 当 `wall breached` 事件触发时调用此方法。

### OnSimulationCombatKill
`public static void OnSimulationCombatKill(CharacterObject affectorCharacter, CharacterObject affectedCharacter, PartyBase affectorParty, PartyBase commanderParty)`

**用途 / Purpose:** 当 `simulation combat kill` 事件触发时调用此方法。

### OnTradeProfitMade
`public static void OnTradeProfitMade(PartyBase party, int tradeProfit)`

**用途 / Purpose:** 当 `trade profit made` 事件触发时调用此方法。

### OnTradeProfitMade
`public static void OnTradeProfitMade(Hero hero, int tradeProfit)`

**用途 / Purpose:** 当 `trade profit made` 事件触发时调用此方法。

### OnSettlementProjectFinished
`public static void OnSettlementProjectFinished(Settlement settlement)`

**用途 / Purpose:** 当 `settlement project finished` 事件触发时调用此方法。

### OnSettlementGoverned
`public static void OnSettlementGoverned(Hero governor, Settlement settlement)`

**用途 / Purpose:** 当 `settlement governed` 事件触发时调用此方法。

### OnInfluenceSpent
`public static void OnInfluenceSpent(Hero hero, float amountSpent)`

**用途 / Purpose:** 当 `influence spent` 事件触发时调用此方法。

### OnGainRelation
`public static void OnGainRelation(Hero hero, Hero gainedRelationWith, float relationChange, ChangeRelationAction.ChangeRelationDetail detail = ChangeRelationAction.ChangeRelationDetail.Default)`

**用途 / Purpose:** 当 `gain relation` 事件触发时调用此方法。

### OnTroopRecruited
`public static void OnTroopRecruited(Hero hero, int amount, int tier)`

**用途 / Purpose:** 当 `troop recruited` 事件触发时调用此方法。

### OnBribeGiven
`public static void OnBribeGiven(int amount)`

**用途 / Purpose:** 当 `bribe given` 事件触发时调用此方法。

### OnBanditsRecruited
`public static void OnBanditsRecruited(MobileParty mobileParty, CharacterObject bandit, int count)`

**用途 / Purpose:** 当 `bandits recruited` 事件触发时调用此方法。

### OnMainHeroReleasedFromCaptivity
`public static void OnMainHeroReleasedFromCaptivity(float captivityTime)`

**用途 / Purpose:** 当 `main hero released from captivity` 事件触发时调用此方法。

### OnMainHeroTortured
`public static void OnMainHeroTortured()`

**用途 / Purpose:** 当 `main hero tortured` 事件触发时调用此方法。

### OnMainHeroDisguised
`public static void OnMainHeroDisguised(bool isNotCaught)`

**用途 / Purpose:** 当 `main hero disguised` 事件触发时调用此方法。

### OnRaid
`public static void OnRaid(MobileParty attackerParty, ItemRoster lootedItems)`

**用途 / Purpose:** 当 `raid` 事件触发时调用此方法。

### OnLoot
`public static void OnLoot(MobileParty attackerParty, MobileParty forcedParty, ItemRoster lootedItems, bool attacked)`

**用途 / Purpose:** 当 `loot` 事件触发时调用此方法。

### OnForceVolunteers
`public static void OnForceVolunteers(MobileParty attackerParty, PartyBase forcedParty)`

**用途 / Purpose:** 当 `force volunteers` 事件触发时调用此方法。

### OnForceSupplies
`public static void OnForceSupplies(MobileParty attackerParty, ItemRoster lootedItems, bool attacked)`

**用途 / Purpose:** 当 `force supplies` 事件触发时调用此方法。

### OnPrisonerSell
`public static void OnPrisonerSell(MobileParty mobileParty, in TroopRoster prisonerRoster)`

**用途 / Purpose:** 当 `prisoner sell` 事件触发时调用此方法。

### OnSurgeryApplied
`public static void OnSurgeryApplied(MobileParty party, bool surgerySuccess, int troopTier)`

**用途 / Purpose:** 当 `surgery applied` 事件触发时调用此方法。

### OnTacticsUsed
`public static void OnTacticsUsed(MobileParty party, float xp)`

**用途 / Purpose:** 当 `tactics used` 事件触发时调用此方法。

### OnHideoutSpotted
`public static void OnHideoutSpotted(MobileParty party, PartyBase spottedParty)`

**用途 / Purpose:** 当 `hideout spotted` 事件触发时调用此方法。

### OnTrackDetected
`public static void OnTrackDetected(Track track)`

**用途 / Purpose:** 当 `track detected` 事件触发时调用此方法。

### OnTravelOnFoot
`public static void OnTravelOnFoot(Hero hero, float speed)`

**用途 / Purpose:** 当 `travel on foot` 事件触发时调用此方法。

### OnTravelOnHorse
`public static void OnTravelOnHorse(Hero hero, float speed)`

**用途 / Purpose:** 当 `travel on horse` 事件触发时调用此方法。

### OnTravelOnWater
`public static void OnTravelOnWater(Hero hero, float speed)`

**用途 / Purpose:** 当 `travel on water` 事件触发时调用此方法。

### OnAIPartiesTravel
`public static void OnAIPartiesTravel(Hero hero, bool isCaravanParty, TerrainType currentTerrainType)`

**用途 / Purpose:** 当 `a i parties travel` 事件触发时调用此方法。

### OnTraverseTerrain
`public static void OnTraverseTerrain(MobileParty mobileParty, TerrainType currentTerrainType)`

**用途 / Purpose:** 当 `traverse terrain` 事件触发时调用此方法。

### OnBattleEnded
`public static void OnBattleEnded(PartyBase party, CharacterObject troop, int excessXp)`

**用途 / Purpose:** 当 `battle ended` 事件触发时调用此方法。

### OnHeroHealedWhileWaiting
`public static void OnHeroHealedWhileWaiting(Hero hero, int healingAmount)`

**用途 / Purpose:** 当 `hero healed while waiting` 事件触发时调用此方法。

### OnRegularTroopHealedWhileWaiting
`public static void OnRegularTroopHealedWhileWaiting(MobileParty mobileParty, int healedTroopCount, float averageTier)`

**用途 / Purpose:** 当 `regular troop healed while waiting` 事件触发时调用此方法。

### OnLeadingArmy
`public static void OnLeadingArmy(MobileParty mobileParty)`

**用途 / Purpose:** 当 `leading army` 事件触发时调用此方法。

### OnSieging
`public static void OnSieging(MobileParty mobileParty)`

**用途 / Purpose:** 当 `sieging` 事件触发时调用此方法。

### OnSiegeEngineBuilt
`public static void OnSiegeEngineBuilt(MobileParty mobileParty, SiegeEngineType siegeEngine)`

**用途 / Purpose:** 当 `siege engine built` 事件触发时调用此方法。

### OnUpgradeTroops
`public static void OnUpgradeTroops(PartyBase party, CharacterObject troop, CharacterObject upgrade, int numberOfTroops)`

**用途 / Purpose:** 当 `upgrade troops` 事件触发时调用此方法。

### OnPersuasionSucceeded
`public static void OnPersuasionSucceeded(Hero targetHero, SkillObject skill, PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)`

**用途 / Purpose:** 当 `persuasion succeeded` 事件触发时调用此方法。

### OnPrisonBreakEnd
`public static void OnPrisonBreakEnd(Hero prisonerHero, bool isSucceeded)`

**用途 / Purpose:** 当 `prison break end` 事件触发时调用此方法。

### OnFoodConsumed
`public static void OnFoodConsumed(MobileParty mobileParty, bool wasStarving)`

**用途 / Purpose:** 当 `food consumed` 事件触发时调用此方法。

### OnAlleyCleared
`public static void OnAlleyCleared(Alley alley)`

**用途 / Purpose:** 当 `alley cleared` 事件触发时调用此方法。

### OnDailyAlleyTick
`public static void OnDailyAlleyTick(Alley alley, Hero alleyLeader)`

**用途 / Purpose:** 当 `daily alley tick` 事件触发时调用此方法。

### OnBoardGameWonAgainstLord
`public static void OnBoardGameWonAgainstLord(Hero lord, BoardGameHelper.AIDifficulty difficulty, bool extraXpGain)`

**用途 / Purpose:** 当 `board game won against lord` 事件触发时调用此方法。

### OnProductionProducedToWarehouse
`public static void OnProductionProducedToWarehouse(EquipmentElement production)`

**用途 / Purpose:** 当 `production produced to warehouse` 事件触发时调用此方法。

### OnAIPartyLootCasualties
`public static void OnAIPartyLootCasualties(int goldAmount, Hero winnerPartyLeader, PartyBase defeatedParty)`

**用途 / Purpose:** 当 `a i party loot casualties` 事件触发时调用此方法。

### OnShipDamaged
`public static void OnShipDamaged(Ship ship, float rawDamage, float finalDamage)`

**用途 / Purpose:** 当 `ship damaged` 事件触发时调用此方法。

### OnShipRepaired
`public static void OnShipRepaired(Ship ship, float repairedHitPoints)`

**用途 / Purpose:** 当 `ship repaired` 事件触发时调用此方法。

## 使用示例

```csharp
var manager = SkillLevelingManager.Current;
```

## 参见

- [完整类目录](../catalog)