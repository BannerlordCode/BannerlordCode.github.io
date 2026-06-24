<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeEngineVisualWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeEngineVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeEngineVisualWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker/SiegeEngineVisualWidget.cs`

## Overview

`SiegeEngineVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SiegeEngineVisualWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `EngineID` | `public string EngineID { get; set; }` |
| `OutlineWidget` | `public Widget OutlineWidget { get; set; }` |
| `IconWidget` | `public Widget IconWidget { get; set; }` |

## Usage Example

```csharp
var widget = new SiegeEngineVisualWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)