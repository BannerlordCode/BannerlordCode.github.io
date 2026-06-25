---
title: "CraftingDifficultyBarParentWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingDifficultyBarParentWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingDifficultyBarParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingDifficultyBarParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingDifficultyBarParentWidget.cs`

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

## Usage Example

```csharp
var widget = new CraftingDifficultyBarParentWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)