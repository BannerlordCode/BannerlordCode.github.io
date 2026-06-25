---
title: "GatherArmyTupleButtonWidget"
description: "Auto-generated class reference for GatherArmyTupleButtonWidget."
---
# GatherArmyTupleButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GatherArmyTupleButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy/GatherArmyTupleButtonWidget.cs`

## Overview

`GatherArmyTupleButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `GatherArmyTupleButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInCart` | `public bool IsInCart { get; set; }` |
| `IsEligible` | `public bool IsEligible { get; set; }` |
| `IsTransferDisabled` | `public bool IsTransferDisabled { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
GatherArmyTupleButtonWidget widget = ...;
```

## See Also

- [Area Index](../)