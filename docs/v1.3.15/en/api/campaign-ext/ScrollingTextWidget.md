<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScrollingTextWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScrollingTextWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ScrollingTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/ScrollingTextWidget.cs`

## Overview

`ScrollingTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ScrollOnHoverWidget` | `public Widget ScrollOnHoverWidget { get { return this._scrollOnHoverWidget; }` |
| `IsAutoScrolling` | `public bool IsAutoScrolling { get { return this._isAutoScrolling; }` |
| `ScrollPerTick` | `public float ScrollPerTick { get { return this._scrollPerTick; }` |
| `InbetweenScrollDuration` | `public float InbetweenScrollDuration { get { return this._inbetweenScrollDuration; }` |
| `DefaultTextHorizontalAlignment` | `public TextHorizontalAlignment DefaultTextHorizontalAlignment { get { return this._defaultTextHorizontalAlignment; }` |

## Key Methods

### OnBrushChanged
```csharp
public override void OnBrushChanged()
```

## Usage Example

```csharp
// Typical usage of ScrollingTextWidget (Widget)
// 声明/访问一个 ScrollingTextWidget
var widget = root.GetChild("scrollingTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)