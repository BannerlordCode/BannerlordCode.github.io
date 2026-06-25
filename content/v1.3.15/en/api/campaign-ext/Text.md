---
title: "Text"
description: "Auto-generated class reference for Text."
---
# Text

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class Text : IText`
**Base:** `IText`
**File:** `TaleWorlds.TwoDimension/Text.cs`

## Overview

`Text` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentLanguage` | `public ILanguage CurrentLanguage { get; }` |
| `ScaleToFitTextInLayout` | `public float ScaleToFitTextInLayout { get; }` |
| `LineCount` | `public int LineCount { get; }` |
| `Width` | `public int Width { get; }` |
| `Height` | `public int Height { get; }` |
| `Font` | `public Font Font { get; set; }` |
| `HorizontalAlignment` | `public TextHorizontalAlignment HorizontalAlignment { get; set; }` |
| `VerticalAlignment` | `public TextVerticalAlignment VerticalAlignment { get; set; }` |
| `FontSize` | `public float FontSize { get; set; }` |
| `Value` | `public string Value { get; set; }` |
| `SkipLineOnContainerExceeded` | `public bool SkipLineOnContainerExceeded { get; set; }` |
| `CanBreakWords` | `public bool CanBreakWords { get; set; }` |
| `ResizeTextOnOverflow` | `public bool ResizeTextOnOverflow { get; set; }` |

## Key Methods

### GetPreferredSize
`public Vector2 GetPreferredSize(bool fixedWidth, float widthSize, bool fixedHeight, float heightSize, SpriteData spriteData, float renderScale)`

**Purpose:** Reads and returns the preferred size value held by the this instance.

```csharp
// Obtain an instance of Text from the subsystem API first
Text text = ...;
var result = text.GetPreferredSize(false, 0, false, 0, spriteData, 0);
```

### UpdateSize
`public void UpdateSize(int width, int height)`

**Purpose:** Recalculates and stores the latest representation of size.

```csharp
// Obtain an instance of Text from the subsystem API first
Text text = ...;
text.UpdateSize(0, 0);
```

### SetAllDirty
`public void SetAllDirty()`

**Purpose:** Assigns a new value to all dirty and updates the object's internal state.

```csharp
// Obtain an instance of Text from the subsystem API first
Text text = ...;
text.SetAllDirty();
```

### GetParts
`public List<TextPart> GetParts()`

**Purpose:** Reads and returns the parts value held by the this instance.

```csharp
// Obtain an instance of Text from the subsystem API first
Text text = ...;
var result = text.GetParts();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Text text = ...;
text.GetPreferredSize(false, 0, false, 0, spriteData, 0);
```

## See Also

- [Area Index](../)