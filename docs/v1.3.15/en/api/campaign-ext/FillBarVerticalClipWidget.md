<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FillBarVerticalClipWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FillBarVerticalClipWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FillBarVerticalClipWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipWidget.cs`

## Overview

`FillBarVerticalClipWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDirectionUpward` | `public bool IsDirectionUpward { get { return this._isDirectionUpward; }` |
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
| `ClipWidget` | `public Widget ClipWidget { get { return this._clipWidget; }` |

## Usage Example

```csharp
// Typical usage of FillBarVerticalClipWidget (Widget)
// 声明/访问一个 FillBarVerticalClipWidget
var widget = root.GetChild("fillBarVerticalClipWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)