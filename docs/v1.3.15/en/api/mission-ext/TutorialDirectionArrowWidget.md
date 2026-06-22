<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialDirectionArrowWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialDirectionArrowWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialDirectionArrowWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialDirectionArrowWidget.cs`

## Overview

`TutorialDirectionArrowWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ArrowState` | `public string ArrowState { get; set; }` |
| `HorizontalArrowWidget` | `public BrushWidget HorizontalArrowWidget { get; set; }` |
| `VerticalArrowWidget` | `public BrushWidget VerticalArrowWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of TutorialDirectionArrowWidget (Widget)
// 声明/访问一个 TutorialDirectionArrowWidget
var widget = root.GetChild("tutorialDirectionArrowWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)