<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeroHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeroHelper

**命名空间:** Helpers
**模块:** Helpers
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`HeroHelper` 是 `Helpers` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)