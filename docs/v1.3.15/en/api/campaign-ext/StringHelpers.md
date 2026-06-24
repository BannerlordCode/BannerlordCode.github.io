<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StringHelpers`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StringHelpers

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class StringHelpers`
**Area:** campaign-ext

## Overview

`StringHelpers` lives in `Helpers`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `Helpers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SplitCamelCase
`public static string SplitCamelCase(string text)`

**Purpose:** Handles logic related to `split camel case`.

### CamelCaseToSnakeCase
`public static string CamelCaseToSnakeCase(string camelCaseString)`

**Purpose:** Handles logic related to `camel case to snake case`.

### SetSettlementProperties
`public static void SetSettlementProperties(string tag, Settlement settlement, TextObject parent = null, bool isRepeatable = false)`

**Purpose:** Sets the value or state of `settlement properties`.

### SetRepeatableCharacterProperties
`public static void SetRepeatableCharacterProperties(string tag, CharacterObject character, bool includeDetails = false)`

**Purpose:** Sets the value or state of `repeatable character properties`.

### SetCharacterProperties
`public static TextObject SetCharacterProperties(string tag, CharacterObject character, TextObject parent = null, bool includeDetails = false)`

**Purpose:** Sets the value or state of `character properties`.

### SetEffectIncrementTypeTextVariable
`public static void SetEffectIncrementTypeTextVariable(string tag, TextObject description, float bonus, EffectIncrementType effectIncrementType)`

**Purpose:** Sets the value or state of `effect increment type text variable`.

### RemoveDiacritics
`public static string RemoveDiacritics(string originalText)`

**Purpose:** Removes `diacritics` from the current collection or state.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
StringHelpers.SplitCamelCase("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
