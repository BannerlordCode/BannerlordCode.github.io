<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RussianTextProcessor`
- [← Area / Back to localization](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RussianTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class RussianTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`
**File:** `TaleWorlds.Localization/TextProcessor/LanguageProcessors/RussianTextProcessor.cs`

## Overview

`RussianTextProcessor` lives in `TaleWorlds.Localization.TextProcessor.LanguageProcessors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
var value = new RussianTextProcessor();
value.ClearTemporaryData();
```

## See Also

- [Complete Class Catalog](../catalog)