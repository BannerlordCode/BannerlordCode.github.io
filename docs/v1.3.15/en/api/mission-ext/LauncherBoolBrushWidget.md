<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherBoolBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherBoolBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherBoolBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherBoolBrushWidget.cs`

## Overview

`LauncherBoolBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `BoolVariable` | `public bool BoolVariable { get; set; }` |
| `TargetWidget` | `public BrushWidget TargetWidget { get; set; }` |
| `OnTrueBrush` | `public Brush OnTrueBrush { get; set; }` |
| `OnFalseBrush` | `public Brush OnFalseBrush { get; set; }` |

## Usage Example

```csharp
// Typical usage of LauncherBoolBrushWidget (Widget)
// 声明/访问一个 LauncherBoolBrushWidget
var widget = root.GetChild("launcherBoolBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)