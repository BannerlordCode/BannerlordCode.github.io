<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ButtonWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ButtonWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ButtonWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ButtonWidget.cs`

## Overview

`ButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ButtonType` | `public ButtonType ButtonType { get { return this._buttonType; }` |
| `IsToggle` | `public bool IsToggle { get { return this.ButtonType == ButtonType.Toggle; }` |
| `IsRadio` | `public bool IsRadio { get { return this.ButtonType == ButtonType.Radio; }` |
| `ToggleIndicator` | `public Widget ToggleIndicator { get { return this._toggleIndicator; }` |
| `IsSelected` | `public bool IsSelected { get { return this._isSelected; }` |
| `DominantSelectedState` | `public bool DominantSelectedState { get { return this._dominantSelectedState; }` |

## Usage Example

```csharp
// Typical usage of ButtonWidget (Widget)
// 声明/访问一个 ButtonWidget
var widget = root.GetChild("buttonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)