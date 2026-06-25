---
title: "EditableText"
description: "Auto-generated class reference for EditableText."
---
# EditableText

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class EditableText : RichText`
**Base:** `RichText`
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/EditableText.cs`

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

**Purpose:** **Purpose:** Assigns a new value to cursor position and updates the object's internal state.

```csharp
// Obtain an instance of EditableText from the subsystem API first
EditableText editableText = ...;
editableText.SetCursorPosition(0, false);
```

### BlinkCursor
`public void BlinkCursor()`

**Purpose:** **Purpose:** Executes the BlinkCursor logic.

```csharp
// Obtain an instance of EditableText from the subsystem API first
EditableText editableText = ...;
editableText.BlinkCursor();
```

### IsCursorVisible
`public bool IsCursorVisible()`

**Purpose:** **Purpose:** Determines whether the this instance is in the cursor visible state or condition.

```csharp
// Obtain an instance of EditableText from the subsystem API first
EditableText editableText = ...;
var result = editableText.IsCursorVisible();
```

### ResetSelected
`public void ResetSelected()`

**Purpose:** **Purpose:** Returns selected to its default or initial condition.

```csharp
// Obtain an instance of EditableText from the subsystem API first
EditableText editableText = ...;
editableText.ResetSelected();
```

### BeginSelection
`public void BeginSelection()`

**Purpose:** **Purpose:** Executes the BeginSelection logic.

```csharp
// Obtain an instance of EditableText from the subsystem API first
EditableText editableText = ...;
editableText.BeginSelection();
```

### IsAnySelected
`public bool IsAnySelected()`

**Purpose:** **Purpose:** Determines whether the this instance is in the any selected state or condition.

```csharp
// Obtain an instance of EditableText from the subsystem API first
EditableText editableText = ...;
var result = editableText.IsAnySelected();
```

### GetCursorPosition
`public Vector2 GetCursorPosition()`

**Purpose:** **Purpose:** Reads and returns the cursor position value held by the this instance.

```csharp
// Obtain an instance of EditableText from the subsystem API first
EditableText editableText = ...;
var result = editableText.GetCursorPosition();
```

### Update
`public override void Update(float dt, SpriteData spriteData, Vector2 focusPosition, bool focus, bool isFixedWidth, bool isFixedHeight, float renderScale)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of EditableText from the subsystem API first
EditableText editableText = ...;
editableText.Update(0, spriteData, focusPosition, false, false, false, 0);
```

### SelectAll
`public void SelectAll()`

**Purpose:** **Purpose:** Executes the SelectAll logic.

```csharp
// Obtain an instance of EditableText from the subsystem API first
EditableText editableText = ...;
editableText.SelectAll();
```

### FindNextWordPosition
`public int FindNextWordPosition(int direction)`

**Purpose:** **Purpose:** Looks up the matching next word position in the current collection or scope.

```csharp
// Obtain an instance of EditableText from the subsystem API first
EditableText editableText = ...;
var result = editableText.FindNextWordPosition(0);
```

### SetCursor
`public void SetCursor(int position, bool visible = true, bool withSelection = false)`

**Purpose:** **Purpose:** Assigns a new value to cursor and updates the object's internal state.

```csharp
// Obtain an instance of EditableText from the subsystem API first
EditableText editableText = ...;
editableText.SetCursor(0, false, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EditableText editableText = ...;
editableText.SetCursorPosition(0, false);
```

## See Also

- [Area Index](../)