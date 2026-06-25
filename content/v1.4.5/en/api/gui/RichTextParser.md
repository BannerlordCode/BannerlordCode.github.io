---
title: "RichTextParser"
description: "Auto-generated class reference for RichTextParser."
---
# RichTextParser

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class RichTextParser`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/RichTextParser.cs`

## Overview

`RichTextParser` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Parse
`public static List<TextToken> Parse(string text)`

**Purpose:** **Purpose:** Parses external input into a parse the current system understands.

```csharp
// Static call; no instance required
RichTextParser.Parse("example");
```

## Usage Example

```csharp
RichTextParser.Parse("example");
```

## See Also

- [Area Index](../)