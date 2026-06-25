---
title: "SettlementOverlayWallIconBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementOverlayWallIconBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementOverlayWallIconBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SettlementOverlayWallIconBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay/SettlementOverlayWallIconBrushWidget.cs`

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
var widget = new SettlementOverlayWallIconBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)