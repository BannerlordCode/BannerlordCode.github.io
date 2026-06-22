<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ElementNotificationWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ElementNotificationWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ElementNotificationWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/ElementNotificationWidget.cs`

## Overview

`ElementNotificationWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ElementID` | `public string ElementID { get; set; }` |
| `ElementToHighlight` | `public Widget ElementToHighlight { get; set; }` |
| `TutorialFrameWidget` | `public TutorialHighlightItemBrushWidget TutorialFrameWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of ElementNotificationWidget (Widget)
// 声明/访问一个 ElementNotificationWidget
var widget = root.GetChild("elementNotificationWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)