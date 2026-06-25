---
title: "MultiplayerEndOfRoundPanelBrushWidget"
description: "Auto-generated class reference for MultiplayerEndOfRoundPanelBrushWidget."
---
# MultiplayerEndOfRoundPanelBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerEndOfRoundPanelBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer/MultiplayerEndOfRoundPanelBrushWidget.cs`

## Overview

`MultiplayerEndOfRoundPanelBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerEndOfRoundPanelBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsShown` | `public bool IsShown { get; set; }` |
| `IsRoundWinner` | `public bool IsRoundWinner { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerEndOfRoundPanelBrushWidget widget = ...;
```

## See Also

- [Area Index](../)