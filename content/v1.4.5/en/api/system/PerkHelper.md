---
title: "PerkHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PerkHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PerkHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class PerkHelper`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/PerkHelper.cs`

## Overview

`PerkHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `PerkHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ClearPerksForSkill
`public static void ClearPerksForSkill(Hero hero, SkillObject skill)`

**Purpose:** Handles logic related to `clear perks for skill`.

### GetCaptainPerksForTroopUsages
`public static IEnumerable<PerkObject> GetCaptainPerksForTroopUsages(TroopUsageFlags troopUsageFlags)`

**Purpose:** Gets the current value of `captain perks for troop usages`.

### PlayerHasAnyItemDonationPerk
`public static bool PlayerHasAnyItemDonationPerk()`

**Purpose:** Handles logic related to `player has any item donation perk`.

### AddPerkBonusForParty
`public static void AddPerkBonusForParty(PerkObject perk, MobileParty party, bool isPrimaryBonus, ref ExplainedNumber stat, bool shouldApplyNavalMultiplier = false)`

**Purpose:** Adds `perk bonus for party` to the current collection or state.

### AddPerkBonusForCharacter
`public static void AddPerkBonusForCharacter(PerkObject perk, CharacterObject character, bool isPrimaryBonus, ref ExplainedNumber bonuses, bool shouldApplyNavalMultiplier = false)`

**Purpose:** Adds `perk bonus for character` to the current collection or state.

### AddEpicPerkBonusForCharacter
`public static void AddEpicPerkBonusForCharacter(PerkObject perk, CharacterObject character, SkillObject skillType, bool applyPrimaryBonus, ref ExplainedNumber bonuses, int skillRequired, bool shouldApplyNavalMultiplier = false)`

**Purpose:** Adds `epic perk bonus for character` to the current collection or state.

### AddPerkBonusFromCaptain
`public static void AddPerkBonusFromCaptain(PerkObject perk, CharacterObject captainCharacter, ref ExplainedNumber bonuses)`

**Purpose:** Adds `perk bonus from captain` to the current collection or state.

### AddPerkBonusForTown
`public static void AddPerkBonusForTown(PerkObject perk, Town town, ref ExplainedNumber bonuses)`

**Purpose:** Adds `perk bonus for town` to the current collection or state.

### GetPerkValueForTown
`public static bool GetPerkValueForTown(PerkObject perk, Town town)`

**Purpose:** Gets the current value of `perk value for town`.

### GetGovernorPerksForHero
`public static List<PerkObject> GetGovernorPerksForHero(Hero hero)`

**Purpose:** Gets the current value of `governor perks for hero`.

### AvailablePerkCountOfHero
`public static int AvailablePerkCountOfHero(Hero hero)`

**Purpose:** Handles logic related to `available perk count of hero`.

## Usage Example

```csharp
PerkHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)