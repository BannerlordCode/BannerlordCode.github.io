<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DialogButtonsParentWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DialogButtonsParentWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DialogButtonsParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/DialogButtonsParentWidget.cs`

## Overview

`DialogButtonsParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `CancelClickSound` | `public string CancelClickSound { get; set; }` |
| `ConfirmClickSound` | `public string ConfirmClickSound { get; set; }` |
| `ResetClickSound` | `public string ResetClickSound { get; set; }` |
| `CancelButton` | `public ButtonWidget CancelButton { get { return this._cancelButton; }` |
| `ConfirmButton` | `public ButtonWidget ConfirmButton { get { return this._confirmButton; }` |
| `ResetButton` | `public ButtonWidget ResetButton { get { return this._resetButton; }` |

## Usage Example

```csharp
// Typical usage of DialogButtonsParentWidget (Widget)
// 声明/访问一个 DialogButtonsParentWidget
var widget = root.GetChild("dialogButtonsParentWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)