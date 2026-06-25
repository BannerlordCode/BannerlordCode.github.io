---
title: "Tokenizer"
description: "Auto-generated class reference for Tokenizer."
---
# Tokenizer

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `internal class Tokenizer`
**Base:** none
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization.TextProcessor/Tokenizer.cs`

## Overview

`Tokenizer` lives in `TaleWorlds.Localization.TextProcessor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization.TextProcessor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tokenize
`public List<MBTextToken> Tokenize(string text)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Tokenizer from the subsystem API first
Tokenizer tokenizer = ...;
var result = tokenizer.Tokenize("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Tokenizer tokenizer = ...;
tokenizer.Tokenize("example");
```

## See Also

- [Area Index](../)