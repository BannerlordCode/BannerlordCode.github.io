---
title: "OrderOfBattleFormationFilterVisualBrushWidget"
description: "Auto-generated class reference for OrderOfBattleFormationFilterVisualBrushWidget."
---
# OrderOfBattleFormationFilterVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationFilterVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationFilterVisualBrushWidget.cs`

## Overview

`OrderOfBattleFormationFilterVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OrderOfBattleFormationFilterVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FormationFilter` | `public int FormationFilter { get; set; }` |
| `UnsetBrush` | `public Brush UnsetBrush { get; set; }` |
| `SpearBrush` | `public Brush SpearBrush { get; set; }` |
| `ShieldBrush` | `public Brush ShieldBrush { get; set; }` |
| `ThrownBrush` | `public Brush ThrownBrush { get; set; }` |
| `HeavyBrush` | `public Brush HeavyBrush { get; set; }` |
| `HighTierBrush` | `public Brush HighTierBrush { get; set; }` |
| `LowTierBrush` | `public Brush LowTierBrush { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
OrderOfBattleFormationFilterVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)