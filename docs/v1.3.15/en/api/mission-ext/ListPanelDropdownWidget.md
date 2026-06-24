<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ListPanelDropdownWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `ListPanelDropdownWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ListPanelContainer` | `public Widget ListPanelContainer { get; set; }` |

## Usage Example

```csharp
var widget = new ListPanelDropdownWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)