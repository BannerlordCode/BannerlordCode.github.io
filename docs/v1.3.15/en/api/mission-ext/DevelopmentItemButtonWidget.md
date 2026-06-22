<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DevelopmentItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DevelopmentItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DevelopmentItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentItemButtonWidget.cs`

## Overview

`DevelopmentItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelectedItem` | `public bool IsSelectedItem { get; set; }` |
| `SelectedBlackOverlayWidget` | `public Widget SelectedBlackOverlayWidget { get; set; }` |
| `NameTextWidget` | `public DevelopmentNameTextWidget NameTextWidget { get; set; }` |
| `AddToQueueButtonWidget` | `public ButtonWidget AddToQueueButtonWidget { get; set; }` |
| `SetAsActiveButtonWidget` | `public ButtonWidget SetAsActiveButtonWidget { get; set; }` |
| `DevelopmentLevelVisualWidget` | `public Widget DevelopmentLevelVisualWidget { get; set; }` |
| `ProgressClipWidget` | `public Widget ProgressClipWidget { get; set; }` |
| `IsProgressShown` | `public bool IsProgressShown { get; set; }` |
| `CanBuild` | `public bool CanBuild { get; set; }` |
| `DevelopmentBackVisualWidget` | `public Widget DevelopmentBackVisualWidget { get; set; }` |
| `DevelopmentFrontVisualWidget` | `public Widget DevelopmentFrontVisualWidget { get; set; }` |
| `IsProgressIndicatorsEnabled` | `public bool IsProgressIndicatorsEnabled { get; set; }` |
| `IsDaily` | `public bool IsDaily { get; set; }` |
| `Level` | `public int Level { get; set; }` |
| `Progress` | `public int Progress { get; set; }` |

## Usage Example

```csharp
// Typical usage of DevelopmentItemButtonWidget (Widget)
// 声明/访问一个 DevelopmentItemButtonWidget
var widget = root.GetChild("developmentItemButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)