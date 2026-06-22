<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextQueryParentWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextQueryParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Popup
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TextQueryParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Popup/TextQueryParentWidget.cs`

## Overview

`TextQueryParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `TextInputWidget` | `public EditableTextWidget TextInputWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of TextQueryParentWidget (Widget)
// 声明/访问一个 TextQueryParentWidget
var widget = root.GetChild("textQueryParentWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)