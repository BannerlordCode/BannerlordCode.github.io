<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSkillLevelingManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSkillLevelingManager

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSkillLevelingManager : ISkillLevelingManager`
**Base:** `ISkillLevelingManager`
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultSkillLevelingManager.cs`

## Overview

`DefaultSkillLevelingManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `DefaultSkillLevelingManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnCombatHit
`public void OnCombatHit(CharacterObject affectorCharacter, CharacterObject affectedCharacter, CharacterObject captain, Hero commander, float speedBonusFromMovement, float shotDifficulty, WeaponComponentData affectorWeapon, float hitPointRatio, CombatXpModel.MissionTypeEnum missionType, bool isAffectorMounted, bool isTeamKill, bool isAffectorUnderCommand, float damageAmount, bool isFatal, bool isSiegeEngineHit, bool isHorseCharge)`

**Purpose:** Called when the `combat hit` event is raised.

### OnSiegeEngineDestroyed
`public void OnSiegeEngineDestroyed(MobileParty party, SiegeEngineType destroyedSiegeEngine)`

**Purpose:** Called when the `siege engine destroyed` event is raised.

### OnSimulationCombatKill
`public void OnSimulationCombatKill(CharacterObject affectorCharacter, CharacterObject affectedCharacter, PartyBase affectorParty, PartyBase commanderParty)`

**Purpose:** Called when the `simulation combat kill` event is raised.

### OnTradeProfitMade
`public void OnTradeProfitMade(PartyBase party, int tradeProfit)`

**Purpose:** Called when the `trade profit made` event is raised.

### OnTradeProfitMade
`public void OnTradeProfitMade(Hero hero, int tradeProfit)`

**Purpose:** Called when the `trade profit made` event is raised.

### OnSettlementProjectFinished
`public void OnSettlementProjectFinished(Settlement settlement)`

**Purpose:** Called when the `settlement project finished` event is raised.

### OnSettlementGoverned
`public void OnSettlementGoverned(Hero governor, Settlement settlement)`

**Purpose:** Called when the `settlement governed` event is raised.

### OnInfluenceSpent
`public void OnInfluenceSpent(Hero hero, float amountSpent)`

**Purpose:** Called when the `influence spent` event is raised.

### OnGainRelation
`public void OnGainRelation(Hero hero, Hero gainedRelationWith, float relationChange, ChangeRelationAction.ChangeRelationDetail detail = ChangeRelationAction.ChangeRelationDetail.Default)`

**Purpose:** Called when the `gain relation` event is raised.

### OnTroopRecruited
`public void OnTroopRecruited(Hero hero, int amount, int tier)`

**Purpose:** Called when the `troop recruited` event is raised.

### OnBribeGiven
`public void OnBribeGiven(int amount)`

**Purpose:** Called when the `bribe given` event is raised.

### OnBanditsRecruited
`public void OnBanditsRecruited(MobileParty mobileParty, CharacterObject bandit, int count)`

**Purpose:** Called when the `bandits recruited` event is raised.

### OnMainHeroReleasedFromCaptivity
`public void OnMainHeroReleasedFromCaptivity(float captivityTime)`

**Purpose:** Called when the `main hero released from captivity` event is raised.

### OnMainHeroTortured
`public void OnMainHeroTortured()`

**Purpose:** Called when the `main hero tortured` event is raised.

### OnMainHeroDisguised
`public void OnMainHeroDisguised(bool isNotCaught)`

**Purpose:** Called when the `main hero disguised` event is raised.

### OnRaid
`public void OnRaid(MobileParty attackerParty, ItemRoster lootedItems)`

**Purpose:** Called when the `raid` event is raised.

### OnLoot
`public void OnLoot(MobileParty attackerParty, MobileParty forcedParty, ItemRoster lootedItems, bool attacked)`

**Purpose:** Called when the `loot` event is raised.

### OnPrisonerSell
`public void OnPrisonerSell(MobileParty mobileParty, in TroopRoster prisonerRoster)`

**Purpose:** Called when the `prisoner sell` event is raised.

### OnSurgeryApplied
`public void OnSurgeryApplied(MobileParty party, bool surgerySuccess, int troopTier)`

**Purpose:** Called when the `surgery applied` event is raised.

### OnTacticsUsed
`public void OnTacticsUsed(MobileParty party, float xp)`

**Purpose:** Called when the `tactics used` event is raised.

### OnHideoutSpotted
`public void OnHideoutSpotted(MobileParty party, PartyBase spottedParty)`

**Purpose:** Called when the `hideout spotted` event is raised.

