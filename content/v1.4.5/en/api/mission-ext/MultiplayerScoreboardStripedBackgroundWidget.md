---
title: "MultiplayerScoreboardStripedBackgroundWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerScoreboardStripedBackgroundWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerScoreboardStripedBackgroundWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardStripedBackgroundWidget : MultiplayerScoreboardStatsListPanel`
**Base:** `MultiplayerScoreboardStatsListPanel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard/MultiplayerScoreboardStripedBackgroundWidget.cs`

## Overview

`MultiplayerScoreboardStripedBackgroundWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerScoreboardStripedBackgroundWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var widget = new MultiplayerScoreboardStripedBackgroundWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)