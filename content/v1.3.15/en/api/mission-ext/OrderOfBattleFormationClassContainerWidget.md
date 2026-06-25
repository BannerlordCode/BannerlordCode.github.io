---
title: "OrderOfBattleFormationClassContainerWidget"
description: "Auto-generated class reference for OrderOfBattleFormationClassContainerWidget."
---
# OrderOfBattleFormationClassContainerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationClassContainerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationClassContainerWidget.cs`

## Overview

`OrderOfBattleFormationClassContainerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OrderOfBattleFormationClassContainerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `WeightSlider` | `public SliderWidget WeightSlider { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
OrderOfBattleFormationClassContainerWidget widget = ...;
```

## See Also

- [Area Index](../)