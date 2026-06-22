<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleFormationFilterVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationFilterVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationFilterVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationFilterVisualBrushWidget.cs`

## Overview

`OrderOfBattleFormationFilterVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `FormationFilter` | `public int FormationFilter { get; set; }` |
| `UnsetBrush` | `public Brush UnsetBrush { get; set; }` |
| `SpearBrush` | `public Brush SpearBrush { get; set; }` |
| `ShieldBrush` | `public Brush ShieldBrush { get; set; }` |
| `ThrownBrush` | `public Brush ThrownBrush { get; set; }` |
| `HeavyBrush` | `public Brush HeavyBrush { get; set; }` |
| `HighTierBrush` | `public Brush HighTierBrush { get; set; }` |
| `LowTierBrush` | `public Brush LowTierBrush { get; set; }` |

## Usage Example

```csharp
// Typical usage of OrderOfBattleFormationFilterVisualBrushWidget (Widget)
// 声明/访问一个 OrderOfBattleFormationFilterVisualBrushWidget
var widget = root.GetChild("orderOfBattleFormationFilterVisualBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)