<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapSiegePOIBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapSiegePOIBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapSiegePOIBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegePOIBrushWidget.cs`

## Overview

`MapSiegePOIBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Slider` | `public SliderWidget Slider { get; set; }` |
| `ConstructionBrush` | `public Brush ConstructionBrush { get; set; }` |
| `NormalBrush` | `public Brush NormalBrush { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `ConstructionControllerWidget` | `public MapSiegeConstructionControllerWidget ConstructionControllerWidget { get; set; }` |
| `IsPlayerSidePOI` | `public bool IsPlayerSidePOI { get; set; }` |
| `IsInVisibleRange` | `public bool IsInVisibleRange { get; set; }` |
| `IsPOISelected` | `public bool IsPOISelected { get; set; }` |
| `IsConstructing` | `public bool IsConstructing { get; set; }` |
| `MachineType` | `public int MachineType { get; set; }` |
| `QueueIndex` | `public int QueueIndex { get; set; }` |
| `MachineTypeIconWidget` | `public Widget MachineTypeIconWidget { get; set; }` |
| `HammerAnimWidget` | `public BrushWidget HammerAnimWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of MapSiegePOIBrushWidget (Widget)
// 声明/访问一个 MapSiegePOIBrushWidget
var widget = root.GetChild("mapSiegePOIBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)