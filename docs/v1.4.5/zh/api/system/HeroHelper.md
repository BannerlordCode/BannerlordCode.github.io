<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeroHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HeroHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class HeroHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/HeroHelper.cs`

## 概述

`HeroHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `HeroHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetLastSeenText
`public static TextObject GetLastSeenText(Hero hero)`

**用途 / Purpose:** 获取 `last seen text` 的当前值。

### GetClosestSettlement
`public static Settlement GetClosestSettlement(Hero hero)`

**用途 / Purpose:** 获取 `closest settlement` 的当前值。

### LordWillConspireWithLord
`public static bool LordWillConspireWithLord(Hero lord, Hero otherLord, bool suggestingBetrayal)`

**用途 / Purpose:** 处理 `lord will conspire with lord` 相关逻辑。

### UnderPlayerCommand
`public static bool UnderPlayerCommand(Hero hero)`

**用途 / Purpose:** 处理 `under player command` 相关逻辑。

### GetTitleInIndefiniteCase
`public static TextObject GetTitleInIndefiniteCase(Hero hero)`

**用途 / Purpose:** 获取 `title in indefinite case` 的当前值。

### GetCharacterTypeName
`public static TextObject GetCharacterTypeName(Hero hero)`

**用途 / Purpose:** 获取 `character type name` 的当前值。

### GetOccupiedEventReasonText
`public static TextObject GetOccupiedEventReasonText(Hero hero)`

**用途 / Purpose:** 获取 `occupied event reason text` 的当前值。

### OrderHeroesOnPlayerSideByPriority
`public static List<string> OrderHeroesOnPlayerSideByPriority(bool includeArmyLeader = false, bool includePlayerCompanions = false)`

**用途 / Purpose:** 处理 `order heroes on player side by priority` 相关逻辑。

### WillLordAttack
`public static bool WillLordAttack()`

**用途 / Purpose:** 处理 `will lord attack` 相关逻辑。

### SetPlayerSalutation
`public static void SetPlayerSalutation()`

**用途 / Purpose:** 设置 `player salutation` 的值或状态。

### SpawnHeroForTheFirstTime
`public static void SpawnHeroForTheFirstTime(Hero hero, Settlement spawnSettlement)`

**用途 / Purpose:** 处理 `spawn hero for the first time` 相关逻辑。

### DefaultRelation
`public static int DefaultRelation(Hero hero, Hero otherHero)`

**用途 / Purpose:** 处理 `default relation` 相关逻辑。

### IsCompanionInPlayerParty
`public static bool IsCompanionInPlayerParty(Hero hero)`

**用途 / Purpose:** 处理 `is companion in player party` 相关逻辑。

### NPCPoliticalDifferencesWithNPC
`public static bool NPCPoliticalDifferencesWithNPC(Hero firstNPC, Hero secondNPC)`

**用途 / Purpose:** 处理 `n p c political differences with n p c` 相关逻辑。

### NPCPersonalityClashWithNPC
`public static int NPCPersonalityClashWithNPC(Hero firstNPC, Hero secondNPC)`

**用途 / Purpose:** 处理 `n p c personality clash with n p c` 相关逻辑。

### TraitHarmony
`public static int TraitHarmony(Hero considerer, TraitObject trait, Hero consideree, bool sensitive)`

**用途 / Purpose:** 处理 `trait harmony` 相关逻辑。

### CalculateReliabilityConstant
`public static float CalculateReliabilityConstant(Hero hero, float maxValueConstant = 1f)`

**用途 / Purpose:** 处理 `calculate reliability constant` 相关逻辑。

### SetPropertiesToTextObject
`public static void SetPropertiesToTextObject(this Hero hero, TextObject textObject, string tagName)`

**用途 / Purpose:** 设置 `properties to text object` 的值或状态。

### SetPropertiesToTextObject
`public static void SetPropertiesToTextObject(this Settlement settlement, TextObject textObject, string tagName)`

**用途 / Purpose:** 设置 `properties to text object` 的值或状态。

### HeroCanRecruitFromHero
`public static bool HeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int index)`

**用途 / Purpose:** 处理 `hero can recruit from hero` 相关逻辑。

### GetVolunteerTroopsOfHeroForRecruitment
`public static List<CharacterObject> GetVolunteerTroopsOfHeroForRecruitment(Hero hero)`

**用途 / Purpose:** 获取 `volunteer troops of hero for recruitment` 的当前值。

### GetRandomClanForNotable
`public static Clan GetRandomClanForNotable(Hero notable)`

**用途 / Purpose:** 获取 `random clan for notable` 的当前值。

### GetRandomBirthDayForAge
`public static CampaignTime GetRandomBirthDayForAge(float age)`

**用途 / Purpose:** 获取 `random birth day for age` 的当前值。

### GetRandomDeathDayAndBirthDay
`public static void GetRandomDeathDayAndBirthDay(int deathAge, out CampaignTime birthday, out CampaignTime deathday)`

**用途 / Purpose:** 获取 `random death day and birth day` 的当前值。

### StartRecruitingMoneyLimit
`public static float StartRecruitingMoneyLimit(Hero hero)`

**用途 / Purpose:** 处理 `start recruiting money limit` 相关逻辑。

### StartRecruitingMoneyLimitForClanLeader
`public static float StartRecruitingMoneyLimitForClanLeader(Hero hero)`

**用途 / Purpose:** 处理 `start recruiting money limit for clan leader` 相关逻辑。

### GetPersonalityTraitChangeName
`public static TextObject GetPersonalityTraitChangeName(TraitObject traitObject, Hero hero, bool isPositive)`

**用途 / Purpose:** 获取 `personality trait change name` 的当前值。

## 使用示例

```csharp
HeroHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)