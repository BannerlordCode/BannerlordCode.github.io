---
title: "DefaultSkillLevelingManager"
description: "Auto-generated class reference for DefaultSkillLevelingManager."
---
# DefaultSkillLevelingManager

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSkillLevelingManager : ISkillLevelingManager`
**Base:** `ISkillLevelingManager`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/DefaultSkillLevelingManager.cs`

## Overview

`DefaultSkillLevelingManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `DefaultSkillLevelingManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnCombatHit
`public void OnCombatHit(CharacterObject affectorCharacter, CharacterObject affectedCharacter, CharacterObject captain, Hero commander, float speedBonusFromMovement, float shotDifficulty, WeaponComponentData affectorWeapon, float hitPointRatio, CombatXpModel.MissionTypeEnum missionType, bool isAffectorMounted, bool isTeamKill, bool isAffectorUnderCommand, float damageAmount, bool isFatal, bool isSiegeEngineHit, bool isHorseCharge, bool isSneakAttack)`

**Purpose:** Invoked when the combat hit event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnCombatHit(affectorCharacter, affectedCharacter, captain, commander, 0, 0, affectorWeapon, 0, missionType, false, false, false, 0, false, false, false, false);
```

### OnSiegeEngineDestroyed
`public void OnSiegeEngineDestroyed(MobileParty party, SiegeEngineType destroyedSiegeEngine)`

**Purpose:** Invoked when the siege engine destroyed event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnSiegeEngineDestroyed(party, destroyedSiegeEngine);
```

### OnSimulationCombatKill
`public void OnSimulationCombatKill(CharacterObject affectorCharacter, CharacterObject affectedCharacter, PartyBase affectorParty, PartyBase commanderParty)`

**Purpose:** Invoked when the simulation combat kill event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnSimulationCombatKill(affectorCharacter, affectedCharacter, affectorParty, commanderParty);
```

### OnTradeProfitMade
`public void OnTradeProfitMade(PartyBase party, int tradeProfit)`

**Purpose:** Invoked when the trade profit made event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnTradeProfitMade(party, 0);
```

### OnTradeProfitMade
`public void OnTradeProfitMade(Hero hero, int tradeProfit)`

**Purpose:** Invoked when the trade profit made event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnTradeProfitMade(hero, 0);
```

### OnSettlementProjectFinished
`public void OnSettlementProjectFinished(Settlement settlement)`

**Purpose:** Invoked when the settlement project finished event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnSettlementProjectFinished(settlement);
```

### OnSettlementGoverned
`public void OnSettlementGoverned(Hero governor, Settlement settlement)`

**Purpose:** Invoked when the settlement governed event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnSettlementGoverned(governor, settlement);
```

### OnInfluenceSpent
`public void OnInfluenceSpent(Hero hero, float amountSpent)`

**Purpose:** Invoked when the influence spent event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnInfluenceSpent(hero, 0);
```

### OnGainRelation
`public void OnGainRelation(Hero hero, Hero gainedRelationWith, float relationChange, ChangeRelationAction.ChangeRelationDetail detail = ChangeRelationAction.ChangeRelationDetail.Default)`

**Purpose:** Invoked when the gain relation event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnGainRelation(hero, gainedRelationWith, 0, changeRelationAction.ChangeRelationDetail.Default);
```

### OnTroopRecruited
`public void OnTroopRecruited(Hero hero, int amount, int tier)`

**Purpose:** Invoked when the troop recruited event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnTroopRecruited(hero, 0, 0);
```

### OnBribeGiven
`public void OnBribeGiven(int amount)`

**Purpose:** Invoked when the bribe given event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnBribeGiven(0);
```

### OnBanditsRecruited
`public void OnBanditsRecruited(MobileParty mobileParty, CharacterObject bandit, int count)`

**Purpose:** Invoked when the bandits recruited event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnBanditsRecruited(mobileParty, bandit, 0);
```

### OnMainHeroReleasedFromCaptivity
`public void OnMainHeroReleasedFromCaptivity(float captivityTime)`

