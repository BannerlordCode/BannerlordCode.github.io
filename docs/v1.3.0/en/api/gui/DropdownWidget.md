<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DropdownWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DropdownWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DropdownWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/DropdownWidget.cs`

## Overview

`DropdownWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `DropdownWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TextWidget` | `public Widget TextWidget { get; set; }` |
| `DoNotHandleDropdownListPanel` | `public bool DoNotHandleDropdownListPanel { get; set; }` |
| `ScrollablePanel` | `public ScrollablePanel ScrollablePanel { get; set; }` |
| `Button` | `public ButtonWidget Button { get; set; }` |
| `ListPanel` | `public ListPanel ListPanel { get; set; }` |
| `IsOpen` | `public bool IsOpen { get; set; }` |
| `ListPanelValue` | `public int ListPanelValue { get; set; }` |
| `CurrentSelectedIndex` | `public int CurrentSelectedIndex { get; set; }` |

## Key Methods

### OnButtonClick
`public void OnButtonClick(Widget widget)`

**Purpose:** Called when the `button click` event is raised.

### UpdateButtonText
`public void UpdateButtonText(string text)`

**Purpose:** Updates the state or data of `button text`.

### OnListItemAdded
`public void OnListItemAdded(Widget parentWidget, Widget newChild)`

**Purpose:** Called when the `list item added` event is raised.

### OnListItemRemoved
`public void OnListItemRemoved(Widget removedItem, Widget removedChild)`

**Purpose:** Called when the `list item removed` event is raised.

### OnSelectionChanged
`public void OnSelectionChanged(Widget widget)`

**Purpose:** Called when the `selection changed` event is raised.

## Usage Example

```csharp
var widget = new DropdownWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)