### OnTrackDetected
`public void OnTrackDetected(Track track)`

**Purpose:** Called when the `track detected` event is raised.

### OnTravelOnFoot
`public void OnTravelOnFoot(Hero hero, float speed)`

**Purpose:** Called when the `travel on foot` event is raised.

### OnTravelOnHorse
`public void OnTravelOnHorse(Hero hero, float speed)`

**Purpose:** Called when the `travel on horse` event is raised.

### OnTravelOnWater
`public void OnTravelOnWater(Hero hero, float speed)`

**Purpose:** Called when the `travel on water` event is raised.

### OnHeroHealedWhileWaiting
`public void OnHeroHealedWhileWaiting(Hero hero, int healingAmount)`

**Purpose:** Called when the `hero healed while waiting` event is raised.

### OnRegularTroopHealedWhileWaiting
`public void OnRegularTroopHealedWhileWaiting(MobileParty mobileParty, int healedTroopCount, float averageTier)`

**Purpose:** Called when the `regular troop healed while waiting` event is raised.

### OnLeadingArmy
`public void OnLeadingArmy(MobileParty mobileParty)`

**Purpose:** Called when the `leading army` event is raised.

### OnSieging
`public void OnSieging(MobileParty mobileParty)`

**Purpose:** Called when the `sieging` event is raised.

### OnSiegeEngineBuilt
`public void OnSiegeEngineBuilt(MobileParty mobileParty, SiegeEngineType siegeEngine)`

**Purpose:** Called when the `siege engine built` event is raised.

### OnUpgradeTroops
`public void OnUpgradeTroops(PartyBase party, CharacterObject troop, CharacterObject upgrade, int numberOfTroops)`

**Purpose:** Called when the `upgrade troops` event is raised.

### OnPersuasionSucceeded
`public void OnPersuasionSucceeded(Hero targetHero, SkillObject skill, PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)`

**Purpose:** Called when the `persuasion succeeded` event is raised.

### OnPrisonBreakEnd
`public void OnPrisonBreakEnd(Hero prisonerHero, bool isSucceeded)`

**Purpose:** Called when the `prison break end` event is raised.

### OnWallBreached
`public void OnWallBreached(MobileParty party)`

**Purpose:** Called when the `wall breached` event is raised.

### OnForceVolunteers
`public void OnForceVolunteers(MobileParty attackerParty, PartyBase forcedParty)`

**Purpose:** Called when the `force volunteers` event is raised.

### OnForceSupplies
`public void OnForceSupplies(MobileParty attackerParty, ItemRoster lootedItems, bool attacked)`

**Purpose:** Called when the `force supplies` event is raised.

### OnAIPartiesTravel
`public void OnAIPartiesTravel(Hero hero, bool isCaravanParty, TerrainType currentTerrainType)`

**Purpose:** Called when the `a i parties travel` event is raised.

### OnTraverseTerrain
`public void OnTraverseTerrain(MobileParty mobileParty, TerrainType currentTerrainType)`

**Purpose:** Called when the `traverse terrain` event is raised.

### OnBattleEnd
`public void OnBattleEnd(PartyBase party, FlattenedTroopRoster flattenedTroopRoster)`

**Purpose:** Called when the `battle end` event is raised.

### OnFoodConsumed
`public void OnFoodConsumed(MobileParty mobileParty, bool wasStarving)`

**Purpose:** Called when the `food consumed` event is raised.

### OnAlleyCleared
`public void OnAlleyCleared(Alley alley)`

**Purpose:** Called when the `alley cleared` event is raised.

### OnDailyAlleyTick
`public void OnDailyAlleyTick(Alley alley, Hero alleyLeader)`

**Purpose:** Called when the `daily alley tick` event is raised.

### OnBoardGameWonAgainstLord
`public void OnBoardGameWonAgainstLord(Hero lord, BoardGameHelper.AIDifficulty difficulty, bool extraXpGain)`

**Purpose:** Called when the `board game won against lord` event is raised.

### OnShipDamaged
`public void OnShipDamaged(Ship ship, float rawDamage, float finalDamage)`

**Purpose:** Called when the `ship damaged` event is raised.

### OnWarehouseProduction
`public void OnWarehouseProduction(EquipmentElement production)`

**Purpose:** Called when the `warehouse production` event is raised.

### OnAIPartyLootCasualties
`public void OnAIPartyLootCasualties(int goldAmount, Hero winnerPartyLeader, PartyBase defeatedParty)`

**Purpose:** Called when the `a i party loot casualties` event is raised.

## Usage Example

```csharp
var manager = DefaultSkillLevelingManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)