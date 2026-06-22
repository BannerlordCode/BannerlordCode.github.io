<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FillBarHorizontalWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FillBarHorizontalWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FillBarHorizontalWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBarHorizontalWidget.cs`

## Overview

`FillBarHorizontalWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDirectionRightward` | `public bool IsDirectionRightward { get { return this._isDirectionRightward; }` |
| `CurrentAmount` | `public int CurrentAmount { get { return (int)this._currentAmount; }` |
| `MaxAmount` | `public int MaxAmount { get { return (int)this._maxAmount; }` |
| `InitialAmount` | `public int InitialAmount { get { return (int)this._initialAmount; }` |
| `MaxAmountAsFloat` | `public float MaxAmountAsFloat { get { return this._maxAmount; }` |
| `CurrentAmountAsFloat` | `public float CurrentAmountAsFloat { get { return this._currentAmount; }` |
| `InitialAmountAsFloat` | `public float InitialAmountAsFloat { get { return this._initialAmount; }` |
| `FillWidget` | `public Widget FillWidget { get { return this._fillWidget; }` |
| `ChangeWidget` | `public Widget ChangeWidget { get { return this._changeWidget; }` |
| `DividerWidget` | `public Widget DividerWidget { get { return this._dividerWidget; }` |
| `ContainerWidget` | `public Widget ContainerWidget { get { return this._containerWidget; }` |

## Usage Example

```csharp
// Typical usage of FillBarHorizontalWidget (Widget)
// 声明/访问一个 FillBarHorizontalWidget
var widget = root.GetChild("fillBarHorizontalWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)