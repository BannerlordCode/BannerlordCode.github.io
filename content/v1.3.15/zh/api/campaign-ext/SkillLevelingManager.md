---
title: "SkillLevelingManager"
description: "SkillLevelingManager 的自动生成类参考。"
---
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

**用途 / Purpose:** 在 「combat hit」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnCombatHit(affectorCharacter, affectedCharacter, captain, commander, 0, 0, affectorWeapon, 0, missionType, false, false, false, 0, false, false, false, false);
```

### OnSiegeEngineDestroyed
`public static void OnSiegeEngineDestroyed(MobileParty party, SiegeEngineType destroyedSiegeEngine)`

**用途 / Purpose:** 在 「siege engine destroyed」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnSiegeEngineDestroyed(party, destroyedSiegeEngine);
```

### OnWallBreached
`public static void OnWallBreached(MobileParty party)`

**用途 / Purpose:** 在 「wall breached」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnWallBreached(party);
```

### OnSimulationCombatKill
`public static void OnSimulationCombatKill(CharacterObject affectorCharacter, CharacterObject affectedCharacter, PartyBase affectorParty, PartyBase commanderParty)`

**用途 / Purpose:** 在 「simulation combat kill」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnSimulationCombatKill(affectorCharacter, affectedCharacter, affectorParty, commanderParty);
```

### OnTradeProfitMade
`public static void OnTradeProfitMade(PartyBase party, int tradeProfit)`

**用途 / Purpose:** 在 「trade profit made」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnTradeProfitMade(party, 0);
```

### OnTradeProfitMade
`public static void OnTradeProfitMade(Hero hero, int tradeProfit)`

**用途 / Purpose:** 在 「trade profit made」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnTradeProfitMade(hero, 0);
```

### OnSettlementProjectFinished
`public static void OnSettlementProjectFinished(Settlement settlement)`

**用途 / Purpose:** 在 「settlement project finished」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnSettlementProjectFinished(settlement);
```

### OnSettlementGoverned
`public static void OnSettlementGoverned(Hero governor, Settlement settlement)`

**用途 / Purpose:** 在 「settlement governed」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnSettlementGoverned(governor, settlement);
```

### OnInfluenceSpent
`public static void OnInfluenceSpent(Hero hero, float amountSpent)`

**用途 / Purpose:** 在 「influence spent」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnInfluenceSpent(hero, 0);
```

### OnGainRelation
`public static void OnGainRelation(Hero hero, Hero gainedRelationWith, float relationChange, ChangeRelationAction.ChangeRelationDetail detail = ChangeRelationAction.ChangeRelationDetail.Default)`

**用途 / Purpose:** 在 「gain relation」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnGainRelation(hero, gainedRelationWith, 0, changeRelationAction.ChangeRelationDetail.Default);
```

### OnTroopRecruited
`public static void OnTroopRecruited(Hero hero, int amount, int tier)`

**用途 / Purpose:** 在 「troop recruited」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnTroopRecruited(hero, 0, 0);
```

### OnBribeGiven
`public static void OnBribeGiven(int amount)`

**用途 / Purpose:** 在 「bribe given」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnBribeGiven(0);
```

### OnBanditsRecruited
`public static void OnBanditsRecruited(MobileParty mobileParty, CharacterObject bandit, int count)`

**用途 / Purpose:** 在 「bandits recruited」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnBanditsRecruited(mobileParty, bandit, 0);
```

### OnMainHeroReleasedFromCaptivity
`public static void OnMainHeroReleasedFromCaptivity(float captivityTime)`

**用途 / Purpose:** 在 「main hero released from captivity」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnMainHeroReleasedFromCaptivity(0);
```

### OnMainHeroTortured
`public static void OnMainHeroTortured()`

**用途 / Purpose:** 在 「main hero tortured」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnMainHeroTortured();
```

### OnMainHeroDisguised
`public static void OnMainHeroDisguised(bool isNotCaught)`

**用途 / Purpose:** 在 「main hero disguised」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnMainHeroDisguised(false);
```

### OnRaid
`public static void OnRaid(MobileParty attackerParty, ItemRoster lootedItems)`

**用途 / Purpose:** 在 「raid」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnRaid(attackerParty, lootedItems);
```

### OnLoot
`public static void OnLoot(MobileParty attackerParty, MobileParty forcedParty, ItemRoster lootedItems, bool attacked)`

**用途 / Purpose:** 在 「loot」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnLoot(attackerParty, forcedParty, lootedItems, false);
```

### OnForceVolunteers
`public static void OnForceVolunteers(MobileParty attackerParty, PartyBase forcedParty)`

**用途 / Purpose:** 在 「force volunteers」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnForceVolunteers(attackerParty, forcedParty);
```

### OnForceSupplies
`public static void OnForceSupplies(MobileParty attackerParty, ItemRoster lootedItems, bool attacked)`

**用途 / Purpose:** 在 「force supplies」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnForceSupplies(attackerParty, lootedItems, false);
```

### OnPrisonerSell
`public static void OnPrisonerSell(MobileParty mobileParty, in TroopRoster prisonerRoster)`

**用途 / Purpose:** 在 「prisoner sell」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnPrisonerSell(mobileParty, prisonerRoster);
```

### OnSurgeryApplied
`public static void OnSurgeryApplied(MobileParty party, bool surgerySuccess, int troopTier)`

**用途 / Purpose:** 在 「surgery applied」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnSurgeryApplied(party, false, 0);
```

### OnTacticsUsed
`public static void OnTacticsUsed(MobileParty party, float xp)`

**用途 / Purpose:** 在 「tactics used」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnTacticsUsed(party, 0);
```

### OnHideoutSpotted
`public static void OnHideoutSpotted(MobileParty party, PartyBase spottedParty)`

**用途 / Purpose:** 在 「hideout spotted」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnHideoutSpotted(party, spottedParty);
```

