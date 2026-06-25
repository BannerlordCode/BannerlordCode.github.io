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

**Purpose:** **Purpose:** Reads and returns the captain perks for troop usages value held by the this instance.

```csharp
// Static call; no instance required
PerkHelper.GetCaptainPerksForTroopUsages(troopUsageFlags);
```

### PlayerHasAnyItemDonationPerk
`public static bool PlayerHasAnyItemDonationPerk()`

**Purpose:** **Purpose:** Executes the PlayerHasAnyItemDonationPerk logic.

```csharp
// Static call; no instance required
PerkHelper.PlayerHasAnyItemDonationPerk();
```

### AddPerkBonusForParty
`public static void AddPerkBonusForParty(PerkObject perk, MobileParty party, bool isPrimaryBonus, ref ExplainedNumber stat)`

**Purpose:** **Purpose:** Adds perk bonus for party to the current collection or state.

```csharp
// Static call; no instance required
PerkHelper.AddPerkBonusForParty(perk, party, false, stat);
```

### AddPerkBonusForCharacter
`public static void AddPerkBonusForCharacter(PerkObject perk, CharacterObject character, bool isPrimaryBonus, ref ExplainedNumber bonuses)`

**Purpose:** **Purpose:** Adds perk bonus for character to the current collection or state.

```csharp
// Static call; no instance required
PerkHelper.AddPerkBonusForCharacter(perk, character, false, bonuses);
```

### AddEpicPerkBonusForCharacter
`public static void AddEpicPerkBonusForCharacter(PerkObject perk, CharacterObject character, SkillObject skillType, bool applyPrimaryBonus, ref ExplainedNumber bonuses, int skillRequired)`

**Purpose:** **Purpose:** Adds epic perk bonus for character to the current collection or state.

```csharp
// Static call; no instance required
PerkHelper.AddEpicPerkBonusForCharacter(perk, character, skillType, false, bonuses, 0);
```

### AddPerkBonusFromCaptain
`public static void AddPerkBonusFromCaptain(PerkObject perk, CharacterObject captainCharacter, ref ExplainedNumber bonuses)`

**Purpose:** **Purpose:** Adds perk bonus from captain to the current collection or state.

```csharp
// Static call; no instance required
PerkHelper.AddPerkBonusFromCaptain(perk, captainCharacter, bonuses);
```

### AddPerkBonusForTown
`public static void AddPerkBonusForTown(PerkObject perk, Town town, ref ExplainedNumber bonuses)`

**Purpose:** **Purpose:** Adds perk bonus for town to the current collection or state.

```csharp
// Static call; no instance required
PerkHelper.AddPerkBonusForTown(perk, town, bonuses);
```

### GetPerkValueForTown
`public static bool GetPerkValueForTown(PerkObject perk, Town town)`

**Purpose:** **Purpose:** Reads and returns the perk value for town value held by the this instance.

```csharp
// Static call; no instance required
PerkHelper.GetPerkValueForTown(perk, town);
```

### GetGovernorPerksForHero
`public static List<PerkObject> GetGovernorPerksForHero(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the governor perks for hero value held by the this instance.

```csharp
// Static call; no instance required
PerkHelper.GetGovernorPerksForHero(hero);
```

### GetGovernorEngineeringSkillEffectForHero
`public static ValueTuple<TextObject, TextObject> GetGovernorEngineeringSkillEffectForHero(Hero governor)`

**Purpose:** **Purpose:** Reads and returns the governor engineering skill effect for hero value held by the this instance.

```csharp
// Static call; no instance required
PerkHelper.GetGovernorEngineeringSkillEffectForHero(governor);
```

### SetDescriptionTextVariable
`public static void SetDescriptionTextVariable(TextObject description, float bonus, EffectIncrementType effectIncrementType)`

**Purpose:** **Purpose:** Assigns a new value to description text variable and updates the object's internal state.

```csharp
// Static call; no instance required
PerkHelper.SetDescriptionTextVariable(description, 0, effectIncrementType);
```

### AvailablePerkCountOfHero
`public static int AvailablePerkCountOfHero(Hero hero)`

**Purpose:** **Purpose:** Executes the AvailablePerkCountOfHero logic.

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