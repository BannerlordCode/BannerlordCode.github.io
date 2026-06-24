<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `death notification`.

### GetDynamicBodyPropertiesBetweenMinMaxRange
`public static DynamicBodyProperties GetDynamicBodyPropertiesBetweenMinMaxRange(CharacterObject character)`

**Purpose:** Gets the current value of `dynamic body properties between min max range`.

### GetReputationDescription
`public static TextObject GetReputationDescription(CharacterObject character)`

**Purpose:** Gets the current value of `reputation description`.

### GetDeterministicColorsForCharacter
`public static ValueTuple<uint, uint> GetDeterministicColorsForCharacter(CharacterObject character)`

**Purpose:** Gets the current value of `deterministic colors for character`.

### GetFaceGeneratorFilter
`public static IFaceGeneratorCustomFilter GetFaceGeneratorFilter()`

**Purpose:** Gets the current value of `face generator filter`.

### GetNonconversationPose
`public static string GetNonconversationPose(CharacterObject character)`

**Purpose:** Gets the current value of `nonconversation pose`.

### GetNonconversationFacialIdle
`public static string GetNonconversationFacialIdle(CharacterObject character)`

**Purpose:** Gets the current value of `nonconversation facial idle`.

### GetStandingBodyIdle
`public static string GetStandingBodyIdle(CharacterObject character, PartyBase party)`

**Purpose:** Gets the current value of `standing body idle`.

### GetDefaultFaceIdle
`public static string GetDefaultFaceIdle(CharacterObject character)`

**Purpose:** Gets the current value of `default face idle`.

### FindUpgradeRootOf
`public static CharacterObject FindUpgradeRootOf(CharacterObject character)`

**Purpose:** Handles logic related to `find upgrade root of`.

### GetDefaultWeapon
`public static ItemObject GetDefaultWeapon(CharacterObject affectorCharacter)`

**Purpose:** Gets the current value of `default weapon`.

### CanUseItemBasedOnSkill
`public static bool CanUseItemBasedOnSkill(BasicCharacterObject currentCharacter, EquipmentElement itemRosterElement)`

**Purpose:** Checks whether the current object can `use item based on skill`.

### GetPartyMemberFaceSeed
`public static int GetPartyMemberFaceSeed(PartyBase party, BasicCharacterObject character, int rank)`

**Purpose:** Gets the current value of `party member face seed`.

### GetDefaultFaceSeed
`public static int GetDefaultFaceSeed(BasicCharacterObject character, int rank)`

**Purpose:** Gets the current value of `default face seed`.

### SearchForFormationInTroopTree
`public static bool SearchForFormationInTroopTree(CharacterObject baseTroop, FormationClass formation)`

**Purpose:** Handles logic related to `search for formation in troop tree`.

### GetTroopTree
`public static IEnumerable<CharacterObject> GetTroopTree(CharacterObject baseTroop, float minTier = -1f, float maxTier = 3.4028235E+38f)`

**Purpose:** Gets the current value of `troop tree`.

### DeleteQuestCharacter
`public static void DeleteQuestCharacter(CharacterObject character, Settlement questSettlement)`

**Purpose:** Handles logic related to `delete quest character`.

### GetRandomCompanionTemplateWithPredicate
`public static CharacterObject GetRandomCompanionTemplateWithPredicate(Func<CharacterObject, bool> predicate = null)`

**Purpose:** Gets the current value of `random companion template with predicate`.

## Usage Example

```csharp
CharacterHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)