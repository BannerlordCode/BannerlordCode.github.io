---
title: "DefaultSkillLevelingManager"
description: "DefaultSkillLevelingManager 的自动生成类参考。"
---
# DefaultSkillLevelingManager

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSkillLevelingManager : ISkillLevelingManager`
**Base:** `ISkillLevelingManager`
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultSkillLevelingManager.cs`

## 概述

`DefaultSkillLevelingManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `DefaultSkillLevelingManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnCombatHit
`public void OnCombatHit(CharacterObject affectorCharacter, CharacterObject affectedCharacter, CharacterObject captain, Hero commander, float speedBonusFromMovement, float shotDifficulty, WeaponComponentData affectorWeapon, float hitPointRatio, CombatXpModel.MissionTypeEnum missionType, bool isAffectorMounted, bool isTeamKill, bool isAffectorUnderCommand, float damageAmount, bool isFatal, bool isSiegeEngineHit, bool isHorseCharge, bool isSneakAttack)`

**用途 / Purpose:** 在 combat hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnCombatHit(affectorCharacter, affectedCharacter, captain, commander, 0, 0, affectorWeapon, 0, missionType, false, false, false, 0, false, false, false, false);
```

### OnSiegeEngineDestroyed
`public void OnSiegeEngineDestroyed(MobileParty party, SiegeEngineType destroyedSiegeEngine)`

**用途 / Purpose:** 在 siege engine destroyed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnSiegeEngineDestroyed(party, destroyedSiegeEngine);
```

### OnSimulationCombatKill
`public void OnSimulationCombatKill(CharacterObject affectorCharacter, CharacterObject affectedCharacter, PartyBase affectorParty, PartyBase commanderParty)`

**用途 / Purpose:** 在 simulation combat kill 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnSimulationCombatKill(affectorCharacter, affectedCharacter, affectorParty, commanderParty);
```

### OnTradeProfitMade
`public void OnTradeProfitMade(PartyBase party, int tradeProfit)`

**用途 / Purpose:** 在 trade profit made 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnTradeProfitMade(party, 0);
```

### OnTradeProfitMade
`public void OnTradeProfitMade(Hero hero, int tradeProfit)`

**用途 / Purpose:** 在 trade profit made 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnTradeProfitMade(hero, 0);
```

### OnSettlementProjectFinished
`public void OnSettlementProjectFinished(Settlement settlement)`

**用途 / Purpose:** 在 settlement project finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnSettlementProjectFinished(settlement);
```

### OnSettlementGoverned
`public void OnSettlementGoverned(Hero governor, Settlement settlement)`

**用途 / Purpose:** 在 settlement governed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnSettlementGoverned(governor, settlement);
```

### OnInfluenceSpent
`public void OnInfluenceSpent(Hero hero, float amountSpent)`

**用途 / Purpose:** 在 influence spent 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnInfluenceSpent(hero, 0);
```

### OnGainRelation
`public void OnGainRelation(Hero hero, Hero gainedRelationWith, float relationChange, ChangeRelationAction.ChangeRelationDetail detail = ChangeRelationAction.ChangeRelationDetail.Default)`

**用途 / Purpose:** 在 gain relation 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnGainRelation(hero, gainedRelationWith, 0, changeRelationAction.ChangeRelationDetail.Default);
```

### OnTroopRecruited
`public void OnTroopRecruited(Hero hero, int amount, int tier)`

**用途 / Purpose:** 在 troop recruited 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnTroopRecruited(hero, 0, 0);
```

### OnBribeGiven
`public void OnBribeGiven(int amount)`

**用途 / Purpose:** 在 bribe given 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnBribeGiven(0);
```

### OnBanditsRecruited
`public void OnBanditsRecruited(MobileParty mobileParty, CharacterObject bandit, int count)`

**用途 / Purpose:** 在 bandits recruited 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnBanditsRecruited(mobileParty, bandit, 0);
```

### OnMainHeroReleasedFromCaptivity
`public void OnMainHeroReleasedFromCaptivity(float captivityTime)`

