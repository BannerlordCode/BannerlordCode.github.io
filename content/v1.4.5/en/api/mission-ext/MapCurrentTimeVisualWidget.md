---
title: "MapCurrentTimeVisualWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapCurrentTimeVisualWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapCurrentTimeVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapCurrentTimeVisualWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar/MapCurrentTimeVisualWidget.cs`

## Overview

`MapCurrentTimeVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapCurrentTimeVisualWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentTimeState` | `public int CurrentTimeState { get; set; }` |
| `FastForwardButton` | `public ButtonWidget FastForwardButton { get; set; }` |
| `PlayButton` | `public ButtonWidget PlayButton { get; set; }` |
| `PauseButton` | `public ButtonWidget PauseButton { get; set; }` |

## Usage Example

```csharp
var widget = new MapCurrentTimeVisualWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)