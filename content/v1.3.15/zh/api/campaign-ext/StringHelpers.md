---
title: "StringHelpers"
description: "StringHelpers 的自动生成类参考。"
---
# StringHelpers

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class StringHelpers`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/StringHelpers.cs`

## 概述

`StringHelpers` 位于 `Helpers`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Helpers` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SplitCamelCase
`public static string SplitCamelCase(string text)`

**用途 / Purpose:** **用途 / Purpose:** 将camel case拆分为多个部分或子项。

```csharp
// 静态调用，不需要实例
StringHelpers.SplitCamelCase("example");
```

### CamelCaseToSnakeCase
`public static string CamelCaseToSnakeCase(string camelCaseString)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CamelCaseToSnakeCase 对应的操作。

```csharp
// 静态调用，不需要实例
StringHelpers.CamelCaseToSnakeCase("example");
```

### SetSettlementProperties
`public static void SetSettlementProperties(string tag, Settlement settlement, TextObject parent = null, bool isRepeatable = false)`

**用途 / Purpose:** **用途 / Purpose:** 为 settlement properties 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
StringHelpers.SetSettlementProperties("example", settlement, null, false);
```

### SetRepeatableCharacterProperties
`public static void SetRepeatableCharacterProperties(string tag, CharacterObject character, bool includeDetails = false)`

**用途 / Purpose:** **用途 / Purpose:** 为 repeatable character properties 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
StringHelpers.SetRepeatableCharacterProperties("example", character, false);
```

### SetCharacterProperties
`public static TextObject SetCharacterProperties(string tag, CharacterObject character, TextObject parent = null, bool includeDetails = false)`

**用途 / Purpose:** **用途 / Purpose:** 为 character properties 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
StringHelpers.SetCharacterProperties("example", character, null, false);
```

### SetEffectIncrementTypeTextVariable
`public static void SetEffectIncrementTypeTextVariable(string tag, TextObject description, float bonus, EffectIncrementType effectIncrementType)`

**用途 / Purpose:** **用途 / Purpose:** 为 effect increment type text variable 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
StringHelpers.SetEffectIncrementTypeTextVariable("example", description, 0, effectIncrementType);
```

### RemoveDiacritics
`public static string RemoveDiacritics(string originalText)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 diacritics。

```csharp
// 静态调用，不需要实例
StringHelpers.RemoveDiacritics("example");
```

## 使用示例

```csharp
StringHelpers.SplitCamelCase("example");
```

## 参见

- [本区域目录](../)