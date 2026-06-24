<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextGrammarProcessor`
- [← Area / Back to localization](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextGrammarProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `public static class TextGrammarProcessor`
**Area:** localization

## Overview

`TextGrammarProcessor` lives in `TaleWorlds.Localization.TextProcessor`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Localization.TextProcessor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Process
`public static string Process(MBTextModel dataRepresentation, TextProcessingContext textContext, TextObject parent = null)`

**Purpose:** Handles logic related to `process`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
TextGrammarProcessor.Process(dataRepresentation, textContext, null);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-localization)
