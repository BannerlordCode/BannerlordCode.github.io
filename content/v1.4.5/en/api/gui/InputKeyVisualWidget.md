---
title: "InputKeyVisualWidget"
description: "Auto-generated class reference for InputKeyVisualWidget."
---
# InputKeyVisualWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class InputKeyVisualWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/InputKeyVisualWidget.cs`

## Overview

`InputKeyVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `InputKeyVisualWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `KeyID` | `public string KeyID { get; set; }` |
| `IconsPath` | `public string IconsPath { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
InputKeyVisualWidget widget = ...;
```

## See Also

- [Area Index](../)