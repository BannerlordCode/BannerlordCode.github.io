---
title: "ISkillLevelingManager"
description: "ISkillLevelingManager: a public interface in TaleWorlds.CampaignSystem.CharacterDevelopment; 49 exposed members (49 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/CharacterDevelopment/ISkillLevelingManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ISkillLevelingManager

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ISkillLevelingManager`
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/ISkillLevelingManager.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

ISkillLevelingManager lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CharacterDevelopment/ISkillLevelingManager.cs. It is a public interface; the inheritance chain is ISkillLevelingManager. It exposes 49 public/protected members: 49 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ISkillLevelingManager lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.CharacterDevelopment`, inheritance chain ISkillLevelingManager. The surface is method-led (methods 49/49, properties 0/49), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CharacterDevelopment/ISkillLevelingManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnCombatHit` | `void OnCombatHit(CharacterObject affectorCharacter, CharacterObject affectedCharacter, CharacterObject captain, Hero commander, float speedBonusFromMovement, float shotDifficulty, WeaponComponentData affectorWeapon, float hitPointRatio, CombatXpModel.MissionTypeEnum missionType, bool isAffectorMounted, bool isTeamKill, bool isAffectorUnderCommand, float damageAmount, bool isFatal, bool isSiegeEngineHit, bool isHorseCharge, bool isSneakAttack);` | method |
| `OnSiegeEngineDestroyed` | `void OnSiegeEngineDestroyed(MobileParty party, SiegeEngineType destroyedSiegeEngine);` | method |
| `OnSimulationCombatKill` | `void OnSimulationCombatKill(CharacterObject affectorCharacter, CharacterObject affectedCharacter, PartyBase affectorParty, PartyBase commanderParty);` | method |
| `OnTradeProfitMade` | `void OnTradeProfitMade(PartyBase party, int tradeProfit);` | method |
| `OnTradeProfitMade` | `void OnTradeProfitMade(Hero hero, int tradeProfit);` | method |
| `OnSettlementProjectFinished` | `void OnSettlementProjectFinished(Settlement settlement);` | method |
| `OnSettlementGoverned` | `void OnSettlementGoverned(Hero governor, Settlement settlement);` | method |
| `OnInfluenceSpent` | `void OnInfluenceSpent(Hero hero, float amountSpent);` | method |
| `OnGainRelation` | `void OnGainRelation(Hero hero, Hero gainedRelationWith, float relationChange, ChangeRelationAction.ChangeRelationDetail detail = ChangeRelationAction.ChangeRelationDetail.Default);` | method |
| `OnTroopRecruited` | `void OnTroopRecruited(Hero hero, int amount, int tier);` | method |
| `OnBribeGiven` | `void OnBribeGiven(int amount);` | method |
| `OnWarehouseProduction` | `void OnWarehouseProduction(EquipmentElement production);` | method |
| `OnAIPartyLootCasualties` | `void OnAIPartyLootCasualties(int goldAmount, Hero winnerPartyLeader, PartyBase defeatedParty);` | method |
| `OnBanditsRecruited` | `void OnBanditsRecruited(MobileParty mobileParty, CharacterObject bandit, int count);` | method |
| `OnMainHeroReleasedFromCaptivity` | `void OnMainHeroReleasedFromCaptivity(float captivityTime);` | method |
| `OnMainHeroTortured` | `void OnMainHeroTortured();` | method |
| `OnMainHeroDisguised` | `void OnMainHeroDisguised(bool isNotCaught);` | method |
| `OnRaid` | `void OnRaid(MobileParty attackerParty, ItemRoster lootedItems);` | method |
| `OnLoot` | `void OnLoot(MobileParty attackerParty, MobileParty forcedParty, ItemRoster lootedItems, bool attacked);` | method |
| `OnPrisonerSell` | `void OnPrisonerSell(MobileParty mobileParty, in TroopRoster prisonerRoster);` | method |
| `OnSurgeryApplied` | `void OnSurgeryApplied(MobileParty party, bool surgerySuccess, int troopTier);` | method |
| `OnTacticsUsed` | `void OnTacticsUsed(MobileParty party, float xp);` | method |
| `OnHideoutSpotted` | `void OnHideoutSpotted(MobileParty party, PartyBase spottedParty);` | method |
| `OnTrackDetected` | `void OnTrackDetected(Track track);` | method |
| `OnTravelOnFoot` | `void OnTravelOnFoot(Hero hero, float speed);` | method |
| `OnTravelOnHorse` | `void OnTravelOnHorse(Hero hero, float speed);` | method |
| `OnTravelOnWater` | `void OnTravelOnWater(MobileParty party, float speed);` | method |
| `OnHeroHealedWhileWaiting` | `void OnHeroHealedWhileWaiting(Hero hero, int healingAmount);` | method |
| `OnRegularTroopHealedWhileWaiting` | `void OnRegularTroopHealedWhileWaiting(MobileParty mobileParty, int healedTroopCount, float averageTier);` | method |
| `OnLeadingArmy` | `void OnLeadingArmy(MobileParty mobileParty);` | method |
| `OnSieging` | `void OnSieging(MobileParty mobileParty);` | method |
| `OnSiegeEngineBuilt` | `void OnSiegeEngineBuilt(MobileParty mobileParty, SiegeEngineType siegeEngine);` | method |
| `OnUpgradeTroops` | `void OnUpgradeTroops(PartyBase party, CharacterObject troop, CharacterObject upgrade, int numberOfTroops);` | method |
| `OnPersuasionSucceeded` | `void OnPersuasionSucceeded(Hero targetHero, SkillObject skill, PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient);` | method |
| `OnPrisonBreakEnd` | `void OnPrisonBreakEnd(Hero prisonerHero, bool isSucceeded);` | method |
| `OnWallBreached` | `void OnWallBreached(MobileParty party);` | method |
| `OnForceVolunteers` | `void OnForceVolunteers(MobileParty attackerParty, PartyBase forcedParty);` | method |
| `OnForceSupplies` | `void OnForceSupplies(MobileParty attackerParty, ItemRoster lootedItems, bool attacked);` | method |
| `OnAIPartiesTravel` | `void OnAIPartiesTravel(Hero hero, bool isCaravanParty, TerrainType currentTerrainType);` | method |
| `OnTraverseTerrain` | `void OnTraverseTerrain(MobileParty mobileParty, TerrainType currentTerrainType);` | method |
| `OnBattleEnded` | `void OnBattleEnded(PartyBase party, CharacterObject troop, int excessXp);` | method |
| `OnFoodConsumed` | `void OnFoodConsumed(MobileParty mobileParty, bool wasStarving);` | method |
| `OnAlleyCleared` | `void OnAlleyCleared(Alley alley);` | method |
| `OnDailyAlleyTick` | `void OnDailyAlleyTick(Alley alley, Hero alleyLeader);` | method |
| `OnBoardGameWonAgainstLord` | `void OnBoardGameWonAgainstLord(Hero lord, BoardGameHelper.AIDifficulty difficulty, bool extraXpGain);` | method |
| `OnShipDamaged` | `void OnShipDamaged(Ship ship, float rawDamage, float finalDamage);` | method |
| `OnShipRepaired` | `void OnShipRepaired(Ship ship, float repairedHitPoints);` | method |
| `OnHideoutMissionEnd` | `void OnHideoutMissionEnd(bool isSucceeded);` | method |
| `OnHideoutClearedAsGhost` | `void OnHideoutClearedAsGhost();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DefaultCulturalFeats](../DefaultCulturalFeats/)
- [same namespace DefaultPerks](../DefaultPerks/)
- [same namespace DefaultSkillLevelingManager](../DefaultSkillLevelingManager/)
- [same namespace DefaultTraits](../DefaultTraits/)
