<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BarterTupleItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BarterTupleItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BarterTupleItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterTupleItemButtonWidget.cs`

## Overview

`BarterTupleItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `SliderParentList` | `public ListPanel SliderParentList { get; set; }` |
| `CountText` | `public TextWidget CountText { get; set; }` |
| `IsMultiple` | `public bool IsMultiple { get; set; }` |
| `IsOffered` | `public bool IsOffered { get; set; }` |

## Usage Example

```csharp
// Typical usage of BarterTupleItemButtonWidget (Widget)
// 声明/访问一个 BarterTupleItemButtonWidget
var widget = root.GetChild("barterTupleItemButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)