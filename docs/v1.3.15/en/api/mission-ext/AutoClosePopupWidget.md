<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AutoClosePopupWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AutoClosePopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AutoClosePopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/AutoClosePopupWidget.cs`

## Overview

`AutoClosePopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `PopupParentWidget` | `public Widget PopupParentWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of AutoClosePopupWidget (Widget)
// 声明/访问一个 AutoClosePopupWidget
var widget = root.GetChild("autoClosePopupWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)