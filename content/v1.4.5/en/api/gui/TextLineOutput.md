---
title: "TextLineOutput"
description: "Auto-generated class reference for TextLineOutput."
---
# TextLineOutput

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `internal class TextLineOutput`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/TextLineOutput.cs`

## Overview

`TextLineOutput` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Width` | `public float Width { get; }` |
| `TextWidth` | `public float TextWidth { get; }` |
| `LineEnded` | `public bool LineEnded { get; }` |
| `EmptyCharacterCount` | `public int EmptyCharacterCount { get; }` |
| `Height` | `public float Height { get; }` |
| `MaxScale` | `public float MaxScale { get; }` |

## Key Methods

### AddToken
`public void AddToken(TextToken textToken, float tokenWidth, float tokenHeight, string style, float scaleValue)`

**Purpose:** Adds token to the current collection or state.

```csharp
// Obtain an instance of TextLineOutput from the subsystem API first
TextLineOutput textLineOutput = ...;
textLineOutput.AddToken(textToken, 0, 0, "example", 0);
```

### GetToken
`public TextToken GetToken(int i)`

**Purpose:** Reads and returns the token value held by the this instance.

```csharp
// Obtain an instance of TextLineOutput from the subsystem API first
TextLineOutput textLineOutput = ...;
var result = textLineOutput.GetToken(0);
```

### GetTokenOutput
`public TextTokenOutput GetTokenOutput(int i)`

**Purpose:** Reads and returns the token output value held by the this instance.

```csharp
// Obtain an instance of TextLineOutput from the subsystem API first
TextLineOutput textLineOutput = ...;
var result = textLineOutput.GetTokenOutput(0);
```

### RemoveTokenFromEnd
`public TextTokenOutput RemoveTokenFromEnd()`

**Purpose:** Removes token from end from the current collection or state.

```csharp
// Obtain an instance of TextLineOutput from the subsystem API first
TextLineOutput textLineOutput = ...;
var result = textLineOutput.RemoveTokenFromEnd();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TextLineOutput textLineOutput = ...;
textLineOutput.AddToken(textToken, 0, 0, "example", 0);
```

## See Also

- [Area Index](../)