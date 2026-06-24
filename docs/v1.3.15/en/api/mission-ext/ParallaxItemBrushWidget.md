<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ParallaxItemBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `ParallaxItemBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEaseInOutEnabled` | `public bool IsEaseInOutEnabled { get; set; }` |
| `OneDirectionDuration` | `public float OneDirectionDuration { get; set; }` |
| `OneDirectionDistance` | `public float OneDirectionDistance { get; set; }` |
| `InitialDirection` | `public ParallaxItemBrushWidget.ParallaxMovementDirection InitialDirection { get; set; }` |

## Usage Example

```csharp
var widget = new ParallaxItemBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)