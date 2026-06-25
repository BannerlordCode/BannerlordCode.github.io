---
title: "CraftingMaterialVisualBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingMaterialVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingMaterialVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingMaterialVisualBrushWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting/CraftingMaterialVisualBrushWidget.cs`

## Overview

`CraftingMaterialVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CraftingMaterialVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaterialType` | `public string MaterialType { get; set; }` |
| `IsBig` | `public bool IsBig { get; set; }` |

## Key Methods

### CraftingMaterialVisualBrushWidget
`public class CraftingMaterialVisualBrushWidget(UIContext context)`

**Purpose:** Handles logic related to `crafting material visual brush widget`.

## Usage Example

```csharp
var widget = new CraftingMaterialVisualBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)