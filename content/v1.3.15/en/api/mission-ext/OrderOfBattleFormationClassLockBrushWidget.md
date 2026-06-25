---
title: "OrderOfBattleFormationClassLockBrushWidget"
description: "Auto-generated class reference for OrderOfBattleFormationClassLockBrushWidget."
---
# OrderOfBattleFormationClassLockBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationClassLockBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationClassLockBrushWidget.cs`

## Overview

`OrderOfBattleFormationClassLockBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OrderOfBattleFormationClassLockBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `LockedBrush` | `public Brush LockedBrush { get; set; }` |
| `UnlockedBrush` | `public Brush UnlockedBrush { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
OrderOfBattleFormationClassLockBrushWidget widget = ...;
```

## See Also

- [Area Index](../)