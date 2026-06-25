---
title: "HeroHelper"
description: "Auto-generated class reference for HeroHelper."
---
# HeroHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class HeroHelper`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/HeroHelper.cs`

## Overview

`HeroHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `HeroHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetLastSeenText
`public static TextObject GetLastSeenText(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the last seen text value held by the this instance.

```csharp
// Static call; no instance required
HeroHelper.GetLastSeenText(hero);
```

### GetClosestSettlement
`public static Settlement GetClosestSettlement(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the closest settlement value held by the this instance.

```csharp
// Static call; no instance required
HeroHelper.GetClosestSettlement(hero);
```

### LordWillConspireWithLord
`public static bool LordWillConspireWithLord(Hero lord, Hero otherLord, bool suggestingBetrayal)`

**Purpose:** **Purpose:** Executes the LordWillConspireWithLord logic.

```csharp
// Static call; no instance required
HeroHelper.LordWillConspireWithLord(lord, otherLord, false);
```

### UnderPlayerCommand
`public static bool UnderPlayerCommand(Hero hero)`

**Purpose:** **Purpose:** Executes the UnderPlayerCommand logic.

```csharp
// Static call; no instance required
HeroHelper.UnderPlayerCommand(hero);
```

### GetTitleInIndefiniteCase
`public static TextObject GetTitleInIndefiniteCase(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the title in indefinite case value held by the this instance.

```csharp
// Static call; no instance required
HeroHelper.GetTitleInIndefiniteCase(hero);
```

### GetCharacterTypeName
`public static TextObject GetCharacterTypeName(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the character type name value held by the this instance.

```csharp
// Static call; no instance required
HeroHelper.GetCharacterTypeName(hero);
```

### GetOccupiedEventReasonText
`public static TextObject GetOccupiedEventReasonText(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the occupied event reason text value held by the this instance.

```csharp
// Static call; no instance required
HeroHelper.GetOccupiedEventReasonText(hero);
```

### OrderHeroesOnPlayerSideByPriority
`public static List<string> OrderHeroesOnPlayerSideByPriority(bool includeArmyLeader = false, bool includePlayerCompanions = false)`

**Purpose:** **Purpose:** Executes the OrderHeroesOnPlayerSideByPriority logic.

```csharp
// Static call; no instance required
HeroHelper.OrderHeroesOnPlayerSideByPriority(false, false);
```

### WillLordAttack
`public static bool WillLordAttack()`

**Purpose:** **Purpose:** Executes the WillLordAttack logic.

```csharp
// Static call; no instance required
HeroHelper.WillLordAttack();
```

### SetPlayerSalutation
`public static void SetPlayerSalutation()`

**Purpose:** **Purpose:** Assigns a new value to player salutation and updates the object's internal state.

```csharp
// Static call; no instance required
HeroHelper.SetPlayerSalutation();
```

### SpawnHeroForTheFirstTime
`public static void SpawnHeroForTheFirstTime(Hero hero, Settlement spawnSettlement)`

**Purpose:** **Purpose:** Executes the SpawnHeroForTheFirstTime logic.

```csharp
// Static call; no instance required
HeroHelper.SpawnHeroForTheFirstTime(hero, spawnSettlement);
```

### DefaultRelation
`public static int DefaultRelation(Hero hero, Hero otherHero)`

**Purpose:** **Purpose:** Executes the DefaultRelation logic.

```csharp
// Static call; no instance required
HeroHelper.DefaultRelation(hero, otherHero);
```

### IsCompanionInPlayerParty
`public static bool IsCompanionInPlayerParty(Hero hero)`

**Purpose:** **Purpose:** Determines whether the this instance is in the companion in player party state or condition.

```csharp
// Static call; no instance required
HeroHelper.IsCompanionInPlayerParty(hero);
```

### NPCPoliticalDifferencesWithNPC
`public static bool NPCPoliticalDifferencesWithNPC(Hero firstNPC, Hero secondNPC)`

**Purpose:** **Purpose:** Executes the NPCPoliticalDifferencesWithNPC logic.

```csharp
// Static call; no instance required
HeroHelper.NPCPoliticalDifferencesWithNPC(firstNPC, secondNPC);
```

### NPCPersonalityClashWithNPC
`public static int NPCPersonalityClashWithNPC(Hero firstNPC, Hero secondNPC)`

**Purpose:** **Purpose:** Executes the NPCPersonalityClashWithNPC logic.

```csharp
// Static call; no instance required
HeroHelper.NPCPersonalityClashWithNPC(firstNPC, secondNPC);
```

### TraitHarmony
`public static int TraitHarmony(Hero considerer, TraitObject trait, Hero consideree, bool sensitive)`

**Purpose:** **Purpose:** Executes the TraitHarmony logic.

```csharp
// Static call; no instance required
HeroHelper.TraitHarmony(considerer, trait, consideree, false);
```

### CalculateReliabilityConstant
`public static float CalculateReliabilityConstant(Hero hero, float maxValueConstant = 1f)`

**Purpose:** **Purpose:** Calculates the current value or result of reliability constant.

```csharp
// Static call; no instance required
HeroHelper.CalculateReliabilityConstant(hero, 0);
```

### SetPropertiesToTextObject
`public static void SetPropertiesToTextObject(this Hero hero, TextObject textObject, string tagName)`

**Purpose:** **Purpose:** Assigns a new value to properties to text object and updates the object's internal state.

```csharp
// Static call; no instance required
HeroHelper.SetPropertiesToTextObject(hero, textObject, "example");
```

### SetPropertiesToTextObject
`public static void SetPropertiesToTextObject(this Settlement settlement, TextObject textObject, string tagName)`

**Purpose:** **Purpose:** Assigns a new value to properties to text object and updates the object's internal state.

```csharp
// Static call; no instance required
HeroHelper.SetPropertiesToTextObject(settlement, textObject, "example");
```

### HeroCanRecruitFromHero
`public static bool HeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int index)`

**Purpose:** **Purpose:** Executes the HeroCanRecruitFromHero logic.

```csharp
// Static call; no instance required
HeroHelper.HeroCanRecruitFromHero(buyerHero, sellerHero, 0);
```

### GetVolunteerTroopsOfHeroForRecruitment
`public static List<CharacterObject> GetVolunteerTroopsOfHeroForRecruitment(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the volunteer troops of hero for recruitment value held by the this instance.

```csharp
// Static call; no instance required
HeroHelper.GetVolunteerTroopsOfHeroForRecruitment(hero);
```

### GetRandomClanForNotable
`public static Clan GetRandomClanForNotable(Hero notable)`

**Purpose:** **Purpose:** Reads and returns the random clan for notable value held by the this instance.

```csharp
// Static call; no instance required
HeroHelper.GetRandomClanForNotable(notable);
```

### GetRandomBirthDayForAge
`public static CampaignTime GetRandomBirthDayForAge(float age)`

**Purpose:** **Purpose:** Reads and returns the random birth day for age value held by the this instance.

```csharp
// Static call; no instance required
HeroHelper.GetRandomBirthDayForAge(0);
```

### GetRandomDeathDayAndBirthDay
`public static void GetRandomDeathDayAndBirthDay(int deathAge, out CampaignTime birthday, out CampaignTime deathday)`

**Purpose:** **Purpose:** Reads and returns the random death day and birth day value held by the this instance.

```csharp
// Static call; no instance required
HeroHelper.GetRandomDeathDayAndBirthDay(0, birthday, deathday);
```

### StartRecruitingMoneyLimit
`public static float StartRecruitingMoneyLimit(Hero hero)`

**Purpose:** **Purpose:** Starts the recruiting money limit flow or state machine.

```csharp
// Static call; no instance required
HeroHelper.StartRecruitingMoneyLimit(hero);
```

### StartRecruitingMoneyLimitForClanLeader
`public static float StartRecruitingMoneyLimitForClanLeader(Hero hero)`

**Purpose:** **Purpose:** Starts the recruiting money limit for clan leader flow or state machine.

```csharp
// Static call; no instance required
HeroHelper.StartRecruitingMoneyLimitForClanLeader(hero);
```

### GetPersonalityTraitChangeName
`public static TextObject GetPersonalityTraitChangeName(TraitObject traitObject, Hero hero, bool isPositive)`

**Purpose:** **Purpose:** Reads and returns the personality trait change name value held by the this instance.

```csharp
// Static call; no instance required
HeroHelper.GetPersonalityTraitChangeName(traitObject, hero, false);
```

## Usage Example

```csharp
HeroHelper.Initialize();
```

## See Also

- [Area Index](../)