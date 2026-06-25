---
title: "TextOutput"
description: "Auto-generated class reference for TextOutput."
---
# TextOutput

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `internal class TextOutput`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/TextOutput.cs`

## Overview

`TextOutput` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TextHeight` | `public float TextHeight { get; }` |
| `TotalLineScale` | `public float TotalLineScale { get; }` |
| `MaxLineHeight` | `public float MaxLineHeight { get; }` |
| `MaxLineWidth` | `public float MaxLineWidth { get; }` |
| `MaxLineScale` | `public float MaxLineScale { get; }` |
| `Tokens` | `public IEnumerable<TextTokenOutput> Tokens { get; }` |
| `TokensWithNewLines` | `public IEnumerable<TextTokenOutput> TokensWithNewLines { get; }` |

## Key Methods

### AddNewLine
`public TextLineOutput AddNewLine(bool currentLineEnded, float newLineBaseHeight = 0f)`

**Purpose:** **Purpose:** Adds new line to the current collection or state.

```csharp
// Obtain an instance of TextOutput from the subsystem API first
TextOutput textOutput = ...;
var result = textOutput.AddNewLine(false, 0);
```

### AddToken
`public void AddToken(TextToken textToken, float tokenWidth, float scaleValue, string style = "Default", float tokenHeight = -1f)`

**Purpose:** **Purpose:** Adds token to the current collection or state.

```csharp
// Obtain an instance of TextOutput from the subsystem API first
TextOutput textOutput = ...;
textOutput.AddToken(textToken, 0, 0, "example", 0);
```

### RemoveTokensFromEnd
`public List<TextTokenOutput> RemoveTokensFromEnd(int numberOfTokensToRemove)`

**Purpose:** **Purpose:** Removes tokens from end from the current collection or state.

```csharp
// Obtain an instance of TextOutput from the subsystem API first
TextOutput textOutput = ...;
var result = textOutput.RemoveTokensFromEnd(0);
```

### GetLine
`public TextLineOutput GetLine(int i)`

**Purpose:** **Purpose:** Reads and returns the line value held by the this instance.

```csharp
// Obtain an instance of TextOutput from the subsystem API first
TextOutput textOutput = ...;
var result = textOutput.GetLine(0);
```

### Clear
`public void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of TextOutput from the subsystem API first
TextOutput textOutput = ...;
textOutput.Clear();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TextOutput textOutput = ...;
textOutput.AddNewLine(false, 0);
```

## See Also

- [Area Index](../)