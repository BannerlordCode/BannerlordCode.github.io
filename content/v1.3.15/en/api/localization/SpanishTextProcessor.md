---
title: "SpanishTextProcessor"
description: "Auto-generated class reference for SpanishTextProcessor."
---
# SpanishTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class SpanishTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`
**File:** `TaleWorlds.Localization/TextProcessor/LanguageProcessors/SpanishTextProcessor.cs`

## Overview

`SpanishTextProcessor` lives in `TaleWorlds.Localization.TextProcessor.LanguageProcessors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization.TextProcessor.LanguageProcessors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CultureInfoForLanguage` | `public override CultureInfo CultureInfoForLanguage { get; }` |

## Key Methods

### ProcessToken
`public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`

**Purpose:** **Purpose:** Executes the ProcessToken logic.

```csharp
// Obtain an instance of SpanishTextProcessor from the subsystem API first
SpanishTextProcessor spanishTextProcessor = ...;
spanishTextProcessor.ProcessToken("example", cursorPos, "example", "example");
```

### ClearTemporaryData
`public override void ClearTemporaryData()`

**Purpose:** **Purpose:** Removes all temporary data from the this instance.

```csharp
// Obtain an instance of SpanishTextProcessor from the subsystem API first
SpanishTextProcessor spanishTextProcessor = ...;
spanishTextProcessor.ClearTemporaryData();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SpanishTextProcessor spanishTextProcessor = ...;
spanishTextProcessor.ProcessToken("example", cursorPos, "example", "example");
```

## See Also

- [Area Index](../)