---
title: "HeroHelper"
description: "HeroHelper 的自动生成类参考。"
---
# HeroHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class HeroHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/HeroHelper.cs`

## 概述

`HeroHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `HeroHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetLastSeenText
`public static TextObject GetLastSeenText(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「last seen text」 的结果。

```csharp
// 静态调用，不需要实例
HeroHelper.GetLastSeenText(hero);
```

### GetClosestSettlement
`public static Settlement GetClosestSettlement(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「closest settlement」 的结果。

```csharp
// 静态调用，不需要实例
HeroHelper.GetClosestSettlement(hero);
```

### LordWillConspireWithLord
`public static bool LordWillConspireWithLord(Hero lord, Hero otherLord, bool suggestingBetrayal)`

**用途 / Purpose:** 处理与 「lord will conspire with lord」 相关的逻辑。

```csharp
// 静态调用，不需要实例
HeroHelper.LordWillConspireWithLord(lord, otherLord, false);
```

### UnderPlayerCommand
`public static bool UnderPlayerCommand(Hero hero)`

**用途 / Purpose:** 处理与 「under player command」 相关的逻辑。

```csharp
// 静态调用，不需要实例
HeroHelper.UnderPlayerCommand(hero);
```

### GetTitleInIndefiniteCase
`public static TextObject GetTitleInIndefiniteCase(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「title in indefinite case」 的结果。

```csharp
// 静态调用，不需要实例
HeroHelper.GetTitleInIndefiniteCase(hero);
```

### GetCharacterTypeName
`public static TextObject GetCharacterTypeName(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「character type name」 的结果。

```csharp
// 静态调用，不需要实例
HeroHelper.GetCharacterTypeName(hero);
```

### GetOccupiedEventReasonText
`public static TextObject GetOccupiedEventReasonText(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「occupied event reason text」 的结果。

```csharp
// 静态调用，不需要实例
HeroHelper.GetOccupiedEventReasonText(hero);
```

### OrderHeroesOnPlayerSideByPriority
`public static List<string> OrderHeroesOnPlayerSideByPriority(bool includeArmyLeader = false, bool includePlayerCompanions = false)`

**用途 / Purpose:** 处理与 「order heroes on player side by priority」 相关的逻辑。

```csharp
// 静态调用，不需要实例
HeroHelper.OrderHeroesOnPlayerSideByPriority(false, false);
```

### WillLordAttack
`public static bool WillLordAttack()`

**用途 / Purpose:** 处理与 「will lord attack」 相关的逻辑。

```csharp
// 静态调用，不需要实例
HeroHelper.WillLordAttack();
```

### SetPlayerSalutation
`public static void SetPlayerSalutation()`

**用途 / Purpose:** 为 「player salutation」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
HeroHelper.SetPlayerSalutation();
```

### SpawnHeroForTheFirstTime
`public static void SpawnHeroForTheFirstTime(Hero hero, Settlement spawnSettlement)`

**用途 / Purpose:** 处理与 「spawn hero for the first time」 相关的逻辑。

```csharp
// 静态调用，不需要实例
HeroHelper.SpawnHeroForTheFirstTime(hero, spawnSettlement);
```

### DefaultRelation
`public static int DefaultRelation(Hero hero, Hero otherHero)`

**用途 / Purpose:** 处理与 「default relation」 相关的逻辑。

```csharp
// 静态调用，不需要实例
HeroHelper.DefaultRelation(hero, otherHero);
```

### IsCompanionInPlayerParty
`public static bool IsCompanionInPlayerParty(Hero hero)`

**用途 / Purpose:** 判断当前对象是否处于 「companion in player party」 状态或条件。

```csharp
// 静态调用，不需要实例
HeroHelper.IsCompanionInPlayerParty(hero);
```

### NPCPoliticalDifferencesWithNPC
`public static bool NPCPoliticalDifferencesWithNPC(Hero firstNPC, Hero secondNPC)`

**用途 / Purpose:** 处理与 「npc political differences with npc」 相关的逻辑。

```csharp
// 静态调用，不需要实例
HeroHelper.NPCPoliticalDifferencesWithNPC(firstNPC, secondNPC);
```

### NPCPersonalityClashWithNPC
`public static int NPCPersonalityClashWithNPC(Hero firstNPC, Hero secondNPC)`

**用途 / Purpose:** 处理与 「npc personality clash with npc」 相关的逻辑。

```csharp
// 静态调用，不需要实例
HeroHelper.NPCPersonalityClashWithNPC(firstNPC, secondNPC);
```

### TraitHarmony
`public static int TraitHarmony(Hero considerer, TraitObject trait, Hero consideree, bool sensitive)`

**用途 / Purpose:** 处理与 「trait harmony」 相关的逻辑。

```csharp
// 静态调用，不需要实例
HeroHelper.TraitHarmony(considerer, trait, consideree, false);
```

### CalculateReliabilityConstant
`public static float CalculateReliabilityConstant(Hero hero, float maxValueConstant = 1f)`

**用途 / Purpose:** 计算「reliability constant」的当前值或结果。

```csharp
// 静态调用，不需要实例
HeroHelper.CalculateReliabilityConstant(hero, 0);
```

### SetPropertiesToTextObject
`public static void SetPropertiesToTextObject(this Hero hero, TextObject textObject, string tagName)`

**用途 / Purpose:** 为 「properties to text object」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
HeroHelper.SetPropertiesToTextObject(hero, textObject, "example");
```

### SetPropertiesToTextObject
`public static void SetPropertiesToTextObject(this Settlement settlement, TextObject textObject, string tagName)`

**用途 / Purpose:** 为 「properties to text object」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
HeroHelper.SetPropertiesToTextObject(settlement, textObject, "example");
```

### HeroCanRecruitFromHero
`public static bool HeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int index)`

**用途 / Purpose:** 处理与 「hero can recruit from hero」 相关的逻辑。

```csharp
// 静态调用，不需要实例
HeroHelper.HeroCanRecruitFromHero(buyerHero, sellerHero, 0);
```

### GetVolunteerTroopsOfHeroForRecruitment
`public static List<CharacterObject> GetVolunteerTroopsOfHeroForRecruitment(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「volunteer troops of hero for recruitment」 的结果。

```csharp
// 静态调用，不需要实例
HeroHelper.GetVolunteerTroopsOfHeroForRecruitment(hero);
```

### GetRandomClanForNotable
`public static Clan GetRandomClanForNotable(Hero notable)`

**用途 / Purpose:** 读取并返回当前对象中 「random clan for notable」 的结果。

```csharp
// 静态调用，不需要实例
HeroHelper.GetRandomClanForNotable(notable);
```

### GetRandomBirthDayForAge
`public static CampaignTime GetRandomBirthDayForAge(float age)`

**用途 / Purpose:** 读取并返回当前对象中 「random birth day for age」 的结果。

```csharp
// 静态调用，不需要实例
HeroHelper.GetRandomBirthDayForAge(0);
```

### GetRandomDeathDayAndBirthDay
`public static void GetRandomDeathDayAndBirthDay(int deathAge, out CampaignTime birthday, out CampaignTime deathday)`

**用途 / Purpose:** 读取并返回当前对象中 「random death day and birth day」 的结果。

```csharp
// 静态调用，不需要实例
HeroHelper.GetRandomDeathDayAndBirthDay(0, birthday, deathday);
```

### StartRecruitingMoneyLimit
`public static float StartRecruitingMoneyLimit(Hero hero)`

**用途 / Purpose:** 启动「recruiting money limit」流程或状态机。

```csharp
// 静态调用，不需要实例
HeroHelper.StartRecruitingMoneyLimit(hero);
```

### StartRecruitingMoneyLimitForClanLeader
`public static float StartRecruitingMoneyLimitForClanLeader(Hero hero)`

**用途 / Purpose:** 启动「recruiting money limit for clan leader」流程或状态机。

```csharp
// 静态调用，不需要实例
HeroHelper.StartRecruitingMoneyLimitForClanLeader(hero);
```

### GetPersonalityTraitChangeName
`public static TextObject GetPersonalityTraitChangeName(TraitObject traitObject, Hero hero, bool isPositive)`

**用途 / Purpose:** 读取并返回当前对象中 「personality trait change name」 的结果。

```csharp
// 静态调用，不需要实例
HeroHelper.GetPersonalityTraitChangeName(traitObject, hero, false);
```

### FindASuitableSettlementToTeleportForHero
`public static Settlement FindASuitableSettlementToTeleportForHero(Hero hero, float minimumScore = 0f)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「a suitable settlement to teleport for hero」。

```csharp
// 静态调用，不需要实例
HeroHelper.FindASuitableSettlementToTeleportForHero(hero, 0);
```

## 使用示例

```csharp
HeroHelper.Initialize();
```

## 参见

- [本区域目录](../)