<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AutoHideRichTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AutoHideRichTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AutoHideRichTextWidget : RichTextWidget`
**Base:** `RichTextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/AutoHideRichTextWidget.cs`

## Overview

`AutoHideRichTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `WidgetToHideIfEmpty` | `public Widget WidgetToHideIfEmpty { get; set; }` |

## Usage Example

```csharp
// Typical usage of AutoHideRichTextWidget (Widget)
// 声明/访问一个 AutoHideRichTextWidget
var widget = root.GetChild("autoHideRichTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)