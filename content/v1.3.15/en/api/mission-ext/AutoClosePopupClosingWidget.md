---
title: "AutoClosePopupClosingWidget"
description: "Auto-generated class reference for AutoClosePopupClosingWidget."
---
# AutoClosePopupClosingWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AutoClosePopupClosingWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/AutoClosePopupClosingWidget.cs`

## Overview

`AutoClosePopupClosingWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `AutoClosePopupClosingWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Target` | `public Widget Target { get; set; }` |
| `IncludeChildren` | `public bool IncludeChildren { get; set; }` |
| `IncludeTarget` | `public bool IncludeTarget { get; set; }` |

## Key Methods

### ShouldClosePopup
`public bool ShouldClosePopup()`

**Purpose:** **Purpose:** Executes the ShouldClosePopup logic.

```csharp
// Obtain an instance of AutoClosePopupClosingWidget from the subsystem API first
AutoClosePopupClosingWidget autoClosePopupClosingWidget = ...;
var result = autoClosePopupClosingWidget.ShouldClosePopup();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
AutoClosePopupClosingWidget widget = ...;
```

## See Also

- [Area Index](../)