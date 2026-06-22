<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleFormationClassContainerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationClassContainerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationClassContainerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationClassContainerWidget.cs`

## Overview

`OrderOfBattleFormationClassContainerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `WeightSlider` | `public SliderWidget WeightSlider { get; set; }` |

## Usage Example

```csharp
// Typical usage of OrderOfBattleFormationClassContainerWidget (Widget)
// 声明/访问一个 OrderOfBattleFormationClassContainerWidget
var widget = root.GetChild("orderOfBattleFormationClassContainerWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)