**Purpose:** Invoked when the main hero released from captivity event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnMainHeroReleasedFromCaptivity(0);
```

### OnMainHeroTortured
`public void OnMainHeroTortured()`

**Purpose:** Invoked when the main hero tortured event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnMainHeroTortured();
```

### OnMainHeroDisguised
`public void OnMainHeroDisguised(bool isNotCaught)`

**Purpose:** Invoked when the main hero disguised event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnMainHeroDisguised(false);
```

### OnRaid
`public void OnRaid(MobileParty attackerParty, ItemRoster lootedItems)`

**Purpose:** Invoked when the raid event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnRaid(attackerParty, lootedItems);
```

### OnLoot
`public void OnLoot(MobileParty attackerParty, MobileParty forcedParty, ItemRoster lootedItems, bool attacked)`

**Purpose:** Invoked when the loot event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnLoot(attackerParty, forcedParty, lootedItems, false);
```

### OnPrisonerSell
`public void OnPrisonerSell(MobileParty mobileParty, in TroopRoster prisonerRoster)`

**Purpose:** Invoked when the prisoner sell event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnPrisonerSell(mobileParty, prisonerRoster);
```

### OnSurgeryApplied
`public void OnSurgeryApplied(MobileParty party, bool surgerySuccess, int troopTier)`

**Purpose:** Invoked when the surgery applied event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnSurgeryApplied(party, false, 0);
```

### OnTacticsUsed
`public void OnTacticsUsed(MobileParty party, float xp)`

**Purpose:** Invoked when the tactics used event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnTacticsUsed(party, 0);
```

### OnHideoutSpotted
`public void OnHideoutSpotted(MobileParty party, PartyBase spottedParty)`

**Purpose:** Invoked when the hideout spotted event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnHideoutSpotted(party, spottedParty);
```

### OnTrackDetected
`public void OnTrackDetected(Track track)`

**Purpose:** Invoked when the track detected event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnTrackDetected(track);
```

### OnTravelOnFoot
`public void OnTravelOnFoot(Hero hero, float speed)`

**Purpose:** Invoked when the travel on foot event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnTravelOnFoot(hero, 0);
```

### OnTravelOnHorse
`public void OnTravelOnHorse(Hero hero, float speed)`

**Purpose:** Invoked when the travel on horse event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnTravelOnHorse(hero, 0);
```

### OnHeroHealedWhileWaiting
`public void OnHeroHealedWhileWaiting(Hero hero, int healingAmount)`

**Purpose:** Invoked when the hero healed while waiting event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnHeroHealedWhileWaiting(hero, 0);
```

### OnRegularTroopHealedWhileWaiting
`public void OnRegularTroopHealedWhileWaiting(MobileParty mobileParty, int healedTroopCount, float averageTier)`

**Purpose:** Invoked when the regular troop healed while waiting event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnRegularTroopHealedWhileWaiting(mobileParty, 0, 0);
```

### OnLeadingArmy
`public void OnLeadingArmy(MobileParty mobileParty)`

**Purpose:** Invoked when the leading army event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnLeadingArmy(mobileParty);
```

### OnSieging
`public void OnSieging(MobileParty mobileParty)`

**Purpose:** Invoked when the sieging event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnSieging(mobileParty);
```

### OnSiegeEngineBuilt
`public void OnSiegeEngineBuilt(MobileParty mobileParty, SiegeEngineType siegeEngine)`

**Purpose:** Invoked when the siege engine built event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnSiegeEngineBuilt(mobileParty, siegeEngine);
```

### OnUpgradeTroops
`public void OnUpgradeTroops(PartyBase party, CharacterObject troop, CharacterObject upgrade, int numberOfTroops)`

**Purpose:** Invoked when the upgrade troops event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnUpgradeTroops(party, troop, upgrade, 0);
```

### OnPersuasionSucceeded
`public void OnPersuasionSucceeded(Hero targetHero, SkillObject skill, PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)`

**Purpose:** Invoked when the persuasion succeeded event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnPersuasionSucceeded(targetHero, skill, difficulty, 0);
```

### OnPrisonBreakEnd
`public void OnPrisonBreakEnd(Hero prisonerHero, bool isSucceeded)`

**Purpose:** Invoked when the prison break end event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnPrisonBreakEnd(prisonerHero, false);
```

