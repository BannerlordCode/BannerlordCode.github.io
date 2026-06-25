---
title: "EditableText"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EditableText`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EditableText

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class EditableText : RichText`
**Base:** `RichText`
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/EditableText.cs`

## Overview

`EditableText` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CursorPosition` | `public int CursorPosition { get; }` |
| `HighlightStart` | `public bool HighlightStart { get; }` |
| `HighlightEnd` | `public bool HighlightEnd { get; }` |
| `SelectedTextBegin` | `public int SelectedTextBegin { get; }` |
| `SelectedTextEnd` | `public int SelectedTextEnd { get; }` |
| `BlinkTimer` | `public float BlinkTimer { get; set; }` |
| `VisibleText` | `public string VisibleText { get; set; }` |

## Key Methods

### SetCursorPosition
`public void SetCursorPosition(int position, bool visible)`

**Purpose:** Sets the value or state of `cursor position`.

### BlinkCursor
`public void BlinkCursor()`

**Purpose:** Handles logic related to `blink cursor`.

### IsCursorVisible
`public bool IsCursorVisible()`

**Purpose:** Handles logic related to `is cursor visible`.

### ResetSelected
`public void ResetSelected()`

**Purpose:** Resets `selected` to its initial state.

### BeginSelection
`public void BeginSelection()`

**Purpose:** Handles logic related to `begin selection`.

### IsAnySelected
`public bool IsAnySelected()`

**Purpose:** Handles logic related to `is any selected`.

### GetCursorPosition
`public Vector2 GetCursorPosition()`

**Purpose:** Gets the current value of `cursor position`.

### Update
`public override void Update(float dt, SpriteData spriteData, Vector2 focusPosition, bool focus, bool isFixedWidth, bool isFixedHeight, float renderScale)`

**Purpose:** Updates the state or data of `update`.

### SelectAll
`public void SelectAll()`

**Purpose:** Handles logic related to `select all`.

### FindNextWordPosition
`public int FindNextWordPosition(int direction)`

**Purpose:** Handles logic related to `find next word position`.

### SetCursor
`public void SetCursor(int position, bool visible = true, bool withSelection = false)`

**Purpose:** Sets the value or state of `cursor`.

## Usage Example

```csharp
var value = new EditableText();
value.SetCursorPosition(0, false);
```

## See Also

- [Complete Class Catalog](../catalog)