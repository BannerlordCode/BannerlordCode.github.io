---
title: "StringHelpers"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StringHelpers`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StringHelpers

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class StringHelpers`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/StringHelpers.cs`

## Overview

`StringHelpers` lives in `Helpers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
StringHelpers.SplitCamelCase("example");
```

## See Also

- [Complete Class Catalog](../catalog)