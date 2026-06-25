---
title: "RichTextTagParser"
description: "Auto-generated class reference for RichTextTagParser."
---
# RichTextTagParser

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class RichTextTagParser`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/RichTextTagParser.cs`

## Overview

`RichTextTagParser` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Parse
`public static RichTextTag Parse(string text2, int tagBeginIndex, int tagEndIndex)`

**Purpose:** Parses external input into a `parse` the current system understands.

```csharp
// Static call; no instance required
RichTextTagParser.Parse("example", 0, 0);
```

## Usage Example

```csharp
RichTextTagParser.Parse("example", 0, 0);
```

## See Also

- [Area Index](../)