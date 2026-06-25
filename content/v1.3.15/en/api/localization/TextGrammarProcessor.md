---
title: "TextGrammarProcessor"
description: "Auto-generated class reference for TextGrammarProcessor."
---
# TextGrammarProcessor

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `public static class TextGrammarProcessor`
**Base:** none
**File:** `TaleWorlds.Localization/TextProcessor/TextGrammarProcessor.cs`

## Overview

`TextGrammarProcessor` lives in `TaleWorlds.Localization.TextProcessor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization.TextProcessor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Process
`public static string Process(MBTextModel dataRepresentation, TextProcessingContext textContext, TextObject parent = null)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
TextGrammarProcessor.Process(dataRepresentation, textContext, null);
```

## Usage Example

```csharp
TextGrammarProcessor.Process(dataRepresentation, textContext, null);
```

## See Also

- [Area Index](../)