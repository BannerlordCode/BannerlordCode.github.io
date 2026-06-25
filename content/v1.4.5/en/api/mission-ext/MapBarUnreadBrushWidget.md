---
title: "MapBarUnreadBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapBarUnreadBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapBarUnreadBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapBarUnreadBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar/MapBarUnreadBrushWidget.cs`

## Overview

`MapBarUnreadBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapBarUnreadBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsBannerNotification` | `public bool IsBannerNotification { get; set; }` |
| `UnreadTextWidget` | `public TextWidget UnreadTextWidget { get; set; }` |

## Usage Example

```csharp
var widget = new MapBarUnreadBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)