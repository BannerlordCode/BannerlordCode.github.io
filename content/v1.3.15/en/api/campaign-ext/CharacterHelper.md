---
title: "CharacterHelper"
description: "Auto-generated class reference for CharacterHelper."
---
# CharacterHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class CharacterHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/CharacterHelper.cs`

## Overview

`CharacterHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `CharacterHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDeathNotification
`public static TextObject GetDeathNotification(Hero victimHero, Hero killer, KillCharacterAction.KillCharacterActionDetail detail)`

**Purpose:** **Purpose:** Reads and returns the death notification value held by the this instance.

```csharp
// Static call; no instance required
CharacterHelper.GetDeathNotification(victimHero, killer, detail);
```

### GetDynamicBodyPropertiesBetweenMinMaxRange
`public static DynamicBodyProperties GetDynamicBodyPropertiesBetweenMinMaxRange(CharacterObject character)`

**Purpose:** **Purpose:** Reads and returns the dynamic body properties between min max range value held by the this instance.

```csharp
// Static call; no instance required
CharacterHelper.GetDynamicBodyPropertiesBetweenMinMaxRange(character);
```

### GetReputationDescription
`public static TextObject GetReputationDescription(CharacterObject character)`

**Purpose:** **Purpose:** Reads and returns the reputation description value held by the this instance.

```csharp
// Static call; no instance required
CharacterHelper.GetReputationDescription(character);
```

### GetDeterministicColorsForCharacter
`public static ValueTuple<uint, uint> GetDeterministicColorsForCharacter(CharacterObject character)`

**Purpose:** **Purpose:** Reads and returns the deterministic colors for character value held by the this instance.

```csharp
// Static call; no instance required
CharacterHelper.GetDeterministicColorsForCharacter(character);
```

### GetFaceGeneratorFilter
`public static IFaceGeneratorCustomFilter GetFaceGeneratorFilter()`

**Purpose:** **Purpose:** Reads and returns the face generator filter value held by the this instance.

```csharp
// Static call; no instance required
CharacterHelper.GetFaceGeneratorFilter();
```

### GetNonconversationPose
`public static string GetNonconversationPose(CharacterObject character)`

**Purpose:** **Purpose:** Reads and returns the nonconversation pose value held by the this instance.

```csharp
// Static call; no instance required
CharacterHelper.GetNonconversationPose(character);
```

### GetNonconversationFacialIdle
`public static string GetNonconversationFacialIdle(CharacterObject character)`

**Purpose:** **Purpose:** Reads and returns the nonconversation facial idle value held by the this instance.

```csharp
// Static call; no instance required
CharacterHelper.GetNonconversationFacialIdle(character);
```

### GetStandingBodyIdle
`public static string GetStandingBodyIdle(CharacterObject character, PartyBase party)`

**Purpose:** **Purpose:** Reads and returns the standing body idle value held by the this instance.

```csharp
// Static call; no instance required
CharacterHelper.GetStandingBodyIdle(character, party);
```

### GetDefaultFaceIdle
`public static string GetDefaultFaceIdle(CharacterObject character)`

**Purpose:** **Purpose:** Reads and returns the default face idle value held by the this instance.

```csharp
// Static call; no instance required
CharacterHelper.GetDefaultFaceIdle(character);
```

### FindUpgradeRootOf
`public static CharacterObject FindUpgradeRootOf(CharacterObject character)`

**Purpose:** **Purpose:** Looks up the matching upgrade root of in the current collection or scope.

```csharp
// Static call; no instance required
CharacterHelper.FindUpgradeRootOf(character);
```

### GetDefaultWeapon
`public static ItemObject GetDefaultWeapon(CharacterObject affectorCharacter)`

**Purpose:** **Purpose:** Reads and returns the default weapon value held by the this instance.

```csharp
// Static call; no instance required
CharacterHelper.GetDefaultWeapon(affectorCharacter);
```

### CanUseItemBasedOnSkill
`public static bool CanUseItemBasedOnSkill(BasicCharacterObject currentCharacter, EquipmentElement itemRosterElement)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for use item based on skill.

```csharp
// Static call; no instance required
CharacterHelper.CanUseItemBasedOnSkill(currentCharacter, itemRosterElement);
```

### GetPartyMemberFaceSeed
`public static int GetPartyMemberFaceSeed(PartyBase party, BasicCharacterObject character, int rank)`

**Purpose:** **Purpose:** Reads and returns the party member face seed value held by the this instance.

```csharp
// Static call; no instance required
CharacterHelper.GetPartyMemberFaceSeed(party, character, 0);
```

### GetDefaultFaceSeed
`public static int GetDefaultFaceSeed(BasicCharacterObject character, int rank)`

**Purpose:** **Purpose:** Reads and returns the default face seed value held by the this instance.

```csharp
// Static call; no instance required
CharacterHelper.GetDefaultFaceSeed(character, 0);
```

### SearchForFormationInTroopTree
`public static bool SearchForFormationInTroopTree(CharacterObject baseTroop, FormationClass formation)`

**Purpose:** **Purpose:** Searches for for formation in troop tree entries that meet the given criteria.

```csharp
// Static call; no instance required
CharacterHelper.SearchForFormationInTroopTree(baseTroop, formation);
```

### GetTroopTree
`public static IEnumerable<CharacterObject> GetTroopTree(CharacterObject baseTroop, float minTier = -1f, float maxTier = 3.4028235E+38f)`

**Purpose:** **Purpose:** Reads and returns the troop tree value held by the this instance.

```csharp
// Static call; no instance required
CharacterHelper.GetTroopTree(baseTroop, 0, 0);
```

### DeleteQuestCharacter
`public static void DeleteQuestCharacter(CharacterObject character, Settlement questSettlement)`

**Purpose:** **Purpose:** Executes the DeleteQuestCharacter logic.

```csharp
// Static call; no instance required
CharacterHelper.DeleteQuestCharacter(character, questSettlement);
```

### GetRandomCompanionTemplateWithPredicate
`public static CharacterObject GetRandomCompanionTemplateWithPredicate(Func<CharacterObject, bool> predicate = null)`

**Purpose:** **Purpose:** Reads and returns the random companion template with predicate value held by the this instance.

```csharp
// Static call; no instance required
CharacterHelper.GetRandomCompanionTemplateWithPredicate(func<CharacterObject, false);
```

## Usage Example

```csharp
CharacterHelper.Initialize();
```

## See Also

- [Area Index](../)