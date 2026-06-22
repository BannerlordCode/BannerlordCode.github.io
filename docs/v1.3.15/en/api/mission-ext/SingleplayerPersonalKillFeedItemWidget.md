<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SingleplayerPersonalKillFeedItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SingleplayerPersonalKillFeedItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.Personal
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SingleplayerPersonalKillFeedItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/Personal/SingleplayerPersonalKillFeedItemWidget.cs`

## Overview

`SingleplayerPersonalKillFeedItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `NotificationTypeIconWidget` | `public Widget NotificationTypeIconWidget { get; set; }` |
| `NotificationBackgroundWidget` | `public Widget NotificationBackgroundWidget { get; set; }` |
| `AmountTextWidget` | `public TextWidget AmountTextWidget { get; set; }` |
| `MessageTextWidget` | `public RichTextWidget MessageTextWidget { get; set; }` |
| `FadeInTime` | `public float FadeInTime { get; }` |
| `StayTime` | `public float StayTime { get; }` |
| `FadeOutTime` | `public float FadeOutTime { get; }` |
| `TimeSinceCreation` | `public float TimeSinceCreation { get; }` |
| `IsDamage` | `public bool IsDamage { get; set; }` |
| `Amount` | `public int Amount { get; set; }` |
| `ItemType` | `public int ItemType { get; set; }` |
| `Message` | `public string Message { get; set; }` |
| `TypeID` | `public string TypeID { get; set; }` |
| `TroopTypeIconBrush` | `public Brush TroopTypeIconBrush { get; set; }` |
| `TroopTypeWidget` | `public Widget TroopTypeWidget { get; set; }` |
| `IsPaused` | `public bool IsPaused { get; set; }` |

## Key Methods

### SetSpeedModifier
```csharp
public void SetSpeedModifier(float newSpeed)
```

## Usage Example

```csharp
// Typical usage of SingleplayerPersonalKillFeedItemWidget (Widget)
// 声明/访问一个 SingleplayerPersonalKillFeedItemWidget
var widget = root.GetChild("singleplayerPersonalKillFeedItemWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)