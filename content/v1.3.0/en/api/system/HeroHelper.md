---
title: "HeroHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HeroHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class HeroHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/HeroHelper.cs`

## Overview

`HeroHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `HeroHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetLastSeenText
`public static TextObject GetLastSeenText(Hero hero)`

**Purpose:** Gets the current value of `last seen text`.

### GetClosestSettlement
`public static Settlement GetClosestSettlement(Hero hero)`

**Purpose:** Gets the current value of `closest settlement`.

### LordWillConspireWithLord
`public static bool LordWillConspireWithLord(Hero lord, Hero otherLord, bool suggestingBetrayal)`

**Purpose:** Handles logic related to `lord will conspire with lord`.

### UnderPlayerCommand
`public static bool UnderPlayerCommand(Hero hero)`

**Purpose:** Handles logic related to `under player command`.

### GetTitleInIndefiniteCase
`public static TextObject GetTitleInIndefiniteCase(Hero hero)`

**Purpose:** Gets the current value of `title in indefinite case`.

### GetCharacterTypeName
`public static TextObject GetCharacterTypeName(Hero hero)`

**Purpose:** Gets the current value of `character type name`.

### GetOccupiedEventReasonText
`public static TextObject GetOccupiedEventReasonText(Hero hero)`

**Purpose:** Gets the current value of `occupied event reason text`.

### OrderHeroesOnPlayerSideByPriority
`public static List<string> OrderHeroesOnPlayerSideByPriority(bool includeArmyLeader = false, bool includePlayerCompanions = false)`

**Purpose:** Handles logic related to `order heroes on player side by priority`.

### WillLordAttack
`public static bool WillLordAttack()`

**Purpose:** Handles logic related to `will lord attack`.

### SetPlayerSalutation
`public static void SetPlayerSalutation()`

**Purpose:** Sets the value or state of `player salutation`.

### SpawnHeroForTheFirstTime
`public static void SpawnHeroForTheFirstTime(Hero hero, Settlement spawnSettlement)`

**Purpose:** Handles logic related to `spawn hero for the first time`.

### DefaultRelation
`public static int DefaultRelation(Hero hero, Hero otherHero)`

**Purpose:** Handles logic related to `default relation`.

### IsCompanionInPlayerParty
`public static bool IsCompanionInPlayerParty(Hero hero)`

**Purpose:** Handles logic related to `is companion in player party`.

### NPCPoliticalDifferencesWithNPC
`public static bool NPCPoliticalDifferencesWithNPC(Hero firstNPC, Hero secondNPC)`

**Purpose:** Handles logic related to `n p c political differences with n p c`.

### NPCPersonalityClashWithNPC
`public static int NPCPersonalityClashWithNPC(Hero firstNPC, Hero secondNPC)`

**Purpose:** Handles logic related to `n p c personality clash with n p c`.

### TraitHarmony
`public static int TraitHarmony(Hero considerer, TraitObject trait, Hero consideree, bool sensitive)`

**Purpose:** Handles logic related to `trait harmony`.

### CalculateReliabilityConstant
`public static float CalculateReliabilityConstant(Hero hero, float maxValueConstant = 1f)`

**Purpose:** Handles logic related to `calculate reliability constant`.

### SetPropertiesToTextObject
`public static void SetPropertiesToTextObject(this Hero hero, TextObject textObject, string tagName)`

**Purpose:** Sets the value or state of `properties to text object`.

### SetPropertiesToTextObject
`public static void SetPropertiesToTextObject(this Settlement settlement, TextObject textObject, string tagName)`

**Purpose:** Sets the value or state of `properties to text object`.

### HeroCanRecruitFromHero
`public static bool HeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int index)`

**Purpose:** Handles logic related to `hero can recruit from hero`.

### GetVolunteerTroopsOfHeroForRecruitment
`public static List<CharacterObject> GetVolunteerTroopsOfHeroForRecruitment(Hero hero)`

**Purpose:** Gets the current value of `volunteer troops of hero for recruitment`.

### GetRandomClanForNotable
`public static Clan GetRandomClanForNotable(Hero notable)`

**Purpose:** Gets the current value of `random clan for notable`.

### GetRandomBirthDayForAge
`public static CampaignTime GetRandomBirthDayForAge(float age)`

**Purpose:** Gets the current value of `random birth day for age`.

### GetRandomDeathDayAndBirthDay
`public static void GetRandomDeathDayAndBirthDay(int deathAge, out CampaignTime birthday, out CampaignTime deathday)`

**Purpose:** Gets the current value of `random death day and birth day`.

### StartRecruitingMoneyLimit
`public static float StartRecruitingMoneyLimit(Hero hero)`

**Purpose:** Handles logic related to `start recruiting money limit`.

### StartRecruitingMoneyLimitForClanLeader
`public static float StartRecruitingMoneyLimitForClanLeader(Hero hero)`

**Purpose:** Handles logic related to `start recruiting money limit for clan leader`.

### GetPersonalityTraitChangeName
`public static TextObject GetPersonalityTraitChangeName(TraitObject traitObject, Hero hero, bool isPositive)`

**Purpose:** Gets the current value of `personality trait change name`.

### FindASuitableSettlementToTeleportForHero
`public static Settlement FindASuitableSettlementToTeleportForHero(Hero hero, float minimumScore = 0f)`

**Purpose:** Handles logic related to `find a suitable settlement to teleport for hero`.

## Usage Example

```csharp
HeroHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)