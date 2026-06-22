<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ListPanelDropdownWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ListPanelDropdownWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ListPanelDropdownWidget : DropdownWidget`
**Base:** `DropdownWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ListPanelDropdownWidget.cs`

## Overview

`ListPanelDropdownWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ListPanelContainer` | `public Widget ListPanelContainer { get; set; }` |

## Usage Example

```csharp
// Typical usage of ListPanelDropdownWidget (Widget)
// 声明/访问一个 ListPanelDropdownWidget
var widget = root.GetChild("listPanelDropdownWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)