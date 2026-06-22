<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerBuilderEditableAreaWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerBuilderEditableAreaWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderEditableAreaWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerBuilder/BannerBuilderEditableAreaWidget.cs`

## Overview

`BannerBuilderEditableAreaWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `DragWidgetTopRight` | `public ButtonWidget DragWidgetTopRight { get; set; }` |
| `DragWidgetRight` | `public ButtonWidget DragWidgetRight { get; set; }` |
| `DragWidgetTop` | `public ButtonWidget DragWidgetTop { get; set; }` |
| `RotateWidget` | `public ButtonWidget RotateWidget { get; set; }` |
| `BannerTableauWidget` | `public BannerTableauWidget BannerTableauWidget { get; set; }` |
| `EditableAreaVisualWidget` | `public Widget EditableAreaVisualWidget { get; set; }` |
| `LayerIndex` | `public int LayerIndex { get; set; }` |
| `IsMirrorActive` | `public bool IsMirrorActive { get; set; }` |
| `IsLayerPattern` | `public bool IsLayerPattern { get; set; }` |
| `PositionValue` | `public Vec2 PositionValue { get; set; }` |
| `SizeValue` | `public Vec2 SizeValue { get; set; }` |
| `RotationValue` | `public float RotationValue { get; set; }` |
| `EditableAreaSize` | `public int EditableAreaSize { get; set; }` |
| `TotalAreaSize` | `public int TotalAreaSize { get; set; }` |

## Usage Example

```csharp
// Typical usage of BannerBuilderEditableAreaWidget (Widget)
// 声明/访问一个 BannerBuilderEditableAreaWidget
var widget = root.GetChild("bannerBuilderEditableAreaWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)