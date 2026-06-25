---
title: "MultiplayerLobbyClanMemberRankVisualBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyClanMemberRankVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerLobbyClanMemberRankVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyClanMemberRankVisualBrushWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Clan/MultiplayerLobbyClanMemberRankVisualBrushWidget.cs`

## Overview

`MultiplayerLobbyClanMemberRankVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyClanMemberRankVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public int Type { get; set; }` |

## Key Methods

### MultiplayerLobbyClanMemberRankVisualBrushWidget
`public class MultiplayerLobbyClanMemberRankVisualBrushWidget(UIContext context)`

**Purpose:** Handles logic related to `multiplayer lobby clan member rank visual brush widget`.

## Usage Example

```csharp
var widget = new MultiplayerLobbyClanMemberRankVisualBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)