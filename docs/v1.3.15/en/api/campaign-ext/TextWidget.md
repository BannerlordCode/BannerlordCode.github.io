<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TextWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextWidget.cs`

## Overview

`TextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `AutoHideIfEmpty` | `public bool AutoHideIfEmpty { get { return this._autoHideIfEmpty; }` |
| `Text` | `public string Text { get { return this._text.Value; }` |
| `IntText` | `public int IntText { get { int num; if (int.TryParse(this._text.Value, out num)) { return num; }` |
| `FloatText` | `public float FloatText { get { float num; if (float.TryParse(this._text.Value, out num)) { return num; }` |
| `CanBreakWords` | `public bool CanBreakWords { get { return this._canBreakWords; }` |

## Usage Example

```csharp
// Typical usage of TextWidget (Widget)
// 声明/访问一个 TextWidget
var widget = root.GetChild("textWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)