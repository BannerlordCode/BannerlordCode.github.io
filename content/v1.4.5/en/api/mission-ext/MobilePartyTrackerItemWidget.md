---
title: "MobilePartyTrackerItemWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MobilePartyTrackerItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MobilePartyTrackerItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MobilePartyTrackerItemWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map/MobilePartyTrackerItemWidget.cs`

## Overview

`MobilePartyTrackerItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MobilePartyTrackerItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FrameVisualWidget` | `public Widget FrameVisualWidget { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `TrackerType` | `public string TrackerType { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `TrackerImageBrush` | `public Brush TrackerImageBrush { get; set; }` |

## Usage Example

```csharp
var widget = new MobilePartyTrackerItemWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)