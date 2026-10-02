---
title: "IncidentEffect"
description: "IncidentEffect: a public class in TaleWorlds.CampaignSystem; 51 exposed members (51 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Incidents/IncidentEffect.cs."
---
# IncidentEffect

**Namespace:** `TaleWorlds.CampaignSystem.Incidents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class IncidentEffect`
**File:** `TaleWorlds.CampaignSystem/Incidents/IncidentEffect.cs`

## Overview

IncidentEffect lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Incidents/IncidentEffect.cs. It is a public class; the inheritance chain is IncidentEffect. It exposes 51 public/protected members: 51 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IncidentEffect is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Incidents) the module directory; inheritance chain IncidentEffect. The surface is method-led (methods 51/51, properties 0/51), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Incidents/IncidentEffect.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Condition` | `public bool Condition()` | method |
| `List` | `public List<TextObject>Consequence()` | method |
| `List` | `public List<TextObject>GetHint()` | method |
| `WithChance` | `public IncidentEffect WithChance(float chance)` | method |
| `WithCustomInformation` | `public IncidentEffect WithCustomInformation(Func<List<TextObject>>customInformation)` | method |
| `WithHint` | `public IncidentEffect WithHint(Func<IncidentEffect, List<TextObject>>hint)` | method |
| `GoldChange` | `public static IncidentEffect GoldChange(Func<int>amountGetter)` | method |
| `TraitChange` | `public static IncidentEffect TraitChange(TraitObject trait, int amount)` | method |
| `BuildingLevelChange` | `public static IncidentEffect BuildingLevelChange(Func<Building>buildingGetter, Func<int>amountGetter)` | method |
| `SiegeProgressChange` | `public static IncidentEffect SiegeProgressChange(Func<float>amountGetter)` | method |
| `WorkshopProfitabilityChange` | `public static IncidentEffect WorkshopProfitabilityChange(Func<Workshop>workshopGetter, float percentage)` | method |
| `SkillChange` | `public static IncidentEffect SkillChange(SkillObject skill, float amount)` | method |
| `MoraleChange` | `public static IncidentEffect MoraleChange(float amount)` | method |
| `HealthChance` | `public static IncidentEffect HealthChance(int amount)` | method |
| `RenownChange` | `public static IncidentEffect RenownChange(float amount)` | method |
| `CrimeRatingChange` | `public static IncidentEffect CrimeRatingChange(Func<IFaction>factionGetter, float amount)` | method |
| `InfluenceChange` | `public static IncidentEffect InfluenceChange(float amount)` | method |
| `SettlementRelationChange` | `public static IncidentEffect SettlementRelationChange(Func<Settlement>settlementGetter, int amount)` | method |
| `TownBoundVillageRelationChange` | `public static IncidentEffect TownBoundVillageRelationChange(Func<Town>townGetter, int amount)` | method |
| `TownBoundVillageHearthChange` | `public static IncidentEffect TownBoundVillageHearthChange(Func<Town>townGetter, int amount)` | method |
| `VillageHearthChange` | `public static IncidentEffect VillageHearthChange(Func<Village>villageGetter, int amount)` | method |
| `TownSecurityChange` | `public static IncidentEffect TownSecurityChange(Func<Town>townGetter, int amount)` | method |
| `HeroRelationChange` | `public static IncidentEffect HeroRelationChange(Func<Hero>heroGetter, int amount)` | method |
| `TownProsperityChange` | `public static IncidentEffect TownProsperityChange(Func<Town>townGetter, int amount)` | method |
| `SettlementMilitiaChange` | `public static IncidentEffect SettlementMilitiaChange(Func<Settlement>settlementGetter, int amount)` | method |
| `InfestNearbyHideout` | `public static IncidentEffect InfestNearbyHideout(Func<Settlement>settlementGetter)` | method |
| `WoundTroopsRandomly` | `public static IncidentEffect WoundTroopsRandomly(float percentage)` | method |
| `WoundTroopsRandomly` | `public static IncidentEffect WoundTroopsRandomly(Func<TroopRosterElement, bool>predicate, Func<int>amountGetter, bool specifyUnitTypeOnHint = true)` | method |
| `WoundTroopsRandomlyWithChanceOfDeath` | `public static IncidentEffect WoundTroopsRandomlyWithChanceOfDeath(float percentage, float chanceOfDeathPerUnit)` | method |
| `BreachSiegeWall` | `public static IncidentEffect BreachSiegeWall(int amount)` | method |
| `WoundTroopsRandomly` | `public static IncidentEffect WoundTroopsRandomly(int amount)` | method |
| `WoundTroopsRandomlyWithChanceOfDeath` | `public static IncidentEffect WoundTroopsRandomlyWithChanceOfDeath(int amount, float chanceOfDeathPerUnit)` | method |
| `WoundTroop` | `public static IncidentEffect WoundTroop(Func<CharacterObject>characterGetter, int amount)` | method |
| `WoundTroopsRandomlyByChance` | `public static IncidentEffect WoundTroopsRandomlyByChance(float chancePerUnit)` | method |
| `KillTroopsRandomlyOrderedByTier` | `public static IncidentEffect KillTroopsRandomlyOrderedByTier(Func<TroopRosterElement, bool>predicate, Func<int>amountGetter)` | method |
| `KillTroopsRandomly` | `public static IncidentEffect KillTroopsRandomly(Func<TroopRosterElement, bool>predicate, Func<int>amountGetter)` | method |
| `KillTroopsRandomlyByChance` | `public static IncidentEffect KillTroopsRandomlyByChance(float chancePerUnit)` | method |
| `KillTroop` | `public static IncidentEffect KillTroop(Func<CharacterObject>characterGetter, int amount)` | method |
| `ChangeTroopAmount` | `public static IncidentEffect ChangeTroopAmount(Func<CharacterObject>characterGetter, int amount)` | method |
| `UpgradeTroop` | `public static IncidentEffect UpgradeTroop(Func<CharacterObject>characterGetter, Func<CharacterObject, bool>upgradePredicate, int amount, Func<long>incidentSeedGetter)` | method |
| `UpgradeTroop` | `public static IncidentEffect UpgradeTroop(Func<CharacterObject>characterGetter, Func<CharacterObject>upgradedCharacterGetter, int amount, Func<long>incidentSeedGetter)` | method |
| `RemovePrisonersRandomlyWithPredicate` | `public static IncidentEffect RemovePrisonersRandomlyWithPredicate(Func<TroopRosterElement, bool>predicate, int amount)` | method |
| `ChangeItemsAmount` | `public static IncidentEffect ChangeItemsAmount(Func<List<ItemObject>>itemsGetter, int amount)` | method |
| `ChangeItemAmount` | `public static IncidentEffect ChangeItemAmount(Func<ItemObject>itemGetter, Func<int>amountGetter)` | method |
| `PartyExperienceChance` | `public static IncidentEffect PartyExperienceChance(int amount)` | method |
| `DisorganizeParty` | `public static IncidentEffect DisorganizeParty()` | method |
| `HealTroopsRandomly` | `public static IncidentEffect HealTroopsRandomly(int amount)` | method |
| `DemoteTroopsRandomlyWithPredicate` | `public static IncidentEffect DemoteTroopsRandomlyWithPredicate(Func<TroopRosterElement, bool>predicate, Func<CharacterObject, bool>demotionPredicate, int amount, bool specifyUnitTypeOnHint = true)` | method |
| `Group` | `public static IncidentEffect Group(params IncidentEffect[]effects)` | method |
| `Select` | `public static IncidentEffect Select(IncidentEffect effectOne, IncidentEffect effectTwo, float chanceOfFirstOne)` | method |
| `Custom` | `public static IncidentEffect Custom(Func<bool>condition, Func<List<TextObject>>consequence, Func<IncidentEffect, List<TextObject>>hint)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace Incident](../Incident)
