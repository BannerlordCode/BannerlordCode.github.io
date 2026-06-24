<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerScoreboardEndOfBattlePanelWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerScoreboardEndOfBattlePanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardEndOfBattlePanelWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard/MultiplayerScoreboardEndOfBattlePanelWidget.cs`

## Overview

`MultiplayerScoreboardEndOfBattlePanelWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerScoreboardEndOfBattlePanelWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `FirstDelay` | `public float FirstDelay { get; set; }` |
| `SecondDelay` | `public float SecondDelay { get; set; }` |

## Key Methods

### MultiplayerScoreboardEndOfBattlePanelWidget
`public class MultiplayerScoreboardEndOfBattlePanelWidget(UIContext context)`

**Purpose:** Handles logic related to `multiplayer scoreboard end of battle panel widget`.

### StartAnimation
`public void StartAnimation()`

**Purpose:** Handles logic related to `start animation`.

## Usage Example

```csharp
var widget = new MultiplayerScoreboardEndOfBattlePanelWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)