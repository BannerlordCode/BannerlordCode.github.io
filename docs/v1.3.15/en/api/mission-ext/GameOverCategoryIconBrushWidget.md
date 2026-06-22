<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameOverCategoryIconBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `CategoryID` | `public string CategoryID { get; set; }` |

## Usage Example

```csharp
// Typical usage of GameOverCategoryIconBrushWidget (Widget)
// 声明/访问一个 GameOverCategoryIconBrushWidget
var widget = root.GetChild("gameOverCategoryIconBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)