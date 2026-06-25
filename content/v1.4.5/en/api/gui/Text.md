---
title: "Text"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Text`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Text

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class Text : IText`
**Base:** `IText`
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/Text.cs`

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

**Purpose:** Gets the current value of `preferred size`.

### UpdateSize
`public void UpdateSize(int width, int height)`

**Purpose:** Updates the state or data of `size`.

### SetAllDirty
`public void SetAllDirty()`

**Purpose:** Sets the value or state of `all dirty`.

### GetParts
`public List<TextPart> GetParts()`

**Purpose:** Gets the current value of `parts`.

## Usage Example

```csharp
var value = new Text();
value.GetPreferredSize(false, 0, false, 0, spriteData, 0);
```

## See Also

- [Complete Class Catalog](../catalog)