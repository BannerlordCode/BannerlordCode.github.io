<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerDuelKillFeedItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerDuelKillFeedItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerDuelKillFeedItemWidget : MultiplayerGeneralKillFeedItemWidget`
**Base:** `MultiplayerGeneralKillFeedItemWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerDuelKillFeedItemWidget.cs`

## Overview

`MultiplayerDuelKillFeedItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEndOfDuel` | `public bool IsEndOfDuel { get; set; }` |
| `Background` | `public BrushWidget Background { get; set; }` |
| `VictimCompassBackground` | `public BrushWidget VictimCompassBackground { get; set; }` |
| `MurdererCompassBackground` | `public BrushWidget MurdererCompassBackground { get; set; }` |
| `VictimNameText` | `public ScrollingRichTextWidget VictimNameText { get; set; }` |
| `MurdererNameText` | `public ScrollingRichTextWidget MurdererNameText { get; set; }` |
| `VictimScoreText` | `public TextWidget VictimScoreText { get; set; }` |
| `MurdererScoreText` | `public TextWidget MurdererScoreText { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerDuelKillFeedItemWidget (Widget)
// 声明/访问一个 MultiplayerDuelKillFeedItemWidget
var widget = root.GetChild("multiplayerDuelKillFeedItemWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)