---
title: "DefaultSkillLevelingManager"
description: "DefaultSkillLevelingManager: a public class in TaleWorlds.CampaignSystem.CharacterDevelopment, inheriting ISkillLevelingManager; 49 exposed members (49 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultSkillLevelingManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultSkillLevelingManager

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSkillLevelingManager : ISkillLevelingManager`
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultSkillLevelingManager.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

DefaultSkillLevelingManager lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultSkillLevelingManager.cs. It is a public class, implementing/inheriting ISkillLevelingManager; the inheritance chain is DefaultSkillLevelingManager → ISkillLevelingManager. It exposes 49 public/protected members: 49 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSkillLevelingManager lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.CharacterDevelopment`, inheritance chain DefaultSkillLevelingManager → ISkillLevelingManager. The surface is method-led (methods 49/49, properties 0/49), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultSkillLevelingManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnCombatHit` | `public void OnCombatHit(CharacterObject affectorCharacter, CharacterObject affectedCharacter, CharacterObject captain, Hero commander, float speedBonusFromMovement, float shotDifficulty, WeaponComponentData affectorWeapon, float hitPointRatio, CombatXpModel.MissionTypeEnum missionType, bool isAffectorMounted, bool isTeamKill, bool isAffectorUnderCommand, float damageAmount, bool isFatal, bool isSiegeEngineHit, bool isHorseCharge, bool isSneakAttack)` | method |
| `OnSiegeEngineDestroyed` | `public void OnSiegeEngineDestroyed(MobileParty party, SiegeEngineType destroyedSiegeEngine)` | method |
| `OnSimulationCombatKill` | `public void OnSimulationCombatKill(CharacterObject affectorCharacter, CharacterObject affectedCharacter, PartyBase affectorParty, PartyBase commanderParty)` | method |
| `OnTradeProfitMade` | `public void OnTradeProfitMade(PartyBase party, int tradeProfit)` | method |
| `OnTradeProfitMade` | `public void OnTradeProfitMade(Hero hero, int tradeProfit)` | method |
| `OnSettlementProjectFinished` | `public void OnSettlementProjectFinished(Settlement settlement)` | method |
| `OnSettlementGoverned` | `public void OnSettlementGoverned(Hero governor, Settlement settlement)` | method |
| `OnInfluenceSpent` | `public void OnInfluenceSpent(Hero hero, float amountSpent)` | method |
| `OnGainRelation` | `public void OnGainRelation(Hero hero, Hero gainedRelationWith, float relationChange, ChangeRelationAction.ChangeRelationDetail detail = ChangeRelationAction.ChangeRelationDetail.Default)` | method |
| `OnTroopRecruited` | `public void OnTroopRecruited(Hero hero, int amount, int tier)` | method |
| `OnBribeGiven` | `public void OnBribeGiven(int amount)` | method |
| `OnBanditsRecruited` | `public void OnBanditsRecruited(MobileParty mobileParty, CharacterObject bandit, int count)` | method |
| `OnMainHeroReleasedFromCaptivity` | `public void OnMainHeroReleasedFromCaptivity(float captivityTime)` | method |
| `OnMainHeroTortured` | `public void OnMainHeroTortured()` | method |
| `OnMainHeroDisguised` | `public void OnMainHeroDisguised(bool isNotCaught)` | method |
| `OnRaid` | `public void OnRaid(MobileParty attackerParty, ItemRoster lootedItems)` | method |
| `OnLoot` | `public void OnLoot(MobileParty attackerParty, MobileParty forcedParty, ItemRoster lootedItems, bool attacked)` | method |
| `OnPrisonerSell` | `public void OnPrisonerSell(MobileParty mobileParty, in TroopRoster prisonerRoster)` | method |
| `OnSurgeryApplied` | `public void OnSurgeryApplied(MobileParty party, bool surgerySuccess, int troopTier)` | method |
| `OnTacticsUsed` | `public void OnTacticsUsed(MobileParty party, float xp)` | method |
| `OnHideoutSpotted` | `public void OnHideoutSpotted(MobileParty party, PartyBase spottedParty)` | method |
| `OnTrackDetected` | `public void OnTrackDetected(Track track)` | method |
| `OnTravelOnFoot` | `public void OnTravelOnFoot(Hero hero, float speed)` | method |
| `OnTravelOnHorse` | `public void OnTravelOnHorse(Hero hero, float speed)` | method |
| `OnHeroHealedWhileWaiting` | `public void OnHeroHealedWhileWaiting(Hero hero, int healingAmount)` | method |
| `OnRegularTroopHealedWhileWaiting` | `public void OnRegularTroopHealedWhileWaiting(MobileParty mobileParty, int healedTroopCount, float averageTier)` | method |
| `OnLeadingArmy` | `public void OnLeadingArmy(MobileParty mobileParty)` | method |
| `OnSieging` | `public void OnSieging(MobileParty mobileParty)` | method |
| `OnSiegeEngineBuilt` | `public void OnSiegeEngineBuilt(MobileParty mobileParty, SiegeEngineType siegeEngine)` | method |
| `OnUpgradeTroops` | `public void OnUpgradeTroops(PartyBase party, CharacterObject troop, CharacterObject upgrade, int numberOfTroops)` | method |
| `OnPersuasionSucceeded` | `public void OnPersuasionSucceeded(Hero targetHero, SkillObject skill, PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)` | method |
| `OnPrisonBreakEnd` | `public void OnPrisonBreakEnd(Hero prisonerHero, bool isSucceeded)` | method |
| `OnWallBreached` | `public void OnWallBreached(MobileParty party)` | method |
| `OnForceVolunteers` | `public void OnForceVolunteers(MobileParty attackerParty, PartyBase forcedParty)` | method |
| `OnForceSupplies` | `public void OnForceSupplies(MobileParty attackerParty, ItemRoster lootedItems, bool attacked)` | method |
| `OnAIPartiesTravel` | `public void OnAIPartiesTravel(Hero hero, bool isCaravanParty, TerrainType currentTerrainType)` | method |
| `OnTraverseTerrain` | `public void OnTraverseTerrain(MobileParty mobileParty, TerrainType currentTerrainType)` | method |
| `OnBattleEnded` | `public void OnBattleEnded(PartyBase party, CharacterObject troop, int excessXp)` | method |
| `OnFoodConsumed` | `public void OnFoodConsumed(MobileParty mobileParty, bool wasStarving)` | method |
| `OnAlleyCleared` | `public void OnAlleyCleared(Alley alley)` | method |
| `OnDailyAlleyTick` | `public void OnDailyAlleyTick(Alley alley, Hero alleyLeader)` | method |
| `OnBoardGameWonAgainstLord` | `public void OnBoardGameWonAgainstLord(Hero lord, BoardGameHelper.AIDifficulty difficulty, bool extraXpGain)` | method |
| `OnHideoutClearedAsGhost` | `public void OnHideoutClearedAsGhost()` | method |
| `OnHideoutMissionEnd` | `public void OnHideoutMissionEnd(bool isSucceeded)` | method |
| `OnWarehouseProduction` | `public void OnWarehouseProduction(EquipmentElement production)` | method |
| `OnAIPartyLootCasualties` | `public void OnAIPartyLootCasualties(int goldAmount, Hero winnerPartyLeader, PartyBase defeatedParty)` | method |
| `OnShipDamaged` | `public void OnShipDamaged(Ship ship, float rawDamage, float finalDamage)` | method |
| `OnShipRepaired` | `public void OnShipRepaired(Ship ship, float repairedHitPoints)` | method |
| `OnTravelOnWater` | `public void OnTravelOnWater(MobileParty party, float speed)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ISkillLevelingManager](../ISkillLevelingManager/)
- [same namespace DefaultCulturalFeats](../DefaultCulturalFeats/)
- [same namespace DefaultPerks](../DefaultPerks/)
- [same namespace DefaultTraits](../DefaultTraits/)
- [same namespace FeatObject](../FeatObject/)
