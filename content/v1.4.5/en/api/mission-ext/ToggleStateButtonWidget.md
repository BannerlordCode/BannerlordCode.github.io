---
title: "ToggleStateButtonWidget"
description: "Auto-generated class reference for ToggleStateButtonWidget."
---
# ToggleStateButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ToggleStateButtonWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ToggleStateButtonWidget.cs`

## Overview

`ToggleStateButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ToggleStateButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `WidgetToClose` | `public Widget WidgetToClose { get; set; }` |
| `AllowSwitchOff` | `public bool AllowSwitchOff { get; set; }` |
| `NotifyParentForSelection` | `public bool NotifyParentForSelection { get; set; }` |

## Key Methods

### ToggleStateButtonWidget
`public class ToggleStateButtonWidget(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ToggleStateButtonWidget from the subsystem API first
ToggleStateButtonWidget toggleStateButtonWidget = ...;
var result = toggleStateButtonWidget.ToggleStateButtonWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ToggleStateButtonWidget widget = ...;
```

## See Also

- [Area Index](../)