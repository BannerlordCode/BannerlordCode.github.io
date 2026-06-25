---
title: "BoostItemButtonWidget"
description: "Auto-generated class reference for BoostItemButtonWidget."
---
# BoostItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoostItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GatherArmy/BoostItemButtonWidget.cs`

## Overview

`BoostItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `BoostItemButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ParentPopupWidget` | `public BoostCohesionPopupWidget ParentPopupWidget { get; }` |
| `BoostCurrencyType` | `public int BoostCurrencyType { get; set; }` |
| `BoostCurrencyIconWidget` | `public Widget BoostCurrencyIconWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
BoostItemButtonWidget widget = ...;
```

## See Also

- [Area Index](../)