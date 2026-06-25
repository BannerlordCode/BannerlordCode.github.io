---
title: "IntegerInputTextWidget"
description: "Auto-generated class reference for IntegerInputTextWidget."
---
# IntegerInputTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class IntegerInputTextWidget : EditableTextWidget`
**Base:** `EditableTextWidget`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/IntegerInputTextWidget.cs`

## Overview

`IntegerInputTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `IntegerInputTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `EnableClamp` | `public bool EnableClamp { get; set; }` |
| `UpdateValueOnDone` | `public bool UpdateValueOnDone { get; set; }` |
| `IntText` | `public int IntText { get; set; }` |
| `MaxInt` | `public int MaxInt { get; set; }` |
| `MinInt` | `public int MinInt { get; set; }` |

## Key Methods

### HandleInput
`public override void HandleInput(IReadOnlyList<int> lastKeysPressed)`

**Purpose:** Executes the response logic associated with `input`.

```csharp
// Obtain an instance of IntegerInputTextWidget from the subsystem API first
IntegerInputTextWidget integerInputTextWidget = ...;
integerInputTextWidget.HandleInput(lastKeysPressed);
```

### SetAllText
`public override void SetAllText(string text)`

**Purpose:** Assigns a new value to `all text` and updates the object's internal state.

```csharp
// Obtain an instance of IntegerInputTextWidget from the subsystem API first
IntegerInputTextWidget integerInputTextWidget = ...;
integerInputTextWidget.SetAllText("example");
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
IntegerInputTextWidget widget = ...;
```

## See Also

- [Area Index](../)