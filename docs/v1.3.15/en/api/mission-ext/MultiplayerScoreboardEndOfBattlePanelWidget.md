<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerScoreboardEndOfBattlePanelWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerScoreboardEndOfBattlePanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardEndOfBattlePanelWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardEndOfBattlePanelWidget.cs`

## Overview

`MultiplayerScoreboardEndOfBattlePanelWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `FirstDelay` | `public float FirstDelay { get; set; }` |
| `SecondDelay` | `public float SecondDelay { get; set; }` |

## Key Methods

### StartAnimation
```csharp
public void StartAnimation()
```

## Usage Example

```csharp
// Typical usage of MultiplayerScoreboardEndOfBattlePanelWidget (Widget)
// 声明/访问一个 MultiplayerScoreboardEndOfBattlePanelWidget
var widget = root.GetChild("multiplayerScoreboardEndOfBattlePanelWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)