<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StringHelpers`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StringHelpers

**命名空间:** Helpers
**模块:** Helpers
**类型:** `public static class StringHelpers`
**领域:** campaign-ext

## 概述

`StringHelpers` 位于 `Helpers`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `Helpers` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SplitCamelCase
`public static string SplitCamelCase(string text)`

**用途 / Purpose:** 处理 `split camel case` 相关逻辑。

### CamelCaseToSnakeCase
`public static string CamelCaseToSnakeCase(string camelCaseString)`

**用途 / Purpose:** 处理 `camel case to snake case` 相关逻辑。

### SetSettlementProperties
`public static void SetSettlementProperties(string tag, Settlement settlement, TextObject parent = null, bool isRepeatable = false)`

**用途 / Purpose:** 设置 `settlement properties` 的值或状态。

### SetRepeatableCharacterProperties
`public static void SetRepeatableCharacterProperties(string tag, CharacterObject character, bool includeDetails = false)`

**用途 / Purpose:** 设置 `repeatable character properties` 的值或状态。

### SetCharacterProperties
`public static TextObject SetCharacterProperties(string tag, CharacterObject character, TextObject parent = null, bool includeDetails = false)`

**用途 / Purpose:** 设置 `character properties` 的值或状态。

### SetEffectIncrementTypeTextVariable
`public static void SetEffectIncrementTypeTextVariable(string tag, TextObject description, float bonus, EffectIncrementType effectIncrementType)`

**用途 / Purpose:** 设置 `effect increment type text variable` 的值或状态。

### RemoveDiacritics
`public static string RemoveDiacritics(string originalText)`

**用途 / Purpose:** 从当前集合/状态中移除 `diacritics`。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
StringHelpers.SplitCamelCase("example");
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
