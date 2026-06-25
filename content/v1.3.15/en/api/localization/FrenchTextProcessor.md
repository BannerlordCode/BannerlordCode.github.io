---
title: "FrenchTextProcessor"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FrenchTextProcessor`
- [← Area / Back to localization](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FrenchTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class FrenchTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`
**Area:** localization

## Overview

`FrenchTextProcessor` lives in `TaleWorlds.Localization.TextProcessor.LanguageProcessors`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Localization.TextProcessor.LanguageProcessors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WordGroups` | `public static Dictionary<string, ValueTuple<string, int, bool>> WordGroups { get; }` |
| `CultureInfoForLanguage` | `public override CultureInfo CultureInfoForLanguage { get; }` |

## Key Methods

### ProcessToken
`public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`

**Purpose:** Handles logic related to `process token`.

### ClearTemporaryData
`public override void ClearTemporaryData()`

**Purpose:** Handles logic related to `clear temporary data`.

## Usage Example

```csharp
// First obtain a FrenchTextProcessor instance from game state, then call one of its public methods
var value = new FrenchTextProcessor();
value.ProcessToken("example", cursorPos, "example", "example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-localization)
