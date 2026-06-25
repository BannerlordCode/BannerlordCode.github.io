---
title: "CraftingPieceTypeSelectorButtonWidget"
description: "Auto-generated class reference for CraftingPieceTypeSelectorButtonWidget."
---
# CraftingPieceTypeSelectorButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingPieceTypeSelectorButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting/CraftingPieceTypeSelectorButtonWidget.cs`

## Overview

`CraftingPieceTypeSelectorButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CraftingPieceTypeSelectorButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `VisualsWidget` | `public Widget VisualsWidget { get; set; }` |

## Key Methods

### SetState
`public override void SetState(string stateName)`

**Purpose:** Assigns a new value to state and updates the object's internal state.

```csharp
// Obtain an instance of CraftingPieceTypeSelectorButtonWidget from the subsystem API first
CraftingPieceTypeSelectorButtonWidget craftingPieceTypeSelectorButtonWidget = ...;
craftingPieceTypeSelectorButtonWidget.SetState("example");
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CraftingPieceTypeSelectorButtonWidget widget = ...;
```

## See Also

- [Area Index](../)