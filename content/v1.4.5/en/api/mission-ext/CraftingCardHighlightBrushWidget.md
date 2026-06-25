---
title: "CraftingCardHighlightBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingCardHighlightBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingCardHighlightBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingCardHighlightBrushWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting/CraftingCardHighlightBrushWidget.cs`

## Overview

`CraftingCardHighlightBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CraftingCardHighlightBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CraftingCardHighlightBrushWidget
`public class CraftingCardHighlightBrushWidget(UIContext context)`

**Purpose:** Handles logic related to `crafting card highlight brush widget`.

## Usage Example

```csharp
var widget = new CraftingCardHighlightBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)