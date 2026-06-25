---
title: "CraftingCardHighlightBrushWidget"
description: "Auto-generated class reference for CraftingCardHighlightBrushWidget."
---
# CraftingCardHighlightBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingCardHighlightBrushWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting/CraftingCardHighlightBrushWidget.cs`

## Overview

`CraftingCardHighlightBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CraftingCardHighlightBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CraftingCardHighlightBrushWidget
`public class CraftingCardHighlightBrushWidget(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CraftingCardHighlightBrushWidget from the subsystem API first
CraftingCardHighlightBrushWidget craftingCardHighlightBrushWidget = ...;
var result = craftingCardHighlightBrushWidget.CraftingCardHighlightBrushWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CraftingCardHighlightBrushWidget widget = ...;
```

## See Also

- [Area Index](../)