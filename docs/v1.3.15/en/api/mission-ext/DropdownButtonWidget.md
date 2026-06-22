<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DropdownButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DropdownButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DropdownButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/DropdownButtonWidget.cs`

## Overview

`DropdownButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `DisplayedList` | `public Widget DisplayedList { get; set; }` |

## Usage Example

```csharp
// Typical usage of DropdownButtonWidget (Widget)
// 声明/访问一个 DropdownButtonWidget
var widget = root.GetChild("dropdownButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)