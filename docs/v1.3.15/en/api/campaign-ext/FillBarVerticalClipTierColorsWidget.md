<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FillBarVerticalClipTierColorsWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FillBarVerticalClipTierColorsWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FillBarVerticalClipTierColorsWidget : FillBarVerticalWidget`
**Base:** `FillBarVerticalWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipTierColorsWidget.cs`

## Overview

`FillBarVerticalClipTierColorsWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxedColor` | `public string MaxedColor { get { return this._maxedColor; }` |
| `HighColor` | `public string HighColor { get { return this._highColor; }` |
| `MediumColor` | `public string MediumColor { get { return this._mediumColor; }` |
| `LowColor` | `public string LowColor { get { return this._lowColor; }` |

## Usage Example

```csharp
// Typical usage of FillBarVerticalClipTierColorsWidget (Widget)
// 声明/访问一个 FillBarVerticalClipTierColorsWidget
var widget = root.GetChild("fillBarVerticalClipTierColorsWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)