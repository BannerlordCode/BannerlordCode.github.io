---
title: "ToggleButtonWidget"
description: "Auto-generated class reference for ToggleButtonWidget."
---
# ToggleButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ToggleButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ToggleButtonWidget.cs`

## Overview

`ToggleButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ToggleButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsTargetVisible` | `public bool IsTargetVisible { get; set; }` |
| `WidgetToClose` | `public Widget WidgetToClose { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ToggleButtonWidget widget = ...;
```

## See Also

- [Area Index](../)