---
title: "SkillLevelingManager"
description: "Auto-generated class reference for SkillLevelingManager."
---
# SkillLevelingManager

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class SkillLevelingManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/SkillLevelingManager.cs`

## Overview

`SkillLevelingManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `SkillLevelingManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnCombatHit
`public static void OnCombatHit(CharacterObject affectorCharacter, CharacterObject affectedCharacter, CharacterObject captain, Hero commander, float speedBonusFromMovement, float shotDifficulty, WeaponComponentData affectorWeapon, float hitPointRatio, CombatXpModel.MissionTypeEnum missionType, bool isAffectorMounted, bool isTeamKill, bool isAffectorUnderCommand, float damageAmount, bool isFatal, bool isSiegeEngineHit, bool isHorseCharge)`

**Purpose:** **Purpose:** Invoked when the combat hit event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnCombatHit(affectorCharacter, affectedCharacter, captain, commander, 0, 0, affectorWeapon, 0, missionType, false, false, false, 0, false, false, false);
```

### OnSiegeEngineDestroyed
`public static void OnSiegeEngineDestroyed(MobileParty party, SiegeEngineType destroyedSiegeEngine)`

**Purpose:** **Purpose:** Invoked when the siege engine destroyed event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnSiegeEngineDestroyed(party, destroyedSiegeEngine);
```

### OnWallBreached
`public static void OnWallBreached(MobileParty party)`

**Purpose:** **Purpose:** Invoked when the wall breached event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnWallBreached(party);
```

### OnSimulationCombatKill
`public static void OnSimulationCombatKill(CharacterObject affectorCharacter, CharacterObject affectedCharacter, PartyBase affectorParty, PartyBase commanderParty)`

**Purpose:** **Purpose:** Invoked when the simulation combat kill event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnSimulationCombatKill(affectorCharacter, affectedCharacter, affectorParty, commanderParty);
```

### OnTradeProfitMade
`public static void OnTradeProfitMade(PartyBase party, int tradeProfit)`

**Purpose:** **Purpose:** Invoked when the trade profit made event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnTradeProfitMade(party, 0);
```

### OnTradeProfitMade
`public static void OnTradeProfitMade(Hero hero, int tradeProfit)`

**Purpose:** **Purpose:** Invoked when the trade profit made event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnTradeProfitMade(hero, 0);
```

### OnSettlementProjectFinished
`public static void OnSettlementProjectFinished(Settlement settlement)`

**Purpose:** **Purpose:** Invoked when the settlement project finished event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnSettlementProjectFinished(settlement);
```

### OnSettlementGoverned
`public static void OnSettlementGoverned(Hero governor, Settlement settlement)`

**Purpose:** **Purpose:** Invoked when the settlement governed event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnSettlementGoverned(governor, settlement);
```

### OnInfluenceSpent
`public static void OnInfluenceSpent(Hero hero, float amountSpent)`

**Purpose:** **Purpose:** Invoked when the influence spent event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnInfluenceSpent(hero, 0);
```

### OnGainRelation
`public static void OnGainRelation(Hero hero, Hero gainedRelationWith, float relationChange, ChangeRelationAction.ChangeRelationDetail detail = ChangeRelationAction.ChangeRelationDetail.Default)`

**Purpose:** **Purpose:** Invoked when the gain relation event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnGainRelation(hero, gainedRelationWith, 0, changeRelationAction.ChangeRelationDetail.Default);
```

### OnTroopRecruited
`public static void OnTroopRecruited(Hero hero, int amount, int tier)`

**Purpose:** **Purpose:** Invoked when the troop recruited event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnTroopRecruited(hero, 0, 0);
```

### OnBribeGiven
`public static void OnBribeGiven(int amount)`

**Purpose:** **Purpose:** Invoked when the bribe given event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnBribeGiven(0);
```

### OnBanditsRecruited
`public static void OnBanditsRecruited(MobileParty mobileParty, CharacterObject bandit, int count)`

**Purpose:** **Purpose:** Invoked when the bandits recruited event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnBanditsRecruited(mobileParty, bandit, 0);
```

### OnMainHeroReleasedFromCaptivity
`public static void OnMainHeroReleasedFromCaptivity(float captivityTime)`

