---
title: "DisguiseMarkerBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DisguiseMarkerBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DisguiseMarkerBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DisguiseMarkerBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission/DisguiseMarkerBrushWidget.cs`

## Overview

`DisguiseMarkerBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `DisguiseMarkerBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public Vec2 Position { get; set; }` |
| `OffenseTypeIdentifier` | `public string OffenseTypeIdentifier { get; set; }` |

## Usage Example

```csharp
var widget = new DisguiseMarkerBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)