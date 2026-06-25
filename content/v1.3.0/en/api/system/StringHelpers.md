---
title: "StringHelpers"
description: "Auto-generated class reference for StringHelpers."
---
# StringHelpers

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class StringHelpers`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/StringHelpers.cs`

## Overview

`StringHelpers` lives in `Helpers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Helpers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SplitCamelCase
`public static string SplitCamelCase(string text)`

**Purpose:** **Purpose:** Splits camel case into multiple parts or sub-items.

```csharp
// Static call; no instance required
StringHelpers.SplitCamelCase("example");
```

### CamelCaseToSnakeCase
`public static string CamelCaseToSnakeCase(string camelCaseString)`

**Purpose:** **Purpose:** Executes the CamelCaseToSnakeCase logic.

```csharp
// Static call; no instance required
StringHelpers.CamelCaseToSnakeCase("example");
```

### SetSettlementProperties
`public static void SetSettlementProperties(string tag, Settlement settlement, TextObject parent = null, bool isRepeatable = false)`

**Purpose:** **Purpose:** Assigns a new value to settlement properties and updates the object's internal state.

```csharp
// Static call; no instance required
StringHelpers.SetSettlementProperties("example", settlement, null, false);
```

### SetRepeatableCharacterProperties
`public static void SetRepeatableCharacterProperties(string tag, CharacterObject character, bool includeDetails = false)`

**Purpose:** **Purpose:** Assigns a new value to repeatable character properties and updates the object's internal state.

```csharp
// Static call; no instance required
StringHelpers.SetRepeatableCharacterProperties("example", character, false);
```

### SetCharacterProperties
`public static TextObject SetCharacterProperties(string tag, CharacterObject character, TextObject parent = null, bool includeDetails = false)`

**Purpose:** **Purpose:** Assigns a new value to character properties and updates the object's internal state.

```csharp
// Static call; no instance required
StringHelpers.SetCharacterProperties("example", character, null, false);
```

### RemoveDiacritics
`public static string RemoveDiacritics(string originalText)`

**Purpose:** **Purpose:** Removes diacritics from the current collection or state.

```csharp
// Static call; no instance required
StringHelpers.RemoveDiacritics("example");
```

## Usage Example

```csharp
StringHelpers.SplitCamelCase("example");
```

## See Also

- [Area Index](../)