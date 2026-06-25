---
title: "OrderOfBattleFormationClassDropdownListButtonWidget"
description: "Auto-generated class reference for OrderOfBattleFormationClassDropdownListButtonWidget."
---
# OrderOfBattleFormationClassDropdownListButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class OrderOfBattleFormationClassDropdownListButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle/OrderOfBattleFormationClassDropdownListButtonWidget.cs`

## Overview

`OrderOfBattleFormationClassDropdownListButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OrderOfBattleFormationClassDropdownListButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
OrderOfBattleFormationClassDropdownListButtonWidget widget = ...;
```

## See Also

- [Area Index](../)