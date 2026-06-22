<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NumericUpDownWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NumericUpDownWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NumericUpDownWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/NumericUpDownWidget.cs`

## Overview

`NumericUpDownWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShowOneAdded` | `public bool ShowOneAdded { get; set; }` |
| `IntValue` | `public int IntValue { get; set; }` |
| `Value` | `public float Value { get; set; }` |
| `MinValue` | `public float MinValue { get; set; }` |
| `MaxValue` | `public float MaxValue { get; set; }` |
| `TextWidget` | `public TextWidget TextWidget { get; set; }` |
| `UpButton` | `public ButtonWidget UpButton { get; set; }` |
| `DownButton` | `public ButtonWidget DownButton { get; set; }` |

## Usage Example

```csharp
// Typical usage of NumericUpDownWidget (Widget)
// 声明/访问一个 NumericUpDownWidget
var widget = root.GetChild("numericUpDownWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)