<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleFormationMarkerBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationMarkerBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationMarkerBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationMarkerBrushWidget.cs`

## Overview

`OrderOfBattleFormationMarkerBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public Vec2 Position { get; set; }` |
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |

## Usage Example

```csharp
// Typical usage of OrderOfBattleFormationMarkerBrushWidget (Widget)
// 声明/访问一个 OrderOfBattleFormationMarkerBrushWidget
var widget = root.GetChild("orderOfBattleFormationMarkerBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)