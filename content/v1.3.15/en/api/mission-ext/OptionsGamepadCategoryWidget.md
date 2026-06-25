---
title: "OptionsGamepadCategoryWidget"
description: "Auto-generated class reference for OptionsGamepadCategoryWidget."
---
# OptionsGamepadCategoryWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsGamepadCategoryWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/Gamepad/OptionsGamepadCategoryWidget.cs`

## Overview

`OptionsGamepadCategoryWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OptionsGamepadCategoryWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Playstation4LayoutParentWidget` | `public Widget Playstation4LayoutParentWidget { get; set; }` |
| `Playstation5LayoutParentWidget` | `public Widget Playstation5LayoutParentWidget { get; set; }` |
| `XboxLayoutParentWidget` | `public Widget XboxLayoutParentWidget { get; set; }` |
| `CurrentGamepadType` | `public int CurrentGamepadType { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
OptionsGamepadCategoryWidget widget = ...;
```

## See Also

- [Area Index](../)