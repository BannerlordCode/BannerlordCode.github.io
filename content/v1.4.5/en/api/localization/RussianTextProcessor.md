---
title: "RussianTextProcessor"
description: "Auto-generated class reference for RussianTextProcessor."
---
# RussianTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class RussianTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization.TextProcessor.LanguageProcessors/RussianTextProcessor.cs`

## Overview

`RussianTextProcessor` lives in `TaleWorlds.Localization.TextProcessor.LanguageProcessors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization.TextProcessor.LanguageProcessors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ClearTemporaryData
`public override void ClearTemporaryData()`

**Purpose:** Removes all temporary data from the this instance.

```csharp
// Obtain an instance of RussianTextProcessor from the subsystem API first
RussianTextProcessor russianTextProcessor = ...;
russianTextProcessor.ClearTemporaryData();
```

### ProcessToken
`public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`

**Purpose:** Executes the ProcessToken logic.

```csharp
// Obtain an instance of RussianTextProcessor from the subsystem API first
RussianTextProcessor russianTextProcessor = ...;
russianTextProcessor.ProcessToken("example", cursorPos, "example", "example");
```

### PrepareNounCheckString
`public string PrepareNounCheckString(string noun)`

**Purpose:** Finishes prerequisite setup for the upcoming noun check string operation.

```csharp
// Obtain an instance of RussianTextProcessor from the subsystem API first
RussianTextProcessor russianTextProcessor = ...;
var result = russianTextProcessor.PrepareNounCheckString("example");
```

### PrepareAdjectiveCheckString
`public string PrepareAdjectiveCheckString(string adj)`

**Purpose:** Finishes prerequisite setup for the upcoming adjective check string operation.

```csharp
// Obtain an instance of RussianTextProcessor from the subsystem API first
RussianTextProcessor russianTextProcessor = ...;
var result = russianTextProcessor.PrepareAdjectiveCheckString("example");
```

### GetProcessedNouns
`public static string GetProcessedNouns(string str, string gender, string tokens = null)`

**Purpose:** Reads and returns the processed nouns value held by the this instance.

```csharp
// Static call; no instance required
RussianTextProcessor.GetProcessedNouns("example", "example", "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RussianTextProcessor russianTextProcessor = ...;
russianTextProcessor.ClearTemporaryData();
```

## See Also

- [Area Index](../)