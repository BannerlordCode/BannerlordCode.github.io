---
title: "HUDExtensionBrushWidget"
description: "Auto-generated class reference for HUDExtensionBrushWidget."
---
# HUDExtensionBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HUDExtensionBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD/HUDExtensionBrushWidget.cs`

## Overview

`HUDExtensionBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `HUDExtensionBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AlphaChangeDuration` | `public float AlphaChangeDuration { get; set; }` |
| `OrderEnabledAlpha` | `public float OrderEnabledAlpha { get; set; }` |
| `IsOrderActive` | `public bool IsOrderActive { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
HUDExtensionBrushWidget widget = ...;
```

## See Also

- [Area Index](../)