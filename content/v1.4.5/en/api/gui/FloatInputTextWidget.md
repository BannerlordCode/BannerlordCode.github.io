---
title: "FloatInputTextWidget"
description: "Auto-generated class reference for FloatInputTextWidget."
---
# FloatInputTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FloatInputTextWidget : EditableTextWidget`
**Base:** `EditableTextWidget`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/FloatInputTextWidget.cs`

## Overview

`FloatInputTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `FloatInputTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `EnableClamp` | `public bool EnableClamp { get; set; }` |
| `UpdateValueOnDone` | `public bool UpdateValueOnDone { get; set; }` |
| `FloatText` | `public float FloatText { get; set; }` |
| `MaxFloat` | `public float MaxFloat { get; set; }` |
| `MinFloat` | `public float MinFloat { get; set; }` |

## Key Methods

### HandleInput
`public override void HandleInput(IReadOnlyList<int> lastKeysPressed)`

**Purpose:** **Purpose:** Executes the response logic associated with input.

```csharp
// Obtain an instance of FloatInputTextWidget from the subsystem API first
FloatInputTextWidget floatInputTextWidget = ...;
floatInputTextWidget.HandleInput(lastKeysPressed);
```

### SetAllText
`public override void SetAllText(string text)`

**Purpose:** **Purpose:** Assigns a new value to all text and updates the object's internal state.

```csharp
// Obtain an instance of FloatInputTextWidget from the subsystem API first
FloatInputTextWidget floatInputTextWidget = ...;
floatInputTextWidget.SetAllText("example");
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
FloatInputTextWidget widget = ...;
```

## See Also

- [Area Index](../)