<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AutoClosePopupClosingWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AutoClosePopupClosingWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AutoClosePopupClosingWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/AutoClosePopupClosingWidget.cs`

## Overview

`AutoClosePopupClosingWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Target` | `public Widget Target { get; set; }` |
| `IncludeChildren` | `public bool IncludeChildren { get; set; }` |
| `IncludeTarget` | `public bool IncludeTarget { get; set; }` |

## Key Methods

### ShouldClosePopup
```csharp
public bool ShouldClosePopup()
```

## Usage Example

```csharp
// Typical usage of AutoClosePopupClosingWidget (Widget)
// 声明/访问一个 AutoClosePopupClosingWidget
var widget = root.GetChild("autoClosePopupClosingWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)