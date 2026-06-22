<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DisguiseMarkerBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DisguiseMarkerBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DisguiseMarkerBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DisguiseMarkerBrushWidget.cs`

## Overview

`DisguiseMarkerBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public Vec2 Position { get; set; }` |
| `OffenseTypeIdentifier` | `public string OffenseTypeIdentifier { get; set; }` |

## Usage Example

```csharp
// Typical usage of DisguiseMarkerBrushWidget (Widget)
// 声明/访问一个 DisguiseMarkerBrushWidget
var widget = root.GetChild("disguiseMarkerBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)