---
title: "LanguageSpecificTextProcessor"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LanguageSpecificTextProcessor`
- [← Area / Back to localization](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LanguageSpecificTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `public abstract class LanguageSpecificTextProcessor`
**Area:** localization

## Overview

`LanguageSpecificTextProcessor` lives in `TaleWorlds.Localization.TextProcessor`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Localization.TextProcessor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CultureInfoForLanguage` | `public abstract CultureInfo CultureInfoForLanguage { get; }` |

## Key Methods

### ProcessToken
`public abstract void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`

**Purpose:** Handles logic related to `process token`.

### ClearTemporaryData
`public abstract void ClearTemporaryData()`

**Purpose:** Handles logic related to `clear temporary data`.

### Process
`public string Process(string text)`

**Purpose:** Handles logic related to `process`.

## Usage Example

```csharp
var implementation = new CustomLanguageSpecificTextProcessor();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-localization)
