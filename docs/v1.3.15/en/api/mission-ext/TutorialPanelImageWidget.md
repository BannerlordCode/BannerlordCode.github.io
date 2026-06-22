<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialPanelImageWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialPanelImageWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialPanelImageWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialPanelImageWidget.cs`

## Overview

`TutorialPanelImageWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `TutorialPanel` | `public BrushListPanel TutorialPanel { get; set; }` |

## Usage Example

```csharp
// Typical usage of TutorialPanelImageWidget (Widget)
// 声明/访问一个 TutorialPanelImageWidget
var widget = root.GetChild("tutorialPanelImageWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)