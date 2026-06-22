<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StringHelpers`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StringHelpers

**Namespace:** Helpers
**Module:** Helpers
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `StringHelpers` is a class in the `Helpers` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)