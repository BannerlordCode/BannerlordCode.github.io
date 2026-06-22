<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameNotificationWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameNotificationWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameNotificationWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/GameNotificationWidget.cs`

## Overview

`GameNotificationWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `RampUpInSeconds` | `public float RampUpInSeconds { get; set; }` |
| `RampDownInSeconds` | `public float RampDownInSeconds { get; set; }` |
| `AnnouncerImageIdentifier` | `public ImageIdentifierWidget AnnouncerImageIdentifier { get; set; }` |
| `NotificationId` | `public int NotificationId { get; set; }` |
| `TotalTime` | `public float TotalTime { get; set; }` |
| `TextWidget` | `public RichTextWidget TextWidget { get; set; }` |
| `TotalDt` | `public float TotalDt { get; set; }` |

## Usage Example

```csharp
// Typical usage of GameNotificationWidget (Widget)
// 声明/访问一个 GameNotificationWidget
var widget = root.GetChild("gameNotificationWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)