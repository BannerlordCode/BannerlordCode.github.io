<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DisguiseMarkerAlternativeBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DisguiseMarkerAlternativeBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DisguiseMarkerAlternativeBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DisguiseMarkerAlternativeBrushWidget.cs`

## Overview

`DisguiseMarkerAlternativeBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `BackgroundGlowWidget` | `public Widget BackgroundGlowWidget { get; set; }` |
| `FrameWidget` | `public Widget FrameWidget { get; set; }` |
| `FillBarWidget` | `public Widget FillBarWidget { get; set; }` |
| `AlarmedHeight` | `public float AlarmedHeight { get; set; }` |
| `DefaultHeight` | `public float DefaultHeight { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `AlarmProgress` | `public int AlarmProgress { get; set; }` |
| `AlarmState` | `public string AlarmState { get; set; }` |
| `OffenseTypeIdentifier` | `public string OffenseTypeIdentifier { get; set; }` |

## Usage Example

```csharp
// Typical usage of DisguiseMarkerAlternativeBrushWidget (Widget)
// 声明/访问一个 DisguiseMarkerAlternativeBrushWidget
var widget = root.GetChild("disguiseMarkerAlternativeBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)