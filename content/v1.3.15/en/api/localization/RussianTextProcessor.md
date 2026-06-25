---
title: "RussianTextProcessor"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RussianTextProcessor`
- [← Area / Back to localization](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RussianTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class RussianTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`
**Area:** localization

## Overview

`RussianTextProcessor` lives in `TaleWorlds.Localization.TextProcessor.LanguageProcessors`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Localization.TextProcessor.LanguageProcessors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CultureInfoForLanguage` | `public override CultureInfo CultureInfoForLanguage { get; }` |

## Key Methods

### ClearTemporaryData
`public override void ClearTemporaryData()`

**Purpose:** Handles logic related to `clear temporary data`.

### ProcessToken
`public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`

**Purpose:** Handles logic related to `process token`.

### PrepareNounCheckString
`public string PrepareNounCheckString(string noun)`

**Purpose:** Handles logic related to `prepare noun check string`.

### PrepareAdjectiveCheckString
`public string PrepareAdjectiveCheckString(string adj)`

**Purpose:** Handles logic related to `prepare adjective check string`.

### GetProcessedNouns
`public static string GetProcessedNouns(string str, string gender, string tokens = null)`

**Purpose:** Gets the current value of `processed nouns`.

## Usage Example

```csharp
// First obtain a RussianTextProcessor instance from game state, then call one of its public methods
var value = new RussianTextProcessor();
value.ClearTemporaryData();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-localization)
