<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IncidentEffect`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IncidentEffect

**Namespace:** TaleWorlds.CampaignSystem.Incidents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class IncidentEffect`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Incidents/IncidentEffect.cs`

## Overview

`IncidentEffect` lives in `TaleWorlds.CampaignSystem.Incidents` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Incidents` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Condition
`public bool Condition()`

**Purpose:** Handles logic related to `condition`.

### Consequence
`public List<TextObject> Consequence()`

**Purpose:** Handles logic related to `consequence`.

### GetHint
`public List<TextObject> GetHint()`

**Purpose:** Gets the current value of `hint`.

### WithChance
`public IncidentEffect WithChance(float chance)`

**Purpose:** Handles logic related to `with chance`.

### WithCustomInformation
`public IncidentEffect WithCustomInformation(Func<List<TextObject>> customInformation)`

**Purpose:** Handles logic related to `with custom information`.

### WithHint
`public IncidentEffect WithHint(Func<IncidentEffect, List<TextObject>> hint)`

**Purpose:** Handles logic related to `with hint`.

### GoldChange
`public static IncidentEffect GoldChange(Func<int> amountGetter)`

**Purpose:** Handles logic related to `gold change`.

### TraitChange
`public static IncidentEffect TraitChange(TraitObject trait, int amount)`

**Purpose:** Handles logic related to `trait change`.

### BuildingLevelChange
`public static IncidentEffect BuildingLevelChange(Func<Building> buildingGetter, Func<int> amountGetter)`

**Purpose:** Handles logic related to `building level change`.

### SiegeProgressChange
`public static IncidentEffect SiegeProgressChange(Func<float> amountGetter)`

**Purpose:** Handles logic related to `siege progress change`.

### WorkshopProfitabilityChange
`public static IncidentEffect WorkshopProfitabilityChange(Func<Workshop> workshopGetter, float percentage)`

**Purpose:** Handles logic related to `workshop profitability change`.

### SkillChange
`public static IncidentEffect SkillChange(SkillObject skill, float amount)`

**Purpose:** Handles logic related to `skill change`.

### MoraleChange
`public static IncidentEffect MoraleChange(float amount)`

**Purpose:** Handles logic related to `morale change`.

### HealthChance
`public static IncidentEffect HealthChance(int amount)`

**Purpose:** Handles logic related to `health chance`.

### RenownChange
`public static IncidentEffect RenownChange(float amount)`

**Purpose:** Handles logic related to `renown change`.

### CrimeRatingChange
`public static IncidentEffect CrimeRatingChange(Func<IFaction> factionGetter, float amount)`

**Purpose:** Handles logic related to `crime rating change`.

### InfluenceChange
`public static IncidentEffect InfluenceChange(float amount)`

**Purpose:** Handles logic related to `influence change`.

### SettlementRelationChange
`public static IncidentEffect SettlementRelationChange(Func<Settlement> settlementGetter, int amount)`

**Purpose:** Sets the value or state of `tlement relation change`.

### TownBoundVillageRelationChange
`public static IncidentEffect TownBoundVillageRelationChange(Func<Town> townGetter, int amount)`

**Purpose:** Handles logic related to `town bound village relation change`.

### TownBoundVillageHearthChange
`public static IncidentEffect TownBoundVillageHearthChange(Func<Town> townGetter, int amount)`

**Purpose:** Handles logic related to `town bound village hearth change`.

### VillageHearthChange
`public static IncidentEffect VillageHearthChange(Func<Village> villageGetter, int amount)`

**Purpose:** Handles logic related to `village hearth change`.

### TownSecurityChange
`public static IncidentEffect TownSecurityChange(Func<Town> townGetter, int amount)`

**Purpose:** Handles logic related to `town security change`.

### HeroRelationChange
`public static IncidentEffect HeroRelationChange(Func<Hero> heroGetter, int amount)`

**Purpose:** Handles logic related to `hero relation change`.

### TownProsperityChange
`public static IncidentEffect TownProsperityChange(Func<Town> townGetter, int amount)`

**Purpose:** Handles logic related to `town prosperity change`.

### SettlementMilitiaChange
`public static IncidentEffect SettlementMilitiaChange(Func<Settlement> settlementGetter, int amount)`

**Purpose:** Sets the value or state of `tlement militia change`.

### InfestNearbyHideout
`public static IncidentEffect InfestNearbyHideout(Func<Settlement> settlementGetter)`

**Purpose:** Handles logic related to `infest nearby hideout`.

### WoundTroopsRandomly
`public static IncidentEffect WoundTroopsRandomly(float percentage)`

**Purpose:** Handles logic related to `wound troops randomly`.

### WoundTroopsRandomly
`public static IncidentEffect WoundTroopsRandomly(Func<TroopRosterElement, bool> predicate, Func<int> amountGetter, bool specifyUnitTypeOnHint = true)`

**Purpose:** Handles logic related to `wound troops randomly`.

