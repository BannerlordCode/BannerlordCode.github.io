<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoostItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BoostItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoostItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GatherArmy/BoostItemButtonWidget.cs`

## Overview

`BoostItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ParentPopupWidget` | `public BoostCohesionPopupWidget ParentPopupWidget { get; }` |
| `BoostCurrencyType` | `public int BoostCurrencyType { get; set; }` |
| `BoostCurrencyIconWidget` | `public Widget BoostCurrencyIconWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of BoostItemButtonWidget (Widget)
// 声明/访问一个 BoostItemButtonWidget
var widget = root.GetChild("boostItemButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)