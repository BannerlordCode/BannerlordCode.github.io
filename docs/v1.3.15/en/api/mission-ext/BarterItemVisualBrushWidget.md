<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BarterItemVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BarterItemVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BarterItemVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterItemVisualBrushWidget.cs`

## Overview

`BarterItemVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `SpriteWidget` | `public BrushWidget SpriteWidget { get; set; }` |
| `SpriteClipWidget` | `public Widget SpriteClipWidget { get; set; }` |
| `ImageIdentifierWidget` | `public ImageIdentifierWidget ImageIdentifierWidget { get; set; }` |
| `MaskedTextureWidget` | `public MaskedTextureWidget MaskedTextureWidget { get; set; }` |
| `HasVisualIdentifier` | `public bool HasVisualIdentifier { get; set; }` |
| `Type` | `public string Type { get; set; }` |
| `FiefImagePath` | `public string FiefImagePath { get; set; }` |

## Usage Example

```csharp
// Typical usage of BarterItemVisualBrushWidget (Widget)
// 声明/访问一个 BarterItemVisualBrushWidget
var widget = root.GetChild("barterItemVisualBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)