**Purpose:** **Purpose:** Invoked when the main hero released from captivity event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnMainHeroReleasedFromCaptivity(0);
```

### OnMainHeroTortured
`public static void OnMainHeroTortured()`

**Purpose:** **Purpose:** Invoked when the main hero tortured event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnMainHeroTortured();
```

### OnMainHeroDisguised
`public static void OnMainHeroDisguised(bool isNotCaught)`

**Purpose:** **Purpose:** Invoked when the main hero disguised event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnMainHeroDisguised(false);
```

### OnRaid
`public static void OnRaid(MobileParty attackerParty, ItemRoster lootedItems)`

**Purpose:** **Purpose:** Invoked when the raid event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnRaid(attackerParty, lootedItems);
```

### OnLoot
`public static void OnLoot(MobileParty attackerParty, MobileParty forcedParty, ItemRoster lootedItems, bool attacked)`

**Purpose:** **Purpose:** Invoked when the loot event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnLoot(attackerParty, forcedParty, lootedItems, false);
```

### OnForceVolunteers
`public static void OnForceVolunteers(MobileParty attackerParty, PartyBase forcedParty)`

**Purpose:** **Purpose:** Invoked when the force volunteers event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnForceVolunteers(attackerParty, forcedParty);
```

### OnForceSupplies
`public static void OnForceSupplies(MobileParty attackerParty, ItemRoster lootedItems, bool attacked)`

**Purpose:** **Purpose:** Invoked when the force supplies event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnForceSupplies(attackerParty, lootedItems, false);
```

### OnPrisonerSell
`public static void OnPrisonerSell(MobileParty mobileParty, in TroopRoster prisonerRoster)`

**Purpose:** **Purpose:** Invoked when the prisoner sell event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnPrisonerSell(mobileParty, prisonerRoster);
```

### OnSurgeryApplied
`public static void OnSurgeryApplied(MobileParty party, bool surgerySuccess, int troopTier)`

**Purpose:** **Purpose:** Invoked when the surgery applied event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnSurgeryApplied(party, false, 0);
```

### OnTacticsUsed
`public static void OnTacticsUsed(MobileParty party, float xp)`

**Purpose:** **Purpose:** Invoked when the tactics used event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnTacticsUsed(party, 0);
```

### OnHideoutSpotted
`public static void OnHideoutSpotted(MobileParty party, PartyBase spottedParty)`

**Purpose:** **Purpose:** Invoked when the hideout spotted event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnHideoutSpotted(party, spottedParty);
```

### OnTrackDetected
`public static void OnTrackDetected(Track track)`

**Purpose:** **Purpose:** Invoked when the track detected event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnTrackDetected(track);
```

### OnTravelOnFoot
`public static void OnTravelOnFoot(Hero hero, float speed)`

**Purpose:** **Purpose:** Invoked when the travel on foot event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnTravelOnFoot(hero, 0);
```

### OnTravelOnHorse
`public static void OnTravelOnHorse(Hero hero, float speed)`

**Purpose:** **Purpose:** Invoked when the travel on horse event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnTravelOnHorse(hero, 0);
```

### OnTravelOnWater
`public static void OnTravelOnWater(Hero hero, float speed)`

**Purpose:** **Purpose:** Invoked when the travel on water event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnTravelOnWater(hero, 0);
```

### OnAIPartiesTravel
`public static void OnAIPartiesTravel(Hero hero, bool isCaravanParty, TerrainType currentTerrainType)`

**Purpose:** **Purpose:** Invoked when the a i parties travel event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnAIPartiesTravel(hero, false, currentTerrainType);
```

### OnTraverseTerrain
`public static void OnTraverseTerrain(MobileParty mobileParty, TerrainType currentTerrainType)`

**Purpose:** **Purpose:** Invoked when the traverse terrain event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnTraverseTerrain(mobileParty, currentTerrainType);
```

### OnHeroHealedWhileWaiting
`public static void OnHeroHealedWhileWaiting(Hero hero, int healingAmount)`

**Purpose:** **Purpose:** Invoked when the hero healed while waiting event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnHeroHealedWhileWaiting(hero, 0);
```

