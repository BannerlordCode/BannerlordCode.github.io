---
title: "DialogButtonsParentWidget"
description: "Auto-generated class reference for DialogButtonsParentWidget."
---
# DialogButtonsParentWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DialogButtonsParentWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/DialogButtonsParentWidget.cs`

## Overview

`DialogButtonsParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `DialogButtonsParentWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CancelClickSound` | `public string CancelClickSound { get; set; }` |
| `ConfirmClickSound` | `public string ConfirmClickSound { get; set; }` |
| `ResetClickSound` | `public string ResetClickSound { get; set; }` |
| `CancelButton` | `public ButtonWidget CancelButton { get; set; }` |
| `ConfirmButton` | `public ButtonWidget ConfirmButton { get; set; }` |
| `ResetButton` | `public ButtonWidget ResetButton { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
DialogButtonsParentWidget widget = ...;
```

## See Also

- [Area Index](../)