---
title: "PolishTextProcessor"
description: "Auto-generated class reference for PolishTextProcessor."
---
# PolishTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class PolishTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization.TextProcessor.LanguageProcessors/PolishTextProcessor.cs`

## Overview

`PolishTextProcessor` lives in `TaleWorlds.Localization.TextProcessor.LanguageProcessors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization.TextProcessor.LanguageProcessors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ClearTemporaryData
`public override void ClearTemporaryData()`

**Purpose:** Removes all temporary data from the this instance.

```csharp
// Obtain an instance of PolishTextProcessor from the subsystem API first
PolishTextProcessor polishTextProcessor = ...;
polishTextProcessor.ClearTemporaryData();
```

### ProcessToken
`public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`

**Purpose:** Executes the ProcessToken logic.

```csharp
// Obtain an instance of PolishTextProcessor from the subsystem API first
PolishTextProcessor polishTextProcessor = ...;
polishTextProcessor.ProcessToken("example", cursorPos, "example", "example");
```

### GetProcessedNouns
`public static string GetProcessedNouns(string str, string gender, string tokens = null)`

**Purpose:** Reads and returns the processed nouns value held by the this instance.

```csharp
// Static call; no instance required
PolishTextProcessor.GetProcessedNouns("example", "example", "example");
```

### GetProcessedAdjectives
`public static string GetProcessedAdjectives(string str, string gender, string tokens = null)`

**Purpose:** Reads and returns the processed adjectives value held by the this instance.

```csharp
// Static call; no instance required
PolishTextProcessor.GetProcessedAdjectives("example", "example", "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PolishTextProcessor polishTextProcessor = ...;
polishTextProcessor.ClearTemporaryData();
```

## See Also

- [Area Index](../)