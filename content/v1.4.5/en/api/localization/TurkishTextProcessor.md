---
title: "TurkishTextProcessor"
description: "Auto-generated class reference for TurkishTextProcessor."
---
# TurkishTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class TurkishTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization.TextProcessor.LanguageProcessors/TurkishTextProcessor.cs`

## Overview

`TurkishTextProcessor` lives in `TaleWorlds.Localization.TextProcessor.LanguageProcessors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization.TextProcessor.LanguageProcessors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LinkList` | `public static List<string> LinkList { get; }` |

## Key Methods

### ProcessToken
`public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TurkishTextProcessor from the subsystem API first
TurkishTextProcessor turkishTextProcessor = ...;
turkishTextProcessor.ProcessToken("example", cursorPos, "example", "example");
```

### ClearTemporaryData
`public override void ClearTemporaryData()`

**Purpose:** Removes all `temporary data` from the current object.

```csharp
// Obtain an instance of TurkishTextProcessor from the subsystem API first
TurkishTextProcessor turkishTextProcessor = ...;
turkishTextProcessor.ClearTemporaryData();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TurkishTextProcessor turkishTextProcessor = ...;
turkishTextProcessor.ProcessToken("example", cursorPos, "example", "example");
```

## See Also

- [Area Index](../)