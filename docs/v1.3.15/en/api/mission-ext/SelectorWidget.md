<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SelectorWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SelectorWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SelectorWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SelectorWidget.cs`

## Overview

`SelectorWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SelectorWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ListPanelValue` | `public int ListPanelValue { get; set; }` |
| `CurrentSelectedIndex` | `public int CurrentSelectedIndex { get; set; }` |
| `Container` | `public Container Container { get; set; }` |

## Key Methods

### OnListChanged
`public void OnListChanged(Widget widget)`

**Purpose:** Called when the `list changed` event is raised.

### OnListChanged
`public void OnListChanged(Widget parentWidget, Widget addedWidget)`

**Purpose:** Called when the `list changed` event is raised.

### OnSelectionChanged
`public void OnSelectionChanged(Widget widget)`

**Purpose:** Called when the `selection changed` event is raised.

## Usage Example

```csharp
var widget = new SelectorWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)