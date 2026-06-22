<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleFormationClassBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationClassBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationClassBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationClassBrushWidget.cs`

## Overview

`OrderOfBattleFormationClassBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `FormationClass` | `public int FormationClass { get; set; }` |
| `ErroredColor` | `public Color ErroredColor { get; set; }` |
| `IsErrored` | `public bool IsErrored { get; set; }` |
| `UnsetBrush` | `public Brush UnsetBrush { get; set; }` |
| `InfantryBrush` | `public Brush InfantryBrush { get; set; }` |
| `RangedBrush` | `public Brush RangedBrush { get; set; }` |
| `CavalryBrush` | `public Brush CavalryBrush { get; set; }` |
| `HorseArcherBrush` | `public Brush HorseArcherBrush { get; set; }` |
| `InfantryAndRangedBrush` | `public Brush InfantryAndRangedBrush { get; set; }` |
| `CavalryAndHorseArcherBrush` | `public Brush CavalryAndHorseArcherBrush { get; set; }` |

## Usage Example

```csharp
// Typical usage of OrderOfBattleFormationClassBrushWidget (Widget)
// 声明/访问一个 OrderOfBattleFormationClassBrushWidget
var widget = root.GetChild("orderOfBattleFormationClassBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)