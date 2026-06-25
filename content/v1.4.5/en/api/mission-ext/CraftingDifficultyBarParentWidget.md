---
title: "CraftingDifficultyBarParentWidget"
description: "Auto-generated class reference for CraftingDifficultyBarParentWidget."
---
# CraftingDifficultyBarParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingDifficultyBarParentWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting/CraftingDifficultyBarParentWidget.cs`

## Overview

`CraftingDifficultyBarParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CraftingDifficultyBarParentWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `OrderDifficulty` | `public int OrderDifficulty { get; set; }` |
| `SmithingLevel` | `public int SmithingLevel { get; set; }` |
| `SmithingLevelTextWidget` | `public TextWidget SmithingLevelTextWidget { get; set; }` |
| `OrderDifficultyTextWidget` | `public TextWidget OrderDifficultyTextWidget { get; set; }` |

## Key Methods

### CraftingDifficultyBarParentWidget
`public class CraftingDifficultyBarParentWidget(UIContext context)`

**Purpose:** Executes the CraftingDifficultyBarParentWidget logic.

```csharp
// Obtain an instance of CraftingDifficultyBarParentWidget from the subsystem API first
CraftingDifficultyBarParentWidget craftingDifficultyBarParentWidget = ...;
var result = craftingDifficultyBarParentWidget.CraftingDifficultyBarParentWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CraftingDifficultyBarParentWidget widget = ...;
```

## See Also

- [Area Index](../)