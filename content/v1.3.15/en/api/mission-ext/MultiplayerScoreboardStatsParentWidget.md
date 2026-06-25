---
title: "MultiplayerScoreboardStatsParentWidget"
description: "Auto-generated class reference for MultiplayerScoreboardStatsParentWidget."
---
# MultiplayerScoreboardStatsParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardStatsParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardStatsParentWidget.cs`

## Overview

`MultiplayerScoreboardStatsParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerScoreboardStatsParentWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsInactive` | `public bool IsInactive { get; set; }` |
| `ActiveAlpha` | `public float ActiveAlpha { get; set; }` |
| `InactiveAlpha` | `public float InactiveAlpha { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerScoreboardStatsParentWidget widget = ...;
```

## See Also

- [Area Index](../)