<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultLayerSpriteChangerBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultLayerSpriteChangerBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultLayerSpriteChangerBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/DefaultLayerSpriteChangerBrushWidget.cs`

## Overview

`DefaultLayerSpriteChangerBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `SpriteBrush` | `public Brush SpriteBrush { get; set; }` |
| `SpriteBrushLayerName` | `public string SpriteBrushLayerName { get; set; }` |

## Usage Example

```csharp
// Typical usage of DefaultLayerSpriteChangerBrushWidget (Widget)
// 声明/访问一个 DefaultLayerSpriteChangerBrushWidget
var widget = root.GetChild("defaultLayerSpriteChangerBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)