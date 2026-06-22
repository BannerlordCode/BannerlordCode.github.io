<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ValueComparisonStateChangerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ValueComparisonStateChangerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ValueComparisonStateChangerWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ValueComparisonStateChangerWidget.cs`

## Overview

`ValueComparisonStateChangerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `TargetWidget` | `public Widget TargetWidget { get; set; }` |
| `WatchType` | `public ValueComparisonStateChangerWidget.WatchTypes WatchType { get; set; }` |
| `FirstValueInt` | `public int FirstValueInt { get; set; }` |
| `SecondValueInt` | `public int SecondValueInt { get; set; }` |
| `FirstValueFloat` | `public float FirstValueFloat { get; set; }` |
| `SecondValueFloat` | `public float SecondValueFloat { get; set; }` |
| `TrueState` | `public string TrueState { get; set; }` |
| `FalseState` | `public string FalseState { get; set; }` |

## Usage Example

```csharp
// Typical usage of ValueComparisonStateChangerWidget (Widget)
// 声明/访问一个 ValueComparisonStateChangerWidget
var widget = root.GetChild("valueComparisonStateChangerWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)