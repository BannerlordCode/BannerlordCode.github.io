---
title: "DropdownWidget"
description: "Auto-generated class reference for DropdownWidget."
---
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

**Purpose:** Invoked when the `button click` event is raised.

```csharp
// Obtain an instance of DropdownWidget from the subsystem API first
DropdownWidget dropdownWidget = ...;
dropdownWidget.OnButtonClick(widget);
```

### UpdateButtonText
`public void UpdateButtonText(string text)`

**Purpose:** Recalculates and stores the latest representation of `button text`.

```csharp
// Obtain an instance of DropdownWidget from the subsystem API first
DropdownWidget dropdownWidget = ...;
dropdownWidget.UpdateButtonText("example");
```

### OnListItemAdded
`public void OnListItemAdded(Widget parentWidget, Widget newChild)`

**Purpose:** Invoked when the `list item added` event is raised.

```csharp
// Obtain an instance of DropdownWidget from the subsystem API first
DropdownWidget dropdownWidget = ...;
dropdownWidget.OnListItemAdded(parentWidget, newChild);
```

### OnListItemRemoved
`public void OnListItemRemoved(Widget removedItem, Widget removedChild)`

**Purpose:** Invoked when the `list item removed` event is raised.

```csharp
// Obtain an instance of DropdownWidget from the subsystem API first
DropdownWidget dropdownWidget = ...;
dropdownWidget.OnListItemRemoved(removedItem, removedChild);
```

### OnSelectionChanged
`public void OnSelectionChanged(Widget widget)`

**Purpose:** Invoked when the `selection changed` event is raised.

```csharp
// Obtain an instance of DropdownWidget from the subsystem API first
DropdownWidget dropdownWidget = ...;
dropdownWidget.OnSelectionChanged(widget);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
DropdownWidget widget = ...;
```

## See Also

- [Area Index](../)