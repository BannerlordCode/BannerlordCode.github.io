---
title: "AnimatedDropdownWidget"
description: "Auto-generated class reference for AnimatedDropdownWidget."
---
# AnimatedDropdownWidget

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class AnimatedDropdownWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/AnimatedDropdownWidget.cs`

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

**Purpose:** Invoked when the `button click` event is raised.

```csharp
// Obtain an instance of AnimatedDropdownWidget from the subsystem API first
AnimatedDropdownWidget animatedDropdownWidget = ...;
animatedDropdownWidget.OnButtonClick(widget);
```

### UpdateButtonText
`public void UpdateButtonText(string text)`

**Purpose:** Recalculates and stores the latest representation of `button text`.

```csharp
// Obtain an instance of AnimatedDropdownWidget from the subsystem API first
AnimatedDropdownWidget animatedDropdownWidget = ...;
animatedDropdownWidget.UpdateButtonText("example");
```

### OnListChanged
`public void OnListChanged(Widget widget)`

**Purpose:** Invoked when the `list changed` event is raised.

```csharp
// Obtain an instance of AnimatedDropdownWidget from the subsystem API first
AnimatedDropdownWidget animatedDropdownWidget = ...;
animatedDropdownWidget.OnListChanged(widget);
```

### OnListChanged
`public void OnListChanged(Widget parentWidget, Widget addedWidget)`

**Purpose:** Invoked when the `list changed` event is raised.

```csharp
// Obtain an instance of AnimatedDropdownWidget from the subsystem API first
AnimatedDropdownWidget animatedDropdownWidget = ...;
animatedDropdownWidget.OnListChanged(parentWidget, addedWidget);
```

### OnSelectionChanged
`public void OnSelectionChanged(Widget widget)`

**Purpose:** Invoked when the `selection changed` event is raised.

```csharp
// Obtain an instance of AnimatedDropdownWidget from the subsystem API first
AnimatedDropdownWidget animatedDropdownWidget = ...;
animatedDropdownWidget.OnSelectionChanged(widget);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
AnimatedDropdownWidget widget = ...;
```

## See Also

- [Area Index](../)