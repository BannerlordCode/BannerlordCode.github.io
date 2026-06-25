---
title: "DevelopmentQueueVisualIconWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DevelopmentQueueVisualIconWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DevelopmentQueueVisualIconWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DevelopmentQueueVisualIconWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentQueueVisualIconWidget.cs`

## Overview

`DevelopmentQueueVisualIconWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `DevelopmentQueueVisualIconWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `QueueIndex` | `public int QueueIndex { get; set; }` |
| `QueueIconWidget` | `public Widget QueueIconWidget { get; set; }` |
| `InProgressIconWidget` | `public BrushWidget InProgressIconWidget { get; set; }` |

## Usage Example

```csharp
var widget = new DevelopmentQueueVisualIconWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)