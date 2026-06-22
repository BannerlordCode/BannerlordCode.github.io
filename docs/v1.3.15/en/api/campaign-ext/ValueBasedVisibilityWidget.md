<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ValueBasedVisibilityWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ValueBasedVisibilityWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ValueBasedVisibilityWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/ValueBasedVisibilityWidget.cs`

## Overview

`ValueBasedVisibilityWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `WatchType` | `public ValueBasedVisibilityWidget.WatchTypes WatchType { get { return this._watchType; }` |
| `IndexToWatch` | `public int IndexToWatch { get { return (int)this.IndexToWatchFloat; }` |
| `IndexToWatchFloat` | `public float IndexToWatchFloat { get { return this._indexToWatchFloat; }` |
| `IndexToBeVisible` | `public int IndexToBeVisible { get { return (int)this.IndexToBeVisibleFloat; }` |
| `IndexToBeVisibleFloat` | `public float IndexToBeVisibleFloat { get { return this._indexToBeVisibleFloat; }` |

## Usage Example

```csharp
// Typical usage of ValueBasedVisibilityWidget (Widget)
// 声明/访问一个 ValueBasedVisibilityWidget
var widget = root.GetChild("valueBasedVisibilityWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)