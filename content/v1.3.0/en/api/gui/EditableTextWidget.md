---
title: "EditableTextWidget"
description: "Auto-generated class reference for EditableTextWidget."
---
# EditableTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class EditableTextWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/EditableTextWidget.cs`

## Overview

`EditableTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `EditableTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxLength` | `public int MaxLength { get; set; }` |
| `IsObfuscationEnabled` | `public bool IsObfuscationEnabled { get; set; }` |
| `DefaultSearchText` | `public string DefaultSearchText { get; set; }` |
| `RealText` | `public string RealText { get; set; }` |
| `KeyboardInfoText` | `public string KeyboardInfoText { get; set; }` |
| `Text` | `public string Text { get; set; }` |

## Key Methods

### HandleInput
`public override void HandleInput(IReadOnlyList<int> lastKeysPressed)`

**Purpose:** **Purpose:** Executes the response logic associated with input.

```csharp
// Obtain an instance of EditableTextWidget from the subsystem API first
EditableTextWidget editableTextWidget = ...;
editableTextWidget.HandleInput(lastKeysPressed);
```

### SetAllText
`public virtual void SetAllText(string text)`

**Purpose:** **Purpose:** Assigns a new value to all text and updates the object's internal state.

```csharp
// Obtain an instance of EditableTextWidget from the subsystem API first
EditableTextWidget editableTextWidget = ...;
editableTextWidget.SetAllText("example");
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
EditableTextWidget widget = ...;
```

## See Also

- [Area Index](../)