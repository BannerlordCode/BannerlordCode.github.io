---
title: "IncidentEffect"
description: "Auto-generated class reference for IncidentEffect."
---
# IncidentEffect

**Namespace:** TaleWorlds.CampaignSystem.Incidents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class IncidentEffect`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Incidents/IncidentEffect.cs`

## Overview

`IncidentEffect` lives in `TaleWorlds.CampaignSystem.Incidents` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Incidents` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Condition
`public bool Condition()`

**Purpose:** Executes the Condition logic.

```csharp
// Obtain an instance of IncidentEffect from the subsystem API first
IncidentEffect incidentEffect = ...;
var result = incidentEffect.Condition();
```

### Consequence
`public List<TextObject> Consequence()`

**Purpose:** Executes the Consequence logic.

```csharp
// Obtain an instance of IncidentEffect from the subsystem API first
IncidentEffect incidentEffect = ...;
var result = incidentEffect.Consequence();
```

### GetHint
`public List<TextObject> GetHint()`

**Purpose:** Reads and returns the hint value held by the this instance.

```csharp
// Obtain an instance of IncidentEffect from the subsystem API first
IncidentEffect incidentEffect = ...;
var result = incidentEffect.GetHint();
```

### WithChance
`public IncidentEffect WithChance(float chance)`

**Purpose:** Executes the WithChance logic.

```csharp
// Obtain an instance of IncidentEffect from the subsystem API first
IncidentEffect incidentEffect = ...;
var result = incidentEffect.WithChance(0);
```

### WithCustomInformation
`public IncidentEffect WithCustomInformation(Func<List<TextObject>> customInformation)`

**Purpose:** Executes the WithCustomInformation logic.

```csharp
// Obtain an instance of IncidentEffect from the subsystem API first
IncidentEffect incidentEffect = ...;
var result = incidentEffect.WithCustomInformation(customInformation);
```

### WithHint
`public IncidentEffect WithHint(Func<IncidentEffect, List<TextObject>> hint)`

**Purpose:** Executes the WithHint logic.

```csharp
// Obtain an instance of IncidentEffect from the subsystem API first
IncidentEffect incidentEffect = ...;
var result = incidentEffect.WithHint(func<IncidentEffect, hint);
```

### GoldChange
`public static IncidentEffect GoldChange(Func<int> amountGetter)`

**Purpose:** Executes the GoldChange logic.

```csharp
// Static call; no instance required
IncidentEffect.GoldChange(amountGetter);
```

### TraitChange
`public static IncidentEffect TraitChange(TraitObject trait, int amount)`

**Purpose:** Executes the TraitChange logic.

```csharp
// Static call; no instance required
IncidentEffect.TraitChange(trait, 0);
```

### SiegeProgressChange
`public static IncidentEffect SiegeProgressChange(Func<float> amountGetter)`

**Purpose:** Executes the SiegeProgressChange logic.

```csharp
// Static call; no instance required
IncidentEffect.SiegeProgressChange(amountGetter);
```

### WorkshopProfitabilityChange
`public static IncidentEffect WorkshopProfitabilityChange(Func<Workshop> workshopGetter, float percentage)`

**Purpose:** Executes the WorkshopProfitabilityChange logic.

```csharp
// Static call; no instance required
IncidentEffect.WorkshopProfitabilityChange(workshopGetter, 0);
```

### SkillChange
`public static IncidentEffect SkillChange(SkillObject skill, float amount)`

**Purpose:** Executes the SkillChange logic.

```csharp
// Static call; no instance required
IncidentEffect.SkillChange(skill, 0);
```

### MoraleChange
`public static IncidentEffect MoraleChange(float amount)`

**Purpose:** Executes the MoraleChange logic.

```csharp
// Static call; no instance required
IncidentEffect.MoraleChange(0);
```

### HealthChance
`public static IncidentEffect HealthChance(int amount)`

**Purpose:** Executes the HealthChance logic.

```csharp
// Static call; no instance required
IncidentEffect.HealthChance(0);
```

### RenownChange
`public static IncidentEffect RenownChange(float amount)`

**Purpose:** Executes the RenownChange logic.

```csharp
// Static call; no instance required
IncidentEffect.RenownChange(0);
```

### CrimeRatingChange
`public static IncidentEffect CrimeRatingChange(Func<IFaction> factionGetter, float amount)`

**Purpose:** Executes the CrimeRatingChange logic.

```csharp
// Static call; no instance required
IncidentEffect.CrimeRatingChange(factionGetter, 0);
```

### InfluenceChange
`public static IncidentEffect InfluenceChange(float amount)`

**Purpose:** Executes the InfluenceChange logic.

```csharp
// Static call; no instance required
IncidentEffect.InfluenceChange(0);
```

### SettlementRelationChange
`public static IncidentEffect SettlementRelationChange(Func<Settlement> settlementGetter, int amount)`

**Purpose:** Assigns a new value to tlement relation change and updates the object's internal state.

```csharp
// Static call; no instance required
IncidentEffect.SettlementRelationChange(settlementGetter, 0);
```

### TownBoundVillageRelationChange
`public static IncidentEffect TownBoundVillageRelationChange(Func<Town> townGetter, int amount)`

**Purpose:** Executes the TownBoundVillageRelationChange logic.

```csharp
// Static call; no instance required
IncidentEffect.TownBoundVillageRelationChange(townGetter, 0);
```

### TownBoundVillageHearthChange
`public static IncidentEffect TownBoundVillageHearthChange(Func<Town> townGetter, int amount)`

**Purpose:** Executes the TownBoundVillageHearthChange logic.

```csharp
// Static call; no instance required
IncidentEffect.TownBoundVillageHearthChange(townGetter, 0);
```

### VillageHearthChange
`public static IncidentEffect VillageHearthChange(Func<Village> villageGetter, int amount)`

**Purpose:** Executes the VillageHearthChange logic.

```csharp
// Static call; no instance required
IncidentEffect.VillageHearthChange(villageGetter, 0);
```

### TownSecurityChange
`public static IncidentEffect TownSecurityChange(Func<Town> townGetter, int amount)`

**Purpose:** Executes the TownSecurityChange logic.

```csharp
// Static call; no instance required
IncidentEffect.TownSecurityChange(townGetter, 0);
```

### HeroRelationChange
`public static IncidentEffect HeroRelationChange(Func<Hero> heroGetter, int amount)`

**Purpose:** Executes the HeroRelationChange logic.

```csharp
// Static call; no instance required
IncidentEffect.HeroRelationChange(heroGetter, 0);
```

### TownProsperityChange
`public static IncidentEffect TownProsperityChange(Func<Town> townGetter, int amount)`

**Purpose:** Executes the TownProsperityChange logic.

```csharp
// Static call; no instance required
IncidentEffect.TownProsperityChange(townGetter, 0);
```

### SettlementMilitiaChange
`public static IncidentEffect SettlementMilitiaChange(Func<Settlement> settlementGetter, int amount)`

**Purpose:** Assigns a new value to tlement militia change and updates the object's internal state.

```csharp
// Static call; no instance required
IncidentEffect.SettlementMilitiaChange(settlementGetter, 0);
```

### InfestNearbyHideout
`public static IncidentEffect InfestNearbyHideout(Func<Settlement> settlementGetter)`

**Purpose:** Executes the InfestNearbyHideout logic.

```csharp
// Static call; no instance required
IncidentEffect.InfestNearbyHideout(settlementGetter);
```

### WoundTroopsRandomly
`public static IncidentEffect WoundTroopsRandomly(float percentage)`

**Purpose:** Executes the WoundTroopsRandomly logic.

```csharp
// Static call; no instance required
IncidentEffect.WoundTroopsRandomly(0);
```

### WoundTroopsRandomly
`public static IncidentEffect WoundTroopsRandomly(Func<TroopRosterElement, bool> predicate, Func<int> amountGetter, bool specifyUnitTypeOnHint = true)`

**Purpose:** Executes the WoundTroopsRandomly logic.

```csharp
// Static call; no instance required
IncidentEffect.WoundTroopsRandomly(func<TroopRosterElement, false, amountGetter, false);
```

### WoundTroopsRandomlyWithChanceOfDeath
`public static IncidentEffect WoundTroopsRandomlyWithChanceOfDeath(float percentage, float chanceOfDeathPerUnit)`

**Purpose:** Executes the WoundTroopsRandomlyWithChanceOfDeath logic.

```csharp
// Static call; no instance required
IncidentEffect.WoundTroopsRandomlyWithChanceOfDeath(0, 0);
```

### BreachSiegeWall
`public static IncidentEffect BreachSiegeWall(int amount)`

**Purpose:** Executes the BreachSiegeWall logic.

```csharp
// Static call; no instance required
IncidentEffect.BreachSiegeWall(0);
```

### WoundTroopsRandomly
`public static IncidentEffect WoundTroopsRandomly(int amount)`

**Purpose:** Executes the WoundTroopsRandomly logic.

```csharp
// Static call; no instance required
IncidentEffect.WoundTroopsRandomly(0);
```

### WoundTroopsRandomlyWithChanceOfDeath
`public static IncidentEffect WoundTroopsRandomlyWithChanceOfDeath(int amount, float chanceOfDeathPerUnit)`

**Purpose:** Executes the WoundTroopsRandomlyWithChanceOfDeath logic.

```csharp
// Static call; no instance required
IncidentEffect.WoundTroopsRandomlyWithChanceOfDeath(0, 0);
```

### WoundTroop
`public static IncidentEffect WoundTroop(Func<CharacterObject> characterGetter, int amount)`

**Purpose:** Executes the WoundTroop logic.

```csharp
// Static call; no instance required
IncidentEffect.WoundTroop(characterGetter, 0);
```

### WoundTroopsRandomlyByChance
`public static IncidentEffect WoundTroopsRandomlyByChance(float chancePerUnit)`

**Purpose:** Executes the WoundTroopsRandomlyByChance logic.

```csharp
// Static call; no instance required
IncidentEffect.WoundTroopsRandomlyByChance(0);
```

### KillTroopsRandomlyOrderedByTier
`public static IncidentEffect KillTroopsRandomlyOrderedByTier(Func<TroopRosterElement, bool> predicate, Func<int> amountGetter)`

**Purpose:** Executes the KillTroopsRandomlyOrderedByTier logic.

```csharp
// Static call; no instance required
IncidentEffect.KillTroopsRandomlyOrderedByTier(func<TroopRosterElement, false, amountGetter);
```

### KillTroopsRandomly
`public static IncidentEffect KillTroopsRandomly(Func<TroopRosterElement, bool> predicate, Func<int> amountGetter)`

**Purpose:** Executes the KillTroopsRandomly logic.

```csharp
// Static call; no instance required
IncidentEffect.KillTroopsRandomly(func<TroopRosterElement, false, amountGetter);
```

### KillTroopsRandomlyByChance
`public static IncidentEffect KillTroopsRandomlyByChance(float chancePerUnit)`

**Purpose:** Executes the KillTroopsRandomlyByChance logic.

```csharp
// Static call; no instance required
IncidentEffect.KillTroopsRandomlyByChance(0);
```

### KillTroop
`public static IncidentEffect KillTroop(Func<CharacterObject> characterGetter, int amount)`

**Purpose:** Executes the KillTroop logic.

```csharp
// Static call; no instance required
IncidentEffect.KillTroop(characterGetter, 0);
```

### ChangeTroopAmount
`public static IncidentEffect ChangeTroopAmount(Func<CharacterObject> characterGetter, int amount)`

**Purpose:** Executes the ChangeTroopAmount logic.

```csharp
// Static call; no instance required
IncidentEffect.ChangeTroopAmount(characterGetter, 0);
```

### UpgradeTroop
`public static IncidentEffect UpgradeTroop(Func<CharacterObject> characterGetter, Func<CharacterObject, bool> upgradePredicate, int amount, Func<long> incidentSeedGetter)`

**Purpose:** Executes the UpgradeTroop logic.

```csharp
// Static call; no instance required
IncidentEffect.UpgradeTroop(characterGetter, func<CharacterObject, false, 0, incidentSeedGetter);
```

### UpgradeTroop
`public static IncidentEffect UpgradeTroop(Func<CharacterObject> characterGetter, Func<CharacterObject> upgradedCharacterGetter, int amount, Func<long> incidentSeedGetter)`

**Purpose:** Executes the UpgradeTroop logic.

```csharp
// Static call; no instance required
IncidentEffect.UpgradeTroop(characterGetter, upgradedCharacterGetter, 0, incidentSeedGetter);
```

### RemovePrisonersRandomlyWithPredicate
`public static IncidentEffect RemovePrisonersRandomlyWithPredicate(Func<TroopRosterElement, bool> predicate, int amount)`

**Purpose:** Removes prisoners randomly with predicate from the current collection or state.

```csharp
// Static call; no instance required
IncidentEffect.RemovePrisonersRandomlyWithPredicate(func<TroopRosterElement, false, 0);
```

### ChangeItemsAmount
`public static IncidentEffect ChangeItemsAmount(Func<List<ItemObject>> itemsGetter, int amount)`

**Purpose:** Executes the ChangeItemsAmount logic.

```csharp
// Static call; no instance required
IncidentEffect.ChangeItemsAmount(itemsGetter, 0);
```

### ChangeItemAmount
`public static IncidentEffect ChangeItemAmount(Func<ItemObject> itemGetter, Func<int> amountGetter)`

**Purpose:** Executes the ChangeItemAmount logic.

```csharp
// Static call; no instance required
IncidentEffect.ChangeItemAmount(itemGetter, amountGetter);
```

### PartyExperienceChance
`public static IncidentEffect PartyExperienceChance(int amount)`

**Purpose:** Executes the PartyExperienceChance logic.

```csharp
// Static call; no instance required
IncidentEffect.PartyExperienceChance(0);
```

### DisorganizeParty
`public static IncidentEffect DisorganizeParty()`

**Purpose:** Executes the DisorganizeParty logic.

```csharp
// Static call; no instance required
IncidentEffect.DisorganizeParty();
```

### HealTroopsRandomly
`public static IncidentEffect HealTroopsRandomly(int amount)`

**Purpose:** Executes the HealTroopsRandomly logic.

```csharp
// Static call; no instance required
IncidentEffect.HealTroopsRandomly(0);
```

### DemoteTroopsRandomlyWithPredicate
`public static IncidentEffect DemoteTroopsRandomlyWithPredicate(Func<TroopRosterElement, bool> predicate, Func<CharacterObject, bool> demotionPredicate, int amount, bool specifyUnitTypeOnHint = true)`

**Purpose:** Executes the DemoteTroopsRandomlyWithPredicate logic.

```csharp
// Static call; no instance required
IncidentEffect.DemoteTroopsRandomlyWithPredicate(func<TroopRosterElement, false, func<CharacterObject, false, 0, false);
```

### Group
`public static IncidentEffect Group(params IncidentEffect effects)`

**Purpose:** Executes the Group logic.

```csharp
// Static call; no instance required
IncidentEffect.Group(effects);
```

### Select
`public static IncidentEffect Select(IncidentEffect effectOne, IncidentEffect effectTwo, float chanceOfFirstOne)`

**Purpose:** Executes the Select logic.

```csharp
// Static call; no instance required
IncidentEffect.Select(effectOne, effectTwo, 0);
```

### Custom
`public static IncidentEffect Custom(Func<bool> condition, Func<List<TextObject>> consequence, Func<IncidentEffect, List<TextObject>> hint)`

**Purpose:** Executes the Custom logic.

```csharp
// Static call; no instance required
IncidentEffect.Custom(condition, consequence, func<IncidentEffect, hint);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
IncidentEffect incidentEffect = ...;
incidentEffect.Condition();
```

## See Also

- [Area Index](../)