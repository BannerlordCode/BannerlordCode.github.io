---
title: "SkillLevelingManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkillLevelingManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SkillLevelingManager

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class SkillLevelingManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/SkillLevelingManager.cs`

## Overview

`SkillLevelingManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `SkillLevelingManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnCombatHit
`public static void OnCombatHit(CharacterObject affectorCharacter, CharacterObject affectedCharacter, CharacterObject captain, Hero commander, float speedBonusFromMovement, float shotDifficulty, WeaponComponentData affectorWeapon, float hitPointRatio, CombatXpModel.MissionTypeEnum missionType, bool isAffectorMounted, bool isTeamKill, bool isAffectorUnderCommand, float damageAmount, bool isFatal, bool isSiegeEngineHit, bool isHorseCharge, bool isSneakAttack)`

**Purpose:** Called when the `combat hit` event is raised.

### OnSiegeEngineDestroyed
`public static void OnSiegeEngineDestroyed(MobileParty party, SiegeEngineType destroyedSiegeEngine)`

**Purpose:** Called when the `siege engine destroyed` event is raised.

### OnWallBreached
`public static void OnWallBreached(MobileParty party)`

**Purpose:** Called when the `wall breached` event is raised.

### OnSimulationCombatKill
`public static void OnSimulationCombatKill(CharacterObject affectorCharacter, CharacterObject affectedCharacter, PartyBase affectorParty, PartyBase commanderParty)`

**Purpose:** Called when the `simulation combat kill` event is raised.

### OnTradeProfitMade
`public static void OnTradeProfitMade(PartyBase party, int tradeProfit)`

**Purpose:** Called when the `trade profit made` event is raised.

### OnTradeProfitMade
`public static void OnTradeProfitMade(Hero hero, int tradeProfit)`

**Purpose:** Called when the `trade profit made` event is raised.

### OnSettlementProjectFinished
`public static void OnSettlementProjectFinished(Settlement settlement)`

**Purpose:** Called when the `settlement project finished` event is raised.

### OnSettlementGoverned
`public static void OnSettlementGoverned(Hero governor, Settlement settlement)`

**Purpose:** Called when the `settlement governed` event is raised.

### OnInfluenceSpent
`public static void OnInfluenceSpent(Hero hero, float amountSpent)`

**Purpose:** Called when the `influence spent` event is raised.

### OnGainRelation
`public static void OnGainRelation(Hero hero, Hero gainedRelationWith, float relationChange, ChangeRelationAction.ChangeRelationDetail detail = ChangeRelationAction.ChangeRelationDetail.Default)`

**Purpose:** Called when the `gain relation` event is raised.

### OnTroopRecruited
`public static void OnTroopRecruited(Hero hero, int amount, int tier)`

**Purpose:** Called when the `troop recruited` event is raised.

### OnBribeGiven
`public static void OnBribeGiven(int amount)`

**Purpose:** Called when the `bribe given` event is raised.

### OnBanditsRecruited
`public static void OnBanditsRecruited(MobileParty mobileParty, CharacterObject bandit, int count)`

**Purpose:** Called when the `bandits recruited` event is raised.

### OnMainHeroReleasedFromCaptivity
`public static void OnMainHeroReleasedFromCaptivity(float captivityTime)`

**Purpose:** Called when the `main hero released from captivity` event is raised.

### OnMainHeroTortured
`public static void OnMainHeroTortured()`

**Purpose:** Called when the `main hero tortured` event is raised.

### OnMainHeroDisguised
`public static void OnMainHeroDisguised(bool isNotCaught)`

**Purpose:** Called when the `main hero disguised` event is raised.

### OnRaid
`public static void OnRaid(MobileParty attackerParty, ItemRoster lootedItems)`

**Purpose:** Called when the `raid` event is raised.

### OnLoot
`public static void OnLoot(MobileParty attackerParty, MobileParty forcedParty, ItemRoster lootedItems, bool attacked)`

**Purpose:** Called when the `loot` event is raised.

### OnForceVolunteers
`public static void OnForceVolunteers(MobileParty attackerParty, PartyBase forcedParty)`

**Purpose:** Called when the `force volunteers` event is raised.

### OnForceSupplies
`public static void OnForceSupplies(MobileParty attackerParty, ItemRoster lootedItems, bool attacked)`

**Purpose:** Called when the `force supplies` event is raised.

### OnPrisonerSell
`public static void OnPrisonerSell(MobileParty mobileParty, in TroopRoster prisonerRoster)`

**Purpose:** Called when the `prisoner sell` event is raised.

### OnSurgeryApplied
`public static void OnSurgeryApplied(MobileParty party, bool surgerySuccess, int troopTier)`

**Purpose:** Called when the `surgery applied` event is raised.

### OnTacticsUsed
`public static void OnTacticsUsed(MobileParty party, float xp)`

**Purpose:** Called when the `tactics used` event is raised.

### OnHideoutSpotted
`public static void OnHideoutSpotted(MobileParty party, PartyBase spottedParty)`

**Purpose:** Called when the `hideout spotted` event is raised.

### OnTrackDetected
`public static void OnTrackDetected(Track track)`

**Purpose:** Called when the `track detected` event is raised.

### OnTravelOnFoot
`public static void OnTravelOnFoot(Hero hero, float speed)`

**Purpose:** Called when the `travel on foot` event is raised.

### OnTravelOnHorse
`public static void OnTravelOnHorse(Hero hero, float speed)`

**Purpose:** Called when the `travel on horse` event is raised.

### OnTravelOnWater
`public static void OnTravelOnWater(MobileParty party, float speed)`

**Purpose:** Called when the `travel on water` event is raised.

### OnAIPartiesTravel
`public static void OnAIPartiesTravel(Hero hero, bool isCaravanParty, TerrainType currentTerrainType)`

**Purpose:** Called when the `a i parties travel` event is raised.

### OnTraverseTerrain
`public static void OnTraverseTerrain(MobileParty mobileParty, TerrainType currentTerrainType)`

**Purpose:** Called when the `traverse terrain` event is raised.

### OnBattleEnded
`public static void OnBattleEnded(PartyBase party, CharacterObject troop, int excessXp)`

**Purpose:** Called when the `battle ended` event is raised.

### OnHeroHealedWhileWaiting
`public static void OnHeroHealedWhileWaiting(Hero hero, int healingAmount)`

**Purpose:** Called when the `hero healed while waiting` event is raised.

### OnRegularTroopHealedWhileWaiting
`public static void OnRegularTroopHealedWhileWaiting(MobileParty mobileParty, int healedTroopCount, float averageTier)`

**Purpose:** Called when the `regular troop healed while waiting` event is raised.

### OnLeadingArmy
`public static void OnLeadingArmy(MobileParty mobileParty)`

**Purpose:** Called when the `leading army` event is raised.

### OnSieging
`public static void OnSieging(MobileParty mobileParty)`

**Purpose:** Called when the `sieging` event is raised.

### OnSiegeEngineBuilt
`public static void OnSiegeEngineBuilt(MobileParty mobileParty, SiegeEngineType siegeEngine)`

**Purpose:** Called when the `siege engine built` event is raised.

### OnUpgradeTroops
`public static void OnUpgradeTroops(PartyBase party, CharacterObject troop, CharacterObject upgrade, int numberOfTroops)`

**Purpose:** Called when the `upgrade troops` event is raised.

### OnPersuasionSucceeded
`public static void OnPersuasionSucceeded(Hero targetHero, SkillObject skill, PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)`

**Purpose:** Called when the `persuasion succeeded` event is raised.

### OnPrisonBreakEnd
`public static void OnPrisonBreakEnd(Hero prisonerHero, bool isSucceeded)`

**Purpose:** Called when the `prison break end` event is raised.

### OnFoodConsumed
`public static void OnFoodConsumed(MobileParty mobileParty, bool wasStarving)`

**Purpose:** Called when the `food consumed` event is raised.

### OnAlleyCleared
`public static void OnAlleyCleared(Alley alley)`

**Purpose:** Called when the `alley cleared` event is raised.

### OnDailyAlleyTick
`public static void OnDailyAlleyTick(Alley alley, Hero alleyLeader)`

**Purpose:** Called when the `daily alley tick` event is raised.

### OnBoardGameWonAgainstLord
`public static void OnBoardGameWonAgainstLord(Hero lord, BoardGameHelper.AIDifficulty difficulty, bool extraXpGain)`

**Purpose:** Called when the `board game won against lord` event is raised.

### OnProductionProducedToWarehouse
`public static void OnProductionProducedToWarehouse(EquipmentElement production)`

**Purpose:** Called when the `production produced to warehouse` event is raised.

### OnAIPartyLootCasualties
`public static void OnAIPartyLootCasualties(int goldAmount, Hero winnerPartyLeader, PartyBase defeatedParty)`

**Purpose:** Called when the `a i party loot casualties` event is raised.

### OnShipDamaged
`public static void OnShipDamaged(Ship ship, float rawDamage, float finalDamage)`

**Purpose:** Called when the `ship damaged` event is raised.

### OnShipRepaired
`public static void OnShipRepaired(Ship ship, float repairedHitPoints)`

**Purpose:** Called when the `ship repaired` event is raised.

## Usage Example

```csharp
var manager = SkillLevelingManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)