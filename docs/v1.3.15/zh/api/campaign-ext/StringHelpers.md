<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StringHelpers`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StringHelpers

**命名空间:** Helpers
**模块:** Helpers
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`StringHelpers` 是 `Helpers` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### SplitCamelCase

```csharp
public static string SplitCamelCase(string text)
```

### CamelCaseToSnakeCase

```csharp
public static string CamelCaseToSnakeCase(string camelCaseString)
```

### SetSettlementProperties

```csharp
public static void SetSettlementProperties(string tag, Settlement settlement, TextObject parent = null, bool isRepeatable = false)
```

### SetRepeatableCharacterProperties

```csharp
public static void SetRepeatableCharacterProperties(string tag, CharacterObject character, bool includeDetails = false)
```

### SetCharacterProperties

```csharp
public static TextObject SetCharacterProperties(string tag, CharacterObject character, TextObject parent = null, bool includeDetails = false)
```

### SetEffectIncrementTypeTextVariable

```csharp
public static void SetEffectIncrementTypeTextVariable(string tag, TextObject description, float bonus, EffectIncrementType effectIncrementType)
```

### RemoveDiacritics

```csharp
public static string RemoveDiacritics(string originalText)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)