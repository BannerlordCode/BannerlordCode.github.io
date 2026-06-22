<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RichTextWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RichTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class RichTextWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/RichTextWidget.cs`

## Overview

`RichTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `AutoHideIfEmpty` | `public bool AutoHideIfEmpty { get { return this._autoHideIfEmpty; }` |
| `LinkHoverCursorState` | `public string LinkHoverCursorState { get { return this._linkHoverCursorState; }` |
| `Text` | `public string Text { get { return this._richText.Value; }` |
| `CanBreakWords` | `public bool CanBreakWords { get { return this._canBreakWords; }` |

## Key Methods

### OnBrushChanged
```csharp
public override void OnBrushChanged()
```

## Usage Example

```csharp
// Typical usage of RichTextWidget (Widget)
// 声明/访问一个 RichTextWidget
var widget = root.GetChild("richTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)