### OnWallBreached
`public void OnWallBreached(MobileParty party)`

**Purpose:** Invoked when the wall breached event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnWallBreached(party);
```

### OnForceVolunteers
`public void OnForceVolunteers(MobileParty attackerParty, PartyBase forcedParty)`

**Purpose:** Invoked when the force volunteers event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnForceVolunteers(attackerParty, forcedParty);
```

### OnForceSupplies
`public void OnForceSupplies(MobileParty attackerParty, ItemRoster lootedItems, bool attacked)`

**Purpose:** Invoked when the force supplies event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnForceSupplies(attackerParty, lootedItems, false);
```

### OnAIPartiesTravel
`public void OnAIPartiesTravel(Hero hero, bool isCaravanParty, TerrainType currentTerrainType)`

**Purpose:** Invoked when the a i parties travel event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnAIPartiesTravel(hero, false, currentTerrainType);
```

### OnTraverseTerrain
`public void OnTraverseTerrain(MobileParty mobileParty, TerrainType currentTerrainType)`

**Purpose:** Invoked when the traverse terrain event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnTraverseTerrain(mobileParty, currentTerrainType);
```

### OnBattleEnded
`public void OnBattleEnded(PartyBase party, CharacterObject troop, int excessXp)`

**Purpose:** Invoked when the battle ended event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnBattleEnded(party, troop, 0);
```

### OnFoodConsumed
`public void OnFoodConsumed(MobileParty mobileParty, bool wasStarving)`

**Purpose:** Invoked when the food consumed event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnFoodConsumed(mobileParty, false);
```

### OnAlleyCleared
`public void OnAlleyCleared(Alley alley)`

**Purpose:** Invoked when the alley cleared event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnAlleyCleared(alley);
```

### OnDailyAlleyTick
`public void OnDailyAlleyTick(Alley alley, Hero alleyLeader)`

**Purpose:** Invoked when the daily alley tick event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnDailyAlleyTick(alley, alleyLeader);
```

### OnBoardGameWonAgainstLord
`public void OnBoardGameWonAgainstLord(Hero lord, BoardGameHelper.AIDifficulty difficulty, bool extraXpGain)`

**Purpose:** Invoked when the board game won against lord event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnBoardGameWonAgainstLord(lord, difficulty, false);
```

### OnHideoutClearedAsGhost
`public void OnHideoutClearedAsGhost()`

**Purpose:** Invoked when the hideout cleared as ghost event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnHideoutClearedAsGhost();
```

### OnHideoutMissionEnd
`public void OnHideoutMissionEnd(bool isSucceeded)`

**Purpose:** Invoked when the hideout mission end event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnHideoutMissionEnd(false);
```

### OnWarehouseProduction
`public void OnWarehouseProduction(EquipmentElement production)`

**Purpose:** Invoked when the warehouse production event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnWarehouseProduction(production);
```

### OnAIPartyLootCasualties
`public void OnAIPartyLootCasualties(int goldAmount, Hero winnerPartyLeader, PartyBase defeatedParty)`

**Purpose:** Invoked when the a i party loot casualties event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnAIPartyLootCasualties(0, winnerPartyLeader, defeatedParty);
```

### OnShipDamaged
`public void OnShipDamaged(Ship ship, float rawDamage, float finalDamage)`

**Purpose:** Invoked when the ship damaged event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnShipDamaged(ship, 0, 0);
```

### OnShipRepaired
`public void OnShipRepaired(Ship ship, float repairedHitPoints)`

**Purpose:** Invoked when the ship repaired event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnShipRepaired(ship, 0);
```

### OnTravelOnWater
`public void OnTravelOnWater(MobileParty party, float speed)`

**Purpose:** Invoked when the travel on water event is raised.

```csharp
// Obtain an instance of DefaultSkillLevelingManager from the subsystem API first
DefaultSkillLevelingManager defaultSkillLevelingManager = ...;
defaultSkillLevelingManager.OnTravelOnWater(party, 0);
```

## Usage Example

```csharp
var manager = DefaultSkillLevelingManager.Current;
```

## See Also

- [Area Index](../)