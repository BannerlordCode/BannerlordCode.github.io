---
title: "CompassMarkerTextWidget"
description: "Auto-generated class reference for CompassMarkerTextWidget."
---
# CompassMarkerTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CompassMarkerTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission/CompassMarkerTextWidget.cs`

## Overview

`CompassMarkerTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CompassMarkerTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPrimary` | `public bool IsPrimary { get; set; }` |
| `Position` | `public float Position { get; set; }` |
| `PrimaryBrush` | `public Brush PrimaryBrush { get; set; }` |
| `SecondaryBrush` | `public Brush SecondaryBrush { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CompassMarkerTextWidget widget = ...;
```

## See Also

- [Area Index](../)