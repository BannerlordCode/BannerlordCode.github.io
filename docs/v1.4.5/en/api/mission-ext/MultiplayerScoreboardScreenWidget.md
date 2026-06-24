<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerScoreboardScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerScoreboardScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardScreenWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard/MultiplayerScoreboardScreenWidget.cs`

## Overview

`MultiplayerScoreboardScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerScoreboardScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSingleSide` | `public bool IsSingleSide { get; set; }` |
| `SingleColumnedWidth` | `public int SingleColumnedWidth { get; set; }` |
| `DoubleColumnedWidth` | `public int DoubleColumnedWidth { get; set; }` |
| `SidesList` | `public ListPanel SidesList { get; set; }` |

## Usage Example

```csharp
var widget = new MultiplayerScoreboardScreenWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)