### OnRegularTroopHealedWhileWaiting
`public static void OnRegularTroopHealedWhileWaiting(MobileParty mobileParty, int healedTroopCount, float averageTier)`

**Purpose:** **Purpose:** Invoked when the regular troop healed while waiting event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnRegularTroopHealedWhileWaiting(mobileParty, 0, 0);
```

### OnLeadingArmy
`public static void OnLeadingArmy(MobileParty mobileParty)`

**Purpose:** **Purpose:** Invoked when the leading army event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnLeadingArmy(mobileParty);
```

### OnSieging
`public static void OnSieging(MobileParty mobileParty)`

**Purpose:** **Purpose:** Invoked when the sieging event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnSieging(mobileParty);
```

### OnSiegeEngineBuilt
`public static void OnSiegeEngineBuilt(MobileParty mobileParty, SiegeEngineType siegeEngine)`

**Purpose:** **Purpose:** Invoked when the siege engine built event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnSiegeEngineBuilt(mobileParty, siegeEngine);
```

### OnUpgradeTroops
`public static void OnUpgradeTroops(PartyBase party, CharacterObject troop, CharacterObject upgrade, int numberOfTroops)`

**Purpose:** **Purpose:** Invoked when the upgrade troops event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnUpgradeTroops(party, troop, upgrade, 0);
```

### OnBattleEnd
`public static void OnBattleEnd(PartyBase party, FlattenedTroopRoster flattenedTroopRoster)`

**Purpose:** **Purpose:** Invoked when the battle end event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnBattleEnd(party, flattenedTroopRoster);
```

### OnPersuasionSucceeded
`public static void OnPersuasionSucceeded(Hero targetHero, SkillObject skill, PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)`

**Purpose:** **Purpose:** Invoked when the persuasion succeeded event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnPersuasionSucceeded(targetHero, skill, difficulty, 0);
```

### OnPrisonBreakEnd
`public static void OnPrisonBreakEnd(Hero prisonerHero, bool isSucceeded)`

**Purpose:** **Purpose:** Invoked when the prison break end event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnPrisonBreakEnd(prisonerHero, false);
```

### OnFoodConsumed
`public static void OnFoodConsumed(MobileParty mobileParty, bool wasStarving)`

**Purpose:** **Purpose:** Invoked when the food consumed event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnFoodConsumed(mobileParty, false);
```

### OnAlleyCleared
`public static void OnAlleyCleared(Alley alley)`

**Purpose:** **Purpose:** Invoked when the alley cleared event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnAlleyCleared(alley);
```

### OnDailyAlleyTick
`public static void OnDailyAlleyTick(Alley alley, Hero alleyLeader)`

**Purpose:** **Purpose:** Invoked when the daily alley tick event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnDailyAlleyTick(alley, alleyLeader);
```

### OnBoardGameWonAgainstLord
`public static void OnBoardGameWonAgainstLord(Hero lord, BoardGameHelper.AIDifficulty difficulty, bool extraXpGain)`

**Purpose:** **Purpose:** Invoked when the board game won against lord event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnBoardGameWonAgainstLord(lord, difficulty, false);
```

### OnProductionProducedToWarehouse
`public static void OnProductionProducedToWarehouse(EquipmentElement production)`

**Purpose:** **Purpose:** Invoked when the production produced to warehouse event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnProductionProducedToWarehouse(production);
```

### OnAIPartyLootCasualties
`public static void OnAIPartyLootCasualties(int goldAmount, Hero winnerPartyLeader, PartyBase defeatedParty)`

**Purpose:** **Purpose:** Invoked when the a i party loot casualties event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnAIPartyLootCasualties(0, winnerPartyLeader, defeatedParty);
```

### OnShipDamaged
`public static void OnShipDamaged(Ship ship, float rawDamage, float finalDamage)`

**Purpose:** **Purpose:** Invoked when the ship damaged event is raised.

```csharp
// Static call; no instance required
SkillLevelingManager.OnShipDamaged(ship, 0, 0);
```

## Usage Example

```csharp
var manager = SkillLevelingManager.Current;
```

## See Also

- [Area Index](../)