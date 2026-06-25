---
title: "PropertyBasedTooltipWidget"
description: "Auto-generated class reference for PropertyBasedTooltipWidget."
---
# PropertyBasedTooltipWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PropertyBasedTooltipWidget : TooltipWidget`
**Base:** `TooltipWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/PropertyBasedTooltipWidget.cs`

## Overview

`PropertyBasedTooltipWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PropertyBasedTooltipWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AllyColor` | `public Color AllyColor { get; set; }` |
| `EnemyColor` | `public Color EnemyColor { get; set; }` |
| `NeutralColor` | `public Color NeutralColor { get; set; }` |
| `PropertyListBackground` | `public Widget PropertyListBackground { get; set; }` |
| `PropertyList` | `public ListPanel PropertyList { get; set; }` |
| `Mode` | `public int Mode { get; set; }` |
| `NeutralTroopsTextBrush` | `public Brush NeutralTroopsTextBrush { get; set; }` |
| `EnemyTroopsTextBrush` | `public Brush EnemyTroopsTextBrush { get; set; }` |
| `AllyTroopsTextBrush` | `public Brush AllyTroopsTextBrush { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
PropertyBasedTooltipWidget widget = ...;
```

## See Also

- [Area Index](../)