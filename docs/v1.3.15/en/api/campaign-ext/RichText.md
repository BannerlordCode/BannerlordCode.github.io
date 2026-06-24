<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RichText`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Updates the state or data of `update`.

### SetAllDirty
`public void SetAllDirty()`

**Purpose:** Sets the value or state of `all dirty`.

### GetPreferredSize
`public Vector2 GetPreferredSize(bool fixedWidth, float widthSize, bool fixedHeight, float heightSize, SpriteData spriteData, float renderScale)`

**Purpose:** Gets the current value of `preferred size`.

### CalculateTextOutput
`public void CalculateTextOutput(float width, float height, SpriteData spriteData, float renderScale)`

**Purpose:** Handles logic related to `calculate text output`.

### UpdateSize
`public void UpdateSize(int width, int height)`

**Purpose:** Updates the state or data of `size`.

### GetParts
`public List<RichTextPart> GetParts()`

**Purpose:** Gets the current value of `parts`.

## Usage Example

```csharp
var value = new RichText();
value.Update(0, spriteData, focusPosition, false, false, false, 0);
```

## See Also

- [Complete Class Catalog](../catalog)