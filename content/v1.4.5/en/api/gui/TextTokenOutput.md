---
title: "TextTokenOutput"
description: "Auto-generated class reference for TextTokenOutput."
---
# TextTokenOutput

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `internal class TextTokenOutput`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/TextTokenOutput.cs`

## Overview

`TextTokenOutput` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `X` | `public float X { get; }` |
| `Y` | `public float Y { get; }` |
| `Width` | `public float Width { get; }` |
| `Height` | `public float Height { get; }` |
| `Scale` | `public float Scale { get; }` |
| `Rectangle` | `public SimpleRectangle Rectangle { get; }` |
| `Token` | `public TextToken Token { get; }` |
| `Style` | `public string Style { get; }` |

## Key Methods

### SetPosition
`public void SetPosition(float x, float y)`

**Purpose:** Assigns a new value to position and updates the object's internal state.

```csharp
// Obtain an instance of TextTokenOutput from the subsystem API first
TextTokenOutput textTokenOutput = ...;
textTokenOutput.SetPosition(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TextTokenOutput textTokenOutput = ...;
textTokenOutput.SetPosition(0, 0);
```

## See Also

- [Area Index](../)