### OnTrackDetected
`public static void OnTrackDetected(Track track)`

**用途 / Purpose:** 在 「track detected」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnTrackDetected(track);
```

### OnTravelOnFoot
`public static void OnTravelOnFoot(Hero hero, float speed)`

**用途 / Purpose:** 在 「travel on foot」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnTravelOnFoot(hero, 0);
```

### OnTravelOnHorse
`public static void OnTravelOnHorse(Hero hero, float speed)`

**用途 / Purpose:** 在 「travel on horse」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnTravelOnHorse(hero, 0);
```

### OnTravelOnWater
`public static void OnTravelOnWater(Hero hero, float speed)`

**用途 / Purpose:** 在 「travel on water」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnTravelOnWater(hero, 0);
```

### OnAIPartiesTravel
`public static void OnAIPartiesTravel(Hero hero, bool isCaravanParty, TerrainType currentTerrainType)`

**用途 / Purpose:** 在 「a i parties travel」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnAIPartiesTravel(hero, false, currentTerrainType);
```

### OnTraverseTerrain
`public static void OnTraverseTerrain(MobileParty mobileParty, TerrainType currentTerrainType)`

**用途 / Purpose:** 在 「traverse terrain」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnTraverseTerrain(mobileParty, currentTerrainType);
```

### OnBattleEnded
`public static void OnBattleEnded(PartyBase party, CharacterObject troop, int excessXp)`

**用途 / Purpose:** 在 「battle ended」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnBattleEnded(party, troop, 0);
```

### OnHeroHealedWhileWaiting
`public static void OnHeroHealedWhileWaiting(Hero hero, int healingAmount)`

**用途 / Purpose:** 在 「hero healed while waiting」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnHeroHealedWhileWaiting(hero, 0);
```

### OnRegularTroopHealedWhileWaiting
`public static void OnRegularTroopHealedWhileWaiting(MobileParty mobileParty, int healedTroopCount, float averageTier)`

**用途 / Purpose:** 在 「regular troop healed while waiting」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnRegularTroopHealedWhileWaiting(mobileParty, 0, 0);
```

### OnLeadingArmy
`public static void OnLeadingArmy(MobileParty mobileParty)`

**用途 / Purpose:** 在 「leading army」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnLeadingArmy(mobileParty);
```

### OnSieging
`public static void OnSieging(MobileParty mobileParty)`

**用途 / Purpose:** 在 「sieging」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnSieging(mobileParty);
```

### OnSiegeEngineBuilt
`public static void OnSiegeEngineBuilt(MobileParty mobileParty, SiegeEngineType siegeEngine)`

**用途 / Purpose:** 在 「siege engine built」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnSiegeEngineBuilt(mobileParty, siegeEngine);
```

### OnUpgradeTroops
`public static void OnUpgradeTroops(PartyBase party, CharacterObject troop, CharacterObject upgrade, int numberOfTroops)`

**用途 / Purpose:** 在 「upgrade troops」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnUpgradeTroops(party, troop, upgrade, 0);
```

### OnPersuasionSucceeded
`public static void OnPersuasionSucceeded(Hero targetHero, SkillObject skill, PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)`

**用途 / Purpose:** 在 「persuasion succeeded」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnPersuasionSucceeded(targetHero, skill, difficulty, 0);
```

### OnPrisonBreakEnd
`public static void OnPrisonBreakEnd(Hero prisonerHero, bool isSucceeded)`

**用途 / Purpose:** 在 「prison break end」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnPrisonBreakEnd(prisonerHero, false);
```

### OnFoodConsumed
`public static void OnFoodConsumed(MobileParty mobileParty, bool wasStarving)`

**用途 / Purpose:** 在 「food consumed」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnFoodConsumed(mobileParty, false);
```

### OnAlleyCleared
`public static void OnAlleyCleared(Alley alley)`

**用途 / Purpose:** 在 「alley cleared」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnAlleyCleared(alley);
```

### OnDailyAlleyTick
`public static void OnDailyAlleyTick(Alley alley, Hero alleyLeader)`

**用途 / Purpose:** 在 「daily alley tick」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnDailyAlleyTick(alley, alleyLeader);
```

### OnBoardGameWonAgainstLord
`public static void OnBoardGameWonAgainstLord(Hero lord, BoardGameHelper.AIDifficulty difficulty, bool extraXpGain)`

**用途 / Purpose:** 在 「board game won against lord」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnBoardGameWonAgainstLord(lord, difficulty, false);
```

### OnProductionProducedToWarehouse
`public static void OnProductionProducedToWarehouse(EquipmentElement production)`

**用途 / Purpose:** 在 「production produced to warehouse」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnProductionProducedToWarehouse(production);
```

### OnAIPartyLootCasualties
`public static void OnAIPartyLootCasualties(int goldAmount, Hero winnerPartyLeader, PartyBase defeatedParty)`

**用途 / Purpose:** 在 「a i party loot casualties」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnAIPartyLootCasualties(0, winnerPartyLeader, defeatedParty);
```

### OnShipDamaged
`public static void OnShipDamaged(Ship ship, float rawDamage, float finalDamage)`

**用途 / Purpose:** 在 「ship damaged」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnShipDamaged(ship, 0, 0);
```

### OnShipRepaired
`public static void OnShipRepaired(Ship ship, float repairedHitPoints)`

**用途 / Purpose:** 在 「ship repaired」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
SkillLevelingManager.OnShipRepaired(ship, 0);
```

## 使用示例

```csharp
var manager = SkillLevelingManager.Current;
```

## 参见

- [本区域目录](../)