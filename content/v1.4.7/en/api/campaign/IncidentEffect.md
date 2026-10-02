---
title: "IncidentEffect"
description: "IncidentEffect — class in TaleWorlds.CampaignSystem.Incidents. 49 public members (43 static)."
---

<!-- v147-skeleton -->
# IncidentEffect

**Namespace:** `TaleWorlds.CampaignSystem.Incidents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class IncidentEffect`  
**Source:** `TaleWorlds.CampaignSystem/Incidents/IncidentEffect.cs`

## Overview

`IncidentEffect` is a named type in the TaleWorlds.CampaignSystem.Incidents namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (43): `GoldChange`, `TraitChange`, `BuildingLevelChange`, `SiegeProgressChange`, `WorkshopProfitabilityChange`, `SkillChange`, ….
- **Instance members** (6): `Condition`, `Consequence`, `GetHint`, `WithChance`, `WithCustomInformation`, `WithHint`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `BreachSiegeWall` | method (static) | Static entry point. Takes 1 argument: `int amount`. Returns `IncidentEffect`. |
| `BuildingLevelChange` | method (static) | Static entry point. Takes 2 arguments: `Func<Building> buildingGetter`, `Func<int> amountGetter`. Returns `IncidentEffect`. |
| `ChangeItemAmount` | method (static) | Static entry point. Takes 2 arguments: `Func<ItemObject> itemGetter`, `Func<int> amountGetter`. Returns `IncidentEffect`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ChangeItemsAmount` | method (static) | Static entry point. Takes 2 arguments: `Func<List<ItemObject>> itemsGetter`, `int amount`. Returns `IncidentEffect`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ChangeTroopAmount` | method (static) | Static entry point. Takes 2 arguments: `Func<CharacterObject> characterGetter`, `int amount`. Returns `IncidentEffect`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `CrimeRatingChange` | method (static) | Static entry point. Takes 2 arguments: `Func<IFaction> factionGetter`, `float amount`. Returns `IncidentEffect`. |
| `Custom` | method (static) | Static entry point. Takes 4 arguments: `Func<bool> condition`, `Func<List<TextObject>> consequence`, `Func<IncidentEffect`, `List<TextObject>> hint`. Returns `IncidentEffect`. |
| `DemoteTroopsRandomlyWithPredicate` | method (static) | Static entry point. Takes 6 arguments: `Func<TroopRosterElement`, `bool> predicate`, `Func<CharacterObject`, `bool> demotionPredicate`, …. Returns `IncidentEffect`. |
| `DisorganizeParty` | method (static) | Static entry point. Takes no arguments. Returns `IncidentEffect`. |
| `GoldChange` | method (static) | Static entry point. Takes 1 argument: `Func<int> amountGetter`. Returns `IncidentEffect`. |
| `Group` | method (static) | Static entry point. Takes 1 argument: `params IncidentEffect[] effects`. Returns `IncidentEffect`. |
| `HealthChance` | method (static) | Static entry point. Takes 1 argument: `int amount`. Returns `IncidentEffect`. |
| `HealTroopsRandomly` | method (static) | Static entry point. Takes 1 argument: `int amount`. Returns `IncidentEffect`. |
| `HeroRelationChange` | method (static) | Static entry point. Takes 2 arguments: `Func<Hero> heroGetter`, `int amount`. Returns `IncidentEffect`. |
| `InfestNearbyHideout` | method (static) | Static entry point. Takes 1 argument: `Func<Settlement> settlementGetter`. Returns `IncidentEffect`. |
| `InfluenceChange` | method (static) | Static entry point. Takes 1 argument: `float amount`. Returns `IncidentEffect`. |
| `KillTroop` | method (static) | Static entry point. Takes 2 arguments: `Func<CharacterObject> characterGetter`, `int amount`. Returns `IncidentEffect`. |
| `KillTroopsRandomly` | method (static) | Static entry point. Takes 3 arguments: `Func<TroopRosterElement`, `bool> predicate`, `Func<int> amountGetter`. Returns `IncidentEffect`. |
| `KillTroopsRandomlyByChance` | method (static) | Static entry point. Takes 1 argument: `float chancePerUnit`. Returns `IncidentEffect`. |
| `KillTroopsRandomlyOrderedByTier` | method (static) | Static entry point. Takes 3 arguments: `Func<TroopRosterElement`, `bool> predicate`, `Func<int> amountGetter`. Returns `IncidentEffect`. |
| `MoraleChange` | method (static) | Static entry point. Takes 1 argument: `float amount`. Returns `IncidentEffect`. |
| `PartyExperienceChance` | method (static) | Static entry point. Takes 1 argument: `int amount`. Returns `IncidentEffect`. |
| `RemovePrisonersRandomlyWithPredicate` | method (static) | Static entry point. Takes 3 arguments: `Func<TroopRosterElement`, `bool> predicate`, `int amount`. Returns `IncidentEffect`. Removes from or clears the collection this type owns. |
| `RenownChange` | method (static) | Static entry point. Takes 1 argument: `float amount`. Returns `IncidentEffect`. |

25 further public members follow the same patterns.
## Usage Example

```csharp
// Static entry points on IncidentEffect:
IncidentEffect.GoldChange(amountGetter);
IncidentEffect.TraitChange(trait, amount);
IncidentEffect.BuildingLevelChange(buildingGetter, amountGetter);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Incidents/IncidentEffect.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [Building](../Building/) — `TaleWorlds.CampaignSystem.Settlements.Buildings`.
- [BuildingType](../BuildingType/) — `TaleWorlds.CampaignSystem.Settlements.Buildings`.
- [Town](../Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [SiegeEvent](../SiegeEvent/) — `TaleWorlds.CampaignSystem.Siege`.
- [PlayerSiege](../PlayerSiege/) — `TaleWorlds.CampaignSystem.Siege`.
- [BesiegerCamp](../BesiegerCamp/) — `TaleWorlds.CampaignSystem.Siege`.
- [Workshop](../Workshop/) — `TaleWorlds.CampaignSystem.Settlements.Workshops`.
- [ExplainedNumber](../ExplainedNumber/) — `TaleWorlds.CampaignSystem`.
- [HeroDeveloper](../HeroDeveloper/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.

Section: [api/campaign/](../) — the other types in this bucket.