**用途 / Purpose:** 在 main hero released from captivity 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnMainHeroReleasedFromCaptivity(0);
```

### OnMainHeroTortured
`public void OnMainHeroTortured()`

**用途 / Purpose:** 在 main hero tortured 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnMainHeroTortured();
```

### OnMainHeroDisguised
`public void OnMainHeroDisguised(bool isNotCaught)`

**用途 / Purpose:** 在 main hero disguised 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnMainHeroDisguised(false);
```

### OnRaid
`public void OnRaid(MobileParty attackerParty, ItemRoster lootedItems)`

**用途 / Purpose:** 在 raid 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnRaid(attackerParty, lootedItems);
```

### OnLoot
`public void OnLoot(MobileParty attackerParty, MobileParty forcedParty, ItemRoster lootedItems, bool attacked)`

**用途 / Purpose:** 在 loot 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnLoot(attackerParty, forcedParty, lootedItems, false);
```

### OnPrisonerSell
`public void OnPrisonerSell(MobileParty mobileParty, in TroopRoster prisonerRoster)`

**用途 / Purpose:** 在 prisoner sell 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnPrisonerSell(mobileParty, prisonerRoster);
```

### OnSurgeryApplied
`public void OnSurgeryApplied(MobileParty party, bool surgerySuccess, int troopTier)`

**用途 / Purpose:** 在 surgery applied 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnSurgeryApplied(party, false, 0);
```

### OnTacticsUsed
`public void OnTacticsUsed(MobileParty party, float xp)`

**用途 / Purpose:** 在 tactics used 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnTacticsUsed(party, 0);
```

### OnHideoutSpotted
`public void OnHideoutSpotted(MobileParty party, PartyBase spottedParty)`

**用途 / Purpose:** 在 hideout spotted 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnHideoutSpotted(party, spottedParty);
```

### OnTrackDetected
`public void OnTrackDetected(Track track)`

**用途 / Purpose:** 在 track detected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnTrackDetected(track);
```

### OnTravelOnFoot
`public void OnTravelOnFoot(Hero hero, float speed)`

**用途 / Purpose:** 在 travel on foot 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnTravelOnFoot(hero, 0);
```

### OnTravelOnHorse
`public void OnTravelOnHorse(Hero hero, float speed)`

**用途 / Purpose:** 在 travel on horse 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnTravelOnHorse(hero, 0);
```

### OnHeroHealedWhileWaiting
`public void OnHeroHealedWhileWaiting(Hero hero, int healingAmount)`

**用途 / Purpose:** 在 hero healed while waiting 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnHeroHealedWhileWaiting(hero, 0);
```

### OnRegularTroopHealedWhileWaiting
`public void OnRegularTroopHealedWhileWaiting(MobileParty mobileParty, int healedTroopCount, float averageTier)`

**用途 / Purpose:** 在 regular troop healed while waiting 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnRegularTroopHealedWhileWaiting(mobileParty, 0, 0);
```

### OnLeadingArmy
`public void OnLeadingArmy(MobileParty mobileParty)`

**用途 / Purpose:** 在 leading army 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnLeadingArmy(mobileParty);
```

### OnSieging
`public void OnSieging(MobileParty mobileParty)`

**用途 / Purpose:** 在 sieging 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnSieging(mobileParty);
```

### OnSiegeEngineBuilt
`public void OnSiegeEngineBuilt(MobileParty mobileParty, SiegeEngineType siegeEngine)`

**用途 / Purpose:** 在 siege engine built 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnSiegeEngineBuilt(mobileParty, siegeEngine);
```

### OnUpgradeTroops
`public void OnUpgradeTroops(PartyBase party, CharacterObject troop, CharacterObject upgrade, int numberOfTroops)`

**用途 / Purpose:** 在 upgrade troops 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnUpgradeTroops(party, troop, upgrade, 0);
```

### OnPersuasionSucceeded
`public void OnPersuasionSucceeded(Hero targetHero, SkillObject skill, PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)`

