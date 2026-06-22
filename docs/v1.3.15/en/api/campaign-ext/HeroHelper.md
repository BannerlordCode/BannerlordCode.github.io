<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeroHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `HeroHelper` is a class in the `Helpers` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### GetLastSeenText

```csharp
public static TextObject GetLastSeenText(Hero hero)
```

### GetClosestSettlement

```csharp
public static Settlement GetClosestSettlement(Hero hero)
```

### LordWillConspireWithLord

```csharp
public static bool LordWillConspireWithLord(Hero lord, Hero otherLord, bool suggestingBetrayal)
```

### UnderPlayerCommand

```csharp
public static bool UnderPlayerCommand(Hero hero)
```

### GetTitleInIndefiniteCase

```csharp
public static TextObject GetTitleInIndefiniteCase(Hero hero)
```

### GetCharacterTypeName

```csharp
public static TextObject GetCharacterTypeName(Hero hero)
```

### GetOccupiedEventReasonText

```csharp
public static TextObject GetOccupiedEventReasonText(Hero hero)
```

### OrderHeroesOnPlayerSideByPriority

```csharp
public static List<string> OrderHeroesOnPlayerSideByPriority(bool includeArmyLeader = false, bool includePlayerCompanions = false)
```

### WillLordAttack

```csharp
public static bool WillLordAttack()
```

### SetPlayerSalutation

```csharp
public static void SetPlayerSalutation()
```

### SpawnHeroForTheFirstTime

```csharp
public static void SpawnHeroForTheFirstTime(Hero hero, Settlement spawnSettlement)
```

### DefaultRelation

```csharp
public static int DefaultRelation(Hero hero, Hero otherHero)
```

### IsCompanionInPlayerParty

```csharp
public static bool IsCompanionInPlayerParty(Hero hero)
```

### NPCPoliticalDifferencesWithNPC

```csharp
public static bool NPCPoliticalDifferencesWithNPC(Hero firstNPC, Hero secondNPC)
```

### NPCPersonalityClashWithNPC

```csharp
public static int NPCPersonalityClashWithNPC(Hero firstNPC, Hero secondNPC)
```

### TraitHarmony

```csharp
public static int TraitHarmony(Hero considerer, TraitObject trait, Hero consideree, bool sensitive)
```

### CalculateReliabilityConstant

```csharp
public static float CalculateReliabilityConstant(Hero hero, float maxValueConstant = 1f)
```

### SetPropertiesToTextObject

```csharp
public static void SetPropertiesToTextObject(this Hero hero, TextObject textObject, string tagName)
```

### SetPropertiesToTextObject

```csharp
public static void SetPropertiesToTextObject(this Settlement settlement, TextObject textObject, string tagName)
```

### HeroCanRecruitFromHero

```csharp
public static bool HeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int index)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)