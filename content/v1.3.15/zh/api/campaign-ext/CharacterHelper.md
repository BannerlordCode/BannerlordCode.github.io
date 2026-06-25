---
title: "CharacterHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class CharacterHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/CharacterHelper.cs`

## 概述

`CharacterHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `CharacterHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDeathNotification
`public static TextObject GetDeathNotification(Hero victimHero, Hero killer, KillCharacterAction.KillCharacterActionDetail detail)`

**用途 / Purpose:** 获取 `death notification` 的当前值。

### GetDynamicBodyPropertiesBetweenMinMaxRange
`public static DynamicBodyProperties GetDynamicBodyPropertiesBetweenMinMaxRange(CharacterObject character)`

**用途 / Purpose:** 获取 `dynamic body properties between min max range` 的当前值。

### GetReputationDescription
`public static TextObject GetReputationDescription(CharacterObject character)`

**用途 / Purpose:** 获取 `reputation description` 的当前值。

### GetDeterministicColorsForCharacter
`public static ValueTuple<uint, uint> GetDeterministicColorsForCharacter(CharacterObject character)`

**用途 / Purpose:** 获取 `deterministic colors for character` 的当前值。

### GetFaceGeneratorFilter
`public static IFaceGeneratorCustomFilter GetFaceGeneratorFilter()`

**用途 / Purpose:** 获取 `face generator filter` 的当前值。

### GetNonconversationPose
`public static string GetNonconversationPose(CharacterObject character)`

**用途 / Purpose:** 获取 `nonconversation pose` 的当前值。

### GetNonconversationFacialIdle
`public static string GetNonconversationFacialIdle(CharacterObject character)`

**用途 / Purpose:** 获取 `nonconversation facial idle` 的当前值。

### GetStandingBodyIdle
`public static string GetStandingBodyIdle(CharacterObject character, PartyBase party)`

**用途 / Purpose:** 获取 `standing body idle` 的当前值。

### GetDefaultFaceIdle
`public static string GetDefaultFaceIdle(CharacterObject character)`

**用途 / Purpose:** 获取 `default face idle` 的当前值。

### FindUpgradeRootOf
`public static CharacterObject FindUpgradeRootOf(CharacterObject character)`

**用途 / Purpose:** 处理 `find upgrade root of` 相关逻辑。

### GetDefaultWeapon
`public static ItemObject GetDefaultWeapon(CharacterObject affectorCharacter)`

**用途 / Purpose:** 获取 `default weapon` 的当前值。

### CanUseItemBasedOnSkill
`public static bool CanUseItemBasedOnSkill(BasicCharacterObject currentCharacter, EquipmentElement itemRosterElement)`

**用途 / Purpose:** 判断当前对象是否可以执行 `use item based on skill`。

### GetPartyMemberFaceSeed
`public static int GetPartyMemberFaceSeed(PartyBase party, BasicCharacterObject character, int rank)`

**用途 / Purpose:** 获取 `party member face seed` 的当前值。

### GetDefaultFaceSeed
`public static int GetDefaultFaceSeed(BasicCharacterObject character, int rank)`

**用途 / Purpose:** 获取 `default face seed` 的当前值。

### SearchForFormationInTroopTree
`public static bool SearchForFormationInTroopTree(CharacterObject baseTroop, FormationClass formation)`

**用途 / Purpose:** 处理 `search for formation in troop tree` 相关逻辑。

### GetTroopTree
`public static IEnumerable<CharacterObject> GetTroopTree(CharacterObject baseTroop, float minTier = -1f, float maxTier = 3.4028235E+38f)`

**用途 / Purpose:** 获取 `troop tree` 的当前值。

### DeleteQuestCharacter
`public static void DeleteQuestCharacter(CharacterObject character, Settlement questSettlement)`

**用途 / Purpose:** 处理 `delete quest character` 相关逻辑。

### GetRandomCompanionTemplateWithPredicate
`public static CharacterObject GetRandomCompanionTemplateWithPredicate(Func<CharacterObject, bool> predicate = null)`

**用途 / Purpose:** 获取 `random companion template with predicate` 的当前值。

## 使用示例

```csharp
CharacterHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)