---
title: "MultiplayerDuelKillFeedItemWidget"
description: "Auto-generated class reference for MultiplayerDuelKillFeedItemWidget."
---
# MultiplayerDuelKillFeedItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerDuelKillFeedItemWidget : MultiplayerGeneralKillFeedItemWidget`
**Base:** `MultiplayerGeneralKillFeedItemWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerDuelKillFeedItemWidget.cs`

## Overview

`MultiplayerDuelKillFeedItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerDuelKillFeedItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerDuelKillFeedItemWidget widget = ...;
```

## See Also

- [Area Index](../)