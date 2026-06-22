<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleFormationClassLockBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationClassLockBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationClassLockBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationClassLockBrushWidget.cs`

## Overview

`OrderOfBattleFormationClassLockBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `LockedBrush` | `public Brush LockedBrush { get; set; }` |
| `UnlockedBrush` | `public Brush UnlockedBrush { get; set; }` |

## Usage Example

```csharp
// Typical usage of OrderOfBattleFormationClassLockBrushWidget (Widget)
// 声明/访问一个 OrderOfBattleFormationClassLockBrushWidget
var widget = root.GetChild("orderOfBattleFormationClassLockBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)