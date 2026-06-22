<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FloatComparedStateChangerTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FloatComparedStateChangerTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FloatComparedStateChangerTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/FloatComparedStateChangerTextWidget.cs`

## Overview

`FloatComparedStateChangerTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ComparisonType` | `public FloatComparedStateChangerTextWidget.ComparisonTypes ComparisonType { get; set; }` |
| `FirstValue` | `public float FirstValue { get; set; }` |
| `SecondValue` | `public float SecondValue { get; set; }` |
| `TrueState` | `public string TrueState { get; set; }` |
| `FalseState` | `public string FalseState { get; set; }` |

## Usage Example

```csharp
// Typical usage of FloatComparedStateChangerTextWidget (Widget)
// 声明/访问一个 FloatComparedStateChangerTextWidget
var widget = root.GetChild("floatComparedStateChangerTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)