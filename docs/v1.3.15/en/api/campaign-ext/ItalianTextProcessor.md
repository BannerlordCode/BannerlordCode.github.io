<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItalianTextProcessor`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItalianTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class ItalianTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`
**File:** `TaleWorlds.Localization/TextProcessor/LanguageProcessors/ItalianTextProcessor.cs`

## Overview

`ItalianTextProcessor` lives in `TaleWorlds.Localization.TextProcessor.LanguageProcessors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization.TextProcessor.LanguageProcessors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WordGroups` | `public static Dictionary<string, ValueTuple<string, int>> WordGroups { get; }` |
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
var value = new ItalianTextProcessor();
value.ProcessToken("example", cursorPos, "example", "example");
```

## See Also

- [Complete Class Catalog](../catalog)