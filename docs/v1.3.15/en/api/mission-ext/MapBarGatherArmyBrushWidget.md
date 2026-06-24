<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapBarGatherArmyBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapBarGatherArmyBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapBarGatherArmyBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarGatherArmyBrushWidget.cs`

## Overview

`MapBarGatherArmyBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapBarGatherArmyBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `InfoBarWidget` | `public MapInfoBarWidget InfoBarWidget { get; set; }` |
| `IsGatherArmyEnabled` | `public bool IsGatherArmyEnabled { get; set; }` |
| `IsGatherArmyVisible` | `public bool IsGatherArmyVisible { get; set; }` |

## Usage Example

```csharp
var widget = new MapBarGatherArmyBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)