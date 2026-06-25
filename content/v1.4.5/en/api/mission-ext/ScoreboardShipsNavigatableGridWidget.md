---
title: "ScoreboardShipsNavigatableGridWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScoreboardShipsNavigatableGridWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ScoreboardShipsNavigatableGridWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardShipsNavigatableGridWidget : NavigatableGridWidget`
**Base:** `NavigatableGridWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard/ScoreboardShipsNavigatableGridWidget.cs`

## Overview

`ScoreboardShipsNavigatableGridWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ScoreboardShipsNavigatableGridWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RegularHorizontalAlignment` | `public HorizontalAlignment RegularHorizontalAlignment { get; set; }` |
| `OverflowHorizontalAlignment` | `public HorizontalAlignment OverflowHorizontalAlignment { get; set; }` |

## Usage Example

```csharp
var widget = new ScoreboardShipsNavigatableGridWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)