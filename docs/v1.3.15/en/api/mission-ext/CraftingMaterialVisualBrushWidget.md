<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingMaterialVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingMaterialVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingMaterialVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingMaterialVisualBrushWidget.cs`

## Overview

`CraftingMaterialVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaterialType` | `public string MaterialType { get; set; }` |
| `IsBig` | `public bool IsBig { get; set; }` |

## Usage Example

```csharp
// Typical usage of CraftingMaterialVisualBrushWidget (Widget)
// 声明/访问一个 CraftingMaterialVisualBrushWidget
var widget = root.GetChild("craftingMaterialVisualBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)