<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AnimatedDropdownWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AnimatedDropdownWidget

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class AnimatedDropdownWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AnimatedDropdownWidget.cs`

## Overview

`AnimatedDropdownWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `AnimatedDropdownWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TextWidget` | `public Widget TextWidget { get; set; }` |
| `ScrollbarWidget` | `public ScrollbarWidget ScrollbarWidget { get; set; }` |
| `Button` | `public ButtonWidget Button { get; set; }` |
| `DropdownContainerWidget` | `public Widget DropdownContainerWidget { get; set; }` |
| `DropdownClipWidget` | `public Widget DropdownClipWidget { get; set; }` |
| `ListPanel` | `public ListPanel ListPanel { get; set; }` |
| `ListPanelValue` | `public int ListPanelValue { get; set; }` |
| `CurrentSelectedIndex` | `public int CurrentSelectedIndex { get; set; }` |
| `UpdateSelectedItem` | `public bool UpdateSelectedItem { get; set; }` |

## Key Methods

### OnButtonClick
`public void OnButtonClick(Widget widget)`

**Purpose:** Called when the `button click` event is raised.

### UpdateButtonText
`public void UpdateButtonText(string text)`

**Purpose:** Updates the state or data of `button text`.

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
var widget = new AnimatedDropdownWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)