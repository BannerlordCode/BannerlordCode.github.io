<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEventVisualItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapEventVisualItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapEvents
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapEventVisualItemWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapEvents/MapEventVisualItemWidget.cs`

## Overview

`MapEventVisualItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapEventVisualItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public Vec2 Position { get; set; }` |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap { get; set; }` |

## Usage Example

```csharp
var widget = new MapEventVisualItemWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)