**用途 / Purpose:** 在 persuasion succeeded 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnPersuasionSucceeded(targetHero, skill, difficulty, 0);
```

### OnPrisonBreakEnd
`public void OnPrisonBreakEnd(Hero prisonerHero, bool isSucceeded)`

**用途 / Purpose:** 在 prison break end 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnPrisonBreakEnd(prisonerHero, false);
```

### OnWallBreached
`public void OnWallBreached(MobileParty party)`

**用途 / Purpose:** 在 wall breached 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnWallBreached(party);
```

### OnForceVolunteers
`public void OnForceVolunteers(MobileParty attackerParty, PartyBase forcedParty)`

**用途 / Purpose:** 在 force volunteers 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnForceVolunteers(attackerParty, forcedParty);
```

### OnForceSupplies
`public void OnForceSupplies(MobileParty attackerParty, ItemRoster lootedItems, bool attacked)`

**用途 / Purpose:** 在 force supplies 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnForceSupplies(attackerParty, lootedItems, false);
```

### OnAIPartiesTravel
`public void OnAIPartiesTravel(Hero hero, bool isCaravanParty, TerrainType currentTerrainType)`

**用途 / Purpose:** 在 a i parties travel 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnAIPartiesTravel(hero, false, currentTerrainType);
```

### OnTraverseTerrain
`public void OnTraverseTerrain(MobileParty mobileParty, TerrainType currentTerrainType)`

**用途 / Purpose:** 在 traverse terrain 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnTraverseTerrain(mobileParty, currentTerrainType);
```

### OnBattleEnded
`public void OnBattleEnded(PartyBase party, CharacterObject troop, int excessXp)`

**用途 / Purpose:** 在 battle ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnBattleEnded(party, troop, 0);
```

### OnFoodConsumed
`public void OnFoodConsumed(MobileParty mobileParty, bool wasStarving)`

**用途 / Purpose:** 在 food consumed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnFoodConsumed(mobileParty, false);
```

### OnAlleyCleared
`public void OnAlleyCleared(Alley alley)`

**用途 / Purpose:** 在 alley cleared 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnAlleyCleared(alley);
```

### OnDailyAlleyTick
`public void OnDailyAlleyTick(Alley alley, Hero alleyLeader)`

**用途 / Purpose:** 在 daily alley tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnDailyAlleyTick(alley, alleyLeader);
```

### OnBoardGameWonAgainstLord
`public void OnBoardGameWonAgainstLord(Hero lord, BoardGameHelper.AIDifficulty difficulty, bool extraXpGain)`

**用途 / Purpose:** 在 board game won against lord 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnBoardGameWonAgainstLord(lord, difficulty, false);
```

### OnHideoutMissionEnd
`public void OnHideoutMissionEnd(bool isSucceeded)`

**用途 / Purpose:** 在 hideout mission end 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnHideoutMissionEnd(false);
```

### OnWarehouseProduction
`public void OnWarehouseProduction(EquipmentElement production)`

**用途 / Purpose:** 在 warehouse production 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnWarehouseProduction(production);
```

### OnAIPartyLootCasualties
`public void OnAIPartyLootCasualties(int goldAmount, Hero winnerPartyLeader, PartyBase defeatedParty)`

**用途 / Purpose:** 在 a i party loot casualties 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnAIPartyLootCasualties(0, winnerPartyLeader, defeatedParty);
```

### OnShipDamaged
`public void OnShipDamaged(Ship ship, float rawDamage, float finalDamage)`

**用途 / Purpose:** 在 ship damaged 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnShipDamaged(ship, 0, 0);
```

### OnShipRepaired
`public void OnShipRepaired(Ship ship, float repairedHitPoints)`

**用途 / Purpose:** 在 ship repaired 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnShipRepaired(ship, 0);
```

### OnTravelOnWater
`public void OnTravelOnWater(Hero hero, float speed)`

**用途 / Purpose:** 在 travel on water 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultSkillLevelingManager 实例
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnTravelOnWater(hero, 0);
```

## 使用示例

```csharp
var manager = DefaultSkillLevelingManager.Current;
```

## 参见

- [本区域目录](../)