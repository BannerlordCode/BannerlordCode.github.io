<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameOverCategoryIconBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameOverCategoryIconBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameOver
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameOverCategoryIconBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameOver/GameOverCategoryIconBrushWidget.cs`

## Overview

`GameOverCategoryIconBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `GameOverCategoryIconBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CategoryID` | `public string CategoryID { get; set; }` |

## Usage Example

```csharp
var widget = new GameOverCategoryIconBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)