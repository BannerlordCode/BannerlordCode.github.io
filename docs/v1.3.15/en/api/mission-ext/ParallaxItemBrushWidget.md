<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ParallaxItemBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ParallaxItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ParallaxItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ParallaxItemBrushWidget.cs`

## Overview

`ParallaxItemBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEaseInOutEnabled` | `public bool IsEaseInOutEnabled { get; set; }` |
| `OneDirectionDuration` | `public float OneDirectionDuration { get; set; }` |
| `OneDirectionDistance` | `public float OneDirectionDistance { get; set; }` |
| `InitialDirection` | `public ParallaxItemBrushWidget.ParallaxMovementDirection InitialDirection { get; set; }` |

## Usage Example

```csharp
// Typical usage of ParallaxItemBrushWidget (Widget)
// 声明/访问一个 ParallaxItemBrushWidget
var widget = root.GetChild("parallaxItemBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)