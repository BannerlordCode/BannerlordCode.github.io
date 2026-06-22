<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapBarGatherArmyBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `InfoBarWidget` | `public MapInfoBarWidget InfoBarWidget { get; set; }` |
| `IsGatherArmyEnabled` | `public bool IsGatherArmyEnabled { get; set; }` |
| `IsGatherArmyVisible` | `public bool IsGatherArmyVisible { get; set; }` |

## Usage Example

```csharp
// Typical usage of MapBarGatherArmyBrushWidget (Widget)
// 声明/访问一个 MapBarGatherArmyBrushWidget
var widget = root.GetChild("mapBarGatherArmyBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)