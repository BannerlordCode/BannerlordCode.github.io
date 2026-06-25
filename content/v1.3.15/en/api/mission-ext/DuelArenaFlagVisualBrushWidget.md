---
title: "DuelArenaFlagVisualBrushWidget"
description: "Auto-generated class reference for DuelArenaFlagVisualBrushWidget."
---
# DuelArenaFlagVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DuelArenaFlagVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/DuelArenaFlagVisualBrushWidget.cs`

## Overview

`DuelArenaFlagVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `DuelArenaFlagVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ArenaType` | `public int ArenaType { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
DuelArenaFlagVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)