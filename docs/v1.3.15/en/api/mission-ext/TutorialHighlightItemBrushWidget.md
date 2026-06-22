<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialHighlightItemBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialHighlightItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialHighlightItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialHighlightItemBrushWidget.cs`

## Overview

`TutorialHighlightItemBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `CustomSizeSyncTarget` | `public Widget CustomSizeSyncTarget { get; set; }` |
| `DoNotOverrideWidth` | `public bool DoNotOverrideWidth { get; set; }` |
| `DoNotOverrideHeight` | `public bool DoNotOverrideHeight { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; }` |
| `HighlightFrameWidget` | `public TutorialHighlightItemBrushWidget HighlightFrameWidget { get; }` |

## Usage Example

```csharp
// Typical usage of TutorialHighlightItemBrushWidget (Widget)
// 声明/访问一个 TutorialHighlightItemBrushWidget
var widget = root.GetChild("tutorialHighlightItemBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)