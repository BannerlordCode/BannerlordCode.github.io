<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerGeneralKillFeedItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerGeneralKillFeedItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGeneralKillFeedItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerGeneralKillFeedItemWidget.cs`

## Overview

`MultiplayerGeneralKillFeedItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `TimeSinceCreation` | `public float TimeSinceCreation { get; }` |

## Key Methods

### SetSpeedModifier
```csharp
public void SetSpeedModifier(float newSpeed)
```

## Usage Example

```csharp
// Typical usage of MultiplayerGeneralKillFeedItemWidget (Widget)
// 声明/访问一个 MultiplayerGeneralKillFeedItemWidget
var widget = root.GetChild("multiplayerGeneralKillFeedItemWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)