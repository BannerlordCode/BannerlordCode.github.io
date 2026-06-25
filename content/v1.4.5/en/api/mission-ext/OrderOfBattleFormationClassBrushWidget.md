---
title: "OrderOfBattleFormationClassBrushWidget"
description: "Auto-generated class reference for OrderOfBattleFormationClassBrushWidget."
---
# OrderOfBattleFormationClassBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationClassBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle/OrderOfBattleFormationClassBrushWidget.cs`

## Overview

`OrderOfBattleFormationClassBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OrderOfBattleFormationClassBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FormationClass` | `public int FormationClass { get; set; }` |
| `ErroredColor` | `public Color ErroredColor { get; set; }` |
| `IsErrored` | `public bool IsErrored { get; set; }` |
| `UnsetBrush` | `public Brush UnsetBrush { get; set; }` |
| `InfantryBrush` | `public Brush InfantryBrush { get; set; }` |
| `RangedBrush` | `public Brush RangedBrush { get; set; }` |
| `CavalryBrush` | `public Brush CavalryBrush { get; set; }` |
| `HorseArcherBrush` | `public Brush HorseArcherBrush { get; set; }` |
| `InfantryAndRangedBrush` | `public Brush InfantryAndRangedBrush { get; set; }` |
| `CavalryAndHorseArcherBrush` | `public Brush CavalryAndHorseArcherBrush { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
OrderOfBattleFormationClassBrushWidget widget = ...;
```

## See Also

- [Area Index](../)