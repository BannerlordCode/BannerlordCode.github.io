<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChangeAmountTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChangeAmountTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChangeAmountTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ChangeAmountTextWidget.cs`

## Overview

`ChangeAmountTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Amount` | `public int Amount { get; set; }` |
| `UseParentheses` | `public bool UseParentheses { get; set; }` |
| `ShouldBeVisible` | `public bool ShouldBeVisible { get; set; }` |
| `NegativeBrushName` | `public string NegativeBrushName { get; set; }` |
| `PositiveBrushName` | `public string PositiveBrushName { get; set; }` |

## Usage Example

```csharp
// Typical usage of ChangeAmountTextWidget (Widget)
// 声明/访问一个 ChangeAmountTextWidget
var widget = root.GetChild("changeAmountTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)