<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerPersonalKillFeedItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerPersonalKillFeedItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPersonalKillFeedItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerPersonalKillFeedItemWidget.cs`

## Overview

`MultiplayerPersonalKillFeedItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `NotificationTypeIconWidget` | `public Widget NotificationTypeIconWidget { get; set; }` |
| `NotificationBackgroundWidget` | `public Widget NotificationBackgroundWidget { get; set; }` |
| `AmountTextWidget` | `public TextWidget AmountTextWidget { get; set; }` |
| `MessageTextWidget` | `public RichTextWidget MessageTextWidget { get; set; }` |
| `FadeInTime` | `public float FadeInTime { get; set; }` |
| `StayTime` | `public float StayTime { get; set; }` |
| `FadeOutTime` | `public float FadeOutTime { get; }` |
| `TimeSinceCreation` | `public float TimeSinceCreation { get; }` |
| `IsDamage` | `public bool IsDamage { get; set; }` |
| `Message` | `public string Message { get; set; }` |
| `ItemType` | `public int ItemType { get; set; }` |
| `Amount` | `public int Amount { get; set; }` |

## Key Methods

### SetSpeedModifier
```csharp
public void SetSpeedModifier(float newSpeed)
```

### SetMaxAlphaValue
```csharp
public void SetMaxAlphaValue(float newMaxAlpha)
```

## Usage Example

```csharp
// Typical usage of MultiplayerPersonalKillFeedItemWidget (Widget)
// 声明/访问一个 MultiplayerPersonalKillFeedItemWidget
var widget = root.GetChild("multiplayerPersonalKillFeedItemWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)