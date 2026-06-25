---
title: "ItalianTextProcessor"
description: "Auto-generated class reference for ItalianTextProcessor."
---
# ItalianTextProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor.LanguageProcessors
**Module:** TaleWorlds.Localization
**Type:** `public class ItalianTextProcessor : LanguageSpecificTextProcessor`
**Base:** `LanguageSpecificTextProcessor`
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization.TextProcessor.LanguageProcessors/ItalianTextProcessor.cs`

## Overview

`ItalianTextProcessor` lives in `TaleWorlds.Localization.TextProcessor.LanguageProcessors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization.TextProcessor.LanguageProcessors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ProcessToken
`public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)`

**Purpose:** Executes the ProcessToken logic.

```csharp
// Obtain an instance of ItalianTextProcessor from the subsystem API first
ItalianTextProcessor italianTextProcessor = ...;
italianTextProcessor.ProcessToken("example", cursorPos, "example", "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItalianTextProcessor italianTextProcessor = ...;
italianTextProcessor.ProcessToken("example", cursorPos, "example", "example");
```

## See Also

- [Area Index](../)