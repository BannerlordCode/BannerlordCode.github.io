---
title: "GermanTextProcessor"
description: "Auto-generated class reference for GermanTextProcessor."
---
# GermanTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class GermanTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization.TextProcessor.LanguageProcessors/GermanTextProcessor.cs`

## Overview

`GermanTextProcessor` lives in `TaleWorlds.Localization.TextProcessor.LanguageProcessors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization.TextProcessor.LanguageProcessors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ClearTemporaryData
`public override void ClearTemporaryData()`

**Purpose:** Removes all `temporary data` from the current object.

```csharp
// Obtain an instance of GermanTextProcessor from the subsystem API first
GermanTextProcessor germanTextProcessor = ...;
germanTextProcessor.ClearTemporaryData();
```

### ProcessToken
`public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GermanTextProcessor from the subsystem API first
GermanTextProcessor germanTextProcessor = ...;
germanTextProcessor.ProcessToken("example", cursorPos, "example", "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GermanTextProcessor germanTextProcessor = ...;
germanTextProcessor.ClearTemporaryData();
```

## See Also

- [Area Index](../)