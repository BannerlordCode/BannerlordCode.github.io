---
title: "CharacterHelper"
description: "CharacterHelper 的自动生成类参考。"
---
# CharacterHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class CharacterHelper`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/CharacterHelper.cs`

## 概述

`CharacterHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `CharacterHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDeathNotification
`public static TextObject GetDeathNotification(Hero victimHero, Hero killer, KillCharacterAction.KillCharacterActionDetail detail)`

**用途 / Purpose:** 读取并返回当前对象中 「death notification」 的结果。

```csharp
// 静态调用，不需要实例
CharacterHelper.GetDeathNotification(victimHero, killer, detail);
```

### GetDynamicBodyPropertiesBetweenMinMaxRange
`public static DynamicBodyProperties GetDynamicBodyPropertiesBetweenMinMaxRange(CharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 「dynamic body properties between min max range」 的结果。

```csharp
// 静态调用，不需要实例
CharacterHelper.GetDynamicBodyPropertiesBetweenMinMaxRange(character);
```

### GetReputationDescription
`public static TextObject GetReputationDescription(CharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 「reputation description」 的结果。

```csharp
// 静态调用，不需要实例
CharacterHelper.GetReputationDescription(character);
```

### GetFaceGeneratorFilter
`public static IFaceGeneratorCustomFilter GetFaceGeneratorFilter()`

**用途 / Purpose:** 读取并返回当前对象中 「face generator filter」 的结果。

```csharp
// 静态调用，不需要实例
CharacterHelper.GetFaceGeneratorFilter();
```

### GetNonconversationPose
`public static string GetNonconversationPose(CharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 「nonconversation pose」 的结果。

```csharp
// 静态调用，不需要实例
CharacterHelper.GetNonconversationPose(character);
```

### GetNonconversationFacialIdle
`public static string GetNonconversationFacialIdle(CharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 「nonconversation facial idle」 的结果。

```csharp
// 静态调用，不需要实例
CharacterHelper.GetNonconversationFacialIdle(character);
```

### GetStandingBodyIdle
`public static string GetStandingBodyIdle(CharacterObject character, PartyBase party)`

**用途 / Purpose:** 读取并返回当前对象中 「standing body idle」 的结果。

```csharp
// 静态调用，不需要实例
CharacterHelper.GetStandingBodyIdle(character, party);
```

### GetDefaultFaceIdle
`public static string GetDefaultFaceIdle(CharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 「default face idle」 的结果。

```csharp
// 静态调用，不需要实例
CharacterHelper.GetDefaultFaceIdle(character);
```

### FindUpgradeRootOf
`public static CharacterObject FindUpgradeRootOf(CharacterObject character)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「upgrade root of」。

```csharp
// 静态调用，不需要实例
CharacterHelper.FindUpgradeRootOf(character);
```

### GetDefaultWeapon
`public static ItemObject GetDefaultWeapon(CharacterObject affectorCharacter)`

**用途 / Purpose:** 读取并返回当前对象中 「default weapon」 的结果。

```csharp
// 静态调用，不需要实例
CharacterHelper.GetDefaultWeapon(affectorCharacter);
```

### CanUseItem
`public static bool CanUseItem(BasicCharacterObject currentCharacter, EquipmentElement itemRosterElement)`

**用途 / Purpose:** 检查当前对象是否满足 「use item」 的前置条件。

```csharp
// 静态调用，不需要实例
CharacterHelper.CanUseItem(currentCharacter, itemRosterElement);
```

### CanUseItem
`public static bool CanUseItem(BasicCharacterObject currentCharacter, EquipmentElement itemRosterElement, out TextObject reason)`

**用途 / Purpose:** 检查当前对象是否满足 「use item」 的前置条件。

```csharp
// 静态调用，不需要实例
CharacterHelper.CanUseItem(currentCharacter, itemRosterElement, reason);
```

### GetPartyMemberFaceSeed
`public static int GetPartyMemberFaceSeed(PartyBase party, BasicCharacterObject character, int rank)`

**用途 / Purpose:** 读取并返回当前对象中 「party member face seed」 的结果。

```csharp
// 静态调用，不需要实例
CharacterHelper.GetPartyMemberFaceSeed(party, character, 0);
```

### GetDefaultFaceSeed
`public static int GetDefaultFaceSeed(BasicCharacterObject character, int rank)`

**用途 / Purpose:** 读取并返回当前对象中 「default face seed」 的结果。

```csharp
// 静态调用，不需要实例
CharacterHelper.GetDefaultFaceSeed(character, 0);
```

### SearchForFormationInTroopTree
`public static bool SearchForFormationInTroopTree(CharacterObject baseTroop, FormationClass formation)`

**用途 / Purpose:** 搜索满足条件的「for formation in troop tree」并返回匹配结果。

```csharp
// 静态调用，不需要实例
CharacterHelper.SearchForFormationInTroopTree(baseTroop, formation);
```

### GetTroopTree
`public static IEnumerable<CharacterObject> GetTroopTree(CharacterObject baseTroop, float minTier = -1f, float maxTier = float.MaxValue)`

**用途 / Purpose:** 读取并返回当前对象中 「troop tree」 的结果。

```csharp
// 静态调用，不需要实例
CharacterHelper.GetTroopTree(baseTroop, 0, 0);
```

### DeleteQuestCharacter
`public static void DeleteQuestCharacter(CharacterObject character, Settlement questSettlement)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
CharacterHelper.DeleteQuestCharacter(character, questSettlement);
```

### GetRandomCompanionTemplateWithPredicate
`public static CharacterObject GetRandomCompanionTemplateWithPredicate(Func<CharacterObject, bool> predicate = null)`

**用途 / Purpose:** 读取并返回当前对象中 「random companion template with predicate」 的结果。

```csharp
// 静态调用，不需要实例
CharacterHelper.GetRandomCompanionTemplateWithPredicate(func<CharacterObject, false);
```

## 使用示例

```csharp
CharacterHelper.Initialize();
```

## 参见

- [本区域目录](../)