### WoundTroopsRandomlyWithChanceOfDeath
`public static IncidentEffect WoundTroopsRandomlyWithChanceOfDeath(float percentage, float chanceOfDeathPerUnit)`

**Purpose:** Handles logic related to `wound troops randomly with chance of death`.

### BreachSiegeWall
`public static IncidentEffect BreachSiegeWall(int amount)`

**Purpose:** Handles logic related to `breach siege wall`.

### WoundTroopsRandomly
`public static IncidentEffect WoundTroopsRandomly(int amount)`

**Purpose:** Handles logic related to `wound troops randomly`.

### WoundTroopsRandomlyWithChanceOfDeath
`public static IncidentEffect WoundTroopsRandomlyWithChanceOfDeath(int amount, float chanceOfDeathPerUnit)`

**Purpose:** Handles logic related to `wound troops randomly with chance of death`.

### WoundTroop
`public static IncidentEffect WoundTroop(Func<CharacterObject> characterGetter, int amount)`

**Purpose:** Handles logic related to `wound troop`.

### WoundTroopsRandomlyByChance
`public static IncidentEffect WoundTroopsRandomlyByChance(float chancePerUnit)`

**Purpose:** Handles logic related to `wound troops randomly by chance`.

### KillTroopsRandomlyOrderedByTier
`public static IncidentEffect KillTroopsRandomlyOrderedByTier(Func<TroopRosterElement, bool> predicate, Func<int> amountGetter)`

**Purpose:** Handles logic related to `kill troops randomly ordered by tier`.

### KillTroopsRandomly
`public static IncidentEffect KillTroopsRandomly(Func<TroopRosterElement, bool> predicate, Func<int> amountGetter)`

**Purpose:** Handles logic related to `kill troops randomly`.

### KillTroopsRandomlyByChance
`public static IncidentEffect KillTroopsRandomlyByChance(float chancePerUnit)`

**Purpose:** Handles logic related to `kill troops randomly by chance`.

### KillTroop
`public static IncidentEffect KillTroop(Func<CharacterObject> characterGetter, int amount)`

**Purpose:** Handles logic related to `kill troop`.

### ChangeTroopAmount
`public static IncidentEffect ChangeTroopAmount(Func<CharacterObject> characterGetter, int amount)`

**Purpose:** Handles logic related to `change troop amount`.

### UpgradeTroop
`public static IncidentEffect UpgradeTroop(Func<CharacterObject> characterGetter, Func<CharacterObject, bool> upgradePredicate, int amount, Func<long> incidentSeedGetter)`

**Purpose:** Handles logic related to `upgrade troop`.

### UpgradeTroop
`public static IncidentEffect UpgradeTroop(Func<CharacterObject> characterGetter, Func<CharacterObject> upgradedCharacterGetter, int amount, Func<long> incidentSeedGetter)`

**Purpose:** Handles logic related to `upgrade troop`.

### RemovePrisonersRandomlyWithPredicate
`public static IncidentEffect RemovePrisonersRandomlyWithPredicate(Func<TroopRosterElement, bool> predicate, int amount)`

**Purpose:** Removes `prisoners randomly with predicate` from the current collection or state.

### ChangeItemsAmount
`public static IncidentEffect ChangeItemsAmount(Func<List<ItemObject>> itemsGetter, int amount)`

**Purpose:** Handles logic related to `change items amount`.

### ChangeItemAmount
`public static IncidentEffect ChangeItemAmount(Func<ItemObject> itemGetter, Func<int> amountGetter)`

**Purpose:** Handles logic related to `change item amount`.

### PartyExperienceChance
`public static IncidentEffect PartyExperienceChance(int amount)`

**Purpose:** Handles logic related to `party experience chance`.

### DisorganizeParty
`public static IncidentEffect DisorganizeParty()`

**Purpose:** Handles logic related to `disorganize party`.

### HealTroopsRandomly
`public static IncidentEffect HealTroopsRandomly(int amount)`

**Purpose:** Handles logic related to `heal troops randomly`.

### DemoteTroopsRandomlyWithPredicate
`public static IncidentEffect DemoteTroopsRandomlyWithPredicate(Func<TroopRosterElement, bool> predicate, Func<CharacterObject, bool> demotionPredicate, int amount, bool specifyUnitTypeOnHint = true)`

**Purpose:** Handles logic related to `demote troops randomly with predicate`.

### Group
`public static IncidentEffect Group(params IncidentEffect effects)`

**Purpose:** Handles logic related to `group`.

### Select
`public static IncidentEffect Select(IncidentEffect effectOne, IncidentEffect effectTwo, float chanceOfFirstOne)`

**Purpose:** Handles logic related to `select`.

### Custom
`public static IncidentEffect Custom(Func<bool> condition, Func<List<TextObject>> consequence, Func<IncidentEffect, List<TextObject>> hint)`

**Purpose:** Handles logic related to `custom`.

## Usage Example

```csharp
var value = new IncidentEffect();
value.Condition();
```

## See Also

- [Complete Class Catalog](../catalog)