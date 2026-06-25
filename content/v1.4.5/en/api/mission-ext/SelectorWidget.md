---
title: "SelectorWidget"
description: "Auto-generated class reference for SelectorWidget."
---
# SelectorWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SelectorWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/SelectorWidget.cs`

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

**Purpose:** Invoked when the list changed event is raised.

```csharp
// Obtain an instance of SelectorWidget from the subsystem API first
SelectorWidget selectorWidget = ...;
selectorWidget.OnListChanged(widget);
```

### OnListChanged
`public void OnListChanged(Widget parentWidget, Widget addedWidget)`

**Purpose:** Invoked when the list changed event is raised.

```csharp
// Obtain an instance of SelectorWidget from the subsystem API first
SelectorWidget selectorWidget = ...;
selectorWidget.OnListChanged(parentWidget, addedWidget);
```

### OnSelectionChanged
`public void OnSelectionChanged(Widget widget)`

**Purpose:** Invoked when the selection changed event is raised.

```csharp
// Obtain an instance of SelectorWidget from the subsystem API first
SelectorWidget selectorWidget = ...;
selectorWidget.OnSelectionChanged(widget);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
SelectorWidget widget = ...;
```

## See Also

- [Area Index](../)