---
title: "BoostCohesionPopupWidget"
description: "Auto-generated class reference for BoostCohesionPopupWidget."
---
# BoostCohesionPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoostCohesionPopupWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy/BoostCohesionPopupWidget.cs`

## Overview

`BoostCohesionPopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `BoostCohesionPopupWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClosePopupButton` | `public ButtonWidget ClosePopupButton { get; set; }` |

## Key Methods

### ClosePopup
`public void ClosePopup(Widget widget)`

**Purpose:** Closes the resource or UI associated with popup.

```csharp
// Obtain an instance of BoostCohesionPopupWidget from the subsystem API first
BoostCohesionPopupWidget boostCohesionPopupWidget = ...;
boostCohesionPopupWidget.ClosePopup(widget);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
BoostCohesionPopupWidget widget = ...;
```

## See Also

- [Area Index](../)