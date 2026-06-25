---
title: "SettlementOverlayWallIconBrushWidget"
description: "Auto-generated class reference for SettlementOverlayWallIconBrushWidget."
---
# SettlementOverlayWallIconBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SettlementOverlayWallIconBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/SettlementOverlayWallIconBrushWidget.cs`

## Overview

`SettlementOverlayWallIconBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SettlementOverlayWallIconBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `WallsLevel` | `public int WallsLevel { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
SettlementOverlayWallIconBrushWidget widget = ...;
```

## See Also

- [Area Index](../)