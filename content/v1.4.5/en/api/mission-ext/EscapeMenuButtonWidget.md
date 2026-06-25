---
title: "EscapeMenuButtonWidget"
description: "Auto-generated class reference for EscapeMenuButtonWidget."
---
# EscapeMenuButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.EscapeMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EscapeMenuButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.EscapeMenu/EscapeMenuButtonWidget.cs`

## Overview

`EscapeMenuButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `EscapeMenuButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPositiveBehaviored` | `public bool IsPositiveBehaviored { get; set; }` |
| `PositiveBehaviorBrush` | `public Brush PositiveBehaviorBrush { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
EscapeMenuButtonWidget widget = ...;
```

## See Also

- [Area Index](../)