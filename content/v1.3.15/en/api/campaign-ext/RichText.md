---
title: "RichText"
description: "Auto-generated class reference for RichText."
---
# RichText

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class RichText : IText`
**Base:** `IText`
**File:** `TaleWorlds.TwoDimension/RichText.cs`

## Overview

`RichText` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentStyle` | `public string CurrentStyle { get; set; }` |
| `TextHeight` | `public int TextHeight { get; }` |
| `StyleFontContainer` | `public StyleFontContainer StyleFontContainer { get; }` |
| `HorizontalAlignment` | `public TextHorizontalAlignment HorizontalAlignment { get; set; }` |
| `VerticalAlignment` | `public TextVerticalAlignment VerticalAlignment { get; set; }` |
| `Value` | `public string Value { get; set; }` |
| `FocusedLinkGroup` | `public RichTextLinkGroup FocusedLinkGroup { get; set; }` |
| `SkipLineOnContainerExceeded` | `public bool SkipLineOnContainerExceeded { get; set; }` |
| `CanBreakWords` | `public bool CanBreakWords { get; set; }` |

## Key Methods

### Update
`public virtual void Update(float dt, SpriteData spriteData, Vector2 focusPosition, bool focus, bool isFixedWidth, bool isFixedHeight, float renderScale)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of RichText from the subsystem API first
RichText richText = ...;
richText.Update(0, spriteData, focusPosition, false, false, false, 0);
```

### SetAllDirty
`public void SetAllDirty()`

**Purpose:** **Purpose:** Assigns a new value to all dirty and updates the object's internal state.

```csharp
// Obtain an instance of RichText from the subsystem API first
RichText richText = ...;
richText.SetAllDirty();
```

### GetPreferredSize
`public Vector2 GetPreferredSize(bool fixedWidth, float widthSize, bool fixedHeight, float heightSize, SpriteData spriteData, float renderScale)`

**Purpose:** **Purpose:** Reads and returns the preferred size value held by the this instance.

```csharp
// Obtain an instance of RichText from the subsystem API first
RichText richText = ...;
var result = richText.GetPreferredSize(false, 0, false, 0, spriteData, 0);
```

### CalculateTextOutput
`public void CalculateTextOutput(float width, float height, SpriteData spriteData, float renderScale)`

**Purpose:** **Purpose:** Calculates the current value or result of text output.

```csharp
// Obtain an instance of RichText from the subsystem API first
RichText richText = ...;
richText.CalculateTextOutput(0, 0, spriteData, 0);
```

### UpdateSize
`public void UpdateSize(int width, int height)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of size.

```csharp
// Obtain an instance of RichText from the subsystem API first
RichText richText = ...;
richText.UpdateSize(0, 0);
```

### GetParts
`public List<RichTextPart> GetParts()`

**Purpose:** **Purpose:** Reads and returns the parts value held by the this instance.

```csharp
// Obtain an instance of RichText from the subsystem API first
RichText richText = ...;
var result = richText.GetParts();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RichText richText = ...;
richText.Update(0, spriteData, focusPosition, false, false, false, 0);
```

## See Also

- [Area Index](../)