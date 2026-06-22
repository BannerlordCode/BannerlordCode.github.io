<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerScoreboardStatsParentWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerScoreboardStatsParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardStatsParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardStatsParentWidget.cs`

## Overview

`MultiplayerScoreboardStatsParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsInactive` | `public bool IsInactive { get; set; }` |
| `ActiveAlpha` | `public float ActiveAlpha { get; set; }` |
| `InactiveAlpha` | `public float InactiveAlpha { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerScoreboardStatsParentWidget (Widget)
// 声明/访问一个 MultiplayerScoreboardStatsParentWidget
var widget = root.GetChild("multiplayerScoreboardStatsParentWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)