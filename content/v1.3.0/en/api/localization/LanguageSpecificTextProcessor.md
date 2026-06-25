---
title: "LanguageSpecificTextProcessor"
description: "Auto-generated class reference for LanguageSpecificTextProcessor."
---
# LanguageSpecificTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `public abstract class LanguageSpecificTextProcessor`
**Base:** none
**File:** `TaleWorlds.Localization/TextProcessor/LanguageSpecificTextProcessor.cs`

## Overview

`LanguageSpecificTextProcessor` lives in `TaleWorlds.Localization.TextProcessor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization.TextProcessor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CultureInfoForLanguage` | `public abstract CultureInfo CultureInfoForLanguage { get; }` |

## Key Methods

### ProcessToken
`public abstract void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`

**Purpose:** **Purpose:** Executes the ProcessToken logic.

```csharp
// Obtain an instance of LanguageSpecificTextProcessor from the subsystem API first
LanguageSpecificTextProcessor languageSpecificTextProcessor = ...;
languageSpecificTextProcessor.ProcessToken("example", cursorPos, "example", "example");
```

### ClearTemporaryData
`public abstract void ClearTemporaryData()`

**Purpose:** **Purpose:** Removes all temporary data from the this instance.

```csharp
// Obtain an instance of LanguageSpecificTextProcessor from the subsystem API first
LanguageSpecificTextProcessor languageSpecificTextProcessor = ...;
languageSpecificTextProcessor.ClearTemporaryData();
```

### Process
`public string Process(string text)`

**Purpose:** **Purpose:** Executes the Process logic.

```csharp
// Obtain an instance of LanguageSpecificTextProcessor from the subsystem API first
LanguageSpecificTextProcessor languageSpecificTextProcessor = ...;
var result = languageSpecificTextProcessor.Process("example");
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
LanguageSpecificTextProcessor instance = ...;
```

## See Also

- [Area Index](../)