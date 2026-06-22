<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameOverScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameOverScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameOver
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameOverScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameOver/GameOverScreenWidget.cs`

## Overview

`GameOverScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ConceptVisualWidget` | `public BrushWidget ConceptVisualWidget { get; set; }` |
| `BannerBrushWidget` | `public BrushWidget BannerBrushWidget { get; set; }` |
| `BannerFrameBrushWidget1` | `public BrushWidget BannerFrameBrushWidget1 { get; set; }` |
| `BannerFrameBrushWidget2` | `public BrushWidget BannerFrameBrushWidget2 { get; set; }` |
| `GameOverReason` | `public string GameOverReason { get; set; }` |

## Usage Example

```csharp
// Typical usage of GameOverScreenWidget (Widget)
// 声明/访问一个 GameOverScreenWidget
var widget = root.GetChild("gameOverScreenWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)