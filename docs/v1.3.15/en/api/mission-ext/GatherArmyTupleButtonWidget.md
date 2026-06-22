<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GatherArmyTupleButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GatherArmyTupleButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GatherArmyTupleButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GatherArmy/GatherArmyTupleButtonWidget.cs`

## Overview

`GatherArmyTupleButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInCart` | `public bool IsInCart { get; set; }` |
| `IsEligible` | `public bool IsEligible { get; set; }` |
| `IsTransferDisabled` | `public bool IsTransferDisabled { get; set; }` |

## Usage Example

```csharp
// Typical usage of GatherArmyTupleButtonWidget (Widget)
// 声明/访问一个 GatherArmyTupleButtonWidget
var widget = root.GetChild("gatherArmyTupleButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)