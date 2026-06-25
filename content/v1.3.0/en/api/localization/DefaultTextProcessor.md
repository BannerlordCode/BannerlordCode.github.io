---
title: "DefaultTextProcessor"
description: "Auto-generated class reference for DefaultTextProcessor."
---
# DefaultTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `public class DefaultTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`
**File:** `TaleWorlds.Localization/TextProcessor/DefaultTextProcessor.cs`

## Overview

`DefaultTextProcessor` lives in `TaleWorlds.Localization.TextProcessor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization.TextProcessor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CultureInfoForLanguage` | `public override CultureInfo CultureInfoForLanguage { get; }` |

## Key Methods

### ProcessToken
`public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`

**Purpose:** **Purpose:** Executes the ProcessToken logic.

```csharp
// Obtain an instance of DefaultTextProcessor from the subsystem API first
DefaultTextProcessor defaultTextProcessor = ...;
defaultTextProcessor.ProcessToken("example", cursorPos, "example", "example");
```

### ClearTemporaryData
`public override void ClearTemporaryData()`

**Purpose:** **Purpose:** Removes all temporary data from the this instance.

```csharp
// Obtain an instance of DefaultTextProcessor from the subsystem API first
DefaultTextProcessor defaultTextProcessor = ...;
defaultTextProcessor.ClearTemporaryData();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefaultTextProcessor defaultTextProcessor = ...;
defaultTextProcessor.ProcessToken("example", cursorPos, "example", "example");
```

## See Also

- [Area Index](../)