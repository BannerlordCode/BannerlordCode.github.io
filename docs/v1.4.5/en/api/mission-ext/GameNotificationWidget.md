<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameNotificationWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameNotificationWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameNotificationWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information/GameNotificationWidget.cs`

## Overview

`GameNotificationWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `GameNotificationWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RampUpInSeconds` | `public float RampUpInSeconds { get; set; }` |
| `RampDownInSeconds` | `public float RampDownInSeconds { get; set; }` |
| `AnnouncerImageIdentifier` | `public ImageIdentifierWidget AnnouncerImageIdentifier { get; set; }` |
| `NotificationId` | `public int NotificationId { get; set; }` |
| `NotificationDurationInSeconds` | `public float NotificationDurationInSeconds { get; set; }` |
| `TextWidget` | `public RichTextWidget TextWidget { get; set; }` |
| `IsPaused` | `public bool IsPaused { get; set; }` |
| `MustFadeOutCurrentNotification` | `public bool MustFadeOutCurrentNotification { get; set; }` |
| `NotificationFadeOutDelayInSeconds` | `public float NotificationFadeOutDelayInSeconds { get; set; }` |

## Usage Example

```csharp
var widget = new GameNotificationWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)