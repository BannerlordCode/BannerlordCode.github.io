<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FillBarWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FillBarWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FillBarWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBarWidget.cs`

## Overview

`FillBarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentAmount` | `public int CurrentAmount { get { return (int)this._currentAmount; }` |
| `MaxAmount` | `public int MaxAmount { get { return (int)this._maxAmount; }` |
| `InitialAmount` | `public int InitialAmount { get { return (int)this._initialAmount; }` |
| `MaxAmountAsFloat` | `public float MaxAmountAsFloat { get { return this._maxAmount; }` |
| `CurrentAmountAsFloat` | `public float CurrentAmountAsFloat { get { return this._currentAmount; }` |
| `InitialAmountAsFloat` | `public float InitialAmountAsFloat { get { return this._initialAmount; }` |
| `CompletelyFillChange` | `public bool CompletelyFillChange { get { return this._completelyFillChange; }` |
| `ShowNegativeChange` | `public bool ShowNegativeChange { get { return this._showNegativeChange; }` |
| `CustomChangeColor` | `public bool CustomChangeColor { get { return this._customChangeColor; }` |
| `FillWidget` | `public Widget FillWidget { get { return this._fillWidget; }` |
| `ChangeWidget` | `public Widget ChangeWidget { get { return this._changeWidget; }` |
| `DividerWidget` | `public Widget DividerWidget { get { return this._dividerWidget; }` |

## Usage Example

```csharp
// Typical usage of FillBarWidget (Widget)
// 声明/访问一个 FillBarWidget
var widget = root.GetChild("fillBarWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)