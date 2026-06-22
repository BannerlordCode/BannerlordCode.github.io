<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerPollProgressionWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerPollProgressionWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPollProgressionWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerPollProgressionWidget.cs`

## Overview

`MultiplayerPollProgressionWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasOngoingPoll` | `public bool HasOngoingPoll { get; set; }` |
| `PollExtension` | `public ListPanel PollExtension { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerPollProgressionWidget (Widget)
// 声明/访问一个 MultiplayerPollProgressionWidget
var widget = root.GetChild("multiplayerPollProgressionWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)