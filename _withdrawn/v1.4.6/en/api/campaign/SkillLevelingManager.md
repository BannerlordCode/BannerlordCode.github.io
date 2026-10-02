---
title: "SkillLevelingManager"
description: "SkillLevelingManager: a public class in TaleWorlds.CampaignSystem.CharacterDevelopment; 47 exposed members (47 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/CharacterDevelopment/SkillLevelingManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SkillLevelingManager

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class SkillLevelingManager`
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/SkillLevelingManager.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

SkillLevelingManager lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CharacterDevelopment/SkillLevelingManager.cs. It is a public class; the inheritance chain is SkillLevelingManager. It exposes 47 public/protected members: 47 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SkillLevelingManager lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.CharacterDevelopment`, inheritance chain SkillLevelingManager. The surface is method-led (methods 47/47, properties 0/47), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CharacterDevelopment/SkillLevelingManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnCombatHit` | `public static void OnCombatHit(CharacterObject affectorCharacter, CharacterObject affectedCharacter, CharacterObject captain, Hero commander, float speedBonusFromMovement, float shotDifficulty, WeaponComponentData affectorWeapon, float hitPointRatio, CombatXpModel.MissionTypeEnum missionType, bool isAffectorMounted, bool isTeamKill, bool isAffectorUnderCommand, float damageAmount, bool isFatal, bool isSiegeEngineHit, bool isHorseCharge, bool isSneakAttack)` | method |
| `OnSiegeEngineDestroyed` | `public static void OnSiegeEngineDestroyed(MobileParty party, SiegeEngineType destroyedSiegeEngine)` | method |
| `OnWallBreached` | `public static void OnWallBreached(MobileParty party)` | method |
| `OnSimulationCombatKill` | `public static void OnSimulationCombatKill(CharacterObject affectorCharacter, CharacterObject affectedCharacter, PartyBase affectorParty, PartyBase commanderParty)` | method |
| `OnTradeProfitMade` | `public static void OnTradeProfitMade(PartyBase party, int tradeProfit)` | method |
| `OnTradeProfitMade` | `public static void OnTradeProfitMade(Hero hero, int tradeProfit)` | method |
| `OnSettlementProjectFinished` | `public static void OnSettlementProjectFinished(Settlement settlement)` | method |
| `OnSettlementGoverned` | `public static void OnSettlementGoverned(Hero governor, Settlement settlement)` | method |
| `OnInfluenceSpent` | `public static void OnInfluenceSpent(Hero hero, float amountSpent)` | method |
| `OnGainRelation` | `public static void OnGainRelation(Hero hero, Hero gainedRelationWith, float relationChange, ChangeRelationAction.ChangeRelationDetail detail = ChangeRelationAction.ChangeRelationDetail.Default)` | method |
| `OnTroopRecruited` | `public static void OnTroopRecruited(Hero hero, int amount, int tier)` | method |
| `OnBribeGiven` | `public static void OnBribeGiven(int amount)` | method |
| `OnBanditsRecruited` | `public static void OnBanditsRecruited(MobileParty mobileParty, CharacterObject bandit, int count)` | method |
| `OnMainHeroReleasedFromCaptivity` | `public static void OnMainHeroReleasedFromCaptivity(float captivityTime)` | method |
| `OnMainHeroTortured` | `public static void OnMainHeroTortured()` | method |
| `OnMainHeroDisguised` | `public static void OnMainHeroDisguised(bool isNotCaught)` | method |
| `OnRaid` | `public static void OnRaid(MobileParty attackerParty, ItemRoster lootedItems)` | method |
| `OnLoot` | `public static void OnLoot(MobileParty attackerParty, MobileParty forcedParty, ItemRoster lootedItems, bool attacked)` | method |
| `OnForceVolunteers` | `public static void OnForceVolunteers(MobileParty attackerParty, PartyBase forcedParty)` | method |
| `OnForceSupplies` | `public static void OnForceSupplies(MobileParty attackerParty, ItemRoster lootedItems, bool attacked)` | method |
| `OnPrisonerSell` | `public static void OnPrisonerSell(MobileParty mobileParty, in TroopRoster prisonerRoster)` | method |
| `OnSurgeryApplied` | `public static void OnSurgeryApplied(MobileParty party, bool surgerySuccess, int troopTier)` | method |
| `OnTacticsUsed` | `public static void OnTacticsUsed(MobileParty party, float xp)` | method |
| `OnHideoutSpotted` | `public static void OnHideoutSpotted(MobileParty party, PartyBase spottedParty)` | method |
| `OnTrackDetected` | `public static void OnTrackDetected(Track track)` | method |
| `OnTravelOnFoot` | `public static void OnTravelOnFoot(Hero hero, float speed)` | method |
| `OnTravelOnHorse` | `public static void OnTravelOnHorse(Hero hero, float speed)` | method |
| `OnTravelOnWater` | `public static void OnTravelOnWater(MobileParty party, float speed)` | method |
| `OnAIPartiesTravel` | `public static void OnAIPartiesTravel(Hero hero, bool isCaravanParty, TerrainType currentTerrainType)` | method |
| `OnTraverseTerrain` | `public static void OnTraverseTerrain(MobileParty mobileParty, TerrainType currentTerrainType)` | method |
| `OnBattleEnded` | `public static void OnBattleEnded(PartyBase party, CharacterObject troop, int excessXp)` | method |
| `OnHeroHealedWhileWaiting` | `public static void OnHeroHealedWhileWaiting(Hero hero, int healingAmount)` | method |
| `OnRegularTroopHealedWhileWaiting` | `public static void OnRegularTroopHealedWhileWaiting(MobileParty mobileParty, int healedTroopCount, float averageTier)` | method |
| `OnLeadingArmy` | `public static void OnLeadingArmy(MobileParty mobileParty)` | method |
| `OnSieging` | `public static void OnSieging(MobileParty mobileParty)` | method |
| `OnSiegeEngineBuilt` | `public static void OnSiegeEngineBuilt(MobileParty mobileParty, SiegeEngineType siegeEngine)` | method |
| `OnUpgradeTroops` | `public static void OnUpgradeTroops(PartyBase party, CharacterObject troop, CharacterObject upgrade, int numberOfTroops)` | method |
| `OnPersuasionSucceeded` | `public static void OnPersuasionSucceeded(Hero targetHero, SkillObject skill, PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)` | method |
| `OnPrisonBreakEnd` | `public static void OnPrisonBreakEnd(Hero prisonerHero, bool isSucceeded)` | method |
| `OnFoodConsumed` | `public static void OnFoodConsumed(MobileParty mobileParty, bool wasStarving)` | method |
| `OnAlleyCleared` | `public static void OnAlleyCleared(Alley alley)` | method |
| `OnDailyAlleyTick` | `public static void OnDailyAlleyTick(Alley alley, Hero alleyLeader)` | method |
| `OnBoardGameWonAgainstLord` | `public static void OnBoardGameWonAgainstLord(Hero lord, BoardGameHelper.AIDifficulty difficulty, bool extraXpGain)` | method |
| `OnProductionProducedToWarehouse` | `public static void OnProductionProducedToWarehouse(EquipmentElement production)` | method |
| `OnAIPartyLootCasualties` | `public static void OnAIPartyLootCasualties(int goldAmount, Hero winnerPartyLeader, PartyBase defeatedParty)` | method |
| `OnShipDamaged` | `public static void OnShipDamaged(Ship ship, float rawDamage, float finalDamage)` | method |
| `OnShipRepaired` | `public static void OnShipRepaired(Ship ship, float repairedHitPoints)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DefaultCulturalFeats](../DefaultCulturalFeats/)
- [same namespace DefaultPerks](../DefaultPerks/)
- [same namespace DefaultSkillLevelingManager](../DefaultSkillLevelingManager/)
- [same namespace DefaultTraits](../DefaultTraits/)
