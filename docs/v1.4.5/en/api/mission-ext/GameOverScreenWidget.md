<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameOverScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameOverScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameOver
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameOverScreenWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameOver/GameOverScreenWidget.cs`

## Overview

`GameOverScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `GameOverScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var widget = new GameOverScreenWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)