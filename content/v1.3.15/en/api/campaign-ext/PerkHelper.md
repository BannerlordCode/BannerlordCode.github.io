---
title: "PerkHelper"
description: "Auto-generated class reference for PerkHelper."
---
# PerkHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class PerkHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/PerkHelper.cs`

## Overview

`PerkHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `PerkHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCaptainPerksForTroopUsages
`public static IEnumerable<PerkObject> GetCaptainPerksForTroopUsages(TroopUsageFlags troopUsageFlags)`

**Purpose:** Reads and returns the `captain perks for troop usages` value held by the current object.

```csharp
// Static call; no instance required
PerkHelper.GetCaptainPerksForTroopUsages(troopUsageFlags);
```

### PlayerHasAnyItemDonationPerk
`public static bool PlayerHasAnyItemDonationPerk()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
PerkHelper.PlayerHasAnyItemDonationPerk();
```

### AddPerkBonusForParty
`public static void AddPerkBonusForParty(PerkObject perk, MobileParty party, bool isPrimaryBonus, ref ExplainedNumber stat, bool shouldApplyNavalMultiplier = false)`

**Purpose:** Adds `perk bonus for party` to the current collection or state.

```csharp
// Static call; no instance required
PerkHelper.AddPerkBonusForParty(perk, party, false, stat, false);
```

### AddPerkBonusForCharacter
`public static void AddPerkBonusForCharacter(PerkObject perk, CharacterObject character, bool isPrimaryBonus, ref ExplainedNumber bonuses, bool shouldApplyNavalMultiplier = false)`

**Purpose:** Adds `perk bonus for character` to the current collection or state.

```csharp
// Static call; no instance required
PerkHelper.AddPerkBonusForCharacter(perk, character, false, bonuses, false);
```

### AddEpicPerkBonusForCharacter
`public static void AddEpicPerkBonusForCharacter(PerkObject perk, CharacterObject character, SkillObject skillType, bool applyPrimaryBonus, ref ExplainedNumber bonuses, int skillRequired, bool shouldApplyNavalMultiplier = false)`

**Purpose:** Adds `epic perk bonus for character` to the current collection or state.

```csharp
// Static call; no instance required
PerkHelper.AddEpicPerkBonusForCharacter(perk, character, skillType, false, bonuses, 0, false);
```

### AddPerkBonusFromCaptain
`public static void AddPerkBonusFromCaptain(PerkObject perk, CharacterObject captainCharacter, ref ExplainedNumber bonuses)`

**Purpose:** Adds `perk bonus from captain` to the current collection or state.

```csharp
// Static call; no instance required
PerkHelper.AddPerkBonusFromCaptain(perk, captainCharacter, bonuses);
```

### AddPerkBonusForTown
`public static void AddPerkBonusForTown(PerkObject perk, Town town, ref ExplainedNumber bonuses)`

**Purpose:** Adds `perk bonus for town` to the current collection or state.

```csharp
// Static call; no instance required
PerkHelper.AddPerkBonusForTown(perk, town, bonuses);
```

### GetPerkValueForTown
`public static bool GetPerkValueForTown(PerkObject perk, Town town)`

**Purpose:** Reads and returns the `perk value for town` value held by the current object.

```csharp
// Static call; no instance required
PerkHelper.GetPerkValueForTown(perk, town);
```

### GetGovernorPerksForHero
`public static List<PerkObject> GetGovernorPerksForHero(Hero hero)`

**Purpose:** Reads and returns the `governor perks for hero` value held by the current object.

```csharp
// Static call; no instance required
PerkHelper.GetGovernorPerksForHero(hero);
```

### GetGovernorEngineeringSkillEffectForHero
`public static ValueTuple<TextObject, TextObject> GetGovernorEngineeringSkillEffectForHero(Hero governor)`

**Purpose:** Reads and returns the `governor engineering skill effect for hero` value held by the current object.

```csharp
// Static call; no instance required
PerkHelper.GetGovernorEngineeringSkillEffectForHero(governor);
```

### AvailablePerkCountOfHero
`public static int AvailablePerkCountOfHero(Hero hero)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
PerkHelper.AvailablePerkCountOfHero(hero);
```

## Usage Example

```csharp
PerkHelper.Initialize();
```

## See Also

- [Area Index](../)